const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/arrival-CKezWjuD.js","assets/bank-CCRVHnGB.js","assets/econ-Deg9OsSu.js","assets/db-BH8DPWPJ.js","assets/jouster-B1JpTUK7.js","assets/joust-2BfEs9QO.js","assets/player-CqzJShkt.js","assets/meadow-DQnD2Hmd.js","assets/tex-hero-D9FSdSdV.js","assets/color-DDSg_o2D.js","assets/tex-meadow-CQRPL3Pn.js","assets/tex-sky-H7hQEGu6.js","assets/tex-soil-6tL0S4Gb.js","assets/tileset-ground-dAb9Cutk.js","assets/ui-CTWhMYA8.js","assets/bet-BNrn4fvI.js","assets/modal-CPw2EEYX.js"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();const Gd="modulepreload",Wd=function(i){return"/realm/play/"+i},$c={},Ne=function(e,t,n){let s=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),o=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));s=Promise.allSettled(t.map(c=>{if(c=Wd(c),c in $c)return;$c[c]=!0;const l=c.endsWith(".css"),f=l?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${f}`))return;const h=document.createElement("link");if(h.rel=l?"stylesheet":Gd,l||(h.as="script"),h.crossOrigin="",h.href=c,o&&h.setAttribute("nonce",o),document.head.appendChild(h),l)return new Promise((d,p)=>{h.addEventListener("load",d),h.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${c}`)))})}))}function r(a){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=a,window.dispatchEvent(o),!o.defaultPrevented)throw a}return s.then(a=>{for(const o of a||[])o.status==="rejected"&&r(o.reason);return e().catch(r)})},qd=`# name: the game's name: fill it once you know what this is. description: one line for the box art.
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
`,jd=`atmosphere:\r
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
`,Xd=`# spawn-scene v2 yaml objects\r
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
`,$d=`# spawn-scene v2 yaml x0z0\r
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
`,Kd=`# The web version's own layer over the copied Spawn world. world/ stays an exact copy (npm run sync); what the web\r
# version does differently lives here, and ?spawn in the URL shows the world without it.\r
#\r
# 16/10/2026, Rafael:\r
# - "a grama e a terra vamos ter que usar o que voce criou pro site": the grass bank and the dirt are the site's joust\r
#   scene (tools/web_ground.py cuts them from his background, 87 px a metre), in place of the meadow strips, the soil\r
#   strip and the drawn sand. The sand tilemap keeps its colliders; it is just not drawn.\r
# - sounds: "Lança: 1 · Elmo: — · Música: 17 / lança batendo sempre mesmo som, sem ter pro elmo".\r
\r
remove: [meadow-back, meadow-mid, meadow-front, ground-soil]\r
\r
terrain:\r
  draw: false\r
\r
add:\r
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
`,rc=Symbol.for("yaml.alias"),ol=Symbol.for("yaml.document"),Mi=Symbol.for("yaml.map"),Lf=Symbol.for("yaml.pair"),Gn=Symbol.for("yaml.scalar"),qs=Symbol.for("yaml.seq"),Mn=Symbol.for("yaml.node.type"),Ji=i=>!!i&&typeof i=="object"&&i[Mn]===rc,Zi=i=>!!i&&typeof i=="object"&&i[Mn]===ol,js=i=>!!i&&typeof i=="object"&&i[Mn]===Mi,St=i=>!!i&&typeof i=="object"&&i[Mn]===Lf,xt=i=>!!i&&typeof i=="object"&&i[Mn]===Gn,Xs=i=>!!i&&typeof i=="object"&&i[Mn]===qs;function Tt(i){if(i&&typeof i=="object")switch(i[Mn]){case Mi:case qs:return!0}return!1}function At(i){if(i&&typeof i=="object")switch(i[Mn]){case rc:case Mi:case Gn:case qs:return!0}return!1}const If=i=>(xt(i)||Tt(i))&&!!i.anchor,on=Symbol("break visit"),Df=Symbol("skip children"),Vn=Symbol("remove node");function Qi(i,e){const t=Nf(e);Zi(i)?Es(null,i.contents,t,Object.freeze([i]))===Vn&&(i.contents=null):Es(null,i,t,Object.freeze([]))}Qi.BREAK=on;Qi.SKIP=Df;Qi.REMOVE=Vn;function Es(i,e,t,n){const s=Of(i,e,t,n);if(At(s)||St(s))return Uf(i,n,s),Es(i,s,t,n);if(typeof s!="symbol"){if(Tt(e)){n=Object.freeze(n.concat(e));for(let r=0;r<e.items.length;++r){const a=Es(r,e.items[r],t,n);if(typeof a=="number")r=a-1;else{if(a===on)return on;a===Vn&&(e.items.splice(r,1),r-=1)}}}else if(St(e)){n=Object.freeze(n.concat(e));const r=Es("key",e.key,t,n);if(r===on)return on;r===Vn&&(e.key=null);const a=Es("value",e.value,t,n);if(a===on)return on;a===Vn&&(e.value=null)}}return s}async function qa(i,e){const t=Nf(e);Zi(i)?await Ts(null,i.contents,t,Object.freeze([i]))===Vn&&(i.contents=null):await Ts(null,i,t,Object.freeze([]))}qa.BREAK=on;qa.SKIP=Df;qa.REMOVE=Vn;async function Ts(i,e,t,n){const s=await Of(i,e,t,n);if(At(s)||St(s))return Uf(i,n,s),Ts(i,s,t,n);if(typeof s!="symbol"){if(Tt(e)){n=Object.freeze(n.concat(e));for(let r=0;r<e.items.length;++r){const a=await Ts(r,e.items[r],t,n);if(typeof a=="number")r=a-1;else{if(a===on)return on;a===Vn&&(e.items.splice(r,1),r-=1)}}}else if(St(e)){n=Object.freeze(n.concat(e));const r=await Ts("key",e.key,t,n);if(r===on)return on;r===Vn&&(e.key=null);const a=await Ts("value",e.value,t,n);if(a===on)return on;a===Vn&&(e.value=null)}}return s}function Nf(i){return typeof i=="object"&&(i.Collection||i.Node||i.Value)?Object.assign({Alias:i.Node,Map:i.Node,Scalar:i.Node,Seq:i.Node},i.Value&&{Map:i.Value,Scalar:i.Value,Seq:i.Value},i.Collection&&{Map:i.Collection,Seq:i.Collection},i):i}function Of(i,e,t,n){var s,r,a,o,c;if(typeof t=="function")return t(i,e,n);if(js(e))return(s=t.Map)==null?void 0:s.call(t,i,e,n);if(Xs(e))return(r=t.Seq)==null?void 0:r.call(t,i,e,n);if(St(e))return(a=t.Pair)==null?void 0:a.call(t,i,e,n);if(xt(e))return(o=t.Scalar)==null?void 0:o.call(t,i,e,n);if(Ji(e))return(c=t.Alias)==null?void 0:c.call(t,i,e,n)}function Uf(i,e,t){const n=e[e.length-1];if(Tt(n))n.items[i]=t;else if(St(n))i==="key"?n.key=t:n.value=t;else if(Zi(n))n.contents=t;else{const s=Ji(n)?"alias":"scalar";throw new Error(`Cannot replace node with ${s} parent`)}}const Yd={"!":"%21",",":"%2C","[":"%5B","]":"%5D","{":"%7B","}":"%7D"},Jd=i=>i.replace(/[!,[\]{}]/g,e=>Yd[e]);class tn{constructor(e,t){this.docStart=null,this.docEnd=!1,this.yaml=Object.assign({},tn.defaultYaml,e),this.tags=Object.assign({},tn.defaultTags,t)}clone(){const e=new tn(this.yaml,this.tags);return e.docStart=this.docStart,e}atDocument(){const e=new tn(this.yaml,this.tags);switch(this.yaml.version){case"1.1":this.atNextDocument=!0;break;case"1.2":this.atNextDocument=!1,this.yaml={explicit:tn.defaultYaml.explicit,version:"1.2"},this.tags=Object.assign({},tn.defaultTags);break}return e}add(e,t){this.atNextDocument&&(this.yaml={explicit:tn.defaultYaml.explicit,version:"1.1"},this.tags=Object.assign({},tn.defaultTags),this.atNextDocument=!1);const n=e.trim().split(/[ \t]+/),s=n.shift();switch(s){case"%TAG":{if(n.length!==2&&(t(0,"%TAG directive should contain exactly two parts"),n.length<2))return!1;const[r,a]=n;return this.tags[r]=a,!0}case"%YAML":{if(this.yaml.explicit=!0,n.length!==1)return t(0,"%YAML directive should contain exactly one part"),!1;const[r]=n;if(r==="1.1"||r==="1.2")return this.yaml.version=r,!0;{const a=/^\d+\.\d+$/.test(r);return t(6,`Unsupported YAML version ${r}`,a),!1}}default:return t(0,`Unknown directive ${s}`,!0),!1}}tagName(e,t){if(e==="!")return"!";if(e[0]!=="!")return t(`Not a valid tag: ${e}`),null;if(e[1]==="<"){const a=e.slice(2,-1);return a==="!"||a==="!!"?(t(`Verbatim tags aren't resolved, so ${e} is invalid.`),null):(e[e.length-1]!==">"&&t("Verbatim tags must end with a >"),a)}const[,n,s]=e.match(/^(.*!)([^!]*)$/s);s||t(`The ${e} tag has no suffix`);const r=this.tags[n];if(r)try{return r+decodeURIComponent(s)}catch(a){return t(String(a)),null}return n==="!"?e:(t(`Could not resolve tag: ${e}`),null)}tagString(e){for(const[t,n]of Object.entries(this.tags))if(e.startsWith(n))return t+Jd(e.substring(n.length));return e[0]==="!"?e:`!<${e}>`}toString(e){const t=this.yaml.explicit?[`%YAML ${this.yaml.version||"1.2"}`]:[],n=Object.entries(this.tags);let s;if(e&&n.length>0&&At(e.contents)){const r={};Qi(e.contents,(a,o)=>{At(o)&&o.tag&&(r[o.tag]=!0)}),s=Object.keys(r)}else s=[];for(const[r,a]of n)r==="!!"&&a==="tag:yaml.org,2002:"||(!e||s.some(o=>o.startsWith(a)))&&t.push(`%TAG ${r} ${a}`);return t.join(`
`)}}tn.defaultYaml={explicit:!1,version:"1.2"};tn.defaultTags={"!!":"tag:yaml.org,2002:"};function kf(i){if(/[\x00-\x19\s,[\]{}]/.test(i)){const t=`Anchor must not contain whitespace or control characters: ${JSON.stringify(i)}`;throw new Error(t)}return!0}function Ff(i){const e=new Set;return Qi(i,{Value(t,n){n.anchor&&e.add(n.anchor)}}),e}function Bf(i,e){for(let t=1;;++t){const n=`${i}${t}`;if(!e.has(n))return n}}function Zd(i,e){const t=[],n=new Map;let s=null;return{onAnchor:r=>{t.push(r),s??(s=Ff(i));const a=Bf(e,s);return s.add(a),a},setAnchors:()=>{for(const r of t){const a=n.get(r);if(typeof a=="object"&&a.anchor&&(xt(a.node)||Tt(a.node)))a.node.anchor=a.anchor;else{const o=new Error("Failed to resolve repeated object (this should not happen)");throw o.source=r,o}}},sourceObjects:n}}function As(i,e,t,n){if(n&&typeof n=="object")if(Array.isArray(n))for(let s=0,r=n.length;s<r;++s){const a=n[s],o=As(i,n,String(s),a);o===void 0?delete n[s]:o!==a&&(n[s]=o)}else if(n instanceof Map)for(const s of Array.from(n.keys())){const r=n.get(s),a=As(i,n,s,r);a===void 0?n.delete(s):a!==r&&n.set(s,a)}else if(n instanceof Set)for(const s of Array.from(n)){const r=As(i,n,s,s);r===void 0?n.delete(s):r!==s&&(n.delete(s),n.add(r))}else for(const[s,r]of Object.entries(n)){const a=As(i,n,s,r);a===void 0?delete n[s]:a!==r&&(n[s]=a)}return i.call(e,t,n)}function bn(i,e,t){if(Array.isArray(i))return i.map((n,s)=>bn(n,String(s),t));if(i&&typeof i.toJSON=="function"){if(!t||!If(i))return i.toJSON(e,t);const n={aliasCount:0,count:1,res:void 0};t.anchors.set(i,n),t.onCreate=r=>{n.res=r,delete t.onCreate};const s=i.toJSON(e,t);return t.onCreate&&t.onCreate(s),s}return typeof i=="bigint"&&!(t!=null&&t.keep)?Number(i):i}class ac{constructor(e){Object.defineProperty(this,Mn,{value:e})}clone(){const e=Object.create(Object.getPrototypeOf(this),Object.getOwnPropertyDescriptors(this));return this.range&&(e.range=this.range.slice()),e}toJS(e,{mapAsMap:t,maxAliasCount:n,onAnchor:s,reviver:r}={}){if(!Zi(e))throw new TypeError("A document argument is required");const a={anchors:new Map,doc:e,keep:!0,mapAsMap:t===!0,mapKeyWarned:!1,maxAliasCount:typeof n=="number"?n:100},o=bn(this,"",a);if(typeof s=="function")for(const{count:c,res:l}of a.anchors.values())s(l,c);return typeof r=="function"?As(r,{"":o},"",o):o}}class ja extends ac{constructor(e){super(rc),this.source=e,Object.defineProperty(this,"tag",{set(){throw new Error("Alias nodes cannot have tags")}})}resolve(e,t){if((t==null?void 0:t.maxAliasCount)===0)throw new ReferenceError("Alias resolution is disabled");let n;t!=null&&t.aliasResolveCache?n=t.aliasResolveCache:(n=[],Qi(e,{Node:(r,a)=>{(Ji(a)||If(a))&&n.push(a)}}),t&&(t.aliasResolveCache=n));let s;for(const r of n){if(r===this)break;r.anchor===this.source&&(s=r)}if(s&&t){const{anchors:r,doc:a,maxAliasCount:o}=t;let c=r.get(s);if(c||(bn(s,null,t),c=r.get(s)),(c==null?void 0:c.res)===void 0){const l="This should not happen: Alias anchor was not resolved?";throw new ReferenceError(l)}if(o>=0&&(c.count+=1,c.aliasCount===0&&(c.aliasCount=wa(a,s,r)),c.count*c.aliasCount>o)){const l="Excessive alias count indicates a resource exhaustion attack";throw new ReferenceError(l)}}return s}toJSON(e,t){if(!t)return{source:this.source};const n=this.resolve(t.doc,t);if(!n){const s=`Unresolved alias (the anchor must be set before the alias): ${this.source}`;throw new ReferenceError(s)}return t.anchors.get(n).res}toString(e,t,n){const s=`*${this.source}`;if(e){if(kf(this.source),e.options.verifyAliasOrder&&!e.anchors.has(this.source)){const r=`Unresolved alias (the anchor must be set before the alias): ${this.source}`;throw new Error(r)}if(e.implicitKey)return`${s} `}return s}}function wa(i,e,t){if(Ji(e)){const n=e.resolve(i),s=t&&n&&t.get(n);return s?s.count*s.aliasCount:0}else if(Tt(e)){let n=0;for(const s of e.items){const r=wa(i,s,t);r>n&&(n=r)}return n}else if(St(e)){const n=wa(i,e.key,t),s=wa(i,e.value,t);return Math.max(n,s)}return 1}const zf=i=>!i||typeof i!="function"&&typeof i!="object";class Ze extends ac{constructor(e){super(Gn),this.value=e}toJSON(e,t){return t!=null&&t.keep?this.value:bn(this.value,e,t)}toString(){return String(this.value)}}Ze.BLOCK_FOLDED="BLOCK_FOLDED";Ze.BLOCK_LITERAL="BLOCK_LITERAL";Ze.PLAIN="PLAIN";Ze.QUOTE_DOUBLE="QUOTE_DOUBLE";Ze.QUOTE_SINGLE="QUOTE_SINGLE";const Qd="tag:yaml.org,2002:";function ep(i,e,t){if(e){const n=t.filter(r=>r.tag===e),s=n.find(r=>!r.format)??n[0];if(!s)throw new Error(`Tag ${e} not found`);return s}return t.find(n=>{var s;return((s=n.identify)==null?void 0:s.call(n,i))&&!n.format})}function vr(i,e,t){var h,d,p;if(Zi(i)&&(i=i.contents),At(i))return i;if(St(i)){const x=(d=(h=t.schema[Mi]).createNode)==null?void 0:d.call(h,t.schema,null,t);return x.items.push(i),x}(i instanceof String||i instanceof Number||i instanceof Boolean||typeof BigInt<"u"&&i instanceof BigInt)&&(i=i.valueOf());const{aliasDuplicateObjects:n,onAnchor:s,onTagObj:r,schema:a,sourceObjects:o}=t;let c;if(n&&i&&typeof i=="object"){if(c=o.get(i),c)return c.anchor??(c.anchor=s(i)),new ja(c.anchor);c={anchor:null,node:null},o.set(i,c)}e!=null&&e.startsWith("!!")&&(e=Qd+e.slice(2));let l=ep(i,e,a.tags);if(!l){if(i&&typeof i.toJSON=="function"&&(i=i.toJSON()),!i||typeof i!="object"){const x=new Ze(i);return c&&(c.node=x),x}l=i instanceof Map?a[Mi]:Symbol.iterator in Object(i)?a[qs]:a[Mi]}r&&(r(l),delete t.onTagObj);const f=l!=null&&l.createNode?l.createNode(t.schema,i,t):typeof((p=l==null?void 0:l.nodeClass)==null?void 0:p.from)=="function"?l.nodeClass.from(t.schema,i,t):new Ze(i);return e?f.tag=e:l.default||(f.tag=l.tag),c&&(c.node=f),f}function Oa(i,e,t){let n=t;for(let s=e.length-1;s>=0;--s){const r=e[s];if(typeof r=="number"&&Number.isInteger(r)&&r>=0){const a=[];a[r]=n,n=a}else n=new Map([[r,n]])}return vr(n,void 0,{aliasDuplicateObjects:!1,keepUndefined:!1,onAnchor:()=>{throw new Error("This should not happen, please report a bug.")},schema:i,sourceObjects:new Map})}const dr=i=>i==null||typeof i=="object"&&!!i[Symbol.iterator]().next().done;class Hf extends ac{constructor(e,t){super(e),Object.defineProperty(this,"schema",{value:t,configurable:!0,enumerable:!1,writable:!0})}clone(e){const t=Object.create(Object.getPrototypeOf(this),Object.getOwnPropertyDescriptors(this));return e&&(t.schema=e),t.items=t.items.map(n=>At(n)||St(n)?n.clone(e):n),this.range&&(t.range=this.range.slice()),t}addIn(e,t){if(dr(e))this.add(t);else{const[n,...s]=e,r=this.get(n,!0);if(Tt(r))r.addIn(s,t);else if(r===void 0&&this.schema)this.set(n,Oa(this.schema,s,t));else throw new Error(`Expected YAML collection at ${n}. Remaining path: ${s}`)}}deleteIn(e){const[t,...n]=e;if(n.length===0)return this.delete(t);const s=this.get(t,!0);if(Tt(s))return s.deleteIn(n);throw new Error(`Expected YAML collection at ${t}. Remaining path: ${n}`)}getIn(e,t){const[n,...s]=e,r=this.get(n,!0);return s.length===0?!t&&xt(r)?r.value:r:Tt(r)?r.getIn(s,t):void 0}hasAllNullValues(e){return this.items.every(t=>{if(!St(t))return!1;const n=t.value;return n==null||e&&xt(n)&&n.value==null&&!n.commentBefore&&!n.comment&&!n.tag})}hasIn(e){const[t,...n]=e;if(n.length===0)return this.has(t);const s=this.get(t,!0);return Tt(s)?s.hasIn(n):!1}setIn(e,t){const[n,...s]=e;if(s.length===0)this.set(n,t);else{const r=this.get(n,!0);if(Tt(r))r.setIn(s,t);else if(r===void 0&&this.schema)this.set(n,Oa(this.schema,s,t));else throw new Error(`Expected YAML collection at ${n}. Remaining path: ${s}`)}}}const tp=i=>i.replace(/^(?!$)(?: $)?/gm,"#");function ti(i,e){return/^\n+$/.test(i)?i.substring(1):e?i.replace(/^(?! *$)/gm,e):i}const Gi=(i,e,t)=>i.endsWith(`
`)?ti(t,e):t.includes(`
`)?`
`+ti(t,e):(i.endsWith(" ")?"":" ")+t,Vf="flow",ll="block",Ma="quoted";function Xa(i,e,t="flow",{indentAtStart:n,lineWidth:s=80,minContentWidth:r=20,onFold:a,onOverflow:o}={}){if(!s||s<0)return i;s<r&&(r=0);const c=Math.max(1+r,1+s-e.length);if(i.length<=c)return i;const l=[],f={};let h=s-e.length;typeof n=="number"&&(n>s-Math.max(2,r)?l.push(0):h=s-n);let d,p,x=!1,y=-1,_=-1,g=-1;t===ll&&(y=Kc(i,y,e.length),y!==-1&&(h=y+c));for(let T;T=i[y+=1];){if(t===Ma&&T==="\\"){switch(_=y,i[y+1]){case"x":y+=3;break;case"u":y+=5;break;case"U":y+=9;break;default:y+=1}g=y}if(T===`
`)t===ll&&(y=Kc(i,y,e.length)),h=y+e.length+c,d=void 0;else{if(T===" "&&p&&p!==" "&&p!==`
`&&p!=="	"){const w=i[y+1];w&&w!==" "&&w!==`
`&&w!=="	"&&(d=y)}if(y>=h)if(d)l.push(d),h=d+c,d=void 0;else if(t===Ma){for(;p===" "||p==="	";)p=T,T=i[y+=1],x=!0;const w=y>g+1?y-2:_-1;if(f[w])return i;l.push(w),f[w]=!0,h=w+c,d=void 0}else x=!0}p=T}if(x&&o&&o(),l.length===0)return i;a&&a();let R=i.slice(0,l[0]);for(let T=0;T<l.length;++T){const w=l[T],L=l[T+1]||i.length;w===0?R=`
${e}${i.slice(0,L)}`:(t===Ma&&f[w]&&(R+=`${i[w]}\\`),R+=`
${e}${i.slice(w+1,L)}`)}return R}function Kc(i,e,t){let n=e,s=e+1,r=i[s];for(;r===" "||r==="	";)if(e<s+t)r=i[++e];else{do r=i[++e];while(r&&r!==`
`);n=e,s=e+1,r=i[s]}return n}const $a=(i,e)=>({indentAtStart:e?i.indent.length:i.indentAtStart,lineWidth:i.options.lineWidth,minContentWidth:i.options.minContentWidth}),Ka=i=>/^(%|---|\.\.\.)/m.test(i);function np(i,e,t){if(!e||e<0)return!1;const n=e-t,s=i.length;if(s<=n)return!1;for(let r=0,a=0;r<s;++r)if(i[r]===`
`){if(r-a>n)return!0;if(a=r+1,s-a<=n)return!1}return!0}function mr(i,e){const t=JSON.stringify(i);if(e.options.doubleQuotedAsJSON)return t;const{implicitKey:n}=e,s=e.options.doubleQuotedMinMultiLineLength,r=e.indent||(Ka(i)?"  ":"");let a="",o=0;for(let c=0,l=t[c];l;l=t[++c])if(l===" "&&t[c+1]==="\\"&&t[c+2]==="n"&&(a+=t.slice(o,c)+"\\ ",c+=1,o=c,l="\\"),l==="\\")switch(t[c+1]){case"u":{a+=t.slice(o,c);const f=t.substr(c+2,4);switch(f){case"0000":a+="\\0";break;case"0007":a+="\\a";break;case"000b":a+="\\v";break;case"001b":a+="\\e";break;case"0085":a+="\\N";break;case"00a0":a+="\\_";break;case"2028":a+="\\L";break;case"2029":a+="\\P";break;default:f.substr(0,2)==="00"?a+="\\x"+f.substr(2):a+=t.substr(c,6)}c+=5,o=c+1}break;case"n":if(n||t[c+2]==='"'||t.length<s)c+=1;else{for(a+=t.slice(o,c)+`

`;t[c+2]==="\\"&&t[c+3]==="n"&&t[c+4]!=='"';)a+=`
`,c+=2;a+=r,t[c+2]===" "&&(a+="\\"),c+=1,o=c+1}break;default:c+=1}return a=o?a+t.slice(o):t,n?a:Xa(a,r,Ma,$a(e,!1))}function cl(i,e){if(e.options.singleQuote===!1||e.implicitKey&&i.includes(`
`)||/[ \t]\n|\n[ \t]/.test(i))return mr(i,e);const t=e.indent||(Ka(i)?"  ":""),n="'"+i.replace(/'/g,"''").replace(/\n+/g,`$&
${t}`)+"'";return e.implicitKey?n:Xa(n,t,Vf,$a(e,!1))}function Rs(i,e){const{singleQuote:t}=e.options;let n;if(t===!1)n=mr;else{const s=i.includes('"'),r=i.includes("'");s&&!r?n=cl:r&&!s?n=mr:n=t?cl:mr}return n(i,e)}let ul;try{ul=new RegExp(`(^|(?<!
))
+(?!
|$)`,"g")}catch{ul=/\n+(?!\n|$)/g}function Sa({comment:i,type:e,value:t},n,s,r){const{blockQuote:a,commentString:o,lineWidth:c}=n.options;if(!a||/\n[\t ]+$/.test(t))return Rs(t,n);const l=n.indent||(n.forceBlockIndent||Ka(t)?"  ":""),f=a==="literal"?!0:a==="folded"||e===Ze.BLOCK_FOLDED?!1:e===Ze.BLOCK_LITERAL?!0:!np(t,c,l.length);if(!t)return f?`|
`:`>
`;let h,d;for(d=t.length;d>0;--d){const L=t[d-1];if(L!==`
`&&L!=="	"&&L!==" ")break}let p=t.substring(d);const x=p.indexOf(`
`);x===-1?h="-":t===p||x!==p.length-1?(h="+",r&&r()):h="",p&&(t=t.slice(0,-p.length),p[p.length-1]===`
`&&(p=p.slice(0,-1)),p=p.replace(ul,`$&${l}`));let y=!1,_,g=-1;for(_=0;_<t.length;++_){const L=t[_];if(L===" ")y=!0;else if(L===`
`)g=_;else break}let R=t.substring(0,g<_?g+1:_);R&&(t=t.substring(R.length),R=R.replace(/\n+/g,`$&${l}`));let w=(y?l?"2":"1":"")+h;if(i&&(w+=" "+o(i.replace(/ ?[\r\n]+/g," ")),s&&s()),!f){const L=t.replace(/\n+/g,`
$&`).replace(/(?:^|\n)([\t ].*)(?:([\n\t ]*)\n(?![\n\t ]))?/g,"$1$2").replace(/\n+/g,`$&${l}`);let I=!1;const C=$a(n,!0);a!=="folded"&&e!==Ze.BLOCK_FOLDED&&(C.onOverflow=()=>{I=!0});const D=Xa(`${R}${L}${p}`,l,ll,C);if(!I)return`>${w}
${l}${D}`}return t=t.replace(/\n+/g,`$&${l}`),`|${w}
${l}${R}${t}${p}`}function ip(i,e,t,n){const{type:s,value:r}=i,{actualString:a,implicitKey:o,indent:c,indentStep:l,inFlow:f}=e;if(o&&r.includes(`
`)||f&&/[[\]{},]/.test(r))return Rs(r,e);if(/^[\n\t ,[\]{}#&*!|>'"%@`]|^[?-]$|^[?-][ \t]|[\n:][ \t]|[ \t]\n|[\n\t ]#|[\n\t :]$/.test(r))return o||f||!r.includes(`
`)?Rs(r,e):Sa(i,e,t,n);if(!o&&!f&&s!==Ze.PLAIN&&r.includes(`
`))return Sa(i,e,t,n);if(Ka(r)){if(c==="")return e.forceBlockIndent=!0,Sa(i,e,t,n);if(o&&c===l)return Rs(r,e)}const h=r.replace(/\n+/g,`$&
${c}`);if(a){const d=y=>{var _;return y.default&&y.tag!=="tag:yaml.org,2002:str"&&((_=y.test)==null?void 0:_.test(h))},{compat:p,tags:x}=e.doc.schema;if(x.some(d)||p!=null&&p.some(d))return Rs(r,e)}return o?h:Xa(h,c,Vf,$a(e,!1))}function Ar(i,e,t,n){const{implicitKey:s,inFlow:r}=e,a=typeof i.value=="string"?i:Object.assign({},i,{value:String(i.value)});let{type:o}=i;o!==Ze.QUOTE_DOUBLE&&/[\x00-\x08\x0b-\x1f\x7f-\x9f\u{D800}-\u{DFFF}]/u.test(a.value)&&(o=Ze.QUOTE_DOUBLE);const c=f=>{switch(f){case Ze.BLOCK_FOLDED:case Ze.BLOCK_LITERAL:return s||r?Rs(a.value,e):Sa(a,e,t,n);case Ze.QUOTE_DOUBLE:return mr(a.value,e);case Ze.QUOTE_SINGLE:return cl(a.value,e);case Ze.PLAIN:return ip(a,e,t,n);default:return null}};let l=c(o);if(l===null){const{defaultKeyType:f,defaultStringType:h}=e.options,d=s&&f||h;if(l=c(d),l===null)throw new Error(`Unsupported default string type ${d}`)}return l}function Gf(i,e){const t=Object.assign({blockQuote:!0,commentString:tp,defaultKeyType:null,defaultStringType:"PLAIN",directives:null,doubleQuotedAsJSON:!1,doubleQuotedMinMultiLineLength:40,falseStr:"false",flowCollectionPadding:!0,indentSeq:!0,lineWidth:80,minContentWidth:20,nullStr:"null",simpleKeys:!1,singleQuote:null,trailingComma:!1,trueStr:"true",verifyAliasOrder:!0},i.schema.toStringOptions,e);let n;switch(t.collectionStyle){case"block":n=!1;break;case"flow":n=!0;break;default:n=null}return{anchors:new Set,doc:i,flowCollectionPadding:t.flowCollectionPadding?" ":"",indent:"",indentStep:typeof t.indent=="number"?" ".repeat(t.indent):"  ",inFlow:n,options:t}}function sp(i,e){var s;if(e.tag){const r=i.filter(a=>a.tag===e.tag);if(r.length>0)return r.find(a=>a.format===e.format)??r[0]}let t,n;if(xt(e)){n=e.value;let r=i.filter(a=>{var o;return(o=a.identify)==null?void 0:o.call(a,n)});if(r.length>1){const a=r.filter(o=>o.test);a.length>0&&(r=a)}t=r.find(a=>a.format===e.format)??r.find(a=>!a.format)}else n=e,t=i.find(r=>r.nodeClass&&n instanceof r.nodeClass);if(!t){const r=((s=n==null?void 0:n.constructor)==null?void 0:s.name)??(n===null?"null":typeof n);throw new Error(`Tag not resolved for ${r} value`)}return t}function rp(i,e,{anchors:t,doc:n}){if(!n.directives)return"";const s=[],r=(xt(i)||Tt(i))&&i.anchor;r&&kf(r)&&(t.add(r),s.push(`&${r}`));const a=i.tag??(e.default?null:e.tag);return a&&s.push(n.directives.tagString(a)),s.join(" ")}function Us(i,e,t,n){var c;if(St(i))return i.toString(e,t,n);if(Ji(i)){if(e.doc.directives)return i.toString(e);if((c=e.resolvedAliases)!=null&&c.has(i))throw new TypeError("Cannot stringify circular structure without alias nodes");e.resolvedAliases?e.resolvedAliases.add(i):e.resolvedAliases=new Set([i]),i=i.resolve(e.doc)}let s;const r=At(i)?i:e.doc.createNode(i,{onTagObj:l=>s=l});s??(s=sp(e.doc.schema.tags,r));const a=rp(r,s,e);a.length>0&&(e.indentAtStart=(e.indentAtStart??0)+a.length+1);const o=typeof s.stringify=="function"?s.stringify(r,e,t,n):xt(r)?Ar(r,e,t,n):r.toString(e,t,n);return a?xt(r)||o[0]==="{"||o[0]==="["?`${a} ${o}`:`${a}
${e.indent}${o}`:o}function ap({key:i,value:e},t,n,s){const{allNullValues:r,doc:a,indent:o,indentStep:c,options:{commentString:l,indentSeq:f,simpleKeys:h}}=t;let d=At(i)&&i.comment||null;if(h){if(d)throw new Error("With simple keys, key nodes cannot have comments");if(Tt(i)||!At(i)&&typeof i=="object"){const C="With simple keys, collection cannot be used as a key value";throw new Error(C)}}let p=!h&&(!i||d&&e==null&&!t.inFlow||Tt(i)||(xt(i)?i.type===Ze.BLOCK_FOLDED||i.type===Ze.BLOCK_LITERAL:typeof i=="object"));t=Object.assign({},t,{allNullValues:!1,implicitKey:!p&&(h||!r),indent:o+c});let x=!1,y=!1,_=Us(i,t,()=>x=!0,()=>y=!0);if(!p&&!t.inFlow&&_.length>1024){if(h)throw new Error("With simple keys, single line scalar must not span more than 1024 characters");p=!0}if(t.inFlow){if(r||e==null)return x&&n&&n(),_===""?"?":p?`? ${_}`:_}else if(r&&!h||e==null&&p)return _=`? ${_}`,d&&!x?_+=Gi(_,t.indent,l(d)):y&&s&&s(),_;x&&(d=null),p?(d&&(_+=Gi(_,t.indent,l(d))),_=`? ${_}
${o}:`):(_=`${_}:`,d&&(_+=Gi(_,t.indent,l(d))));let g,R,T;At(e)?(g=!!e.spaceBefore,R=e.commentBefore,T=e.comment):(g=!1,R=null,T=null,e&&typeof e=="object"&&(e=a.createNode(e))),t.implicitKey=!1,!p&&!d&&xt(e)&&(t.indentAtStart=_.length+1),y=!1,!f&&c.length>=2&&!t.inFlow&&!p&&Xs(e)&&!e.flow&&!e.tag&&!e.anchor&&(t.indent=t.indent.substring(2));let w=!1;const L=Us(e,t,()=>w=!0,()=>y=!0);let I=" ";if(d||g||R){if(I=g?`
`:"",R){const C=l(R);I+=`
${ti(C,t.indent)}`}L===""&&!t.inFlow?I===`
`&&T&&(I=`

`):I+=`
${t.indent}`}else if(!p&&Tt(e)){const C=L[0],D=L.indexOf(`
`),S=D!==-1,b=t.inFlow??e.flow??e.items.length===0;if(S||!b){let N=!1;if(S&&(C==="&"||C==="!")){let F=L.indexOf(" ");C==="&"&&F!==-1&&F<D&&L[F+1]==="!"&&(F=L.indexOf(" ",F+1)),(F===-1||D<F)&&(N=!0)}N||(I=`
${t.indent}`)}}else(L===""||L[0]===`
`)&&(I="");return _+=I+L,t.inFlow?w&&n&&n():T&&!w?_+=Gi(_,t.indent,l(T)):y&&s&&s(),_}function Wf(i,e){(i==="debug"||i==="warn")&&console.warn(e)}const Gr="<<",ri={identify:i=>i===Gr||typeof i=="symbol"&&i.description===Gr,default:"key",tag:"tag:yaml.org,2002:merge",test:/^<<$/,resolve:()=>Object.assign(new Ze(Symbol(Gr)),{addToJSMap:qf}),stringify:()=>Gr},op=(i,e)=>(ri.identify(e)||xt(e)&&(!e.type||e.type===Ze.PLAIN)&&ri.identify(e.value))&&(i==null?void 0:i.doc.schema.tags.some(t=>t.tag===ri.tag&&t.default));function qf(i,e,t){const n=jf(i,t);if(Xs(n))for(const s of n.items)po(i,e,s);else if(Array.isArray(n))for(const s of n)po(i,e,s);else po(i,e,n)}function po(i,e,t){const n=jf(i,t);if(!js(n))throw new Error("Merge sources must be maps or map aliases");const s=n.toJSON(null,i,Map);for(const[r,a]of s)e instanceof Map?e.has(r)||e.set(r,a):e instanceof Set?e.add(r):Object.prototype.hasOwnProperty.call(e,r)||Object.defineProperty(e,r,{value:a,writable:!0,enumerable:!0,configurable:!0});return e}function jf(i,e){return i&&Ji(e)?e.resolve(i.doc,i):e}function Xf(i,e,{key:t,value:n}){if(At(t)&&t.addToJSMap)t.addToJSMap(i,e,n);else if(op(i,t))qf(i,e,n);else{const s=bn(t,"",i);if(e instanceof Map)e.set(s,bn(n,s,i));else if(e instanceof Set)e.add(s);else{const r=lp(t,s,i),a=bn(n,r,i);r in e?Object.defineProperty(e,r,{value:a,writable:!0,enumerable:!0,configurable:!0}):e[r]=a}}return e}function lp(i,e,t){if(e===null)return"";if(typeof e!="object")return String(e);if(At(i)&&(t!=null&&t.doc)){const n=Gf(t.doc,{});n.anchors=new Set;for(const r of t.anchors.keys())n.anchors.add(r.anchor);n.inFlow=!0,n.inStringifyKey=!0;const s=i.toString(n);if(!t.mapKeyWarned){let r=JSON.stringify(s);r.length>40&&(r=r.substring(0,36)+'..."'),Wf(t.doc.options.logLevel,`Keys with collection values will be stringified due to JS Object restrictions: ${r}. Set mapAsMap: true to use object keys.`),t.mapKeyWarned=!0}return s}return JSON.stringify(e)}function oc(i,e,t){const n=vr(i,void 0,t),s=vr(e,void 0,t);return new Qt(n,s)}class Qt{constructor(e,t=null){Object.defineProperty(this,Mn,{value:Lf}),this.key=e,this.value=t}clone(e){let{key:t,value:n}=this;return At(t)&&(t=t.clone(e)),At(n)&&(n=n.clone(e)),new Qt(t,n)}toJSON(e,t){const n=t!=null&&t.mapAsMap?new Map:{};return Xf(t,n,this)}toString(e,t,n){return e!=null&&e.doc?ap(this,e,t,n):JSON.stringify(this)}}function $f(i,e,t){return(e.inFlow??i.flow?up:cp)(i,e,t)}function cp({comment:i,items:e},t,{blockItemPrefix:n,flowChars:s,itemIndent:r,onChompKeep:a,onComment:o}){const{indent:c,options:{commentString:l}}=t,f=Object.assign({},t,{indent:r,type:null});let h=!1;const d=[];for(let x=0;x<e.length;++x){const y=e[x];let _=null;if(At(y))!h&&y.spaceBefore&&d.push(""),Ua(t,d,y.commentBefore,h),y.comment&&(_=y.comment);else if(St(y)){const R=At(y.key)?y.key:null;R&&(!h&&R.spaceBefore&&d.push(""),Ua(t,d,R.commentBefore,h))}h=!1;let g=Us(y,f,()=>_=null,()=>h=!0);_&&(g+=Gi(g,r,l(_))),h&&_&&(h=!1),d.push(n+g)}let p;if(d.length===0)p=s.start+s.end;else{p=d[0];for(let x=1;x<d.length;++x){const y=d[x];p+=y?`
${c}${y}`:`
`}}return i?(p+=`
`+ti(l(i),c),o&&o()):h&&a&&a(),p}function up({items:i},e,{flowChars:t,itemIndent:n}){const{indent:s,indentStep:r,flowCollectionPadding:a,options:{commentString:o}}=e;n+=r;const c=Object.assign({},e,{indent:n,inFlow:!0,type:null});let l=!1,f=0;const h=[];for(let x=0;x<i.length;++x){const y=i[x];let _=null;if(At(y))y.spaceBefore&&h.push(""),Ua(e,h,y.commentBefore,!1),y.comment&&(_=y.comment);else if(St(y)){const R=At(y.key)?y.key:null;R&&(R.spaceBefore&&h.push(""),Ua(e,h,R.commentBefore,!1),R.comment&&(l=!0));const T=At(y.value)?y.value:null;T?(T.comment&&(_=T.comment),T.commentBefore&&(l=!0)):y.value==null&&(R!=null&&R.comment)&&(_=R.comment)}_&&(l=!0);let g=Us(y,c,()=>_=null);l||(l=h.length>f||g.includes(`
`)),x<i.length-1?g+=",":e.options.trailingComma&&(e.options.lineWidth>0&&(l||(l=h.reduce((R,T)=>R+T.length+2,2)+(g.length+2)>e.options.lineWidth)),l&&(g+=",")),_&&(g+=Gi(g,n,o(_))),h.push(g),f=h.length}const{start:d,end:p}=t;if(h.length===0)return d+p;if(!l){const x=h.reduce((y,_)=>y+_.length+2,2);l=e.options.lineWidth>0&&x>e.options.lineWidth}if(l){let x=d;for(const y of h)x+=y?`
${r}${s}${y}`:`
`;return`${x}
${s}${p}`}else return`${d}${a}${h.join(" ")}${a}${p}`}function Ua({indent:i,options:{commentString:e}},t,n,s){if(n&&s&&(n=n.replace(/^\n+/,"")),n){const r=ti(e(n),i);t.push(r.trimStart())}}function Wi(i,e){const t=xt(e)?e.value:e;for(const n of i)if(St(n)&&(n.key===e||n.key===t||xt(n.key)&&n.key.value===t))return n}class gn extends Hf{static get tagName(){return"tag:yaml.org,2002:map"}constructor(e){super(Mi,e),this.items=[]}static from(e,t,n){const{keepUndefined:s,replacer:r}=n,a=new this(e),o=(c,l)=>{if(typeof r=="function")l=r.call(t,c,l);else if(Array.isArray(r)&&!r.includes(c))return;(l!==void 0||s)&&a.items.push(oc(c,l,n))};if(t instanceof Map)for(const[c,l]of t)o(c,l);else if(t&&typeof t=="object")for(const c of Object.keys(t))o(c,t[c]);return typeof e.sortMapEntries=="function"&&a.items.sort(e.sortMapEntries),a}add(e,t){var a;let n;St(e)?n=e:!e||typeof e!="object"||!("key"in e)?n=new Qt(e,e==null?void 0:e.value):n=new Qt(e.key,e.value);const s=Wi(this.items,n.key),r=(a=this.schema)==null?void 0:a.sortMapEntries;if(s){if(!t)throw new Error(`Key ${n.key} already set`);xt(s.value)&&zf(n.value)?s.value.value=n.value:s.value=n.value}else if(r){const o=this.items.findIndex(c=>r(n,c)<0);o===-1?this.items.push(n):this.items.splice(o,0,n)}else this.items.push(n)}delete(e){const t=Wi(this.items,e);return t?this.items.splice(this.items.indexOf(t),1).length>0:!1}get(e,t){const n=Wi(this.items,e),s=n==null?void 0:n.value;return(!t&&xt(s)?s.value:s)??void 0}has(e){return!!Wi(this.items,e)}set(e,t){this.add(new Qt(e,t),!0)}toJSON(e,t,n){const s=n?new n:t!=null&&t.mapAsMap?new Map:{};t!=null&&t.onCreate&&t.onCreate(s);for(const r of this.items)Xf(t,s,r);return s}toString(e,t,n){if(!e)return JSON.stringify(this);for(const s of this.items)if(!St(s))throw new Error(`Map items must all be pairs; found ${JSON.stringify(s)} instead`);return!e.allNullValues&&this.hasAllNullValues(!1)&&(e=Object.assign({},e,{allNullValues:!0})),$f(this,e,{blockItemPrefix:"",flowChars:{start:"{",end:"}"},itemIndent:e.indent||"",onChompKeep:n,onComment:t})}}const $s={collection:"map",default:!0,nodeClass:gn,tag:"tag:yaml.org,2002:map",resolve(i,e){return js(i)||e("Expected a mapping for this tag"),i},createNode:(i,e,t)=>gn.from(i,e,t)};class Ei extends Hf{static get tagName(){return"tag:yaml.org,2002:seq"}constructor(e){super(qs,e),this.items=[]}add(e){this.items.push(e)}delete(e){const t=Wr(e);return typeof t!="number"?!1:this.items.splice(t,1).length>0}get(e,t){const n=Wr(e);if(typeof n!="number")return;const s=this.items[n];return!t&&xt(s)?s.value:s}has(e){const t=Wr(e);return typeof t=="number"&&t<this.items.length}set(e,t){const n=Wr(e);if(typeof n!="number")throw new Error(`Expected a valid index, not ${e}.`);const s=this.items[n];xt(s)&&zf(t)?s.value=t:this.items[n]=t}toJSON(e,t){const n=[];t!=null&&t.onCreate&&t.onCreate(n);let s=0;for(const r of this.items)n.push(bn(r,String(s++),t));return n}toString(e,t,n){return e?$f(this,e,{blockItemPrefix:"- ",flowChars:{start:"[",end:"]"},itemIndent:(e.indent||"")+"  ",onChompKeep:n,onComment:t}):JSON.stringify(this)}static from(e,t,n){const{replacer:s}=n,r=new this(e);if(t&&Symbol.iterator in Object(t)){let a=0;for(let o of t){if(typeof s=="function"){const c=t instanceof Set?o:String(a++);o=s.call(t,c,o)}r.items.push(vr(o,void 0,n))}}return r}}function Wr(i){let e=xt(i)?i.value:i;return e&&typeof e=="string"&&(e=Number(e)),typeof e=="number"&&Number.isInteger(e)&&e>=0?e:null}const Ks={collection:"seq",default:!0,nodeClass:Ei,tag:"tag:yaml.org,2002:seq",resolve(i,e){return Xs(i)||e("Expected a sequence for this tag"),i},createNode:(i,e,t)=>Ei.from(i,e,t)},Ya={identify:i=>typeof i=="string",default:!0,tag:"tag:yaml.org,2002:str",resolve:i=>i,stringify(i,e,t,n){return e=Object.assign({actualString:!0},e),Ar(i,e,t,n)}},Ja={identify:i=>i==null,createNode:()=>new Ze(null),default:!0,tag:"tag:yaml.org,2002:null",test:/^(?:~|[Nn]ull|NULL)?$/,resolve:()=>new Ze(null),stringify:({source:i},e)=>typeof i=="string"&&Ja.test.test(i)?i:e.options.nullStr},lc={identify:i=>typeof i=="boolean",default:!0,tag:"tag:yaml.org,2002:bool",test:/^(?:[Tt]rue|TRUE|[Ff]alse|FALSE)$/,resolve:i=>new Ze(i[0]==="t"||i[0]==="T"),stringify({source:i,value:e},t){if(i&&lc.test.test(i)){const n=i[0]==="t"||i[0]==="T";if(e===n)return i}return e?t.options.trueStr:t.options.falseStr}};function Un({format:i,minFractionDigits:e,tag:t,value:n}){if(typeof n=="bigint")return String(n);const s=typeof n=="number"?n:Number(n);if(!isFinite(s))return isNaN(s)?".nan":s<0?"-.inf":".inf";let r=Object.is(n,-0)?"-0":JSON.stringify(n);if(!i&&e&&(!t||t==="tag:yaml.org,2002:float")&&/^-?\d/.test(r)&&!r.includes("e")){let a=r.indexOf(".");a<0&&(a=r.length,r+=".");let o=e-(r.length-a-1);for(;o-- >0;)r+="0"}return r}const Kf={identify:i=>typeof i=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^(?:[-+]?\.(?:inf|Inf|INF)|\.nan|\.NaN|\.NAN)$/,resolve:i=>i.slice(-3).toLowerCase()==="nan"?NaN:i[0]==="-"?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY,stringify:Un},Yf={identify:i=>typeof i=="number",default:!0,tag:"tag:yaml.org,2002:float",format:"EXP",test:/^[-+]?(?:\.[0-9]+|[0-9]+(?:\.[0-9]*)?)[eE][-+]?[0-9]+$/,resolve:i=>parseFloat(i),stringify(i){const e=Number(i.value);return isFinite(e)?e.toExponential():Un(i)}},Jf={identify:i=>typeof i=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^[-+]?(?:\.[0-9]+|[0-9]+\.[0-9]*)$/,resolve(i){const e=new Ze(parseFloat(i)),t=i.indexOf(".");return t!==-1&&i[i.length-1]==="0"&&(e.minFractionDigits=i.length-t-1),e},stringify:Un},Za=i=>typeof i=="bigint"||Number.isInteger(i),cc=(i,e,t,{intAsBigInt:n})=>n?BigInt(i):parseInt(i.substring(e),t);function Zf(i,e,t){const{value:n}=i;return Za(n)&&n>=0?t+n.toString(e):Un(i)}const Qf={identify:i=>Za(i)&&i>=0,default:!0,tag:"tag:yaml.org,2002:int",format:"OCT",test:/^0o[0-7]+$/,resolve:(i,e,t)=>cc(i,2,8,t),stringify:i=>Zf(i,8,"0o")},eh={identify:Za,default:!0,tag:"tag:yaml.org,2002:int",test:/^[-+]?[0-9]+$/,resolve:(i,e,t)=>cc(i,0,10,t),stringify:Un},th={identify:i=>Za(i)&&i>=0,default:!0,tag:"tag:yaml.org,2002:int",format:"HEX",test:/^0x[0-9a-fA-F]+$/,resolve:(i,e,t)=>cc(i,2,16,t),stringify:i=>Zf(i,16,"0x")},fp=[$s,Ks,Ya,Ja,lc,Qf,eh,th,Kf,Yf,Jf];function Yc(i){return typeof i=="bigint"||Number.isInteger(i)}const qr=({value:i})=>JSON.stringify(i),hp=[{identify:i=>typeof i=="string",default:!0,tag:"tag:yaml.org,2002:str",resolve:i=>i,stringify:qr},{identify:i=>i==null,createNode:()=>new Ze(null),default:!0,tag:"tag:yaml.org,2002:null",test:/^null$/,resolve:()=>null,stringify:qr},{identify:i=>typeof i=="boolean",default:!0,tag:"tag:yaml.org,2002:bool",test:/^true$|^false$/,resolve:i=>i==="true",stringify:qr},{identify:Yc,default:!0,tag:"tag:yaml.org,2002:int",test:/^-?(?:0|[1-9][0-9]*)$/,resolve:(i,e,{intAsBigInt:t})=>t?BigInt(i):parseInt(i,10),stringify:({value:i})=>Yc(i)?i.toString():JSON.stringify(i)},{identify:i=>typeof i=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^-?(?:0|[1-9][0-9]*)(?:\.[0-9]*)?(?:[eE][-+]?[0-9]+)?$/,resolve:i=>parseFloat(i),stringify:qr}],dp={default:!0,tag:"",test:/^/,resolve(i,e){return e(`Unresolved plain scalar ${JSON.stringify(i)}`),i}},pp=[$s,Ks].concat(hp,dp),uc={identify:i=>i instanceof Uint8Array,default:!1,tag:"tag:yaml.org,2002:binary",resolve(i,e){if(typeof atob=="function"){const t=atob(i.replace(/[\n\r]/g,"")),n=new Uint8Array(t.length);for(let s=0;s<t.length;++s)n[s]=t.charCodeAt(s);return n}else return e("This environment does not support reading binary tags; either Buffer or atob is required"),i},stringify({comment:i,type:e,value:t},n,s,r){if(!t)return"";const a=t;let o;if(typeof btoa=="function"){let c="";for(let l=0;l<a.length;++l)c+=String.fromCharCode(a[l]);o=btoa(c)}else throw new Error("This environment does not support writing binary tags; either Buffer or btoa is required");if(e??(e=Ze.BLOCK_LITERAL),e!==Ze.QUOTE_DOUBLE){const c=Math.max(n.options.lineWidth-n.indent.length,n.options.minContentWidth),l=Math.ceil(o.length/c),f=new Array(l);for(let h=0,d=0;h<l;++h,d+=c)f[h]=o.substr(d,c);o=f.join(e===Ze.BLOCK_LITERAL?`
`:" ")}return Ar({comment:i,type:e,value:o},n,s,r)}};function nh(i,e){if(Xs(i))for(let t=0;t<i.items.length;++t){let n=i.items[t];if(!St(n)){if(js(n)){n.items.length>1&&e("Each pair must have its own sequence indicator");const s=n.items[0]||new Qt(new Ze(null));if(n.commentBefore&&(s.key.commentBefore=s.key.commentBefore?`${n.commentBefore}
${s.key.commentBefore}`:n.commentBefore),n.comment){const r=s.value??s.key;r.comment=r.comment?`${n.comment}
${r.comment}`:n.comment}n=s}i.items[t]=St(n)?n:new Qt(n)}}else e("Expected a sequence for this tag");return i}function ih(i,e,t){const{replacer:n}=t,s=new Ei(i);s.tag="tag:yaml.org,2002:pairs";let r=0;if(e&&Symbol.iterator in Object(e))for(let a of e){typeof n=="function"&&(a=n.call(e,String(r++),a));let o,c;if(Array.isArray(a))if(a.length===2)o=a[0],c=a[1];else throw new TypeError(`Expected [key, value] tuple: ${a}`);else if(a&&a instanceof Object){const l=Object.keys(a);if(l.length===1)o=l[0],c=a[o];else throw new TypeError(`Expected tuple with one key, not ${l.length} keys`)}else o=a;s.items.push(oc(o,c,t))}return s}const fc={collection:"seq",default:!1,tag:"tag:yaml.org,2002:pairs",resolve:nh,createNode:ih};class Ls extends Ei{constructor(){super(),this.add=gn.prototype.add.bind(this),this.delete=gn.prototype.delete.bind(this),this.get=gn.prototype.get.bind(this),this.has=gn.prototype.has.bind(this),this.set=gn.prototype.set.bind(this),this.tag=Ls.tag}toJSON(e,t){if(!t)return super.toJSON(e);const n=new Map;t!=null&&t.onCreate&&t.onCreate(n);for(const s of this.items){let r,a;if(St(s)?(r=bn(s.key,"",t),a=bn(s.value,r,t)):r=bn(s,"",t),n.has(r))throw new Error("Ordered maps must not include duplicate keys");n.set(r,a)}return n}static from(e,t,n){const s=ih(e,t,n),r=new this;return r.items=s.items,r}}Ls.tag="tag:yaml.org,2002:omap";const hc={collection:"seq",identify:i=>i instanceof Map,nodeClass:Ls,default:!1,tag:"tag:yaml.org,2002:omap",resolve(i,e){const t=nh(i,e),n=[];for(const{key:s}of t.items)xt(s)&&(n.includes(s.value)?e(`Ordered maps must not include duplicate keys: ${s.value}`):n.push(s.value));return Object.assign(new Ls,t)},createNode:(i,e,t)=>Ls.from(i,e,t)};function sh({value:i,source:e},t){return e&&(i?rh:ah).test.test(e)?e:i?t.options.trueStr:t.options.falseStr}const rh={identify:i=>i===!0,default:!0,tag:"tag:yaml.org,2002:bool",test:/^(?:Y|y|[Yy]es|YES|[Tt]rue|TRUE|[Oo]n|ON)$/,resolve:()=>new Ze(!0),stringify:sh},ah={identify:i=>i===!1,default:!0,tag:"tag:yaml.org,2002:bool",test:/^(?:N|n|[Nn]o|NO|[Ff]alse|FALSE|[Oo]ff|OFF)$/,resolve:()=>new Ze(!1),stringify:sh},mp={identify:i=>typeof i=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^(?:[-+]?\.(?:inf|Inf|INF)|\.nan|\.NaN|\.NAN)$/,resolve:i=>i.slice(-3).toLowerCase()==="nan"?NaN:i[0]==="-"?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY,stringify:Un},gp={identify:i=>typeof i=="number",default:!0,tag:"tag:yaml.org,2002:float",format:"EXP",test:/^[-+]?(?:[0-9][0-9_]*)?(?:\.[0-9_]*)?[eE][-+]?[0-9]+$/,resolve:i=>parseFloat(i.replace(/_/g,"")),stringify(i){const e=Number(i.value);return isFinite(e)?e.toExponential():Un(i)}},_p={identify:i=>typeof i=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^[-+]?(?:[0-9][0-9_]*)?\.[0-9_]*$/,resolve(i){const e=new Ze(parseFloat(i.replace(/_/g,""))),t=i.indexOf(".");if(t!==-1){const n=i.substring(t+1).replace(/_/g,"");n[n.length-1]==="0"&&(e.minFractionDigits=n.length)}return e},stringify:Un},Rr=i=>typeof i=="bigint"||Number.isInteger(i);function Qa(i,e,t,{intAsBigInt:n}){const s=i[0];if((s==="-"||s==="+")&&(e+=1),i=i.substring(e).replace(/_/g,""),n){switch(t){case 2:i=`0b${i}`;break;case 8:i=`0o${i}`;break;case 16:i=`0x${i}`;break}const a=BigInt(i);return s==="-"?BigInt(-1)*a:a}const r=parseInt(i,t);return s==="-"?-1*r:r}function dc(i,e,t){const{value:n}=i;if(Rr(n)){const s=n.toString(e);return n<0?"-"+t+s.substr(1):t+s}return Un(i)}const vp={identify:Rr,default:!0,tag:"tag:yaml.org,2002:int",format:"BIN",test:/^[-+]?0b[0-1_]+$/,resolve:(i,e,t)=>Qa(i,2,2,t),stringify:i=>dc(i,2,"0b")},yp={identify:Rr,default:!0,tag:"tag:yaml.org,2002:int",format:"OCT",test:/^[-+]?0[0-7_]+$/,resolve:(i,e,t)=>Qa(i,1,8,t),stringify:i=>dc(i,8,"0")},xp={identify:Rr,default:!0,tag:"tag:yaml.org,2002:int",test:/^[-+]?[0-9][0-9_]*$/,resolve:(i,e,t)=>Qa(i,0,10,t),stringify:Un},bp={identify:Rr,default:!0,tag:"tag:yaml.org,2002:int",format:"HEX",test:/^[-+]?0x[0-9a-fA-F_]+$/,resolve:(i,e,t)=>Qa(i,2,16,t),stringify:i=>dc(i,16,"0x")};class Is extends gn{constructor(e){super(e),this.tag=Is.tag}add(e){let t;St(e)?t=e:e&&typeof e=="object"&&"key"in e&&"value"in e&&e.value===null?t=new Qt(e.key,null):t=new Qt(e,null),Wi(this.items,t.key)||this.items.push(t)}get(e,t){const n=Wi(this.items,e);return!t&&St(n)?xt(n.key)?n.key.value:n.key:n}set(e,t){if(typeof t!="boolean")throw new Error(`Expected boolean value for set(key, value) in a YAML set, not ${typeof t}`);const n=Wi(this.items,e);n&&!t?this.items.splice(this.items.indexOf(n),1):!n&&t&&this.items.push(new Qt(e))}toJSON(e,t){return super.toJSON(e,t,Set)}toString(e,t,n){if(!e)return JSON.stringify(this);if(this.hasAllNullValues(!0))return super.toString(Object.assign({},e,{allNullValues:!0}),t,n);throw new Error("Set items must all have null values")}static from(e,t,n){const{replacer:s}=n,r=new this(e);if(t&&Symbol.iterator in Object(t))for(let a of t)typeof s=="function"&&(a=s.call(t,a,a)),r.items.push(oc(a,null,n));return r}}Is.tag="tag:yaml.org,2002:set";const pc={collection:"map",identify:i=>i instanceof Set,nodeClass:Is,default:!1,tag:"tag:yaml.org,2002:set",createNode:(i,e,t)=>Is.from(i,e,t),resolve(i,e){if(js(i)){if(i.hasAllNullValues(!0))return Object.assign(new Is,i);e("Set items must all have null values")}else e("Expected a mapping for this tag");return i}};function mc(i,e){const t=i[0],n=t==="-"||t==="+"?i.substring(1):i,s=a=>e?BigInt(a):Number(a),r=n.replace(/_/g,"").split(":").reduce((a,o)=>a*s(60)+s(o),s(0));return t==="-"?s(-1)*r:r}function oh(i){let{value:e}=i,t=a=>a;if(typeof e=="bigint")t=a=>BigInt(a);else if(isNaN(e)||!isFinite(e))return Un(i);let n="";e<0&&(n="-",e*=t(-1));const s=t(60),r=[e%s];return e<60?r.unshift(0):(e=(e-r[0])/s,r.unshift(e%s),e>=60&&(e=(e-r[0])/s,r.unshift(e))),n+r.map(a=>String(a).padStart(2,"0")).join(":").replace(/000000\d*$/,"")}const lh={identify:i=>typeof i=="bigint"||Number.isInteger(i),default:!0,tag:"tag:yaml.org,2002:int",format:"TIME",test:/^[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+$/,resolve:(i,e,{intAsBigInt:t})=>mc(i,t),stringify:oh},ch={identify:i=>typeof i=="number",default:!0,tag:"tag:yaml.org,2002:float",format:"TIME",test:/^[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+\.[0-9_]*$/,resolve:i=>mc(i,!1),stringify:oh},eo={identify:i=>i instanceof Date,default:!0,tag:"tag:yaml.org,2002:timestamp",test:RegExp("^([0-9]{4})-([0-9]{1,2})-([0-9]{1,2})(?:(?:t|T|[ \\t]+)([0-9]{1,2}):([0-9]{1,2}):([0-9]{1,2}(\\.[0-9]+)?)(?:[ \\t]*(Z|[-+][012]?[0-9](?::[0-9]{2})?))?)?$"),resolve(i){const e=i.match(eo.test);if(!e)throw new Error("!!timestamp expects a date, starting with yyyy-mm-dd");const[,t,n,s,r,a,o]=e.map(Number),c=e[7]?Number((e[7]+"00").substr(1,3)):0;let l=Date.UTC(t,n-1,s,r||0,a||0,o||0,c);const f=e[8];if(f&&f!=="Z"){let h=mc(f,!1);Math.abs(h)<30&&(h*=60),l-=6e4*h}return new Date(l)},stringify:({value:i})=>(i==null?void 0:i.toISOString().replace(/(T00:00:00)?\.000Z$/,""))??""},Jc=[$s,Ks,Ya,Ja,rh,ah,vp,yp,xp,bp,mp,gp,_p,uc,ri,hc,fc,pc,lh,ch,eo],Zc=new Map([["core",fp],["failsafe",[$s,Ks,Ya]],["json",pp],["yaml11",Jc],["yaml-1.1",Jc]]),Qc={binary:uc,bool:lc,float:Jf,floatExp:Yf,floatNaN:Kf,floatTime:ch,int:eh,intHex:th,intOct:Qf,intTime:lh,map:$s,merge:ri,null:Ja,omap:hc,pairs:fc,seq:Ks,set:pc,timestamp:eo},wp={"tag:yaml.org,2002:binary":uc,"tag:yaml.org,2002:merge":ri,"tag:yaml.org,2002:omap":hc,"tag:yaml.org,2002:pairs":fc,"tag:yaml.org,2002:set":pc,"tag:yaml.org,2002:timestamp":eo};function mo(i,e,t){const n=Zc.get(e);if(n&&!i)return t&&!n.includes(ri)?n.concat(ri):n.slice();let s=n;if(!s)if(Array.isArray(i))s=[];else{const r=Array.from(Zc.keys()).filter(a=>a!=="yaml11").map(a=>JSON.stringify(a)).join(", ");throw new Error(`Unknown schema "${e}"; use one of ${r} or define customTags array`)}if(Array.isArray(i))for(const r of i)s=s.concat(r);else typeof i=="function"&&(s=i(s.slice()));return t&&(s=s.concat(ri)),s.reduce((r,a)=>{const o=typeof a=="string"?Qc[a]:a;if(!o){const c=JSON.stringify(a),l=Object.keys(Qc).map(f=>JSON.stringify(f)).join(", ");throw new Error(`Unknown custom tag ${c}; use one of ${l}`)}return r.includes(o)||r.push(o),r},[])}const Mp=(i,e)=>i.key<e.key?-1:i.key>e.key?1:0;class to{constructor({compat:e,customTags:t,merge:n,resolveKnownTags:s,schema:r,sortMapEntries:a,toStringDefaults:o}){this.compat=Array.isArray(e)?mo(e,"compat"):e?mo(null,e):null,this.name=typeof r=="string"&&r||"core",this.knownTags=s?wp:{},this.tags=mo(t,this.name,n),this.toStringOptions=o??null,Object.defineProperty(this,Mi,{value:$s}),Object.defineProperty(this,Gn,{value:Ya}),Object.defineProperty(this,qs,{value:Ks}),this.sortMapEntries=typeof a=="function"?a:a===!0?Mp:null}clone(){const e=Object.create(to.prototype,Object.getOwnPropertyDescriptors(this));return e.tags=this.tags.slice(),e}}function Sp(i,e){var c;const t=[];let n=e.directives===!0;if(e.directives!==!1&&i.directives){const l=i.directives.toString(i);l?(t.push(l),n=!0):i.directives.docStart&&(n=!0)}n&&t.push("---");const s=Gf(i,e),{commentString:r}=s.options;if(i.commentBefore){t.length!==1&&t.unshift("");const l=r(i.commentBefore);t.unshift(ti(l,""))}let a=!1,o=null;if(i.contents){if(At(i.contents)){if(i.contents.spaceBefore&&n&&t.push(""),i.contents.commentBefore){const h=r(i.contents.commentBefore);t.push(ti(h,""))}s.forceBlockIndent=!!i.comment,o=i.contents.comment}const l=o?void 0:()=>a=!0;let f=Us(i.contents,s,()=>o=null,l);o&&(f+=Gi(f,"",r(o))),(f[0]==="|"||f[0]===">")&&t[t.length-1]==="---"?t[t.length-1]=`--- ${f}`:t.push(f)}else t.push(Us(i.contents,s));if((c=i.directives)!=null&&c.docEnd)if(i.comment){const l=r(i.comment);l.includes(`
`)?(t.push("..."),t.push(ti(l,""))):t.push(`... ${l}`)}else t.push("...");else{let l=i.comment;l&&a&&(l=l.replace(/^\n+/,"")),l&&((!a||o)&&t[t.length-1]!==""&&t.push(""),t.push(ti(r(l),"")))}return t.join(`
`)+`
`}class Ys{constructor(e,t,n){this.commentBefore=null,this.comment=null,this.errors=[],this.warnings=[],Object.defineProperty(this,Mn,{value:ol});let s=null;typeof t=="function"||Array.isArray(t)?s=t:n===void 0&&t&&(n=t,t=void 0);const r=Object.assign({intAsBigInt:!1,keepSourceTokens:!1,logLevel:"warn",prettyErrors:!0,strict:!0,stringKeys:!1,uniqueKeys:!0,version:"1.2"},n);this.options=r;let{version:a}=r;n!=null&&n._directives?(this.directives=n._directives.atDocument(),this.directives.yaml.explicit&&(a=this.directives.yaml.version)):this.directives=new tn({version:a}),this.setSchema(a,n),this.contents=e===void 0?null:this.createNode(e,s,n)}clone(){const e=Object.create(Ys.prototype,{[Mn]:{value:ol}});return e.commentBefore=this.commentBefore,e.comment=this.comment,e.errors=this.errors.slice(),e.warnings=this.warnings.slice(),e.options=Object.assign({},this.options),this.directives&&(e.directives=this.directives.clone()),e.schema=this.schema.clone(),e.contents=At(this.contents)?this.contents.clone(e.schema):this.contents,this.range&&(e.range=this.range.slice()),e}add(e){rs(this.contents)&&this.contents.add(e)}addIn(e,t){rs(this.contents)&&this.contents.addIn(e,t)}createAlias(e,t){if(!e.anchor){const n=Ff(this);e.anchor=!t||n.has(t)?Bf(t||"a",n):t}return new ja(e.anchor)}createNode(e,t,n){let s;if(typeof t=="function")e=t.call({"":e},"",e),s=t;else if(Array.isArray(t)){const _=R=>typeof R=="number"||R instanceof String||R instanceof Number,g=t.filter(_).map(String);g.length>0&&(t=t.concat(g)),s=t}else n===void 0&&t&&(n=t,t=void 0);const{aliasDuplicateObjects:r,anchorPrefix:a,flow:o,keepUndefined:c,onTagObj:l,tag:f}=n??{},{onAnchor:h,setAnchors:d,sourceObjects:p}=Zd(this,a||"a"),x={aliasDuplicateObjects:r??!0,keepUndefined:c??!1,onAnchor:h,onTagObj:l,replacer:s,schema:this.schema,sourceObjects:p},y=vr(e,f,x);return o&&Tt(y)&&(y.flow=!0),d(),y}createPair(e,t,n={}){const s=this.createNode(e,null,n),r=this.createNode(t,null,n);return new Qt(s,r)}delete(e){return rs(this.contents)?this.contents.delete(e):!1}deleteIn(e){return dr(e)?this.contents==null?!1:(this.contents=null,!0):rs(this.contents)?this.contents.deleteIn(e):!1}get(e,t){return Tt(this.contents)?this.contents.get(e,t):void 0}getIn(e,t){return dr(e)?!t&&xt(this.contents)?this.contents.value:this.contents:Tt(this.contents)?this.contents.getIn(e,t):void 0}has(e){return Tt(this.contents)?this.contents.has(e):!1}hasIn(e){return dr(e)?this.contents!==void 0:Tt(this.contents)?this.contents.hasIn(e):!1}set(e,t){this.contents==null?this.contents=Oa(this.schema,[e],t):rs(this.contents)&&this.contents.set(e,t)}setIn(e,t){dr(e)?this.contents=t:this.contents==null?this.contents=Oa(this.schema,Array.from(e),t):rs(this.contents)&&this.contents.setIn(e,t)}setSchema(e,t={}){typeof e=="number"&&(e=String(e));let n;switch(e){case"1.1":this.directives?this.directives.yaml.version="1.1":this.directives=new tn({version:"1.1"}),n={resolveKnownTags:!1,schema:"yaml-1.1"};break;case"1.2":case"next":this.directives?this.directives.yaml.version=e:this.directives=new tn({version:e}),n={resolveKnownTags:!0,schema:"core"};break;case null:this.directives&&delete this.directives,n=null;break;default:{const s=JSON.stringify(e);throw new Error(`Expected '1.1', '1.2' or null as first argument, but found: ${s}`)}}if(t.schema instanceof Object)this.schema=t.schema;else if(n)this.schema=new to(Object.assign(n,t));else throw new Error("With a null YAML version, the { schema: Schema } option is required")}toJS({json:e,jsonArg:t,mapAsMap:n,maxAliasCount:s,onAnchor:r,reviver:a}={}){const o={anchors:new Map,doc:this,keep:!e,mapAsMap:n===!0,mapKeyWarned:!1,maxAliasCount:typeof s=="number"?s:100},c=bn(this.contents,t??"",o);if(typeof r=="function")for(const{count:l,res:f}of o.anchors.values())r(f,l);return typeof a=="function"?As(a,{"":c},"",c):c}toJSON(e,t){return this.toJS({json:!0,jsonArg:e,mapAsMap:!1,onAnchor:t})}toString(e={}){if(this.errors.length>0)throw new Error("Document with errors cannot be stringified");if("indent"in e&&(!Number.isInteger(e.indent)||Number(e.indent)<=0)){const t=JSON.stringify(e.indent);throw new Error(`"indent" option must be a positive integer, not ${t}`)}return Sp(this,e)}}function rs(i){if(Tt(i))return!0;throw new Error("Expected a YAML collection as document contents")}class gc extends Error{constructor(e,t,n,s){super(),this.name=e,this.code=n,this.message=s,this.pos=t}}class qi extends gc{constructor(e,t,n){super("YAMLParseError",e,t,n)}}class uh extends gc{constructor(e,t,n){super("YAMLWarning",e,t,n)}}const ka=(i,e)=>t=>{if(t.pos[0]===-1)return;t.linePos=t.pos.map(o=>e.linePos(o));const{line:n,col:s}=t.linePos[0];t.message+=` at line ${n}, column ${s}`;let r=s-1,a=i.substring(e.lineStarts[n-1],e.lineStarts[n]).replace(/[\n\r]+$/,"");if(r>=60&&a.length>80){const o=Math.min(r-39,a.length-79);a="…"+a.substring(o),r-=o-1}if(a.length>80&&(a=a.substring(0,79)+"…"),n>1&&/^ *$/.test(a.substring(0,r))){let o=i.substring(e.lineStarts[n-2],e.lineStarts[n-1]);o.length>80&&(o=o.substring(0,79)+`…
`),a=o+a}if(/[^ ]/.test(a)){let o=1;const c=t.linePos[1];(c==null?void 0:c.line)===n&&c.col>s&&(o=Math.max(1,Math.min(c.col-s,80-r)));const l=" ".repeat(r)+"^".repeat(o);t.message+=`:

${a}
${l}
`}};function ks(i,{flow:e,indicator:t,next:n,offset:s,onError:r,parentIndent:a,startOnNewline:o}){let c=!1,l=o,f=o,h="",d="",p=!1,x=!1,y=null,_=null,g=null,R=null,T=null,w=null,L=null;for(const D of i)switch(x&&(D.type!=="space"&&D.type!=="newline"&&D.type!=="comma"&&r(D.offset,"MISSING_CHAR","Tags and anchors must be separated from the next token by white space"),x=!1),y&&(l&&D.type!=="comment"&&D.type!=="newline"&&r(y,"TAB_AS_INDENT","Tabs are not allowed as indentation"),y=null),D.type){case"space":!e&&(t!=="doc-start"||(n==null?void 0:n.type)!=="flow-collection")&&D.source.includes("	")&&(y=D),f=!0;break;case"comment":{f||r(D,"MISSING_CHAR","Comments must be separated from other tokens by white space characters");const S=D.source.substring(1)||" ";h?h+=d+S:h=S,d="",l=!1;break}case"newline":l?h?h+=D.source:(!w||t!=="seq-item-ind")&&(c=!0):d+=D.source,l=!0,p=!0,(_||g)&&(R=D),f=!0;break;case"anchor":_&&r(D,"MULTIPLE_ANCHORS","A node can have at most one anchor"),D.source.endsWith(":")&&r(D.offset+D.source.length-1,"BAD_ALIAS","Anchor ending in : is ambiguous",!0),_=D,L??(L=D.offset),l=!1,f=!1,x=!0;break;case"tag":{g&&r(D,"MULTIPLE_TAGS","A node can have at most one tag"),g=D,L??(L=D.offset),l=!1,f=!1,x=!0;break}case t:(_||g)&&r(D,"BAD_PROP_ORDER",`Anchors and tags must be after the ${D.source} indicator`),w&&r(D,"UNEXPECTED_TOKEN",`Unexpected ${D.source} in ${e??"collection"}`),w=D,l=t==="seq-item-ind"||t==="explicit-key-ind",f=!1;break;case"comma":if(e){T&&r(D,"UNEXPECTED_TOKEN",`Unexpected , in ${e}`),T=D,l=!1,f=!1;break}default:r(D,"UNEXPECTED_TOKEN",`Unexpected ${D.type} token`),l=!1,f=!1}const I=i[i.length-1],C=I?I.offset+I.source.length:s;return x&&n&&n.type!=="space"&&n.type!=="newline"&&n.type!=="comma"&&(n.type!=="scalar"||n.source!=="")&&r(n.offset,"MISSING_CHAR","Tags and anchors must be separated from the next token by white space"),y&&(l&&y.indent<=a||(n==null?void 0:n.type)==="block-map"||(n==null?void 0:n.type)==="block-seq")&&r(y,"TAB_AS_INDENT","Tabs are not allowed as indentation"),{comma:T,found:w,spaceBefore:c,comment:h,hasNewline:p,anchor:_,tag:g,newlineAfterProp:R,end:C,start:L??C}}function yr(i){if(!i)return null;switch(i.type){case"alias":case"scalar":case"double-quoted-scalar":case"single-quoted-scalar":if(i.source.includes(`
`))return!0;if(i.end){for(const e of i.end)if(e.type==="newline")return!0}return!1;case"flow-collection":for(const e of i.items){for(const t of e.start)if(t.type==="newline")return!0;if(e.sep){for(const t of e.sep)if(t.type==="newline")return!0}if(yr(e.key)||yr(e.value))return!0}return!1;default:return!0}}function fl(i,e,t){if((e==null?void 0:e.type)==="flow-collection"){const n=e.end[0];n.indent===i&&(n.source==="]"||n.source==="}")&&yr(e)&&t(n,"BAD_INDENT","Flow end indicator should be more indented than parent",!0)}}function fh(i,e,t){const{uniqueKeys:n}=i.options;if(n===!1)return!1;const s=typeof n=="function"?n:(r,a)=>r===a||xt(r)&&xt(a)&&r.value===a.value;return e.some(r=>s(r.key,t))}const eu="All mapping items must start at the same column";function Ep({composeNode:i,composeEmptyNode:e},t,n,s,r){var f;const a=(r==null?void 0:r.nodeClass)??gn,o=new a(t.schema);t.atRoot&&(t.atRoot=!1);let c=n.offset,l=null;for(const h of n.items){const{start:d,key:p,sep:x,value:y}=h,_=ks(d,{indicator:"explicit-key-ind",next:p??(x==null?void 0:x[0]),offset:c,onError:s,parentIndent:n.indent,startOnNewline:!0}),g=!_.found;if(g){if(p&&(p.type==="block-seq"?s(c,"BLOCK_AS_IMPLICIT_KEY","A block sequence may not be used as an implicit map key"):"indent"in p&&p.indent!==n.indent&&s(c,"BAD_INDENT",eu)),!_.anchor&&!_.tag&&!x){l=_.end,_.comment&&(o.comment?o.comment+=`
`+_.comment:o.comment=_.comment);continue}(_.newlineAfterProp||yr(p))&&s(p??d[d.length-1],"MULTILINE_IMPLICIT_KEY","Implicit keys need to be on a single line")}else((f=_.found)==null?void 0:f.indent)!==n.indent&&s(c,"BAD_INDENT",eu);t.atKey=!0;const R=_.end,T=p?i(t,p,_,s):e(t,R,d,null,_,s);t.schema.compat&&fl(n.indent,p,s),t.atKey=!1,fh(t,o.items,T)&&s(R,"DUPLICATE_KEY","Map keys must be unique");const w=ks(x??[],{indicator:"map-value-ind",next:y,offset:T.range[2],onError:s,parentIndent:n.indent,startOnNewline:!p||p.type==="block-scalar"});if(c=w.end,w.found){g&&((y==null?void 0:y.type)==="block-map"&&!w.hasNewline&&s(c,"BLOCK_AS_IMPLICIT_KEY","Nested mappings are not allowed in compact mappings"),t.options.strict&&_.start<w.found.offset-1024&&s(T.range,"KEY_OVER_1024_CHARS","The : indicator must be at most 1024 chars after the start of an implicit block mapping key"));const L=y?i(t,y,w,s):e(t,c,x,null,w,s);t.schema.compat&&fl(n.indent,y,s),c=L.range[2];const I=new Qt(T,L);t.options.keepSourceTokens&&(I.srcToken=h),o.items.push(I)}else{g&&s(T.range,"MISSING_CHAR","Implicit map keys need to be followed by map values"),w.comment&&(T.comment?T.comment+=`
`+w.comment:T.comment=w.comment);const L=new Qt(T);t.options.keepSourceTokens&&(L.srcToken=h),o.items.push(L)}}return l&&l<c&&s(l,"IMPOSSIBLE","Map comment with trailing content"),o.range=[n.offset,c,l??c],o}function Tp({composeNode:i,composeEmptyNode:e},t,n,s,r){const a=(r==null?void 0:r.nodeClass)??Ei,o=new a(t.schema);t.atRoot&&(t.atRoot=!1),t.atKey&&(t.atKey=!1);let c=n.offset,l=null;for(const{start:f,value:h}of n.items){const d=ks(f,{indicator:"seq-item-ind",next:h,offset:c,onError:s,parentIndent:n.indent,startOnNewline:!0});if(!d.found)if(d.anchor||d.tag||h)(h==null?void 0:h.type)==="block-seq"?s(d.end,"BAD_INDENT","All sequence items must start at the same column"):s(c,"MISSING_CHAR","Sequence item without - indicator");else{l=d.end,d.comment&&(o.comment=d.comment);continue}const p=h?i(t,h,d,s):e(t,d.end,f,null,d,s);t.schema.compat&&fl(n.indent,h,s),c=p.range[2],o.items.push(p)}return o.range=[n.offset,c,l??c],o}function Cr(i,e,t,n){let s="";if(i){let r=!1,a="";for(const o of i){const{source:c,type:l}=o;switch(l){case"space":r=!0;break;case"comment":{t&&!r&&n(o,"MISSING_CHAR","Comments must be separated from other tokens by white space characters");const f=c.substring(1)||" ";s?s+=a+f:s=f,a="";break}case"newline":s&&(a+=c),r=!0;break;default:n(o,"UNEXPECTED_TOKEN",`Unexpected ${l} at node end`)}e+=c.length}}return{comment:s,offset:e}}const go="Block collections are not allowed within flow collections",_o=i=>i&&(i.type==="block-map"||i.type==="block-seq");function Ap({composeNode:i,composeEmptyNode:e},t,n,s,r){var _;const a=n.start.source==="{",o=a?"flow map":"flow sequence",c=(r==null?void 0:r.nodeClass)??(a?gn:Ei),l=new c(t.schema);l.flow=!0;const f=t.atRoot;f&&(t.atRoot=!1),t.atKey&&(t.atKey=!1);let h=n.offset+n.start.source.length;for(let g=0;g<n.items.length;++g){const R=n.items[g],{start:T,key:w,sep:L,value:I}=R,C=ks(T,{flow:o,indicator:"explicit-key-ind",next:w??(L==null?void 0:L[0]),offset:h,onError:s,parentIndent:n.indent,startOnNewline:!1});if(!C.found){if(!C.anchor&&!C.tag&&!L&&!I){g===0&&C.comma?s(C.comma,"UNEXPECTED_TOKEN",`Unexpected , in ${o}`):g<n.items.length-1&&s(C.start,"UNEXPECTED_TOKEN",`Unexpected empty item in ${o}`),C.comment&&(l.comment?l.comment+=`
`+C.comment:l.comment=C.comment),h=C.end;continue}!a&&t.options.strict&&yr(w)&&s(w,"MULTILINE_IMPLICIT_KEY","Implicit keys of flow sequence pairs need to be on a single line")}if(g===0)C.comma&&s(C.comma,"UNEXPECTED_TOKEN",`Unexpected , in ${o}`);else if(C.comma||s(C.start,"MISSING_CHAR",`Missing , between ${o} items`),C.comment){let D="";e:for(const S of T)switch(S.type){case"comma":case"space":break;case"comment":D=S.source.substring(1);break e;default:break e}if(D){let S=l.items[l.items.length-1];St(S)&&(S=S.value??S.key),S.comment?S.comment+=`
`+D:S.comment=D,C.comment=C.comment.substring(D.length+1)}}if(!a&&!L&&!C.found){const D=I?i(t,I,C,s):e(t,C.end,L,null,C,s);l.items.push(D),h=D.range[2],_o(I)&&s(D.range,"BLOCK_IN_FLOW",go)}else{t.atKey=!0;const D=C.end,S=w?i(t,w,C,s):e(t,D,T,null,C,s);_o(w)&&s(S.range,"BLOCK_IN_FLOW",go),t.atKey=!1;const b=ks(L??[],{flow:o,indicator:"map-value-ind",next:I,offset:S.range[2],onError:s,parentIndent:n.indent,startOnNewline:!1});if(b.found){if(!a&&!C.found&&t.options.strict){if(L)for(const k of L){if(k===b.found)break;if(k.type==="newline"){s(k,"MULTILINE_IMPLICIT_KEY","Implicit keys of flow sequence pairs need to be on a single line");break}}C.start<b.found.offset-1024&&s(b.found,"KEY_OVER_1024_CHARS","The : indicator must be at most 1024 chars after the start of an implicit flow sequence key")}}else I&&("source"in I&&((_=I.source)==null?void 0:_[0])===":"?s(I,"MISSING_CHAR",`Missing space after : in ${o}`):s(b.start,"MISSING_CHAR",`Missing , or : between ${o} items`));const N=I?i(t,I,b,s):b.found?e(t,b.end,L,null,b,s):null;N?_o(I)&&s(N.range,"BLOCK_IN_FLOW",go):b.comment&&(S.comment?S.comment+=`
`+b.comment:S.comment=b.comment);const F=new Qt(S,N);if(t.options.keepSourceTokens&&(F.srcToken=R),a){const k=l;fh(t,k.items,S)&&s(D,"DUPLICATE_KEY","Map keys must be unique"),k.items.push(F)}else{const k=new gn(t.schema);k.flow=!0,k.items.push(F);const $=(N??S).range;k.range=[S.range[0],$[1],$[2]],l.items.push(k)}h=N?N.range[2]:b.end}}const d=a?"}":"]",[p,...x]=n.end;let y=h;if((p==null?void 0:p.source)===d)y=p.offset+p.source.length;else{const g=o[0].toUpperCase()+o.substring(1),R=f?`${g} must end with a ${d}`:`${g} in block collection must be sufficiently indented and end with a ${d}`;s(h,f?"MISSING_CHAR":"BAD_INDENT",R),p&&p.source.length!==1&&x.unshift(p)}if(x.length>0){const g=Cr(x,y,t.options.strict,s);g.comment&&(l.comment?l.comment+=`
`+g.comment:l.comment=g.comment),l.range=[n.offset,y,g.offset]}else l.range=[n.offset,y,y];return l}function vo(i,e,t,n,s,r){const a=t.type==="block-map"?Ep(i,e,t,n,r):t.type==="block-seq"?Tp(i,e,t,n,r):Ap(i,e,t,n,r),o=a.constructor;return s==="!"||s===o.tagName?(a.tag=o.tagName,a):(s&&(a.tag=s),a)}function Rp(i,e,t,n,s){var d;const r=n.tag,a=r?e.directives.tagName(r.source,p=>s(r,"TAG_RESOLVE_FAILED",p)):null;if(t.type==="block-seq"){const{anchor:p,newlineAfterProp:x}=n,y=p&&r?p.offset>r.offset?p:r:p??r;y&&(!x||x.offset<y.offset)&&s(y,"MISSING_CHAR","Missing newline after block sequence props")}const o=t.type==="block-map"?"map":t.type==="block-seq"?"seq":t.start.source==="{"?"map":"seq";if(!r||!a||a==="!"||a===gn.tagName&&o==="map"||a===Ei.tagName&&o==="seq")return vo(i,e,t,s,a);let c=e.schema.tags.find(p=>p.tag===a&&p.collection===o);if(!c){const p=e.schema.knownTags[a];if((p==null?void 0:p.collection)===o)e.schema.tags.push(Object.assign({},p,{default:!1})),c=p;else return p?s(r,"BAD_COLLECTION_TYPE",`${p.tag} used for ${o} collection, but expects ${p.collection??"scalar"}`,!0):s(r,"TAG_RESOLVE_FAILED",`Unresolved tag: ${a}`,!0),vo(i,e,t,s,a)}const l=vo(i,e,t,s,a,c),f=((d=c.resolve)==null?void 0:d.call(c,l,p=>s(r,"TAG_RESOLVE_FAILED",p),e.options))??l,h=At(f)?f:new Ze(f);return h.range=l.range,h.tag=a,c!=null&&c.format&&(h.format=c.format),h}function hh(i,e,t){const n=e.offset,s=Cp(e,i.options.strict,t);if(!s)return{value:"",type:null,comment:"",range:[n,n,n]};const r=s.mode===">"?Ze.BLOCK_FOLDED:Ze.BLOCK_LITERAL,a=e.source?Pp(e.source):[];let o=a.length;for(let y=a.length-1;y>=0;--y){const _=a[y][1];if(_===""||_==="\r")o=y;else break}if(o===0){const y=s.chomp==="+"&&a.length>0?`
`.repeat(Math.max(1,a.length-1)):"";let _=n+s.length;return e.source&&(_+=e.source.length),{value:y,type:r,comment:s.comment,range:[n,_,_]}}let c=e.indent+s.indent,l=e.offset+s.length,f=0;for(let y=0;y<o;++y){const[_,g]=a[y];if(g===""||g==="\r")s.indent===0&&_.length>c&&(c=_.length);else{_.length<c&&t(l+_.length,"MISSING_CHAR","Block scalars with more-indented leading empty lines must use an explicit indentation indicator"),s.indent===0&&(c=_.length),f=y,c===0&&!i.atRoot&&t(l,"BAD_INDENT","Block scalar values in collections must be indented");break}l+=_.length+g.length+1}for(let y=a.length-1;y>=o;--y)a[y][0].length>c&&(o=y+1);let h="",d="",p=!1;for(let y=0;y<f;++y)h+=a[y][0].slice(c)+`
`;for(let y=f;y<o;++y){let[_,g]=a[y];l+=_.length+g.length+1;const R=g[g.length-1]==="\r";if(R&&(g=g.slice(0,-1)),g&&_.length<c){const w=`Block scalar lines must not be less indented than their ${s.indent?"explicit indentation indicator":"first line"}`;t(l-g.length-(R?2:1),"BAD_INDENT",w),_=""}r===Ze.BLOCK_LITERAL?(h+=d+_.slice(c)+g,d=`
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
`}const x=n+s.length+e.source.length;return{value:h,type:r,comment:s.comment,range:[n,x,x]}}function Cp({offset:i,props:e},t,n){if(e[0].type!=="block-scalar-header")return n(e[0],"IMPOSSIBLE","Block scalar header not found"),null;const{source:s}=e[0],r=s[0];let a=0,o="",c=-1;for(let d=1;d<s.length;++d){const p=s[d];if(!o&&(p==="-"||p==="+"))o=p;else{const x=Number(p);!a&&x?a=x:c===-1&&(c=i+d)}}c!==-1&&n(c,"UNEXPECTED_TOKEN",`Block scalar header includes extra characters: ${s}`);let l=!1,f="",h=s.length;for(let d=1;d<e.length;++d){const p=e[d];switch(p.type){case"space":l=!0;case"newline":h+=p.source.length;break;case"comment":t&&!l&&n(p,"MISSING_CHAR","Comments must be separated from other tokens by white space characters"),h+=p.source.length,f=p.source.substring(1);break;case"error":n(p,"UNEXPECTED_TOKEN",p.message),h+=p.source.length;break;default:{const x=`Unexpected token in block scalar header: ${p.type}`;n(p,"UNEXPECTED_TOKEN",x);const y=p.source;y&&typeof y=="string"&&(h+=y.length)}}}return{mode:r,indent:a,chomp:o,comment:f,length:h}}function Pp(i){const e=i.split(/\n( *)/),t=e[0],n=t.match(/^( *)/),r=[n!=null&&n[1]?[n[1],t.slice(n[1].length)]:["",t]];for(let a=1;a<e.length;a+=2)r.push([e[a],e[a+1]]);return r}function dh(i,e,t){const{offset:n,type:s,source:r,end:a}=i;let o,c;const l=(d,p,x)=>t(n+d,p,x);switch(s){case"scalar":o=Ze.PLAIN,c=Lp(r,l);break;case"single-quoted-scalar":o=Ze.QUOTE_SINGLE,c=Ip(r,l);break;case"double-quoted-scalar":o=Ze.QUOTE_DOUBLE,c=Dp(r,l);break;default:return t(i,"UNEXPECTED_TOKEN",`Expected a flow scalar value, but found: ${s}`),{value:"",type:null,comment:"",range:[n,n+r.length,n+r.length]}}const f=n+r.length,h=Cr(a,f,e,t);return{value:c,type:o,comment:h.comment,range:[n,f,h.offset]}}function Lp(i,e){let t="";switch(i[0]){case"	":t="a tab character";break;case",":t="flow indicator character ,";break;case"%":t="directive indicator character %";break;case"|":case">":{t=`block scalar indicator ${i[0]}`;break}case"@":case"`":{t=`reserved character ${i[0]}`;break}}return t&&e(0,"BAD_SCALAR_START",`Plain value cannot start with ${t}`),ph(i)}function Ip(i,e){return(i[i.length-1]!=="'"||i.length===1)&&e(i.length,"MISSING_CHAR","Missing closing 'quote"),ph(i.slice(1,-1)).replace(/''/g,"'")}function ph(i){const e=/(.*?)\r?\n/sy;let t=e.exec(i);if(!t)return i;let n,s;try{n=new RegExp("(?<![ 	])[ 	]+$"),s=new RegExp("^[ 	]+|(?<![ 	])[ 	]+$","g")}catch{n=/[ \t]+$/,s=/^[ \t]+|[ \t]+$/g}let r=t[1].replace(n,""),a=" ",o=e.lastIndex;for(;t=e.exec(i);){const l=t[1].replace(s,"");l===""?a===`
`?r+=a:a=`
`:(r+=a+l,a=" "),o=e.lastIndex}const c=/[ \t]*(.*)/sy;return c.lastIndex=o,t=c.exec(i),r+a+((t==null?void 0:t[1])??"")}function Dp(i,e){let t="";for(let n=1;n<i.length-1;++n){const s=i[n];if(!(s==="\r"&&i[n+1]===`
`))if(s===`
`){const{fold:r,offset:a}=Np(i,n);t+=r,n=a}else if(s==="\\"){let r=i[++n];const a=Op[r];if(a)t+=a;else if(r===`
`)for(r=i[n+1];r===" "||r==="	";)r=i[++n+1];else if(r==="\r"&&i[n+1]===`
`)for(r=i[++n+1];r===" "||r==="	";)r=i[++n+1];else if(r==="x"||r==="u"||r==="U"){const o=r==="x"?2:r==="u"?4:8;t+=Up(i,n+1,o,e),n+=o}else{const o=i.substr(n-1,2);e(n-1,"BAD_DQ_ESCAPE",`Invalid escape sequence ${o}`),t+=o}}else if(s===" "||s==="	"){const r=n;let a=i[n+1];for(;a===" "||a==="	";)a=i[++n+1];a!==`
`&&!(a==="\r"&&i[n+2]===`
`)&&(t+=n>r?i.slice(r,n+1):s)}else t+=s}return(i[i.length-1]!=='"'||i.length===1)&&e(i.length,"MISSING_CHAR",'Missing closing "quote'),t}function Np(i,e){let t="",n=i[e+1];for(;(n===" "||n==="	"||n===`
`||n==="\r")&&!(n==="\r"&&i[e+2]!==`
`);)n===`
`&&(t+=`
`),e+=1,n=i[e+1];return t||(t=" "),{fold:t,offset:e}}const Op={0:"\0",a:"\x07",b:"\b",e:"\x1B",f:"\f",n:`
`,r:"\r",t:"	",v:"\v",N:"",_:" ",L:"\u2028",P:"\u2029"," ":" ",'"':'"',"/":"/","\\":"\\","	":"	"};function Up(i,e,t,n){const s=i.substr(e,t),a=s.length===t&&/^[0-9a-fA-F]+$/.test(s)?parseInt(s,16):NaN;try{return String.fromCodePoint(a)}catch{const o=i.substr(e-2,t+2);return n(e-2,"BAD_DQ_ESCAPE",`Invalid escape sequence ${o}`),o}}function mh(i,e,t,n){const{value:s,type:r,comment:a,range:o}=e.type==="block-scalar"?hh(i,e,n):dh(e,i.options.strict,n),c=t?i.directives.tagName(t.source,h=>n(t,"TAG_RESOLVE_FAILED",h)):null;let l;i.options.stringKeys&&i.atKey?l=i.schema[Gn]:c?l=kp(i.schema,s,c,t,n):e.type==="scalar"?l=Fp(i,s,e,n):l=i.schema[Gn];let f;try{const h=l.resolve(s,d=>n(t??e,"TAG_RESOLVE_FAILED",d),i.options);f=xt(h)?h:new Ze(h)}catch(h){const d=h instanceof Error?h.message:String(h);n(t??e,"TAG_RESOLVE_FAILED",d),f=new Ze(s)}return f.range=o,f.source=s,r&&(f.type=r),c&&(f.tag=c),l.format&&(f.format=l.format),a&&(f.comment=a),f}function kp(i,e,t,n,s){var o;if(t==="!")return i[Gn];const r=[];for(const c of i.tags)if(!c.collection&&c.tag===t)if(c.default&&c.test)r.push(c);else return c;for(const c of r)if((o=c.test)!=null&&o.test(e))return c;const a=i.knownTags[t];return a&&!a.collection?(i.tags.push(Object.assign({},a,{default:!1,test:void 0})),a):(s(n,"TAG_RESOLVE_FAILED",`Unresolved tag: ${t}`,t!=="tag:yaml.org,2002:str"),i[Gn])}function Fp({atKey:i,directives:e,schema:t},n,s,r){const a=t.tags.find(o=>{var c;return(o.default===!0||i&&o.default==="key")&&((c=o.test)==null?void 0:c.test(n))})||t[Gn];if(t.compat){const o=t.compat.find(c=>{var l;return c.default&&((l=c.test)==null?void 0:l.test(n))})??t[Gn];if(a.tag!==o.tag){const c=e.tagString(a.tag),l=e.tagString(o.tag),f=`Value may be parsed as either ${c} or ${l}`;r(s,"TAG_RESOLVE_FAILED",f,!0)}}return a}function Bp(i,e,t){if(e){t??(t=e.length);for(let n=t-1;n>=0;--n){let s=e[n];switch(s.type){case"space":case"comment":case"newline":i-=s.source.length;continue}for(s=e[++n];(s==null?void 0:s.type)==="space";)i+=s.source.length,s=e[++n];break}}return i}const zp={composeNode:gh,composeEmptyNode:_c};function gh(i,e,t,n){const s=i.atKey,{spaceBefore:r,comment:a,anchor:o,tag:c}=t;let l,f=!0;switch(e.type){case"alias":l=Hp(i,e,n),(o||c)&&n(e,"ALIAS_PROPS","An alias node must not specify any properties");break;case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":case"block-scalar":l=mh(i,e,c,n),o&&(l.anchor=o.source.substring(1));break;case"block-map":case"block-seq":case"flow-collection":try{l=Rp(zp,i,e,t,n),o&&(l.anchor=o.source.substring(1))}catch(h){const d=h instanceof Error?h.message:String(h);n(e,"RESOURCE_EXHAUSTION",d)}break;default:{const h=e.type==="error"?e.message:`Unsupported token (type: ${e.type})`;n(e,"UNEXPECTED_TOKEN",h),f=!1}}return l??(l=_c(i,e.offset,void 0,null,t,n)),o&&l.anchor===""&&n(o,"BAD_ALIAS","Anchor cannot be an empty string"),s&&i.options.stringKeys&&(!xt(l)||typeof l.value!="string"||l.tag&&l.tag!=="tag:yaml.org,2002:str")&&n(c??e,"NON_STRING_KEY","With stringKeys, all keys must be strings"),r&&(l.spaceBefore=!0),a&&(e.type==="scalar"&&e.source===""?l.comment=a:l.commentBefore=a),i.options.keepSourceTokens&&f&&(l.srcToken=e),l}function _c(i,e,t,n,{spaceBefore:s,comment:r,anchor:a,tag:o,end:c},l){const f={type:"scalar",offset:Bp(e,t,n),indent:-1,source:""},h=mh(i,f,o,l);return a&&(h.anchor=a.source.substring(1),h.anchor===""&&l(a,"BAD_ALIAS","Anchor cannot be an empty string")),s&&(h.spaceBefore=!0),r&&(h.comment=r,h.range[2]=c),h}function Hp({options:i},{offset:e,source:t,end:n},s){const r=new ja(t.substring(1));r.source===""&&s(e,"BAD_ALIAS","Alias cannot be an empty string"),r.source.endsWith(":")&&s(e+t.length-1,"BAD_ALIAS","Alias ending in : is ambiguous",!0);const a=e+t.length,o=Cr(n,a,i.strict,s);return r.range=[e,a,o.offset],o.comment&&(r.comment=o.comment),r}function Vp(i,e,{offset:t,start:n,value:s,end:r},a){const o=Object.assign({_directives:e},i),c=new Ys(void 0,o),l={atKey:!1,atRoot:!0,directives:c.directives,options:c.options,schema:c.schema},f=ks(n,{indicator:"doc-start",next:s??(r==null?void 0:r[0]),offset:t,onError:a,parentIndent:0,startOnNewline:!0});f.found&&(c.directives.docStart=!0,s&&(s.type==="block-map"||s.type==="block-seq")&&!f.hasNewline&&a(f.end,"MISSING_CHAR","Block collection cannot start on same line with directives-end marker")),c.contents=s?gh(l,s,f,a):_c(l,f.end,n,null,f,a);const h=c.contents.range[2],d=Cr(r,h,!1,a);return d.comment&&(c.comment=d.comment),c.range=[t,h,d.offset],c}function ar(i){if(typeof i=="number")return[i,i+1];if(Array.isArray(i))return i.length===2?i:[i[0],i[1]];const{offset:e,source:t}=i;return[e,e+(typeof t=="string"?t.length:1)]}function tu(i){var s;let e="",t=!1,n=!1;for(let r=0;r<i.length;++r){const a=i[r];switch(a[0]){case"#":e+=(e===""?"":n?`

`:`
`)+(a.substring(1)||" "),t=!0,n=!1;break;case"%":((s=i[r+1])==null?void 0:s[0])!=="#"&&(r+=1),t=!1;break;default:t||(n=!0),t=!1}}return{comment:e,afterEmptyLine:n}}class vc{constructor(e={}){this.doc=null,this.atDirectives=!1,this.prelude=[],this.errors=[],this.warnings=[],this.onError=(t,n,s,r)=>{const a=ar(t);r?this.warnings.push(new uh(a,n,s)):this.errors.push(new qi(a,n,s))},this.directives=new tn({version:e.version||"1.2"}),this.options=e}decorate(e,t){const{comment:n,afterEmptyLine:s}=tu(this.prelude);if(n){const r=e.contents;if(t)e.comment=e.comment?`${e.comment}
${n}`:n;else if(s||e.directives.docStart||!r)e.commentBefore=n;else if(Tt(r)&&!r.flow&&r.items.length>0){let a=r.items[0];St(a)&&(a=a.key);const o=a.commentBefore;a.commentBefore=o?`${n}
${o}`:n}else{const a=r.commentBefore;r.commentBefore=a?`${n}
${a}`:n}}if(t){for(let r=0;r<this.errors.length;++r)e.errors.push(this.errors[r]);for(let r=0;r<this.warnings.length;++r)e.warnings.push(this.warnings[r])}else e.errors=this.errors,e.warnings=this.warnings;this.prelude=[],this.errors=[],this.warnings=[]}streamInfo(){return{comment:tu(this.prelude).comment,directives:this.directives,errors:this.errors,warnings:this.warnings}}*compose(e,t=!1,n=-1){for(const s of e)yield*this.next(s);yield*this.end(t,n)}*next(e){switch(e.type){case"directive":this.directives.add(e.source,(t,n,s)=>{const r=ar(e);r[0]+=t,this.onError(r,"BAD_DIRECTIVE",n,s)}),this.prelude.push(e.source),this.atDirectives=!0;break;case"document":{const t=Vp(this.options,this.directives,e,this.onError);this.atDirectives&&!t.directives.docStart&&this.onError(e,"MISSING_CHAR","Missing directives-end/doc-start indicator line"),this.decorate(t,!1),this.doc&&(yield this.doc),this.doc=t,this.atDirectives=!1;break}case"byte-order-mark":case"space":break;case"comment":case"newline":this.prelude.push(e.source);break;case"error":{const t=e.source?`${e.message}: ${JSON.stringify(e.source)}`:e.message,n=new qi(ar(e),"UNEXPECTED_TOKEN",t);this.atDirectives||!this.doc?this.errors.push(n):this.doc.errors.push(n);break}case"doc-end":{if(!this.doc){const n="Unexpected doc-end without preceding document";this.errors.push(new qi(ar(e),"UNEXPECTED_TOKEN",n));break}this.doc.directives.docEnd=!0;const t=Cr(e.end,e.offset+e.source.length,this.doc.options.strict,this.onError);if(this.decorate(this.doc,!0),t.comment){const n=this.doc.comment;this.doc.comment=n?`${n}
${t.comment}`:t.comment}this.doc.range[2]=t.offset;break}default:this.errors.push(new qi(ar(e),"UNEXPECTED_TOKEN",`Unsupported token ${e.type}`))}}*end(e=!1,t=-1){if(this.doc)this.decorate(this.doc,!0),yield this.doc,this.doc=null;else if(e){const n=Object.assign({_directives:this.directives},this.options),s=new Ys(void 0,n);this.atDirectives&&this.onError(t,"MISSING_CHAR","Missing directives-end indicator line"),s.range=[0,t,t],this.decorate(s,!1),yield s}}}function Gp(i,e=!0,t){if(i){const n=(s,r,a)=>{const o=typeof s=="number"?s:Array.isArray(s)?s[0]:s.offset;if(t)t(o,r,a);else throw new qi([o,o+1],r,a)};switch(i.type){case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":return dh(i,e,n);case"block-scalar":return hh({options:{strict:e}},i,n)}}return null}function Wp(i,e){const{implicitKey:t=!1,indent:n,inFlow:s=!1,offset:r=-1,type:a="PLAIN"}=e,o=Ar({type:a,value:i},{implicitKey:t,indent:n>0?" ".repeat(n):"",inFlow:s,options:{blockQuote:!0,lineWidth:-1}}),c=e.end??[{type:"newline",offset:-1,indent:n,source:`
`}];switch(o[0]){case"|":case">":{const l=o.indexOf(`
`),f=o.substring(0,l),h=o.substring(l+1)+`
`,d=[{type:"block-scalar-header",offset:r,indent:n,source:f}];return _h(d,c)||d.push({type:"newline",offset:-1,indent:n,source:`
`}),{type:"block-scalar",offset:r,indent:n,props:d,source:h}}case'"':return{type:"double-quoted-scalar",offset:r,indent:n,source:o,end:c};case"'":return{type:"single-quoted-scalar",offset:r,indent:n,source:o,end:c};default:return{type:"scalar",offset:r,indent:n,source:o,end:c}}}function qp(i,e,t={}){let{afterKey:n=!1,implicitKey:s=!1,inFlow:r=!1,type:a}=t,o="indent"in i?i.indent:null;if(n&&typeof o=="number"&&(o+=2),!a)switch(i.type){case"single-quoted-scalar":a="QUOTE_SINGLE";break;case"double-quoted-scalar":a="QUOTE_DOUBLE";break;case"block-scalar":{const l=i.props[0];if(l.type!=="block-scalar-header")throw new Error("Invalid block scalar header");a=l.source[0]===">"?"BLOCK_FOLDED":"BLOCK_LITERAL";break}default:a="PLAIN"}const c=Ar({type:a,value:e},{implicitKey:s||o===null,indent:o!==null&&o>0?" ".repeat(o):"",inFlow:r,options:{blockQuote:!0,lineWidth:-1}});switch(c[0]){case"|":case">":jp(i,c);break;case'"':yo(i,c,"double-quoted-scalar");break;case"'":yo(i,c,"single-quoted-scalar");break;default:yo(i,c,"scalar")}}function jp(i,e){const t=e.indexOf(`
`),n=e.substring(0,t),s=e.substring(t+1)+`
`;if(i.type==="block-scalar"){const r=i.props[0];if(r.type!=="block-scalar-header")throw new Error("Invalid block scalar header");r.source=n,i.source=s}else{const{offset:r}=i,a="indent"in i?i.indent:-1,o=[{type:"block-scalar-header",offset:r,indent:a,source:n}];_h(o,"end"in i?i.end:void 0)||o.push({type:"newline",offset:-1,indent:a,source:`
`});for(const c of Object.keys(i))c!=="type"&&c!=="offset"&&delete i[c];Object.assign(i,{type:"block-scalar",indent:a,props:o,source:s})}}function _h(i,e){if(e)for(const t of e)switch(t.type){case"space":case"comment":i.push(t);break;case"newline":return i.push(t),!0}return!1}function yo(i,e,t){switch(i.type){case"scalar":case"double-quoted-scalar":case"single-quoted-scalar":i.type=t,i.source=e;break;case"block-scalar":{const n=i.props.slice(1);let s=e.length;i.props[0].type==="block-scalar-header"&&(s-=i.props[0].source.length);for(const r of n)r.offset+=s;delete i.props,Object.assign(i,{type:t,source:e,end:n});break}case"block-map":case"block-seq":{const s={type:"newline",offset:i.offset+e.length,indent:i.indent,source:`
`};delete i.items,Object.assign(i,{type:t,source:e,end:[s]});break}default:{const n="indent"in i?i.indent:-1,s="end"in i&&Array.isArray(i.end)?i.end.filter(r=>r.type==="space"||r.type==="comment"||r.type==="newline"):[];for(const r of Object.keys(i))r!=="type"&&r!=="offset"&&delete i[r];Object.assign(i,{type:t,indent:n,source:e,end:s})}}}const Xp=i=>"type"in i?Fa(i):Ea(i);function Fa(i){switch(i.type){case"block-scalar":{let e="";for(const t of i.props)e+=Fa(t);return e+i.source}case"block-map":case"block-seq":{let e="";for(const t of i.items)e+=Ea(t);return e}case"flow-collection":{let e=i.start.source;for(const t of i.items)e+=Ea(t);for(const t of i.end)e+=t.source;return e}case"document":{let e=Ea(i);if(i.end)for(const t of i.end)e+=t.source;return e}default:{let e=i.source;if("end"in i&&i.end)for(const t of i.end)e+=t.source;return e}}}function Ea({start:i,key:e,sep:t,value:n}){let s="";for(const r of i)s+=r.source;if(e&&(s+=Fa(e)),t)for(const r of t)s+=r.source;return n&&(s+=Fa(n)),s}const hl=Symbol("break visit"),$p=Symbol("skip children"),vh=Symbol("remove item");function $i(i,e){"type"in i&&i.type==="document"&&(i={start:i.start,value:i.value}),yh(Object.freeze([]),i,e)}$i.BREAK=hl;$i.SKIP=$p;$i.REMOVE=vh;$i.itemAtPath=(i,e)=>{let t=i;for(const[n,s]of e){const r=t==null?void 0:t[n];if(r&&"items"in r)t=r.items[s];else return}return t};$i.parentCollection=(i,e)=>{const t=$i.itemAtPath(i,e.slice(0,-1)),n=e[e.length-1][0],s=t==null?void 0:t[n];if(s&&"items"in s)return s;throw new Error("Parent collection not found")};function yh(i,e,t){let n=t(e,i);if(typeof n=="symbol")return n;for(const s of["key","value"]){const r=e[s];if(r&&"items"in r){for(let a=0;a<r.items.length;++a){const o=yh(Object.freeze(i.concat([[s,a]])),r.items[a],t);if(typeof o=="number")a=o-1;else{if(o===hl)return hl;o===vh&&(r.items.splice(a,1),a-=1)}}typeof n=="function"&&s==="key"&&(n=n(e,i))}}return typeof n=="function"?n(e,i):n}const no="\uFEFF",io="",so="",xr="",Kp=i=>!!i&&"items"in i,Yp=i=>!!i&&(i.type==="scalar"||i.type==="single-quoted-scalar"||i.type==="double-quoted-scalar"||i.type==="block-scalar");function Jp(i){switch(i){case no:return"<BOM>";case io:return"<DOC>";case so:return"<FLOW_END>";case xr:return"<SCALAR>";default:return JSON.stringify(i)}}function xh(i){switch(i){case no:return"byte-order-mark";case io:return"doc-mode";case so:return"flow-error-end";case xr:return"scalar";case"---":return"doc-start";case"...":return"doc-end";case"":case`
`:case`\r
`:return"newline";case"-":return"seq-item-ind";case"?":return"explicit-key-ind";case":":return"map-value-ind";case"{":return"flow-map-start";case"}":return"flow-map-end";case"[":return"flow-seq-start";case"]":return"flow-seq-end";case",":return"comma"}switch(i[0]){case" ":case"	":return"space";case"#":return"comment";case"%":return"directive-line";case"*":return"alias";case"&":return"anchor";case"!":return"tag";case"'":return"single-quoted-scalar";case'"':return"double-quoted-scalar";case"|":case">":return"block-scalar-header"}return null}const Zp=Object.freeze(Object.defineProperty({__proto__:null,BOM:no,DOCUMENT:io,FLOW_END:so,SCALAR:xr,createScalarToken:Wp,isCollection:Kp,isScalar:Yp,prettyToken:Jp,resolveAsScalar:Gp,setScalarValue:qp,stringify:Xp,tokenType:xh,visit:$i},Symbol.toStringTag,{value:"Module"}));function Rn(i){switch(i){case void 0:case" ":case`
`:case"\r":case"	":return!0;default:return!1}}const nu=new Set("0123456789ABCDEFabcdef"),Qp=new Set("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-#;/?:@&=+$_.!~*'()"),jr=new Set(",[]{}"),em=new Set(` ,[]{}
\r	`),xo=i=>!i||em.has(i);class bh{constructor(){this.atEnd=!1,this.blockScalarIndent=-1,this.blockScalarKeep=!1,this.buffer="",this.flowKey=!1,this.flowLevel=0,this.indentNext=0,this.indentValue=0,this.lineEndPos=null,this.next=null,this.pos=0}*lex(e,t=!1){if(e){if(typeof e!="string")throw TypeError("source is not a string");this.buffer=this.buffer?this.buffer+e:e,this.lineEndPos=null}this.atEnd=!t;let n=this.next??"stream";for(;n&&(t||this.hasChars(1));)n=yield*this.parseNext(n)}atLineEnd(){let e=this.pos,t=this.buffer[e];for(;t===" "||t==="	";)t=this.buffer[++e];return!t||t==="#"||t===`
`?!0:t==="\r"?this.buffer[e+1]===`
`:!1}charAt(e){return this.buffer[this.pos+e]}continueScalar(e){let t=this.buffer[e];if(this.indentNext>0){let n=0;for(;t===" ";)t=this.buffer[++n+e];if(t==="\r"){const s=this.buffer[n+e+1];if(s===`
`||!s&&!this.atEnd)return e+n+1}return t===`
`||n>=this.indentNext||!t&&!this.atEnd?e+n:-1}if(t==="-"||t==="."){const n=this.buffer.substr(e,3);if((n==="---"||n==="...")&&Rn(this.buffer[e+3]))return-1}return e}getLine(){let e=this.lineEndPos;return(typeof e!="number"||e!==-1&&e<this.pos)&&(e=this.buffer.indexOf(`
`,this.pos),this.lineEndPos=e),e===-1?this.atEnd?this.buffer.substring(this.pos):null:(this.buffer[e-1]==="\r"&&(e-=1),this.buffer.substring(this.pos,e))}hasChars(e){return this.pos+e<=this.buffer.length}setNext(e){return this.buffer=this.buffer.substring(this.pos),this.pos=0,this.lineEndPos=null,this.next=e,null}peek(e){return this.buffer.substr(this.pos,e)}*parseNext(e){switch(e){case"stream":return yield*this.parseStream();case"line-start":return yield*this.parseLineStart();case"block-start":return yield*this.parseBlockStart();case"doc":return yield*this.parseDocument();case"flow":return yield*this.parseFlowCollection();case"quoted-scalar":return yield*this.parseQuotedScalar();case"block-scalar":return yield*this.parseBlockScalar();case"plain-scalar":return yield*this.parsePlainScalar()}}*parseStream(){let e=this.getLine();if(e===null)return this.setNext("stream");if(e[0]===no&&(yield*this.pushCount(1),e=e.substring(1)),e[0]==="%"){let t=e.length,n=e.indexOf("#");for(;n!==-1;){const r=e[n-1];if(r===" "||r==="	"){t=n-1;break}else n=e.indexOf("#",n+1)}for(;;){const r=e[t-1];if(r===" "||r==="	")t-=1;else break}const s=(yield*this.pushCount(t))+(yield*this.pushSpaces(!0));return yield*this.pushCount(e.length-s),this.pushNewline(),"stream"}if(this.atLineEnd()){const t=yield*this.pushSpaces(!0);return yield*this.pushCount(e.length-t),yield*this.pushNewline(),"stream"}return yield io,yield*this.parseLineStart()}*parseLineStart(){const e=this.charAt(0);if(!e&&!this.atEnd)return this.setNext("line-start");if(e==="-"||e==="."){if(!this.atEnd&&!this.hasChars(4))return this.setNext("line-start");const t=this.peek(3);if((t==="---"||t==="...")&&Rn(this.charAt(3)))return yield*this.pushCount(3),this.indentValue=0,this.indentNext=0,t==="---"?"doc":"stream"}return this.indentValue=yield*this.pushSpaces(!1),this.indentNext>this.indentValue&&!Rn(this.charAt(1))&&(this.indentNext=this.indentValue),yield*this.parseBlockStart()}*parseBlockStart(){const[e,t]=this.peek(2);if(!t&&!this.atEnd)return this.setNext("block-start");if((e==="-"||e==="?"||e===":")&&Rn(t)){const n=(yield*this.pushCount(1))+(yield*this.pushSpaces(!0));return this.indentNext=this.indentValue+1,this.indentValue+=n,"block-start"}return"doc"}*parseDocument(){yield*this.pushSpaces(!0);const e=this.getLine();if(e===null)return this.setNext("doc");let t=yield*this.pushIndicators();switch(e[t]){case"#":yield*this.pushCount(e.length-t);case void 0:return yield*this.pushNewline(),yield*this.parseLineStart();case"{":case"[":return yield*this.pushCount(1),this.flowKey=!1,this.flowLevel=1,"flow";case"}":case"]":return yield*this.pushCount(1),"doc";case"*":return yield*this.pushUntil(xo),"doc";case'"':case"'":return yield*this.parseQuotedScalar();case"|":case">":return t+=yield*this.parseBlockScalarHeader(),t+=yield*this.pushSpaces(!0),yield*this.pushCount(e.length-t),yield*this.pushNewline(),yield*this.parseBlockScalar();default:return yield*this.parsePlainScalar()}}*parseFlowCollection(){let e,t,n=-1;do e=yield*this.pushNewline(),e>0?(t=yield*this.pushSpaces(!1),this.indentValue=n=t):t=0,t+=yield*this.pushSpaces(!0);while(e+t>0);const s=this.getLine();if(s===null)return this.setNext("flow");if((n!==-1&&n<this.indentNext&&s[0]!=="#"||n===0&&(s.startsWith("---")||s.startsWith("..."))&&Rn(s[3]))&&!(n===this.indentNext-1&&this.flowLevel===1&&(s[0]==="]"||s[0]==="}")))return this.flowLevel=0,yield so,yield*this.parseLineStart();let r=0;for(;s[r]===",";)r+=yield*this.pushCount(1),r+=yield*this.pushSpaces(!0),this.flowKey=!1;switch(r+=yield*this.pushIndicators(),s[r]){case void 0:return"flow";case"#":return yield*this.pushCount(s.length-r),"flow";case"{":case"[":return yield*this.pushCount(1),this.flowKey=!1,this.flowLevel+=1,"flow";case"}":case"]":return yield*this.pushCount(1),this.flowKey=!0,this.flowLevel-=1,this.flowLevel?"flow":"doc";case"*":return yield*this.pushUntil(xo),"flow";case'"':case"'":return this.flowKey=!0,yield*this.parseQuotedScalar();case":":{const a=this.charAt(1);if(this.flowKey||Rn(a)||a===",")return this.flowKey=!1,yield*this.pushCount(1),yield*this.pushSpaces(!0),"flow"}default:return this.flowKey=!1,yield*this.parsePlainScalar()}}*parseQuotedScalar(){const e=this.charAt(0);let t=this.buffer.indexOf(e,this.pos+1);if(e==="'")for(;t!==-1&&this.buffer[t+1]==="'";)t=this.buffer.indexOf("'",t+2);else for(;t!==-1;){let r=0;for(;this.buffer[t-1-r]==="\\";)r+=1;if(r%2===0)break;t=this.buffer.indexOf('"',t+1)}const n=this.buffer.substring(0,t);let s=n.indexOf(`
`,this.pos);if(s!==-1){for(;s!==-1;){const r=this.continueScalar(s+1);if(r===-1)break;s=n.indexOf(`
`,r)}s!==-1&&(t=s-(n[s-1]==="\r"?2:1))}if(t===-1){if(!this.atEnd)return this.setNext("quoted-scalar");t=this.buffer.length}return yield*this.pushToIndex(t+1,!1),this.flowLevel?"flow":"doc"}*parseBlockScalarHeader(){this.blockScalarIndent=-1,this.blockScalarKeep=!1;let e=this.pos;for(;;){const t=this.buffer[++e];if(t==="+")this.blockScalarKeep=!0;else if(t>"0"&&t<="9")this.blockScalarIndent=Number(t)-1;else if(t!=="-")break}return yield*this.pushUntil(t=>Rn(t)||t==="#")}*parseBlockScalar(){let e=this.pos-1,t=0,n;e:for(let r=this.pos;n=this.buffer[r];++r)switch(n){case" ":t+=1;break;case`
`:e=r,t=0;break;case"\r":{const a=this.buffer[r+1];if(!a&&!this.atEnd)return this.setNext("block-scalar");if(a===`
`)break}default:break e}if(!n&&!this.atEnd)return this.setNext("block-scalar");if(t>=this.indentNext){this.blockScalarIndent===-1?this.indentNext=t:this.indentNext=this.blockScalarIndent+(this.indentNext===0?1:this.indentNext);do{const r=this.continueScalar(e+1);if(r===-1)break;e=this.buffer.indexOf(`
`,r)}while(e!==-1);if(e===-1){if(!this.atEnd)return this.setNext("block-scalar");e=this.buffer.length}}let s=e+1;for(n=this.buffer[s];n===" ";)n=this.buffer[++s];if(n==="	"){for(;n==="	"||n===" "||n==="\r"||n===`
`;)n=this.buffer[++s];e=s-1}else if(!this.blockScalarKeep)do{let r=e-1,a=this.buffer[r];a==="\r"&&(a=this.buffer[--r]);const o=r;for(;a===" ";)a=this.buffer[--r];if(a===`
`&&r>=this.pos&&r+1+t>o)e=r;else break}while(!0);return yield xr,yield*this.pushToIndex(e+1,!0),yield*this.parseLineStart()}*parsePlainScalar(){const e=this.flowLevel>0;let t=this.pos-1,n=this.pos-1,s;for(;s=this.buffer[++n];)if(s===":"){const r=this.buffer[n+1];if(Rn(r)||e&&jr.has(r))break;t=n}else if(Rn(s)){let r=this.buffer[n+1];if(s==="\r"&&(r===`
`?(n+=1,s=`
`,r=this.buffer[n+1]):t=n),r==="#"||e&&jr.has(r))break;if(s===`
`){const a=this.continueScalar(n+1);if(a===-1)break;n=Math.max(n,a-2)}}else{if(e&&jr.has(s))break;t=n}return!s&&!this.atEnd?this.setNext("plain-scalar"):(yield xr,yield*this.pushToIndex(t+1,!0),e?"flow":"doc")}*pushCount(e){return e>0?(yield this.buffer.substr(this.pos,e),this.pos+=e,e):0}*pushToIndex(e,t){const n=this.buffer.slice(this.pos,e);return n?(yield n,this.pos+=n.length,n.length):(t&&(yield""),0)}*pushIndicators(){let e=0;e:for(;;){switch(this.charAt(0)){case"!":e+=yield*this.pushTag(),e+=yield*this.pushSpaces(!0);continue e;case"&":e+=yield*this.pushUntil(xo),e+=yield*this.pushSpaces(!0);continue e;case"-":case"?":case":":{const t=this.flowLevel>0,n=this.charAt(1);if(Rn(n)||t&&jr.has(n)){t?this.flowKey&&(this.flowKey=!1):this.indentNext=this.indentValue+1,e+=yield*this.pushCount(1),e+=yield*this.pushSpaces(!0);continue e}}}break e}return e}*pushTag(){if(this.charAt(1)==="<"){let e=this.pos+2,t=this.buffer[e];for(;!Rn(t)&&t!==">";)t=this.buffer[++e];return yield*this.pushToIndex(t===">"?e+1:e,!1)}else{let e=this.pos+1,t=this.buffer[e];for(;t;)if(Qp.has(t))t=this.buffer[++e];else if(t==="%"&&nu.has(this.buffer[e+1])&&nu.has(this.buffer[e+2]))t=this.buffer[e+=3];else break;return yield*this.pushToIndex(e,!1)}}*pushNewline(){const e=this.buffer[this.pos];return e===`
`?yield*this.pushCount(1):e==="\r"&&this.charAt(1)===`
`?yield*this.pushCount(2):0}*pushSpaces(e){let t=this.pos-1,n;do n=this.buffer[++t];while(n===" "||e&&n==="	");const s=t-this.pos;return s>0&&(yield this.buffer.substr(this.pos,s),this.pos=t),s}*pushUntil(e){let t=this.pos,n=this.buffer[t];for(;!e(n);)n=this.buffer[++t];return yield*this.pushToIndex(t,!1)}}class wh{constructor(){this.lineStarts=[],this.addNewLine=e=>this.lineStarts.push(e),this.linePos=e=>{let t=0,n=this.lineStarts.length;for(;t<n;){const r=t+n>>1;this.lineStarts[r]<e?t=r+1:n=r}if(this.lineStarts[t]===e)return{line:t+1,col:1};if(t===0)return{line:0,col:e};const s=this.lineStarts[t-1];return{line:t,col:e-s+1}}}}function bi(i,e){for(let t=0;t<i.length;++t)if(i[t].type===e)return!0;return!1}function iu(i){for(let e=0;e<i.length;++e)switch(i[e].type){case"space":case"comment":case"newline":break;default:return e}return-1}function Mh(i){switch(i==null?void 0:i.type){case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":case"flow-collection":return!0;default:return!1}}function Xr(i){switch(i.type){case"document":return i.start;case"block-map":{const e=i.items[i.items.length-1];return e.sep??e.start}case"block-seq":return i.items[i.items.length-1].start;default:return[]}}function as(i){var t;if(i.length===0)return[];let e=i.length;e:for(;--e>=0;)switch(i[e].type){case"doc-start":case"explicit-key-ind":case"map-value-ind":case"seq-item-ind":case"newline":break e}for(;((t=i[++e])==null?void 0:t.type)==="space";);return i.splice(e,i.length)}function Ba(i,e){if(e.length<1e5)Array.prototype.push.apply(i,e);else for(let t=0;t<e.length;++t)i.push(e[t])}function su(i){if(i.start.type==="flow-seq-start")for(const e of i.items)e.sep&&!e.value&&!bi(e.start,"explicit-key-ind")&&!bi(e.sep,"map-value-ind")&&(e.key&&(e.value=e.key),delete e.key,Mh(e.value)?e.value.end?Ba(e.value.end,e.sep):e.value.end=e.sep:Ba(e.start,e.sep),delete e.sep)}let yc=class{constructor(e){this.atNewLine=!0,this.atScalar=!1,this.indent=0,this.offset=0,this.onKeyLine=!1,this.stack=[],this.source="",this.type="",this.lexer=new bh,this.onNewLine=e}*parse(e,t=!1){this.onNewLine&&this.offset===0&&this.onNewLine(0);for(const n of this.lexer.lex(e,t))yield*this.next(n);t||(yield*this.end())}*next(e){if(this.source=e,this.atScalar){this.atScalar=!1,yield*this.step(),this.offset+=e.length;return}const t=xh(e);if(t)if(t==="scalar")this.atNewLine=!1,this.atScalar=!0,this.type="scalar";else{switch(this.type=t,yield*this.step(),t){case"newline":this.atNewLine=!0,this.indent=0,this.onNewLine&&this.onNewLine(this.offset+e.length);break;case"space":this.atNewLine&&e[0]===" "&&(this.indent+=e.length);break;case"explicit-key-ind":case"map-value-ind":case"seq-item-ind":this.atNewLine&&(this.indent+=e.length);break;case"doc-mode":case"flow-error-end":return;default:this.atNewLine=!1}this.offset+=e.length}else{const n=`Not a YAML token: ${e}`;yield*this.pop({type:"error",offset:this.offset,message:n,source:e}),this.offset+=e.length}}*end(){for(;this.stack.length>0;)yield*this.pop()}get sourceToken(){return{type:this.type,offset:this.offset,indent:this.indent,source:this.source}}*step(){const e=this.peek(1);if(this.type==="doc-end"&&(e==null?void 0:e.type)!=="doc-end"){for(;this.stack.length>0;)yield*this.pop();this.stack.push({type:"doc-end",offset:this.offset,source:this.source});return}if(!e)return yield*this.stream();switch(e.type){case"document":return yield*this.document(e);case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":return yield*this.scalar(e);case"block-scalar":return yield*this.blockScalar(e);case"block-map":return yield*this.blockMap(e);case"block-seq":return yield*this.blockSequence(e);case"flow-collection":return yield*this.flowCollection(e);case"doc-end":return yield*this.documentEnd(e)}yield*this.pop()}peek(e){return this.stack[this.stack.length-e]}*pop(e){const t=e??this.stack.pop();if(!t)yield{type:"error",offset:this.offset,source:"",message:"Tried to pop an empty stack"};else if(this.stack.length===0)yield t;else{const n=this.peek(1);switch(t.type==="block-scalar"?t.indent="indent"in n?n.indent:0:t.type==="flow-collection"&&n.type==="document"&&(t.indent=0),t.type==="flow-collection"&&su(t),n.type){case"document":n.value=t;break;case"block-scalar":n.props.push(t);break;case"block-map":{const s=n.items[n.items.length-1];if(s.value){n.items.push({start:[],key:t,sep:[]}),this.onKeyLine=!0;return}else if(s.sep)s.value=t;else{Object.assign(s,{key:t,sep:[]}),this.onKeyLine=!s.explicitKey;return}break}case"block-seq":{const s=n.items[n.items.length-1];s.value?n.items.push({start:[],value:t}):s.value=t;break}case"flow-collection":{const s=n.items[n.items.length-1];!s||s.value?n.items.push({start:[],key:t,sep:[]}):s.sep?s.value=t:Object.assign(s,{key:t,sep:[]});return}default:yield*this.pop(),yield*this.pop(t)}if((n.type==="document"||n.type==="block-map"||n.type==="block-seq")&&(t.type==="block-map"||t.type==="block-seq")){const s=t.items[t.items.length-1];s&&!s.sep&&!s.value&&s.start.length>0&&iu(s.start)===-1&&(t.indent===0||s.start.every(r=>r.type!=="comment"||r.indent<t.indent))&&(n.type==="document"?n.end=s.start:n.items.push({start:s.start}),t.items.splice(-1,1))}}}*stream(){switch(this.type){case"directive-line":yield{type:"directive",offset:this.offset,source:this.source};return;case"byte-order-mark":case"space":case"comment":case"newline":yield this.sourceToken;return;case"doc-mode":case"doc-start":{const e={type:"document",offset:this.offset,start:[]};this.type==="doc-start"&&e.start.push(this.sourceToken),this.stack.push(e);return}}yield{type:"error",offset:this.offset,message:`Unexpected ${this.type} token in YAML stream`,source:this.source}}*document(e){if(e.value)return yield*this.lineEnd(e);switch(this.type){case"doc-start":{iu(e.start)!==-1?(yield*this.pop(),yield*this.step()):e.start.push(this.sourceToken);return}case"anchor":case"tag":case"space":case"comment":case"newline":e.start.push(this.sourceToken);return}const t=this.startBlockValue(e);t?this.stack.push(t):yield{type:"error",offset:this.offset,message:`Unexpected ${this.type} token in YAML document`,source:this.source}}*scalar(e){if(this.type==="map-value-ind"){const t=Xr(this.peek(2)),n=as(t);let s;e.end?(s=e.end,s.push(this.sourceToken),delete e.end):s=[this.sourceToken];const r={type:"block-map",offset:e.offset,indent:e.indent,items:[{start:n,key:e,sep:s}]};this.onKeyLine=!0,this.stack[this.stack.length-1]=r}else yield*this.lineEnd(e)}*blockScalar(e){switch(this.type){case"space":case"comment":case"newline":e.props.push(this.sourceToken);return;case"scalar":if(e.source=this.source,this.atNewLine=!0,this.indent=0,this.onNewLine){let t=this.source.indexOf(`
`)+1;for(;t!==0;)this.onNewLine(this.offset+t),t=this.source.indexOf(`
`,t)+1}yield*this.pop();break;default:yield*this.pop(),yield*this.step()}}*blockMap(e){var n;const t=e.items[e.items.length-1];switch(this.type){case"newline":if(this.onKeyLine=!1,t.value){const s="end"in t.value?t.value.end:void 0,r=Array.isArray(s)?s[s.length-1]:void 0;(r==null?void 0:r.type)==="comment"?s==null||s.push(this.sourceToken):e.items.push({start:[this.sourceToken]})}else t.sep?t.sep.push(this.sourceToken):t.start.push(this.sourceToken);return;case"space":case"comment":if(t.value)e.items.push({start:[this.sourceToken]});else if(t.sep)t.sep.push(this.sourceToken);else{if(this.atIndentedComment(t.start,e.indent)){const s=e.items[e.items.length-2],r=(n=s==null?void 0:s.value)==null?void 0:n.end;if(Array.isArray(r)){Ba(r,t.start),r.push(this.sourceToken),e.items.pop();return}}t.start.push(this.sourceToken)}return}if(this.indent>=e.indent){const s=!this.onKeyLine&&this.indent===e.indent,r=s&&(t.sep||t.explicitKey)&&this.type!=="seq-item-ind";let a=[];if(r&&t.sep&&!t.value){const o=[];for(let c=0;c<t.sep.length;++c){const l=t.sep[c];switch(l.type){case"newline":o.push(c);break;case"space":break;case"comment":l.indent>e.indent&&(o.length=0);break;default:o.length=0}}o.length>=2&&(a=t.sep.splice(o[1]))}switch(this.type){case"anchor":case"tag":r||t.value?(a.push(this.sourceToken),e.items.push({start:a}),this.onKeyLine=!0):t.sep?t.sep.push(this.sourceToken):t.start.push(this.sourceToken);return;case"explicit-key-ind":!t.sep&&!t.explicitKey?(t.start.push(this.sourceToken),t.explicitKey=!0):r||t.value?(a.push(this.sourceToken),e.items.push({start:a,explicitKey:!0})):this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:[this.sourceToken],explicitKey:!0}]}),this.onKeyLine=!0;return;case"map-value-ind":if(t.explicitKey)if(t.sep)if(t.value)e.items.push({start:[],key:null,sep:[this.sourceToken]});else if(bi(t.sep,"map-value-ind"))this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:a,key:null,sep:[this.sourceToken]}]});else if(Mh(t.key)&&!bi(t.sep,"newline")){const o=as(t.start),c=t.key,l=t.sep;l.push(this.sourceToken),delete t.key,delete t.sep,this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:o,key:c,sep:l}]})}else a.length>0?t.sep=t.sep.concat(a,this.sourceToken):t.sep.push(this.sourceToken);else if(bi(t.start,"newline"))Object.assign(t,{key:null,sep:[this.sourceToken]});else{const o=as(t.start);this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:o,key:null,sep:[this.sourceToken]}]})}else t.sep?t.value||r?e.items.push({start:a,key:null,sep:[this.sourceToken]}):bi(t.sep,"map-value-ind")?this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:[],key:null,sep:[this.sourceToken]}]}):t.sep.push(this.sourceToken):Object.assign(t,{key:null,sep:[this.sourceToken]});this.onKeyLine=!0;return;case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":{const o=this.flowScalar(this.type);r||t.value?(e.items.push({start:a,key:o,sep:[]}),this.onKeyLine=!0):t.sep?this.stack.push(o):(Object.assign(t,{key:o,sep:[]}),this.onKeyLine=!0);return}default:{const o=this.startBlockValue(e);if(o){if(o.type==="block-seq"){if(!t.explicitKey&&t.sep&&!bi(t.sep,"newline")){yield*this.pop({type:"error",offset:this.offset,message:"Unexpected block-seq-ind on same line with key",source:this.source});return}}else s&&e.items.push({start:a});this.stack.push(o);return}}}}yield*this.pop(),yield*this.step()}*blockSequence(e){var n;const t=e.items[e.items.length-1];switch(this.type){case"newline":if(t.value){const s="end"in t.value?t.value.end:void 0,r=Array.isArray(s)?s[s.length-1]:void 0;(r==null?void 0:r.type)==="comment"?s==null||s.push(this.sourceToken):e.items.push({start:[this.sourceToken]})}else t.start.push(this.sourceToken);return;case"space":case"comment":if(t.value)e.items.push({start:[this.sourceToken]});else{if(this.atIndentedComment(t.start,e.indent)){const s=e.items[e.items.length-2],r=(n=s==null?void 0:s.value)==null?void 0:n.end;if(Array.isArray(r)){Ba(r,t.start),r.push(this.sourceToken),e.items.pop();return}}t.start.push(this.sourceToken)}return;case"anchor":case"tag":if(t.value||this.indent<=e.indent)break;t.start.push(this.sourceToken);return;case"seq-item-ind":if(this.indent!==e.indent)break;t.value||bi(t.start,"seq-item-ind")?e.items.push({start:[this.sourceToken]}):t.start.push(this.sourceToken);return}if(this.indent>e.indent){const s=this.startBlockValue(e);if(s){this.stack.push(s);return}}yield*this.pop(),yield*this.step()}*flowCollection(e){const t=e.items[e.items.length-1];if(this.type==="flow-error-end"){let n;do yield*this.pop(),n=this.peek(1);while((n==null?void 0:n.type)==="flow-collection")}else if(e.end.length===0){switch(this.type){case"comma":case"explicit-key-ind":!t||t.sep?e.items.push({start:[this.sourceToken]}):t.start.push(this.sourceToken);return;case"map-value-ind":!t||t.value?e.items.push({start:[],key:null,sep:[this.sourceToken]}):t.sep?t.sep.push(this.sourceToken):Object.assign(t,{key:null,sep:[this.sourceToken]});return;case"space":case"comment":case"newline":case"anchor":case"tag":!t||t.value?e.items.push({start:[this.sourceToken]}):t.sep?t.sep.push(this.sourceToken):t.start.push(this.sourceToken);return;case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":{const s=this.flowScalar(this.type);!t||t.value?e.items.push({start:[],key:s,sep:[]}):t.sep?this.stack.push(s):Object.assign(t,{key:s,sep:[]});return}case"flow-map-end":case"flow-seq-end":e.end.push(this.sourceToken);return}const n=this.startBlockValue(e);n?this.stack.push(n):(yield*this.pop(),yield*this.step())}else{const n=this.peek(2);if(n.type==="block-map"&&(this.type==="map-value-ind"&&n.indent===e.indent||this.type==="newline"&&!n.items[n.items.length-1].sep))yield*this.pop(),yield*this.step();else if(this.type==="map-value-ind"&&n.type!=="flow-collection"){const s=Xr(n),r=as(s);su(e);const a=e.end.splice(1,e.end.length);a.push(this.sourceToken);const o={type:"block-map",offset:e.offset,indent:e.indent,items:[{start:r,key:e,sep:a}]};this.onKeyLine=!0,this.stack[this.stack.length-1]=o}else yield*this.lineEnd(e)}}flowScalar(e){if(this.onNewLine){let t=this.source.indexOf(`
`)+1;for(;t!==0;)this.onNewLine(this.offset+t),t=this.source.indexOf(`
`,t)+1}return{type:e,offset:this.offset,indent:this.indent,source:this.source}}startBlockValue(e){switch(this.type){case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":return this.flowScalar(this.type);case"block-scalar-header":return{type:"block-scalar",offset:this.offset,indent:this.indent,props:[this.sourceToken],source:""};case"flow-map-start":case"flow-seq-start":return{type:"flow-collection",offset:this.offset,indent:this.indent,start:this.sourceToken,items:[],end:[]};case"seq-item-ind":return{type:"block-seq",offset:this.offset,indent:this.indent,items:[{start:[this.sourceToken]}]};case"explicit-key-ind":{this.onKeyLine=!0;const t=Xr(e),n=as(t);return n.push(this.sourceToken),{type:"block-map",offset:this.offset,indent:this.indent,items:[{start:n,explicitKey:!0}]}}case"map-value-ind":{this.onKeyLine=!0;const t=Xr(e),n=as(t);return{type:"block-map",offset:this.offset,indent:this.indent,items:[{start:n,key:null,sep:[this.sourceToken]}]}}}return null}atIndentedComment(e,t){return this.type!=="comment"||this.indent<=t?!1:e.every(n=>n.type==="newline"||n.type==="space")}*documentEnd(e){this.type!=="doc-mode"&&(e.end?e.end.push(this.sourceToken):e.end=[this.sourceToken],this.type==="newline"&&(yield*this.pop()))}*lineEnd(e){switch(this.type){case"comma":case"doc-start":case"doc-end":case"flow-seq-end":case"flow-map-end":case"map-value-ind":yield*this.pop(),yield*this.step();break;case"newline":this.onKeyLine=!1;case"space":case"comment":default:e.end?e.end.push(this.sourceToken):e.end=[this.sourceToken],this.type==="newline"&&(yield*this.pop())}}};function Sh(i){const e=i.prettyErrors!==!1;return{lineCounter:i.lineCounter||e&&new wh||null,prettyErrors:e}}function tm(i,e={}){const{lineCounter:t,prettyErrors:n}=Sh(e),s=new yc(t==null?void 0:t.addNewLine),r=new vc(e),a=Array.from(r.compose(s.parse(i)));if(n&&t)for(const o of a)o.errors.forEach(ka(i,t)),o.warnings.forEach(ka(i,t));return a.length>0?a:Object.assign([],{empty:!0},r.streamInfo())}function Eh(i,e={}){const{lineCounter:t,prettyErrors:n}=Sh(e),s=new yc(t==null?void 0:t.addNewLine),r=new vc(e);let a=null;for(const o of r.compose(s.parse(i),!0,i.length))if(!a)a=o;else if(a.options.logLevel!=="silent"){a.errors.push(new qi(o.range.slice(0,2),"MULTIPLE_DOCS","Source contains multiple documents; please use YAML.parseAllDocuments()"));break}return n&&t&&(a.errors.forEach(ka(i,t)),a.warnings.forEach(ka(i,t))),a}function nm(i,e,t){let n;typeof e=="function"?n=e:t===void 0&&e&&typeof e=="object"&&(t=e);const s=Eh(i,t);if(!s)return null;if(s.warnings.forEach(r=>Wf(s.options.logLevel,r)),s.errors.length>0){if(s.options.logLevel!=="silent")throw s.errors[0];s.errors=[]}return s.toJS(Object.assign({reviver:n},t))}function im(i,e,t){let n=null;if(typeof e=="function"||Array.isArray(e)?n=e:t===void 0&&e&&(t=e),typeof t=="string"&&(t=t.length),typeof t=="number"){const s=Math.round(t);t=s<1?void 0:s>8?{indent:8}:{indent:s}}if(i===void 0){const{keepUndefined:s}=t??e??{};if(!s)return}return Zi(i)&&!n?i.toString(t):new Ys(i,n,t).toString(t)}const Ta=Object.freeze(Object.defineProperty({__proto__:null,Alias:ja,CST:Zp,Composer:vc,Document:Ys,Lexer:bh,LineCounter:wh,Pair:Qt,Parser:yc,Scalar:Ze,Schema:to,YAMLError:gc,YAMLMap:gn,YAMLParseError:qi,YAMLSeq:Ei,YAMLWarning:uh,isAlias:Ji,isCollection:Tt,isDocument:Zi,isMap:js,isNode:At,isPair:St,isScalar:xt,isSeq:Xs,parse:nm,parseAllDocuments:tm,parseDocument:Eh,stringify:im,visit:Qi,visitAsync:qa},Symbol.toStringTag,{value:"Module"})),sm=Object.assign({"/world/world.config.yaml":qd}),rm=Object.assign({"/world/places/main/config.yaml":jd}),am=Object.assign({"/world/places/main/cells/objects.scene":Xd,"/world/places/main/cells/x0z0.scene":$d}),om=Object.assign({"/world/templates/camera.js":()=>Ne(()=>import("./camera-K4zneVSs.js"),[]),"/world/templates/player.js":()=>Ne(()=>import("./player-BYsER5Iw.js"),[]),"/world/templates/sprite.js":()=>Ne(()=>import("./sprite-DoGeqWOJ.js"),[])});function lm(i,e){const t=Ta.parse(i)??{};return Object.entries(t).map(([n,s])=>{var r;return{...s,id:(s==null?void 0:s.id)??((r=s==null?void 0:s.overrides)==null?void 0:r.id)??n,cell:e}})}async function xc(i){const[e,t]=String(i).split("#"),n=om["/world/"+e];if(!n)throw new Error(`no template ${e}`);const s=await n();return s[t]??s.default??{}}const ru=i=>i&&typeof i=="object"&&!Array.isArray(i);function dl(i,e){const t={...i};for(const[n,s]of Object.entries(e??{}))t[n]=ru(s)&&ru(i==null?void 0:i[n])?dl(i[n],s):s;return t}async function cm(i){if(!i.template)return i;const{template:e,overrides:t,...n}=i;return dl(dl(await xc(e),t),n)}const um=Object.assign({"/web/overrides.yaml":Kd});function fm(i,e){if(!e)return{...i,sounds:{},render:{}};const t=new Set(e.remove??[]),n=i.placements.filter(r=>!t.has(r.id));for(const[r,a]of Object.entries(e.add??{}))n.push({...a,id:r,cell:"web"});const s=e.terrain?{...i.place,terrain:{...i.place.terrain,...e.terrain}}:i.place;return{...i,place:s,placements:n,sounds:e.sounds??{},render:e.render??{}}}async function hm(i,{web:e=!0}={}){const t=Ta.parse(Object.values(sm)[0]??"")??{},n=i??t.defaultPlace??"main",s=rm[`/world/places/${n}/config.yaml`];if(s==null)throw new Error(`no place ${n}`);const r=[];for(const[l,f]of Object.entries(am))l.startsWith(`/world/places/${n}/cells/`)&&r.push(...lm(f,l.split("/").pop().replace(/\.scene$/,"")));const a=await Promise.all(r.map(cm)),o={config:t,name:n,place:Ta.parse(s)??{},placements:a},c=Object.values(um)[0];return fm(o,e&&c?Ta.parse(c):null)}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const bc="172",dm=0,au=1,pm=2,Th=1,mm=2,Qn=3,Ti=0,cn=1,ei=2,Si=0,wn=1,br=2,za=3,Ha=4,gm=5,Hi=100,_m=101,vm=102,ym=103,xm=104,bm=200,wm=201,Mm=202,Sm=203,pl=204,ml=205,Em=206,Tm=207,Am=208,Rm=209,Cm=210,Pm=211,Lm=212,Im=213,Dm=214,gl=0,_l=1,vl=2,Fs=3,yl=4,xl=5,bl=6,wl=7,Ah=0,Nm=1,Om=2,ai=0,Um=1,km=2,Fm=3,Bm=4,zm=5,Hm=6,Vm=7,Rh=300,Bs=301,zs=302,Ml=303,Sl=304,ro=306,wr=1e3,ni=1001,El=1002,Gt=1003,Gm=1004,$r=1005,ln=1006,bo=1007,Hn=1008,Wn=1009,Ch=1010,Ph=1011,Mr=1012,wc=1013,Ki=1014,ii=1015,Pr=1016,Mc=1017,Sc=1018,Hs=1020,Lh=35902,Ih=1021,Dh=1022,xn=1023,Nh=1024,Oh=1025,Ds=1026,Vs=1027,Uh=1028,Ec=1029,kh=1030,Tc=1031,Ac=1033,Aa=33776,Ra=33777,Ca=33778,Pa=33779,Tl=35840,Al=35841,Rl=35842,Cl=35843,Pl=36196,Ll=37492,Il=37496,Dl=37808,Nl=37809,Ol=37810,Ul=37811,kl=37812,Fl=37813,Bl=37814,zl=37815,Hl=37816,Vl=37817,Gl=37818,Wl=37819,ql=37820,jl=37821,La=36492,Xl=36494,$l=36495,Fh=36283,Kl=36284,Yl=36285,Jl=36286,Wm=3200,qm=3201,jm=0,Xm=1,wi="",qt="srgb",Gs="srgb-linear",Va="linear",vt="srgb",os=7680,ou=519,$m=512,Km=513,Ym=514,Bh=515,Jm=516,Zm=517,Qm=518,eg=519,lu=35044,tg=35048,cu="300 es",si=2e3,Ga=2001;class Js{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const Yt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],wo=Math.PI/180,Zl=180/Math.PI;function Lr(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Yt[i&255]+Yt[i>>8&255]+Yt[i>>16&255]+Yt[i>>24&255]+"-"+Yt[e&255]+Yt[e>>8&255]+"-"+Yt[e>>16&15|64]+Yt[e>>24&255]+"-"+Yt[t&63|128]+Yt[t>>8&255]+"-"+Yt[t>>16&255]+Yt[t>>24&255]+Yt[n&255]+Yt[n>>8&255]+Yt[n>>16&255]+Yt[n>>24&255]).toLowerCase()}function lt(i,e,t){return Math.max(e,Math.min(t,i))}function ng(i,e){return(i%e+e)%e}function Mo(i,e,t){return(1-t)*i+t*e}function or(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function an(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class yt{constructor(e=0,t=0){yt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=lt(this.x,e.x,t.x),this.y=lt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=lt(this.x,e,t),this.y=lt(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(lt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(lt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class et{constructor(e,t,n,s,r,a,o,c,l){et.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l)}set(e,t,n,s,r,a,o,c,l){const f=this.elements;return f[0]=e,f[1]=s,f[2]=o,f[3]=t,f[4]=r,f[5]=c,f[6]=n,f[7]=a,f[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],f=n[4],h=n[7],d=n[2],p=n[5],x=n[8],y=s[0],_=s[3],g=s[6],R=s[1],T=s[4],w=s[7],L=s[2],I=s[5],C=s[8];return r[0]=a*y+o*R+c*L,r[3]=a*_+o*T+c*I,r[6]=a*g+o*w+c*C,r[1]=l*y+f*R+h*L,r[4]=l*_+f*T+h*I,r[7]=l*g+f*w+h*C,r[2]=d*y+p*R+x*L,r[5]=d*_+p*T+x*I,r[8]=d*g+p*w+x*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],f=e[8];return t*a*f-t*o*l-n*r*f+n*o*c+s*r*l-s*a*c}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],f=e[8],h=f*a-o*l,d=o*c-f*r,p=l*r-a*c,x=t*h+n*d+s*p;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/x;return e[0]=h*y,e[1]=(s*l-f*n)*y,e[2]=(o*n-s*a)*y,e[3]=d*y,e[4]=(f*t-s*c)*y,e[5]=(s*r-o*t)*y,e[6]=p*y,e[7]=(n*c-l*t)*y,e[8]=(a*t-n*r)*y,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-s*l,s*c,-s*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(So.makeScale(e,t)),this}rotate(e){return this.premultiply(So.makeRotation(-e)),this}translate(e,t){return this.premultiply(So.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const So=new et;function zh(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Sr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function ig(){const i=Sr("canvas");return i.style.display="block",i}const uu={};function Ms(i){i in uu||(uu[i]=!0,console.warn(i))}function sg(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function rg(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function ag(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const fu=new et().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),hu=new et().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function og(){const i={enabled:!0,workingColorSpace:Gs,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===vt&&(s.r=oi(s.r),s.g=oi(s.g),s.b=oi(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===vt&&(s.r=Ns(s.r),s.g=Ns(s.g),s.b=Ns(s.b))),s},fromWorkingColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},toWorkingColorSpace:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===wi?Va:this.spaces[s].transfer},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Gs]:{primaries:e,whitePoint:n,transfer:Va,toXYZ:fu,fromXYZ:hu,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:qt},outputColorSpaceConfig:{drawingBufferColorSpace:qt}},[qt]:{primaries:e,whitePoint:n,transfer:vt,toXYZ:fu,fromXYZ:hu,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:qt}}}),i}const ut=og();function oi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ns(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let ls;class lg{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ls===void 0&&(ls=Sr("canvas")),ls.width=e.width,ls.height=e.height;const n=ls.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ls}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Sr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=oi(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(oi(t[n]/255)*255):t[n]=oi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let cg=0;class Hh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:cg++}),this.uuid=Lr(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Eo(s[a].image)):r.push(Eo(s[a]))}else r=Eo(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function Eo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?lg.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ug=0;class jt extends Js{constructor(e=jt.DEFAULT_IMAGE,t=jt.DEFAULT_MAPPING,n=ni,s=ni,r=ln,a=Hn,o=xn,c=Wn,l=jt.DEFAULT_ANISOTROPY,f=wi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ug++}),this.uuid=Lr(),this.name="",this.source=new Hh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new yt(0,0),this.repeat=new yt(1,1),this.center=new yt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new et,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Rh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case wr:e.x=e.x-Math.floor(e.x);break;case ni:e.x=e.x<0?0:1;break;case El:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case wr:e.y=e.y-Math.floor(e.y);break;case ni:e.y=e.y<0?0:1;break;case El:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}jt.DEFAULT_IMAGE=null;jt.DEFAULT_MAPPING=Rh;jt.DEFAULT_ANISOTROPY=1;class Pt{constructor(e=0,t=0,n=0,s=1){Pt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const c=e.elements,l=c[0],f=c[4],h=c[8],d=c[1],p=c[5],x=c[9],y=c[2],_=c[6],g=c[10];if(Math.abs(f-d)<.01&&Math.abs(h-y)<.01&&Math.abs(x-_)<.01){if(Math.abs(f+d)<.1&&Math.abs(h+y)<.1&&Math.abs(x+_)<.1&&Math.abs(l+p+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const T=(l+1)/2,w=(p+1)/2,L=(g+1)/2,I=(f+d)/4,C=(h+y)/4,D=(x+_)/4;return T>w&&T>L?T<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(T),s=I/n,r=C/n):w>L?w<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(w),n=I/s,r=D/s):L<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(L),n=C/r,s=D/r),this.set(n,s,r,t),this}let R=Math.sqrt((_-x)*(_-x)+(h-y)*(h-y)+(d-f)*(d-f));return Math.abs(R)<.001&&(R=1),this.x=(_-x)/R,this.y=(h-y)/R,this.z=(d-f)/R,this.w=Math.acos((l+p+g-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=lt(this.x,e.x,t.x),this.y=lt(this.y,e.y,t.y),this.z=lt(this.z,e.z,t.z),this.w=lt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=lt(this.x,e,t),this.y=lt(this.y,e,t),this.z=lt(this.z,e,t),this.w=lt(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(lt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class fg extends Js{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Pt(0,0,e,t),this.scissorTest=!1,this.viewport=new Pt(0,0,e,t);const s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ln,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new jt(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const t=Object.assign({},e.texture.image);return this.texture.source=new Hh(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ai extends fg{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Vh extends jt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Gt,this.minFilter=Gt,this.wrapR=ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class hg extends jt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Gt,this.minFilter=Gt,this.wrapR=ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ir{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let c=n[s+0],l=n[s+1],f=n[s+2],h=n[s+3];const d=r[a+0],p=r[a+1],x=r[a+2],y=r[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=f,e[t+3]=h;return}if(o===1){e[t+0]=d,e[t+1]=p,e[t+2]=x,e[t+3]=y;return}if(h!==y||c!==d||l!==p||f!==x){let _=1-o;const g=c*d+l*p+f*x+h*y,R=g>=0?1:-1,T=1-g*g;if(T>Number.EPSILON){const L=Math.sqrt(T),I=Math.atan2(L,g*R);_=Math.sin(_*I)/L,o=Math.sin(o*I)/L}const w=o*R;if(c=c*_+d*w,l=l*_+p*w,f=f*_+x*w,h=h*_+y*w,_===1-o){const L=1/Math.sqrt(c*c+l*l+f*f+h*h);c*=L,l*=L,f*=L,h*=L}}e[t]=c,e[t+1]=l,e[t+2]=f,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,s,r,a){const o=n[s],c=n[s+1],l=n[s+2],f=n[s+3],h=r[a],d=r[a+1],p=r[a+2],x=r[a+3];return e[t]=o*x+f*h+c*p-l*d,e[t+1]=c*x+f*d+l*h-o*p,e[t+2]=l*x+f*p+o*d-c*h,e[t+3]=f*x-o*h-c*d-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),f=o(s/2),h=o(r/2),d=c(n/2),p=c(s/2),x=c(r/2);switch(a){case"XYZ":this._x=d*f*h+l*p*x,this._y=l*p*h-d*f*x,this._z=l*f*x+d*p*h,this._w=l*f*h-d*p*x;break;case"YXZ":this._x=d*f*h+l*p*x,this._y=l*p*h-d*f*x,this._z=l*f*x-d*p*h,this._w=l*f*h+d*p*x;break;case"ZXY":this._x=d*f*h-l*p*x,this._y=l*p*h+d*f*x,this._z=l*f*x+d*p*h,this._w=l*f*h-d*p*x;break;case"ZYX":this._x=d*f*h-l*p*x,this._y=l*p*h+d*f*x,this._z=l*f*x-d*p*h,this._w=l*f*h+d*p*x;break;case"YZX":this._x=d*f*h+l*p*x,this._y=l*p*h+d*f*x,this._z=l*f*x-d*p*h,this._w=l*f*h-d*p*x;break;case"XZY":this._x=d*f*h-l*p*x,this._y=l*p*h-d*f*x,this._z=l*f*x+d*p*h,this._w=l*f*h+d*p*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],f=t[6],h=t[10],d=n+o+h;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(f-c)*p,this._y=(r-l)*p,this._z=(a-s)*p}else if(n>o&&n>h){const p=2*Math.sqrt(1+n-o-h);this._w=(f-c)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+l)/p}else if(o>h){const p=2*Math.sqrt(1+o-n-h);this._w=(r-l)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(c+f)/p}else{const p=2*Math.sqrt(1+h-n-o);this._w=(a-s)/p,this._x=(r+l)/p,this._y=(c+f)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(lt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,f=t._w;return this._x=n*f+a*o+s*l-r*c,this._y=s*f+a*c+r*o-n*l,this._z=r*f+a*l+n*c-s*o,this._w=a*f-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const c=1-o*o;if(c<=Number.EPSILON){const p=1-t;return this._w=p*a+t*this._w,this._x=p*n+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}const l=Math.sqrt(c),f=Math.atan2(l,o),h=Math.sin((1-t)*f)/l,d=Math.sin(t*f)/l;return this._w=a*h+this._w*d,this._x=n*h+this._x*d,this._y=s*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class X{constructor(e=0,t=0,n=0){X.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(du.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(du.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*s-o*n),f=2*(o*t-r*s),h=2*(r*n-a*t);return this.x=t+c*l+a*h-o*f,this.y=n+c*f+o*l-r*h,this.z=s+c*h+r*f-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=lt(this.x,e.x,t.x),this.y=lt(this.y,e.y,t.y),this.z=lt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=lt(this.x,e,t),this.y=lt(this.y,e,t),this.z=lt(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(lt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return To.copy(this).projectOnVector(e),this.sub(To)}reflect(e){return this.sub(To.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(lt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const To=new X,du=new Ir;class Dr{constructor(e=new X(1/0,1/0,1/0),t=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Cn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Cn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Cn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Cn):Cn.fromBufferAttribute(r,a),Cn.applyMatrix4(e.matrixWorld),this.expandByPoint(Cn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Kr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Kr.copy(n.boundingBox)),Kr.applyMatrix4(e.matrixWorld),this.union(Kr)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Cn),Cn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(lr),Yr.subVectors(this.max,lr),cs.subVectors(e.a,lr),us.subVectors(e.b,lr),fs.subVectors(e.c,lr),pi.subVectors(us,cs),mi.subVectors(fs,us),Di.subVectors(cs,fs);let t=[0,-pi.z,pi.y,0,-mi.z,mi.y,0,-Di.z,Di.y,pi.z,0,-pi.x,mi.z,0,-mi.x,Di.z,0,-Di.x,-pi.y,pi.x,0,-mi.y,mi.x,0,-Di.y,Di.x,0];return!Ao(t,cs,us,fs,Yr)||(t=[1,0,0,0,1,0,0,0,1],!Ao(t,cs,us,fs,Yr))?!1:(Jr.crossVectors(pi,mi),t=[Jr.x,Jr.y,Jr.z],Ao(t,cs,us,fs,Yr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Cn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Cn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:($n[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),$n[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),$n[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),$n[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),$n[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),$n[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),$n[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),$n[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints($n),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const $n=[new X,new X,new X,new X,new X,new X,new X,new X],Cn=new X,Kr=new Dr,cs=new X,us=new X,fs=new X,pi=new X,mi=new X,Di=new X,lr=new X,Yr=new X,Jr=new X,Ni=new X;function Ao(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Ni.fromArray(i,r);const o=s.x*Math.abs(Ni.x)+s.y*Math.abs(Ni.y)+s.z*Math.abs(Ni.z),c=e.dot(Ni),l=t.dot(Ni),f=n.dot(Ni);if(Math.max(-Math.max(c,l,f),Math.min(c,l,f))>o)return!1}return!0}const dg=new Dr,cr=new X,Ro=new X;class Rc{constructor(e=new X,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):dg.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;cr.subVectors(e,this.center);const t=cr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(cr,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ro.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(cr.copy(e.center).add(Ro)),this.expandByPoint(cr.copy(e.center).sub(Ro))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Kn=new X,Co=new X,Zr=new X,gi=new X,Po=new X,Qr=new X,Lo=new X;class pg{constructor(e=new X,t=new X(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Kn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Kn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Kn.copy(this.origin).addScaledVector(this.direction,t),Kn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Co.copy(e).add(t).multiplyScalar(.5),Zr.copy(t).sub(e).normalize(),gi.copy(this.origin).sub(Co);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Zr),o=gi.dot(this.direction),c=-gi.dot(Zr),l=gi.lengthSq(),f=Math.abs(1-a*a);let h,d,p,x;if(f>0)if(h=a*c-o,d=a*o-c,x=r*f,h>=0)if(d>=-x)if(d<=x){const y=1/f;h*=y,d*=y,p=h*(h+a*d+2*o)+d*(a*h+d+2*c)+l}else d=r,h=Math.max(0,-(a*d+o)),p=-h*h+d*(d+2*c)+l;else d=-r,h=Math.max(0,-(a*d+o)),p=-h*h+d*(d+2*c)+l;else d<=-x?(h=Math.max(0,-(-a*r+o)),d=h>0?-r:Math.min(Math.max(-r,-c),r),p=-h*h+d*(d+2*c)+l):d<=x?(h=0,d=Math.min(Math.max(-r,-c),r),p=d*(d+2*c)+l):(h=Math.max(0,-(a*r+o)),d=h>0?r:Math.min(Math.max(-r,-c),r),p=-h*h+d*(d+2*c)+l);else d=a>0?-r:r,h=Math.max(0,-(a*d+o)),p=-h*h+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Co).addScaledVector(Zr,d),p}intersectSphere(e,t){Kn.subVectors(e.center,this.origin);const n=Kn.dot(this.direction),s=Kn.dot(Kn)-n*n,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,c;const l=1/this.direction.x,f=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,s=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,s=(e.min.x-d.x)*l),f>=0?(r=(e.min.y-d.y)*f,a=(e.max.y-d.y)*f):(r=(e.max.y-d.y)*f,a=(e.min.y-d.y)*f),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),h>=0?(o=(e.min.z-d.z)*h,c=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,c=(e.min.z-d.z)*h),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Kn)!==null}intersectTriangle(e,t,n,s,r){Po.subVectors(t,e),Qr.subVectors(n,e),Lo.crossVectors(Po,Qr);let a=this.direction.dot(Lo),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;gi.subVectors(this.origin,e);const c=o*this.direction.dot(Qr.crossVectors(gi,Qr));if(c<0)return null;const l=o*this.direction.dot(Po.cross(gi));if(l<0||c+l>a)return null;const f=-o*gi.dot(Lo);return f<0?null:this.at(f/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Nt{constructor(e,t,n,s,r,a,o,c,l,f,h,d,p,x,y,_){Nt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l,f,h,d,p,x,y,_)}set(e,t,n,s,r,a,o,c,l,f,h,d,p,x,y,_){const g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=s,g[1]=r,g[5]=a,g[9]=o,g[13]=c,g[2]=l,g[6]=f,g[10]=h,g[14]=d,g[3]=p,g[7]=x,g[11]=y,g[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Nt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/hs.setFromMatrixColumn(e,0).length(),r=1/hs.setFromMatrixColumn(e,1).length(),a=1/hs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),f=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const d=a*f,p=a*h,x=o*f,y=o*h;t[0]=c*f,t[4]=-c*h,t[8]=l,t[1]=p+x*l,t[5]=d-y*l,t[9]=-o*c,t[2]=y-d*l,t[6]=x+p*l,t[10]=a*c}else if(e.order==="YXZ"){const d=c*f,p=c*h,x=l*f,y=l*h;t[0]=d+y*o,t[4]=x*o-p,t[8]=a*l,t[1]=a*h,t[5]=a*f,t[9]=-o,t[2]=p*o-x,t[6]=y+d*o,t[10]=a*c}else if(e.order==="ZXY"){const d=c*f,p=c*h,x=l*f,y=l*h;t[0]=d-y*o,t[4]=-a*h,t[8]=x+p*o,t[1]=p+x*o,t[5]=a*f,t[9]=y-d*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const d=a*f,p=a*h,x=o*f,y=o*h;t[0]=c*f,t[4]=x*l-p,t[8]=d*l+y,t[1]=c*h,t[5]=y*l+d,t[9]=p*l-x,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const d=a*c,p=a*l,x=o*c,y=o*l;t[0]=c*f,t[4]=y-d*h,t[8]=x*h+p,t[1]=h,t[5]=a*f,t[9]=-o*f,t[2]=-l*f,t[6]=p*h+x,t[10]=d-y*h}else if(e.order==="XZY"){const d=a*c,p=a*l,x=o*c,y=o*l;t[0]=c*f,t[4]=-h,t[8]=l*f,t[1]=d*h+y,t[5]=a*f,t[9]=p*h-x,t[2]=x*h-p,t[6]=o*f,t[10]=y*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(mg,e,gg)}lookAt(e,t,n){const s=this.elements;return dn.subVectors(e,t),dn.lengthSq()===0&&(dn.z=1),dn.normalize(),_i.crossVectors(n,dn),_i.lengthSq()===0&&(Math.abs(n.z)===1?dn.x+=1e-4:dn.z+=1e-4,dn.normalize(),_i.crossVectors(n,dn)),_i.normalize(),ea.crossVectors(dn,_i),s[0]=_i.x,s[4]=ea.x,s[8]=dn.x,s[1]=_i.y,s[5]=ea.y,s[9]=dn.y,s[2]=_i.z,s[6]=ea.z,s[10]=dn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],f=n[1],h=n[5],d=n[9],p=n[13],x=n[2],y=n[6],_=n[10],g=n[14],R=n[3],T=n[7],w=n[11],L=n[15],I=s[0],C=s[4],D=s[8],S=s[12],b=s[1],N=s[5],F=s[9],k=s[13],$=s[2],ie=s[6],J=s[10],de=s[14],K=s[3],ee=s[7],ae=s[11],me=s[15];return r[0]=a*I+o*b+c*$+l*K,r[4]=a*C+o*N+c*ie+l*ee,r[8]=a*D+o*F+c*J+l*ae,r[12]=a*S+o*k+c*de+l*me,r[1]=f*I+h*b+d*$+p*K,r[5]=f*C+h*N+d*ie+p*ee,r[9]=f*D+h*F+d*J+p*ae,r[13]=f*S+h*k+d*de+p*me,r[2]=x*I+y*b+_*$+g*K,r[6]=x*C+y*N+_*ie+g*ee,r[10]=x*D+y*F+_*J+g*ae,r[14]=x*S+y*k+_*de+g*me,r[3]=R*I+T*b+w*$+L*K,r[7]=R*C+T*N+w*ie+L*ee,r[11]=R*D+T*F+w*J+L*ae,r[15]=R*S+T*k+w*de+L*me,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],f=e[2],h=e[6],d=e[10],p=e[14],x=e[3],y=e[7],_=e[11],g=e[15];return x*(+r*c*h-s*l*h-r*o*d+n*l*d+s*o*p-n*c*p)+y*(+t*c*p-t*l*d+r*a*d-s*a*p+s*l*f-r*c*f)+_*(+t*l*h-t*o*p-r*a*h+n*a*p+r*o*f-n*l*f)+g*(-s*o*f-t*c*h+t*o*d+s*a*h-n*a*d+n*c*f)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],f=e[8],h=e[9],d=e[10],p=e[11],x=e[12],y=e[13],_=e[14],g=e[15],R=h*_*l-y*d*l+y*c*p-o*_*p-h*c*g+o*d*g,T=x*d*l-f*_*l-x*c*p+a*_*p+f*c*g-a*d*g,w=f*y*l-x*h*l+x*o*p-a*y*p-f*o*g+a*h*g,L=x*h*c-f*y*c-x*o*d+a*y*d+f*o*_-a*h*_,I=t*R+n*T+s*w+r*L;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/I;return e[0]=R*C,e[1]=(y*d*r-h*_*r-y*s*p+n*_*p+h*s*g-n*d*g)*C,e[2]=(o*_*r-y*c*r+y*s*l-n*_*l-o*s*g+n*c*g)*C,e[3]=(h*c*r-o*d*r-h*s*l+n*d*l+o*s*p-n*c*p)*C,e[4]=T*C,e[5]=(f*_*r-x*d*r+x*s*p-t*_*p-f*s*g+t*d*g)*C,e[6]=(x*c*r-a*_*r-x*s*l+t*_*l+a*s*g-t*c*g)*C,e[7]=(a*d*r-f*c*r+f*s*l-t*d*l-a*s*p+t*c*p)*C,e[8]=w*C,e[9]=(x*h*r-f*y*r-x*n*p+t*y*p+f*n*g-t*h*g)*C,e[10]=(a*y*r-x*o*r+x*n*l-t*y*l-a*n*g+t*o*g)*C,e[11]=(f*o*r-a*h*r-f*n*l+t*h*l+a*n*p-t*o*p)*C,e[12]=L*C,e[13]=(f*y*s-x*h*s+x*n*d-t*y*d-f*n*_+t*h*_)*C,e[14]=(x*o*s-a*y*s-x*n*c+t*y*c+a*n*_-t*o*_)*C,e[15]=(a*h*s-f*o*s+f*n*c-t*h*c-a*n*d+t*o*d)*C,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,f=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,f*o+n,f*c-s*a,0,l*c-s*o,f*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,f=a+a,h=o+o,d=r*l,p=r*f,x=r*h,y=a*f,_=a*h,g=o*h,R=c*l,T=c*f,w=c*h,L=n.x,I=n.y,C=n.z;return s[0]=(1-(y+g))*L,s[1]=(p+w)*L,s[2]=(x-T)*L,s[3]=0,s[4]=(p-w)*I,s[5]=(1-(d+g))*I,s[6]=(_+R)*I,s[7]=0,s[8]=(x+T)*C,s[9]=(_-R)*C,s[10]=(1-(d+y))*C,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=hs.set(s[0],s[1],s[2]).length();const a=hs.set(s[4],s[5],s[6]).length(),o=hs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Pn.copy(this);const l=1/r,f=1/a,h=1/o;return Pn.elements[0]*=l,Pn.elements[1]*=l,Pn.elements[2]*=l,Pn.elements[4]*=f,Pn.elements[5]*=f,Pn.elements[6]*=f,Pn.elements[8]*=h,Pn.elements[9]*=h,Pn.elements[10]*=h,t.setFromRotationMatrix(Pn),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=si){const c=this.elements,l=2*r/(t-e),f=2*r/(n-s),h=(t+e)/(t-e),d=(n+s)/(n-s);let p,x;if(o===si)p=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(o===Ga)p=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=f,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=si){const c=this.elements,l=1/(t-e),f=1/(n-s),h=1/(a-r),d=(t+e)*l,p=(n+s)*f;let x,y;if(o===si)x=(a+r)*h,y=-2*h;else if(o===Ga)x=r*h,y=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*f,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=y,c[14]=-x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const hs=new X,Pn=new Nt,mg=new X(0,0,0),gg=new X(1,1,1),_i=new X,ea=new X,dn=new X,pu=new Nt,mu=new Ir;class ui{constructor(e=0,t=0,n=0,s=ui.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],f=s[9],h=s[2],d=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(lt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-f,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-lt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(lt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-lt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(lt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-f,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-lt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-f,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return pu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(pu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return mu.setFromEuler(this),this.setFromQuaternion(mu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ui.DEFAULT_ORDER="XYZ";class Gh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let _g=0;const gu=new X,ds=new Ir,Yn=new Nt,ta=new X,ur=new X,vg=new X,yg=new Ir,_u=new X(1,0,0),vu=new X(0,1,0),yu=new X(0,0,1),xu={type:"added"},xg={type:"removed"},ps={type:"childadded",child:null},Io={type:"childremoved",child:null};class un extends Js{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:_g++}),this.uuid=Lr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=un.DEFAULT_UP.clone();const e=new X,t=new ui,n=new Ir,s=new X(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Nt},normalMatrix:{value:new et}}),this.matrix=new Nt,this.matrixWorld=new Nt,this.matrixAutoUpdate=un.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Gh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ds.setFromAxisAngle(e,t),this.quaternion.multiply(ds),this}rotateOnWorldAxis(e,t){return ds.setFromAxisAngle(e,t),this.quaternion.premultiply(ds),this}rotateX(e){return this.rotateOnAxis(_u,e)}rotateY(e){return this.rotateOnAxis(vu,e)}rotateZ(e){return this.rotateOnAxis(yu,e)}translateOnAxis(e,t){return gu.copy(e).applyQuaternion(this.quaternion),this.position.add(gu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(_u,e)}translateY(e){return this.translateOnAxis(vu,e)}translateZ(e){return this.translateOnAxis(yu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Yn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ta.copy(e):ta.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),ur.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Yn.lookAt(ur,ta,this.up):Yn.lookAt(ta,ur,this.up),this.quaternion.setFromRotationMatrix(Yn),s&&(Yn.extractRotation(s.matrixWorld),ds.setFromRotationMatrix(Yn),this.quaternion.premultiply(ds.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(xu),ps.child=e,this.dispatchEvent(ps),ps.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(xg),Io.child=e,this.dispatchEvent(Io),Io.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Yn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Yn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Yn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(xu),ps.child=e,this.dispatchEvent(ps),ps.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ur,e,vg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ur,yg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,f=c.length;l<f;l++){const h=c[l];r(e.shapes,h)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];s.animations.push(r(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),f=a(e.images),h=a(e.shapes),d=a(e.skeletons),p=a(e.animations),x=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),f.length>0&&(n.images=f),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),x.length>0&&(n.nodes=x)}return n.object=s,n;function a(o){const c=[];for(const l in o){const f=o[l];delete f.metadata,c.push(f)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}un.DEFAULT_UP=new X(0,1,0);un.DEFAULT_MATRIX_AUTO_UPDATE=!0;un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ln=new X,Jn=new X,Do=new X,Zn=new X,ms=new X,gs=new X,bu=new X,No=new X,Oo=new X,Uo=new X,ko=new Pt,Fo=new Pt,Bo=new Pt;class Dn{constructor(e=new X,t=new X,n=new X){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Ln.subVectors(e,t),s.cross(Ln);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Ln.subVectors(s,t),Jn.subVectors(n,t),Do.subVectors(e,t);const a=Ln.dot(Ln),o=Ln.dot(Jn),c=Ln.dot(Do),l=Jn.dot(Jn),f=Jn.dot(Do),h=a*l-o*o;if(h===0)return r.set(0,0,0),null;const d=1/h,p=(l*c-o*f)*d,x=(a*f-o*c)*d;return r.set(1-p-x,x,p)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Zn)===null?!1:Zn.x>=0&&Zn.y>=0&&Zn.x+Zn.y<=1}static getInterpolation(e,t,n,s,r,a,o,c){return this.getBarycoord(e,t,n,s,Zn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Zn.x),c.addScaledVector(a,Zn.y),c.addScaledVector(o,Zn.z),c)}static getInterpolatedAttribute(e,t,n,s,r,a){return ko.setScalar(0),Fo.setScalar(0),Bo.setScalar(0),ko.fromBufferAttribute(e,t),Fo.fromBufferAttribute(e,n),Bo.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(ko,r.x),a.addScaledVector(Fo,r.y),a.addScaledVector(Bo,r.z),a}static isFrontFacing(e,t,n,s){return Ln.subVectors(n,t),Jn.subVectors(e,t),Ln.cross(Jn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ln.subVectors(this.c,this.b),Jn.subVectors(this.a,this.b),Ln.cross(Jn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Dn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Dn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return Dn.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return Dn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Dn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let a,o;ms.subVectors(s,n),gs.subVectors(r,n),No.subVectors(e,n);const c=ms.dot(No),l=gs.dot(No);if(c<=0&&l<=0)return t.copy(n);Oo.subVectors(e,s);const f=ms.dot(Oo),h=gs.dot(Oo);if(f>=0&&h<=f)return t.copy(s);const d=c*h-f*l;if(d<=0&&c>=0&&f<=0)return a=c/(c-f),t.copy(n).addScaledVector(ms,a);Uo.subVectors(e,r);const p=ms.dot(Uo),x=gs.dot(Uo);if(x>=0&&p<=x)return t.copy(r);const y=p*l-c*x;if(y<=0&&l>=0&&x<=0)return o=l/(l-x),t.copy(n).addScaledVector(gs,o);const _=f*x-p*h;if(_<=0&&h-f>=0&&p-x>=0)return bu.subVectors(r,s),o=(h-f)/(h-f+(p-x)),t.copy(s).addScaledVector(bu,o);const g=1/(_+y+d);return a=y*g,o=d*g,t.copy(n).addScaledVector(ms,a).addScaledVector(gs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Wh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},vi={h:0,s:0,l:0},na={h:0,s:0,l:0};function zo(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class ft{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=qt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ut.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=ut.workingColorSpace){return this.r=e,this.g=t,this.b=n,ut.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=ut.workingColorSpace){if(e=ng(e,1),t=lt(t,0,1),n=lt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=zo(a,r,e+1/3),this.g=zo(a,r,e),this.b=zo(a,r,e-1/3)}return ut.toWorkingColorSpace(this,s),this}setStyle(e,t=qt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=qt){const n=Wh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=oi(e.r),this.g=oi(e.g),this.b=oi(e.b),this}copyLinearToSRGB(e){return this.r=Ns(e.r),this.g=Ns(e.g),this.b=Ns(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=qt){return ut.fromWorkingColorSpace(Jt.copy(this),e),Math.round(lt(Jt.r*255,0,255))*65536+Math.round(lt(Jt.g*255,0,255))*256+Math.round(lt(Jt.b*255,0,255))}getHexString(e=qt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ut.workingColorSpace){ut.fromWorkingColorSpace(Jt.copy(this),t);const n=Jt.r,s=Jt.g,r=Jt.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let c,l;const f=(o+a)/2;if(o===a)c=0,l=0;else{const h=a-o;switch(l=f<=.5?h/(a+o):h/(2-a-o),a){case n:c=(s-r)/h+(s<r?6:0);break;case s:c=(r-n)/h+2;break;case r:c=(n-s)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=f,e}getRGB(e,t=ut.workingColorSpace){return ut.fromWorkingColorSpace(Jt.copy(this),t),e.r=Jt.r,e.g=Jt.g,e.b=Jt.b,e}getStyle(e=qt){ut.fromWorkingColorSpace(Jt.copy(this),e);const t=Jt.r,n=Jt.g,s=Jt.b;return e!==qt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(vi),this.setHSL(vi.h+e,vi.s+t,vi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(vi),e.getHSL(na);const n=Mo(vi.h,na.h,t),s=Mo(vi.s,na.s,t),r=Mo(vi.l,na.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Jt=new ft;ft.NAMES=Wh;let bg=0;class ao extends Js{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:bg++}),this.uuid=Lr(),this.name="",this.type="Material",this.blending=wn,this.side=Ti,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=pl,this.blendDst=ml,this.blendEquation=Hi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ft(0,0,0),this.blendAlpha=0,this.depthFunc=Fs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ou,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=os,this.stencilZFail=os,this.stencilZPass=os,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==wn&&(n.blending=this.blending),this.side!==Ti&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==pl&&(n.blendSrc=this.blendSrc),this.blendDst!==ml&&(n.blendDst=this.blendDst),this.blendEquation!==Hi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Fs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ou&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==os&&(n.stencilFail=this.stencilFail),this.stencilZFail!==os&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==os&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Er extends ao{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ft(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ui,this.combine=Ah,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Dt=new X,ia=new yt;class Nn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=lu,this.updateRanges=[],this.gpuType=ii,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ia.fromBufferAttribute(this,t),ia.applyMatrix3(e),this.setXY(t,ia.x,ia.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.applyMatrix3(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.applyMatrix4(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.applyNormalMatrix(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.transformDirection(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=or(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=an(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=or(t,this.array)),t}setX(e,t){return this.normalized&&(t=an(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=or(t,this.array)),t}setY(e,t){return this.normalized&&(t=an(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=or(t,this.array)),t}setZ(e,t){return this.normalized&&(t=an(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=or(t,this.array)),t}setW(e,t){return this.normalized&&(t=an(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=an(t,this.array),n=an(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=an(t,this.array),n=an(n,this.array),s=an(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=an(t,this.array),n=an(n,this.array),s=an(s,this.array),r=an(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==lu&&(e.usage=this.usage),e}}class qh extends Nn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class jh extends Nn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class li extends Nn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let wg=0;const yn=new Nt,Ho=new un,_s=new X,pn=new Dr,fr=new Dr,Vt=new X;class hi extends Js{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:wg++}),this.uuid=Lr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(zh(e)?jh:qh)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new et().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return yn.makeRotationFromQuaternion(e),this.applyMatrix4(yn),this}rotateX(e){return yn.makeRotationX(e),this.applyMatrix4(yn),this}rotateY(e){return yn.makeRotationY(e),this.applyMatrix4(yn),this}rotateZ(e){return yn.makeRotationZ(e),this.applyMatrix4(yn),this}translate(e,t,n){return yn.makeTranslation(e,t,n),this.applyMatrix4(yn),this}scale(e,t,n){return yn.makeScale(e,t,n),this.applyMatrix4(yn),this}lookAt(e){return Ho.lookAt(e),Ho.updateMatrix(),this.applyMatrix4(Ho.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_s).negate(),this.translate(_s.x,_s.y,_s.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new li(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Dr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];pn.setFromBufferAttribute(r),this.morphTargetsRelative?(Vt.addVectors(this.boundingBox.min,pn.min),this.boundingBox.expandByPoint(Vt),Vt.addVectors(this.boundingBox.max,pn.max),this.boundingBox.expandByPoint(Vt)):(this.boundingBox.expandByPoint(pn.min),this.boundingBox.expandByPoint(pn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Rc);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new X,1/0);return}if(e){const n=this.boundingSphere.center;if(pn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];fr.setFromBufferAttribute(o),this.morphTargetsRelative?(Vt.addVectors(pn.min,fr.min),pn.expandByPoint(Vt),Vt.addVectors(pn.max,fr.max),pn.expandByPoint(Vt)):(pn.expandByPoint(fr.min),pn.expandByPoint(fr.max))}pn.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Vt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Vt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],c=this.morphTargetsRelative;for(let l=0,f=o.count;l<f;l++)Vt.fromBufferAttribute(o,l),c&&(_s.fromBufferAttribute(e,l),Vt.add(_s)),s=Math.max(s,n.distanceToSquared(Vt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Nn(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let D=0;D<n.count;D++)o[D]=new X,c[D]=new X;const l=new X,f=new X,h=new X,d=new yt,p=new yt,x=new yt,y=new X,_=new X;function g(D,S,b){l.fromBufferAttribute(n,D),f.fromBufferAttribute(n,S),h.fromBufferAttribute(n,b),d.fromBufferAttribute(r,D),p.fromBufferAttribute(r,S),x.fromBufferAttribute(r,b),f.sub(l),h.sub(l),p.sub(d),x.sub(d);const N=1/(p.x*x.y-x.x*p.y);isFinite(N)&&(y.copy(f).multiplyScalar(x.y).addScaledVector(h,-p.y).multiplyScalar(N),_.copy(h).multiplyScalar(p.x).addScaledVector(f,-x.x).multiplyScalar(N),o[D].add(y),o[S].add(y),o[b].add(y),c[D].add(_),c[S].add(_),c[b].add(_))}let R=this.groups;R.length===0&&(R=[{start:0,count:e.count}]);for(let D=0,S=R.length;D<S;++D){const b=R[D],N=b.start,F=b.count;for(let k=N,$=N+F;k<$;k+=3)g(e.getX(k+0),e.getX(k+1),e.getX(k+2))}const T=new X,w=new X,L=new X,I=new X;function C(D){L.fromBufferAttribute(s,D),I.copy(L);const S=o[D];T.copy(S),T.sub(L.multiplyScalar(L.dot(S))).normalize(),w.crossVectors(I,S);const N=w.dot(c[D])<0?-1:1;a.setXYZW(D,T.x,T.y,T.z,N)}for(let D=0,S=R.length;D<S;++D){const b=R[D],N=b.start,F=b.count;for(let k=N,$=N+F;k<$;k+=3)C(e.getX(k+0)),C(e.getX(k+1)),C(e.getX(k+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Nn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const s=new X,r=new X,a=new X,o=new X,c=new X,l=new X,f=new X,h=new X;if(e)for(let d=0,p=e.count;d<p;d+=3){const x=e.getX(d+0),y=e.getX(d+1),_=e.getX(d+2);s.fromBufferAttribute(t,x),r.fromBufferAttribute(t,y),a.fromBufferAttribute(t,_),f.subVectors(a,r),h.subVectors(s,r),f.cross(h),o.fromBufferAttribute(n,x),c.fromBufferAttribute(n,y),l.fromBufferAttribute(n,_),o.add(f),c.add(f),l.add(f),n.setXYZ(x,o.x,o.y,o.z),n.setXYZ(y,c.x,c.y,c.z),n.setXYZ(_,l.x,l.y,l.z)}else for(let d=0,p=t.count;d<p;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),f.subVectors(a,r),h.subVectors(s,r),f.cross(h),n.setXYZ(d+0,f.x,f.y,f.z),n.setXYZ(d+1,f.x,f.y,f.z),n.setXYZ(d+2,f.x,f.y,f.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Vt.fromBufferAttribute(e,t),Vt.normalize(),e.setXYZ(t,Vt.x,Vt.y,Vt.z)}toNonIndexed(){function e(o,c){const l=o.array,f=o.itemSize,h=o.normalized,d=new l.constructor(c.length*f);let p=0,x=0;for(let y=0,_=c.length;y<_;y++){o.isInterleavedBufferAttribute?p=c[y]*o.data.stride+o.offset:p=c[y]*f;for(let g=0;g<f;g++)d[x++]=l[p++]}return new Nn(d,f,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new hi,n=this.index.array,s=this.attributes;for(const o in s){const c=s[o],l=e(c,n);t.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let f=0,h=l.length;f<h;f++){const d=l[f],p=e(d,n);c.push(p)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],f=[];for(let h=0,d=l.length;h<d;h++){const p=l[h];f.push(p.toJSON(e.data))}f.length>0&&(s[c]=f,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const s=e.attributes;for(const l in s){const f=s[l];this.setAttribute(l,f.clone(t))}const r=e.morphAttributes;for(const l in r){const f=[],h=r[l];for(let d=0,p=h.length;d<p;d++)f.push(h[d].clone(t));this.morphAttributes[l]=f}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,f=a.length;l<f;l++){const h=a[l];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const wu=new Nt,Oi=new pg,sa=new Rc,Mu=new X,ra=new X,aa=new X,oa=new X,Vo=new X,la=new X,Su=new X,ca=new X;class nn extends un{constructor(e=new hi,t=new Er){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){la.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const f=o[c],h=r[c];f!==0&&(Vo.fromBufferAttribute(h,e),a?la.addScaledVector(Vo,f):la.addScaledVector(Vo.sub(t),f))}t.add(la)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),sa.copy(n.boundingSphere),sa.applyMatrix4(r),Oi.copy(e.ray).recast(e.near),!(sa.containsPoint(Oi.origin)===!1&&(Oi.intersectSphere(sa,Mu)===null||Oi.origin.distanceToSquared(Mu)>(e.far-e.near)**2))&&(wu.copy(r).invert(),Oi.copy(e.ray).applyMatrix4(wu),!(n.boundingBox!==null&&Oi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Oi)))}_computeIntersections(e,t,n){let s;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,f=r.attributes.uv1,h=r.attributes.normal,d=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,y=d.length;x<y;x++){const _=d[x],g=a[_.materialIndex],R=Math.max(_.start,p.start),T=Math.min(o.count,Math.min(_.start+_.count,p.start+p.count));for(let w=R,L=T;w<L;w+=3){const I=o.getX(w),C=o.getX(w+1),D=o.getX(w+2);s=ua(this,g,e,n,l,f,h,I,C,D),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=_.materialIndex,t.push(s))}}else{const x=Math.max(0,p.start),y=Math.min(o.count,p.start+p.count);for(let _=x,g=y;_<g;_+=3){const R=o.getX(_),T=o.getX(_+1),w=o.getX(_+2);s=ua(this,a,e,n,l,f,h,R,T,w),s&&(s.faceIndex=Math.floor(_/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let x=0,y=d.length;x<y;x++){const _=d[x],g=a[_.materialIndex],R=Math.max(_.start,p.start),T=Math.min(c.count,Math.min(_.start+_.count,p.start+p.count));for(let w=R,L=T;w<L;w+=3){const I=w,C=w+1,D=w+2;s=ua(this,g,e,n,l,f,h,I,C,D),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=_.materialIndex,t.push(s))}}else{const x=Math.max(0,p.start),y=Math.min(c.count,p.start+p.count);for(let _=x,g=y;_<g;_+=3){const R=_,T=_+1,w=_+2;s=ua(this,a,e,n,l,f,h,R,T,w),s&&(s.faceIndex=Math.floor(_/3),t.push(s))}}}}function Mg(i,e,t,n,s,r,a,o){let c;if(e.side===cn?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,e.side===Ti,o),c===null)return null;ca.copy(o),ca.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(ca);return l<t.near||l>t.far?null:{distance:l,point:ca.clone(),object:i}}function ua(i,e,t,n,s,r,a,o,c,l){i.getVertexPosition(o,ra),i.getVertexPosition(c,aa),i.getVertexPosition(l,oa);const f=Mg(i,e,t,n,ra,aa,oa,Su);if(f){const h=new X;Dn.getBarycoord(Su,ra,aa,oa,h),s&&(f.uv=Dn.getInterpolatedAttribute(s,o,c,l,h,new yt)),r&&(f.uv1=Dn.getInterpolatedAttribute(r,o,c,l,h,new yt)),a&&(f.normal=Dn.getInterpolatedAttribute(a,o,c,l,h,new X),f.normal.dot(n.direction)>0&&f.normal.multiplyScalar(-1));const d={a:o,b:c,c:l,normal:new X,materialIndex:0};Dn.getNormal(ra,aa,oa,d.normal),f.face=d,f.barycoord=h}return f}class Nr extends hi{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],f=[],h=[];let d=0,p=0;x("z","y","x",-1,-1,n,t,e,a,r,0),x("z","y","x",1,-1,n,t,-e,a,r,1),x("x","z","y",1,1,e,n,t,s,a,2),x("x","z","y",1,-1,e,n,-t,s,a,3),x("x","y","z",1,-1,e,t,n,s,r,4),x("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new li(l,3)),this.setAttribute("normal",new li(f,3)),this.setAttribute("uv",new li(h,2));function x(y,_,g,R,T,w,L,I,C,D,S){const b=w/C,N=L/D,F=w/2,k=L/2,$=I/2,ie=C+1,J=D+1;let de=0,K=0;const ee=new X;for(let ae=0;ae<J;ae++){const me=ae*N-k;for(let ve=0;ve<ie;ve++){const Re=ve*b-F;ee[y]=Re*R,ee[_]=me*T,ee[g]=$,l.push(ee.x,ee.y,ee.z),ee[y]=0,ee[_]=0,ee[g]=I>0?1:-1,f.push(ee.x,ee.y,ee.z),h.push(ve/C),h.push(1-ae/D),de+=1}}for(let ae=0;ae<D;ae++)for(let me=0;me<C;me++){const ve=d+me+ie*ae,Re=d+me+ie*(ae+1),Q=d+(me+1)+ie*(ae+1),ue=d+(me+1)+ie*ae;c.push(ve,Re,ue),c.push(Re,Q,ue),K+=6}o.addGroup(p,K,S),p+=K,d+=de}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Nr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ws(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function en(i){const e={};for(let t=0;t<i.length;t++){const n=Ws(i[t]);for(const s in n)e[s]=n[s]}return e}function Sg(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Xh(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ut.workingColorSpace}const Eg={clone:Ws,merge:en};var Tg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ag=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class On extends ao{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Tg,this.fragmentShader=Ag,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ws(e.uniforms),this.uniformsGroups=Sg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class $h extends un{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Nt,this.projectionMatrix=new Nt,this.projectionMatrixInverse=new Nt,this.coordinateSystem=si}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const yi=new X,Eu=new yt,Tu=new yt;class In extends $h{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Zl*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(wo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Zl*2*Math.atan(Math.tan(wo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){yi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(yi.x,yi.y).multiplyScalar(-e/yi.z),yi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(yi.x,yi.y).multiplyScalar(-e/yi.z)}getViewSize(e,t){return this.getViewBounds(e,Eu,Tu),t.subVectors(Tu,Eu)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(wo*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const vs=-90,ys=1;class Rg extends un{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new In(vs,ys,e,t);s.layers=this.layers,this.add(s);const r=new In(vs,ys,e,t);r.layers=this.layers,this.add(r);const a=new In(vs,ys,e,t);a.layers=this.layers,this.add(a);const o=new In(vs,ys,e,t);o.layers=this.layers,this.add(o);const c=new In(vs,ys,e,t);c.layers=this.layers,this.add(c);const l=new In(vs,ys,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,c]=t;for(const l of t)this.remove(l);if(e===si)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Ga)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,l,f]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,l),n.texture.generateMipmaps=y,e.setRenderTarget(n,5,s),e.render(t,f),e.setRenderTarget(h,d,p),e.xr.enabled=x,n.texture.needsPMREMUpdate=!0}}class Kh extends jt{constructor(e,t,n,s,r,a,o,c,l,f){e=e!==void 0?e:[],t=t!==void 0?t:Bs,super(e,t,n,s,r,a,o,c,l,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Cg extends Ai{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Kh(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:ln}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Nr(5,5,5),r=new On({name:"CubemapFromEquirect",uniforms:Ws(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:cn,blending:Si});r.uniforms.tEquirect.value=t;const a=new nn(s,r),o=t.minFilter;return t.minFilter===Hn&&(t.minFilter=ln),new Rg(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,s){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}}class Yh extends un{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ui,this.environmentIntensity=1,this.environmentRotation=new ui,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Pg extends jt{constructor(e=null,t=1,n=1,s,r,a,o,c,l=Gt,f=Gt,h,d){super(null,a,o,c,l,f,s,r,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Lg extends Nn{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Go=new X,Ig=new X,Dg=new et;class Bi{constructor(e=new X(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=Go.subVectors(n,t).cross(Ig.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Go),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Dg.getNormalMatrix(e),s=this.coplanarPoint(Go).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ui=new Rc,fa=new X;class Jh{constructor(e=new Bi,t=new Bi,n=new Bi,s=new Bi,r=new Bi,a=new Bi){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=si){const n=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],c=s[3],l=s[4],f=s[5],h=s[6],d=s[7],p=s[8],x=s[9],y=s[10],_=s[11],g=s[12],R=s[13],T=s[14],w=s[15];if(n[0].setComponents(c-r,d-l,_-p,w-g).normalize(),n[1].setComponents(c+r,d+l,_+p,w+g).normalize(),n[2].setComponents(c+a,d+f,_+x,w+R).normalize(),n[3].setComponents(c-a,d-f,_-x,w-R).normalize(),n[4].setComponents(c-o,d-h,_-y,w-T).normalize(),t===si)n[5].setComponents(c+o,d+h,_+y,w+T).normalize();else if(t===Ga)n[5].setComponents(o,h,y,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ui.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ui.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ui)}intersectsSprite(e){return Ui.center.set(0,0,0),Ui.radius=.7071067811865476,Ui.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ui)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(fa.x=s.normal.x>0?e.max.x:e.min.x,fa.y=s.normal.y>0?e.max.y:e.min.y,fa.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(fa)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}let ha=class extends un{constructor(){super(),this.isGroup=!0,this.type="Group"}};class Ql extends jt{constructor(e,t,n,s,r,a,o,c,l){super(e,t,n,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Zh extends jt{constructor(e,t,n,s,r,a,o,c,l,f=Ds){if(f!==Ds&&f!==Vs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&f===Ds&&(n=Ki),n===void 0&&f===Vs&&(n=Hs),super(null,s,r,a,o,c,f,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Gt,this.minFilter=c!==void 0?c:Gt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class fi extends hi{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(s),l=o+1,f=c+1,h=e/o,d=t/c,p=[],x=[],y=[],_=[];for(let g=0;g<f;g++){const R=g*d-a;for(let T=0;T<l;T++){const w=T*h-r;x.push(w,-R,0),y.push(0,0,1),_.push(T/o),_.push(1-g/c)}}for(let g=0;g<c;g++)for(let R=0;R<o;R++){const T=R+l*g,w=R+l*(g+1),L=R+1+l*(g+1),I=R+1+l*g;p.push(T,w,I),p.push(w,L,I)}this.setIndex(p),this.setAttribute("position",new li(x,3)),this.setAttribute("normal",new li(y,3)),this.setAttribute("uv",new li(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fi(e.width,e.height,e.widthSegments,e.heightSegments)}}class Ng extends ao{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Wm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Og extends ao{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Au={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class Ug{constructor(e,t,n){const s=this;let r=!1,a=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(f){o++,r===!1&&s.onStart!==void 0&&s.onStart(f,a,o),r=!0},this.itemEnd=function(f){a++,s.onProgress!==void 0&&s.onProgress(f,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(f){s.onError!==void 0&&s.onError(f)},this.resolveURL=function(f){return c?c(f):f},this.setURLModifier=function(f){return c=f,this},this.addHandler=function(f,h){return l.push(f,h),this},this.removeHandler=function(f){const h=l.indexOf(f);return h!==-1&&l.splice(h,2),this},this.getHandler=function(f){for(let h=0,d=l.length;h<d;h+=2){const p=l[h],x=l[h+1];if(p.global&&(p.lastIndex=0),p.test(f))return x}return null}}}const kg=new Ug;class Cc{constructor(e){this.manager=e!==void 0?e:kg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Cc.DEFAULT_MATERIAL_NAME="__DEFAULT";class Fg extends Cc{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=Au.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;const o=Sr("img");function c(){f(),Au.add(e,this),t&&t(this),r.manager.itemEnd(e)}function l(h){f(),s&&s(h),r.manager.itemError(e),r.manager.itemEnd(e)}function f(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}}class Qh extends Cc{constructor(e){super(e)}load(e,t,n,s){const r=new jt,a=new Fg(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}}class Pc extends $h{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=f*this.view.offsetY,c=o-f*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Bg extends hi{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class zg extends In{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}function Ru(i,e,t,n){const s=Hg(n);switch(t){case Ih:return i*e;case Nh:return i*e;case Oh:return i*e*2;case Uh:return i*e/s.components*s.byteLength;case Ec:return i*e/s.components*s.byteLength;case kh:return i*e*2/s.components*s.byteLength;case Tc:return i*e*2/s.components*s.byteLength;case Dh:return i*e*3/s.components*s.byteLength;case xn:return i*e*4/s.components*s.byteLength;case Ac:return i*e*4/s.components*s.byteLength;case Aa:case Ra:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ca:case Pa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Al:case Cl:return Math.max(i,16)*Math.max(e,8)/4;case Tl:case Rl:return Math.max(i,8)*Math.max(e,8)/2;case Pl:case Ll:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Il:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Dl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Nl:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Ol:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Ul:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case kl:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Fl:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Bl:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case zl:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Hl:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Vl:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Gl:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Wl:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case ql:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case jl:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case La:case Xl:case $l:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Fh:case Kl:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Yl:case Jl:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Hg(i){switch(i){case Wn:case Ch:return{byteLength:1,components:1};case Mr:case Ph:case Pr:return{byteLength:2,components:1};case Mc:case Sc:return{byteLength:2,components:4};case Ki:case wc:case ii:return{byteLength:4,components:1};case Lh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:bc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=bc);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function ed(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Vg(i){const e=new WeakMap;function t(o,c){const l=o.array,f=o.usage,h=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,f),o.onUploadCallback();let p;if(l instanceof Float32Array)p=i.FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=i.SHORT;else if(l instanceof Uint32Array)p=i.UNSIGNED_INT;else if(l instanceof Int32Array)p=i.INT;else if(l instanceof Int8Array)p=i.BYTE;else if(l instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,c,l){const f=c.array,h=c.updateRanges;if(i.bindBuffer(l,o),h.length===0)i.bufferSubData(l,0,f);else{h.sort((p,x)=>p.start-x.start);let d=0;for(let p=1;p<h.length;p++){const x=h[d],y=h[p];y.start<=x.start+x.count+1?x.count=Math.max(x.count,y.start+y.count-x.start):(++d,h[d]=y)}h.length=d+1;for(let p=0,x=h.length;p<x;p++){const y=h[p];i.bufferSubData(l,y.start*f.BYTES_PER_ELEMENT,f,y.start,y.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const f=e.get(o);(!f||f.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var Gg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Wg=`#ifdef USE_ALPHAHASH
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
#endif`,qg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,jg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Xg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,$g=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Kg=`#ifdef USE_AOMAP
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
#endif`,Yg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Jg=`#ifdef USE_BATCHING
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
#endif`,Zg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Qg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,e0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,t0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,n0=`#ifdef USE_IRIDESCENCE
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
#endif`,i0=`#ifdef USE_BUMPMAP
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
#endif`,s0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,r0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,a0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,o0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,l0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,c0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,u0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,f0=`#if defined( USE_COLOR_ALPHA )
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
#endif`,h0=`#define PI 3.141592653589793
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
} // validated`,d0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,p0=`vec3 transformedNormal = objectNormal;
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
#endif`,m0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,g0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,_0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,v0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,y0="gl_FragColor = linearToOutputTexel( gl_FragColor );",x0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,b0=`#ifdef USE_ENVMAP
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
#endif`,w0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,M0=`#ifdef USE_ENVMAP
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
#endif`,S0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,E0=`#ifdef USE_ENVMAP
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
#endif`,T0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,A0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,R0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,C0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,P0=`#ifdef USE_GRADIENTMAP
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
}`,L0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,I0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,D0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,N0=`uniform bool receiveShadow;
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
#endif`,O0=`#ifdef USE_ENVMAP
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
#endif`,U0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,k0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,F0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,B0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,z0=`PhysicalMaterial material;
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
#endif`,H0=`struct PhysicalMaterial {
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
}`,V0=`
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
#endif`,G0=`#if defined( RE_IndirectDiffuse )
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
#endif`,W0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,q0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,j0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,X0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,K0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Y0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,J0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Z0=`#if defined( USE_POINTS_UV )
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
#endif`,Q0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,e_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,t_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,n_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,i_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,s_=`#ifdef USE_MORPHTARGETS
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
#endif`,r_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,a_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,o_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,l_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,c_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,u_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,f_=`#ifdef USE_NORMALMAP
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
#endif`,h_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,d_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,p_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,m_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,g_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,__=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,v_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,y_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,x_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,b_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,w_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,M_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,S_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,E_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,T_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,A_=`float getShadowMask() {
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
}`,R_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,C_=`#ifdef USE_SKINNING
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
#endif`,P_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,L_=`#ifdef USE_SKINNING
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
#endif`,I_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,D_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,N_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,O_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,U_=`#ifdef USE_TRANSMISSION
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
#endif`,k_=`#ifdef USE_TRANSMISSION
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
#endif`,F_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,B_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,z_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,H_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const V_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,G_=`uniform sampler2D t2D;
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
}`,W_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,q_=`#ifdef ENVMAP_TYPE_CUBE
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
}`,j_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,X_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$_=`#include <common>
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
}`,K_=`#if DEPTH_PACKING == 3200
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
}`,Y_=`#define DISTANCE
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
}`,J_=`#define DISTANCE
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
}`,Z_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Q_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ev=`uniform float scale;
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
}`,tv=`uniform vec3 diffuse;
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
}`,nv=`#include <common>
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
}`,iv=`uniform vec3 diffuse;
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
}`,sv=`#define LAMBERT
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
}`,rv=`#define LAMBERT
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
}`,av=`#define MATCAP
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
}`,ov=`#define MATCAP
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
}`,lv=`#define NORMAL
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
}`,cv=`#define NORMAL
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
}`,uv=`#define PHONG
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
}`,fv=`#define PHONG
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
}`,hv=`#define STANDARD
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
}`,dv=`#define STANDARD
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
}`,pv=`#define TOON
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
}`,mv=`#define TOON
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
}`,gv=`uniform float size;
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
}`,_v=`uniform vec3 diffuse;
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
}`,vv=`#include <common>
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
}`,yv=`uniform vec3 color;
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
}`,xv=`uniform float rotation;
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
}`,bv=`uniform vec3 diffuse;
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
}`,tt={alphahash_fragment:Gg,alphahash_pars_fragment:Wg,alphamap_fragment:qg,alphamap_pars_fragment:jg,alphatest_fragment:Xg,alphatest_pars_fragment:$g,aomap_fragment:Kg,aomap_pars_fragment:Yg,batching_pars_vertex:Jg,batching_vertex:Zg,begin_vertex:Qg,beginnormal_vertex:e0,bsdfs:t0,iridescence_fragment:n0,bumpmap_pars_fragment:i0,clipping_planes_fragment:s0,clipping_planes_pars_fragment:r0,clipping_planes_pars_vertex:a0,clipping_planes_vertex:o0,color_fragment:l0,color_pars_fragment:c0,color_pars_vertex:u0,color_vertex:f0,common:h0,cube_uv_reflection_fragment:d0,defaultnormal_vertex:p0,displacementmap_pars_vertex:m0,displacementmap_vertex:g0,emissivemap_fragment:_0,emissivemap_pars_fragment:v0,colorspace_fragment:y0,colorspace_pars_fragment:x0,envmap_fragment:b0,envmap_common_pars_fragment:w0,envmap_pars_fragment:M0,envmap_pars_vertex:S0,envmap_physical_pars_fragment:O0,envmap_vertex:E0,fog_vertex:T0,fog_pars_vertex:A0,fog_fragment:R0,fog_pars_fragment:C0,gradientmap_pars_fragment:P0,lightmap_pars_fragment:L0,lights_lambert_fragment:I0,lights_lambert_pars_fragment:D0,lights_pars_begin:N0,lights_toon_fragment:U0,lights_toon_pars_fragment:k0,lights_phong_fragment:F0,lights_phong_pars_fragment:B0,lights_physical_fragment:z0,lights_physical_pars_fragment:H0,lights_fragment_begin:V0,lights_fragment_maps:G0,lights_fragment_end:W0,logdepthbuf_fragment:q0,logdepthbuf_pars_fragment:j0,logdepthbuf_pars_vertex:X0,logdepthbuf_vertex:$0,map_fragment:K0,map_pars_fragment:Y0,map_particle_fragment:J0,map_particle_pars_fragment:Z0,metalnessmap_fragment:Q0,metalnessmap_pars_fragment:e_,morphinstance_vertex:t_,morphcolor_vertex:n_,morphnormal_vertex:i_,morphtarget_pars_vertex:s_,morphtarget_vertex:r_,normal_fragment_begin:a_,normal_fragment_maps:o_,normal_pars_fragment:l_,normal_pars_vertex:c_,normal_vertex:u_,normalmap_pars_fragment:f_,clearcoat_normal_fragment_begin:h_,clearcoat_normal_fragment_maps:d_,clearcoat_pars_fragment:p_,iridescence_pars_fragment:m_,opaque_fragment:g_,packing:__,premultiplied_alpha_fragment:v_,project_vertex:y_,dithering_fragment:x_,dithering_pars_fragment:b_,roughnessmap_fragment:w_,roughnessmap_pars_fragment:M_,shadowmap_pars_fragment:S_,shadowmap_pars_vertex:E_,shadowmap_vertex:T_,shadowmask_pars_fragment:A_,skinbase_vertex:R_,skinning_pars_vertex:C_,skinning_vertex:P_,skinnormal_vertex:L_,specularmap_fragment:I_,specularmap_pars_fragment:D_,tonemapping_fragment:N_,tonemapping_pars_fragment:O_,transmission_fragment:U_,transmission_pars_fragment:k_,uv_pars_fragment:F_,uv_pars_vertex:B_,uv_vertex:z_,worldpos_vertex:H_,background_vert:V_,background_frag:G_,backgroundCube_vert:W_,backgroundCube_frag:q_,cube_vert:j_,cube_frag:X_,depth_vert:$_,depth_frag:K_,distanceRGBA_vert:Y_,distanceRGBA_frag:J_,equirect_vert:Z_,equirect_frag:Q_,linedashed_vert:ev,linedashed_frag:tv,meshbasic_vert:nv,meshbasic_frag:iv,meshlambert_vert:sv,meshlambert_frag:rv,meshmatcap_vert:av,meshmatcap_frag:ov,meshnormal_vert:lv,meshnormal_frag:cv,meshphong_vert:uv,meshphong_frag:fv,meshphysical_vert:hv,meshphysical_frag:dv,meshtoon_vert:pv,meshtoon_frag:mv,points_vert:gv,points_frag:_v,shadow_vert:vv,shadow_frag:yv,sprite_vert:xv,sprite_frag:bv},we={common:{diffuse:{value:new ft(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new et}},envmap:{envMap:{value:null},envMapRotation:{value:new et},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new et}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new et}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new et},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new et},normalScale:{value:new yt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new et},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new et}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new et}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new et}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ft(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ft(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0},uvTransform:{value:new et}},sprite:{diffuse:{value:new ft(16777215)},opacity:{value:1},center:{value:new yt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}}},zn={basic:{uniforms:en([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.fog]),vertexShader:tt.meshbasic_vert,fragmentShader:tt.meshbasic_frag},lambert:{uniforms:en([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new ft(0)}}]),vertexShader:tt.meshlambert_vert,fragmentShader:tt.meshlambert_frag},phong:{uniforms:en([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new ft(0)},specular:{value:new ft(1118481)},shininess:{value:30}}]),vertexShader:tt.meshphong_vert,fragmentShader:tt.meshphong_frag},standard:{uniforms:en([we.common,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.roughnessmap,we.metalnessmap,we.fog,we.lights,{emissive:{value:new ft(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag},toon:{uniforms:en([we.common,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.gradientmap,we.fog,we.lights,{emissive:{value:new ft(0)}}]),vertexShader:tt.meshtoon_vert,fragmentShader:tt.meshtoon_frag},matcap:{uniforms:en([we.common,we.bumpmap,we.normalmap,we.displacementmap,we.fog,{matcap:{value:null}}]),vertexShader:tt.meshmatcap_vert,fragmentShader:tt.meshmatcap_frag},points:{uniforms:en([we.points,we.fog]),vertexShader:tt.points_vert,fragmentShader:tt.points_frag},dashed:{uniforms:en([we.common,we.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:tt.linedashed_vert,fragmentShader:tt.linedashed_frag},depth:{uniforms:en([we.common,we.displacementmap]),vertexShader:tt.depth_vert,fragmentShader:tt.depth_frag},normal:{uniforms:en([we.common,we.bumpmap,we.normalmap,we.displacementmap,{opacity:{value:1}}]),vertexShader:tt.meshnormal_vert,fragmentShader:tt.meshnormal_frag},sprite:{uniforms:en([we.sprite,we.fog]),vertexShader:tt.sprite_vert,fragmentShader:tt.sprite_frag},background:{uniforms:{uvTransform:{value:new et},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:tt.background_vert,fragmentShader:tt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new et}},vertexShader:tt.backgroundCube_vert,fragmentShader:tt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:tt.cube_vert,fragmentShader:tt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:tt.equirect_vert,fragmentShader:tt.equirect_frag},distanceRGBA:{uniforms:en([we.common,we.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:tt.distanceRGBA_vert,fragmentShader:tt.distanceRGBA_frag},shadow:{uniforms:en([we.lights,we.fog,{color:{value:new ft(0)},opacity:{value:1}}]),vertexShader:tt.shadow_vert,fragmentShader:tt.shadow_frag}};zn.physical={uniforms:en([zn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new et},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new et},clearcoatNormalScale:{value:new yt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new et},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new et},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new et},sheen:{value:0},sheenColor:{value:new ft(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new et},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new et},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new et},transmissionSamplerSize:{value:new yt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new et},attenuationDistance:{value:0},attenuationColor:{value:new ft(0)},specularColor:{value:new ft(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new et},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new et},anisotropyVector:{value:new yt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new et}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag};const da={r:0,b:0,g:0},ki=new ui,wv=new Nt;function Mv(i,e,t,n,s,r,a){const o=new ft(0);let c=r===!0?0:1,l,f,h=null,d=0,p=null;function x(T){let w=T.isScene===!0?T.background:null;return w&&w.isTexture&&(w=(T.backgroundBlurriness>0?t:e).get(w)),w}function y(T){let w=!1;const L=x(T);L===null?g(o,c):L&&L.isColor&&(g(L,1),w=!0);const I=i.xr.getEnvironmentBlendMode();I==="additive"?n.buffers.color.setClear(0,0,0,1,a):I==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||w)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function _(T,w){const L=x(w);L&&(L.isCubeTexture||L.mapping===ro)?(f===void 0&&(f=new nn(new Nr(1,1,1),new On({name:"BackgroundCubeMaterial",uniforms:Ws(zn.backgroundCube.uniforms),vertexShader:zn.backgroundCube.vertexShader,fragmentShader:zn.backgroundCube.fragmentShader,side:cn,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(I,C,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(f)),ki.copy(w.backgroundRotation),ki.x*=-1,ki.y*=-1,ki.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(ki.y*=-1,ki.z*=-1),f.material.uniforms.envMap.value=L,f.material.uniforms.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(wv.makeRotationFromEuler(ki)),f.material.toneMapped=ut.getTransfer(L.colorSpace)!==vt,(h!==L||d!==L.version||p!==i.toneMapping)&&(f.material.needsUpdate=!0,h=L,d=L.version,p=i.toneMapping),f.layers.enableAll(),T.unshift(f,f.geometry,f.material,0,0,null)):L&&L.isTexture&&(l===void 0&&(l=new nn(new fi(2,2),new On({name:"BackgroundMaterial",uniforms:Ws(zn.background.uniforms),vertexShader:zn.background.vertexShader,fragmentShader:zn.background.fragmentShader,side:Ti,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=L,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=ut.getTransfer(L.colorSpace)!==vt,L.matrixAutoUpdate===!0&&L.updateMatrix(),l.material.uniforms.uvTransform.value.copy(L.matrix),(h!==L||d!==L.version||p!==i.toneMapping)&&(l.material.needsUpdate=!0,h=L,d=L.version,p=i.toneMapping),l.layers.enableAll(),T.unshift(l,l.geometry,l.material,0,0,null))}function g(T,w){T.getRGB(da,Xh(i)),n.buffers.color.setClear(da.r,da.g,da.b,w,a)}function R(){f!==void 0&&(f.geometry.dispose(),f.material.dispose()),l!==void 0&&(l.geometry.dispose(),l.material.dispose())}return{getClearColor:function(){return o},setClearColor:function(T,w=1){o.set(T),c=w,g(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(T){c=T,g(o,c)},render:y,addToRenderList:_,dispose:R}}function Sv(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,a=!1;function o(b,N,F,k,$){let ie=!1;const J=h(k,F,N);r!==J&&(r=J,l(r.object)),ie=p(b,k,F,$),ie&&x(b,k,F,$),$!==null&&e.update($,i.ELEMENT_ARRAY_BUFFER),(ie||a)&&(a=!1,w(b,N,F,k),$!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get($).buffer))}function c(){return i.createVertexArray()}function l(b){return i.bindVertexArray(b)}function f(b){return i.deleteVertexArray(b)}function h(b,N,F){const k=F.wireframe===!0;let $=n[b.id];$===void 0&&($={},n[b.id]=$);let ie=$[N.id];ie===void 0&&(ie={},$[N.id]=ie);let J=ie[k];return J===void 0&&(J=d(c()),ie[k]=J),J}function d(b){const N=[],F=[],k=[];for(let $=0;$<t;$++)N[$]=0,F[$]=0,k[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:F,attributeDivisors:k,object:b,attributes:{},index:null}}function p(b,N,F,k){const $=r.attributes,ie=N.attributes;let J=0;const de=F.getAttributes();for(const K in de)if(de[K].location>=0){const ae=$[K];let me=ie[K];if(me===void 0&&(K==="instanceMatrix"&&b.instanceMatrix&&(me=b.instanceMatrix),K==="instanceColor"&&b.instanceColor&&(me=b.instanceColor)),ae===void 0||ae.attribute!==me||me&&ae.data!==me.data)return!0;J++}return r.attributesNum!==J||r.index!==k}function x(b,N,F,k){const $={},ie=N.attributes;let J=0;const de=F.getAttributes();for(const K in de)if(de[K].location>=0){let ae=ie[K];ae===void 0&&(K==="instanceMatrix"&&b.instanceMatrix&&(ae=b.instanceMatrix),K==="instanceColor"&&b.instanceColor&&(ae=b.instanceColor));const me={};me.attribute=ae,ae&&ae.data&&(me.data=ae.data),$[K]=me,J++}r.attributes=$,r.attributesNum=J,r.index=k}function y(){const b=r.newAttributes;for(let N=0,F=b.length;N<F;N++)b[N]=0}function _(b){g(b,0)}function g(b,N){const F=r.newAttributes,k=r.enabledAttributes,$=r.attributeDivisors;F[b]=1,k[b]===0&&(i.enableVertexAttribArray(b),k[b]=1),$[b]!==N&&(i.vertexAttribDivisor(b,N),$[b]=N)}function R(){const b=r.newAttributes,N=r.enabledAttributes;for(let F=0,k=N.length;F<k;F++)N[F]!==b[F]&&(i.disableVertexAttribArray(F),N[F]=0)}function T(b,N,F,k,$,ie,J){J===!0?i.vertexAttribIPointer(b,N,F,$,ie):i.vertexAttribPointer(b,N,F,k,$,ie)}function w(b,N,F,k){y();const $=k.attributes,ie=F.getAttributes(),J=N.defaultAttributeValues;for(const de in ie){const K=ie[de];if(K.location>=0){let ee=$[de];if(ee===void 0&&(de==="instanceMatrix"&&b.instanceMatrix&&(ee=b.instanceMatrix),de==="instanceColor"&&b.instanceColor&&(ee=b.instanceColor)),ee!==void 0){const ae=ee.normalized,me=ee.itemSize,ve=e.get(ee);if(ve===void 0)continue;const Re=ve.buffer,Q=ve.type,ue=ve.bytesPerElement,Me=Q===i.INT||Q===i.UNSIGNED_INT||ee.gpuType===wc;if(ee.isInterleavedBufferAttribute){const ge=ee.data,te=ge.stride,Ce=ee.offset;if(ge.isInstancedInterleavedBuffer){for(let ke=0;ke<K.locationSize;ke++)g(K.location+ke,ge.meshPerAttribute);b.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let ke=0;ke<K.locationSize;ke++)_(K.location+ke);i.bindBuffer(i.ARRAY_BUFFER,Re);for(let ke=0;ke<K.locationSize;ke++)T(K.location+ke,me/K.locationSize,Q,ae,te*ue,(Ce+me/K.locationSize*ke)*ue,Me)}else{if(ee.isInstancedBufferAttribute){for(let ge=0;ge<K.locationSize;ge++)g(K.location+ge,ee.meshPerAttribute);b.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let ge=0;ge<K.locationSize;ge++)_(K.location+ge);i.bindBuffer(i.ARRAY_BUFFER,Re);for(let ge=0;ge<K.locationSize;ge++)T(K.location+ge,me/K.locationSize,Q,ae,me*ue,me/K.locationSize*ge*ue,Me)}}else if(J!==void 0){const ae=J[de];if(ae!==void 0)switch(ae.length){case 2:i.vertexAttrib2fv(K.location,ae);break;case 3:i.vertexAttrib3fv(K.location,ae);break;case 4:i.vertexAttrib4fv(K.location,ae);break;default:i.vertexAttrib1fv(K.location,ae)}}}}R()}function L(){D();for(const b in n){const N=n[b];for(const F in N){const k=N[F];for(const $ in k)f(k[$].object),delete k[$];delete N[F]}delete n[b]}}function I(b){if(n[b.id]===void 0)return;const N=n[b.id];for(const F in N){const k=N[F];for(const $ in k)f(k[$].object),delete k[$];delete N[F]}delete n[b.id]}function C(b){for(const N in n){const F=n[N];if(F[b.id]===void 0)continue;const k=F[b.id];for(const $ in k)f(k[$].object),delete k[$];delete F[b.id]}}function D(){S(),a=!0,r!==s&&(r=s,l(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:D,resetDefaultState:S,dispose:L,releaseStatesOfGeometry:I,releaseStatesOfProgram:C,initAttributes:y,enableAttribute:_,disableUnusedAttributes:R}}function Ev(i,e,t){let n;function s(l){n=l}function r(l,f){i.drawArrays(n,l,f),t.update(f,n,1)}function a(l,f,h){h!==0&&(i.drawArraysInstanced(n,l,f,h),t.update(f,n,h))}function o(l,f,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,f,0,h);let p=0;for(let x=0;x<h;x++)p+=f[x];t.update(p,n,1)}function c(l,f,h,d){if(h===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let x=0;x<l.length;x++)a(l[x],f[x],d[x]);else{p.multiDrawArraysInstancedWEBGL(n,l,0,f,0,d,0,h);let x=0;for(let y=0;y<h;y++)x+=f[y]*d[y];t.update(x,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function Tv(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(C){return!(C!==xn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const D=C===Pr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==Wn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==ii&&!D)}function c(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const f=c(l);f!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",f,"instead."),l=f);const h=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),_=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),R=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),T=i.getParameter(i.MAX_VARYING_VECTORS),w=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),L=x>0,I=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:h,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:x,maxTextureSize:y,maxCubemapSize:_,maxAttributes:g,maxVertexUniforms:R,maxVaryings:T,maxFragmentUniforms:w,vertexTextures:L,maxSamples:I}}function Av(i){const e=this;let t=null,n=0,s=!1,r=!1;const a=new Bi,o=new et,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const p=h.length!==0||d||n!==0||s;return s=d,n=h.length,p},this.beginShadows=function(){r=!0,f(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=f(h,d,0)},this.setState=function(h,d,p){const x=h.clippingPlanes,y=h.clipIntersection,_=h.clipShadows,g=i.get(h);if(!s||x===null||x.length===0||r&&!_)r?f(null):l();else{const R=r?0:n,T=R*4;let w=g.clippingState||null;c.value=w,w=f(x,d,T,p);for(let L=0;L!==T;++L)w[L]=t[L];g.clippingState=w,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=R}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function f(h,d,p,x){const y=h!==null?h.length:0;let _=null;if(y!==0){if(_=c.value,x!==!0||_===null){const g=p+y*4,R=d.matrixWorldInverse;o.getNormalMatrix(R),(_===null||_.length<g)&&(_=new Float32Array(g));for(let T=0,w=p;T!==y;++T,w+=4)a.copy(h[T]).applyMatrix4(R,o),a.normal.toArray(_,w),_[w+3]=a.constant}c.value=_,c.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,_}}function Rv(i){let e=new WeakMap;function t(a,o){return o===Ml?a.mapping=Bs:o===Sl&&(a.mapping=zs),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Ml||o===Sl)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new Cg(c.height);return l.fromEquirectangularTexture(i,a),e.set(a,l),a.addEventListener("dispose",s),t(l.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}const Cs=4,Cu=[.125,.215,.35,.446,.526,.582],Vi=20,Wo=new Pc,Pu=new ft;let qo=null,jo=0,Xo=0,$o=!1;const zi=(1+Math.sqrt(5))/2,xs=1/zi,Lu=[new X(-zi,xs,0),new X(zi,xs,0),new X(-xs,0,zi),new X(xs,0,zi),new X(0,zi,-xs),new X(0,zi,xs),new X(-1,1,-1),new X(1,1,-1),new X(-1,1,1),new X(1,1,1)];class Iu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){qo=this._renderer.getRenderTarget(),jo=this._renderer.getActiveCubeFace(),Xo=this._renderer.getActiveMipmapLevel(),$o=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ou(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Nu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(qo,jo,Xo),this._renderer.xr.enabled=$o,e.scissorTest=!1,pa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Bs||e.mapping===zs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),qo=this._renderer.getRenderTarget(),jo=this._renderer.getActiveCubeFace(),Xo=this._renderer.getActiveMipmapLevel(),$o=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:ln,minFilter:ln,generateMipmaps:!1,type:Pr,format:xn,colorSpace:Gs,depthBuffer:!1},s=Du(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Du(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Cv(r)),this._blurMaterial=Pv(r,e,t)}return s}_compileMaterial(e){const t=new nn(this._lodPlanes[0],e);this._renderer.compile(t,Wo)}_sceneToCubeUV(e,t,n,s){const o=new In(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,d=f.toneMapping;f.getClearColor(Pu),f.toneMapping=ai,f.autoClear=!1;const p=new Er({name:"PMREM.Background",side:cn,depthWrite:!1,depthTest:!1}),x=new nn(new Nr,p);let y=!1;const _=e.background;_?_.isColor&&(p.color.copy(_),e.background=null,y=!0):(p.color.copy(Pu),y=!0);for(let g=0;g<6;g++){const R=g%3;R===0?(o.up.set(0,c[g],0),o.lookAt(l[g],0,0)):R===1?(o.up.set(0,0,c[g]),o.lookAt(0,l[g],0)):(o.up.set(0,c[g],0),o.lookAt(0,0,l[g]));const T=this._cubeSize;pa(s,R*T,g>2?T:0,T,T),f.setRenderTarget(s),y&&f.render(x,o),f.render(e,o)}x.geometry.dispose(),x.material.dispose(),f.toneMapping=d,f.autoClear=h,e.background=_}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===Bs||e.mapping===zs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ou()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Nu());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new nn(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const c=this._cubeSize;pa(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,Wo)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Lu[(s-r-1)%Lu.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,h=new nn(this._lodPlanes[s],l),d=l.uniforms,p=this._sizeLods[n]-1,x=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Vi-1),y=r/x,_=isFinite(r)?1+Math.floor(f*y):Vi;_>Vi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${Vi}`);const g=[];let R=0;for(let C=0;C<Vi;++C){const D=C/y,S=Math.exp(-D*D/2);g.push(S),C===0?R+=S:C<_&&(R+=2*S)}for(let C=0;C<g.length;C++)g[C]=g[C]/R;d.envMap.value=e.texture,d.samples.value=_,d.weights.value=g,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:T}=this;d.dTheta.value=x,d.mipInt.value=T-n;const w=this._sizeLods[s],L=3*w*(s>T-Cs?s-T+Cs:0),I=4*(this._cubeSize-w);pa(t,L,I,3*w,2*w),c.setRenderTarget(t),c.render(h,Wo)}}function Cv(i){const e=[],t=[],n=[];let s=i;const r=i-Cs+1+Cu.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);t.push(o);let c=1/o;a>i-Cs?c=Cu[a-i+Cs-1]:a===0&&(c=0),n.push(c);const l=1/(o-2),f=-l,h=1+l,d=[f,f,h,f,h,h,f,f,h,h,f,h],p=6,x=6,y=3,_=2,g=1,R=new Float32Array(y*x*p),T=new Float32Array(_*x*p),w=new Float32Array(g*x*p);for(let I=0;I<p;I++){const C=I%3*2/3-1,D=I>2?0:-1,S=[C,D,0,C+2/3,D,0,C+2/3,D+1,0,C,D,0,C+2/3,D+1,0,C,D+1,0];R.set(S,y*x*I),T.set(d,_*x*I);const b=[I,I,I,I,I,I];w.set(b,g*x*I)}const L=new hi;L.setAttribute("position",new Nn(R,y)),L.setAttribute("uv",new Nn(T,_)),L.setAttribute("faceIndex",new Nn(w,g)),e.push(L),s>Cs&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Du(i,e,t){const n=new Ai(i,e,t);return n.texture.mapping=ro,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function pa(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Pv(i,e,t){const n=new Float32Array(Vi),s=new X(0,1,0);return new On({name:"SphericalGaussianBlur",defines:{n:Vi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Lc(),fragmentShader:`

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
		`,blending:Si,depthTest:!1,depthWrite:!1})}function Nu(){return new On({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Lc(),fragmentShader:`

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
		`,blending:Si,depthTest:!1,depthWrite:!1})}function Ou(){return new On({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Lc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Si,depthTest:!1,depthWrite:!1})}function Lc(){return`

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
	`}function Lv(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===Ml||c===Sl,f=c===Bs||c===zs;if(l||f){let h=e.get(o);const d=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new Iu(i)),h=l?t.fromEquirectangular(o,h):t.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{const p=o.image;return l&&p&&p.height>0||f&&p&&s(p)?(t===null&&(t=new Iu(i)),h=l?t.fromEquirectangular(o):t.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",r),h.texture):null}}}return o}function s(o){let c=0;const l=6;for(let f=0;f<l;f++)o[f]!==void 0&&c++;return c===l}function r(o){const c=o.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Iv(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&Ms("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Dv(i,e,t,n){const s={},r=new WeakMap;function a(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const x in d.attributes)e.remove(d.attributes[x]);d.removeEventListener("dispose",a),delete s[d.id];const p=r.get(d);p&&(e.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(h,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,t.memory.geometries++),d}function c(h){const d=h.attributes;for(const p in d)e.update(d[p],i.ARRAY_BUFFER)}function l(h){const d=[],p=h.index,x=h.attributes.position;let y=0;if(p!==null){const R=p.array;y=p.version;for(let T=0,w=R.length;T<w;T+=3){const L=R[T+0],I=R[T+1],C=R[T+2];d.push(L,I,I,C,C,L)}}else if(x!==void 0){const R=x.array;y=x.version;for(let T=0,w=R.length/3-1;T<w;T+=3){const L=T+0,I=T+1,C=T+2;d.push(L,I,I,C,C,L)}}else return;const _=new(zh(d)?jh:qh)(d,1);_.version=y;const g=r.get(h);g&&e.remove(g),r.set(h,_)}function f(h){const d=r.get(h);if(d){const p=h.index;p!==null&&d.version<p.version&&l(h)}else l(h);return r.get(h)}return{get:o,update:c,getWireframeAttribute:f}}function Nv(i,e,t){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function c(d,p){i.drawElements(n,p,r,d*a),t.update(p,n,1)}function l(d,p,x){x!==0&&(i.drawElementsInstanced(n,p,r,d*a,x),t.update(p,n,x))}function f(d,p,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,d,0,x);let _=0;for(let g=0;g<x;g++)_+=p[g];t.update(_,n,1)}function h(d,p,x,y){if(x===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let g=0;g<d.length;g++)l(d[g]/a,p[g],y[g]);else{_.multiDrawElementsInstancedWEBGL(n,p,0,r,d,0,y,0,x);let g=0;for(let R=0;R<x;R++)g+=p[R]*y[R];t.update(g,n,1)}}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=f,this.renderMultiDrawInstances=h}function Ov(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Uv(i,e,t){const n=new WeakMap,s=new Pt;function r(a,o,c){const l=a.morphTargetInfluences,f=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=f!==void 0?f.length:0;let d=n.get(o);if(d===void 0||d.count!==h){let S=function(){C.dispose(),n.delete(o),o.removeEventListener("dispose",S)};d!==void 0&&d.texture.dispose();const p=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,y=o.morphAttributes.color!==void 0,_=o.morphAttributes.position||[],g=o.morphAttributes.normal||[],R=o.morphAttributes.color||[];let T=0;p===!0&&(T=1),x===!0&&(T=2),y===!0&&(T=3);let w=o.attributes.position.count*T,L=1;w>e.maxTextureSize&&(L=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const I=new Float32Array(w*L*4*h),C=new Vh(I,w,L,h);C.type=ii,C.needsUpdate=!0;const D=T*4;for(let b=0;b<h;b++){const N=_[b],F=g[b],k=R[b],$=w*L*4*b;for(let ie=0;ie<N.count;ie++){const J=ie*D;p===!0&&(s.fromBufferAttribute(N,ie),I[$+J+0]=s.x,I[$+J+1]=s.y,I[$+J+2]=s.z,I[$+J+3]=0),x===!0&&(s.fromBufferAttribute(F,ie),I[$+J+4]=s.x,I[$+J+5]=s.y,I[$+J+6]=s.z,I[$+J+7]=0),y===!0&&(s.fromBufferAttribute(k,ie),I[$+J+8]=s.x,I[$+J+9]=s.y,I[$+J+10]=s.z,I[$+J+11]=k.itemSize===4?s.w:1)}}d={count:h,texture:C,size:new yt(w,L)},n.set(o,d),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let p=0;for(let y=0;y<l.length;y++)p+=l[y];const x=o.morphTargetsRelative?1:1-p;c.getUniforms().setValue(i,"morphTargetBaseInfluence",x),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function kv(i,e,t,n){let s=new WeakMap;function r(c){const l=n.render.frame,f=c.geometry,h=e.get(c,f);if(s.get(h)!==l&&(e.update(h),s.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return h}function a(){s=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:a}}const td=new jt,Uu=new Zh(1,1),nd=new Vh,id=new hg,sd=new Kh,ku=[],Fu=[],Bu=new Float32Array(16),zu=new Float32Array(9),Hu=new Float32Array(4);function Zs(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=ku[s];if(r===void 0&&(r=new Float32Array(s),ku[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function Ot(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Ut(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function oo(i,e){let t=Fu[e];t===void 0&&(t=new Int32Array(e),Fu[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Fv(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Bv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ot(t,e))return;i.uniform2fv(this.addr,e),Ut(t,e)}}function zv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ot(t,e))return;i.uniform3fv(this.addr,e),Ut(t,e)}}function Hv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ot(t,e))return;i.uniform4fv(this.addr,e),Ut(t,e)}}function Vv(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ot(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Ut(t,e)}else{if(Ot(t,n))return;Hu.set(n),i.uniformMatrix2fv(this.addr,!1,Hu),Ut(t,n)}}function Gv(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ot(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Ut(t,e)}else{if(Ot(t,n))return;zu.set(n),i.uniformMatrix3fv(this.addr,!1,zu),Ut(t,n)}}function Wv(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ot(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Ut(t,e)}else{if(Ot(t,n))return;Bu.set(n),i.uniformMatrix4fv(this.addr,!1,Bu),Ut(t,n)}}function qv(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function jv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ot(t,e))return;i.uniform2iv(this.addr,e),Ut(t,e)}}function Xv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ot(t,e))return;i.uniform3iv(this.addr,e),Ut(t,e)}}function $v(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ot(t,e))return;i.uniform4iv(this.addr,e),Ut(t,e)}}function Kv(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Yv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ot(t,e))return;i.uniform2uiv(this.addr,e),Ut(t,e)}}function Jv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ot(t,e))return;i.uniform3uiv(this.addr,e),Ut(t,e)}}function Zv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ot(t,e))return;i.uniform4uiv(this.addr,e),Ut(t,e)}}function Qv(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Uu.compareFunction=Bh,r=Uu):r=td,t.setTexture2D(e||r,s)}function ey(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||id,s)}function ty(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||sd,s)}function ny(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||nd,s)}function iy(i){switch(i){case 5126:return Fv;case 35664:return Bv;case 35665:return zv;case 35666:return Hv;case 35674:return Vv;case 35675:return Gv;case 35676:return Wv;case 5124:case 35670:return qv;case 35667:case 35671:return jv;case 35668:case 35672:return Xv;case 35669:case 35673:return $v;case 5125:return Kv;case 36294:return Yv;case 36295:return Jv;case 36296:return Zv;case 35678:case 36198:case 36298:case 36306:case 35682:return Qv;case 35679:case 36299:case 36307:return ey;case 35680:case 36300:case 36308:case 36293:return ty;case 36289:case 36303:case 36311:case 36292:return ny}}function sy(i,e){i.uniform1fv(this.addr,e)}function ry(i,e){const t=Zs(e,this.size,2);i.uniform2fv(this.addr,t)}function ay(i,e){const t=Zs(e,this.size,3);i.uniform3fv(this.addr,t)}function oy(i,e){const t=Zs(e,this.size,4);i.uniform4fv(this.addr,t)}function ly(i,e){const t=Zs(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function cy(i,e){const t=Zs(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function uy(i,e){const t=Zs(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function fy(i,e){i.uniform1iv(this.addr,e)}function hy(i,e){i.uniform2iv(this.addr,e)}function dy(i,e){i.uniform3iv(this.addr,e)}function py(i,e){i.uniform4iv(this.addr,e)}function my(i,e){i.uniform1uiv(this.addr,e)}function gy(i,e){i.uniform2uiv(this.addr,e)}function _y(i,e){i.uniform3uiv(this.addr,e)}function vy(i,e){i.uniform4uiv(this.addr,e)}function yy(i,e,t){const n=this.cache,s=e.length,r=oo(t,s);Ot(n,r)||(i.uniform1iv(this.addr,r),Ut(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||td,r[a])}function xy(i,e,t){const n=this.cache,s=e.length,r=oo(t,s);Ot(n,r)||(i.uniform1iv(this.addr,r),Ut(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||id,r[a])}function by(i,e,t){const n=this.cache,s=e.length,r=oo(t,s);Ot(n,r)||(i.uniform1iv(this.addr,r),Ut(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||sd,r[a])}function wy(i,e,t){const n=this.cache,s=e.length,r=oo(t,s);Ot(n,r)||(i.uniform1iv(this.addr,r),Ut(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||nd,r[a])}function My(i){switch(i){case 5126:return sy;case 35664:return ry;case 35665:return ay;case 35666:return oy;case 35674:return ly;case 35675:return cy;case 35676:return uy;case 5124:case 35670:return fy;case 35667:case 35671:return hy;case 35668:case 35672:return dy;case 35669:case 35673:return py;case 5125:return my;case 36294:return gy;case 36295:return _y;case 36296:return vy;case 35678:case 36198:case 36298:case 36306:case 35682:return yy;case 35679:case 36299:case 36307:return xy;case 35680:case 36300:case 36308:case 36293:return by;case 36289:case 36303:case 36311:case 36292:return wy}}class Sy{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=iy(t.type)}}class Ey{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=My(t.type)}}class Ty{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],n)}}}const Ko=/(\w+)(\])?(\[|\.)?/g;function Vu(i,e){i.seq.push(e),i.map[e.id]=e}function Ay(i,e,t){const n=i.name,s=n.length;for(Ko.lastIndex=0;;){const r=Ko.exec(n),a=Ko.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){Vu(t,l===void 0?new Sy(o,i,e):new Ey(o,i,e));break}else{let h=t.map[o];h===void 0&&(h=new Ty(o),Vu(t,h)),t=h}}}class Ia{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);Ay(r,a,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&n.push(a)}return n}}function Gu(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Ry=37297;let Cy=0;function Py(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const Wu=new et;function Ly(i){ut._getMatrix(Wu,ut.workingColorSpace,i);const e=`mat3( ${Wu.elements.map(t=>t.toFixed(4))} )`;switch(ut.getTransfer(i)){case Va:return[e,"LinearTransferOETF"];case vt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function qu(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+Py(i.getShaderSource(e),a)}else return s}function Iy(i,e){const t=Ly(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Dy(i,e){let t;switch(e){case Um:t="Linear";break;case km:t="Reinhard";break;case Fm:t="Cineon";break;case Bm:t="ACESFilmic";break;case Hm:t="AgX";break;case Vm:t="Neutral";break;case zm:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ma=new X;function Ny(){ut.getLuminanceCoefficients(ma);const i=ma.x.toFixed(4),e=ma.y.toFixed(4),t=ma.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Oy(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(pr).join(`
`)}function Uy(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function ky(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function pr(i){return i!==""}function ju(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Xu(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Fy=/^[ \t]*#include +<([\w\d./]+)>/gm;function ec(i){return i.replace(Fy,zy)}const By=new Map;function zy(i,e){let t=tt[e];if(t===void 0){const n=By.get(e);if(n!==void 0)t=tt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return ec(t)}const Hy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function $u(i){return i.replace(Hy,Vy)}function Vy(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Ku(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function Gy(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Th?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===mm?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Qn&&(e="SHADOWMAP_TYPE_VSM"),e}function Wy(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Bs:case zs:e="ENVMAP_TYPE_CUBE";break;case ro:e="ENVMAP_TYPE_CUBE_UV";break}return e}function qy(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case zs:e="ENVMAP_MODE_REFRACTION";break}return e}function jy(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Ah:e="ENVMAP_BLENDING_MULTIPLY";break;case Nm:e="ENVMAP_BLENDING_MIX";break;case Om:e="ENVMAP_BLENDING_ADD";break}return e}function Xy(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function $y(i,e,t,n){const s=i.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=Gy(t),l=Wy(t),f=qy(t),h=jy(t),d=Xy(t),p=Oy(t),x=Uy(r),y=s.createProgram();let _,g,R=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(pr).join(`
`),_.length>0&&(_+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(pr).join(`
`),g.length>0&&(g+=`
`)):(_=[Ku(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(pr).join(`
`),g=[Ku(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+f:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ai?"#define TONE_MAPPING":"",t.toneMapping!==ai?tt.tonemapping_pars_fragment:"",t.toneMapping!==ai?Dy("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",tt.colorspace_pars_fragment,Iy("linearToOutputTexel",t.outputColorSpace),Ny(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(pr).join(`
`)),a=ec(a),a=ju(a,t),a=Xu(a,t),o=ec(o),o=ju(o,t),o=Xu(o,t),a=$u(a),o=$u(o),t.isRawShaderMaterial!==!0&&(R=`#version 300 es
`,_=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,g=["#define varying in",t.glslVersion===cu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===cu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const T=R+_+a,w=R+g+o,L=Gu(s,s.VERTEX_SHADER,T),I=Gu(s,s.FRAGMENT_SHADER,w);s.attachShader(y,L),s.attachShader(y,I),t.index0AttributeName!==void 0?s.bindAttribLocation(y,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function C(N){if(i.debug.checkShaderErrors){const F=s.getProgramInfoLog(y).trim(),k=s.getShaderInfoLog(L).trim(),$=s.getShaderInfoLog(I).trim();let ie=!0,J=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(ie=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,y,L,I);else{const de=qu(s,L,"vertex"),K=qu(s,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+F+`
`+de+`
`+K)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(k===""||$==="")&&(J=!1);J&&(N.diagnostics={runnable:ie,programLog:F,vertexShader:{log:k,prefix:_},fragmentShader:{log:$,prefix:g}})}s.deleteShader(L),s.deleteShader(I),D=new Ia(s,y),S=ky(s,y)}let D;this.getUniforms=function(){return D===void 0&&C(this),D};let S;this.getAttributes=function(){return S===void 0&&C(this),S};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=s.getProgramParameter(y,Ry)),b},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Cy++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=L,this.fragmentShader=I,this}let Ky=0;class Yy{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Jy(e),t.set(e,n)),n}}class Jy{constructor(e){this.id=Ky++,this.code=e,this.usedTimes=0}}function Zy(i,e,t,n,s,r,a){const o=new Gh,c=new Yy,l=new Set,f=[],h=s.logarithmicDepthBuffer,d=s.vertexTextures;let p=s.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(S){return l.add(S),S===0?"uv":`uv${S}`}function _(S,b,N,F,k){const $=F.fog,ie=k.geometry,J=S.isMeshStandardMaterial?F.environment:null,de=(S.isMeshStandardMaterial?t:e).get(S.envMap||J),K=de&&de.mapping===ro?de.image.height:null,ee=x[S.type];S.precision!==null&&(p=s.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));const ae=ie.morphAttributes.position||ie.morphAttributes.normal||ie.morphAttributes.color,me=ae!==void 0?ae.length:0;let ve=0;ie.morphAttributes.position!==void 0&&(ve=1),ie.morphAttributes.normal!==void 0&&(ve=2),ie.morphAttributes.color!==void 0&&(ve=3);let Re,Q,ue,Me;if(ee){const Je=zn[ee];Re=Je.vertexShader,Q=Je.fragmentShader}else Re=S.vertexShader,Q=S.fragmentShader,c.update(S),ue=c.getVertexShaderID(S),Me=c.getFragmentShaderID(S);const ge=i.getRenderTarget(),te=i.state.buffers.depth.getReversed(),Ce=k.isInstancedMesh===!0,ke=k.isBatchedMesh===!0,fe=!!S.map,Te=!!S.matcap,ht=!!de,U=!!S.aoMap,pt=!!S.lightMap,$e=!!S.bumpMap,ze=!!S.normalMap,Be=!!S.displacementMap,gt=!!S.emissiveMap,Oe=!!S.metalnessMap,P=!!S.roughnessMap,M=S.anisotropy>0,G=S.clearcoat>0,oe=S.dispersion>0,le=S.iridescence>0,ne=S.sheen>0,Ue=S.transmission>0,_e=M&&!!S.anisotropyMap,Le=G&&!!S.clearcoatMap,rt=G&&!!S.clearcoatNormalMap,pe=G&&!!S.clearcoatRoughnessMap,De=le&&!!S.iridescenceMap,Ge=le&&!!S.iridescenceThicknessMap,qe=ne&&!!S.sheenColorMap,Ie=ne&&!!S.sheenRoughnessMap,Se=!!S.specularMap,Qe=!!S.specularColorMap,dt=!!S.specularIntensityMap,B=Ue&&!!S.transmissionMap,ye=Ue&&!!S.thicknessMap,Z=!!S.gradientMap,se=!!S.alphaMap,Ee=S.alphaTest>0,W=!!S.alphaHash,Ke=!!S.extensions;let Mt=ai;S.toneMapped&&(ge===null||ge.isXRRenderTarget===!0)&&(Mt=i.toneMapping);const kt={shaderID:ee,shaderType:S.type,shaderName:S.name,vertexShader:Re,fragmentShader:Q,defines:S.defines,customVertexShaderID:ue,customFragmentShaderID:Me,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:ke,batchingColor:ke&&k._colorsTexture!==null,instancing:Ce,instancingColor:Ce&&k.instanceColor!==null,instancingMorph:Ce&&k.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ge===null?i.outputColorSpace:ge.isXRRenderTarget===!0?ge.texture.colorSpace:Gs,alphaToCoverage:!!S.alphaToCoverage,map:fe,matcap:Te,envMap:ht,envMapMode:ht&&de.mapping,envMapCubeUVHeight:K,aoMap:U,lightMap:pt,bumpMap:$e,normalMap:ze,displacementMap:d&&Be,emissiveMap:gt,normalMapObjectSpace:ze&&S.normalMapType===Xm,normalMapTangentSpace:ze&&S.normalMapType===jm,metalnessMap:Oe,roughnessMap:P,anisotropy:M,anisotropyMap:_e,clearcoat:G,clearcoatMap:Le,clearcoatNormalMap:rt,clearcoatRoughnessMap:pe,dispersion:oe,iridescence:le,iridescenceMap:De,iridescenceThicknessMap:Ge,sheen:ne,sheenColorMap:qe,sheenRoughnessMap:Ie,specularMap:Se,specularColorMap:Qe,specularIntensityMap:dt,transmission:Ue,transmissionMap:B,thicknessMap:ye,gradientMap:Z,opaque:S.transparent===!1&&S.blending===wn&&S.alphaToCoverage===!1,alphaMap:se,alphaTest:Ee,alphaHash:W,combine:S.combine,mapUv:fe&&y(S.map.channel),aoMapUv:U&&y(S.aoMap.channel),lightMapUv:pt&&y(S.lightMap.channel),bumpMapUv:$e&&y(S.bumpMap.channel),normalMapUv:ze&&y(S.normalMap.channel),displacementMapUv:Be&&y(S.displacementMap.channel),emissiveMapUv:gt&&y(S.emissiveMap.channel),metalnessMapUv:Oe&&y(S.metalnessMap.channel),roughnessMapUv:P&&y(S.roughnessMap.channel),anisotropyMapUv:_e&&y(S.anisotropyMap.channel),clearcoatMapUv:Le&&y(S.clearcoatMap.channel),clearcoatNormalMapUv:rt&&y(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:pe&&y(S.clearcoatRoughnessMap.channel),iridescenceMapUv:De&&y(S.iridescenceMap.channel),iridescenceThicknessMapUv:Ge&&y(S.iridescenceThicknessMap.channel),sheenColorMapUv:qe&&y(S.sheenColorMap.channel),sheenRoughnessMapUv:Ie&&y(S.sheenRoughnessMap.channel),specularMapUv:Se&&y(S.specularMap.channel),specularColorMapUv:Qe&&y(S.specularColorMap.channel),specularIntensityMapUv:dt&&y(S.specularIntensityMap.channel),transmissionMapUv:B&&y(S.transmissionMap.channel),thicknessMapUv:ye&&y(S.thicknessMap.channel),alphaMapUv:se&&y(S.alphaMap.channel),vertexTangents:!!ie.attributes.tangent&&(ze||M),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!ie.attributes.color&&ie.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!ie.attributes.uv&&(fe||se),fog:!!$,useFog:S.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:te,skinning:k.isSkinnedMesh===!0,morphTargets:ie.morphAttributes.position!==void 0,morphNormals:ie.morphAttributes.normal!==void 0,morphColors:ie.morphAttributes.color!==void 0,morphTargetsCount:me,morphTextureStride:ve,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&N.length>0,shadowMapType:i.shadowMap.type,toneMapping:Mt,decodeVideoTexture:fe&&S.map.isVideoTexture===!0&&ut.getTransfer(S.map.colorSpace)===vt,decodeVideoTextureEmissive:gt&&S.emissiveMap.isVideoTexture===!0&&ut.getTransfer(S.emissiveMap.colorSpace)===vt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===ei,flipSided:S.side===cn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Ke&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ke&&S.extensions.multiDraw===!0||ke)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return kt.vertexUv1s=l.has(1),kt.vertexUv2s=l.has(2),kt.vertexUv3s=l.has(3),l.clear(),kt}function g(S){const b=[];if(S.shaderID?b.push(S.shaderID):(b.push(S.customVertexShaderID),b.push(S.customFragmentShaderID)),S.defines!==void 0)for(const N in S.defines)b.push(N),b.push(S.defines[N]);return S.isRawShaderMaterial===!1&&(R(b,S),T(b,S),b.push(i.outputColorSpace)),b.push(S.customProgramCacheKey),b.join()}function R(S,b){S.push(b.precision),S.push(b.outputColorSpace),S.push(b.envMapMode),S.push(b.envMapCubeUVHeight),S.push(b.mapUv),S.push(b.alphaMapUv),S.push(b.lightMapUv),S.push(b.aoMapUv),S.push(b.bumpMapUv),S.push(b.normalMapUv),S.push(b.displacementMapUv),S.push(b.emissiveMapUv),S.push(b.metalnessMapUv),S.push(b.roughnessMapUv),S.push(b.anisotropyMapUv),S.push(b.clearcoatMapUv),S.push(b.clearcoatNormalMapUv),S.push(b.clearcoatRoughnessMapUv),S.push(b.iridescenceMapUv),S.push(b.iridescenceThicknessMapUv),S.push(b.sheenColorMapUv),S.push(b.sheenRoughnessMapUv),S.push(b.specularMapUv),S.push(b.specularColorMapUv),S.push(b.specularIntensityMapUv),S.push(b.transmissionMapUv),S.push(b.thicknessMapUv),S.push(b.combine),S.push(b.fogExp2),S.push(b.sizeAttenuation),S.push(b.morphTargetsCount),S.push(b.morphAttributeCount),S.push(b.numDirLights),S.push(b.numPointLights),S.push(b.numSpotLights),S.push(b.numSpotLightMaps),S.push(b.numHemiLights),S.push(b.numRectAreaLights),S.push(b.numDirLightShadows),S.push(b.numPointLightShadows),S.push(b.numSpotLightShadows),S.push(b.numSpotLightShadowsWithMaps),S.push(b.numLightProbes),S.push(b.shadowMapType),S.push(b.toneMapping),S.push(b.numClippingPlanes),S.push(b.numClipIntersection),S.push(b.depthPacking)}function T(S,b){o.disableAll(),b.supportsVertexTextures&&o.enable(0),b.instancing&&o.enable(1),b.instancingColor&&o.enable(2),b.instancingMorph&&o.enable(3),b.matcap&&o.enable(4),b.envMap&&o.enable(5),b.normalMapObjectSpace&&o.enable(6),b.normalMapTangentSpace&&o.enable(7),b.clearcoat&&o.enable(8),b.iridescence&&o.enable(9),b.alphaTest&&o.enable(10),b.vertexColors&&o.enable(11),b.vertexAlphas&&o.enable(12),b.vertexUv1s&&o.enable(13),b.vertexUv2s&&o.enable(14),b.vertexUv3s&&o.enable(15),b.vertexTangents&&o.enable(16),b.anisotropy&&o.enable(17),b.alphaHash&&o.enable(18),b.batching&&o.enable(19),b.dispersion&&o.enable(20),b.batchingColor&&o.enable(21),S.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reverseDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),S.push(o.mask)}function w(S){const b=x[S.type];let N;if(b){const F=zn[b];N=Eg.clone(F.uniforms)}else N=S.uniforms;return N}function L(S,b){let N;for(let F=0,k=f.length;F<k;F++){const $=f[F];if($.cacheKey===b){N=$,++N.usedTimes;break}}return N===void 0&&(N=new $y(i,b,S,r),f.push(N)),N}function I(S){if(--S.usedTimes===0){const b=f.indexOf(S);f[b]=f[f.length-1],f.pop(),S.destroy()}}function C(S){c.remove(S)}function D(){c.dispose()}return{getParameters:_,getProgramCacheKey:g,getUniforms:w,acquireProgram:L,releaseProgram:I,releaseShaderCache:C,programs:f,dispose:D}}function Qy(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function ex(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Yu(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Ju(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(h,d,p,x,y,_){let g=i[e];return g===void 0?(g={id:h.id,object:h,geometry:d,material:p,groupOrder:x,renderOrder:h.renderOrder,z:y,group:_},i[e]=g):(g.id=h.id,g.object=h,g.geometry=d,g.material=p,g.groupOrder=x,g.renderOrder=h.renderOrder,g.z=y,g.group=_),e++,g}function o(h,d,p,x,y,_){const g=a(h,d,p,x,y,_);p.transmission>0?n.push(g):p.transparent===!0?s.push(g):t.push(g)}function c(h,d,p,x,y,_){const g=a(h,d,p,x,y,_);p.transmission>0?n.unshift(g):p.transparent===!0?s.unshift(g):t.unshift(g)}function l(h,d){t.length>1&&t.sort(h||ex),n.length>1&&n.sort(d||Yu),s.length>1&&s.sort(d||Yu)}function f(){for(let h=e,d=i.length;h<d;h++){const p=i[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:c,finish:f,sort:l}}function tx(){let i=new WeakMap;function e(n,s){const r=i.get(n);let a;return r===void 0?(a=new Ju,i.set(n,[a])):s>=r.length?(a=new Ju,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function nx(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new X,color:new ft};break;case"SpotLight":t={position:new X,direction:new X,color:new ft,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new X,color:new ft,distance:0,decay:0};break;case"HemisphereLight":t={direction:new X,skyColor:new ft,groundColor:new ft};break;case"RectAreaLight":t={color:new ft,position:new X,halfWidth:new X,halfHeight:new X};break}return i[e.id]=t,t}}}function ix(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let sx=0;function rx(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function ax(i){const e=new nx,t=ix(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new X);const s=new X,r=new Nt,a=new Nt;function o(l){let f=0,h=0,d=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let p=0,x=0,y=0,_=0,g=0,R=0,T=0,w=0,L=0,I=0,C=0;l.sort(rx);for(let S=0,b=l.length;S<b;S++){const N=l[S],F=N.color,k=N.intensity,$=N.distance,ie=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)f+=F.r*k,h+=F.g*k,d+=F.b*k;else if(N.isLightProbe){for(let J=0;J<9;J++)n.probe[J].addScaledVector(N.sh.coefficients[J],k);C++}else if(N.isDirectionalLight){const J=e.get(N);if(J.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const de=N.shadow,K=t.get(N);K.shadowIntensity=de.intensity,K.shadowBias=de.bias,K.shadowNormalBias=de.normalBias,K.shadowRadius=de.radius,K.shadowMapSize=de.mapSize,n.directionalShadow[p]=K,n.directionalShadowMap[p]=ie,n.directionalShadowMatrix[p]=N.shadow.matrix,R++}n.directional[p]=J,p++}else if(N.isSpotLight){const J=e.get(N);J.position.setFromMatrixPosition(N.matrixWorld),J.color.copy(F).multiplyScalar(k),J.distance=$,J.coneCos=Math.cos(N.angle),J.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),J.decay=N.decay,n.spot[y]=J;const de=N.shadow;if(N.map&&(n.spotLightMap[L]=N.map,L++,de.updateMatrices(N),N.castShadow&&I++),n.spotLightMatrix[y]=de.matrix,N.castShadow){const K=t.get(N);K.shadowIntensity=de.intensity,K.shadowBias=de.bias,K.shadowNormalBias=de.normalBias,K.shadowRadius=de.radius,K.shadowMapSize=de.mapSize,n.spotShadow[y]=K,n.spotShadowMap[y]=ie,w++}y++}else if(N.isRectAreaLight){const J=e.get(N);J.color.copy(F).multiplyScalar(k),J.halfWidth.set(N.width*.5,0,0),J.halfHeight.set(0,N.height*.5,0),n.rectArea[_]=J,_++}else if(N.isPointLight){const J=e.get(N);if(J.color.copy(N.color).multiplyScalar(N.intensity),J.distance=N.distance,J.decay=N.decay,N.castShadow){const de=N.shadow,K=t.get(N);K.shadowIntensity=de.intensity,K.shadowBias=de.bias,K.shadowNormalBias=de.normalBias,K.shadowRadius=de.radius,K.shadowMapSize=de.mapSize,K.shadowCameraNear=de.camera.near,K.shadowCameraFar=de.camera.far,n.pointShadow[x]=K,n.pointShadowMap[x]=ie,n.pointShadowMatrix[x]=N.shadow.matrix,T++}n.point[x]=J,x++}else if(N.isHemisphereLight){const J=e.get(N);J.skyColor.copy(N.color).multiplyScalar(k),J.groundColor.copy(N.groundColor).multiplyScalar(k),n.hemi[g]=J,g++}}_>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=we.LTC_FLOAT_1,n.rectAreaLTC2=we.LTC_FLOAT_2):(n.rectAreaLTC1=we.LTC_HALF_1,n.rectAreaLTC2=we.LTC_HALF_2)),n.ambient[0]=f,n.ambient[1]=h,n.ambient[2]=d;const D=n.hash;(D.directionalLength!==p||D.pointLength!==x||D.spotLength!==y||D.rectAreaLength!==_||D.hemiLength!==g||D.numDirectionalShadows!==R||D.numPointShadows!==T||D.numSpotShadows!==w||D.numSpotMaps!==L||D.numLightProbes!==C)&&(n.directional.length=p,n.spot.length=y,n.rectArea.length=_,n.point.length=x,n.hemi.length=g,n.directionalShadow.length=R,n.directionalShadowMap.length=R,n.pointShadow.length=T,n.pointShadowMap.length=T,n.spotShadow.length=w,n.spotShadowMap.length=w,n.directionalShadowMatrix.length=R,n.pointShadowMatrix.length=T,n.spotLightMatrix.length=w+L-I,n.spotLightMap.length=L,n.numSpotLightShadowsWithMaps=I,n.numLightProbes=C,D.directionalLength=p,D.pointLength=x,D.spotLength=y,D.rectAreaLength=_,D.hemiLength=g,D.numDirectionalShadows=R,D.numPointShadows=T,D.numSpotShadows=w,D.numSpotMaps=L,D.numLightProbes=C,n.version=sx++)}function c(l,f){let h=0,d=0,p=0,x=0,y=0;const _=f.matrixWorldInverse;for(let g=0,R=l.length;g<R;g++){const T=l[g];if(T.isDirectionalLight){const w=n.directional[h];w.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(_),h++}else if(T.isSpotLight){const w=n.spot[p];w.position.setFromMatrixPosition(T.matrixWorld),w.position.applyMatrix4(_),w.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(_),p++}else if(T.isRectAreaLight){const w=n.rectArea[x];w.position.setFromMatrixPosition(T.matrixWorld),w.position.applyMatrix4(_),a.identity(),r.copy(T.matrixWorld),r.premultiply(_),a.extractRotation(r),w.halfWidth.set(T.width*.5,0,0),w.halfHeight.set(0,T.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),x++}else if(T.isPointLight){const w=n.point[d];w.position.setFromMatrixPosition(T.matrixWorld),w.position.applyMatrix4(_),d++}else if(T.isHemisphereLight){const w=n.hemi[y];w.direction.setFromMatrixPosition(T.matrixWorld),w.direction.transformDirection(_),y++}}}return{setup:o,setupView:c,state:n}}function Zu(i){const e=new ax(i),t=[],n=[];function s(f){l.camera=f,t.length=0,n.length=0}function r(f){t.push(f)}function a(f){n.push(f)}function o(){e.setup(t)}function c(f){e.setupView(t,f)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function ox(i){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new Zu(i),e.set(s,[o])):r>=a.length?(o=new Zu(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const lx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,cx=`uniform sampler2D shadow_pass;
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
}`;function ux(i,e,t){let n=new Jh;const s=new yt,r=new yt,a=new Pt,o=new Ng({depthPacking:qm}),c=new Og,l={},f=t.maxTextureSize,h={[Ti]:cn,[cn]:Ti,[ei]:ei},d=new On({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new yt},radius:{value:4}},vertexShader:lx,fragmentShader:cx}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const x=new hi;x.setAttribute("position",new Nn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new nn(x,d),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Th;let g=this.type;this.render=function(I,C,D){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||I.length===0)return;const S=i.getRenderTarget(),b=i.getActiveCubeFace(),N=i.getActiveMipmapLevel(),F=i.state;F.setBlending(Si),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const k=g!==Qn&&this.type===Qn,$=g===Qn&&this.type!==Qn;for(let ie=0,J=I.length;ie<J;ie++){const de=I[ie],K=de.shadow;if(K===void 0){console.warn("THREE.WebGLShadowMap:",de,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;s.copy(K.mapSize);const ee=K.getFrameExtents();if(s.multiply(ee),r.copy(K.mapSize),(s.x>f||s.y>f)&&(s.x>f&&(r.x=Math.floor(f/ee.x),s.x=r.x*ee.x,K.mapSize.x=r.x),s.y>f&&(r.y=Math.floor(f/ee.y),s.y=r.y*ee.y,K.mapSize.y=r.y)),K.map===null||k===!0||$===!0){const me=this.type!==Qn?{minFilter:Gt,magFilter:Gt}:{};K.map!==null&&K.map.dispose(),K.map=new Ai(s.x,s.y,me),K.map.texture.name=de.name+".shadowMap",K.camera.updateProjectionMatrix()}i.setRenderTarget(K.map),i.clear();const ae=K.getViewportCount();for(let me=0;me<ae;me++){const ve=K.getViewport(me);a.set(r.x*ve.x,r.y*ve.y,r.x*ve.z,r.y*ve.w),F.viewport(a),K.updateMatrices(de,me),n=K.getFrustum(),w(C,D,K.camera,de,this.type)}K.isPointLightShadow!==!0&&this.type===Qn&&R(K,D),K.needsUpdate=!1}g=this.type,_.needsUpdate=!1,i.setRenderTarget(S,b,N)};function R(I,C){const D=e.update(y);d.defines.VSM_SAMPLES!==I.blurSamples&&(d.defines.VSM_SAMPLES=I.blurSamples,p.defines.VSM_SAMPLES=I.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new Ai(s.x,s.y)),d.uniforms.shadow_pass.value=I.map.texture,d.uniforms.resolution.value=I.mapSize,d.uniforms.radius.value=I.radius,i.setRenderTarget(I.mapPass),i.clear(),i.renderBufferDirect(C,null,D,d,y,null),p.uniforms.shadow_pass.value=I.mapPass.texture,p.uniforms.resolution.value=I.mapSize,p.uniforms.radius.value=I.radius,i.setRenderTarget(I.map),i.clear(),i.renderBufferDirect(C,null,D,p,y,null)}function T(I,C,D,S){let b=null;const N=D.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(N!==void 0)b=N;else if(b=D.isPointLight===!0?c:o,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const F=b.uuid,k=C.uuid;let $=l[F];$===void 0&&($={},l[F]=$);let ie=$[k];ie===void 0&&(ie=b.clone(),$[k]=ie,C.addEventListener("dispose",L)),b=ie}if(b.visible=C.visible,b.wireframe=C.wireframe,S===Qn?b.side=C.shadowSide!==null?C.shadowSide:C.side:b.side=C.shadowSide!==null?C.shadowSide:h[C.side],b.alphaMap=C.alphaMap,b.alphaTest=C.alphaTest,b.map=C.map,b.clipShadows=C.clipShadows,b.clippingPlanes=C.clippingPlanes,b.clipIntersection=C.clipIntersection,b.displacementMap=C.displacementMap,b.displacementScale=C.displacementScale,b.displacementBias=C.displacementBias,b.wireframeLinewidth=C.wireframeLinewidth,b.linewidth=C.linewidth,D.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const F=i.properties.get(b);F.light=D}return b}function w(I,C,D,S,b){if(I.visible===!1)return;if(I.layers.test(C.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&b===Qn)&&(!I.frustumCulled||n.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,I.matrixWorld);const k=e.update(I),$=I.material;if(Array.isArray($)){const ie=k.groups;for(let J=0,de=ie.length;J<de;J++){const K=ie[J],ee=$[K.materialIndex];if(ee&&ee.visible){const ae=T(I,ee,S,b);I.onBeforeShadow(i,I,C,D,k,ae,K),i.renderBufferDirect(D,null,k,ae,I,K),I.onAfterShadow(i,I,C,D,k,ae,K)}}}else if($.visible){const ie=T(I,$,S,b);I.onBeforeShadow(i,I,C,D,k,ie,null),i.renderBufferDirect(D,null,k,ie,I,null),I.onAfterShadow(i,I,C,D,k,ie,null)}}const F=I.children;for(let k=0,$=F.length;k<$;k++)w(F[k],C,D,S,b)}function L(I){I.target.removeEventListener("dispose",L);for(const D in l){const S=l[D],b=I.target.uuid;b in S&&(S[b].dispose(),delete S[b])}}}const fx={[gl]:_l,[vl]:bl,[yl]:wl,[Fs]:xl,[_l]:gl,[bl]:vl,[wl]:yl,[xl]:Fs};function hx(i,e){function t(){let B=!1;const ye=new Pt;let Z=null;const se=new Pt(0,0,0,0);return{setMask:function(Ee){Z!==Ee&&!B&&(i.colorMask(Ee,Ee,Ee,Ee),Z=Ee)},setLocked:function(Ee){B=Ee},setClear:function(Ee,W,Ke,Mt,kt){kt===!0&&(Ee*=Mt,W*=Mt,Ke*=Mt),ye.set(Ee,W,Ke,Mt),se.equals(ye)===!1&&(i.clearColor(Ee,W,Ke,Mt),se.copy(ye))},reset:function(){B=!1,Z=null,se.set(-1,0,0,0)}}}function n(){let B=!1,ye=!1,Z=null,se=null,Ee=null;return{setReversed:function(W){if(ye!==W){const Ke=e.get("EXT_clip_control");ye?Ke.clipControlEXT(Ke.LOWER_LEFT_EXT,Ke.ZERO_TO_ONE_EXT):Ke.clipControlEXT(Ke.LOWER_LEFT_EXT,Ke.NEGATIVE_ONE_TO_ONE_EXT);const Mt=Ee;Ee=null,this.setClear(Mt)}ye=W},getReversed:function(){return ye},setTest:function(W){W?ge(i.DEPTH_TEST):te(i.DEPTH_TEST)},setMask:function(W){Z!==W&&!B&&(i.depthMask(W),Z=W)},setFunc:function(W){if(ye&&(W=fx[W]),se!==W){switch(W){case gl:i.depthFunc(i.NEVER);break;case _l:i.depthFunc(i.ALWAYS);break;case vl:i.depthFunc(i.LESS);break;case Fs:i.depthFunc(i.LEQUAL);break;case yl:i.depthFunc(i.EQUAL);break;case xl:i.depthFunc(i.GEQUAL);break;case bl:i.depthFunc(i.GREATER);break;case wl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}se=W}},setLocked:function(W){B=W},setClear:function(W){Ee!==W&&(ye&&(W=1-W),i.clearDepth(W),Ee=W)},reset:function(){B=!1,Z=null,se=null,Ee=null,ye=!1}}}function s(){let B=!1,ye=null,Z=null,se=null,Ee=null,W=null,Ke=null,Mt=null,kt=null;return{setTest:function(Je){B||(Je?ge(i.STENCIL_TEST):te(i.STENCIL_TEST))},setMask:function(Je){ye!==Je&&!B&&(i.stencilMask(Je),ye=Je)},setFunc:function(Je,Xt,fn){(Z!==Je||se!==Xt||Ee!==fn)&&(i.stencilFunc(Je,Xt,fn),Z=Je,se=Xt,Ee=fn)},setOp:function(Je,Xt,fn){(W!==Je||Ke!==Xt||Mt!==fn)&&(i.stencilOp(Je,Xt,fn),W=Je,Ke=Xt,Mt=fn)},setLocked:function(Je){B=Je},setClear:function(Je){kt!==Je&&(i.clearStencil(Je),kt=Je)},reset:function(){B=!1,ye=null,Z=null,se=null,Ee=null,W=null,Ke=null,Mt=null,kt=null}}}const r=new t,a=new n,o=new s,c=new WeakMap,l=new WeakMap;let f={},h={},d=new WeakMap,p=[],x=null,y=!1,_=null,g=null,R=null,T=null,w=null,L=null,I=null,C=new ft(0,0,0),D=0,S=!1,b=null,N=null,F=null,k=null,$=null;const ie=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let J=!1,de=0;const K=i.getParameter(i.VERSION);K.indexOf("WebGL")!==-1?(de=parseFloat(/^WebGL (\d)/.exec(K)[1]),J=de>=1):K.indexOf("OpenGL ES")!==-1&&(de=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),J=de>=2);let ee=null,ae={};const me=i.getParameter(i.SCISSOR_BOX),ve=i.getParameter(i.VIEWPORT),Re=new Pt().fromArray(me),Q=new Pt().fromArray(ve);function ue(B,ye,Z,se){const Ee=new Uint8Array(4),W=i.createTexture();i.bindTexture(B,W),i.texParameteri(B,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(B,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ke=0;Ke<Z;Ke++)B===i.TEXTURE_3D||B===i.TEXTURE_2D_ARRAY?i.texImage3D(ye,0,i.RGBA,1,1,se,0,i.RGBA,i.UNSIGNED_BYTE,Ee):i.texImage2D(ye+Ke,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ee);return W}const Me={};Me[i.TEXTURE_2D]=ue(i.TEXTURE_2D,i.TEXTURE_2D,1),Me[i.TEXTURE_CUBE_MAP]=ue(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Me[i.TEXTURE_2D_ARRAY]=ue(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Me[i.TEXTURE_3D]=ue(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ge(i.DEPTH_TEST),a.setFunc(Fs),$e(!1),ze(au),ge(i.CULL_FACE),U(Si);function ge(B){f[B]!==!0&&(i.enable(B),f[B]=!0)}function te(B){f[B]!==!1&&(i.disable(B),f[B]=!1)}function Ce(B,ye){return h[B]!==ye?(i.bindFramebuffer(B,ye),h[B]=ye,B===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=ye),B===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=ye),!0):!1}function ke(B,ye){let Z=p,se=!1;if(B){Z=d.get(ye),Z===void 0&&(Z=[],d.set(ye,Z));const Ee=B.textures;if(Z.length!==Ee.length||Z[0]!==i.COLOR_ATTACHMENT0){for(let W=0,Ke=Ee.length;W<Ke;W++)Z[W]=i.COLOR_ATTACHMENT0+W;Z.length=Ee.length,se=!0}}else Z[0]!==i.BACK&&(Z[0]=i.BACK,se=!0);se&&i.drawBuffers(Z)}function fe(B){return x!==B?(i.useProgram(B),x=B,!0):!1}const Te={[Hi]:i.FUNC_ADD,[_m]:i.FUNC_SUBTRACT,[vm]:i.FUNC_REVERSE_SUBTRACT};Te[ym]=i.MIN,Te[xm]=i.MAX;const ht={[bm]:i.ZERO,[wm]:i.ONE,[Mm]:i.SRC_COLOR,[pl]:i.SRC_ALPHA,[Cm]:i.SRC_ALPHA_SATURATE,[Am]:i.DST_COLOR,[Em]:i.DST_ALPHA,[Sm]:i.ONE_MINUS_SRC_COLOR,[ml]:i.ONE_MINUS_SRC_ALPHA,[Rm]:i.ONE_MINUS_DST_COLOR,[Tm]:i.ONE_MINUS_DST_ALPHA,[Pm]:i.CONSTANT_COLOR,[Lm]:i.ONE_MINUS_CONSTANT_COLOR,[Im]:i.CONSTANT_ALPHA,[Dm]:i.ONE_MINUS_CONSTANT_ALPHA};function U(B,ye,Z,se,Ee,W,Ke,Mt,kt,Je){if(B===Si){y===!0&&(te(i.BLEND),y=!1);return}if(y===!1&&(ge(i.BLEND),y=!0),B!==gm){if(B!==_||Je!==S){if((g!==Hi||w!==Hi)&&(i.blendEquation(i.FUNC_ADD),g=Hi,w=Hi),Je)switch(B){case wn:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case br:i.blendFunc(i.ONE,i.ONE);break;case za:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ha:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case wn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case br:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case za:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ha:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}R=null,T=null,L=null,I=null,C.set(0,0,0),D=0,_=B,S=Je}return}Ee=Ee||ye,W=W||Z,Ke=Ke||se,(ye!==g||Ee!==w)&&(i.blendEquationSeparate(Te[ye],Te[Ee]),g=ye,w=Ee),(Z!==R||se!==T||W!==L||Ke!==I)&&(i.blendFuncSeparate(ht[Z],ht[se],ht[W],ht[Ke]),R=Z,T=se,L=W,I=Ke),(Mt.equals(C)===!1||kt!==D)&&(i.blendColor(Mt.r,Mt.g,Mt.b,kt),C.copy(Mt),D=kt),_=B,S=!1}function pt(B,ye){B.side===ei?te(i.CULL_FACE):ge(i.CULL_FACE);let Z=B.side===cn;ye&&(Z=!Z),$e(Z),B.blending===wn&&B.transparent===!1?U(Si):U(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),a.setFunc(B.depthFunc),a.setTest(B.depthTest),a.setMask(B.depthWrite),r.setMask(B.colorWrite);const se=B.stencilWrite;o.setTest(se),se&&(o.setMask(B.stencilWriteMask),o.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),o.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),gt(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?ge(i.SAMPLE_ALPHA_TO_COVERAGE):te(i.SAMPLE_ALPHA_TO_COVERAGE)}function $e(B){b!==B&&(B?i.frontFace(i.CW):i.frontFace(i.CCW),b=B)}function ze(B){B!==dm?(ge(i.CULL_FACE),B!==N&&(B===au?i.cullFace(i.BACK):B===pm?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):te(i.CULL_FACE),N=B}function Be(B){B!==F&&(J&&i.lineWidth(B),F=B)}function gt(B,ye,Z){B?(ge(i.POLYGON_OFFSET_FILL),(k!==ye||$!==Z)&&(i.polygonOffset(ye,Z),k=ye,$=Z)):te(i.POLYGON_OFFSET_FILL)}function Oe(B){B?ge(i.SCISSOR_TEST):te(i.SCISSOR_TEST)}function P(B){B===void 0&&(B=i.TEXTURE0+ie-1),ee!==B&&(i.activeTexture(B),ee=B)}function M(B,ye,Z){Z===void 0&&(ee===null?Z=i.TEXTURE0+ie-1:Z=ee);let se=ae[Z];se===void 0&&(se={type:void 0,texture:void 0},ae[Z]=se),(se.type!==B||se.texture!==ye)&&(ee!==Z&&(i.activeTexture(Z),ee=Z),i.bindTexture(B,ye||Me[B]),se.type=B,se.texture=ye)}function G(){const B=ae[ee];B!==void 0&&B.type!==void 0&&(i.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function oe(){try{i.compressedTexImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function le(){try{i.compressedTexImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ne(){try{i.texSubImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ue(){try{i.texSubImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function _e(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Le(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function rt(){try{i.texStorage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function pe(){try{i.texStorage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function De(){try{i.texImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ge(){try{i.texImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function qe(B){Re.equals(B)===!1&&(i.scissor(B.x,B.y,B.z,B.w),Re.copy(B))}function Ie(B){Q.equals(B)===!1&&(i.viewport(B.x,B.y,B.z,B.w),Q.copy(B))}function Se(B,ye){let Z=l.get(ye);Z===void 0&&(Z=new WeakMap,l.set(ye,Z));let se=Z.get(B);se===void 0&&(se=i.getUniformBlockIndex(ye,B.name),Z.set(B,se))}function Qe(B,ye){const se=l.get(ye).get(B);c.get(ye)!==se&&(i.uniformBlockBinding(ye,se,B.__bindingPointIndex),c.set(ye,se))}function dt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),f={},ee=null,ae={},h={},d=new WeakMap,p=[],x=null,y=!1,_=null,g=null,R=null,T=null,w=null,L=null,I=null,C=new ft(0,0,0),D=0,S=!1,b=null,N=null,F=null,k=null,$=null,Re.set(0,0,i.canvas.width,i.canvas.height),Q.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ge,disable:te,bindFramebuffer:Ce,drawBuffers:ke,useProgram:fe,setBlending:U,setMaterial:pt,setFlipSided:$e,setCullFace:ze,setLineWidth:Be,setPolygonOffset:gt,setScissorTest:Oe,activeTexture:P,bindTexture:M,unbindTexture:G,compressedTexImage2D:oe,compressedTexImage3D:le,texImage2D:De,texImage3D:Ge,updateUBOMapping:Se,uniformBlockBinding:Qe,texStorage2D:rt,texStorage3D:pe,texSubImage2D:ne,texSubImage3D:Ue,compressedTexSubImage2D:_e,compressedTexSubImage3D:Le,scissor:qe,viewport:Ie,reset:dt}}function dx(i,e,t,n,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new yt,f=new WeakMap;let h;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(P,M){return p?new OffscreenCanvas(P,M):Sr("canvas")}function y(P,M,G){let oe=1;const le=Oe(P);if((le.width>G||le.height>G)&&(oe=G/Math.max(le.width,le.height)),oe<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const ne=Math.floor(oe*le.width),Ue=Math.floor(oe*le.height);h===void 0&&(h=x(ne,Ue));const _e=M?x(ne,Ue):h;return _e.width=ne,_e.height=Ue,_e.getContext("2d").drawImage(P,0,0,ne,Ue),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+le.width+"x"+le.height+") to ("+ne+"x"+Ue+")."),_e}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+le.width+"x"+le.height+")."),P;return P}function _(P){return P.generateMipmaps}function g(P){i.generateMipmap(P)}function R(P){return P.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?i.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function T(P,M,G,oe,le=!1){if(P!==null){if(i[P]!==void 0)return i[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let ne=M;if(M===i.RED&&(G===i.FLOAT&&(ne=i.R32F),G===i.HALF_FLOAT&&(ne=i.R16F),G===i.UNSIGNED_BYTE&&(ne=i.R8)),M===i.RED_INTEGER&&(G===i.UNSIGNED_BYTE&&(ne=i.R8UI),G===i.UNSIGNED_SHORT&&(ne=i.R16UI),G===i.UNSIGNED_INT&&(ne=i.R32UI),G===i.BYTE&&(ne=i.R8I),G===i.SHORT&&(ne=i.R16I),G===i.INT&&(ne=i.R32I)),M===i.RG&&(G===i.FLOAT&&(ne=i.RG32F),G===i.HALF_FLOAT&&(ne=i.RG16F),G===i.UNSIGNED_BYTE&&(ne=i.RG8)),M===i.RG_INTEGER&&(G===i.UNSIGNED_BYTE&&(ne=i.RG8UI),G===i.UNSIGNED_SHORT&&(ne=i.RG16UI),G===i.UNSIGNED_INT&&(ne=i.RG32UI),G===i.BYTE&&(ne=i.RG8I),G===i.SHORT&&(ne=i.RG16I),G===i.INT&&(ne=i.RG32I)),M===i.RGB_INTEGER&&(G===i.UNSIGNED_BYTE&&(ne=i.RGB8UI),G===i.UNSIGNED_SHORT&&(ne=i.RGB16UI),G===i.UNSIGNED_INT&&(ne=i.RGB32UI),G===i.BYTE&&(ne=i.RGB8I),G===i.SHORT&&(ne=i.RGB16I),G===i.INT&&(ne=i.RGB32I)),M===i.RGBA_INTEGER&&(G===i.UNSIGNED_BYTE&&(ne=i.RGBA8UI),G===i.UNSIGNED_SHORT&&(ne=i.RGBA16UI),G===i.UNSIGNED_INT&&(ne=i.RGBA32UI),G===i.BYTE&&(ne=i.RGBA8I),G===i.SHORT&&(ne=i.RGBA16I),G===i.INT&&(ne=i.RGBA32I)),M===i.RGB&&G===i.UNSIGNED_INT_5_9_9_9_REV&&(ne=i.RGB9_E5),M===i.RGBA){const Ue=le?Va:ut.getTransfer(oe);G===i.FLOAT&&(ne=i.RGBA32F),G===i.HALF_FLOAT&&(ne=i.RGBA16F),G===i.UNSIGNED_BYTE&&(ne=Ue===vt?i.SRGB8_ALPHA8:i.RGBA8),G===i.UNSIGNED_SHORT_4_4_4_4&&(ne=i.RGBA4),G===i.UNSIGNED_SHORT_5_5_5_1&&(ne=i.RGB5_A1)}return(ne===i.R16F||ne===i.R32F||ne===i.RG16F||ne===i.RG32F||ne===i.RGBA16F||ne===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ne}function w(P,M){let G;return P?M===null||M===Ki||M===Hs?G=i.DEPTH24_STENCIL8:M===ii?G=i.DEPTH32F_STENCIL8:M===Mr&&(G=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Ki||M===Hs?G=i.DEPTH_COMPONENT24:M===ii?G=i.DEPTH_COMPONENT32F:M===Mr&&(G=i.DEPTH_COMPONENT16),G}function L(P,M){return _(P)===!0||P.isFramebufferTexture&&P.minFilter!==Gt&&P.minFilter!==ln?Math.log2(Math.max(M.width,M.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?M.mipmaps.length:1}function I(P){const M=P.target;M.removeEventListener("dispose",I),D(M),M.isVideoTexture&&f.delete(M)}function C(P){const M=P.target;M.removeEventListener("dispose",C),b(M)}function D(P){const M=n.get(P);if(M.__webglInit===void 0)return;const G=P.source,oe=d.get(G);if(oe){const le=oe[M.__cacheKey];le.usedTimes--,le.usedTimes===0&&S(P),Object.keys(oe).length===0&&d.delete(G)}n.remove(P)}function S(P){const M=n.get(P);i.deleteTexture(M.__webglTexture);const G=P.source,oe=d.get(G);delete oe[M.__cacheKey],a.memory.textures--}function b(P){const M=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let oe=0;oe<6;oe++){if(Array.isArray(M.__webglFramebuffer[oe]))for(let le=0;le<M.__webglFramebuffer[oe].length;le++)i.deleteFramebuffer(M.__webglFramebuffer[oe][le]);else i.deleteFramebuffer(M.__webglFramebuffer[oe]);M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer[oe])}else{if(Array.isArray(M.__webglFramebuffer))for(let oe=0;oe<M.__webglFramebuffer.length;oe++)i.deleteFramebuffer(M.__webglFramebuffer[oe]);else i.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&i.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let oe=0;oe<M.__webglColorRenderbuffer.length;oe++)M.__webglColorRenderbuffer[oe]&&i.deleteRenderbuffer(M.__webglColorRenderbuffer[oe]);M.__webglDepthRenderbuffer&&i.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const G=P.textures;for(let oe=0,le=G.length;oe<le;oe++){const ne=n.get(G[oe]);ne.__webglTexture&&(i.deleteTexture(ne.__webglTexture),a.memory.textures--),n.remove(G[oe])}n.remove(P)}let N=0;function F(){N=0}function k(){const P=N;return P>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+s.maxTextures),N+=1,P}function $(P){const M=[];return M.push(P.wrapS),M.push(P.wrapT),M.push(P.wrapR||0),M.push(P.magFilter),M.push(P.minFilter),M.push(P.anisotropy),M.push(P.internalFormat),M.push(P.format),M.push(P.type),M.push(P.generateMipmaps),M.push(P.premultiplyAlpha),M.push(P.flipY),M.push(P.unpackAlignment),M.push(P.colorSpace),M.join()}function ie(P,M){const G=n.get(P);if(P.isVideoTexture&&Be(P),P.isRenderTargetTexture===!1&&P.version>0&&G.__version!==P.version){const oe=P.image;if(oe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(oe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Q(G,P,M);return}}t.bindTexture(i.TEXTURE_2D,G.__webglTexture,i.TEXTURE0+M)}function J(P,M){const G=n.get(P);if(P.version>0&&G.__version!==P.version){Q(G,P,M);return}t.bindTexture(i.TEXTURE_2D_ARRAY,G.__webglTexture,i.TEXTURE0+M)}function de(P,M){const G=n.get(P);if(P.version>0&&G.__version!==P.version){Q(G,P,M);return}t.bindTexture(i.TEXTURE_3D,G.__webglTexture,i.TEXTURE0+M)}function K(P,M){const G=n.get(P);if(P.version>0&&G.__version!==P.version){ue(G,P,M);return}t.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture,i.TEXTURE0+M)}const ee={[wr]:i.REPEAT,[ni]:i.CLAMP_TO_EDGE,[El]:i.MIRRORED_REPEAT},ae={[Gt]:i.NEAREST,[Gm]:i.NEAREST_MIPMAP_NEAREST,[$r]:i.NEAREST_MIPMAP_LINEAR,[ln]:i.LINEAR,[bo]:i.LINEAR_MIPMAP_NEAREST,[Hn]:i.LINEAR_MIPMAP_LINEAR},me={[$m]:i.NEVER,[eg]:i.ALWAYS,[Km]:i.LESS,[Bh]:i.LEQUAL,[Ym]:i.EQUAL,[Qm]:i.GEQUAL,[Jm]:i.GREATER,[Zm]:i.NOTEQUAL};function ve(P,M){if(M.type===ii&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===ln||M.magFilter===bo||M.magFilter===$r||M.magFilter===Hn||M.minFilter===ln||M.minFilter===bo||M.minFilter===$r||M.minFilter===Hn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(P,i.TEXTURE_WRAP_S,ee[M.wrapS]),i.texParameteri(P,i.TEXTURE_WRAP_T,ee[M.wrapT]),(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)&&i.texParameteri(P,i.TEXTURE_WRAP_R,ee[M.wrapR]),i.texParameteri(P,i.TEXTURE_MAG_FILTER,ae[M.magFilter]),i.texParameteri(P,i.TEXTURE_MIN_FILTER,ae[M.minFilter]),M.compareFunction&&(i.texParameteri(P,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(P,i.TEXTURE_COMPARE_FUNC,me[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Gt||M.minFilter!==$r&&M.minFilter!==Hn||M.type===ii&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){const G=e.get("EXT_texture_filter_anisotropic");i.texParameterf(P,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function Re(P,M){let G=!1;P.__webglInit===void 0&&(P.__webglInit=!0,M.addEventListener("dispose",I));const oe=M.source;let le=d.get(oe);le===void 0&&(le={},d.set(oe,le));const ne=$(M);if(ne!==P.__cacheKey){le[ne]===void 0&&(le[ne]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,G=!0),le[ne].usedTimes++;const Ue=le[P.__cacheKey];Ue!==void 0&&(le[P.__cacheKey].usedTimes--,Ue.usedTimes===0&&S(M)),P.__cacheKey=ne,P.__webglTexture=le[ne].texture}return G}function Q(P,M,G){let oe=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(oe=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(oe=i.TEXTURE_3D);const le=Re(P,M),ne=M.source;t.bindTexture(oe,P.__webglTexture,i.TEXTURE0+G);const Ue=n.get(ne);if(ne.version!==Ue.__version||le===!0){t.activeTexture(i.TEXTURE0+G);const _e=ut.getPrimaries(ut.workingColorSpace),Le=M.colorSpace===wi?null:ut.getPrimaries(M.colorSpace),rt=M.colorSpace===wi||_e===Le?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,rt);let pe=y(M.image,!1,s.maxTextureSize);pe=gt(M,pe);const De=r.convert(M.format,M.colorSpace),Ge=r.convert(M.type);let qe=T(M.internalFormat,De,Ge,M.colorSpace,M.isVideoTexture);ve(oe,M);let Ie;const Se=M.mipmaps,Qe=M.isVideoTexture!==!0,dt=Ue.__version===void 0||le===!0,B=ne.dataReady,ye=L(M,pe);if(M.isDepthTexture)qe=w(M.format===Vs,M.type),dt&&(Qe?t.texStorage2D(i.TEXTURE_2D,1,qe,pe.width,pe.height):t.texImage2D(i.TEXTURE_2D,0,qe,pe.width,pe.height,0,De,Ge,null));else if(M.isDataTexture)if(Se.length>0){Qe&&dt&&t.texStorage2D(i.TEXTURE_2D,ye,qe,Se[0].width,Se[0].height);for(let Z=0,se=Se.length;Z<se;Z++)Ie=Se[Z],Qe?B&&t.texSubImage2D(i.TEXTURE_2D,Z,0,0,Ie.width,Ie.height,De,Ge,Ie.data):t.texImage2D(i.TEXTURE_2D,Z,qe,Ie.width,Ie.height,0,De,Ge,Ie.data);M.generateMipmaps=!1}else Qe?(dt&&t.texStorage2D(i.TEXTURE_2D,ye,qe,pe.width,pe.height),B&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,pe.width,pe.height,De,Ge,pe.data)):t.texImage2D(i.TEXTURE_2D,0,qe,pe.width,pe.height,0,De,Ge,pe.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Qe&&dt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ye,qe,Se[0].width,Se[0].height,pe.depth);for(let Z=0,se=Se.length;Z<se;Z++)if(Ie=Se[Z],M.format!==xn)if(De!==null)if(Qe){if(B)if(M.layerUpdates.size>0){const Ee=Ru(Ie.width,Ie.height,M.format,M.type);for(const W of M.layerUpdates){const Ke=Ie.data.subarray(W*Ee/Ie.data.BYTES_PER_ELEMENT,(W+1)*Ee/Ie.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,W,Ie.width,Ie.height,1,De,Ke)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,0,Ie.width,Ie.height,pe.depth,De,Ie.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Z,qe,Ie.width,Ie.height,pe.depth,0,Ie.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Qe?B&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,0,Ie.width,Ie.height,pe.depth,De,Ge,Ie.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Z,qe,Ie.width,Ie.height,pe.depth,0,De,Ge,Ie.data)}else{Qe&&dt&&t.texStorage2D(i.TEXTURE_2D,ye,qe,Se[0].width,Se[0].height);for(let Z=0,se=Se.length;Z<se;Z++)Ie=Se[Z],M.format!==xn?De!==null?Qe?B&&t.compressedTexSubImage2D(i.TEXTURE_2D,Z,0,0,Ie.width,Ie.height,De,Ie.data):t.compressedTexImage2D(i.TEXTURE_2D,Z,qe,Ie.width,Ie.height,0,Ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Qe?B&&t.texSubImage2D(i.TEXTURE_2D,Z,0,0,Ie.width,Ie.height,De,Ge,Ie.data):t.texImage2D(i.TEXTURE_2D,Z,qe,Ie.width,Ie.height,0,De,Ge,Ie.data)}else if(M.isDataArrayTexture)if(Qe){if(dt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ye,qe,pe.width,pe.height,pe.depth),B)if(M.layerUpdates.size>0){const Z=Ru(pe.width,pe.height,M.format,M.type);for(const se of M.layerUpdates){const Ee=pe.data.subarray(se*Z/pe.data.BYTES_PER_ELEMENT,(se+1)*Z/pe.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,se,pe.width,pe.height,1,De,Ge,Ee)}M.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,pe.width,pe.height,pe.depth,De,Ge,pe.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,qe,pe.width,pe.height,pe.depth,0,De,Ge,pe.data);else if(M.isData3DTexture)Qe?(dt&&t.texStorage3D(i.TEXTURE_3D,ye,qe,pe.width,pe.height,pe.depth),B&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,pe.width,pe.height,pe.depth,De,Ge,pe.data)):t.texImage3D(i.TEXTURE_3D,0,qe,pe.width,pe.height,pe.depth,0,De,Ge,pe.data);else if(M.isFramebufferTexture){if(dt)if(Qe)t.texStorage2D(i.TEXTURE_2D,ye,qe,pe.width,pe.height);else{let Z=pe.width,se=pe.height;for(let Ee=0;Ee<ye;Ee++)t.texImage2D(i.TEXTURE_2D,Ee,qe,Z,se,0,De,Ge,null),Z>>=1,se>>=1}}else if(Se.length>0){if(Qe&&dt){const Z=Oe(Se[0]);t.texStorage2D(i.TEXTURE_2D,ye,qe,Z.width,Z.height)}for(let Z=0,se=Se.length;Z<se;Z++)Ie=Se[Z],Qe?B&&t.texSubImage2D(i.TEXTURE_2D,Z,0,0,De,Ge,Ie):t.texImage2D(i.TEXTURE_2D,Z,qe,De,Ge,Ie);M.generateMipmaps=!1}else if(Qe){if(dt){const Z=Oe(pe);t.texStorage2D(i.TEXTURE_2D,ye,qe,Z.width,Z.height)}B&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,De,Ge,pe)}else t.texImage2D(i.TEXTURE_2D,0,qe,De,Ge,pe);_(M)&&g(oe),Ue.__version=ne.version,M.onUpdate&&M.onUpdate(M)}P.__version=M.version}function ue(P,M,G){if(M.image.length!==6)return;const oe=Re(P,M),le=M.source;t.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture,i.TEXTURE0+G);const ne=n.get(le);if(le.version!==ne.__version||oe===!0){t.activeTexture(i.TEXTURE0+G);const Ue=ut.getPrimaries(ut.workingColorSpace),_e=M.colorSpace===wi?null:ut.getPrimaries(M.colorSpace),Le=M.colorSpace===wi||Ue===_e?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Le);const rt=M.isCompressedTexture||M.image[0].isCompressedTexture,pe=M.image[0]&&M.image[0].isDataTexture,De=[];for(let se=0;se<6;se++)!rt&&!pe?De[se]=y(M.image[se],!0,s.maxCubemapSize):De[se]=pe?M.image[se].image:M.image[se],De[se]=gt(M,De[se]);const Ge=De[0],qe=r.convert(M.format,M.colorSpace),Ie=r.convert(M.type),Se=T(M.internalFormat,qe,Ie,M.colorSpace),Qe=M.isVideoTexture!==!0,dt=ne.__version===void 0||oe===!0,B=le.dataReady;let ye=L(M,Ge);ve(i.TEXTURE_CUBE_MAP,M);let Z;if(rt){Qe&&dt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ye,Se,Ge.width,Ge.height);for(let se=0;se<6;se++){Z=De[se].mipmaps;for(let Ee=0;Ee<Z.length;Ee++){const W=Z[Ee];M.format!==xn?qe!==null?Qe?B&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ee,0,0,W.width,W.height,qe,W.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ee,Se,W.width,W.height,0,W.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Qe?B&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ee,0,0,W.width,W.height,qe,Ie,W.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ee,Se,W.width,W.height,0,qe,Ie,W.data)}}}else{if(Z=M.mipmaps,Qe&&dt){Z.length>0&&ye++;const se=Oe(De[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ye,Se,se.width,se.height)}for(let se=0;se<6;se++)if(pe){Qe?B&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,De[se].width,De[se].height,qe,Ie,De[se].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,Se,De[se].width,De[se].height,0,qe,Ie,De[se].data);for(let Ee=0;Ee<Z.length;Ee++){const Ke=Z[Ee].image[se].image;Qe?B&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ee+1,0,0,Ke.width,Ke.height,qe,Ie,Ke.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ee+1,Se,Ke.width,Ke.height,0,qe,Ie,Ke.data)}}else{Qe?B&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,qe,Ie,De[se]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,Se,qe,Ie,De[se]);for(let Ee=0;Ee<Z.length;Ee++){const W=Z[Ee];Qe?B&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ee+1,0,0,qe,Ie,W.image[se]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ee+1,Se,qe,Ie,W.image[se])}}}_(M)&&g(i.TEXTURE_CUBE_MAP),ne.__version=le.version,M.onUpdate&&M.onUpdate(M)}P.__version=M.version}function Me(P,M,G,oe,le,ne){const Ue=r.convert(G.format,G.colorSpace),_e=r.convert(G.type),Le=T(G.internalFormat,Ue,_e,G.colorSpace),rt=n.get(M),pe=n.get(G);if(pe.__renderTarget=M,!rt.__hasExternalTextures){const De=Math.max(1,M.width>>ne),Ge=Math.max(1,M.height>>ne);le===i.TEXTURE_3D||le===i.TEXTURE_2D_ARRAY?t.texImage3D(le,ne,Le,De,Ge,M.depth,0,Ue,_e,null):t.texImage2D(le,ne,Le,De,Ge,0,Ue,_e,null)}t.bindFramebuffer(i.FRAMEBUFFER,P),ze(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,oe,le,pe.__webglTexture,0,$e(M)):(le===i.TEXTURE_2D||le>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&le<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,oe,le,pe.__webglTexture,ne),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ge(P,M,G){if(i.bindRenderbuffer(i.RENDERBUFFER,P),M.depthBuffer){const oe=M.depthTexture,le=oe&&oe.isDepthTexture?oe.type:null,ne=w(M.stencilBuffer,le),Ue=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_e=$e(M);ze(M)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,_e,ne,M.width,M.height):G?i.renderbufferStorageMultisample(i.RENDERBUFFER,_e,ne,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,ne,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ue,i.RENDERBUFFER,P)}else{const oe=M.textures;for(let le=0;le<oe.length;le++){const ne=oe[le],Ue=r.convert(ne.format,ne.colorSpace),_e=r.convert(ne.type),Le=T(ne.internalFormat,Ue,_e,ne.colorSpace),rt=$e(M);G&&ze(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,rt,Le,M.width,M.height):ze(M)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,rt,Le,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,Le,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function te(P,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,P),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const oe=n.get(M.depthTexture);oe.__renderTarget=M,(!oe.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),ie(M.depthTexture,0);const le=oe.__webglTexture,ne=$e(M);if(M.depthTexture.format===Ds)ze(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,le,0,ne):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,le,0);else if(M.depthTexture.format===Vs)ze(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,le,0,ne):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,le,0);else throw new Error("Unknown depthTexture format")}function Ce(P){const M=n.get(P),G=P.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==P.depthTexture){const oe=P.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),oe){const le=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,oe.removeEventListener("dispose",le)};oe.addEventListener("dispose",le),M.__depthDisposeCallback=le}M.__boundDepthTexture=oe}if(P.depthTexture&&!M.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");te(M.__webglFramebuffer,P)}else if(G){M.__webglDepthbuffer=[];for(let oe=0;oe<6;oe++)if(t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[oe]),M.__webglDepthbuffer[oe]===void 0)M.__webglDepthbuffer[oe]=i.createRenderbuffer(),ge(M.__webglDepthbuffer[oe],P,!1);else{const le=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ne=M.__webglDepthbuffer[oe];i.bindRenderbuffer(i.RENDERBUFFER,ne),i.framebufferRenderbuffer(i.FRAMEBUFFER,le,i.RENDERBUFFER,ne)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=i.createRenderbuffer(),ge(M.__webglDepthbuffer,P,!1);else{const oe=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,le=M.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,le),i.framebufferRenderbuffer(i.FRAMEBUFFER,oe,i.RENDERBUFFER,le)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function ke(P,M,G){const oe=n.get(P);M!==void 0&&Me(oe.__webglFramebuffer,P,P.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),G!==void 0&&Ce(P)}function fe(P){const M=P.texture,G=n.get(P),oe=n.get(M);P.addEventListener("dispose",C);const le=P.textures,ne=P.isWebGLCubeRenderTarget===!0,Ue=le.length>1;if(Ue||(oe.__webglTexture===void 0&&(oe.__webglTexture=i.createTexture()),oe.__version=M.version,a.memory.textures++),ne){G.__webglFramebuffer=[];for(let _e=0;_e<6;_e++)if(M.mipmaps&&M.mipmaps.length>0){G.__webglFramebuffer[_e]=[];for(let Le=0;Le<M.mipmaps.length;Le++)G.__webglFramebuffer[_e][Le]=i.createFramebuffer()}else G.__webglFramebuffer[_e]=i.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){G.__webglFramebuffer=[];for(let _e=0;_e<M.mipmaps.length;_e++)G.__webglFramebuffer[_e]=i.createFramebuffer()}else G.__webglFramebuffer=i.createFramebuffer();if(Ue)for(let _e=0,Le=le.length;_e<Le;_e++){const rt=n.get(le[_e]);rt.__webglTexture===void 0&&(rt.__webglTexture=i.createTexture(),a.memory.textures++)}if(P.samples>0&&ze(P)===!1){G.__webglMultisampledFramebuffer=i.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let _e=0;_e<le.length;_e++){const Le=le[_e];G.__webglColorRenderbuffer[_e]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,G.__webglColorRenderbuffer[_e]);const rt=r.convert(Le.format,Le.colorSpace),pe=r.convert(Le.type),De=T(Le.internalFormat,rt,pe,Le.colorSpace,P.isXRRenderTarget===!0),Ge=$e(P);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ge,De,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.RENDERBUFFER,G.__webglColorRenderbuffer[_e])}i.bindRenderbuffer(i.RENDERBUFFER,null),P.depthBuffer&&(G.__webglDepthRenderbuffer=i.createRenderbuffer(),ge(G.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ne){t.bindTexture(i.TEXTURE_CUBE_MAP,oe.__webglTexture),ve(i.TEXTURE_CUBE_MAP,M);for(let _e=0;_e<6;_e++)if(M.mipmaps&&M.mipmaps.length>0)for(let Le=0;Le<M.mipmaps.length;Le++)Me(G.__webglFramebuffer[_e][Le],P,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Le);else Me(G.__webglFramebuffer[_e],P,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0);_(M)&&g(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ue){for(let _e=0,Le=le.length;_e<Le;_e++){const rt=le[_e],pe=n.get(rt);t.bindTexture(i.TEXTURE_2D,pe.__webglTexture),ve(i.TEXTURE_2D,rt),Me(G.__webglFramebuffer,P,rt,i.COLOR_ATTACHMENT0+_e,i.TEXTURE_2D,0),_(rt)&&g(i.TEXTURE_2D)}t.unbindTexture()}else{let _e=i.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(_e=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(_e,oe.__webglTexture),ve(_e,M),M.mipmaps&&M.mipmaps.length>0)for(let Le=0;Le<M.mipmaps.length;Le++)Me(G.__webglFramebuffer[Le],P,M,i.COLOR_ATTACHMENT0,_e,Le);else Me(G.__webglFramebuffer,P,M,i.COLOR_ATTACHMENT0,_e,0);_(M)&&g(_e),t.unbindTexture()}P.depthBuffer&&Ce(P)}function Te(P){const M=P.textures;for(let G=0,oe=M.length;G<oe;G++){const le=M[G];if(_(le)){const ne=R(P),Ue=n.get(le).__webglTexture;t.bindTexture(ne,Ue),g(ne),t.unbindTexture()}}}const ht=[],U=[];function pt(P){if(P.samples>0){if(ze(P)===!1){const M=P.textures,G=P.width,oe=P.height;let le=i.COLOR_BUFFER_BIT;const ne=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ue=n.get(P),_e=M.length>1;if(_e)for(let Le=0;Le<M.length;Le++)t.bindFramebuffer(i.FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Le,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ue.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Le,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ue.__webglFramebuffer);for(let Le=0;Le<M.length;Le++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(le|=i.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(le|=i.STENCIL_BUFFER_BIT)),_e){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ue.__webglColorRenderbuffer[Le]);const rt=n.get(M[Le]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,rt,0)}i.blitFramebuffer(0,0,G,oe,0,0,G,oe,le,i.NEAREST),c===!0&&(ht.length=0,U.length=0,ht.push(i.COLOR_ATTACHMENT0+Le),P.depthBuffer&&P.resolveDepthBuffer===!1&&(ht.push(ne),U.push(ne),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,U)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ht))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),_e)for(let Le=0;Le<M.length;Le++){t.bindFramebuffer(i.FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Le,i.RENDERBUFFER,Ue.__webglColorRenderbuffer[Le]);const rt=n.get(M[Le]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ue.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Le,i.TEXTURE_2D,rt,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ue.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&c){const M=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[M])}}}function $e(P){return Math.min(s.maxSamples,P.samples)}function ze(P){const M=n.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Be(P){const M=a.render.frame;f.get(P)!==M&&(f.set(P,M),P.update())}function gt(P,M){const G=P.colorSpace,oe=P.format,le=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||G!==Gs&&G!==wi&&(ut.getTransfer(G)===vt?(oe!==xn||le!==Wn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),M}function Oe(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(l.width=P.naturalWidth||P.width,l.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(l.width=P.displayWidth,l.height=P.displayHeight):(l.width=P.width,l.height=P.height),l}this.allocateTextureUnit=k,this.resetTextureUnits=F,this.setTexture2D=ie,this.setTexture2DArray=J,this.setTexture3D=de,this.setTextureCube=K,this.rebindTextures=ke,this.setupRenderTarget=fe,this.updateRenderTargetMipmap=Te,this.updateMultisampleRenderTarget=pt,this.setupDepthRenderbuffer=Ce,this.setupFrameBufferTexture=Me,this.useMultisampledRTT=ze}function px(i,e){function t(n,s=wi){let r;const a=ut.getTransfer(s);if(n===Wn)return i.UNSIGNED_BYTE;if(n===Mc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Sc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Lh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Ch)return i.BYTE;if(n===Ph)return i.SHORT;if(n===Mr)return i.UNSIGNED_SHORT;if(n===wc)return i.INT;if(n===Ki)return i.UNSIGNED_INT;if(n===ii)return i.FLOAT;if(n===Pr)return i.HALF_FLOAT;if(n===Ih)return i.ALPHA;if(n===Dh)return i.RGB;if(n===xn)return i.RGBA;if(n===Nh)return i.LUMINANCE;if(n===Oh)return i.LUMINANCE_ALPHA;if(n===Ds)return i.DEPTH_COMPONENT;if(n===Vs)return i.DEPTH_STENCIL;if(n===Uh)return i.RED;if(n===Ec)return i.RED_INTEGER;if(n===kh)return i.RG;if(n===Tc)return i.RG_INTEGER;if(n===Ac)return i.RGBA_INTEGER;if(n===Aa||n===Ra||n===Ca||n===Pa)if(a===vt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Aa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ra)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ca)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Pa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Aa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ra)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ca)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Pa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Tl||n===Al||n===Rl||n===Cl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Tl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Al)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Rl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Cl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Pl||n===Ll||n===Il)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Pl||n===Ll)return a===vt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Il)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Dl||n===Nl||n===Ol||n===Ul||n===kl||n===Fl||n===Bl||n===zl||n===Hl||n===Vl||n===Gl||n===Wl||n===ql||n===jl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Dl)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Nl)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ol)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ul)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===kl)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Fl)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Bl)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===zl)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Hl)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Vl)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Gl)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Wl)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ql)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===jl)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===La||n===Xl||n===$l)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===La)return a===vt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Xl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===$l)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Fh||n===Kl||n===Yl||n===Jl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===La)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Kl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Yl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Jl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Hs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const mx={type:"move"};class Yo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ha,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ha,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ha,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const y of e.hand.values()){const _=t.getJointPose(y,n),g=this._getHandJoint(l,y);_!==null&&(g.matrix.fromArray(_.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=_.radius),g.visible=_!==null}const f=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=f.position.distanceTo(h.position),p=.02,x=.005;l.inputState.pinching&&d>p+x?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=p-x&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(mx)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new ha;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const gx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,_x=`
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

}`;class vx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const s=new jt,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new On({vertexShader:gx,fragmentShader:_x,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new nn(new fi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class yx extends Js{constructor(e,t){super();const n=this;let s=null,r=1,a=null,o="local-floor",c=1,l=null,f=null,h=null,d=null,p=null,x=null;const y=new vx,_=t.getContextAttributes();let g=null,R=null;const T=[],w=[],L=new yt;let I=null;const C=new In;C.viewport=new Pt;const D=new In;D.viewport=new Pt;const S=[C,D],b=new zg;let N=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let ue=T[Q];return ue===void 0&&(ue=new Yo,T[Q]=ue),ue.getTargetRaySpace()},this.getControllerGrip=function(Q){let ue=T[Q];return ue===void 0&&(ue=new Yo,T[Q]=ue),ue.getGripSpace()},this.getHand=function(Q){let ue=T[Q];return ue===void 0&&(ue=new Yo,T[Q]=ue),ue.getHandSpace()};function k(Q){const ue=w.indexOf(Q.inputSource);if(ue===-1)return;const Me=T[ue];Me!==void 0&&(Me.update(Q.inputSource,Q.frame,l||a),Me.dispatchEvent({type:Q.type,data:Q.inputSource}))}function $(){s.removeEventListener("select",k),s.removeEventListener("selectstart",k),s.removeEventListener("selectend",k),s.removeEventListener("squeeze",k),s.removeEventListener("squeezestart",k),s.removeEventListener("squeezeend",k),s.removeEventListener("end",$),s.removeEventListener("inputsourceschange",ie);for(let Q=0;Q<T.length;Q++){const ue=w[Q];ue!==null&&(w[Q]=null,T[Q].disconnect(ue))}N=null,F=null,y.reset(),e.setRenderTarget(g),p=null,d=null,h=null,s=null,R=null,Re.stop(),n.isPresenting=!1,e.setPixelRatio(I),e.setSize(L.width,L.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){r=Q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){o=Q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(Q){l=Q},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return h},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function(Q){if(s=Q,s!==null){if(g=e.getRenderTarget(),s.addEventListener("select",k),s.addEventListener("selectstart",k),s.addEventListener("selectend",k),s.addEventListener("squeeze",k),s.addEventListener("squeezestart",k),s.addEventListener("squeezeend",k),s.addEventListener("end",$),s.addEventListener("inputsourceschange",ie),_.xrCompatible!==!0&&await t.makeXRCompatible(),I=e.getPixelRatio(),e.getSize(L),s.enabledFeatures!==void 0&&s.enabledFeatures.includes("layers")){let Me=null,ge=null,te=null;_.depth&&(te=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Me=_.stencil?Vs:Ds,ge=_.stencil?Hs:Ki);const Ce={colorFormat:t.RGBA8,depthFormat:te,scaleFactor:r};h=new XRWebGLBinding(s,t),d=h.createProjectionLayer(Ce),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),R=new Ai(d.textureWidth,d.textureHeight,{format:xn,type:Wn,depthTexture:new Zh(d.textureWidth,d.textureHeight,ge,void 0,void 0,void 0,void 0,void 0,void 0,Me),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}else{const Me={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,Me),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),R=new Ai(p.framebufferWidth,p.framebufferHeight,{format:xn,type:Wn,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}R.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),Re.setContext(s),Re.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function ie(Q){for(let ue=0;ue<Q.removed.length;ue++){const Me=Q.removed[ue],ge=w.indexOf(Me);ge>=0&&(w[ge]=null,T[ge].disconnect(Me))}for(let ue=0;ue<Q.added.length;ue++){const Me=Q.added[ue];let ge=w.indexOf(Me);if(ge===-1){for(let Ce=0;Ce<T.length;Ce++)if(Ce>=w.length){w.push(Me),ge=Ce;break}else if(w[Ce]===null){w[Ce]=Me,ge=Ce;break}if(ge===-1)break}const te=T[ge];te&&te.connect(Me)}}const J=new X,de=new X;function K(Q,ue,Me){J.setFromMatrixPosition(ue.matrixWorld),de.setFromMatrixPosition(Me.matrixWorld);const ge=J.distanceTo(de),te=ue.projectionMatrix.elements,Ce=Me.projectionMatrix.elements,ke=te[14]/(te[10]-1),fe=te[14]/(te[10]+1),Te=(te[9]+1)/te[5],ht=(te[9]-1)/te[5],U=(te[8]-1)/te[0],pt=(Ce[8]+1)/Ce[0],$e=ke*U,ze=ke*pt,Be=ge/(-U+pt),gt=Be*-U;if(ue.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(gt),Q.translateZ(Be),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),te[10]===-1)Q.projectionMatrix.copy(ue.projectionMatrix),Q.projectionMatrixInverse.copy(ue.projectionMatrixInverse);else{const Oe=ke+Be,P=fe+Be,M=$e-gt,G=ze+(ge-gt),oe=Te*fe/P*Oe,le=ht*fe/P*Oe;Q.projectionMatrix.makePerspective(M,G,oe,le,Oe,P),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function ee(Q,ue){ue===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(ue.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(s===null)return;let ue=Q.near,Me=Q.far;y.texture!==null&&(y.depthNear>0&&(ue=y.depthNear),y.depthFar>0&&(Me=y.depthFar)),b.near=D.near=C.near=ue,b.far=D.far=C.far=Me,(N!==b.near||F!==b.far)&&(s.updateRenderState({depthNear:b.near,depthFar:b.far}),N=b.near,F=b.far),C.layers.mask=Q.layers.mask|2,D.layers.mask=Q.layers.mask|4,b.layers.mask=C.layers.mask|D.layers.mask;const ge=Q.parent,te=b.cameras;ee(b,ge);for(let Ce=0;Ce<te.length;Ce++)ee(te[Ce],ge);te.length===2?K(b,C,D):b.projectionMatrix.copy(C.projectionMatrix),ae(Q,b,ge)};function ae(Q,ue,Me){Me===null?Q.matrix.copy(ue.matrixWorld):(Q.matrix.copy(Me.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(ue.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(ue.projectionMatrix),Q.projectionMatrixInverse.copy(ue.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=Zl*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(d===null&&p===null))return c},this.setFoveation=function(Q){c=Q,d!==null&&(d.fixedFoveation=Q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Q)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(b)};let me=null;function ve(Q,ue){if(f=ue.getViewerPose(l||a),x=ue,f!==null){const Me=f.views;p!==null&&(e.setRenderTargetFramebuffer(R,p.framebuffer),e.setRenderTarget(R));let ge=!1;Me.length!==b.cameras.length&&(b.cameras.length=0,ge=!0);for(let Ce=0;Ce<Me.length;Ce++){const ke=Me[Ce];let fe=null;if(p!==null)fe=p.getViewport(ke);else{const ht=h.getViewSubImage(d,ke);fe=ht.viewport,Ce===0&&(e.setRenderTargetTextures(R,ht.colorTexture,d.ignoreDepthValues?void 0:ht.depthStencilTexture),e.setRenderTarget(R))}let Te=S[Ce];Te===void 0&&(Te=new In,Te.layers.enable(Ce),Te.viewport=new Pt,S[Ce]=Te),Te.matrix.fromArray(ke.transform.matrix),Te.matrix.decompose(Te.position,Te.quaternion,Te.scale),Te.projectionMatrix.fromArray(ke.projectionMatrix),Te.projectionMatrixInverse.copy(Te.projectionMatrix).invert(),Te.viewport.set(fe.x,fe.y,fe.width,fe.height),Ce===0&&(b.matrix.copy(Te.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),ge===!0&&b.cameras.push(Te)}const te=s.enabledFeatures;if(te&&te.includes("depth-sensing")){const Ce=h.getDepthInformation(Me[0]);Ce&&Ce.isValid&&Ce.texture&&y.init(e,Ce,s.renderState)}}for(let Me=0;Me<T.length;Me++){const ge=w[Me],te=T[Me];ge!==null&&te!==void 0&&te.update(ge,ue,l||a)}me&&me(Q,ue),ue.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ue}),x=null}const Re=new ed;Re.setAnimationLoop(ve),this.setAnimationLoop=function(Q){me=Q},this.dispose=function(){}}}const Fi=new ui,xx=new Nt;function bx(i,e){function t(_,g){_.matrixAutoUpdate===!0&&_.updateMatrix(),g.value.copy(_.matrix)}function n(_,g){g.color.getRGB(_.fogColor.value,Xh(i)),g.isFog?(_.fogNear.value=g.near,_.fogFar.value=g.far):g.isFogExp2&&(_.fogDensity.value=g.density)}function s(_,g,R,T,w){g.isMeshBasicMaterial||g.isMeshLambertMaterial?r(_,g):g.isMeshToonMaterial?(r(_,g),h(_,g)):g.isMeshPhongMaterial?(r(_,g),f(_,g)):g.isMeshStandardMaterial?(r(_,g),d(_,g),g.isMeshPhysicalMaterial&&p(_,g,w)):g.isMeshMatcapMaterial?(r(_,g),x(_,g)):g.isMeshDepthMaterial?r(_,g):g.isMeshDistanceMaterial?(r(_,g),y(_,g)):g.isMeshNormalMaterial?r(_,g):g.isLineBasicMaterial?(a(_,g),g.isLineDashedMaterial&&o(_,g)):g.isPointsMaterial?c(_,g,R,T):g.isSpriteMaterial?l(_,g):g.isShadowMaterial?(_.color.value.copy(g.color),_.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(_,g){_.opacity.value=g.opacity,g.color&&_.diffuse.value.copy(g.color),g.emissive&&_.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(_.map.value=g.map,t(g.map,_.mapTransform)),g.alphaMap&&(_.alphaMap.value=g.alphaMap,t(g.alphaMap,_.alphaMapTransform)),g.bumpMap&&(_.bumpMap.value=g.bumpMap,t(g.bumpMap,_.bumpMapTransform),_.bumpScale.value=g.bumpScale,g.side===cn&&(_.bumpScale.value*=-1)),g.normalMap&&(_.normalMap.value=g.normalMap,t(g.normalMap,_.normalMapTransform),_.normalScale.value.copy(g.normalScale),g.side===cn&&_.normalScale.value.negate()),g.displacementMap&&(_.displacementMap.value=g.displacementMap,t(g.displacementMap,_.displacementMapTransform),_.displacementScale.value=g.displacementScale,_.displacementBias.value=g.displacementBias),g.emissiveMap&&(_.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,_.emissiveMapTransform)),g.specularMap&&(_.specularMap.value=g.specularMap,t(g.specularMap,_.specularMapTransform)),g.alphaTest>0&&(_.alphaTest.value=g.alphaTest);const R=e.get(g),T=R.envMap,w=R.envMapRotation;T&&(_.envMap.value=T,Fi.copy(w),Fi.x*=-1,Fi.y*=-1,Fi.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Fi.y*=-1,Fi.z*=-1),_.envMapRotation.value.setFromMatrix4(xx.makeRotationFromEuler(Fi)),_.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,_.reflectivity.value=g.reflectivity,_.ior.value=g.ior,_.refractionRatio.value=g.refractionRatio),g.lightMap&&(_.lightMap.value=g.lightMap,_.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,_.lightMapTransform)),g.aoMap&&(_.aoMap.value=g.aoMap,_.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,_.aoMapTransform))}function a(_,g){_.diffuse.value.copy(g.color),_.opacity.value=g.opacity,g.map&&(_.map.value=g.map,t(g.map,_.mapTransform))}function o(_,g){_.dashSize.value=g.dashSize,_.totalSize.value=g.dashSize+g.gapSize,_.scale.value=g.scale}function c(_,g,R,T){_.diffuse.value.copy(g.color),_.opacity.value=g.opacity,_.size.value=g.size*R,_.scale.value=T*.5,g.map&&(_.map.value=g.map,t(g.map,_.uvTransform)),g.alphaMap&&(_.alphaMap.value=g.alphaMap,t(g.alphaMap,_.alphaMapTransform)),g.alphaTest>0&&(_.alphaTest.value=g.alphaTest)}function l(_,g){_.diffuse.value.copy(g.color),_.opacity.value=g.opacity,_.rotation.value=g.rotation,g.map&&(_.map.value=g.map,t(g.map,_.mapTransform)),g.alphaMap&&(_.alphaMap.value=g.alphaMap,t(g.alphaMap,_.alphaMapTransform)),g.alphaTest>0&&(_.alphaTest.value=g.alphaTest)}function f(_,g){_.specular.value.copy(g.specular),_.shininess.value=Math.max(g.shininess,1e-4)}function h(_,g){g.gradientMap&&(_.gradientMap.value=g.gradientMap)}function d(_,g){_.metalness.value=g.metalness,g.metalnessMap&&(_.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,_.metalnessMapTransform)),_.roughness.value=g.roughness,g.roughnessMap&&(_.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,_.roughnessMapTransform)),g.envMap&&(_.envMapIntensity.value=g.envMapIntensity)}function p(_,g,R){_.ior.value=g.ior,g.sheen>0&&(_.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),_.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(_.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,_.sheenColorMapTransform)),g.sheenRoughnessMap&&(_.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,_.sheenRoughnessMapTransform))),g.clearcoat>0&&(_.clearcoat.value=g.clearcoat,_.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(_.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,_.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(_.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===cn&&_.clearcoatNormalScale.value.negate())),g.dispersion>0&&(_.dispersion.value=g.dispersion),g.iridescence>0&&(_.iridescence.value=g.iridescence,_.iridescenceIOR.value=g.iridescenceIOR,_.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(_.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,_.iridescenceMapTransform)),g.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),g.transmission>0&&(_.transmission.value=g.transmission,_.transmissionSamplerMap.value=R.texture,_.transmissionSamplerSize.value.set(R.width,R.height),g.transmissionMap&&(_.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,_.transmissionMapTransform)),_.thickness.value=g.thickness,g.thicknessMap&&(_.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=g.attenuationDistance,_.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(_.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(_.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=g.specularIntensity,_.specularColor.value.copy(g.specularColor),g.specularColorMap&&(_.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,_.specularColorMapTransform)),g.specularIntensityMap&&(_.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,_.specularIntensityMapTransform))}function x(_,g){g.matcap&&(_.matcap.value=g.matcap)}function y(_,g){const R=e.get(g).light;_.referencePosition.value.setFromMatrixPosition(R.matrixWorld),_.nearDistance.value=R.shadow.camera.near,_.farDistance.value=R.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function wx(i,e,t,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(R,T){const w=T.program;n.uniformBlockBinding(R,w)}function l(R,T){let w=s[R.id];w===void 0&&(x(R),w=f(R),s[R.id]=w,R.addEventListener("dispose",_));const L=T.program;n.updateUBOMapping(R,L);const I=e.render.frame;r[R.id]!==I&&(d(R),r[R.id]=I)}function f(R){const T=h();R.__bindingPointIndex=T;const w=i.createBuffer(),L=R.__size,I=R.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,L,I),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,T,w),w}function h(){for(let R=0;R<o;R++)if(a.indexOf(R)===-1)return a.push(R),R;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(R){const T=s[R.id],w=R.uniforms,L=R.__cache;i.bindBuffer(i.UNIFORM_BUFFER,T);for(let I=0,C=w.length;I<C;I++){const D=Array.isArray(w[I])?w[I]:[w[I]];for(let S=0,b=D.length;S<b;S++){const N=D[S];if(p(N,I,S,L)===!0){const F=N.__offset,k=Array.isArray(N.value)?N.value:[N.value];let $=0;for(let ie=0;ie<k.length;ie++){const J=k[ie],de=y(J);typeof J=="number"||typeof J=="boolean"?(N.__data[0]=J,i.bufferSubData(i.UNIFORM_BUFFER,F+$,N.__data)):J.isMatrix3?(N.__data[0]=J.elements[0],N.__data[1]=J.elements[1],N.__data[2]=J.elements[2],N.__data[3]=0,N.__data[4]=J.elements[3],N.__data[5]=J.elements[4],N.__data[6]=J.elements[5],N.__data[7]=0,N.__data[8]=J.elements[6],N.__data[9]=J.elements[7],N.__data[10]=J.elements[8],N.__data[11]=0):(J.toArray(N.__data,$),$+=de.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,F,N.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(R,T,w,L){const I=R.value,C=T+"_"+w;if(L[C]===void 0)return typeof I=="number"||typeof I=="boolean"?L[C]=I:L[C]=I.clone(),!0;{const D=L[C];if(typeof I=="number"||typeof I=="boolean"){if(D!==I)return L[C]=I,!0}else if(D.equals(I)===!1)return D.copy(I),!0}return!1}function x(R){const T=R.uniforms;let w=0;const L=16;for(let C=0,D=T.length;C<D;C++){const S=Array.isArray(T[C])?T[C]:[T[C]];for(let b=0,N=S.length;b<N;b++){const F=S[b],k=Array.isArray(F.value)?F.value:[F.value];for(let $=0,ie=k.length;$<ie;$++){const J=k[$],de=y(J),K=w%L,ee=K%de.boundary,ae=K+ee;w+=ee,ae!==0&&L-ae<de.storage&&(w+=L-ae),F.__data=new Float32Array(de.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=w,w+=de.storage}}}const I=w%L;return I>0&&(w+=L-I),R.__size=w,R.__cache={},this}function y(R){const T={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(T.boundary=4,T.storage=4):R.isVector2?(T.boundary=8,T.storage=8):R.isVector3||R.isColor?(T.boundary=16,T.storage=12):R.isVector4?(T.boundary=16,T.storage=16):R.isMatrix3?(T.boundary=48,T.storage=48):R.isMatrix4?(T.boundary=64,T.storage=64):R.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",R),T}function _(R){const T=R.target;T.removeEventListener("dispose",_);const w=a.indexOf(T.__bindingPointIndex);a.splice(w,1),i.deleteBuffer(s[T.id]),delete s[T.id],delete r[T.id]}function g(){for(const R in s)i.deleteBuffer(s[R]);a=[],s={},r={}}return{bind:c,update:l,dispose:g}}class Mx{constructor(e={}){const{canvas:t=ig(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;const x=new Uint32Array(4),y=new Int32Array(4);let _=null,g=null;const R=[],T=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=qt,this.toneMapping=ai,this.toneMappingExposure=1;const w=this;let L=!1,I=0,C=0,D=null,S=-1,b=null;const N=new Pt,F=new Pt;let k=null;const $=new ft(0);let ie=0,J=t.width,de=t.height,K=1,ee=null,ae=null;const me=new Pt(0,0,J,de),ve=new Pt(0,0,J,de);let Re=!1;const Q=new Jh;let ue=!1,Me=!1;this.transmissionResolutionScale=1;const ge=new Nt,te=new Nt,Ce=new X,ke=new Pt,fe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Te=!1;function ht(){return D===null?K:1}let U=n;function pt(E,z){return t.getContext(E,z)}try{const E={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:f,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${bc}`),t.addEventListener("webglcontextlost",se,!1),t.addEventListener("webglcontextrestored",Ee,!1),t.addEventListener("webglcontextcreationerror",W,!1),U===null){const z="webgl2";if(U=pt(z,E),U===null)throw pt(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let $e,ze,Be,gt,Oe,P,M,G,oe,le,ne,Ue,_e,Le,rt,pe,De,Ge,qe,Ie,Se,Qe,dt,B;function ye(){$e=new Iv(U),$e.init(),Qe=new px(U,$e),ze=new Tv(U,$e,e,Qe),Be=new hx(U,$e),ze.reverseDepthBuffer&&d&&Be.buffers.depth.setReversed(!0),gt=new Ov(U),Oe=new Qy,P=new dx(U,$e,Be,Oe,ze,Qe,gt),M=new Rv(w),G=new Lv(w),oe=new Vg(U),dt=new Sv(U,oe),le=new Dv(U,oe,gt,dt),ne=new kv(U,le,oe,gt),qe=new Uv(U,ze,P),pe=new Av(Oe),Ue=new Zy(w,M,G,$e,ze,dt,pe),_e=new bx(w,Oe),Le=new tx,rt=new ox($e),Ge=new Mv(w,M,G,Be,ne,p,c),De=new ux(w,ne,ze),B=new wx(U,gt,ze,Be),Ie=new Ev(U,$e,gt),Se=new Nv(U,$e,gt),gt.programs=Ue.programs,w.capabilities=ze,w.extensions=$e,w.properties=Oe,w.renderLists=Le,w.shadowMap=De,w.state=Be,w.info=gt}ye();const Z=new yx(w,U);this.xr=Z,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const E=$e.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=$e.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(E){E!==void 0&&(K=E,this.setSize(J,de,!1))},this.getSize=function(E){return E.set(J,de)},this.setSize=function(E,z,q=!0){if(Z.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}J=E,de=z,t.width=Math.floor(E*K),t.height=Math.floor(z*K),q===!0&&(t.style.width=E+"px",t.style.height=z+"px"),this.setViewport(0,0,E,z)},this.getDrawingBufferSize=function(E){return E.set(J*K,de*K).floor()},this.setDrawingBufferSize=function(E,z,q){J=E,de=z,K=q,t.width=Math.floor(E*q),t.height=Math.floor(z*q),this.setViewport(0,0,E,z)},this.getCurrentViewport=function(E){return E.copy(N)},this.getViewport=function(E){return E.copy(me)},this.setViewport=function(E,z,q,j){E.isVector4?me.set(E.x,E.y,E.z,E.w):me.set(E,z,q,j),Be.viewport(N.copy(me).multiplyScalar(K).round())},this.getScissor=function(E){return E.copy(ve)},this.setScissor=function(E,z,q,j){E.isVector4?ve.set(E.x,E.y,E.z,E.w):ve.set(E,z,q,j),Be.scissor(F.copy(ve).multiplyScalar(K).round())},this.getScissorTest=function(){return Re},this.setScissorTest=function(E){Be.setScissorTest(Re=E)},this.setOpaqueSort=function(E){ee=E},this.setTransparentSort=function(E){ae=E},this.getClearColor=function(E){return E.copy(Ge.getClearColor())},this.setClearColor=function(){Ge.setClearColor.apply(Ge,arguments)},this.getClearAlpha=function(){return Ge.getClearAlpha()},this.setClearAlpha=function(){Ge.setClearAlpha.apply(Ge,arguments)},this.clear=function(E=!0,z=!0,q=!0){let j=0;if(E){let H=!1;if(D!==null){const he=D.texture.format;H=he===Ac||he===Tc||he===Ec}if(H){const he=D.texture.type,xe=he===Wn||he===Ki||he===Mr||he===Hs||he===Mc||he===Sc,Pe=Ge.getClearColor(),Ae=Ge.getClearAlpha(),We=Pe.r,je=Pe.g,He=Pe.b;xe?(x[0]=We,x[1]=je,x[2]=He,x[3]=Ae,U.clearBufferuiv(U.COLOR,0,x)):(y[0]=We,y[1]=je,y[2]=He,y[3]=Ae,U.clearBufferiv(U.COLOR,0,y))}else j|=U.COLOR_BUFFER_BIT}z&&(j|=U.DEPTH_BUFFER_BIT),q&&(j|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",se,!1),t.removeEventListener("webglcontextrestored",Ee,!1),t.removeEventListener("webglcontextcreationerror",W,!1),Ge.dispose(),Le.dispose(),rt.dispose(),Oe.dispose(),M.dispose(),G.dispose(),ne.dispose(),dt.dispose(),B.dispose(),Ue.dispose(),Z.dispose(),Z.removeEventListener("sessionstart",Qs),Z.removeEventListener("sessionend",kn),Fn.stop()};function se(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function Ee(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;const E=gt.autoReset,z=De.enabled,q=De.autoUpdate,j=De.needsUpdate,H=De.type;ye(),gt.autoReset=E,De.enabled=z,De.autoUpdate=q,De.needsUpdate=j,De.type=H}function W(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Ke(E){const z=E.target;z.removeEventListener("dispose",Ke),Mt(z)}function Mt(E){kt(E),Oe.remove(E)}function kt(E){const z=Oe.get(E).programs;z!==void 0&&(z.forEach(function(q){Ue.releaseProgram(q)}),E.isShaderMaterial&&Ue.releaseShaderCache(E))}this.renderBufferDirect=function(E,z,q,j,H,he){z===null&&(z=fe);const xe=H.isMesh&&H.matrixWorld.determinant()<0,Pe=co(E,z,q,j,H);Be.setMaterial(j,xe);let Ae=q.index,We=1;if(j.wireframe===!0){if(Ae=le.getWireframeAttribute(q),Ae===void 0)return;We=2}const je=q.drawRange,He=q.attributes.position;let at=je.start*We,ct=(je.start+je.count)*We;he!==null&&(at=Math.max(at,he.start*We),ct=Math.min(ct,(he.start+he.count)*We)),Ae!==null?(at=Math.max(at,0),ct=Math.min(ct,Ae.count)):He!=null&&(at=Math.max(at,0),ct=Math.min(ct,He.count));const Et=ct-at;if(Et<0||Et===1/0)return;dt.setup(H,j,Pe,q,Ae);let _t,ot=Ie;if(Ae!==null&&(_t=oe.get(Ae),ot=Se,ot.setIndex(_t)),H.isMesh)j.wireframe===!0?(Be.setLineWidth(j.wireframeLinewidth*ht()),ot.setMode(U.LINES)):ot.setMode(U.TRIANGLES);else if(H.isLine){let be=j.linewidth;be===void 0&&(be=1),Be.setLineWidth(be*ht()),H.isLineSegments?ot.setMode(U.LINES):H.isLineLoop?ot.setMode(U.LINE_LOOP):ot.setMode(U.LINE_STRIP)}else H.isPoints?ot.setMode(U.POINTS):H.isSprite&&ot.setMode(U.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)ot.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if($e.get("WEBGL_multi_draw"))ot.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const be=H._multiDrawStarts,Rt=H._multiDrawCounts,it=H._multiDrawCount,$t=Ae?oe.get(Ae).bytesPerElement:1,Sn=Oe.get(j).currentProgram.getUniforms();for(let Ft=0;Ft<it;Ft++)Sn.setValue(U,"_gl_DrawID",Ft),ot.render(be[Ft]/$t,Rt[Ft])}else if(H.isInstancedMesh)ot.renderInstances(at,Et,H.count);else if(q.isInstancedBufferGeometry){const be=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Rt=Math.min(q.instanceCount,be);ot.renderInstances(at,Et,Rt)}else ot.render(at,Et)};function Je(E,z,q){E.transparent===!0&&E.side===ei&&E.forceSinglePass===!1?(E.side=cn,E.needsUpdate=!0,Lt(E,z,q),E.side=Ti,E.needsUpdate=!0,Lt(E,z,q),E.side=ei):Lt(E,z,q)}this.compile=function(E,z,q=null){q===null&&(q=E),g=rt.get(q),g.init(z),T.push(g),q.traverseVisible(function(H){H.isLight&&H.layers.test(z.layers)&&(g.pushLight(H),H.castShadow&&g.pushShadow(H))}),E!==q&&E.traverseVisible(function(H){H.isLight&&H.layers.test(z.layers)&&(g.pushLight(H),H.castShadow&&g.pushShadow(H))}),g.setupLights();const j=new Set;return E.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const he=H.material;if(he)if(Array.isArray(he))for(let xe=0;xe<he.length;xe++){const Pe=he[xe];Je(Pe,q,H),j.add(Pe)}else Je(he,q,H),j.add(he)}),T.pop(),g=null,j},this.compileAsync=function(E,z,q=null){const j=this.compile(E,z,q);return new Promise(H=>{function he(){if(j.forEach(function(xe){Oe.get(xe).currentProgram.isReady()&&j.delete(xe)}),j.size===0){H(E);return}setTimeout(he,10)}$e.get("KHR_parallel_shader_compile")!==null?he():setTimeout(he,10)})};let Xt=null;function fn(E){Xt&&Xt(E)}function Qs(){Fn.stop()}function kn(){Fn.start()}const Fn=new ed;Fn.setAnimationLoop(fn),typeof self<"u"&&Fn.setContext(self),this.setAnimationLoop=function(E){Xt=E,Z.setAnimationLoop(E),E===null?Fn.stop():Fn.start()},Z.addEventListener("sessionstart",Qs),Z.addEventListener("sessionend",kn),this.render=function(E,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),Z.enabled===!0&&Z.isPresenting===!0&&(Z.cameraAutoUpdate===!0&&Z.updateCamera(z),z=Z.getCamera()),E.isScene===!0&&E.onBeforeRender(w,E,z,D),g=rt.get(E,T.length),g.init(z),T.push(g),te.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),Q.setFromProjectionMatrix(te),Me=this.localClippingEnabled,ue=pe.init(this.clippingPlanes,Me),_=Le.get(E,R.length),_.init(),R.push(_),Z.enabled===!0&&Z.isPresenting===!0){const he=w.xr.getDepthSensingMesh();he!==null&&Wt(he,z,-1/0,w.sortObjects)}Wt(E,z,0,w.sortObjects),_.finish(),w.sortObjects===!0&&_.sort(ee,ae),Te=Z.enabled===!1||Z.isPresenting===!1||Z.hasDepthSensing()===!1,Te&&Ge.addToRenderList(_,E),this.info.render.frame++,ue===!0&&pe.beginShadows();const q=g.state.shadowsArray;De.render(q,E,z),ue===!0&&pe.endShadows(),this.info.autoReset===!0&&this.info.reset();const j=_.opaque,H=_.transmissive;if(g.setupLights(),z.isArrayCamera){const he=z.cameras;if(H.length>0)for(let xe=0,Pe=he.length;xe<Pe;xe++){const Ae=he[xe];qn(j,H,E,Ae)}Te&&Ge.render(E);for(let xe=0,Pe=he.length;xe<Pe;xe++){const Ae=he[xe];er(_,E,Ae,Ae.viewport)}}else H.length>0&&qn(j,H,E,z),Te&&Ge.render(E),er(_,E,z);D!==null&&C===0&&(P.updateMultisampleRenderTarget(D),P.updateRenderTargetMipmap(D)),E.isScene===!0&&E.onAfterRender(w,E,z),dt.resetDefaultState(),S=-1,b=null,T.pop(),T.length>0?(g=T[T.length-1],ue===!0&&pe.setGlobalState(w.clippingPlanes,g.state.camera)):g=null,R.pop(),R.length>0?_=R[R.length-1]:_=null};function Wt(E,z,q,j){if(E.visible===!1)return;if(E.layers.test(z.layers)){if(E.isGroup)q=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(z);else if(E.isLight)g.pushLight(E),E.castShadow&&g.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Q.intersectsSprite(E)){j&&ke.setFromMatrixPosition(E.matrixWorld).applyMatrix4(te);const xe=ne.update(E),Pe=E.material;Pe.visible&&_.push(E,xe,Pe,q,ke.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||Q.intersectsObject(E))){const xe=ne.update(E),Pe=E.material;if(j&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),ke.copy(E.boundingSphere.center)):(xe.boundingSphere===null&&xe.computeBoundingSphere(),ke.copy(xe.boundingSphere.center)),ke.applyMatrix4(E.matrixWorld).applyMatrix4(te)),Array.isArray(Pe)){const Ae=xe.groups;for(let We=0,je=Ae.length;We<je;We++){const He=Ae[We],at=Pe[He.materialIndex];at&&at.visible&&_.push(E,xe,at,q,ke.z,He)}}else Pe.visible&&_.push(E,xe,Pe,q,ke.z,null)}}const he=E.children;for(let xe=0,Pe=he.length;xe<Pe;xe++)Wt(he[xe],z,q,j)}function er(E,z,q,j){const H=E.opaque,he=E.transmissive,xe=E.transparent;g.setupLightsView(q),ue===!0&&pe.setGlobalState(w.clippingPlanes,q),j&&Be.viewport(N.copy(j)),H.length>0&&Ci(H,z,q),he.length>0&&Ci(he,z,q),xe.length>0&&Ci(xe,z,q),Be.buffers.depth.setTest(!0),Be.buffers.depth.setMask(!0),Be.buffers.color.setMask(!0),Be.setPolygonOffset(!1)}function qn(E,z,q,j){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[j.id]===void 0&&(g.state.transmissionRenderTarget[j.id]=new Ai(1,1,{generateMipmaps:!0,type:$e.has("EXT_color_buffer_half_float")||$e.has("EXT_color_buffer_float")?Pr:Wn,minFilter:Hn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ut.workingColorSpace}));const he=g.state.transmissionRenderTarget[j.id],xe=j.viewport||N;he.setSize(xe.z*w.transmissionResolutionScale,xe.w*w.transmissionResolutionScale);const Pe=w.getRenderTarget();w.setRenderTarget(he),w.getClearColor($),ie=w.getClearAlpha(),ie<1&&w.setClearColor(16777215,.5),w.clear(),Te&&Ge.render(q);const Ae=w.toneMapping;w.toneMapping=ai;const We=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),g.setupLightsView(j),ue===!0&&pe.setGlobalState(w.clippingPlanes,j),Ci(E,q,j),P.updateMultisampleRenderTarget(he),P.updateRenderTargetMipmap(he),$e.has("WEBGL_multisampled_render_to_texture")===!1){let je=!1;for(let He=0,at=z.length;He<at;He++){const ct=z[He],Et=ct.object,_t=ct.geometry,ot=ct.material,be=ct.group;if(ot.side===ei&&Et.layers.test(j.layers)){const Rt=ot.side;ot.side=cn,ot.needsUpdate=!0,tr(Et,q,j,_t,ot,be),ot.side=Rt,ot.needsUpdate=!0,je=!0}}je===!0&&(P.updateMultisampleRenderTarget(he),P.updateRenderTargetMipmap(he))}w.setRenderTarget(Pe),w.setClearColor($,ie),We!==void 0&&(j.viewport=We),w.toneMapping=Ae}function Ci(E,z,q){const j=z.isScene===!0?z.overrideMaterial:null;for(let H=0,he=E.length;H<he;H++){const xe=E[H],Pe=xe.object,Ae=xe.geometry,We=j===null?xe.material:j,je=xe.group;Pe.layers.test(q.layers)&&tr(Pe,z,q,Ae,We,je)}}function tr(E,z,q,j,H,he){E.onBeforeRender(w,z,q,j,H,he),E.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),H.onBeforeRender(w,z,q,j,E,he),H.transparent===!0&&H.side===ei&&H.forceSinglePass===!1?(H.side=cn,H.needsUpdate=!0,w.renderBufferDirect(q,z,j,H,E,he),H.side=Ti,H.needsUpdate=!0,w.renderBufferDirect(q,z,j,H,E,he),H.side=ei):w.renderBufferDirect(q,z,j,H,E,he),E.onAfterRender(w,z,q,j,H,he)}function Lt(E,z,q){z.isScene!==!0&&(z=fe);const j=Oe.get(E),H=g.state.lights,he=g.state.shadowsArray,xe=H.state.version,Pe=Ue.getParameters(E,H.state,he,z,q),Ae=Ue.getProgramCacheKey(Pe);let We=j.programs;j.environment=E.isMeshStandardMaterial?z.environment:null,j.fog=z.fog,j.envMap=(E.isMeshStandardMaterial?G:M).get(E.envMap||j.environment),j.envMapRotation=j.environment!==null&&E.envMap===null?z.environmentRotation:E.envMapRotation,We===void 0&&(E.addEventListener("dispose",Ke),We=new Map,j.programs=We);let je=We.get(Ae);if(je!==void 0){if(j.currentProgram===je&&j.lightsStateVersion===xe)return Or(E,Pe),je}else Pe.uniforms=Ue.getUniforms(E),E.onBeforeCompile(Pe,w),je=Ue.acquireProgram(Pe,Ae),We.set(Ae,je),j.uniforms=Pe.uniforms;const He=j.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(He.clippingPlanes=pe.uniform),Or(E,Pe),j.needsLights=Ur(E),j.lightsStateVersion=xe,j.needsLights&&(He.ambientLightColor.value=H.state.ambient,He.lightProbe.value=H.state.probe,He.directionalLights.value=H.state.directional,He.directionalLightShadows.value=H.state.directionalShadow,He.spotLights.value=H.state.spot,He.spotLightShadows.value=H.state.spotShadow,He.rectAreaLights.value=H.state.rectArea,He.ltc_1.value=H.state.rectAreaLTC1,He.ltc_2.value=H.state.rectAreaLTC2,He.pointLights.value=H.state.point,He.pointLightShadows.value=H.state.pointShadow,He.hemisphereLights.value=H.state.hemi,He.directionalShadowMap.value=H.state.directionalShadowMap,He.directionalShadowMatrix.value=H.state.directionalShadowMatrix,He.spotShadowMap.value=H.state.spotShadowMap,He.spotLightMatrix.value=H.state.spotLightMatrix,He.spotLightMap.value=H.state.spotLightMap,He.pointShadowMap.value=H.state.pointShadowMap,He.pointShadowMatrix.value=H.state.pointShadowMatrix),j.currentProgram=je,j.uniformsList=null,je}function nr(E){if(E.uniformsList===null){const z=E.currentProgram.getUniforms();E.uniformsList=Ia.seqWithValue(z.seq,E.uniforms)}return E.uniformsList}function Or(E,z){const q=Oe.get(E);q.outputColorSpace=z.outputColorSpace,q.batching=z.batching,q.batchingColor=z.batchingColor,q.instancing=z.instancing,q.instancingColor=z.instancingColor,q.instancingMorph=z.instancingMorph,q.skinning=z.skinning,q.morphTargets=z.morphTargets,q.morphNormals=z.morphNormals,q.morphColors=z.morphColors,q.morphTargetsCount=z.morphTargetsCount,q.numClippingPlanes=z.numClippingPlanes,q.numIntersection=z.numClipIntersection,q.vertexAlphas=z.vertexAlphas,q.vertexTangents=z.vertexTangents,q.toneMapping=z.toneMapping}function co(E,z,q,j,H){z.isScene!==!0&&(z=fe),P.resetTextureUnits();const he=z.fog,xe=j.isMeshStandardMaterial?z.environment:null,Pe=D===null?w.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:Gs,Ae=(j.isMeshStandardMaterial?G:M).get(j.envMap||xe),We=j.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,je=!!q.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),He=!!q.morphAttributes.position,at=!!q.morphAttributes.normal,ct=!!q.morphAttributes.color;let Et=ai;j.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(Et=w.toneMapping);const _t=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,ot=_t!==void 0?_t.length:0,be=Oe.get(j),Rt=g.state.lights;if(ue===!0&&(Me===!0||E!==b)){const Bt=E===b&&j.id===S;pe.setState(j,E,Bt)}let it=!1;j.version===be.__version?(be.needsLights&&be.lightsStateVersion!==Rt.state.version||be.outputColorSpace!==Pe||H.isBatchedMesh&&be.batching===!1||!H.isBatchedMesh&&be.batching===!0||H.isBatchedMesh&&be.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&be.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&be.instancing===!1||!H.isInstancedMesh&&be.instancing===!0||H.isSkinnedMesh&&be.skinning===!1||!H.isSkinnedMesh&&be.skinning===!0||H.isInstancedMesh&&be.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&be.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&be.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&be.instancingMorph===!1&&H.morphTexture!==null||be.envMap!==Ae||j.fog===!0&&be.fog!==he||be.numClippingPlanes!==void 0&&(be.numClippingPlanes!==pe.numPlanes||be.numIntersection!==pe.numIntersection)||be.vertexAlphas!==We||be.vertexTangents!==je||be.morphTargets!==He||be.morphNormals!==at||be.morphColors!==ct||be.toneMapping!==Et||be.morphTargetsCount!==ot)&&(it=!0):(it=!0,be.__version=j.version);let $t=be.currentProgram;it===!0&&($t=Lt(j,z,H));let Sn=!1,Ft=!1,En=!1;const bt=$t.getUniforms(),rn=be.uniforms;if(Be.useProgram($t.program)&&(Sn=!0,Ft=!0,En=!0),j.id!==S&&(S=j.id,Ft=!0),Sn||b!==E){Be.buffers.depth.getReversed()?(ge.copy(E.projectionMatrix),rg(ge),ag(ge),bt.setValue(U,"projectionMatrix",ge)):bt.setValue(U,"projectionMatrix",E.projectionMatrix),bt.setValue(U,"viewMatrix",E.matrixWorldInverse);const zt=bt.map.cameraPosition;zt!==void 0&&zt.setValue(U,Ce.setFromMatrixPosition(E.matrixWorld)),ze.logarithmicDepthBuffer&&bt.setValue(U,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&bt.setValue(U,"isOrthographic",E.isOrthographicCamera===!0),b!==E&&(b=E,Ft=!0,En=!0)}if(H.isSkinnedMesh){bt.setOptional(U,H,"bindMatrix"),bt.setOptional(U,H,"bindMatrixInverse");const Bt=H.skeleton;Bt&&(Bt.boneTexture===null&&Bt.computeBoneTexture(),bt.setValue(U,"boneTexture",Bt.boneTexture,P))}H.isBatchedMesh&&(bt.setOptional(U,H,"batchingTexture"),bt.setValue(U,"batchingTexture",H._matricesTexture,P),bt.setOptional(U,H,"batchingIdTexture"),bt.setValue(U,"batchingIdTexture",H._indirectTexture,P),bt.setOptional(U,H,"batchingColorTexture"),H._colorsTexture!==null&&bt.setValue(U,"batchingColorTexture",H._colorsTexture,P));const Kt=q.morphAttributes;if((Kt.position!==void 0||Kt.normal!==void 0||Kt.color!==void 0)&&qe.update(H,q,$t),(Ft||be.receiveShadow!==H.receiveShadow)&&(be.receiveShadow=H.receiveShadow,bt.setValue(U,"receiveShadow",H.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(rn.envMap.value=Ae,rn.flipEnvMap.value=Ae.isCubeTexture&&Ae.isRenderTargetTexture===!1?-1:1),j.isMeshStandardMaterial&&j.envMap===null&&z.environment!==null&&(rn.envMapIntensity.value=z.environmentIntensity),Ft&&(bt.setValue(U,"toneMappingExposure",w.toneMappingExposure),be.needsLights&&ir(rn,En),he&&j.fog===!0&&_e.refreshFogUniforms(rn,he),_e.refreshMaterialUniforms(rn,j,K,de,g.state.transmissionRenderTarget[E.id]),Ia.upload(U,nr(be),rn,P)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(Ia.upload(U,nr(be),rn,P),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&bt.setValue(U,"center",H.center),bt.setValue(U,"modelViewMatrix",H.modelViewMatrix),bt.setValue(U,"normalMatrix",H.normalMatrix),bt.setValue(U,"modelMatrix",H.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){const Bt=j.uniformsGroups;for(let zt=0,Pi=Bt.length;zt<Pi;zt++){const jn=Bt[zt];B.update(jn,$t),B.bind(jn,$t)}}return $t}function ir(E,z){E.ambientLightColor.needsUpdate=z,E.lightProbe.needsUpdate=z,E.directionalLights.needsUpdate=z,E.directionalLightShadows.needsUpdate=z,E.pointLights.needsUpdate=z,E.pointLightShadows.needsUpdate=z,E.spotLights.needsUpdate=z,E.spotLightShadows.needsUpdate=z,E.rectAreaLights.needsUpdate=z,E.hemisphereLights.needsUpdate=z}function Ur(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(E,z,q){Oe.get(E.texture).__webglTexture=z,Oe.get(E.depthTexture).__webglTexture=q;const j=Oe.get(E);j.__hasExternalTextures=!0,j.__autoAllocateDepthBuffer=q===void 0,j.__autoAllocateDepthBuffer||$e.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),j.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,z){const q=Oe.get(E);q.__webglFramebuffer=z,q.__useDefaultFramebuffer=z===void 0};const ns=U.createFramebuffer();this.setRenderTarget=function(E,z=0,q=0){D=E,I=z,C=q;let j=!0,H=null,he=!1,xe=!1;if(E){const Ae=Oe.get(E);if(Ae.__useDefaultFramebuffer!==void 0)Be.bindFramebuffer(U.FRAMEBUFFER,null),j=!1;else if(Ae.__webglFramebuffer===void 0)P.setupRenderTarget(E);else if(Ae.__hasExternalTextures)P.rebindTextures(E,Oe.get(E.texture).__webglTexture,Oe.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const He=E.depthTexture;if(Ae.__boundDepthTexture!==He){if(He!==null&&Oe.has(He)&&(E.width!==He.image.width||E.height!==He.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(E)}}const We=E.texture;(We.isData3DTexture||We.isDataArrayTexture||We.isCompressedArrayTexture)&&(xe=!0);const je=Oe.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(je[z])?H=je[z][q]:H=je[z],he=!0):E.samples>0&&P.useMultisampledRTT(E)===!1?H=Oe.get(E).__webglMultisampledFramebuffer:Array.isArray(je)?H=je[q]:H=je,N.copy(E.viewport),F.copy(E.scissor),k=E.scissorTest}else N.copy(me).multiplyScalar(K).floor(),F.copy(ve).multiplyScalar(K).floor(),k=Re;if(q!==0&&(H=ns),Be.bindFramebuffer(U.FRAMEBUFFER,H)&&j&&Be.drawBuffers(E,H),Be.viewport(N),Be.scissor(F),Be.setScissorTest(k),he){const Ae=Oe.get(E.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+z,Ae.__webglTexture,q)}else if(xe){const Ae=Oe.get(E.texture),We=z;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ae.__webglTexture,q,We)}else if(E!==null&&q!==0){const Ae=Oe.get(E.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Ae.__webglTexture,q)}S=-1},this.readRenderTargetPixels=function(E,z,q,j,H,he,xe){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pe=Oe.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&xe!==void 0&&(Pe=Pe[xe]),Pe){Be.bindFramebuffer(U.FRAMEBUFFER,Pe);try{const Ae=E.texture,We=Ae.format,je=Ae.type;if(!ze.textureFormatReadable(We)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ze.textureTypeReadable(je)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=E.width-j&&q>=0&&q<=E.height-H&&U.readPixels(z,q,j,H,Qe.convert(We),Qe.convert(je),he)}finally{const Ae=D!==null?Oe.get(D).__webglFramebuffer:null;Be.bindFramebuffer(U.FRAMEBUFFER,Ae)}}},this.readRenderTargetPixelsAsync=async function(E,z,q,j,H,he,xe){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pe=Oe.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&xe!==void 0&&(Pe=Pe[xe]),Pe){const Ae=E.texture,We=Ae.format,je=Ae.type;if(!ze.textureFormatReadable(We))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ze.textureTypeReadable(je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(z>=0&&z<=E.width-j&&q>=0&&q<=E.height-H){Be.bindFramebuffer(U.FRAMEBUFFER,Pe);const He=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,He),U.bufferData(U.PIXEL_PACK_BUFFER,he.byteLength,U.STREAM_READ),U.readPixels(z,q,j,H,Qe.convert(We),Qe.convert(je),0);const at=D!==null?Oe.get(D).__webglFramebuffer:null;Be.bindFramebuffer(U.FRAMEBUFFER,at);const ct=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await sg(U,ct,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,He),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,he),U.deleteBuffer(He),U.deleteSync(ct),he}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,z=null,q=0){E.isTexture!==!0&&(Ms("WebGLRenderer: copyFramebufferToTexture function signature has changed."),z=arguments[0]||null,E=arguments[1]);const j=Math.pow(2,-q),H=Math.floor(E.image.width*j),he=Math.floor(E.image.height*j),xe=z!==null?z.x:0,Pe=z!==null?z.y:0;P.setTexture2D(E,0),U.copyTexSubImage2D(U.TEXTURE_2D,q,0,0,xe,Pe,H,he),Be.unbindTexture()};const _n=U.createFramebuffer(),is=U.createFramebuffer();this.copyTextureToTexture=function(E,z,q=null,j=null,H=0,he=null){E.isTexture!==!0&&(Ms("WebGLRenderer: copyTextureToTexture function signature has changed."),j=arguments[0]||null,E=arguments[1],z=arguments[2],he=arguments[3]||0,q=null),he===null&&(H!==0?(Ms("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),he=H,H=0):he=0);let xe,Pe,Ae,We,je,He,at,ct,Et;const _t=E.isCompressedTexture?E.mipmaps[he]:E.image;if(q!==null)xe=q.max.x-q.min.x,Pe=q.max.y-q.min.y,Ae=q.isBox3?q.max.z-q.min.z:1,We=q.min.x,je=q.min.y,He=q.isBox3?q.min.z:0;else{const Kt=Math.pow(2,-H);xe=Math.floor(_t.width*Kt),Pe=Math.floor(_t.height*Kt),E.isDataArrayTexture?Ae=_t.depth:E.isData3DTexture?Ae=Math.floor(_t.depth*Kt):Ae=1,We=0,je=0,He=0}j!==null?(at=j.x,ct=j.y,Et=j.z):(at=0,ct=0,Et=0);const ot=Qe.convert(z.format),be=Qe.convert(z.type);let Rt;z.isData3DTexture?(P.setTexture3D(z,0),Rt=U.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(P.setTexture2DArray(z,0),Rt=U.TEXTURE_2D_ARRAY):(P.setTexture2D(z,0),Rt=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,z.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,z.unpackAlignment);const it=U.getParameter(U.UNPACK_ROW_LENGTH),$t=U.getParameter(U.UNPACK_IMAGE_HEIGHT),Sn=U.getParameter(U.UNPACK_SKIP_PIXELS),Ft=U.getParameter(U.UNPACK_SKIP_ROWS),En=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,_t.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,_t.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,We),U.pixelStorei(U.UNPACK_SKIP_ROWS,je),U.pixelStorei(U.UNPACK_SKIP_IMAGES,He);const bt=E.isDataArrayTexture||E.isData3DTexture,rn=z.isDataArrayTexture||z.isData3DTexture;if(E.isDepthTexture){const Kt=Oe.get(E),Bt=Oe.get(z),zt=Oe.get(Kt.__renderTarget),Pi=Oe.get(Bt.__renderTarget);Be.bindFramebuffer(U.READ_FRAMEBUFFER,zt.__webglFramebuffer),Be.bindFramebuffer(U.DRAW_FRAMEBUFFER,Pi.__webglFramebuffer);for(let jn=0;jn<Ae;jn++)bt&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Oe.get(E).__webglTexture,H,He+jn),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Oe.get(z).__webglTexture,he,Et+jn)),U.blitFramebuffer(We,je,xe,Pe,at,ct,xe,Pe,U.DEPTH_BUFFER_BIT,U.NEAREST);Be.bindFramebuffer(U.READ_FRAMEBUFFER,null),Be.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(H!==0||E.isRenderTargetTexture||Oe.has(E)){const Kt=Oe.get(E),Bt=Oe.get(z);Be.bindFramebuffer(U.READ_FRAMEBUFFER,_n),Be.bindFramebuffer(U.DRAW_FRAMEBUFFER,is);for(let zt=0;zt<Ae;zt++)bt?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Kt.__webglTexture,H,He+zt):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Kt.__webglTexture,H),rn?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Bt.__webglTexture,he,Et+zt):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Bt.__webglTexture,he),H!==0?U.blitFramebuffer(We,je,xe,Pe,at,ct,xe,Pe,U.COLOR_BUFFER_BIT,U.NEAREST):rn?U.copyTexSubImage3D(Rt,he,at,ct,Et+zt,We,je,xe,Pe):U.copyTexSubImage2D(Rt,he,at,ct,We,je,xe,Pe);Be.bindFramebuffer(U.READ_FRAMEBUFFER,null),Be.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else rn?E.isDataTexture||E.isData3DTexture?U.texSubImage3D(Rt,he,at,ct,Et,xe,Pe,Ae,ot,be,_t.data):z.isCompressedArrayTexture?U.compressedTexSubImage3D(Rt,he,at,ct,Et,xe,Pe,Ae,ot,_t.data):U.texSubImage3D(Rt,he,at,ct,Et,xe,Pe,Ae,ot,be,_t):E.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,he,at,ct,xe,Pe,ot,be,_t.data):E.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,he,at,ct,_t.width,_t.height,ot,_t.data):U.texSubImage2D(U.TEXTURE_2D,he,at,ct,xe,Pe,ot,be,_t);U.pixelStorei(U.UNPACK_ROW_LENGTH,it),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,$t),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Sn),U.pixelStorei(U.UNPACK_SKIP_ROWS,Ft),U.pixelStorei(U.UNPACK_SKIP_IMAGES,En),he===0&&z.generateMipmaps&&U.generateMipmap(Rt),Be.unbindTexture()},this.copyTextureToTexture3D=function(E,z,q=null,j=null,H=0){return E.isTexture!==!0&&(Ms("WebGLRenderer: copyTextureToTexture3D function signature has changed."),q=arguments[0]||null,j=arguments[1]||null,E=arguments[2],z=arguments[3],H=arguments[4]||0),Ms('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,z,q,j,H)},this.initRenderTarget=function(E){Oe.get(E).__webglFramebuffer===void 0&&P.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?P.setTextureCube(E,0):E.isData3DTexture?P.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?P.setTexture2DArray(E,0):P.setTexture2D(E,0),Be.unbindTexture()},this.resetState=function(){I=0,C=0,D=null,Be.reset(),dt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return si}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=ut._getDrawingBufferColorSpace(e),t.unpackColorSpace=ut._getUnpackColorSpace()}}const rd=[.5,0];function Sx(i,e,t){var x,y;const[n,s]=i.parallax??[1,1],r=((x=i.feet)==null?void 0:x.x)??0,a=((y=i.feet)==null?void 0:y.y)??0,o=i.attach?e.x+r:r+e.x*(1-n),c=a+e.y*(1-s),f=i.attach&&i.repeatX?t:i.size[0],h=i.size[1],[d,p]=i.anchor??rd;return{cx:o+(.5-d)*f,cy:c+(.5-p)*h,w:f,h}}function Ex(i,e,t,n={index:0,rows:1}){var f;const s=i.uvRect??{x:0,y:0,width:1,height:1};let r=s.width,a=s.x;if(i.attach&&i.repeatX){const h=i.size[0]/(s.width||1),[d]=i.parallax??[1,1];r=t/h,a=s.x+(e.x*d-t/2-(((f=i.feet)==null?void 0:f.x)??0))/h}const o=n.rows||1,c=s.height/o,l=s.y+s.height-(n.index+1)*c;return{repeat:[r,c],offset:[a,l]}}const tc=(i,e=0)=>(i.sortingLayer??0)*1e6+(i.sortingOrder??0)*1e3+e;function Tx(i,{i0:e,i1:t,k0:n,k1:s,size:r=1,columns:a=4,rows:o=1,texW:c=128,texH:l=32}){const f=[],h=[],d=[],p=1/a,x=1/o,y=.5/c,_=.5/l;let g=0;for(let R=n;R<=s;R++)for(let T=e;T<=t;T++){const w=i({x:T,y:R});if(!w)continue;const L=(w-1)%a,I=Math.floor((w-1)/a),C=T*r,D=C+r,S=0-R*r,b=S-r,N=L*p+y,F=(L+1)*p-y,k=1-I*x-_,$=1-(I+1)*x+_;f.push(C,b,0,D,b,0,D,S,0,C,S,0),h.push(N,$,F,$,F,k,N,k),d.push(g,g+1,g+2,g,g+2,g+3),g+=4}return{positions:f,uvs:h,indices:d,count:g/4}}var es=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function ad(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}function Ax(i){if(i.__esModule)return i;var e=i.default;if(typeof e=="function"){var t=function n(){return this instanceof n?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};t.prototype=e.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(i).forEach(function(n){var s=Object.getOwnPropertyDescriptor(i,n);Object.defineProperty(t,n,s.get?s:{enumerable:!0,get:function(){return i[n]}})}),t}var Ic={exports:{}};Ic.exports;(function(i){(function(e,t,n){function s(c){var l=this,f=o();l.next=function(){var h=2091639*l.s0+l.c*23283064365386963e-26;return l.s0=l.s1,l.s1=l.s2,l.s2=h-(l.c=h|0)},l.c=1,l.s0=f(" "),l.s1=f(" "),l.s2=f(" "),l.s0-=f(c),l.s0<0&&(l.s0+=1),l.s1-=f(c),l.s1<0&&(l.s1+=1),l.s2-=f(c),l.s2<0&&(l.s2+=1),f=null}function r(c,l){return l.c=c.c,l.s0=c.s0,l.s1=c.s1,l.s2=c.s2,l}function a(c,l){var f=new s(c),h=l&&l.state,d=f.next;return d.int32=function(){return f.next()*4294967296|0},d.double=function(){return d()+(d()*2097152|0)*11102230246251565e-32},d.quick=d,h&&(typeof h=="object"&&r(h,f),d.state=function(){return r(f,{})}),d}function o(){var c=4022871197,l=function(f){f=String(f);for(var h=0;h<f.length;h++){c+=f.charCodeAt(h);var d=.02519603282416938*c;c=d>>>0,d-=c,d*=c,c=d>>>0,d-=c,c+=d*4294967296}return(c>>>0)*23283064365386963e-26};return l}t&&t.exports?t.exports=a:this.alea=a})(es,i)})(Ic);var Rx=Ic.exports,Dc={exports:{}};Dc.exports;(function(i){(function(e,t,n){function s(o){var c=this,l="";c.x=0,c.y=0,c.z=0,c.w=0,c.next=function(){var h=c.x^c.x<<11;return c.x=c.y,c.y=c.z,c.z=c.w,c.w^=c.w>>>19^h^h>>>8},o===(o|0)?c.x=o:l+=o;for(var f=0;f<l.length+64;f++)c.x^=l.charCodeAt(f)|0,c.next()}function r(o,c){return c.x=o.x,c.y=o.y,c.z=o.z,c.w=o.w,c}function a(o,c){var l=new s(o),f=c&&c.state,h=function(){return(l.next()>>>0)/4294967296};return h.double=function(){do var d=l.next()>>>11,p=(l.next()>>>0)/4294967296,x=(d+p)/(1<<21);while(x===0);return x},h.int32=l.next,h.quick=h,f&&(typeof f=="object"&&r(f,l),h.state=function(){return r(l,{})}),h}t&&t.exports?t.exports=a:this.xor128=a})(es,i)})(Dc);var Cx=Dc.exports,Nc={exports:{}};Nc.exports;(function(i){(function(e,t,n){function s(o){var c=this,l="";c.next=function(){var h=c.x^c.x>>>2;return c.x=c.y,c.y=c.z,c.z=c.w,c.w=c.v,(c.d=c.d+362437|0)+(c.v=c.v^c.v<<4^(h^h<<1))|0},c.x=0,c.y=0,c.z=0,c.w=0,c.v=0,o===(o|0)?c.x=o:l+=o;for(var f=0;f<l.length+64;f++)c.x^=l.charCodeAt(f)|0,f==l.length&&(c.d=c.x<<10^c.x>>>4),c.next()}function r(o,c){return c.x=o.x,c.y=o.y,c.z=o.z,c.w=o.w,c.v=o.v,c.d=o.d,c}function a(o,c){var l=new s(o),f=c&&c.state,h=function(){return(l.next()>>>0)/4294967296};return h.double=function(){do var d=l.next()>>>11,p=(l.next()>>>0)/4294967296,x=(d+p)/(1<<21);while(x===0);return x},h.int32=l.next,h.quick=h,f&&(typeof f=="object"&&r(f,l),h.state=function(){return r(l,{})}),h}t&&t.exports?t.exports=a:this.xorwow=a})(es,i)})(Nc);var Px=Nc.exports,Oc={exports:{}};Oc.exports;(function(i){(function(e,t,n){function s(o){var c=this;c.next=function(){var f=c.x,h=c.i,d,p;return d=f[h],d^=d>>>7,p=d^d<<24,d=f[h+1&7],p^=d^d>>>10,d=f[h+3&7],p^=d^d>>>3,d=f[h+4&7],p^=d^d<<7,d=f[h+7&7],d=d^d<<13,p^=d^d<<9,f[h]=p,c.i=h+1&7,p};function l(f,h){var d,p=[];if(h===(h|0))p[0]=h;else for(h=""+h,d=0;d<h.length;++d)p[d&7]=p[d&7]<<15^h.charCodeAt(d)+p[d+1&7]<<13;for(;p.length<8;)p.push(0);for(d=0;d<8&&p[d]===0;++d);for(d==8?p[7]=-1:p[d],f.x=p,f.i=0,d=256;d>0;--d)f.next()}l(c,o)}function r(o,c){return c.x=o.x.slice(),c.i=o.i,c}function a(o,c){o==null&&(o=+new Date);var l=new s(o),f=c&&c.state,h=function(){return(l.next()>>>0)/4294967296};return h.double=function(){do var d=l.next()>>>11,p=(l.next()>>>0)/4294967296,x=(d+p)/(1<<21);while(x===0);return x},h.int32=l.next,h.quick=h,f&&(f.x&&r(f,l),h.state=function(){return r(l,{})}),h}t&&t.exports?t.exports=a:this.xorshift7=a})(es,i)})(Oc);var Lx=Oc.exports,Uc={exports:{}};Uc.exports;(function(i){(function(e,t,n){function s(o){var c=this;c.next=function(){var f=c.w,h=c.X,d=c.i,p,x;return c.w=f=f+1640531527|0,x=h[d+34&127],p=h[d=d+1&127],x^=x<<13,p^=p<<17,x^=x>>>15,p^=p>>>12,x=h[d]=x^p,c.i=d,x+(f^f>>>16)|0};function l(f,h){var d,p,x,y,_,g=[],R=128;for(h===(h|0)?(p=h,h=null):(h=h+"\0",p=0,R=Math.max(R,h.length)),x=0,y=-32;y<R;++y)h&&(p^=h.charCodeAt((y+32)%h.length)),y===0&&(_=p),p^=p<<10,p^=p>>>15,p^=p<<4,p^=p>>>13,y>=0&&(_=_+1640531527|0,d=g[y&127]^=p+_,x=d==0?x+1:0);for(x>=128&&(g[(h&&h.length||0)&127]=-1),x=127,y=4*128;y>0;--y)p=g[x+34&127],d=g[x=x+1&127],p^=p<<13,d^=d<<17,p^=p>>>15,d^=d>>>12,g[x]=p^d;f.w=_,f.X=g,f.i=x}l(c,o)}function r(o,c){return c.i=o.i,c.w=o.w,c.X=o.X.slice(),c}function a(o,c){o==null&&(o=+new Date);var l=new s(o),f=c&&c.state,h=function(){return(l.next()>>>0)/4294967296};return h.double=function(){do var d=l.next()>>>11,p=(l.next()>>>0)/4294967296,x=(d+p)/(1<<21);while(x===0);return x},h.int32=l.next,h.quick=h,f&&(f.X&&r(f,l),h.state=function(){return r(l,{})}),h}t&&t.exports?t.exports=a:this.xor4096=a})(es,i)})(Uc);var Ix=Uc.exports,kc={exports:{}};kc.exports;(function(i){(function(e,t,n){function s(o){var c=this,l="";c.next=function(){var h=c.b,d=c.c,p=c.d,x=c.a;return h=h<<25^h>>>7^d,d=d-p|0,p=p<<24^p>>>8^x,x=x-h|0,c.b=h=h<<20^h>>>12^d,c.c=d=d-p|0,c.d=p<<16^d>>>16^x,c.a=x-h|0},c.a=0,c.b=0,c.c=-1640531527,c.d=1367130551,o===Math.floor(o)?(c.a=o/4294967296|0,c.b=o|0):l+=o;for(var f=0;f<l.length+20;f++)c.b^=l.charCodeAt(f)|0,c.next()}function r(o,c){return c.a=o.a,c.b=o.b,c.c=o.c,c.d=o.d,c}function a(o,c){var l=new s(o),f=c&&c.state,h=function(){return(l.next()>>>0)/4294967296};return h.double=function(){do var d=l.next()>>>11,p=(l.next()>>>0)/4294967296,x=(d+p)/(1<<21);while(x===0);return x},h.int32=l.next,h.quick=h,f&&(typeof f=="object"&&r(f,l),h.state=function(){return r(l,{})}),h}t&&t.exports?t.exports=a:this.tychei=a})(es,i)})(kc);var Dx=kc.exports,od={exports:{}};const Nx={},Ox=Object.freeze(Object.defineProperty({__proto__:null,default:Nx},Symbol.toStringTag,{value:"Module"})),Da=Ax(Ox);(function(i){(function(e,t,n){var s=256,r=6,a=52,o="random",c=n.pow(s,r),l=n.pow(2,a),f=l*2,h=s-1,d;function p(w,L,I){var C=[];L=L==!0?{entropy:!0}:L||{};var D=g(_(L.entropy?[w,T(t)]:w??R(),3),C),S=new x(C),b=function(){for(var N=S.g(r),F=c,k=0;N<l;)N=(N+k)*s,F*=s,k=S.g(1);for(;N>=f;)N/=2,F/=2,k>>>=1;return(N+k)/F};return b.int32=function(){return S.g(4)|0},b.quick=function(){return S.g(4)/4294967296},b.double=b,g(T(S.S),t),(L.pass||I||function(N,F,k,$){return $&&($.S&&y($,S),N.state=function(){return y(S,{})}),k?(n[o]=N,F):N})(b,D,"global"in L?L.global:this==n,L.state)}function x(w){var L,I=w.length,C=this,D=0,S=C.i=C.j=0,b=C.S=[];for(I||(w=[I++]);D<s;)b[D]=D++;for(D=0;D<s;D++)b[D]=b[S=h&S+w[D%I]+(L=b[D])],b[S]=L;(C.g=function(N){for(var F,k=0,$=C.i,ie=C.j,J=C.S;N--;)F=J[$=h&$+1],k=k*s+J[h&(J[$]=J[ie=h&ie+F])+(J[ie]=F)];return C.i=$,C.j=ie,k})(s)}function y(w,L){return L.i=w.i,L.j=w.j,L.S=w.S.slice(),L}function _(w,L){var I=[],C=typeof w,D;if(L&&C=="object")for(D in w)try{I.push(_(w[D],L-1))}catch{}return I.length?I:C=="string"?w:w+"\0"}function g(w,L){for(var I=w+"",C,D=0;D<I.length;)L[h&D]=h&(C^=L[h&D]*19)+I.charCodeAt(D++);return T(L)}function R(){try{var w;return d&&(w=d.randomBytes)?w=w(s):(w=new Uint8Array(s),(e.crypto||e.msCrypto).getRandomValues(w)),T(w)}catch{var L=e.navigator,I=L&&L.plugins;return[+new Date,e,I,e.screen,T(t)]}}function T(w){return String.fromCharCode.apply(0,w)}if(g(n.random(),t),i.exports){i.exports=p;try{d=Da}catch{}}else n["seed"+o]=p})(typeof self<"u"?self:es,[],Math)})(od);var Ux=od.exports,kx=Rx,Fx=Cx,Bx=Px,zx=Lx,Hx=Ix,Vx=Dx,ts=Ux;ts.alea=kx;ts.xor128=Fx;ts.xorwow=Bx;ts.xorshift7=zx;ts.xor4096=Hx;ts.tychei=Vx;var Gx=ts;const ld=ad(Gx),Wx=Object.assign({"/world/scripts/arrival.js":()=>Ne(()=>import("./arrival-CKezWjuD.js"),__vite__mapDeps([0,1,2])),"/world/scripts/bank.js":()=>Ne(()=>import("./bank-CCRVHnGB.js"),__vite__mapDeps([1,2])),"/world/scripts/camera.js":()=>Ne(()=>import("./camera-CFdr3yOD.js"),[]),"/world/scripts/db.js":()=>Ne(()=>import("./db-BH8DPWPJ.js"),__vite__mapDeps([3,2])),"/world/scripts/ground.js":()=>Ne(()=>import("./ground-b0nUTt3G.js"),[]),"/world/scripts/joust-camera.js":()=>Ne(()=>import("./joust-camera-Fg9LmHPp.js"),[]),"/world/scripts/jouster.js":()=>Ne(()=>import("./jouster-B1JpTUK7.js"),__vite__mapDeps([4,5,2,1])),"/world/scripts/lib/color.js":()=>Ne(()=>import("./color-DDSg_o2D.js"),[]),"/world/scripts/lib/econ.js":()=>Ne(()=>import("./econ-Deg9OsSu.js").then(i=>i.I),[]),"/world/scripts/look-default.js":()=>Ne(()=>import("./look-default-BibdNaYP.js"),[]),"/world/scripts/player.js":()=>Ne(()=>import("./player-CqzJShkt.js"),__vite__mapDeps([6,7,8,9])),"/world/scripts/tex-hero.js":()=>Ne(()=>import("./tex-hero-D9FSdSdV.js"),__vite__mapDeps([8,7,9])),"/world/scripts/tex-lance.js":()=>Ne(()=>import("./tex-lance-h9_Q8DQT.js"),[]),"/world/scripts/tex-meadow.js":()=>Ne(()=>import("./tex-meadow-CQRPL3Pn.js"),__vite__mapDeps([10,7,9])),"/world/scripts/tex-sky.js":()=>Ne(()=>import("./tex-sky-H7hQEGu6.js"),__vite__mapDeps([11,7,9])),"/world/scripts/tex-soil.js":()=>Ne(()=>import("./tex-soil-6tL0S4Gb.js"),__vite__mapDeps([12,7,9])),"/world/scripts/tex-tilt.js":()=>Ne(()=>import("./tex-tilt-DATa2CU9.js"),[]),"/world/scripts/tileset-ground.js":()=>Ne(()=>import("./tileset-ground-dAb9Cutk.js"),__vite__mapDeps([13,7])),"/world/scripts/tileset-sand.js":()=>Ne(()=>import("./tileset-sand-D3oqsxai.js"),[]),"/world/scripts/ui.js":()=>Ne(()=>import("./ui-CTWhMYA8.js"),__vite__mapDeps([14,5,2]))}),Jo=new Map;function qx(i){const[e,t=""]=String(i).split("?");return{path:e,params:Object.fromEntries(new URLSearchParams(t))}}function nc(i,e=jx){if(Jo.has(i))return Jo.get(i);const t=(async()=>{const{path:n,params:s}=qx(i),r=Wx["/world/"+n];if(!r)throw new Error(`no texture script ${n}`);const a=await r();if(typeof a.texture!="function")throw new Error(`${n} has no texture(ctx)`);const o=ld.alea(i);let c=null;const l={params:s,random:()=>o(),canvas(f,h){const d=e(Math.max(1,Math.round(f)),Math.max(1,Math.round(h)));return c||(c=d),d.getContext("2d",{willReadFrequently:!0})},atlas(){throw new Error(`${n}: ctx.atlas is not in this port yet`)},wang(){throw new Error(`${n}: ctx.wang is not in this port yet`)}};if(await a.texture(l),!c)throw new Error(`${n} drew no canvas`);return{canvas:c,meta:a.meta??{}}})();return Jo.set(i,t),t}function jx(i,e){const t=document.createElement("canvas");return t.width=i,t.height=e,t}const Qu=[[.4124,.3576,.1805],[.2126,.7152,.0722],[.0193,.1192,.9505]],ga=[[.8951,.2664,-.1614],[-.7502,1.7135,.0367],[.0389,-.0685,1.0296]],ef=[.3127,.329],Xx=90,tf=.04,_a=(i,e)=>i.map(t=>e[0].map((n,s)=>t.reduce((r,a,o)=>r+a*e[o][s],0))),nf=(i,e)=>i.map(t=>t[0]*e[0]+t[1]*e[1]+t[2]*e[2]);function sf([[i,e,t],[n,s,r],[a,o,c]]){const l=s*c-r*o,f=-(n*c-r*a),h=n*o-s*a,d=i*l+e*f+t*h;return[[l/d,-(e*c-t*o)/d,(e*r-t*s)/d],[f/d,(i*c-t*a)/d,-(i*r-t*n)/d],[h/d,-(i*o-e*a)/d,(i*s-e*n)/d]]}function Zo(i){const e=(.860117757+.000154118254*i+128641212e-15*i*i)/(1+.000842420235*i+708145163e-15*i*i),t=(.317398726+422806245e-13*i+420481691e-16*i*i)/(1-289741816e-13*i+161456053e-15*i*i);return[e,t]}const $x=([i,e])=>[4*i/(12*e-2*i+3),6*e/(12*e-2*i+3)],Kx=([i,e])=>[3*i/(2*i-8*e+4),2*e/(2*i-8*e+4)],rf=([i,e])=>[i/e,1,(1-i-e)/e];function Yx(i=0,e=0){if(!i&&!e)return[[1,0,0],[0,1,0],[0,0,1]];const t=6504,n=1e6/t,s=1e6/(n+Xx*i),r=Zo(t),a=Zo(s),o=$x(ef),c=a[0]-r[0],l=a[1]-r[1],f=Zo(t+10),h=f[0]-r[0],d=f[1]-r[1],p=Math.hypot(h,d)||1,x=-d/p,y=h/p,_=y>=0?1:-1,g=[o[0]+c+_*x*tf*e,o[1]+l+_*y*tf*e],R=nf(ga,rf(ef)),T=nf(ga,rf(Kx(g))),w=[[T[0]/R[0],0,0],[0,T[1]/R[1],0],[0,0,T[2]/R[2]]];return _a(sf(Qu),_a(sf(ga),_a(w,_a(ga,Qu))))}function Jx(i,e={}){const t={exposure:1,saturation:1,contrast:1,brightness:0,temperature:0,tint:0,vignette:0,roundness:2,feather:.45,vignetteColor:[0,0,0],grain:0};if(!(i!=null&&i.look))return t;const n={op:"scene"};let s=i.look({scene:n,param:(a,o)=>e[a]??o});const r=[];for(;s&&s!==n;)r.unshift(s),s=s.input;for(const a of r){if(a.op==="grade")for(const o of["exposure","saturation","contrast","brightness","temperature","tint"])a.opts[o]!=null&&(t[o]=a.opts[o]);a.op==="vignette"&&(t.vignette=a.intensity,t.roundness=a.opts.roundness??2,t.feather=a.opts.feather??.45,t.vignetteColor=a.opts.color??[0,0,0]),a.op==="grain"&&(t.grain=a.intensity)}return t}const Zx=`
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
}`;class Qx{constructor(e,t,{neutral:n=!0}={}){this.renderer=e,this.rt=new Ai(2,2,{type:Wn,colorSpace:qt,depthBuffer:!1});const s=Yx(t.temperature,t.tint),r=new et().set(s[0][0],s[0][1],s[0][2],s[1][0],s[1][1],s[1][2],s[2][0],s[2][1],s[2][2]);this.material=new On({uniforms:{tScene:{value:this.rt.texture},exposure:{value:t.exposure},contrast:{value:t.contrast},brightness:{value:t.brightness},saturation:{value:t.saturation},wb:{value:r},neutralOn:{value:n?1:0},vigI:{value:t.vignette},vigRound:{value:t.roundness},vigFeather:{value:t.feather},vigColor:{value:new X(...t.vignetteColor)},grainI:{value:t.grain},time:{value:0},res:{value:new yt(2,2)}},vertexShader:"varying vec2 vUv; void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:Zx,depthTest:!1,depthWrite:!1}),this.quad=new nn(new fi(2,2),this.material),this.quad.frustumCulled=!1,this.scene=new Yh,this.scene.add(this.quad),this.camera=new Pc(-1,1,1,-1,0,1)}setSize(e,t){this.rt.setSize(Math.max(2,e),Math.max(2,t)),this.material.uniforms.res.value.set(e,t)}render(e,t,n=0){const s=this.renderer;s.setRenderTarget(this.rt),s.clear(),s.render(e,t),s.setRenderTarget(null),this.material.uniforms.time.value=n,s.render(this.scene,this.camera)}}const af=.4,eb=Object.freeze({r:.5,g:.5,b:.5,a:1}),Na=i=>i<=.04045?i/12.92:Math.pow((i+.055)/1.055,2.4),Os=(i,e,t)=>Math.min(t,Math.max(e,i));function Ps(i,e=1){const t=String(i).trim();return t.endsWith("%")?Number.parseFloat(t)/100*e:Number.parseFloat(t)}function of(i,e,t){const n=Math.pow(i+.3963377774*e+.2158037573*t,3),s=Math.pow(i-.1055613458*e-.0638541728*t,3),r=Math.pow(i-.0894841775*e-1.291485548*t,3);return[4.0767416621*n-3.3077115913*s+.2309699292*r,-1.2684380046*n+2.6097574011*s-.3413193965*r,-.0041960863*n-.7034186147*s+1.707614701*r]}function lf([i,e,t]){const n=Math.cbrt(.4122214708*i+.5363325363*e+.0514459929*t),s=Math.cbrt(.2119034982*i+.6806995451*e+.1073969566*t),r=Math.cbrt(.0883024619*i+.2817188376*e+.6299787005*t);return[.2104542553*n+.793617785*s-.0040720468*r,1.9779984951*n-2.428592205*s+.4505937099*r,.0259040371*n+.7827717662*s-.808675766*r]}const Qo=.02,cf=1e-4,uf=i=>i.every(e=>e>=0&&e<=1),ff=i=>i.map(e=>Os(e,0,1)),hf=(i,e)=>Math.hypot(i[0]-e[0],i[1]-e[1],i[2]-e[2]);function tb(i,e,t){const n=t*Math.PI/180,s=Math.cos(n),r=Math.sin(n),a=p=>[i,p*s,p*r];let o=a(e),c=of(...o);if(uf(c))return c;let l=ff(c);if(hf(lf(l),o)<Qo)return l;let f=0,h=e,d=!0;for(;h-f>cf;){const p=(f+h)/2;if(o=a(p),c=of(...o),d&&uf(c)){f=p;continue}l=ff(c);const x=hf(lf(l),o);if(x<Qo){if(Qo-x<cf)return l;d=!1,f=p}else h=p}return l}function nb(i){const[e,t]=i.split("/"),n=e.trim().split(/[\s,]+/);if(n.length<3)return null;const s=Os(Ps(n[0]),0,1),r=Os(Ps(n[1],af),0,af),a=Ps(n[2]);if(![s,r,a].every(Number.isFinite))return null;const[o,c,l]=s>=1?[1,1,1]:s<=0?[0,0,0]:tb(s,r,a),f=t===void 0?1:Os(Ps(t),0,1);return{r:o,g:c,b:l,a:Number.isFinite(f)?f:1}}function ib(i){const e=i.length===3||i.length===4?[...i].map(n=>n+n).join(""):i;if(!/^[0-9a-f]{6}([0-9a-f]{2})?$/i.test(e))return null;const t=n=>Number.parseInt(e.slice(n,n+2),16)/255;return{r:Na(t(0)),g:Na(t(2)),b:Na(t(4)),a:e.length===8?t(6):1}}function sb(i){const e=i.split(/[\s,/]+/).filter(Boolean);if(e.length<3)return null;const t=s=>Na(Os(Ps(s,255)/255,0,1)),n={r:t(e[0]),g:t(e[1]),b:t(e[2]),a:e[3]===void 0?1:Os(Ps(e[3]),0,1)};return[n.r,n.g,n.b,n.a].every(Number.isFinite)?n:null}function df(i){const e=String(i??"").trim().toLowerCase();let t=null;return e.startsWith("#")?t=ib(e.slice(1)):e.startsWith("oklch(")&&e.endsWith(")")?t=nb(e.slice(6,-1)):/^rgba?\(/.test(e)&&e.endsWith(")")&&(t=sb(e.slice(e.indexOf("(")+1,-1))),t??{...eb}}const rb={alpha:wn,add:br,multiply:Ha,subtract:za},pf=[1,.85,.72],ab=1e3,ob=.75,lb=.95,cb=2,ub=8,fb=2,hb=3,lo=i=>{const e=String(i),t="/realm/play/";return e.startsWith("/cdn/")?t+"cdn/"+e.slice(5).replace(/\.png$/i,".webp")+"?v="+hb:e.startsWith("/art/")?t+e.slice(1):null},db=i=>String(i).replace(/\/cdn\/(value\.[0-9a-f]{64}\.(?:png|webp|mp3))/g,e=>lo(e));class pb{constructor(e,{toneMapping:t="neutral",look:n=null,scale:s=null}={}){this.renderer=new Mx({canvas:e,antialias:!1,alpha:!1,powerPreference:"high-performance"}),this.base=Math.min(devicePixelRatio||1,2),this.forced=s,this.step=0,this.gov={ms:[],sum:0,slow:0,keep:0,flips:0,sinceUp:1/0},this.renderer.setPixelRatio(this.scale),this.renderer.outputColorSpace=qt,this.renderer.toneMapping=ai,this.look=new Qx(this.renderer,n??{exposure:1,saturation:1,contrast:1,brightness:0,temperature:0,tint:0,vignette:0,roundness:2,feather:.45,vignetteColor:[0,0,0],grain:0},{neutral:t==="neutral"}),this.scene=new Yh,this.camera=new Pc(-1,1,1,-1,.1,1e3),this.camera.position.set(0,0,100),this.sprites=[],this.loader=new Qh,this.missing=[],this.t=0}worldToScreen(e){const t=new X(e.x,e.y,0).project(this.camera);return{x:(t.x+1)/2*this.cssW,y:(1-t.y)/2*this.cssH,onScreen:Math.abs(t.x)<=1&&Math.abs(t.y)<=1}}get scale(){return this.forced??this.base*pf[this.step]}resize(e,t){this.cssW=e,this.cssH=t,this.renderer.setPixelRatio(this.scale),this.renderer.setSize(e,t,!1);const n=this.renderer.getPixelRatio();this.look.setSize(Math.round(e*n),Math.round(t*n)),this.aspect=e/Math.max(1,t)}govern(e){const t=this.gov;if(this.forced!=null||!(e>0))return;if(e>250){t.ms.length=0,t.sum=0;return}if(t.ms.push(e),t.sum+=e,t.sum<ab)return;const n=[...t.ms].sort((a,o)=>a-o)[t.ms.length>>1],s=t.sum/t.ms.length;t.ms.length=0,t.sum=0,t.sinceUp++,this.refresh=Math.max(4,Math.min(this.refresh??n,n));const r=this.refresh/s;r<ob?(t.keep=0,++t.slow>=cb&&this.step<pf.length-1&&(t.slow=0,t.sinceUp<=4&&t.flips++,this.step++,this.resize(this.cssW,this.cssH))):r>lb?(t.slow=0,++t.keep>=ub&&this.step>0&&t.flips<fb&&(t.keep=0,t.sinceUp=0,this.step--,this.resize(this.cssW,this.cssH))):(t.slow=0,t.keep=0)}setSky(e){if((e==null?void 0:e.kind)!=="gradient")return;const t=df(e.horizon),n=df(e.zenith),s=new On({uniforms:{h:{value:new X(t.r,t.g,t.b)},z:{value:new X(n.r,n.g,n.b)}},vertexShader:"varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:"uniform vec3 h; uniform vec3 z; varying vec2 vUv; void main() { gl_FragColor = vec4(mix(h, z, vUv.y), 1.0); }",depthTest:!1,depthWrite:!1});this.sky=new nn(new fi(1,1),s),this.sky.renderOrder=-1e12,this.sky.frustumCulled=!1,this.scene.add(this.sky)}async picture(e,t){let n,s={};const r=lo(e);if(r)try{n=await this.loader.loadAsync(r)}catch{return this.missing.push(e),null}else{const o=await nc(e);n=new Ql(o.canvas),s=o.meta}n.colorSpace=qt;const a=(t??s.filter??(r?"linear":"pixel"))==="linear";return n.magFilter=a?ln:Gt,n.minFilter=a?Hn:Gt,n.generateMipmaps=a,n.wrapS=wr,n.wrapT=ni,{tex:n,meta:s}}async addSprite(e,t){var l,f;const n=e.sprite,s=await this.picture(n.texture,n.filter);if(!s)return null;(((l=n.uvRect)==null?void 0:l.height)??1)>1&&(s.tex.wrapT=wr);const r=new Er({map:s.tex,transparent:!0,depthTest:!1,depthWrite:!1,opacity:n.opacity??1,blending:rb[n.blend]??wn});n.tint!=null&&(r.color=Array.isArray(n.tint)?new ft(n.tint[0],n.tint[1],n.tint[2]):new ft(n.tint));const a=new nn(new fi(1,1),r);a.renderOrder=tc(n,t),a.frustumCulled=!1,this.scene.add(a);const o=e.feetPosition??{},c={id:e.id,mesh:a,meta:s.meta,s:{feet:o,attach:o.attach==="camera",size:n.size??[1,1],anchor:n.anchor,parallax:n.parallax,repeatX:!!n.repeatX,uvRect:n.uvRect},clip:((f=Object.values(e.mixer??{})[0])==null?void 0:f.clip)??s.meta.defaultAnimation??null};return this.sprites.push(c),c}async setTiles(e,t){const n=await nc(e.tileset),s=new Ql(n.canvas);s.colorSpace=qt;const r=(n.meta.filter??"pixel")==="linear";s.magFilter=s.minFilter=r?ln:Gt,s.generateMipmaps=!1;const a=e.tilesetColumns??4,o=n.canvas.width/a,c=Tx(t.tileAt,{i0:-260,i1:260,k0:0,k1:40,size:e.tileSize??1,columns:a,rows:Math.max(1,Math.round(n.canvas.height/o)),texW:n.canvas.width,texH:n.canvas.height}),l=new hi;l.setAttribute("position",new li(c.positions,3)),l.setAttribute("uv",new li(c.uvs,2)),l.setIndex(c.indices);const f=new nn(l,new Er({map:s,transparent:!0,depthTest:!1,depthWrite:!1}));f.renderOrder=tc({sortingLayer:0},0),f.frustumCulled=!1,this.scene.add(f),this.tiles=f}frame(e,t){var o;this.t+=t;const n=e.orthoSize,s=n*this.aspect,r=s*2*1.1,a=this.camera;a.left=-s,a.right=s,a.top=n,a.bottom=-n,a.position.set(e.x,e.y,100),a.updateProjectionMatrix(),this.sky&&(this.sky.position.set(e.x,e.y,-50),this.sky.scale.set(s*2.02,n*2.02,1));for(const c of this.sprites){const l=Sx(c.s,e,r);c.mesh.position.set(l.cx,l.cy,0),c.mesh.scale.set(l.w,l.h,1);const f=c.meta.rows??1,h=c.meta.fps??0,d=c.clip&&((o=c.meta.animations)==null?void 0:o[c.clip])||null,p=d&&h?d[Math.floor(this.t*h)%d.length]:0,x=Ex(c.s,e,r,{index:p,rows:f}),y=c.mesh.material.map;y.repeat.set(x.repeat[0],x.repeat[1]),y.offset.set(x.offset[0],x.offset[1])}this.look.render(this.scene,a,this.t)}}const mb=16/9,gb=1.2,el=1.9,_b=.5,mf=3,vb=.22,yb=Object.assign({"/world/scripts/arrival.js":()=>Ne(()=>import("./arrival-CKezWjuD.js"),__vite__mapDeps([0,1,2])),"/world/scripts/bank.js":()=>Ne(()=>import("./bank-CCRVHnGB.js"),__vite__mapDeps([1,2])),"/world/scripts/camera.js":()=>Ne(()=>import("./camera-CFdr3yOD.js"),[]),"/world/scripts/db.js":()=>Ne(()=>import("./db-BH8DPWPJ.js"),__vite__mapDeps([3,2])),"/world/scripts/ground.js":()=>Ne(()=>import("./ground-b0nUTt3G.js"),[]),"/world/scripts/joust-camera.js":()=>Ne(()=>import("./joust-camera-Fg9LmHPp.js"),[]),"/world/scripts/jouster.js":()=>Ne(()=>import("./jouster-B1JpTUK7.js"),__vite__mapDeps([4,5,2,1])),"/world/scripts/lib/color.js":()=>Ne(()=>import("./color-DDSg_o2D.js"),[]),"/world/scripts/lib/econ.js":()=>Ne(()=>import("./econ-Deg9OsSu.js").then(i=>i.I),[]),"/world/scripts/look-default.js":()=>Ne(()=>import("./look-default-BibdNaYP.js"),[]),"/world/scripts/player.js":()=>Ne(()=>import("./player-CqzJShkt.js"),__vite__mapDeps([6,7,8,9])),"/world/scripts/tex-hero.js":()=>Ne(()=>import("./tex-hero-D9FSdSdV.js"),__vite__mapDeps([8,7,9])),"/world/scripts/tex-lance.js":()=>Ne(()=>import("./tex-lance-h9_Q8DQT.js"),[]),"/world/scripts/tex-meadow.js":()=>Ne(()=>import("./tex-meadow-CQRPL3Pn.js"),__vite__mapDeps([10,7,9])),"/world/scripts/tex-sky.js":()=>Ne(()=>import("./tex-sky-H7hQEGu6.js"),__vite__mapDeps([11,7,9])),"/world/scripts/tex-soil.js":()=>Ne(()=>import("./tex-soil-6tL0S4Gb.js"),__vite__mapDeps([12,7,9])),"/world/scripts/tex-tilt.js":()=>Ne(()=>import("./tex-tilt-DATa2CU9.js"),[]),"/world/scripts/tileset-ground.js":()=>Ne(()=>import("./tileset-ground-dAb9Cutk.js"),__vite__mapDeps([13,7])),"/world/scripts/tileset-sand.js":()=>Ne(()=>import("./tileset-sand-D3oqsxai.js"),[]),"/world/scripts/ui.js":()=>Ne(()=>import("./ui-CTWhMYA8.js"),__vite__mapDeps([14,5,2]))});async function xb(i,e,{screenAspect:t=!1}={}){const n=await xc(i.camera),s=[].concat(n.behavior??[]),r=await Promise.all(s.map(async c=>{const l=yb["/world/"+String(c).split("#")[0]];if(!l)throw new Error(`no camera behavior ${c}`);return l()})),a={state:structuredClone(n.state??{}),target:e,feetPosition:{x:0,y:0,z:15},rotation:null},o={x:null,y:null,on:!1};return{self:a,update(c,l,f){var I,C,D;const h=.008333333333333333;let d=Math.min(c,.25);const p=t?{aspect:f}:{};for(;d>1e-6;){const S=Math.min(h,d);d-=S;const b={self:a,now:()=>l,world:{camera:p},query:()=>[],getObject:()=>null};for(const N of r)(I=N.update)==null||I.call(N,b,S)}const x=a.state.orthoSize??((C=n.state)==null?void 0:C.orthoSize)??6;let y=a.feetPosition.x,_=a.feetPosition.y;const g=e.state??{},R=g.phase&&g.phase!=="armory"&&g.phase!=="end",T=x*f,w=e.feetPosition.x,L=w<y-T+el||w>y+T-el;if(!t&&R&&f>0&&f<mb&&(f<gb||L)){const S=(D=g.hud)==null?void 0:D.oppX,b=g.dir||1;let N=w+b*(T-el);if(S!=null){const $=2*(T-_b),ie=Math.min(1,Math.max(0,($+mf-Math.abs(S-w))/mf));N+=((w+S)/2-N)*ie}const F=f<1?x*(1-2*vb):_,k=1-Math.exp(-6*Math.min(c,.25));o.on||(o.x=y,o.y=_,o.on=!0),o.x+=(N-o.x)*k,o.y+=(F-o.y)*k,y=o.x,_=o.y}else if(o.on){const S=1-Math.exp(-6*Math.min(c,.25));o.x+=(y-o.x)*S,o.y+=(_-o.y)*S,Math.abs(o.x-y)<.02&&Math.abs(o.y-_)<.02?o.on=!1:(y=o.x,_=o.y)}return{x:y,y:_,orthoSize:x}}}}const bb=1/30,wb=.25,Wa=i=>i&&typeof i=="object"&&!Array.isArray(i),Tr=i=>({x:Number((i==null?void 0:i.x)??0),y:Number((i==null?void 0:i.y)??0),z:Number((i==null?void 0:i.z)??0)}),gf={linear:i=>i,easeInQuad:i=>i*i,easeOutQuad:i=>i*(2-i),easeInOutQuad:i=>i<.5?2*i*i:-1+(4-2*i)*i,easeOutCubic:i=>1-Math.pow(1-i,3),easeInCubic:i=>i*i*i,easeInOutCubic:i=>i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2};class Mb{constructor(e,t,n){var s;this.id=e,this.room=n,this.parent=t.parent??null,this.tags=[...t.tags??[]],this.state=structuredClone(t.state??{}),this.feetPosition=Tr(t.feetPosition),this.attach=((s=t.feetPosition)==null?void 0:s.attach)??null,this.velocity=Tr(t.velocity),this.rotation={yaw:0,pitch:0,roll:0,...Wa(t.rotation)?t.rotation:{}},this.sprite=t.sprite?{...t.sprite}:null,this.physics=t.physics??null,this.visible=t.visible!==!1,this.fx=t.fx??null,this.anim={},this.audio=t.audio??null,this.scope=t.scope??null,this.audience=t.audience??null,this.lifetime=t.lifetime??null,this.bornAt=n.nowMs,this.grounded=!1,this.userId=t.userId??null,this.displayName=t.displayName??null,this.isLocal=t.isLocal??!0,this.behaviors=[].concat(t.behavior??[]),this.mods=[],this.fields={}}get body(){return Wa(this.physics)?this.physics.body:this.physics}}function ji(i){if(!i)return null;if(i._handle)return i._handle;const e=i.room,t={get id(){return i.id},get objectId(){return i.id},get tags(){return i.tags},get parent(){return i.parent},get state(){return i.state},set state(n){i.state=Wa(n)?n:{}},get feetPosition(){return i.feetPosition},set feetPosition(n){i.feetPosition=Tr(n)},get velocity(){return i.velocity},set velocity(n){i.velocity=Tr(n)},get rotation(){return i.rotation},set rotation(n){i.rotation={yaw:0,pitch:0,roll:0,...Wa(n)?n:{}}},get sprite(){return i.sprite},set sprite(n){i.sprite=n?{...n}:null},get visible(){return i.visible},set visible(n){i.visible=!!n},get fx(){return i.fx},set fx(n){i.fx=n},get anim(){return i.anim},get audio(){return i.audio},set audio(n){i.audio=n},get grounded(){return i.grounded},get userId(){return i.userId},get displayName(){return i.displayName},get isLocal(){return i.isLocal},get children(){return[...e.entities.values()].filter(n=>n.parent===i.id).map(ji)},get lifetime(){return i.lifetime},set lifetime(n){i.lifetime=n,i.bornAt=e.nowMs}};return i._handle=new Proxy(t,{get:(n,s)=>s in n?n[s]:i.fields[s],set:(n,s,r)=>(s in n?n[s]=r:i.fields[s]=r,!0),has:(n,s)=>s in n||s in i.fields,deleteProperty:(n,s)=>(delete i.fields[s],!0)}),i._handle}class Sb{constructor(e={}){this.roomId=e.roomId??"web",this.scripts=e.scripts??{},this.gravity=Tr(e.gravity??{y:-9.81}),this.groundY=e.groundY??0,this.sqlFor=e.sql??null,this.startMs=e.startMs??Date.now(),this.elapsed=0,this.clock=0,this.entities=new Map,this.timers=new Map,this.tweens=[],this.listeners=new Map,this.sinks={},this.session={},this.worldState={},this.placeState={},this.rng=ld.alea(e.seed??String(this.startMs)),this.timerSeq=0,this.timeScale=1,this.freezeUntil=0,this.slowUntil=0,this.inputs=new Map,this.inputSeq=0,this.errors=[],this.cameraState={}}get nowMs(){return this.startMs+this.clock}async loadModule(e){const t=String(e).split("#")[0],n=this.scripts["/world/"+t];if(!n)throw new Error(`no behavior ${t}`);return n()}ctxOf(e,t){const n=this,s=ji(e);return{self:s,state:s?s.state:n.worldState,player:e&&e.tags.includes("player")?s:null,session:n.session,world:{state:n.worldState,camera:n.cameraState,mode:"dev",id:n.roomId},place:{state:n.placeState,gravity:n.gravity,players:n.players().map(ji)},now:()=>n.nowMs,random:()=>n.rng(),getRoomId:()=>n.roomId,sql:n.sqlFor?n.sqlFor((e==null?void 0:e.userId)??null):null,after:(r,a,o)=>n.after(e,t,r,a,o),cancel:r=>n.timers.delete(r),emit:(r,a,o)=>n.emit(r,a,o,e),on:(r,a)=>n.on(r,a),spawn:(r,a)=>n.spawn(r,a,e),destroy:r=>n.destroy(r),getObject:r=>ji(n.entities.get(r)),query:(r={})=>n.query(r,e),worldToScreen:r=>n.worldToScreen?n.worldToScreen(r):null,log:(...r)=>console.log("[world]",...r),_room:n}}async attachBehaviors(e){e.mods=await Promise.all(e.behaviors.map(t=>this.loadModule(t)));for(const t of e.mods)this.call(e,t,"onSpawn")}call(e,t,n,...s){if(typeof(t==null?void 0:t[n])=="function")try{const r=t[n](this.ctxOf(e,t),...s);return r&&typeof r.then=="function"&&r.catch(a=>this.fault(e,n,a)),r}catch(r){this.fault(e,n,r)}}fault(e,t,n){this.errors.push({at:this.nowMs,id:e==null?void 0:e.id,hook:t,message:String((n==null?void 0:n.message)??n)}),console.error(`[world] ${(e==null?void 0:e.id)??"room"} ${t}:`,n)}spawn(e,t,n){const s=typeof e=="string"?t??{}:e??{};let r=typeof e=="string"?e:s.id??`obj-${++this.timerSeq}`;const a=s.parent?`${s.parent}/${r}`:r;this.entities.has(a)&&this.destroy(a);const o=new Mb(a,s,this);return this.entities.set(a,o),o.behaviors.length&&this.attachBehaviors(o).catch(c=>this.fault(o,"load",c)),a}destroy(e){for(const t of[].concat(e??[])){const n=this.entities.get(t);if(n){for(const s of[...this.entities.values()])s.parent===t&&this.destroy(s.id);for(const s of n.mods)this.call(n,s,"onDestroy");this.entities.delete(t);for(const[s,r]of this.timers)r.owner===t&&this.timers.delete(s)}}}query(e,t){let n=[...this.entities.values()];if(e.ignoreSelf!==!1&&t&&(n=n.filter(s=>s!==t)),e.tags&&(n=n.filter(s=>e.tags.every(r=>s.tags.includes(r)))),e.radius!=null&&t){const s=this.worldPosition(t);n=n.filter(r=>{const a=this.worldPosition(r);return Math.hypot(a.x-s.x,a.y-s.y,a.z-s.z)<=e.radius})}return e.select==="ids"?n.map(s=>s.id):n.map(ji)}players(){return[...this.entities.values()].filter(e=>e.tags.includes("player"))}after(e,t,n,s,r){const a=`t${++this.timerSeq}`;return this.timers.set(a,{owner:(e==null?void 0:e.id)??null,mod:t,name:s,payload:r,due:this.clock+Math.max(0,n)*1e3}),a}on(e,t){return this.listeners.has(e)||this.listeners.set(e,new Set),this.listeners.get(e).add(t),()=>{var n;return(n=this.listeners.get(e))==null?void 0:n.delete(t)}}emit(e,t,n,s){var r,a;e==="hitstop"&&(this.freezeUntil=Math.max(this.freezeUntil,this.clock+((t==null?void 0:t.duration)??0)*1e3)),e==="slowMo"&&(this.slowUntil=this.clock+((t==null?void 0:t.duration)??0)*1e3,this.slowScale=(t==null?void 0:t.scale)??.4),(a=(r=this.sinks)[e])==null||a.call(r,t,n,s);for(const o of this.listeners.get(e)??[])try{o(t,n)}catch(c){this.fault(s,"on:"+e,c)}}animate(e,t,n={}){const s=this.entities.get(typeof e=="string"?e:e==null?void 0:e.id);if(!s)return;const r=Object.entries(t).map(([a,o])=>{const c=a.split("."),l=()=>c.reduce((h,d)=>h==null?void 0:h[d],s);let f=Array.isArray(o)?o.slice():[l(),o];return f=f.map((h,d)=>typeof h=="string"&&/^[+-]=/.test(h)?Number(d?f[d-1]:l())+Number(h.replace("=","")):Number(h)),{keys:c,pts:f}});this.tweens.push({e:s,tracks:r,t0:this.elapsed+(n.delay??0)*1e3,dur:Math.max(1,(n.duration??1)*1e3),ease:gf[n.easing]??gf.linear})}stepTweens(){this.tweens=this.tweens.filter(e=>{if(!this.entities.has(e.e.id))return!1;if(this.elapsed<e.t0)return!0;const t=Math.min(1,(this.elapsed-e.t0)/e.dur),n=e.ease(t);for(const s of e.tracks){const r=s.pts.length-1,a=n*r,o=Math.min(r-1,Math.floor(a)),c=a-o,l=r===0?s.pts[0]:s.pts[o]+(s.pts[o+1]-s.pts[o])*c,f=s.keys.slice(0,-1).reduce((h,d)=>h[d]??(h[d]={}),e.e);f[s.keys[s.keys.length-1]]=l}return t<1})}worldPosition(e){const t={...e.feetPosition};let n=e.parent?this.entities.get(e.parent):null;for(;n;)t.x+=n.feetPosition.x,t.y+=n.feetPosition.y,t.z+=n.feetPosition.z,n=n.parent?this.entities.get(n.parent):null;return t}advance(e){let t=Math.max(0,e)*1e3,n=Math.min(Math.max(0,e),wb);for(;n>1e-6;){const s=Math.min(n,bb);n-=s,t-=s*1e3,this.clock+=s*1e3;const r=this.clock<this.freezeUntil,a=r?0:this.clock<this.slowUntil?this.slowScale:1;this.tick(s*a)}t>0&&(this.clock+=t)}tick(e){this.elapsed+=e*1e3;const t=[...this.entities.values()];for(const n of t){const s=this.inputs.get(n.id);if(s){const r=s();Object.keys(r.pressed).length&&this.inputSeq++;for(const a of n.mods)this.call(n,a,"onInput",r)}}for(const n of t)if(this.entities.has(n.id))for(const s of n.mods)this.call(n,s,"update",e);for(const n of[...this.entities.values()])(n.body==="character"||n.body==="dynamic")&&(n.feetPosition={x:n.feetPosition.x+n.velocity.x*e,y:n.feetPosition.y+n.velocity.y*e,z:n.feetPosition.z},n.grounded=!1,n.feetPosition.y<=this.groundY&&(n.feetPosition.y=this.groundY,n.velocity.y<0&&(n.velocity={...n.velocity,y:0}),n.grounded=!0)),n.lifetime!=null&&this.nowMs-n.bornAt>=n.lifetime*1e3&&this.destroy(n.id);this.stepTweens();for(const[n,s]of[...this.timers]){if(s.due>this.clock)continue;this.timers.delete(n);const r=s.owner?this.entities.get(s.owner):null;s.owner&&!r||this.call(r,s.mod,s.name,s.payload)}}}const Eb=.1,cd=-.6,ud=tt.map_fragment.replace("texture2D( map, vMapUv )",`texture2D( map, vMapUv, ${cd.toFixed(2)} )`);ud.includes(cd.toFixed(2))||console.warn("[justa] three's map chunk changed: the mip bias is off");const Tb={alpha:wn,add:br,multiply:Ha,subtract:za};class Ab{constructor(e,t,{hideBelow:n=null}={}){this.stage=e,this.room=t,this.hideBelow=n,this.views=new Map,this.sources=new Map,this.order=new Map,this.seq=0,this.loader=new Qh}source(e,t){const n=e+"|"+(t??"");return this.sources.has(n)||this.sources.set(n,(async()=>{const s=lo(e);let r,a={};if(s)r=await this.loader.loadAsync(s);else{const c=await nc(e);r=new Ql(c.canvas),a=c.meta}r.colorSpace=qt;const o=(t??a.filter??(s?"linear":"pixel"))==="linear";return r.magFilter=o?ln:Gt,r.minFilter=o?Hn:Gt,r.generateMipmaps=o,{tex:r,meta:a}})().catch(s=>(console.warn("[justa] picture",e,(s==null?void 0:s.message)??s),null))),this.sources.get(n)}view(e){let t=this.views.get(e.id);if(!t){const n=new un,s=new Er({transparent:!0,depthTest:!1,depthWrite:!1,visible:!1});s.onBeforeCompile=a=>{a.fragmentShader=a.fragmentShader.replace("#include <map_fragment>",ud)},s.customProgramCacheKey=()=>"sprite-bias";const r=new nn(new fi(1,1),s);r.frustumCulled=!1,n.add(r),this.stage.scene.add(n),t={pivot:n,mesh:r,ref:null,pending:null,seq:++this.seq},this.views.set(e.id,t)}return t}setTexture(e,t){const n=t.texture,s=n+"|"+(t.filter??"");e.ref!==s&&(e.ref=s,e.pending=s,this.source(n,t.filter).then(r=>{var o;if(e.pending!==s||!r)return;const a=r.tex.clone();a.wrapS=a.wrapT=ni,a.needsUpdate=!0,(o=e.mesh.material.map)==null||o.dispose(),e.mesh.material.map=a,e.mesh.material.needsUpdate=!0,e.meta=r.meta,this.stage.renderer.initTexture(a)}))}sync(){var t,n,s,r,a,o;const e=new Set;for(const c of this.room.entities.values()){const l=c.sprite;if(!l||!l.texture||Math.max(((t=l.size)==null?void 0:t[0])??1,((n=l.size)==null?void 0:n[1])??1)<Eb)continue;e.add(c.id);const f=this.view(c);this.setTexture(f,l);const h=f.mesh.material.map,d=((s=l.size)==null?void 0:s[0])??1,p=((r=l.size)==null?void 0:r[1])??1,[x,y]=l.anchor??rd,_=this.room.worldPosition(c);f.pivot.position.set(_.x,_.y,0),f.pivot.rotation.z=(((a=c.rotation)==null?void 0:a.roll)??0)*Math.PI/180,f.mesh.position.set((.5-x)*d,(.5-y)*p,0),f.mesh.scale.set(d,p,1);const g=l.uvRect??{x:0,y:0,width:1,height:1};if(h){const T=!!l.flipX,w=!!l.flipY;h.repeat.set(T?-g.width:g.width,w?-g.height:g.height),h.offset.set(T?g.x+g.width:g.x,w?g.y+g.height:g.y)}const R=f.mesh.material;R.visible=!!h&&c.visible!==!1&&(l.opacity??1)>0&&!(this.hideBelow!=null&&(l.sortingLayer??0)<this.hideBelow),R.opacity=l.opacity??1,R.blending=Tb[l.blend]??wn,l.tint!=null?R.color.set(Array.isArray(l.tint)?new ft(l.tint[0],l.tint[1],l.tint[2]):new ft(l.tint)):R.color.set(16777215),f.mesh.renderOrder=tc(l,f.seq%1e3)+(_.z??0)*10}for(const[c,l]of this.views)e.has(c)||(this.stage.scene.remove(l.pivot),(o=l.mesh.material.map)==null||o.dispose(),l.mesh.material.dispose(),l.mesh.geometry.dispose(),this.views.delete(c))}}const _f={space:["Space"],enter:["Enter","NumpadEnter"],shift:["ShiftLeft","ShiftRight"],escape:["Escape"],tab:["Tab"]};function tl(i){const e=String(i);return _f[e.toLowerCase()]?_f[e.toLowerCase()]:/^[a-z]$/i.test(e)?["Key"+e.toUpperCase()]:/^[0-9]$/.test(e)?["Digit"+e]:[e]}class Rb{constructor(e={}){this.actions=e.actions??{},this.axesDef=e.axes??{},this.held=new Set,this.pressed=new Set,this.released=new Set,this.data={},this.at={},this.keys=new Set,this.byCode=new Map;for(const[t,n]of Object.entries(this.actions))for(const s of[].concat((n==null?void 0:n.keys)??[]))for(const r of tl(s))this.byCode.set(r,t)}action(e,t,{down:n=null,at:s=null}={}){if(n===!1){this.held.delete(e),this.released.add(e);return}this.pressed.has(e)||(this.at[e]=s??performance.now()),this.pressed.add(e),t!==void 0&&(this.data[e]=t),n===!0&&this.held.add(e)}axes(){const e={};for(const[t,n]of Object.entries(this.axesDef)){const s=String((n==null?void 0:n.keys)??"").split("/");let r=0;for(let a=0;a+1<s.length;a+=2)tl(s[a]).some(o=>this.keys.has(o))&&(r-=1),tl(s[a+1]).some(o=>this.keys.has(o))&&(r+=1);e[t]=Math.max(-1,Math.min(1,r))}return e}frame(){const e={pressed:Object.fromEntries([...this.pressed].map(t=>[t,!0])),released:Object.fromEntries([...this.released].map(t=>[t,!0])),held:Object.fromEntries([...this.held].map(t=>[t,!0])),actionData:this.data,axes:this.axes(),pressedAt:this.at};return this.pressed.clear(),this.released.clear(),this.data={},this.at={},e}bind(e){const t=s=>{var r;return/^(INPUT|TEXTAREA|SELECT)$/.test(((r=s.target)==null?void 0:r.tagName)??"")};addEventListener("keydown",s=>{if(t(s))return;this.keys.add(s.code);const r=this.byCode.get(s.code)??this.byCode.get(s.key);r&&!s.repeat&&(this.action(r,void 0,{down:!0,at:s.timeStamp}),s.preventDefault())}),addEventListener("keyup",s=>{this.keys.delete(s.code);const r=this.byCode.get(s.code)??this.byCode.get(s.key);r&&this.action(r,void 0,{down:!1})});const n=Object.entries(this.actions).filter(([,s])=>(s==null?void 0:s.mouse)==="left").map(([s])=>s);e.addEventListener("pointerdown",s=>{if(s.button===0)for(const r of n)this.action(r,void 0,{down:!0,at:s.timeStamp})}),e.addEventListener("pointerup",()=>{for(const s of n)this.action(s,void 0,{down:!1})}),addEventListener("blur",()=>{this.keys.clear(),this.held.clear()})}}var vf=11;function Cb(i,e){var t=e.attributes,n,s,r,a,o;if(!(e.nodeType===vf||i.nodeType===vf)){for(var c=t.length-1;c>=0;c--)n=t[c],s=n.name,r=n.namespaceURI,a=n.value,r?(s=n.localName||s,o=i.getAttributeNS(r,s),o!==a&&(n.prefix==="xmlns"&&(s=n.name),i.setAttributeNS(r,s,a))):(o=i.getAttribute(s),o!==a&&i.setAttribute(s,a));for(var l=i.attributes,f=l.length-1;f>=0;f--)n=l[f],s=n.name,r=n.namespaceURI,r?(s=n.localName||s,e.hasAttributeNS(r,s)||i.removeAttributeNS(r,s)):e.hasAttribute(s)||i.removeAttribute(s)}}var va,Pb="http://www.w3.org/1999/xhtml",sn=typeof document>"u"?void 0:document,Lb=!!sn&&"content"in sn.createElement("template"),Ib=!!sn&&sn.createRange&&"createContextualFragment"in sn.createRange();function Db(i){var e=sn.createElement("template");return e.innerHTML=i,e.content.childNodes[0]}function Nb(i){va||(va=sn.createRange(),va.selectNode(sn.body));var e=va.createContextualFragment(i);return e.childNodes[0]}function Ob(i){var e=sn.createElement("body");return e.innerHTML=i,e.childNodes[0]}function Ub(i){return i=i.trim(),Lb?Db(i):Ib?Nb(i):Ob(i)}function ya(i,e){var t=i.nodeName,n=e.nodeName,s,r;return t===n?!0:(s=t.charCodeAt(0),r=n.charCodeAt(0),s<=90&&r>=97?t===n.toUpperCase():r<=90&&s>=97?n===t.toUpperCase():!1)}function kb(i,e){return!e||e===Pb?sn.createElement(i):sn.createElementNS(e,i)}function Fb(i,e){for(var t=i.firstChild;t;){var n=t.nextSibling;e.appendChild(t),t=n}return e}function nl(i,e,t){i[t]!==e[t]&&(i[t]=e[t],i[t]?i.setAttribute(t,""):i.removeAttribute(t))}var yf={OPTION:function(i,e){var t=i.parentNode;if(t){var n=t.nodeName.toUpperCase();n==="OPTGROUP"&&(t=t.parentNode,n=t&&t.nodeName.toUpperCase()),n==="SELECT"&&!t.hasAttribute("multiple")&&(i.hasAttribute("selected")&&!e.selected&&(i.setAttribute("selected","selected"),i.removeAttribute("selected")),t.selectedIndex=-1)}nl(i,e,"selected")},INPUT:function(i,e){nl(i,e,"checked"),nl(i,e,"disabled"),i.value!==e.value&&(i.value=e.value),e.hasAttribute("value")||i.removeAttribute("value")},TEXTAREA:function(i,e){var t=e.value;i.value!==t&&(i.value=t);var n=i.firstChild;if(n){var s=n.nodeValue;if(s==t||!t&&s==i.placeholder)return;n.nodeValue=t}},SELECT:function(i,e){if(!e.hasAttribute("multiple")){for(var t=-1,n=0,s=i.firstChild,r,a;s;)if(a=s.nodeName&&s.nodeName.toUpperCase(),a==="OPTGROUP")r=s,s=r.firstChild,s||(s=r.nextSibling,r=null);else{if(a==="OPTION"){if(s.hasAttribute("selected")){t=n;break}n++}s=s.nextSibling,!s&&r&&(s=r.nextSibling,r=null)}i.selectedIndex=t}}},hr=1,xf=11,bf=3,wf=8;function xi(){}function Bb(i){if(i)return i.getAttribute&&i.getAttribute("id")||i.id}function zb(i){return function(t,n,s){if(s||(s={}),typeof n=="string")if(t.nodeName==="#document"||t.nodeName==="HTML"){var r=n;n=sn.createElement("html"),n.innerHTML=r}else if(t.nodeName==="BODY"){var a=n;n=sn.createElement("html"),n.innerHTML=a;var o=n.querySelector("body");o&&(n=o)}else n=Ub(n);else n.nodeType===xf&&(n=n.firstElementChild);var c=s.getNodeKey||Bb,l=s.onBeforeNodeAdded||xi,f=s.onNodeAdded||xi,h=s.onBeforeElUpdated||xi,d=s.onElUpdated||xi,p=s.onBeforeNodeDiscarded||xi,x=s.onNodeDiscarded||xi,y=s.onBeforeElChildrenUpdated||xi,_=s.skipFromChildren||xi,g=s.addChild||function(ee,ae){return ee.appendChild(ae)},R=s.childrenOnly===!0,T=Object.create(null),w=[];function L(ee){w.push(ee)}function I(ee,ae){if(ee.nodeType===hr)for(var me=ee.firstChild;me;){var ve=void 0;ae&&(ve=c(me))?L(ve):(x(me),me.firstChild&&I(me,ae)),me=me.nextSibling}}function C(ee,ae,me){p(ee)!==!1&&(ae&&ae.removeChild(ee),x(ee),I(ee,me))}function D(ee){if(ee.nodeType===hr||ee.nodeType===xf)for(var ae=ee.firstChild;ae;){var me=c(ae);me&&(T[me]=ae),D(ae),ae=ae.nextSibling}}D(t);function S(ee){f(ee);for(var ae=ee.firstChild;ae;){var me=ae.nextSibling,ve=c(ae);if(ve){var Re=T[ve];Re&&ya(ae,Re)?(ae.parentNode.replaceChild(Re,ae),N(Re,ae)):S(ae)}else S(ae);ae=me}}function b(ee,ae,me){for(;ae;){var ve=ae.nextSibling;(me=c(ae))?L(me):C(ae,ee,!0),ae=ve}}function N(ee,ae,me){var ve=c(ae);if(ve&&delete T[ve],!me){var Re=h(ee,ae);if(Re===!1||(Re instanceof HTMLElement&&(ee=Re,D(ee)),i(ee,ae),d(ee),y(ee,ae)===!1))return}ee.nodeName!=="TEXTAREA"?F(ee,ae):yf.TEXTAREA(ee,ae)}function F(ee,ae){var me=_(ee,ae),ve=ae.firstChild,Re=ee.firstChild,Q,ue,Me,ge,te;e:for(;ve;){for(ge=ve.nextSibling,Q=c(ve);!me&&Re;){if(Me=Re.nextSibling,ve.isSameNode&&ve.isSameNode(Re)){ve=ge,Re=Me;continue e}ue=c(Re);var Ce=Re.nodeType,ke=void 0;if(Ce===ve.nodeType&&(Ce===hr?(Q?Q!==ue&&((te=T[Q])?Me===te?ke=!1:(ee.insertBefore(te,Re),ue?L(ue):C(Re,ee,!0),Re=te,ue=c(Re)):ke=!1):ue&&(ke=!1),ke=ke!==!1&&ya(Re,ve),ke&&N(Re,ve)):(Ce===bf||Ce==wf)&&(ke=!0,Re.nodeValue!==ve.nodeValue&&(Re.nodeValue=ve.nodeValue))),ke){ve=ge,Re=Me;continue e}ue?L(ue):C(Re,ee,!0),Re=Me}if(Q&&(te=T[Q])&&ya(te,ve))me||g(ee,te),N(te,ve);else{var fe=l(ve);fe!==!1&&(fe&&(ve=fe),ve.actualize&&(ve=ve.actualize(ee.ownerDocument||sn)),g(ee,ve),S(ve))}ve=ge,Re=Me}b(ee,Re,ue);var Te=yf[ee.nodeName];Te&&Te(ee,ae)}var k=t,$=k.nodeType,ie=n.nodeType;if(!R){if($===hr)ie===hr?ya(t,n)||(x(t),k=Fb(t,kb(n.nodeName,n.namespaceURI))):k=n;else if($===bf||$===wf){if(ie===$)return k.nodeValue!==n.nodeValue&&(k.nodeValue=n.nodeValue),k;k=n}}if(k===n)x(t);else{if(n.isSameNode&&n.isSameNode(k))return;if(N(k,n,R),w)for(var J=0,de=w.length;J<de;J++){var K=T[w[J]];K&&C(K,K.parentNode,!1)}}return!R&&k!==t&&t.parentNode&&(k.actualize&&(k=k.actualize(t.ownerDocument||sn)),t.parentNode.replaceChild(k,t)),k}}var Hb=zb(Cb);const Vb=30,Gb=`<style id="hud-util">
:root{--spawn-chrome-reservation-right-inset:0px;--spawn-chrome-reservation-right-top:0px;--spawn-chrome-reservation-right-height:0px}
#tome-ui-container .fixed{position:fixed}#tome-ui-container .absolute{position:absolute}#tome-ui-container .inset-0{inset:0}
#tome-ui-container .pointer-events-none{pointer-events:none}#tome-ui-container .pointer-events-auto{pointer-events:auto}
</style>`;class Wb{constructor({ui:e,room:t,player:n,input:s,toScreen:r,root:a=document.body}){var c;this.ui=e,this.room=t,this.player=n,this.input=s,this.toScreen=r,a.insertAdjacentHTML("beforeend",Gb),this.container=document.createElement("div"),this.container.id="tome-ui-container",this.container.style.cssText="position:fixed;inset:0;pointer-events:none;z-index:20",this.mount=document.createElement("div"),this.mount.id="tome-game-mount",this.mount.style.cssText="position:fixed;inset:0;pointer-events:none;z-index:21",a.append(this.container,this.mount),this.last=0,this.failed=!1,this.born=new WeakMap,this.paintedAt=t.nowMs;for(const[l,f]of Object.entries(e))l!=="default"&&l!=="onMount"&&l!=="onDestroy"&&typeof f=="function"&&(window[l]=f);window.sendAction=(l,f,h={})=>{s.action(l,f,{at:performance.now(),...h}),h.down==null&&setTimeout(()=>s.action(l,void 0,{down:!1}),0)},window.sendAxis=(l,f)=>{s.sentAxes={...s.sentAxes??{},[l]:f}},window.openLink=l=>window.open(l,"_blank","noopener");const o=this.handle();try{(c=e.onMount)==null||c.call(e,this.mount,o)}catch(l){console.error("[hud] onMount",l)}}alignAnimations(){var t;const e=this.room.nowMs;for(const n of document.getAnimations()){const s=(t=n.effect)==null?void 0:t.target;if(!s||!this.container.contains(s)||!(n instanceof CSSAnimation))continue;let r=this.born.get(n);r==null&&(r=this.paintedAt,this.born.set(n,r)),n.playState!=="paused"&&n.pause(),n.currentTime=e-r}}handle(){const e=this.player;return{get state(){return e.state},get id(){return e.id},get displayName(){return e.displayName},get userId(){return e.userId}}}frame(e){if(e-this.last>=1e3/Vb||this.room.inputSeq!==this.seenSeq){this.last=e,this.seenSeq=this.room.inputSeq,this.paintedAt=this.room.nowMs;const t={now:()=>this.room.nowMs,self:this.handle(),session:this.room.session,world:{engine:{ui:{referenceHeight:1080}}}};let n;try{n=this.ui.default(t,this.handle()),this.failed=!1}catch(s){this.failed||console.error("[hud] render",s),this.failed=!0,n=""}Hb(this.container,`<div id="tome-ui-container">${db(n)}</div>`,{childrenOnly:!0,onBeforeElUpdated:(s,r)=>s===document.activeElement&&/^(INPUT|SELECT|TEXTAREA)$/.test(s.tagName)?!1:(s.tagName==="INPUT"&&(s.type==="radio"||s.type==="checkbox")&&(s.checked=r.hasAttribute("checked")),!0)})}this.alignAnimations();for(const t of this.container.querySelectorAll("[data-world-anchor]")){const n=this.room.entities.get(t.getAttribute("data-world-anchor"));if(!n)continue;const[s,r,a]=(t.getAttribute("data-anchor-offset")??"0 0 0").split(/\s+/).map(Number),o=this.room.worldPosition(n),c=this.toScreen({x:o.x+(s||0),y:o.y+(r||0),z:o.z+(a||0)});c&&(t.style.left=c.x.toFixed(1)+"px",t.style.top=c.y.toFixed(1)+"px")}}}class qb{constructor(e={}){this.map=e,this.buffers=new Map,this.loops=[];try{this.ctx=new AudioContext}catch(s){console.warn("[audio] no AudioContext",(s==null?void 0:s.message)??s),this.ctx=null;return}if(this.master=this.ctx.createGain(),this.master.connect(this.ctx.destination),new URLSearchParams(location.search).has("mute")&&(this.master.gain.value=0),this.music=this.ctx.createGain(),this.music.connect(this.master),this.ctx.state!=="running"){const s=()=>{this.ctx.resume().then(()=>{if(this.ctx.state==="running")for(const r of["pointerdown","keydown","touchend"])removeEventListener(r,s,!0)},()=>{})};for(const r of["pointerdown","keydown","touchend"])addEventListener(r,s,!0);this.ctx.resume().catch(()=>{})}const t=()=>{this.ctx.suspend().catch(()=>{})},n=()=>{document.visibilityState==="visible"&&this.ctx.resume().catch(()=>{})};addEventListener("pagehide",t),addEventListener("freeze",t),addEventListener("pageshow",s=>{s.persisted&&n()}),addEventListener("resume",n),document.addEventListener("visibilitychange",()=>document.visibilityState==="hidden"?t():n())}get running(){var e;return((e=this.ctx)==null?void 0:e.state)==="running"}fileOf(e){return e in this.map?this.map[e]:e}async buffer(e){const t=this.fileOf(e);if(!t||!this.ctx)return null;if(!this.buffers.has(t)){const n=lo(t)??t;this.buffers.set(t,fetch(n).then(s=>{if(!s.ok)throw new Error(s.status);return s.arrayBuffer()}).then(s=>this.ctx.decodeAudioData(s)).catch(s=>(console.warn("[audio]",t,(s==null?void 0:s.message)??s),null)))}return this.buffers.get(t)}async play({clip:e,volume:t=.8,pitch:n=1}={}){if(!this.running||!e)return;const s=await this.buffer(e);if(!s)return;const r=this.ctx.createBufferSource(),a=this.ctx.createGain();r.buffer=s,r.playbackRate.value=n,a.gain.value=t,r.connect(a),a.connect(this.master),r.start()}async loop(e){const t=await this.buffer(e.clip);if(!t)return;const n=this.ctx.createBufferSource(),s=this.ctx.createGain();n.buffer=t,n.loop=e.loop!==!1,s.gain.value=e.gain??1,n.connect(s),s.connect(e.bus==="Music"?this.music:this.master),n.start(),this.loops.push(n)}}var fd={exports:{}};(function(i,e){var t=void 0,n=function(s){return t||(t=new Promise(function(r,a){var o=typeof s<"u"?s:{},c=o.onAbort;o.onAbort=function(u){a(new Error(u)),c&&c(u)},o.postRun=o.postRun||[],o.postRun.push(function(){r(o)}),i=void 0;var l;l||(l=typeof o<"u"?o:{});var f=typeof window=="object",h=typeof importScripts=="function",d=typeof process=="object"&&typeof process.versions=="object"&&typeof process.versions.node=="string";l.onRuntimeInitialized=function(){function u(V,ce){switch(typeof ce){case"boolean":Hd(V,ce?1:0);break;case"number":Fd(V,ce);break;case"string":Bd(V,ce,-1,-1);break;case"object":if(ce===null)qc(V);else if(ce.length!=null){var Fe=Fr(ce,kr);zd(V,Fe,ce.length,-1),zr(Fe)}else Vr(V,"Wrong API use : tried to return a value of an unknown type ("+ce+").",-1);break;default:qc(V)}}function m(V,ce){for(var Fe=[],Ye=0;Ye<V;Ye+=1){var st=U(ce+4*Ye,"i32"),wt=Dd(st);if(wt===1||wt===2)st=kd(st);else if(wt===3)st=Od(st);else if(wt===4){wt=st,st=Nd(wt),wt=Ud(wt);for(var Tn=new Uint8Array(st),vn=0;vn<st;vn+=1)Tn[vn]=S[wt+vn];st=Tn}else st=null;Fe.push(st)}return Fe}function v(V,ce){this.Ka=V,this.db=ce,this.Ia=1,this.eb=[]}function A(V,ce){if(this.db=ce,ce=Ue(V)+1,this.Xa=fo(ce),this.Xa===null)throw Error("Unable to allocate memory for the SQL string");_e(V,b,this.Xa,ce),this.cb=this.Xa,this.Ta=this.hb=null}function O(V){if(this.filename="dbfile_"+(4294967295*Math.random()>>>0),V!=null){var ce=this.filename,Fe="/",Ye=ce;if(Fe&&(Fe=typeof Fe=="string"?Fe:Xt(Fe),Ye=ce?Oe(Fe+"/"+ce):Fe),ce=Qe(!0,!0),Ye=ns(Ye,(ce!==void 0?ce:438)&4095|32768,0),V){if(typeof V=="string"){Fe=Array(V.length);for(var st=0,wt=V.length;st<wt;++st)Fe[st]=V.charCodeAt(st);V=Fe}xe(Ye,ce|146),Fe=Ae(Ye,577),at(Fe,V,0,V.length,0),We(Fe),xe(Ye,ce)}}this.handleError(Xe(this.filename,Y)),this.db=U(Y,"i32"),Xc(this.db),this.Ya={},this.Ma={}}var Y=di(4),re=l.cwrap,Xe=re("sqlite3_open","number",["string","number"]),mt=re("sqlite3_close_v2","number",["number"]),nt=re("sqlite3_exec","number",["number","string","number","number","number"]),It=re("sqlite3_changes","number",["number"]),Ht=re("sqlite3_prepare_v2","number",["number","string","number","number","number"]),zc=re("sqlite3_sql","string",["number"]),gd=re("sqlite3_normalized_sql","string",["number"]),Hc=re("sqlite3_prepare_v2","number",["number","number","number","number","number"]),_d=re("sqlite3_bind_text","number",["number","number","number","number","number"]),Vc=re("sqlite3_bind_blob","number",["number","number","number","number","number"]),vd=re("sqlite3_bind_double","number",["number","number","number"]),yd=re("sqlite3_bind_int","number",["number","number","number"]),xd=re("sqlite3_bind_parameter_index","number",["number","string"]),bd=re("sqlite3_step","number",["number"]),wd=re("sqlite3_errmsg","string",["number"]),Md=re("sqlite3_column_count","number",["number"]),Sd=re("sqlite3_data_count","number",["number"]),Ed=re("sqlite3_column_double","number",["number","number"]),Gc=re("sqlite3_column_text","string",["number","number"]),Td=re("sqlite3_column_blob","number",["number","number"]),Ad=re("sqlite3_column_bytes","number",["number","number"]),Rd=re("sqlite3_column_type","number",["number","number"]),Cd=re("sqlite3_column_name","string",["number","number"]),Pd=re("sqlite3_reset","number",["number"]),Ld=re("sqlite3_clear_bindings","number",["number"]),Id=re("sqlite3_finalize","number",["number"]),Wc=re("sqlite3_create_function_v2","number","number string number number number number number number number".split(" ")),Dd=re("sqlite3_value_type","number",["number"]),Nd=re("sqlite3_value_bytes","number",["number"]),Od=re("sqlite3_value_text","string",["number"]),Ud=re("sqlite3_value_blob","number",["number"]),kd=re("sqlite3_value_double","number",["number"]),Fd=re("sqlite3_result_double","",["number","number"]),qc=re("sqlite3_result_null","",["number"]),Bd=re("sqlite3_result_text","",["number","string","number","number"]),zd=re("sqlite3_result_blob","",["number","number","number","number"]),Hd=re("sqlite3_result_int","",["number","number"]),Vr=re("sqlite3_result_error","",["number","string","number"]),jc=re("sqlite3_aggregate_context","number",["number","number"]),Xc=re("RegisterExtensionFunctions","number",["number"]);v.prototype.bind=function(V){if(!this.Ka)throw"Statement closed";return this.reset(),Array.isArray(V)?this.vb(V):V!=null&&typeof V=="object"?this.wb(V):!0},v.prototype.step=function(){if(!this.Ka)throw"Statement closed";this.Ia=1;var V=bd(this.Ka);switch(V){case 100:return!0;case 101:return!1;default:throw this.db.handleError(V)}},v.prototype.qb=function(V){return V==null&&(V=this.Ia,this.Ia+=1),Ed(this.Ka,V)},v.prototype.zb=function(V){if(V==null&&(V=this.Ia,this.Ia+=1),V=Gc(this.Ka,V),typeof BigInt!="function")throw Error("BigInt is not supported");return BigInt(V)},v.prototype.Ab=function(V){return V==null&&(V=this.Ia,this.Ia+=1),Gc(this.Ka,V)},v.prototype.getBlob=function(V){V==null&&(V=this.Ia,this.Ia+=1);var ce=Ad(this.Ka,V);V=Td(this.Ka,V);for(var Fe=new Uint8Array(ce),Ye=0;Ye<ce;Ye+=1)Fe[Ye]=S[V+Ye];return Fe},v.prototype.get=function(V,ce){ce=ce||{},V!=null&&this.bind(V)&&this.step(),V=[];for(var Fe=Sd(this.Ka),Ye=0;Ye<Fe;Ye+=1)switch(Rd(this.Ka,Ye)){case 1:var st=ce.useBigInt?this.zb(Ye):this.qb(Ye);V.push(st);break;case 2:V.push(this.qb(Ye));break;case 3:V.push(this.Ab(Ye));break;case 4:V.push(this.getBlob(Ye));break;default:V.push(null)}return V},v.prototype.getColumnNames=function(){for(var V=[],ce=Md(this.Ka),Fe=0;Fe<ce;Fe+=1)V.push(Cd(this.Ka,Fe));return V},v.prototype.getAsObject=function(V,ce){V=this.get(V,ce),ce=this.getColumnNames();for(var Fe={},Ye=0;Ye<ce.length;Ye+=1)Fe[ce[Ye]]=V[Ye];return Fe},v.prototype.getSQL=function(){return zc(this.Ka)},v.prototype.getNormalizedSQL=function(){return gd(this.Ka)},v.prototype.run=function(V){return V!=null&&this.bind(V),this.step(),this.reset()},v.prototype.mb=function(V,ce){ce==null&&(ce=this.Ia,this.Ia+=1),V=Le(V);var Fe=Fr(V,kr);this.eb.push(Fe),this.db.handleError(_d(this.Ka,ce,Fe,V.length-1,0))},v.prototype.ub=function(V,ce){ce==null&&(ce=this.Ia,this.Ia+=1);var Fe=Fr(V,kr);this.eb.push(Fe),this.db.handleError(Vc(this.Ka,ce,Fe,V.length,0))},v.prototype.lb=function(V,ce){ce==null&&(ce=this.Ia,this.Ia+=1),this.db.handleError((V===(V|0)?yd:vd)(this.Ka,ce,V))},v.prototype.xb=function(V){V==null&&(V=this.Ia,this.Ia+=1),Vc(this.Ka,V,0,0,0)},v.prototype.nb=function(V,ce){switch(ce==null&&(ce=this.Ia,this.Ia+=1),typeof V){case"string":this.mb(V,ce);return;case"number":this.lb(V,ce);return;case"bigint":this.mb(V.toString(),ce);return;case"boolean":this.lb(V+0,ce);return;case"object":if(V===null){this.xb(ce);return}if(V.length!=null){this.ub(V,ce);return}}throw"Wrong API use : tried to bind a value of an unknown type ("+V+")."},v.prototype.wb=function(V){var ce=this;return Object.keys(V).forEach(function(Fe){var Ye=xd(ce.Ka,Fe);Ye!==0&&ce.nb(V[Fe],Ye)}),!0},v.prototype.vb=function(V){for(var ce=0;ce<V.length;ce+=1)this.nb(V[ce],ce+1);return!0},v.prototype.reset=function(){return this.freemem(),Ld(this.Ka)===0&&Pd(this.Ka)===0},v.prototype.freemem=function(){for(var V;(V=this.eb.pop())!==void 0;)zr(V)},v.prototype.free=function(){this.freemem();var V=Id(this.Ka)===0;return delete this.db.Ya[this.Ka],this.Ka=0,V},A.prototype.next=function(){if(this.Xa===null)return{done:!0};if(this.Ta!==null&&(this.Ta.free(),this.Ta=null),!this.db.db)throw this.fb(),Error("Database closed");var V=rr(),ce=di(4);pt(Y),pt(ce);try{this.db.handleError(Hc(this.db.db,this.cb,-1,Y,ce)),this.cb=U(ce,"i32");var Fe=U(Y,"i32");return Fe===0?(this.fb(),{done:!0}):(this.Ta=new v(Fe,this.db),this.db.Ya[Fe]=this.Ta,{value:this.Ta,done:!1})}catch(Ye){throw this.hb=Be(this.cb),this.fb(),Ye}finally{sr(V)}},A.prototype.fb=function(){zr(this.Xa),this.Xa=null},A.prototype.getRemainingSQL=function(){return this.hb!==null?this.hb:Be(this.cb)},typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"&&(A.prototype[Symbol.iterator]=function(){return this}),O.prototype.run=function(V,ce){if(!this.db)throw"Database closed";if(ce){V=this.prepare(V,ce);try{V.step()}finally{V.free()}}else this.handleError(nt(this.db,V,0,0,Y));return this},O.prototype.exec=function(V,ce,Fe){if(!this.db)throw"Database closed";var Ye=rr(),st=null;try{var wt=Pi(V),Tn=di(4);for(V=[];U(wt,"i8")!==0;){pt(Y),pt(Tn),this.handleError(Hc(this.db,wt,-1,Y,Tn));var vn=U(Y,"i32");if(wt=U(Tn,"i32"),vn!==0){var hn=null;for(st=new v(vn,this),ce!=null&&st.bind(ce);st.step();)hn===null&&(hn={columns:st.getColumnNames(),values:[]},V.push(hn)),hn.values.push(st.get(null,Fe));st.free()}}return V}catch(An){throw st&&st.free(),An}finally{sr(Ye)}},O.prototype.each=function(V,ce,Fe,Ye,st){typeof ce=="function"&&(Ye=Fe,Fe=ce,ce=void 0),V=this.prepare(V,ce);try{for(;V.step();)Fe(V.getAsObject(null,st))}finally{V.free()}if(typeof Ye=="function")return Ye()},O.prototype.prepare=function(V,ce){if(pt(Y),this.handleError(Ht(this.db,V,-1,Y,0)),V=U(Y,"i32"),V===0)throw"Nothing to prepare";var Fe=new v(V,this);return ce!=null&&Fe.bind(ce),this.Ya[V]=Fe},O.prototype.iterateStatements=function(V){return new A(V,this)},O.prototype.export=function(){Object.values(this.Ya).forEach(function(ce){ce.free()}),Object.values(this.Ma).forEach(ss),this.Ma={},this.handleError(mt(this.db));var V=ct(this.filename);return this.handleError(Xe(this.filename,Y)),this.db=U(Y,"i32"),Xc(this.db),V},O.prototype.close=function(){this.db!==null&&(Object.values(this.Ya).forEach(function(V){V.free()}),Object.values(this.Ma).forEach(ss),this.Ma={},this.handleError(mt(this.db)),q("/"+this.filename),this.db=null)},O.prototype.handleError=function(V){if(V===0)return null;throw V=wd(this.db),Error(V)},O.prototype.getRowsModified=function(){return It(this.db)},O.prototype.create_function=function(V,ce){Object.prototype.hasOwnProperty.call(this.Ma,V)&&(ss(this.Ma[V]),delete this.Ma[V]);var Fe=Br(function(Ye,st,wt){st=m(st,wt);try{var Tn=ce.apply(null,st)}catch(vn){Vr(Ye,vn,-1);return}u(Ye,Tn)},"viii");return this.Ma[V]=Fe,this.handleError(Wc(this.db,V,ce.length,1,0,Fe,0,0,0)),this},O.prototype.create_aggregate=function(V,ce){var Fe=ce.init||function(){return null},Ye=ce.finalize||function(hn){return hn},st=ce.step;if(!st)throw"An aggregate function must have a step function in "+V;var wt={};Object.hasOwnProperty.call(this.Ma,V)&&(ss(this.Ma[V]),delete this.Ma[V]),ce=V+"__finalize",Object.hasOwnProperty.call(this.Ma,ce)&&(ss(this.Ma[ce]),delete this.Ma[ce]);var Tn=Br(function(hn,An,ho){var Ii=jc(hn,1);Object.hasOwnProperty.call(wt,Ii)||(wt[Ii]=Fe()),An=m(An,ho),An=[wt[Ii]].concat(An);try{wt[Ii]=st.apply(null,An)}catch(Vd){delete wt[Ii],Vr(hn,Vd,-1)}},"viii"),vn=Br(function(hn){var An=jc(hn,1);try{var ho=Ye(wt[An])}catch(Ii){delete wt[An],Vr(hn,Ii,-1);return}u(hn,ho),delete wt[An]},"vi");return this.Ma[V]=Tn,this.Ma[ce]=vn,this.handleError(Wc(this.db,V,st.length-1,1,0,0,Tn,vn,0)),this},l.Database=O};var p=Object.assign({},l),x="./this.program",y="",_,g;if(d){var R=Da,T=Da;y=__dirname+"/",g=u=>(u=ue(u)?new URL(u):T.normalize(u),R.readFileSync(u)),_=u=>(u=ue(u)?new URL(u):T.normalize(u),new Promise((m,v)=>{R.readFile(u,void 0,(A,O)=>{A?v(A):m(O.buffer)})})),!l.thisProgram&&1<process.argv.length&&(x=process.argv[1].replace(/\\/g,"/")),process.argv.slice(2),i.exports=l}else(f||h)&&(h?y=self.location.href:typeof document<"u"&&document.currentScript&&(y=document.currentScript.src),y=y.startsWith("blob:")?"":y.substr(0,y.replace(/[?#].*/,"").lastIndexOf("/")+1),h&&(g=u=>{var m=new XMLHttpRequest;return m.open("GET",u,!1),m.responseType="arraybuffer",m.send(null),new Uint8Array(m.response)}),_=u=>ue(u)?new Promise((m,v)=>{var A=new XMLHttpRequest;A.open("GET",u,!0),A.responseType="arraybuffer",A.onload=()=>{(A.status==200||A.status==0&&A.response)&&v(A.response),m(A.status)},A.onerror=m,A.send(null)}):fetch(u,{credentials:"same-origin"}).then(m=>m.ok?m.arrayBuffer():Promise.reject(Error(m.status+" : "+m.url))));var w=l.print||console.log.bind(console),L=l.printErr||console.error.bind(console);Object.assign(l,p),p=null,l.thisProgram&&(x=l.thisProgram);var I;l.wasmBinary&&(I=l.wasmBinary);var C,D=!1,S,b,N,F,k,$,ie;function J(){var u=C.buffer;l.HEAP8=S=new Int8Array(u),l.HEAP16=N=new Int16Array(u),l.HEAPU8=b=new Uint8Array(u),l.HEAPU16=new Uint16Array(u),l.HEAP32=F=new Int32Array(u),l.HEAPU32=k=new Uint32Array(u),l.HEAPF32=$=new Float32Array(u),l.HEAPF64=ie=new Float64Array(u)}var de=[],K=[],ee=[];function ae(){var u=l.preRun.shift();de.unshift(u)}var me=0,ve=null;function Re(u){var m;throw(m=l.onAbort)==null||m.call(l,u),u="Aborted("+u+")",L(u),D=!0,new WebAssembly.RuntimeError(u+". Build with -sASSERTIONS for more info.")}var Q=u=>u.startsWith("data:application/octet-stream;base64,"),ue=u=>u.startsWith("file://"),Me;function ge(u){if(u==Me&&I)return new Uint8Array(I);if(g)return g(u);throw"both async and sync fetching of the wasm failed"}function te(u){return I?Promise.resolve().then(()=>ge(u)):_(u).then(m=>new Uint8Array(m),()=>ge(u))}function Ce(u,m,v){return te(u).then(A=>WebAssembly.instantiate(A,m)).then(v,A=>{L(`failed to asynchronously prepare wasm: ${A}`),Re(A)})}function ke(u,m){var v=Me;I||typeof WebAssembly.instantiateStreaming!="function"||Q(v)||ue(v)||d||typeof fetch!="function"?Ce(v,u,m):fetch(v,{credentials:"same-origin"}).then(A=>WebAssembly.instantiateStreaming(A,u).then(m,function(O){return L(`wasm streaming compile failed: ${O}`),L("falling back to ArrayBuffer instantiation"),Ce(v,u,m)}))}var fe,Te,ht=u=>{for(;0<u.length;)u.shift()(l)};function U(u,m="i8"){switch(m.endsWith("*")&&(m="*"),m){case"i1":return S[u];case"i8":return S[u];case"i16":return N[u>>1];case"i32":return F[u>>2];case"i64":Re("to do getValue(i64) use WASM_BIGINT");case"float":return $[u>>2];case"double":return ie[u>>3];case"*":return k[u>>2];default:Re(`invalid type for getValue: ${m}`)}}function pt(u){var m="i32";switch(m.endsWith("*")&&(m="*"),m){case"i1":S[u]=0;break;case"i8":S[u]=0;break;case"i16":N[u>>1]=0;break;case"i32":F[u>>2]=0;break;case"i64":Re("to do setValue(i64) use WASM_BIGINT");case"float":$[u>>2]=0;break;case"double":ie[u>>3]=0;break;case"*":k[u>>2]=0;break;default:Re(`invalid type for setValue: ${m}`)}}var $e=typeof TextDecoder<"u"?new TextDecoder:void 0,ze=(u,m,v)=>{var A=m+v;for(v=m;u[v]&&!(v>=A);)++v;if(16<v-m&&u.buffer&&$e)return $e.decode(u.subarray(m,v));for(A="";m<v;){var O=u[m++];if(O&128){var Y=u[m++]&63;if((O&224)==192)A+=String.fromCharCode((O&31)<<6|Y);else{var re=u[m++]&63;O=(O&240)==224?(O&15)<<12|Y<<6|re:(O&7)<<18|Y<<12|re<<6|u[m++]&63,65536>O?A+=String.fromCharCode(O):(O-=65536,A+=String.fromCharCode(55296|O>>10,56320|O&1023))}}else A+=String.fromCharCode(O)}return A},Be=(u,m)=>u?ze(b,u,m):"",gt=(u,m)=>{for(var v=0,A=u.length-1;0<=A;A--){var O=u[A];O==="."?u.splice(A,1):O===".."?(u.splice(A,1),v++):v&&(u.splice(A,1),v--)}if(m)for(;v;v--)u.unshift("..");return u},Oe=u=>{var m=u.charAt(0)==="/",v=u.substr(-1)==="/";return(u=gt(u.split("/").filter(A=>!!A),!m).join("/"))||m||(u="."),u&&v&&(u+="/"),(m?"/":"")+u},P=u=>{var m=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/.exec(u).slice(1);return u=m[0],m=m[1],!u&&!m?".":(m&&(m=m.substr(0,m.length-1)),u+m)},M=u=>{if(u==="/")return"/";u=Oe(u),u=u.replace(/\/$/,"");var m=u.lastIndexOf("/");return m===-1?u:u.substr(m+1)},G=()=>{if(typeof crypto=="object"&&typeof crypto.getRandomValues=="function")return v=>crypto.getRandomValues(v);if(d)try{var u=Da;if(u.randomFillSync)return v=>u.randomFillSync(v);var m=u.randomBytes;return v=>(v.set(m(v.byteLength)),v)}catch{}Re("initRandomDevice")},oe=u=>(oe=G())(u),le=(...u)=>{for(var m="",v=!1,A=u.length-1;-1<=A&&!v;A--){if(v=0<=A?u[A]:"/",typeof v!="string")throw new TypeError("Arguments to path.resolve must be strings");if(!v)return"";m=v+"/"+m,v=v.charAt(0)==="/"}return m=gt(m.split("/").filter(O=>!!O),!v).join("/"),(v?"/":"")+m||"."},ne=[],Ue=u=>{for(var m=0,v=0;v<u.length;++v){var A=u.charCodeAt(v);127>=A?m++:2047>=A?m+=2:55296<=A&&57343>=A?(m+=4,++v):m+=3}return m},_e=(u,m,v,A)=>{if(!(0<A))return 0;var O=v;A=v+A-1;for(var Y=0;Y<u.length;++Y){var re=u.charCodeAt(Y);if(55296<=re&&57343>=re){var Xe=u.charCodeAt(++Y);re=65536+((re&1023)<<10)|Xe&1023}if(127>=re){if(v>=A)break;m[v++]=re}else{if(2047>=re){if(v+1>=A)break;m[v++]=192|re>>6}else{if(65535>=re){if(v+2>=A)break;m[v++]=224|re>>12}else{if(v+3>=A)break;m[v++]=240|re>>18,m[v++]=128|re>>12&63}m[v++]=128|re>>6&63}m[v++]=128|re&63}}return m[v]=0,v-O};function Le(u,m){var v=Array(Ue(u)+1);return u=_e(u,v,0,v.length),m&&(v.length=u),v}var rt=[];function pe(u,m){rt[u]={input:[],output:[],Wa:m},ir(u,De)}var De={open(u){var m=rt[u.node.rdev];if(!m)throw new W(43);u.tty=m,u.seekable=!1},close(u){u.tty.Wa.fsync(u.tty)},fsync(u){u.tty.Wa.fsync(u.tty)},read(u,m,v,A){if(!u.tty||!u.tty.Wa.rb)throw new W(60);for(var O=0,Y=0;Y<A;Y++){try{var re=u.tty.Wa.rb(u.tty)}catch{throw new W(29)}if(re===void 0&&O===0)throw new W(6);if(re==null)break;O++,m[v+Y]=re}return O&&(u.node.timestamp=Date.now()),O},write(u,m,v,A){if(!u.tty||!u.tty.Wa.ib)throw new W(60);try{for(var O=0;O<A;O++)u.tty.Wa.ib(u.tty,m[v+O])}catch{throw new W(29)}return A&&(u.node.timestamp=Date.now()),O}},Ge={rb(){e:{if(!ne.length){var u=null;if(d){var m=Buffer.alloc(256),v=0,A=process.stdin.fd;try{v=R.readSync(A,m,0,256)}catch(O){if(O.toString().includes("EOF"))v=0;else throw O}0<v&&(u=m.slice(0,v).toString("utf-8"))}else typeof window<"u"&&typeof window.prompt=="function"&&(u=window.prompt("Input: "),u!==null&&(u+=`
`));if(!u){u=null;break e}ne=Le(u,!0)}u=ne.shift()}return u},ib(u,m){m===null||m===10?(w(ze(u.output,0)),u.output=[]):m!=0&&u.output.push(m)},fsync(u){u.output&&0<u.output.length&&(w(ze(u.output,0)),u.output=[])},Lb(){return{Gb:25856,Ib:5,Fb:191,Hb:35387,Eb:[3,28,127,21,4,0,1,0,17,19,26,0,18,15,23,22,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}},Mb(){return 0},Nb(){return[24,80]}},qe={ib(u,m){m===null||m===10?(L(ze(u.output,0)),u.output=[]):m!=0&&u.output.push(m)},fsync(u){u.output&&0<u.output.length&&(L(ze(u.output,0)),u.output=[])}};function Ie(u,m){var v=u.Ha?u.Ha.length:0;v>=m||(m=Math.max(m,v*(1048576>v?2:1.125)>>>0),v!=0&&(m=Math.max(m,256)),v=u.Ha,u.Ha=new Uint8Array(m),0<u.La&&u.Ha.set(v.subarray(0,u.La),0))}var Se={Pa:null,Qa(){return Se.createNode(null,"/",16895,0)},createNode(u,m,v,A){if((v&61440)===24576||(v&61440)===4096)throw new W(63);return Se.Pa||(Se.Pa={dir:{node:{Oa:Se.Fa.Oa,Na:Se.Fa.Na,lookup:Se.Fa.lookup,$a:Se.Fa.$a,rename:Se.Fa.rename,unlink:Se.Fa.unlink,rmdir:Se.Fa.rmdir,readdir:Se.Fa.readdir,symlink:Se.Fa.symlink},stream:{Sa:Se.Ga.Sa}},file:{node:{Oa:Se.Fa.Oa,Na:Se.Fa.Na},stream:{Sa:Se.Ga.Sa,read:Se.Ga.read,write:Se.Ga.write,kb:Se.Ga.kb,ab:Se.Ga.ab,bb:Se.Ga.bb}},link:{node:{Oa:Se.Fa.Oa,Na:Se.Fa.Na,readlink:Se.Fa.readlink},stream:{}},ob:{node:{Oa:Se.Fa.Oa,Na:Se.Fa.Na},stream:co}}),v=Fn(u,m,v,A),Wt(v.mode)?(v.Fa=Se.Pa.dir.node,v.Ga=Se.Pa.dir.stream,v.Ha={}):(v.mode&61440)===32768?(v.Fa=Se.Pa.file.node,v.Ga=Se.Pa.file.stream,v.La=0,v.Ha=null):(v.mode&61440)===40960?(v.Fa=Se.Pa.link.node,v.Ga=Se.Pa.link.stream):(v.mode&61440)===8192&&(v.Fa=Se.Pa.ob.node,v.Ga=Se.Pa.ob.stream),v.timestamp=Date.now(),u&&(u.Ha[m]=v,u.timestamp=v.timestamp),v},Kb(u){return u.Ha?u.Ha.subarray?u.Ha.subarray(0,u.La):new Uint8Array(u.Ha):new Uint8Array(0)},Fa:{Oa(u){var m={};return m.dev=(u.mode&61440)===8192?u.id:1,m.ino=u.id,m.mode=u.mode,m.nlink=1,m.uid=0,m.gid=0,m.rdev=u.rdev,Wt(u.mode)?m.size=4096:(u.mode&61440)===32768?m.size=u.La:(u.mode&61440)===40960?m.size=u.link.length:m.size=0,m.atime=new Date(u.timestamp),m.mtime=new Date(u.timestamp),m.ctime=new Date(u.timestamp),m.yb=4096,m.blocks=Math.ceil(m.size/m.yb),m},Na(u,m){if(m.mode!==void 0&&(u.mode=m.mode),m.timestamp!==void 0&&(u.timestamp=m.timestamp),m.size!==void 0&&(m=m.size,u.La!=m))if(m==0)u.Ha=null,u.La=0;else{var v=u.Ha;u.Ha=new Uint8Array(m),v&&u.Ha.set(v.subarray(0,Math.min(m,u.La))),u.La=m}},lookup(){throw Ke[44]},$a(u,m,v,A){return Se.createNode(u,m,v,A)},rename(u,m,v){if(Wt(u.mode)){try{var A=kn(m,v)}catch{}if(A)for(var O in A.Ha)throw new W(55)}delete u.parent.Ha[u.name],u.parent.timestamp=Date.now(),u.name=v,m.Ha[v]=u,m.timestamp=u.parent.timestamp},unlink(u,m){delete u.Ha[m],u.timestamp=Date.now()},rmdir(u,m){var v=kn(u,m),A;for(A in v.Ha)throw new W(55);delete u.Ha[m],u.timestamp=Date.now()},readdir(u){var m=[".",".."],v;for(v of Object.keys(u.Ha))m.push(v);return m},symlink(u,m,v){return u=Se.createNode(u,m,41471,0),u.link=v,u},readlink(u){if((u.mode&61440)!==40960)throw new W(28);return u.link}},Ga:{read(u,m,v,A,O){var Y=u.node.Ha;if(O>=u.node.La)return 0;if(u=Math.min(u.node.La-O,A),8<u&&Y.subarray)m.set(Y.subarray(O,O+u),v);else for(A=0;A<u;A++)m[v+A]=Y[O+A];return u},write(u,m,v,A,O,Y){if(m.buffer===S.buffer&&(Y=!1),!A)return 0;if(u=u.node,u.timestamp=Date.now(),m.subarray&&(!u.Ha||u.Ha.subarray)){if(Y)return u.Ha=m.subarray(v,v+A),u.La=A;if(u.La===0&&O===0)return u.Ha=m.slice(v,v+A),u.La=A;if(O+A<=u.La)return u.Ha.set(m.subarray(v,v+A),O),A}if(Ie(u,O+A),u.Ha.subarray&&m.subarray)u.Ha.set(m.subarray(v,v+A),O);else for(Y=0;Y<A;Y++)u.Ha[O+Y]=m[v+Y];return u.La=Math.max(u.La,O+A),A},Sa(u,m,v){if(v===1?m+=u.position:v===2&&(u.node.mode&61440)===32768&&(m+=u.node.La),0>m)throw new W(28);return m},kb(u,m,v){Ie(u.node,m+v),u.node.La=Math.max(u.node.La,m+v)},ab(u,m,v,A,O){if((u.node.mode&61440)!==32768)throw new W(43);if(u=u.node.Ha,O&2||u.buffer!==S.buffer){if((0<v||v+m<u.length)&&(u.subarray?u=u.subarray(v,v+m):u=Array.prototype.slice.call(u,v,v+m)),v=!0,m=65536*Math.ceil(m/65536),(O=Fc(65536,m))?(b.fill(0,O,O+m),m=O):m=0,!m)throw new W(48);S.set(u,m)}else v=!1,m=u.byteOffset;return{Cb:m,tb:v}},bb(u,m,v,A){return Se.Ga.write(u,m,0,A,v,!1),0}}},Qe=(u,m)=>{var v=0;return u&&(v|=365),m&&(v|=146),v},dt=null,B={},ye=[],Z=1,se=null,Ee=!0,W=class{constructor(u){this.name="ErrnoError",this.Ja=u}},Ke={},Mt=class{constructor(){this.Za={},this.node=null}get flags(){return this.Za.flags}set flags(u){this.Za.flags=u}get position(){return this.Za.position}set position(u){this.Za.position=u}},kt=class{constructor(u,m,v,A){u||(u=this),this.parent=u,this.Qa=u.Qa,this.Ua=null,this.id=Z++,this.name=m,this.mode=v,this.Fa={},this.Ga={},this.rdev=A}get read(){return(this.mode&365)===365}set read(u){u?this.mode|=365:this.mode&=-366}get write(){return(this.mode&146)===146}set write(u){u?this.mode|=146:this.mode&=-147}};function Je(u,m={}){if(u=le(u),!u)return{path:"",node:null};if(m=Object.assign({pb:!0,jb:0},m),8<m.jb)throw new W(32);u=u.split("/").filter(re=>!!re);for(var v=dt,A="/",O=0;O<u.length;O++){var Y=O===u.length-1;if(Y&&m.parent)break;if(v=kn(v,u[O]),A=Oe(A+"/"+u[O]),v.Ua&&(!Y||Y&&m.pb)&&(v=v.Ua.root),!Y||m.Ra){for(Y=0;(v.mode&61440)===40960;)if(v=j(A),A=le(P(A),v),v=Je(A,{jb:m.jb+1}).node,40<Y++)throw new W(32)}}return{path:A,node:v}}function Xt(u){for(var m;;){if(u===u.parent)return u=u.Qa.sb,m?u[u.length-1]!=="/"?`${u}/${m}`:u+m:u;m=m?`${u.name}/${m}`:u.name,u=u.parent}}function fn(u,m){for(var v=0,A=0;A<m.length;A++)v=(v<<5)-v+m.charCodeAt(A)|0;return(u+v>>>0)%se.length}function Qs(u){var m=fn(u.parent.id,u.name);if(se[m]===u)se[m]=u.Va;else for(m=se[m];m;){if(m.Va===u){m.Va=u.Va;break}m=m.Va}}function kn(u,m){var v=Wt(u.mode)?(v=qn(u,"x"))?v:u.Fa.lookup?0:2:54;if(v)throw new W(v);for(v=se[fn(u.id,m)];v;v=v.Va){var A=v.name;if(v.parent.id===u.id&&A===m)return v}return u.Fa.lookup(u,m)}function Fn(u,m,v,A){return u=new kt(u,m,v,A),m=fn(u.parent.id,u.name),u.Va=se[m],se[m]=u}function Wt(u){return(u&61440)===16384}function er(u){var m=["r","w","rw"][u&3];return u&512&&(m+="w"),m}function qn(u,m){if(Ee)return 0;if(!m.includes("r")||u.mode&292){if(m.includes("w")&&!(u.mode&146)||m.includes("x")&&!(u.mode&73))return 2}else return 2;return 0}function Ci(u,m){try{return kn(u,m),20}catch{}return qn(u,"wx")}function tr(u,m,v){try{var A=kn(u,m)}catch(O){return O.Ja}if(u=qn(u,"wx"))return u;if(v){if(!Wt(A.mode))return 54;if(A===A.parent||Xt(A)==="/")return 10}else if(Wt(A.mode))return 31;return 0}function Lt(u){if(u=ye[u],!u)throw new W(8);return u}function nr(u,m=-1){if(u=Object.assign(new Mt,u),m==-1)e:{for(m=0;4096>=m;m++)if(!ye[m])break e;throw new W(33)}return u.fd=m,ye[m]=u}function Or(u,m=-1){var v,A;return u=nr(u,m),(A=(v=u.Ga)==null?void 0:v.Jb)==null||A.call(v,u),u}var co={open(u){var m,v;u.Ga=B[u.node.rdev].Ga,(v=(m=u.Ga).open)==null||v.call(m,u)},Sa(){throw new W(70)}};function ir(u,m){B[u]={Ga:m}}function Ur(u,m){var v=m==="/";if(v&&dt)throw new W(10);if(!v&&m){var A=Je(m,{pb:!1});if(m=A.path,A=A.node,A.Ua)throw new W(10);if(!Wt(A.mode))throw new W(54)}m={type:u,Ob:{},sb:m,Bb:[]},u=u.Qa(m),u.Qa=m,m.root=u,v?dt=u:A&&(A.Ua=m,A.Qa&&A.Qa.Bb.push(m))}function ns(u,m,v){var A=Je(u,{parent:!0}).node;if(u=M(u),!u||u==="."||u==="..")throw new W(28);var O=Ci(A,u);if(O)throw new W(O);if(!A.Fa.$a)throw new W(63);return A.Fa.$a(A,u,m,v)}function _n(u,m){return ns(u,(m!==void 0?m:511)&1023|16384,0)}function is(u,m,v){typeof v>"u"&&(v=m,m=438),ns(u,m|8192,v)}function E(u,m){if(!le(u))throw new W(44);var v=Je(m,{parent:!0}).node;if(!v)throw new W(44);m=M(m);var A=Ci(v,m);if(A)throw new W(A);if(!v.Fa.symlink)throw new W(63);v.Fa.symlink(v,m,u)}function z(u){var m=Je(u,{parent:!0}).node;u=M(u);var v=kn(m,u),A=tr(m,u,!0);if(A)throw new W(A);if(!m.Fa.rmdir)throw new W(63);if(v.Ua)throw new W(10);m.Fa.rmdir(m,u),Qs(v)}function q(u){var m=Je(u,{parent:!0}).node;if(!m)throw new W(44);u=M(u);var v=kn(m,u),A=tr(m,u,!1);if(A)throw new W(A);if(!m.Fa.unlink)throw new W(63);if(v.Ua)throw new W(10);m.Fa.unlink(m,u),Qs(v)}function j(u){if(u=Je(u).node,!u)throw new W(44);if(!u.Fa.readlink)throw new W(28);return le(Xt(u.parent),u.Fa.readlink(u))}function H(u,m){if(u=Je(u,{Ra:!m}).node,!u)throw new W(44);if(!u.Fa.Oa)throw new W(63);return u.Fa.Oa(u)}function he(u){return H(u,!0)}function xe(u,m){if(u=typeof u=="string"?Je(u,{Ra:!0}).node:u,!u.Fa.Na)throw new W(63);u.Fa.Na(u,{mode:m&4095|u.mode&-4096,timestamp:Date.now()})}function Pe(u,m){if(0>m)throw new W(28);if(u=typeof u=="string"?Je(u,{Ra:!0}).node:u,!u.Fa.Na)throw new W(63);if(Wt(u.mode))throw new W(31);if((u.mode&61440)!==32768)throw new W(28);var v=qn(u,"w");if(v)throw new W(v);u.Fa.Na(u,{size:m,timestamp:Date.now()})}function Ae(u,m,v){if(u==="")throw new W(44);if(typeof m=="string"){var A={r:0,"r+":2,w:577,"w+":578,a:1089,"a+":1090}[m];if(typeof A>"u")throw Error(`Unknown file open mode: ${m}`);m=A}if(v=m&64?(typeof v>"u"?438:v)&4095|32768:0,typeof u=="object")var O=u;else{u=Oe(u);try{O=Je(u,{Ra:!(m&131072)}).node}catch{}}if(A=!1,m&64)if(O){if(m&128)throw new W(20)}else O=ns(u,v,0),A=!0;if(!O)throw new W(44);if((O.mode&61440)===8192&&(m&=-513),m&65536&&!Wt(O.mode))throw new W(54);if(!A&&(v=O?(O.mode&61440)===40960?32:Wt(O.mode)&&(er(m)!=="r"||m&512)?31:qn(O,er(m)):44))throw new W(v);return m&512&&!A&&Pe(O,0),m&=-131713,O=nr({node:O,path:Xt(O),flags:m,seekable:!0,position:0,Ga:O.Ga,Db:[],error:!1}),O.Ga.open&&O.Ga.open(O),!l.logReadFiles||m&1||(Rt||(Rt={}),u in Rt||(Rt[u]=1)),O}function We(u){if(u.fd===null)throw new W(8);u.gb&&(u.gb=null);try{u.Ga.close&&u.Ga.close(u)}catch(m){throw m}finally{ye[u.fd]=null}u.fd=null}function je(u,m,v){if(u.fd===null)throw new W(8);if(!u.seekable||!u.Ga.Sa)throw new W(70);if(v!=0&&v!=1&&v!=2)throw new W(28);u.position=u.Ga.Sa(u,m,v),u.Db=[]}function He(u,m,v,A,O){if(0>A||0>O)throw new W(28);if(u.fd===null)throw new W(8);if((u.flags&2097155)===1)throw new W(8);if(Wt(u.node.mode))throw new W(31);if(!u.Ga.read)throw new W(28);var Y=typeof O<"u";if(!Y)O=u.position;else if(!u.seekable)throw new W(70);return m=u.Ga.read(u,m,v,A,O),Y||(u.position+=m),m}function at(u,m,v,A,O){if(0>A||0>O)throw new W(28);if(u.fd===null)throw new W(8);if(!(u.flags&2097155))throw new W(8);if(Wt(u.node.mode))throw new W(31);if(!u.Ga.write)throw new W(28);u.seekable&&u.flags&1024&&je(u,0,2);var Y=typeof O<"u";if(!Y)O=u.position;else if(!u.seekable)throw new W(70);return m=u.Ga.write(u,m,v,A,O,void 0),Y||(u.position+=m),m}function ct(u){var m,v=Ae(u,v||0);u=H(u).size;var A=new Uint8Array(u);return He(v,A,0,u,0),m=A,We(v),m}var Et;function _t(u,m,v){u=Oe("/dev/"+u);var A=Qe(!!m,!!v);ot||(ot=64);var O=ot++<<8|0;ir(O,{open(Y){Y.seekable=!1},close(){var Y;(Y=v==null?void 0:v.buffer)!=null&&Y.length&&v(10)},read(Y,re,Xe,mt){for(var nt=0,It=0;It<mt;It++){try{var Ht=m()}catch{throw new W(29)}if(Ht===void 0&&nt===0)throw new W(6);if(Ht==null)break;nt++,re[Xe+It]=Ht}return nt&&(Y.node.timestamp=Date.now()),nt},write(Y,re,Xe,mt){for(var nt=0;nt<mt;nt++)try{v(re[Xe+nt])}catch{throw new W(29)}return mt&&(Y.node.timestamp=Date.now()),nt}}),is(u,A,O)}var ot,be={},Rt;function it(u,m,v){if(m.charAt(0)==="/")return m;if(u=u===-100?"/":Lt(u).path,m.length==0){if(!v)throw new W(44);return u}return Oe(u+"/"+m)}function $t(u,m,v){u=u(m),F[v>>2]=u.dev,F[v+4>>2]=u.mode,k[v+8>>2]=u.nlink,F[v+12>>2]=u.uid,F[v+16>>2]=u.gid,F[v+20>>2]=u.rdev,Te=[u.size>>>0,(fe=u.size,1<=+Math.abs(fe)?0<fe?+Math.floor(fe/4294967296)>>>0:~~+Math.ceil((fe-+(~~fe>>>0))/4294967296)>>>0:0)],F[v+24>>2]=Te[0],F[v+28>>2]=Te[1],F[v+32>>2]=4096,F[v+36>>2]=u.blocks,m=u.atime.getTime();var A=u.mtime.getTime(),O=u.ctime.getTime();return Te=[Math.floor(m/1e3)>>>0,(fe=Math.floor(m/1e3),1<=+Math.abs(fe)?0<fe?+Math.floor(fe/4294967296)>>>0:~~+Math.ceil((fe-+(~~fe>>>0))/4294967296)>>>0:0)],F[v+40>>2]=Te[0],F[v+44>>2]=Te[1],k[v+48>>2]=m%1e3*1e3,Te=[Math.floor(A/1e3)>>>0,(fe=Math.floor(A/1e3),1<=+Math.abs(fe)?0<fe?+Math.floor(fe/4294967296)>>>0:~~+Math.ceil((fe-+(~~fe>>>0))/4294967296)>>>0:0)],F[v+56>>2]=Te[0],F[v+60>>2]=Te[1],k[v+64>>2]=A%1e3*1e3,Te=[Math.floor(O/1e3)>>>0,(fe=Math.floor(O/1e3),1<=+Math.abs(fe)?0<fe?+Math.floor(fe/4294967296)>>>0:~~+Math.ceil((fe-+(~~fe>>>0))/4294967296)>>>0:0)],F[v+72>>2]=Te[0],F[v+76>>2]=Te[1],k[v+80>>2]=O%1e3*1e3,Te=[u.ino>>>0,(fe=u.ino,1<=+Math.abs(fe)?0<fe?+Math.floor(fe/4294967296)>>>0:~~+Math.ceil((fe-+(~~fe>>>0))/4294967296)>>>0:0)],F[v+88>>2]=Te[0],F[v+92>>2]=Te[1],0}var Sn=void 0;function Ft(){var u=F[+Sn>>2];return Sn+=4,u}var En=(u,m)=>m+2097152>>>0<4194305-!!u?(u>>>0)+4294967296*m:NaN,bt=[0,31,60,91,121,152,182,213,244,274,305,335],rn=[0,31,59,90,120,151,181,212,243,273,304,334],Kt={},Bt=()=>{if(!zt){var u={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:(typeof navigator=="object"&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",_:x||"./this.program"},m;for(m in Kt)Kt[m]===void 0?delete u[m]:u[m]=Kt[m];var v=[];for(m in u)v.push(`${m}=${u[m]}`);zt=v}return zt},zt,Pi=u=>{var m=Ue(u)+1,v=di(m);return _e(u,b,v,m),v},jn=(u,m,v,A)=>{var O={string:nt=>{var It=0;return nt!=null&&nt!==0&&(It=Pi(nt)),It},array:nt=>{var It=di(nt.length);return S.set(nt,It),It}};u=l["_"+u];var Y=[],re=0;if(A)for(var Xe=0;Xe<A.length;Xe++){var mt=O[v[Xe]];mt?(re===0&&(re=rr()),Y[Xe]=mt(A[Xe])):Y[Xe]=A[Xe]}return v=u(...Y),v=function(nt){return re!==0&&sr(re),m==="string"?nt?ze(b,nt):"":m==="boolean"?!!nt:nt}(v)},kr=0,Fr=(u,m)=>(m=m==1?di(u.length):fo(u.length),u.subarray||u.slice||(u=new Uint8Array(u)),b.set(u,m),m),Li,uo=[],Xn,ss=u=>{Li.delete(Xn.get(u)),Xn.set(u,null),uo.push(u)},Br=(u,m)=>{if(!Li){Li=new WeakMap;var v=Xn.length;if(Li)for(var A=0;A<0+v;A++){var O=Xn.get(A);O&&Li.set(O,A)}}if(v=Li.get(u)||0)return v;if(uo.length)v=uo.pop();else{try{Xn.grow(1)}catch(Xe){throw Xe instanceof RangeError?"Unable to grow wasm table. Set ALLOW_TABLE_GROWTH.":Xe}v=Xn.length-1}try{Xn.set(v,u)}catch(Xe){if(!(Xe instanceof TypeError))throw Xe;if(typeof WebAssembly.Function=="function"){A=WebAssembly.Function,O={i:"i32",j:"i64",f:"f32",d:"f64",e:"externref",p:"i32"};for(var Y={parameters:[],results:m[0]=="v"?[]:[O[m[0]]]},re=1;re<m.length;++re)Y.parameters.push(O[m[re]]);m=new A(Y,u)}else{for(A=[1],O=m.slice(0,1),m=m.slice(1),Y={i:127,p:127,j:126,f:125,d:124,e:111},A.push(96),re=m.length,128>re?A.push(re):A.push(re%128|128,re>>7),re=0;re<m.length;++re)A.push(Y[m[re]]);O=="v"?A.push(0):A.push(1,Y[O]),m=[0,97,115,109,1,0,0,0,1],O=A.length,128>O?m.push(O):m.push(O%128|128,O>>7),m.push(...A),m.push(2,7,1,1,101,1,102,0,0,7,5,1,1,102,0,0),m=new WebAssembly.Module(new Uint8Array(m)),m=new WebAssembly.Instance(m,{e:{f:u}}).exports.f}Xn.set(v,m)}return Li.set(u,v),v};[44].forEach(u=>{Ke[u]=new W(u),Ke[u].stack="<generic error, no stack>"}),se=Array(4096),Ur(Se,"/"),_n("/tmp"),_n("/home"),_n("/home/web_user"),function(){_n("/dev"),ir(259,{read:()=>0,write:(A,O,Y,re)=>re}),is("/dev/null",259),pe(1280,Ge),pe(1536,qe),is("/dev/tty",1280),is("/dev/tty1",1536);var u=new Uint8Array(1024),m=0,v=()=>(m===0&&(m=oe(u).byteLength),u[--m]);_t("random",v),_t("urandom",v),_n("/dev/shm"),_n("/dev/shm/tmp")}(),function(){_n("/proc");var u=_n("/proc/self");_n("/proc/self/fd"),Ur({Qa(){var m=Fn(u,"fd",16895,73);return m.Fa={lookup(v,A){var O=Lt(+A);return v={parent:null,Qa:{sb:"fake"},Fa:{readlink:()=>O.path}},v.parent=v}},m}},"/proc/self/fd")}();var md={a:(u,m,v,A)=>{Re(`Assertion failed: ${u?ze(b,u):""}, at: `+[m?m?ze(b,m):"":"unknown filename",v,A?A?ze(b,A):"":"unknown function"])},h:function(u,m){try{return u=u?ze(b,u):"",xe(u,m),0}catch(v){if(typeof be>"u"||v.name!=="ErrnoError")throw v;return-v.Ja}},H:function(u,m,v){try{if(m=m?ze(b,m):"",m=it(u,m),v&-8)return-28;var A=Je(m,{Ra:!0}).node;return A?(u="",v&4&&(u+="r"),v&2&&(u+="w"),v&1&&(u+="x"),u&&qn(A,u)?-2:0):-44}catch(O){if(typeof be>"u"||O.name!=="ErrnoError")throw O;return-O.Ja}},i:function(u,m){try{var v=Lt(u);return xe(v.node,m),0}catch(A){if(typeof be>"u"||A.name!=="ErrnoError")throw A;return-A.Ja}},g:function(u){try{var m=Lt(u).node,v=typeof m=="string"?Je(m,{Ra:!0}).node:m;if(!v.Fa.Na)throw new W(63);return v.Fa.Na(v,{timestamp:Date.now()}),0}catch(A){if(typeof be>"u"||A.name!=="ErrnoError")throw A;return-A.Ja}},b:function(u,m,v){Sn=v;try{var A=Lt(u);switch(m){case 0:var O=Ft();if(0>O)break;for(;ye[O];)O++;return Or(A,O).fd;case 1:case 2:return 0;case 3:return A.flags;case 4:return O=Ft(),A.flags|=O,0;case 12:return O=Ft(),N[O+0>>1]=2,0;case 13:case 14:return 0}return-28}catch(Y){if(typeof be>"u"||Y.name!=="ErrnoError")throw Y;return-Y.Ja}},f:function(u,m){try{var v=Lt(u);return $t(H,v.path,m)}catch(A){if(typeof be>"u"||A.name!=="ErrnoError")throw A;return-A.Ja}},n:function(u,m,v){m=En(m,v);try{if(isNaN(m))return 61;var A=Lt(u);if(!(A.flags&2097155))throw new W(28);return Pe(A.node,m),0}catch(O){if(typeof be>"u"||O.name!=="ErrnoError")throw O;return-O.Ja}},C:function(u,m){try{if(m===0)return-28;var v=Ue("/")+1;return m<v?-68:(_e("/",b,u,m),v)}catch(A){if(typeof be>"u"||A.name!=="ErrnoError")throw A;return-A.Ja}},F:function(u,m){try{return u=u?ze(b,u):"",$t(he,u,m)}catch(v){if(typeof be>"u"||v.name!=="ErrnoError")throw v;return-v.Ja}},z:function(u,m,v){try{return m=m?ze(b,m):"",m=it(u,m),m=Oe(m),m[m.length-1]==="/"&&(m=m.substr(0,m.length-1)),_n(m,v),0}catch(A){if(typeof be>"u"||A.name!=="ErrnoError")throw A;return-A.Ja}},E:function(u,m,v,A){try{m=m?ze(b,m):"";var O=A&256;return m=it(u,m,A&4096),$t(O?he:H,m,v)}catch(Y){if(typeof be>"u"||Y.name!=="ErrnoError")throw Y;return-Y.Ja}},x:function(u,m,v,A){Sn=A;try{m=m?ze(b,m):"",m=it(u,m);var O=A?Ft():0;return Ae(m,v,O).fd}catch(Y){if(typeof be>"u"||Y.name!=="ErrnoError")throw Y;return-Y.Ja}},v:function(u,m,v,A){try{if(m=m?ze(b,m):"",m=it(u,m),0>=A)return-28;var O=j(m),Y=Math.min(A,Ue(O)),re=S[v+Y];return _e(O,b,v,A+1),S[v+Y]=re,Y}catch(Xe){if(typeof be>"u"||Xe.name!=="ErrnoError")throw Xe;return-Xe.Ja}},u:function(u){try{return u=u?ze(b,u):"",z(u),0}catch(m){if(typeof be>"u"||m.name!=="ErrnoError")throw m;return-m.Ja}},G:function(u,m){try{return u=u?ze(b,u):"",$t(H,u,m)}catch(v){if(typeof be>"u"||v.name!=="ErrnoError")throw v;return-v.Ja}},r:function(u,m,v){try{return m=m?ze(b,m):"",m=it(u,m),v===0?q(m):v===512?z(m):Re("Invalid flags passed to unlinkat"),0}catch(A){if(typeof be>"u"||A.name!=="ErrnoError")throw A;return-A.Ja}},q:function(u,m,v){try{if(m=m?ze(b,m):"",m=it(u,m,!0),v){var A=k[v>>2]+4294967296*F[v+4>>2],O=F[v+8>>2];Y=1e3*A+O/1e6,v+=16,A=k[v>>2]+4294967296*F[v+4>>2],O=F[v+8>>2],re=1e3*A+O/1e6}else var Y=Date.now(),re=Y;u=Y;var Xe=Je(m,{Ra:!0}).node;return Xe.Fa.Na(Xe,{timestamp:Math.max(u,re)}),0}catch(mt){if(typeof be>"u"||mt.name!=="ErrnoError")throw mt;return-mt.Ja}},l:function(u,m,v){u=new Date(1e3*En(u,m)),F[v>>2]=u.getSeconds(),F[v+4>>2]=u.getMinutes(),F[v+8>>2]=u.getHours(),F[v+12>>2]=u.getDate(),F[v+16>>2]=u.getMonth(),F[v+20>>2]=u.getFullYear()-1900,F[v+24>>2]=u.getDay(),m=u.getFullYear(),F[v+28>>2]=(m%4!==0||m%100===0&&m%400!==0?rn:bt)[u.getMonth()]+u.getDate()-1|0,F[v+36>>2]=-(60*u.getTimezoneOffset()),m=new Date(u.getFullYear(),6,1).getTimezoneOffset();var A=new Date(u.getFullYear(),0,1).getTimezoneOffset();F[v+32>>2]=(m!=A&&u.getTimezoneOffset()==Math.min(A,m))|0},j:function(u,m,v,A,O,Y,re,Xe){O=En(O,Y);try{if(isNaN(O))return 61;var mt=Lt(A);if(m&2&&!(v&2)&&(mt.flags&2097155)!==2)throw new W(2);if((mt.flags&2097155)===1)throw new W(2);if(!mt.Ga.ab)throw new W(43);var nt=mt.Ga.ab(mt,u,O,m,v),It=nt.Cb;return F[re>>2]=nt.tb,k[Xe>>2]=It,0}catch(Ht){if(typeof be>"u"||Ht.name!=="ErrnoError")throw Ht;return-Ht.Ja}},k:function(u,m,v,A,O,Y,re){Y=En(Y,re);try{var Xe=Lt(O);if(v&2){if((Xe.node.mode&61440)!==32768)throw new W(43);if(!(A&2)){var mt=b.slice(u,u+m);Xe.Ga.bb&&Xe.Ga.bb(Xe,mt,Y,m,A)}}}catch(nt){if(typeof be>"u"||nt.name!=="ErrnoError")throw nt;return-nt.Ja}},y:(u,m,v,A)=>{var O=new Date().getFullYear(),Y=new Date(O,0,1).getTimezoneOffset();O=new Date(O,6,1).getTimezoneOffset(),k[u>>2]=60*Math.max(Y,O),F[m>>2]=+(Y!=O),m=re=>{var Xe=Math.abs(re);return`UTC${0<=re?"-":"+"}${String(Math.floor(Xe/60)).padStart(2,"0")}${String(Xe%60).padStart(2,"0")}`},u=m(Y),m=m(O),O<Y?(_e(u,b,v,17),_e(m,b,A,17)):(_e(u,b,A,17),_e(m,b,v,17))},d:()=>Date.now(),s:()=>2147483648,c:()=>performance.now(),o:u=>{var m=b.length;if(u>>>=0,2147483648<u)return!1;for(var v=1;4>=v;v*=2){var A=m*(1+.2/v);A=Math.min(A,u+100663296);var O=Math;A=Math.max(u,A);e:{O=(O.min.call(O,2147483648,A+(65536-A%65536)%65536)-C.buffer.byteLength+65535)/65536;try{C.grow(O),J();var Y=1;break e}catch{}Y=void 0}if(Y)return!0}return!1},A:(u,m)=>{var v=0;return Bt().forEach((A,O)=>{var Y=m+v;for(O=k[u+4*O>>2]=Y,Y=0;Y<A.length;++Y)S[O++]=A.charCodeAt(Y);S[O]=0,v+=A.length+1}),0},B:(u,m)=>{var v=Bt();k[u>>2]=v.length;var A=0;return v.forEach(O=>A+=O.length+1),k[m>>2]=A,0},e:function(u){try{var m=Lt(u);return We(m),0}catch(v){if(typeof be>"u"||v.name!=="ErrnoError")throw v;return v.Ja}},p:function(u,m){try{var v=Lt(u);return S[m]=v.tty?2:Wt(v.mode)?3:(v.mode&61440)===40960?7:4,N[m+2>>1]=0,Te=[0,(fe=0,1<=+Math.abs(fe)?0<fe?+Math.floor(fe/4294967296)>>>0:~~+Math.ceil((fe-+(~~fe>>>0))/4294967296)>>>0:0)],F[m+8>>2]=Te[0],F[m+12>>2]=Te[1],Te=[0,(fe=0,1<=+Math.abs(fe)?0<fe?+Math.floor(fe/4294967296)>>>0:~~+Math.ceil((fe-+(~~fe>>>0))/4294967296)>>>0:0)],F[m+16>>2]=Te[0],F[m+20>>2]=Te[1],0}catch(A){if(typeof be>"u"||A.name!=="ErrnoError")throw A;return A.Ja}},w:function(u,m,v,A){try{e:{var O=Lt(u);u=m;for(var Y,re=m=0;re<v;re++){var Xe=k[u>>2],mt=k[u+4>>2];u+=8;var nt=He(O,S,Xe,mt,Y);if(0>nt){var It=-1;break e}if(m+=nt,nt<mt)break;typeof Y<"u"&&(Y+=nt)}It=m}return k[A>>2]=It,0}catch(Ht){if(typeof be>"u"||Ht.name!=="ErrnoError")throw Ht;return Ht.Ja}},m:function(u,m,v,A,O){m=En(m,v);try{if(isNaN(m))return 61;var Y=Lt(u);return je(Y,m,A),Te=[Y.position>>>0,(fe=Y.position,1<=+Math.abs(fe)?0<fe?+Math.floor(fe/4294967296)>>>0:~~+Math.ceil((fe-+(~~fe>>>0))/4294967296)>>>0:0)],F[O>>2]=Te[0],F[O+4>>2]=Te[1],Y.gb&&m===0&&A===0&&(Y.gb=null),0}catch(re){if(typeof be>"u"||re.name!=="ErrnoError")throw re;return re.Ja}},D:function(u){var v;try{var m=Lt(u);return(v=m.Ga)!=null&&v.fsync?m.Ga.fsync(m):0}catch(A){if(typeof be>"u"||A.name!=="ErrnoError")throw A;return A.Ja}},t:function(u,m,v,A){try{e:{var O=Lt(u);u=m;for(var Y,re=m=0;re<v;re++){var Xe=k[u>>2],mt=k[u+4>>2];u+=8;var nt=at(O,S,Xe,mt,Y);if(0>nt){var It=-1;break e}m+=nt,typeof Y<"u"&&(Y+=nt)}It=m}return k[A>>2]=It,0}catch(Ht){if(typeof be>"u"||Ht.name!=="ErrnoError")throw Ht;return Ht.Ja}}},Ve=function(){var v;function u(A){var O;return Ve=A.exports,C=Ve.I,J(),Xn=Ve.K,K.unshift(Ve.J),me--,(O=l.monitorRunDependencies)==null||O.call(l,me),me==0&&ve&&(A=ve,ve=null,A()),Ve}var m={a:md};if(me++,(v=l.monitorRunDependencies)==null||v.call(l,me),l.instantiateWasm)try{return l.instantiateWasm(m,u)}catch(A){return L(`Module.instantiateWasm callback failed with error: ${A}`),!1}return Me||(Me=Q("sql-wasm.wasm")?"sql-wasm.wasm":l.locateFile?l.locateFile("sql-wasm.wasm",y):y+"sql-wasm.wasm"),ke(m,function(A){u(A.instance)}),{}}();l._sqlite3_free=u=>(l._sqlite3_free=Ve.L)(u),l._sqlite3_value_text=u=>(l._sqlite3_value_text=Ve.M)(u),l._sqlite3_prepare_v2=(u,m,v,A,O)=>(l._sqlite3_prepare_v2=Ve.N)(u,m,v,A,O),l._sqlite3_step=u=>(l._sqlite3_step=Ve.O)(u),l._sqlite3_reset=u=>(l._sqlite3_reset=Ve.P)(u),l._sqlite3_exec=(u,m,v,A,O)=>(l._sqlite3_exec=Ve.Q)(u,m,v,A,O),l._sqlite3_finalize=u=>(l._sqlite3_finalize=Ve.R)(u),l._sqlite3_column_name=(u,m)=>(l._sqlite3_column_name=Ve.S)(u,m),l._sqlite3_column_text=(u,m)=>(l._sqlite3_column_text=Ve.T)(u,m),l._sqlite3_column_type=(u,m)=>(l._sqlite3_column_type=Ve.U)(u,m),l._sqlite3_errmsg=u=>(l._sqlite3_errmsg=Ve.V)(u),l._sqlite3_clear_bindings=u=>(l._sqlite3_clear_bindings=Ve.W)(u),l._sqlite3_value_blob=u=>(l._sqlite3_value_blob=Ve.X)(u),l._sqlite3_value_bytes=u=>(l._sqlite3_value_bytes=Ve.Y)(u),l._sqlite3_value_double=u=>(l._sqlite3_value_double=Ve.Z)(u),l._sqlite3_value_int=u=>(l._sqlite3_value_int=Ve._)(u),l._sqlite3_value_type=u=>(l._sqlite3_value_type=Ve.$)(u),l._sqlite3_result_blob=(u,m,v,A)=>(l._sqlite3_result_blob=Ve.aa)(u,m,v,A),l._sqlite3_result_double=(u,m)=>(l._sqlite3_result_double=Ve.ba)(u,m),l._sqlite3_result_error=(u,m,v)=>(l._sqlite3_result_error=Ve.ca)(u,m,v),l._sqlite3_result_int=(u,m)=>(l._sqlite3_result_int=Ve.da)(u,m),l._sqlite3_result_int64=(u,m,v)=>(l._sqlite3_result_int64=Ve.ea)(u,m,v),l._sqlite3_result_null=u=>(l._sqlite3_result_null=Ve.fa)(u),l._sqlite3_result_text=(u,m,v,A)=>(l._sqlite3_result_text=Ve.ga)(u,m,v,A),l._sqlite3_aggregate_context=(u,m)=>(l._sqlite3_aggregate_context=Ve.ha)(u,m),l._sqlite3_column_count=u=>(l._sqlite3_column_count=Ve.ia)(u),l._sqlite3_data_count=u=>(l._sqlite3_data_count=Ve.ja)(u),l._sqlite3_column_blob=(u,m)=>(l._sqlite3_column_blob=Ve.ka)(u,m),l._sqlite3_column_bytes=(u,m)=>(l._sqlite3_column_bytes=Ve.la)(u,m),l._sqlite3_column_double=(u,m)=>(l._sqlite3_column_double=Ve.ma)(u,m),l._sqlite3_bind_blob=(u,m,v,A,O)=>(l._sqlite3_bind_blob=Ve.na)(u,m,v,A,O),l._sqlite3_bind_double=(u,m,v)=>(l._sqlite3_bind_double=Ve.oa)(u,m,v),l._sqlite3_bind_int=(u,m,v)=>(l._sqlite3_bind_int=Ve.pa)(u,m,v),l._sqlite3_bind_text=(u,m,v,A,O)=>(l._sqlite3_bind_text=Ve.qa)(u,m,v,A,O),l._sqlite3_bind_parameter_index=(u,m)=>(l._sqlite3_bind_parameter_index=Ve.ra)(u,m),l._sqlite3_sql=u=>(l._sqlite3_sql=Ve.sa)(u),l._sqlite3_normalized_sql=u=>(l._sqlite3_normalized_sql=Ve.ta)(u),l._sqlite3_changes=u=>(l._sqlite3_changes=Ve.ua)(u),l._sqlite3_close_v2=u=>(l._sqlite3_close_v2=Ve.va)(u),l._sqlite3_create_function_v2=(u,m,v,A,O,Y,re,Xe,mt)=>(l._sqlite3_create_function_v2=Ve.wa)(u,m,v,A,O,Y,re,Xe,mt),l._sqlite3_open=(u,m)=>(l._sqlite3_open=Ve.xa)(u,m);var fo=l._malloc=u=>(fo=l._malloc=Ve.ya)(u),zr=l._free=u=>(zr=l._free=Ve.za)(u);l._RegisterExtensionFunctions=u=>(l._RegisterExtensionFunctions=Ve.Aa)(u);var Fc=(u,m)=>(Fc=Ve.Ba)(u,m),sr=u=>(sr=Ve.Ca)(u),di=u=>(di=Ve.Da)(u),rr=()=>(rr=Ve.Ea)();l.stackSave=()=>rr(),l.stackRestore=u=>sr(u),l.stackAlloc=u=>di(u),l.cwrap=(u,m,v,A)=>{var O=!v||v.every(Y=>Y==="number"||Y==="boolean");return m!=="string"&&O&&!A?l["_"+u]:(...Y)=>jn(u,m,v,Y)},l.addFunction=Br,l.removeFunction=ss,l.UTF8ToString=Be,l.ALLOC_NORMAL=kr,l.allocate=Fr,l.allocateUTF8OnStack=Pi;var Hr;ve=function u(){Hr||Bc(),Hr||(ve=u)};function Bc(){function u(){var v;if(!Hr&&(Hr=!0,l.calledRun=!0,!D)){if(l.noFSInit||Et||(Et=!0,l.stdin=l.stdin,l.stdout=l.stdout,l.stderr=l.stderr,l.stdin?_t("stdin",l.stdin):E("/dev/tty","/dev/stdin"),l.stdout?_t("stdout",null,l.stdout):E("/dev/tty","/dev/stdout"),l.stderr?_t("stderr",null,l.stderr):E("/dev/tty1","/dev/stderr"),Ae("/dev/stdin",0),Ae("/dev/stdout",1),Ae("/dev/stderr",1)),Ee=!1,ht(K),(v=l.onRuntimeInitialized)==null||v.call(l),l.postRun)for(typeof l.postRun=="function"&&(l.postRun=[l.postRun]);l.postRun.length;){var m=l.postRun.shift();ee.unshift(m)}ht(ee)}}if(!(0<me)){if(l.preRun)for(typeof l.preRun=="function"&&(l.preRun=[l.preRun]);l.preRun.length;)ae();ht(de),0<me||(l.setStatus?(l.setStatus("Running..."),setTimeout(function(){setTimeout(function(){l.setStatus("")},1),u()},1)):u())}}if(l.preInit)for(typeof l.preInit=="function"&&(l.preInit=[l.preInit]);0<l.preInit.length;)l.preInit.pop()();return Bc(),o}),t)};i.exports=n,i.exports.default=n})(fd);var jb=fd.exports;const Xb=ad(jb),$b="/realm/play/assets/sql-wasm-Bku9E_kW.wasm",Kb="justa-web",Xi="db";function hd(){return new Promise((i,e)=>{const t=indexedDB.open(Kb,1);t.onupgradeneeded=()=>t.result.createObjectStore(Xi),t.onsuccess=()=>i(t.result),t.onerror=()=>e(t.error)})}async function Yb(){try{const i=await hd();return await new Promise(e=>{const t=i.transaction(Xi).objectStore(Xi).get(Xi);t.onsuccess=()=>e(t.result??null),t.onerror=()=>e(null)})}catch{return null}}async function Jb(i){try{const e=await hd();await new Promise(t=>{const n=e.transaction(Xi,"readwrite");n.objectStore(Xi).put(i,Xi),n.oncomplete=t,n.onerror=t})}catch{}}function Zb(i,e){let t=i[0];const n={};return e.forEach((s,r)=>{const a="$p"+r;if(s!==null&&!["string","number","boolean"].includes(typeof s))throw new TypeError(`ctx.sql: \${} binds string, number, boolean or null, got ${typeof s}`);n[a]=typeof s=="boolean"?s?1:0:s,t+=a+i[r+1]}),{text:t,params:n}}async function Qb({persist:i=!0}={}){const e=await Xb({locateFile:()=>$b}),t=i?await Yb():null;let n=t?new e.Database(t):new e.Database,s=!1,r=null;const a=()=>{!i||!s||r||(s=!1,r=Jb(n.export()).then(()=>{r=null,s&&a()}))};function o(c,l,f){var _,g,R;const{text:h,params:d}=Zb(l,f);c!=null&&(d["@caller"]=c);let p=[],x=0;n.run("BEGIN");try{for(const T of n.iterateStatements(h)){T.bind(d);const w=[];for(;T.step();)w.push(T.getAsObject());T.getColumnNames().length&&(p=w),x+=n.getRowsModified(),T.free()}n.run("COMMIT")}catch(T){try{n.run("ROLLBACK")}catch{}throw T}const y=((R=(g=(_=n.exec("SELECT last_insert_rowid() AS id")[0])==null?void 0:_.values)==null?void 0:g[0])==null?void 0:R[0])??0;return x&&(s=!0,queueMicrotask(a)),{rows:p,changes:x,lastInsertRowid:Number(y)}}return{sqlFor:c=>(l,...f)=>Promise.resolve().then(()=>o(c,l,f)),async migrate(c){await c((l,...f)=>Promise.resolve().then(()=>o(null,l,f)))},async reset(){n.close(),n=new e.Database,s=!0,a()},get raw(){return n}}}function ci(i){return i=(i^i>>>16)>>>0,i=Math.imul(i,2146121005)>>>0,i=(i^i>>>15)>>>0,i=Math.imul(i,2221713035)>>>0,(i^i>>>16)>>>0}const Zt=(i,e)=>ci((i^ci(e+2654435769))>>>0)/4294967296;function xa(i){const e=Math.floor(i),t=i-e,n=t*t*(3-2*t),s=ci(e|0)/2147483648-1,r=ci(e+1|0)/2147483648-1;return s+(r-s)*n}const Mf={depth:1};function ew(){return{seed:0,t:0,age:0,life:1/0,time:0,mobile:!1,size:0,spin:0,glo:1,tint:[1,1,1],p:[0,0,0],v:[0,0,0],offset:[0,0,0]}}const il=/\s*(?:(\d+(?:\.\d+)?|\.\d+)|(\.\.)|([A-Za-z_][A-Za-z0-9_]*(?:-[A-Za-z][A-Za-z0-9_]*)*)|([$%#][A-Za-z_][A-Za-z0-9_]*)|([()<>,:+\-*/.?|~@;]))/y;function tw(i){const e=[];for(il.lastIndex=0;;){const t=il.lastIndex;if(/^\s*$/.test(i.slice(t)))break;const n=il.exec(i);if(!n)throw new Error(`fx: cannot read "${i.slice(t)}"`);n[1]!==void 0?e.push({k:"num",v:Number(n[1])}):n[2]!==void 0?e.push({k:".."}):n[3]!==void 0?e.push({k:"id",v:n[3]}):n[4]!==void 0?e.push({k:n[4][0],v:n[4].slice(1)}):e.push({k:n[5]})}return e}const Ri=i=>typeof i!="number",Yi=()=>[0,0,0],nw={"+":(i,e)=>i+e,"-":(i,e)=>i-e,"*":(i,e)=>i*e,"/":(i,e)=>e===0?0:i/e};function Sf(i,e,t,n){const s=Ri(e),r=Ri(t);return!s&&!r?i(e,t):(n[0]=i(s?e[0]:e,r?t[0]:t),n[1]=i(s?e[1]:e,r?t[1]:t),n[2]=i(s?e[2]:e,r?t[2]:t),n)}function iw(i,e,t,n){const s=Ri(i),r=Ri(e);if(!s&&!r)return i+(e-i)*t;for(let a=0;a<3;a++){const o=s?i[a]:i,c=r?e[a]:e;n[a]=o+(c-o)*t}return n}const sw=(i,e)=>Ri(i)?i:(e[0]=e[1]=e[2]=i,e),gr=i=>({fn:()=>i,k:"const",v:i}),rw=i=>(i.k==="const",i);class aw{constructor(e,t){this.t=tw(e),this.i=0,this.ids=t}peek(e){var t;return((t=this.t[this.i])==null?void 0:t.k)===e}take(e){const t=this.t[this.i];if(!t||e&&t.k!==e)throw new Error(`fx: expected ${e??"more"} at ${this.i}`);return this.i++,t}done(){return this.i>=this.t.length}value(){if(this.peek("?"))return this.tier();let e=this.sum();if(!this.peek(">"))return e;const t=[{t:0,n:e}];for(;this.peek(">");){this.take(">");const n=this.sum();if(this.peek(":")){if(this.take(":"),n.k!=="const"||Ri(n.v))throw new Error("fx: a ramp's time is a number");t.push({t:n.v,n:this.sum()})}else{t.push({t:1,n});break}}return ow(t)}tier(){this.take("?");const e=this.take("id").v;this.take(":");const t=this.sum();this.take("|");const n=this.sum();if(e!=="mobile")throw new Error(`fx: unknown tier ?${e}`);return{fn:s=>s.mobile?t.fn(s):n.fn(s),k:"var"}}sum(){let e=this.product();for(;this.peek("+")||this.peek("-");){const t=this.take().k,n=this.product();e=sl(t,e,n)}return e}product(){let e=this.unary();for(;this.peek("*")||this.peek("/");){const t=this.take().k,n=this.unary();e=sl(t,e,n)}return e}unary(){return this.peek("-")?(this.take("-"),this.peek("num")?this.number(-this.take("num").v):sl("*",gr(-1),this.unary())):this.postfix(this.primary())}number(e){if(!this.peek(".."))return gr(e);this.take("..");const n=(this.peek("-")?(this.take("-"),-1):1)*this.take("num").v,s=this.ids.next++;return{fn:r=>e+(n-e)*Zt(r.seed,s),k:"var"}}postfix(e){var t;for(;;)if(this.peek("~"))this.take("~");else if(this.peek(".")&&((t=this.t[this.i+1])==null?void 0:t.k)==="id"){this.take(".");const n=this.take("id").v,s=this.args();e=cw(e,n,s)}else return e}args(){this.take("(");const e=[];if(this.peek(")"))return this.take(")"),e;for(;e.push(this.value()),this.peek(",");)this.take(",");return this.take(")"),e}primary(){const e=this.t[this.i];if(!e)throw new Error("fx: a value is missing");if(e.k==="num")return this.number(this.take("num").v);if(e.k==="$")return this.take("$"),lw(e.v);if(e.k==="%"||e.k==="#")throw new Error(`fx: ${e.k}${e.v} is not read here yet`);if(e.k==="("){this.take("(");const t=this.value();return this.take(")"),t}if(e.k==="<"){this.take("<");const t=this.sum();this.take(",");const n=this.sum();this.take(",");const s=this.sum();if(this.take(">"),[t,n,s].every(a=>a.k==="const"))return gr([t.v,n.v,s.v]);const r=Yi();return{fn:a=>(r[0]=t.fn(a),r[1]=n.fn(a),r[2]=s.fn(a),r),k:"var"}}if(e.k==="id")return this.take("id"),this.peek("(")?fw(e.v,this.args(),this.ids):{fn:()=>e.v,k:"name",name:e.v};throw new Error(`fx: unexpected ${e.k}`)}}function sl(i,e,t){const n=nw[i];if(e.k==="const"&&t.k==="const")return gr(Sf(n,e.v,t.v,Yi()));const s=Yi();return{fn:r=>Sf(n,e.fn(r),t.fn(r),s),k:"var"}}function ow(i){const e=Yi();return{k:"var",fn(t){const n=Math.min(Math.max(t.t,0),1);let s=1;for(;s<i.length-1&&i[s].t<n;)s++;const r=i[s-1],a=i[s],o=a.t-r.t;return iw(r.n.fn(t),a.n.fn(t),o>0?Math.min(Math.max((n-r.t)/o,0),1):1,e)}}}function lw(i){const e={size:t=>t.size,spin:t=>t.spin,glo:t=>t.glo,tint:t=>t.tint,age:t=>t.age,life:t=>Number.isFinite(t.life)?t.life:0,v:t=>t.v}[i];if(!e)throw new Error(`fx: unknown variable $${i}`);return{fn:e,k:"var"}}function cw(i,e,t){if(e==="c"){const r=t[0],a=Yi();return{fn:o=>{const c=i.fn(o),l=r.fn(o),f=Ri(c);return a[0]=f?c[0]:c,a[1]=(f?c[1]:c)+l,a[2]=f?c[2]:c,a},k:"var",shape:i.shape}}const n={sin:Math.sin,cos:Math.cos,abs:Math.abs,floor:Math.floor,sqrt:Math.sqrt,fract:r=>r-Math.floor(r)}[e];if(!n)throw new Error(`fx: unknown .${e}()`);const s=Yi();return{fn:r=>{const a=i.fn(r);return Ri(a)?(s[0]=n(a[0]),s[1]=n(a[1]),s[2]=n(a[2]),s):n(a)},k:"var"}}function rl(i,e,t,n=1){const s=2*i-1,r=Math.sqrt(Math.max(0,1-s*s)),a=2*Math.PI*e;return t[0]=r*Math.cos(a)*n,t[1]=s*n,t[2]=r*Math.sin(a)*n,t}function uw(i,e,t,n){const s=2*Math.PI*e,r=i[0],a=i[1],o=i[2],c=.9*Math.cos(.9*s*a+3.3),l=Math.cos(s*o+1.3*t+2.1),f=1.3*Math.cos(1.3*s*o+.7),h=Math.cos(s*r+1.1*t+4.2),d=1.1*Math.cos(1.1*s*r+1.9),p=Math.cos(s*a+1.7*t);return n[0]=c-l,n[1]=f-h,n[2]=d-p,n}function fw(i,e,t){const n=(a,o,c=0)=>e[a]?e[a].fn(o):c,s=t.next,r=Yi();switch(t.next+=4,i){case"up":return{fn:a=>(r[0]=0,r[1]=n(0,a,1),r[2]=0,r),k:"var"};case"sdir":case"sphereDir":return{fn:a=>rl(Zt(a.seed,s),Zt(a.seed,s+1),r),k:"var"};case"cone":return{k:"var",fn(a){const o=n(0,a,15)*Math.PI/180,c=1-Zt(a.seed,s)*(1-Math.cos(o)),l=Math.sqrt(Math.max(0,1-c*c)),f=2*Math.PI*Zt(a.seed,s+1);return r[0]=l*Math.cos(f),r[1]=c,r[2]=l*Math.sin(f),r}};case"radial":return{k:"var",fn(a){const o=a.offset[0],c=a.offset[2],l=Math.hypot(o,c),f=n(0,a,1);if(r[1]=0,l>1e-6)return r[0]=o/l*f,r[2]=c/l*f,r;const h=2*Math.PI*Zt(a.seed,s);return r[0]=Math.cos(h)*f,r[2]=Math.sin(h)*f,r}};case"blast":return{k:"var",fn(a){const o=a.offset,c=Math.hypot(o[0],o[1],o[2]),l=n(0,a,1);return c>1e-6?(r[0]=o[0]/c*l,r[1]=o[1]/c*l,r[2]=o[2]/c*l,r):rl(Zt(a.seed,s),Zt(a.seed,s+1),r,l)}};case"grav":case"gravity":return gr([0,-9.81,0]);case"buoy":case"buoyancy":return{fn:a=>(r[0]=0,r[1]=n(0,a,1),r[2]=0,r),k:"var"};case"drag":return{fn:a=>{const o=n(0,a,1);return r[0]=-o*a.v[0],r[1]=-o*a.v[1],r[2]=-o*a.v[2],r},k:"var"};case"curl":return{fn:a=>uw(a.p,n(0,a,.5),a.time,r),k:"var"};case"force":return{fn:a=>sw(n(0,a,0),r),k:"var"};case"hdr":case"rgb":case"vec3":return{fn:a=>(r[0]=n(0,a),r[1]=n(1,a),r[2]=n(2,a),r),k:"var"};case"spin":return{fn:a=>a.age*(2*Zt(a.seed,s)-1)*n(0,a,1)*2*Math.PI,k:"var"};case"flick":case"flicker":return{fn:a=>1+Mf.depth*n(1,a,.15)*xa(a.time*n(0,a,1)+a.seed%997),k:"var"};case"fire":case"firelight":return{fn:a=>1+Mf.depth*(.25*xa(a.time*n(0,a,1.2)+3.1)+.15*xa(a.time*n(1,a,2)+17.7)),k:"var"};case"noise":return{fn:a=>xa(n(0,a,a.time)),k:"var"};case"time":return{fn:a=>a.time,k:"var"};case"point":return{fn:()=>(r[0]=r[1]=r[2]=0,r),k:"var",shape:!0};case"disc":return{k:"var",shape:!0,fn(a){const o=n(0,a,1)*Math.sqrt(Zt(a.seed,s)),c=2*Math.PI*Zt(a.seed,s+1);return r[0]=o*Math.cos(c),r[1]=0,r[2]=o*Math.sin(c),r}};case"sphere":return{k:"var",shape:!0,fn(a){const o=n(0,a,1)*Math.cbrt(Zt(a.seed,s+2));return rl(Zt(a.seed,s),Zt(a.seed,s+1),r,o)}};case"box":return{fn:a=>{for(let o=0;o<3;o++)r[o]=(2*Zt(a.seed,s+o)-1)*n(o,a,1);return r},k:"var",shape:!0};case"line":return{k:"var",shape:!0,fn(a){const o=n(1,a,1),c=n(2,a,0),l=n(3,a,0),f=Math.hypot(o,c,l)||1,h=(Zt(a.seed,s)-.5)*n(0,a,1);return r[0]=o/f*h,r[1]=c/f*h,r[2]=l/f*h,r}};case"sprite":case"light":return{fn:()=>null,k:"render",name:i,args:e};case"bounce":return{fn:()=>null,k:"floor",args:e};default:throw new Error(`fx: unknown ${i}()`)}}function Ef(i,e={next:1}){const t=new aw(String(i),e),n=t.value();if(!t.done())throw new Error(`fx: "${i}" has more than one value`);return rw(n)}const hw=["life","v","size","spin","tint"],dw=["acc","sz","col","a","rot","glo"],pw=new Set(["rate","burst","n","on","at","floor","r",...hw,...dw]),Tf=8;function mw(i){const e=[];let t=0,n="";for(const s of i)s==="("?t++:s===")"&&(t=Math.max(0,t-1)),/\s/.test(s)&&t===0?(n&&e.push(n),n=""):n+=s;return n&&e.push(n),e}function gw(i){if((i==null?void 0:i.k)!=="render")throw new Error("fx: r= takes sprite(...) or light(...)");const e=n=>i.args[n],t=(n,s)=>{var r;return((r=e(n))==null?void 0:r.k)==="name"?e(n).name:s};if(i.name==="sprite"){const n=e(3);if(n&&n.k!=="const")throw new Error("fx: a sprite's stretch is a number");return{kind:"sprite",texture:t(0,"soft-disc"),blend:t(1,"alpha"),align:t(2,"full"),stretch:n?n.v:0}}return{kind:"light",color:e(0),intensity:e(1),radius:e(2)}}function _w(i){var e;if(i.k==="name"){if(!["die","stick","bounce"].includes(i.name))throw new Error(`fx: floor=${i.name}?`);return{mode:i.name,k:.5}}if(i.k==="floor")return{mode:"bounce",k:((e=i.args[0])==null?void 0:e.k)==="const"?i.args[0].v:.5};throw new Error("fx: floor= takes die, stick or bounce(k)")}function vw(i){const[,e,t]=i.match(/^pop\s+(\S+)\s*(.*)$/)??[];if(!e)throw new Error(`fx: "${i}" is not a pop line`);const n={name:e,ignored:[]},s={next:1};for(const r of mw(t)){const a=r.indexOf("=");if(a<=0)throw new Error(`fx: "${r}" is not key=value`);const o=r.slice(0,a),c=r.slice(a+1);if(!pw.has(o)){n.ignored.push(o);continue}const l=o==="on"&&c.match(/^@([A-Za-z_][\w-]*)(?:\?(\d*\.?\d+))?$/);if(l){n.parent={name:l[1],chance:l[2]===void 0?1:Number(l[2])};continue}const f=Ef(c,s);if(o==="r")n.r=gw(f);else if(o==="floor")n.floor=_w(f);else if(o==="n"){if(f.k!=="const")throw new Error("fx: n= is a number");n.n=f.v}else n[o]=f}if(!n.r)throw new Error(`fx: pop ${e} has no r=`);return!n.rate&&!n.burst&&n.n==null&&!n.parent&&(n.burst=Ef("1")),n}function yw(i){var n;const e=[];for(const s of String(i).split(/\r?\n/)){const r=s.replace(/\/\/.*$/,"");r.trim()&&(/^\s/.test(r)&&e.length?e[e.length-1]+=" "+r.trim():e.push(r.trim()))}if(((n=e[0])==null?void 0:n.split(/\s+/)[0])!=="fx")throw new Error("fx: a program starts with the line fx");const t=e.slice(1).map(vw);if(t.length>Tf)throw new Error(`fx: ${t.length} populations, at most ${Tf}`);for(const s of t)if(s.parent&&!t.some(r=>r.name===s.parent.name))throw new Error(`fx: pop ${s.name} is born on @${s.parent.name}, which is not here`);return{pops:t}}const Af=0,Rf=.3;class xw{constructor(){this.n=0,this.cap=0,this.grow(64)}grow(e){const t=(s,r)=>{const a=new Float64Array(e*r);return s&&a.set(s.subarray(0,this.n*r)),a};this.p=t(this.p,3),this.v=t(this.v,3),this.o=t(this.o,3),this.tint=t(this.tint,3),this.age=t(this.age,1),this.life=t(this.life,1),this.size=t(this.size,1),this.spin=t(this.spin,1),this.stuck=t(this.stuck,1);const n=new Uint32Array(e);this.seed&&n.set(this.seed.subarray(0,this.n)),this.seed=n,this.cap=e}add(){return this.n===this.cap&&this.grow(this.cap*2),this.n++}kill(e){const t=--this.n;if(e!==t){for(const[n,s]of[[this.p,3],[this.v,3],[this.o,3],[this.tint,3],[this.age,1],[this.life,1],[this.size,1],[this.spin,1],[this.stuck,1]])for(let r=0;r<s;r++)n[e*s+r]=n[t*s+r];this.seed[e]=this.seed[t]}}}const bs=(i,e)=>typeof i=="number"?(e[0]=e[1]=e[2]=i,e):i,Cf=Object.freeze([0,0,0]),bw=Object.freeze([1,1,1]);class ww{constructor(e,{anchor:t=[0,0,0],mobile:n=!1,seed:s=1}={}){this.pops=e.pops.map(r=>({pop:r,pool:new xw,carry:0,burst:!1,children:[]}));for(const r of this.pops)r.pop.parent&&this.pops.find(a=>a.pop.name===r.pop.parent.name).children.push(r);this.anchor=[...t],this.from=[...t],this.time=0,this.emitting=!0,this.seed=ci(s>>>0),this.births=0,this.c=ew(),this.scratch=[0,0,0],this.c.mobile=n}moveTo(e,t,n){this.anchor[0]=e,this.anchor[1]=t,this.anchor[2]=n}stop(){this.emitting=!1;for(const e of this.pops)e.pop.n!=null&&!e.pop.life&&(e.pool.n=0)}get done(){return this.pops.some(e=>e.pool.n>0)?!1:!this.emitting||this.pops.every(e=>e.pop.parent||!e.pop.rate&&e.pop.n==null&&e.burst)}read(e,t){const n=this.c;n.seed=e.seed[t],n.age=e.age[t],n.life=e.life[t],n.t=Number.isFinite(n.life)&&n.life>0?n.age/n.life:0,n.size=e.size[t],n.spin=e.spin[t];for(let s=0;s<3;s++)n.p[s]=e.p[t*3+s],n.v[s]=e.v[t*3+s],n.offset[s]=e.o[t*3+s],n.tint[s]=e.tint[t*3+s];return n}born(e,t,n,s=null){const{pop:r,pool:a}=e,o=a.add(),c=this.c;a.seed[o]=ci((this.seed^Math.imul(++this.births,2654435761))>>>0),c.seed=a.seed[o],c.age=0,c.t=0,c.life=1/0;const l=r.on??r.at,f=l&&!s?bs(l.fn(c),this.scratch):Cf;for(let p=0;p<3;p++)c.offset[p]=f[p];for(let p=0;p<3;p++)a.o[o*3+p]=f[p],a.p[o*3+p]=s?s[p]:this.from[p]+(this.anchor[p]-this.from[p])*t+f[p];const h=r.v?bs(r.v.fn(c),this.scratch):Cf;for(let p=0;p<3;p++)a.v[o*3+p]=h[p];a.life[o]=r.life?Math.max(.001,r.life.fn(c)):1/0,a.size[o]=r.size?r.size.fn(c):.1,a.spin[o]=r.spin?r.spin.fn(c):0;const d=r.tint?bs(r.tint.fn(c),this.scratch):bw;for(let p=0;p<3;p++)a.tint[o*3+p]=d[p];a.stuck[o]=0,a.age[o]=0,this.step(e,o,(1-t)*n)}step(e,t,n){const{pop:s,pool:r}=e;if(r.age[t]+=n,r.age[t]>=r.life[t])return!1;if(r.stuck[t])return!0;if(s.acc){const c=bs(s.acc.fn(this.read(r,t)),this.scratch);for(let l=0;l<3;l++)r.v[t*3+l]+=c[l]*n}for(let c=0;c<3;c++)r.p[t*3+c]+=r.v[t*3+c]*n;const a=s.floor,o=t*3+1;if(a&&r.p[o]<Af){if(a.mode==="die")return!1;r.p[o]=Af,a.mode==="stick"?(r.v[t*3]=r.v[o]=r.v[t*3+2]=0,r.stuck[t]=1):r.v[o]<0&&(r.v[o]=-r.v[o]*a.k,r.v[t*3]*=.7,r.v[t*3+2]*=.7,r.v[o]<Rf&&(r.v[o]=0,r.stuck[t]=Math.hypot(r.v[t*3],r.v[t*3+2])<Rf?1:0))}return!0}update(e){this.time+=e,this.c.time=this.time;for(const t of this.pops){const{pop:n,pool:s}=t;for(let o=0;o<s.n;){if(this.step(t,o,e)){o++;continue}for(const c of t.children)ci((s.seed[o]^1540483477)>>>0)/4294967296<c.pop.parent.chance&&this.born(c,1,0,[s.p[o*3],s.p[o*3+1],s.p[o*3+2]]);s.kill(o)}if(!this.emitting)continue;const r=this.c;r.seed=this.seed,r.t=0,r.age=this.time;let a=0;if(n.burst&&!t.burst&&(t.burst=!0,a+=Math.max(0,Math.round(n.burst.fn(r)))),n.rate){t.carry+=Math.max(0,n.rate.fn(r))*e;const o=Math.floor(t.carry);t.carry-=o,a+=o}n.n!=null&&(a+=Math.max(0,n.n-s.n));for(let o=0;o<a;o++)this.born(t,(o+.5)/a,e)}this.from[0]=this.anchor[0],this.from[1]=this.anchor[1],this.from[2]=this.anchor[2]}draw(e,t,n=null){for(const s of this.pops){const{pop:r,pool:a}=s,o=r.r;for(let c=0;c<a.n;c++){if(n&&o.kind!=="light"&&!n(a.p[c*3],a.p[c*3+1],a.p[c*3+2],Math.max(a.size[c]*3,1)))continue;const l=this.read(a,c);if(l.glo=r.glo?r.glo.fn(l):1,o.kind==="light"){t&&t(o,l.p[0],l.p[1],l.p[2],bs(o.color?o.color.fn(l):1,this.scratch),o.intensity?o.intensity.fn(l):1,o.radius?o.radius.fn(l):5);continue}const f=r.sz?r.sz.fn(l):l.size,h=r.a?r.a.fn(l):1;if(!(f>0)||!(h>0))continue;const d=r.col?bs(r.col.fn(l),this.scratch):l.tint;e(o,l.p[0],l.p[1],l.p[2],l.v[0],l.v[1],l.v[2],f,r.rot?r.rot.fn(l):0,d,Math.min(h,1))}}}}const mn=128;function Mw(i,e,t){const n=Math.floor(i),s=Math.floor(e),r=i-n,a=e-s,o=r*r*(3-2*r),c=a*a*(3-2*a),l=(x,y)=>ci((Math.imul(n+x,668265261)^Math.imul(s+y,374761393)^t)>>>0)/4294967296,f=l(0,0),h=l(1,0),d=l(0,1),p=l(1,1);return f+(h-f)*o+(d-f)*c+(f-h-d+p)*o*c}function ba(i,e,t){let n=0,s=.5,r=0;for(let a=0;a<4;a++)n+=s*Mw(i,e,t+a*101),r+=s,i*=2.03,e*=2.03,s*=.5;return n/r}const Ss=(i,e,t)=>{const n=Math.min(Math.max((t-i)/(e-i),0),1);return n*n*(3-2*n)},ic={"soft-disc":(i,e)=>{const t=i*i+e*e;return t>=1?0:(1-t)*(1-t)},"smoke-puff":(i,e)=>{const t=Math.atan2(e,i),n=Math.hypot(i,e),s=.97+.06*(ba(Math.cos(t)*1.6+3,Math.sin(t)*1.6+3,7)-.5)*2;return Ss(s,s*.25,n)*(.78+.22*ba(i*2.2+5,e*2.2+5,13))},"flame-wisp":(i,e)=>{const t=(e+1)/2,n=(ba(t*2.5,1.7,29)-.5)*.5*t,s=.62*Math.pow(1-t,.55)*(.35+.65*Math.sin(Math.min(t*6,Math.PI/2))),r=Math.abs(i-n)/Math.max(s,.001),a=ba(i*3+11,t*4-2,31);return Ss(1,.25,r)*Ss(1,.55,t+(a-.5)*.5)*Ss(0,.12,t)},ember:(i,e)=>{const t=i*i+e*e;return Math.min(1,Math.exp(-t/.035)+.35*Math.exp(-t/.25))},chip:(i,e)=>{const t=Math.atan2(e,i),n=Math.hypot(i,e),s=7,r=(t+Math.PI)/(2*Math.PI)*s,a=Math.floor(r),o=r-a,c=T=>.55+.4*(ci(T%s+41)/4294967296),l=a/s*2*Math.PI-Math.PI,f=(a+1)/s*2*Math.PI-Math.PI,h=[Math.cos(l)*c(a),Math.sin(l)*c(a)],d=[Math.cos(f)*c(a+1),Math.sin(f)*c(a+1)],p=d[0]-h[0],x=d[1]-h[1],y=Math.cos(t),_=Math.sin(t),g=y*x-_*p,R=g===0?c(a):(h[0]*x-h[1]*p)/g;return o>=0?Ss(R+1/mn,R-1/mn,n):0}};ic.stalk=(i,e)=>{const t=Math.abs(i);if(t>=.96)return 0;const n=.2*Math.sqrt(1-(t/.96)**2)*(.85+.15*Math.sin(i*9));return Ss(n+1/mn,n-1/mn,Math.abs(e))};const al=new Map;function dd(i){const e=ic[i]?i:"soft-disc";if(al.has(e))return al.get(e);const t=ic[e],n=new Uint8Array(mn*mn*4);for(let r=0;r<mn;r++)for(let a=0;a<mn;a++){const o=(a+.5)/mn*2-1,c=(r+.5)/mn*2-1,l=(r*mn+a)*4;n[l]=n[l+1]=n[l+2]=255,n[l+3]=Math.round(Math.min(Math.max(t(o,c),0),1)*255)}const s=new Pg(n,mn,mn,xn);return s.flipY=!1,s.generateMipmaps=!0,s.minFilter=Hn,s.magFilter=ln,s.needsUpdate=!0,al.set(e,s),s}const pd=2048,Sw={alpha:wn,add:br},Ew=`attribute vec2 iCenter; attribute vec2 iScale; attribute float iRot; attribute vec4 iColor;
varying vec2 vUv; varying vec4 vColor;
void main() {
  vUv = uv; vColor = iColor;
  vec2 p = position.xy * iScale; float c = cos(iRot), s = sin(iRot);
  p = vec2(c * p.x - s * p.y, s * p.x + c * p.y);
  gl_Position = projectionMatrix * viewMatrix * vec4(iCenter + p, 0.0, 1.0);
}`,Tw=`uniform sampler2D map; varying vec2 vUv; varying vec4 vColor;
void main() {
  float a = texture2D(map, vUv).a * vColor.a;
  if (a < 0.003) discard;
  gl_FragColor = vec4(vColor.rgb, a);
  #include <colorspace_fragment>
}`;class Aw{constructor(e,t,n,s){const r=new fi(1,1),a=new Bg;a.index=r.index,a.setAttribute("position",r.attributes.position),a.setAttribute("uv",r.attributes.uv);const o=l=>new Lg(new Float32Array(pd*l),l).setUsage(tg);this.center=o(2),this.scale=o(2),this.rot=o(1),this.color=o(4),a.setAttribute("iCenter",this.center),a.setAttribute("iScale",this.scale),a.setAttribute("iRot",this.rot),a.setAttribute("iColor",this.color),a.instanceCount=0;const c=new On({uniforms:{map:{value:dd(t)}},vertexShader:Ew,fragmentShader:Tw,transparent:!0,depthTest:!1,depthWrite:!1,blending:Sw[n]??wn});this.mesh=new nn(a,c),this.mesh.frustumCulled=!1,this.mesh.renderOrder=s,this.mesh.visible=!1,e.add(this.mesh),this.n=0}}class Rw{constructor(e){this.scene=e,this.groups=new Map,this.dropped=0}group(e,t){const n=e.texture+"|"+e.blend+"|"+t;let s=this.groups.get(n);return s||this.groups.set(n,s=new Aw(this.scene,e.texture,e.blend,t*1e6+999e3)),s}prepare(e){e.kind!=="light"&&dd(e.texture)}begin(){for(const e of this.groups.values())e.n=0}card(e,t,n,s,r,a,o,c,l,f,h,d){const p=this.group(t,e);if(p.n===pd){this.dropped++;return}let x=l,y=f;t.align==="velocity"&&(x=l+Math.hypot(a,o,c)*t.stretch,y=Math.atan2(o,a));const _=p.n++;p.center.array[_*2]=n,p.center.array[_*2+1]=s,p.scale.array[_*2]=x,p.scale.array[_*2+1]=l,p.rot.array[_]=y;const g=p.color.array;g[_*4]=h[0],g[_*4+1]=h[1],g[_*4+2]=h[2],g[_*4+3]=d}end(){for(const e of this.groups.values())if(e.mesh.visible=e.n>0,e.mesh.geometry.instanceCount=e.n,!!e.n)for(const t of[e.center,e.scale,e.rot,e.color])t.clearUpdateRanges(),t.addUpdateRange(0,e.n*t.itemSize),t.needsUpdate=!0}}const Cw=.1;class Pw{constructor(e,{mobile:t=!1,layers:n=[[-1/0,14]]}={}){this.renderer=new Rw(e),this.mobile=t,this.layers=[...n].sort((s,r)=>r[0]-s[0]),this.programs=new Map,this.attached=new Map,this.effects=[],this.warned=new Set,this.seed=1}layerOf(e){var t;for(const[n,s]of this.layers)if(e>=n)return s;return((t=this.layers[this.layers.length-1])==null?void 0:t[1])??14}warn(e){this.warned.has(e)||(this.warned.add(e),console.warn("[justa] "+e))}program(e){if(typeof e!="string"||!e.trim().startsWith("fx"))return this.warn(`fx: only program text plays here, not ${String(e).slice(0,40)}`),null;if(!this.programs.has(e))try{const t=yw(e);for(const n of t.pops)n.ignored.length&&this.warn(`fx: pop ${n.name} ignores ${n.ignored.join(", ")}`),this.renderer.prepare(n.r);this.programs.set(e,t)}catch(t){this.warn(t.message),this.programs.set(e,null)}return this.programs.get(e)}prepare(e){for(const t of e)this.program(t)}start(e,t){const n=new ww(e,{anchor:t,mobile:this.mobile,seed:this.seed++});return n.layer=this.layerOf(t[2]),this.effects.push(n),n}oneShot(e={}){const t=this.program(e.script),n=e.position;!t||!n||(this.start(t,Array.isArray(n)?n:[n.x??0,n.y??0,n.z??0]).once=!0)}update(e,t){var a;const n=Math.min(Math.max(e,0),Cw),s=new Set;for(const o of t.entities.values()){const c=(a=o.fx)==null?void 0:a.script,l=this.attached.get(o.id);if(!c||o.visible===!1)continue;const f=t.worldPosition(o);if(s.add(o.id),(l==null?void 0:l.script)!==c){l==null||l.effect.stop();const h=this.program(c);if(!h){this.attached.delete(o.id);continue}this.attached.set(o.id,{script:c,effect:this.start(h,[f.x,f.y,f.z??0])})}else l.effect.moveTo(f.x,f.y,f.z??0)}for(const[o,c]of this.attached)s.has(o)||(c.effect.stop(),this.attached.delete(o));const r=this.renderer;r.begin(),this.effects=this.effects.filter(o=>{n>0&&o.update(n);const c=o.layer;return o.draw((l,f,h,d,p,x,y,_,g,R,T)=>r.card(c,l,f,h,d,p,x,y,_,g,R,T),null),!o.done}),r.end()}}const Lw=`// The joust, run on the player's own machine: the player's body is their rider, an AI knight rides the far lane.
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
`,Iw=`/* The web version's HUD layer over the world's scripts/ui.js (which stays as Spawn has it).\r
   Rafael, 16/10/2026: "agora o menu é a cidade". The village (/realm/) is the menu: each building opens its pane of the\r
   season lobby here (?door=<view>), so the lobby's own HOME screen and its bottom nav bar give way to the village, and\r
   each pane's "‹ HOME" goes back to it (src/main.js turns econTab('home') into the trip home). */\r
#lobby .home { display: none !important; }\r
#lobby .act.nav { display: none !important; }\r
#lobby .phead .back { font-size: 0 !important; }\r
#lobby .phead .back::after { content: "‹ VILLAGE"; font-size: 12px; letter-spacing: .1em; }\r
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
/* and the board's letters (src/bet/bet.css; Rafael, 17/10: "e nao tem que mudar as fontes também?"): Gelasio for the
   labels and SKIP, the medieval face with its dark outline for the big numbers (your chance, the points). The timer
   keeps its plain even digits, chosen in the world to be read at a glance */
html.hud-wood #hud #arm.sb, html.hud-wood #hud #armps, html.hud-wood #hud .skipb { font-family: Gelasio, Georgia, "Times New Roman", serif !important; }
html.hud-wood #hud #arm.sb [id^="gc"], html.hud-wood #hud #arm.sb [id^="mp"], html.hud-wood #hud #arm.sb [id^="op"] {
  font-family: "Grenze Gotisch", Georgia, serif !important; font-weight: 900 !important;
  -webkit-text-stroke: 1.5px #1d130b; paint-order: stroke fill; text-shadow: 0 3px 0 #1d130b !important;
}
`,ws=Object.assign({"/world/scripts/arrival.js":()=>Ne(()=>import("./arrival-CKezWjuD.js"),__vite__mapDeps([0,1,2])),"/world/scripts/bank.js":()=>Ne(()=>import("./bank-CCRVHnGB.js"),__vite__mapDeps([1,2])),"/world/scripts/camera.js":()=>Ne(()=>import("./camera-CFdr3yOD.js"),[]),"/world/scripts/db.js":()=>Ne(()=>import("./db-BH8DPWPJ.js"),__vite__mapDeps([3,2])),"/world/scripts/ground.js":()=>Ne(()=>import("./ground-b0nUTt3G.js"),[]),"/world/scripts/joust-camera.js":()=>Ne(()=>import("./joust-camera-Fg9LmHPp.js"),[]),"/world/scripts/jouster.js":()=>Ne(()=>import("./jouster-B1JpTUK7.js"),__vite__mapDeps([4,5,2,1])),"/world/scripts/lib/color.js":()=>Ne(()=>import("./color-DDSg_o2D.js"),[]),"/world/scripts/lib/econ.js":()=>Ne(()=>import("./econ-Deg9OsSu.js").then(i=>i.I),[]),"/world/scripts/look-default.js":()=>Ne(()=>import("./look-default-BibdNaYP.js"),[]),"/world/scripts/player.js":()=>Ne(()=>import("./player-CqzJShkt.js"),__vite__mapDeps([6,7,8,9])),"/world/scripts/tex-hero.js":()=>Ne(()=>import("./tex-hero-D9FSdSdV.js"),__vite__mapDeps([8,7,9])),"/world/scripts/tex-lance.js":()=>Ne(()=>import("./tex-lance-h9_Q8DQT.js"),[]),"/world/scripts/tex-meadow.js":()=>Ne(()=>import("./tex-meadow-CQRPL3Pn.js"),__vite__mapDeps([10,7,9])),"/world/scripts/tex-sky.js":()=>Ne(()=>import("./tex-sky-H7hQEGu6.js"),__vite__mapDeps([11,7,9])),"/world/scripts/tex-soil.js":()=>Ne(()=>import("./tex-soil-6tL0S4Gb.js"),__vite__mapDeps([12,7,9])),"/world/scripts/tex-tilt.js":()=>Ne(()=>import("./tex-tilt-DATa2CU9.js"),[]),"/world/scripts/tileset-ground.js":()=>Ne(()=>import("./tileset-ground-dAb9Cutk.js"),__vite__mapDeps([13,7])),"/world/scripts/tileset-sand.js":()=>Ne(()=>import("./tileset-sand-D3oqsxai.js"),[]),"/world/scripts/ui.js":()=>Ne(()=>import("./ui-CTWhMYA8.js"),__vite__mapDeps([14,5,2]))}),Ct=new URLSearchParams(location.search),Dw=new Set(["rivals","ranked","gamba","armory","forge","market","season"]),Nw="teste-justa",Bn=Ct.has("modal"),Pf={fight:"rivals",rankedFind:"ranked",gambaBet:"bet"},sc="justa-web:";function _r(i,e){try{if(e===void 0)return JSON.parse(localStorage.getItem(sc+i)??"null");localStorage.setItem(sc+i,JSON.stringify(e))}catch{return null}return e}function Ow(){let i=_r("user");return(!i||Ct.has("fresh"))&&(i="web_"+Array.from(crypto.getRandomValues(new Uint8Array(8)),e=>e.toString(16).padStart(2,"0")).join(""),_r("user",i),_r("state",{})),i}function Uw(i=40){return new Promise(e=>{const t=[];let n=0;const s=r=>{n&&t.push(r-n),n=r,t.length<i?requestAnimationFrame(s):e(t.sort((a,o)=>a-o)[Math.floor(i/10)])};requestAnimationFrame(s)})}async function kw(){var ee,ae,me,ve,Re,Q,ue,Me,ge;const i=Uw(),e=await hm(Ct.get("place")??void 0,{web:!Ct.has("spawn")}),t=new Set((Ct.get("hide")??"").split(",").filter(Boolean));e.placements=e.placements.filter(te=>!t.has(te.id));const n=e.place.atmosphere??{},s=document.getElementById("stage"),r=(ee=n.look)!=null&&ee.script?await ws["/world/"+n.look.script]():null,a=document.getElementById("view"),o=Number(Ct.get("scale")),c=new pb(a,{toneMapping:((ae=n.look)==null?void 0:ae.toneMapping)??"neutral",look:Jx(r,(me=n.look)==null?void 0:me.params),scale:o>0?o:null});((ve=e.render)==null?void 0:ve.placeSky)!==!1&&c.setSky(n.sky),i.then(te=>{te>0&&(c.refresh=Math.max(4,Math.min(c.refresh??te,te)))});const l=()=>c.resize(s.clientWidth,s.clientHeight);l(),addEventListener("resize",l);const f=Bn?[]:e.placements.filter(te=>{var Ce;return(Ce=te.sprite)==null?void 0:Ce.texture});await Promise.all(f.map((te,Ce)=>c.addSprite(te,Ce)));const h=e.place.terrain;!Bn&&(h==null?void 0:h.kind)==="tilemap"&&h.draw!==!1&&!Ct.has("notiles")&&await c.setTiles(h,await ws["/world/"+h.generator]());const d=await Qb();ws["/world/scripts/db.js"]&&await d.migrate((await ws["/world/scripts/db.js"]()).migrate);const p=new Sb({roomId:Nw,scripts:ws,gravity:e.place.gravity,groundY:0,sql:te=>d.sqlFor(te)});p.worldToScreen=te=>c.worldToScreen(te);const x=await xc(e.config.player),y=Ow(),_=_r("state")??{},g=p.spawn("player/"+y,{...x,state:{...x.state??{},..._},userId:y,displayName:_r("name")??"Knight",isLocal:!0}),R=p.entities.get(g),T=new Rb(e.config.inputs);Bn||T.bind(a),p.inputs.set(g,()=>T.frame());for(const te of((Re=e.config.engine)==null?void 0:Re.behaviors)??[]){const Ce=await p.loadModule(te);await p.call(R,Ce,"onArrive",ji(R))}const w=Bn?null:new qb(e.sounds);if(p.sinks.playSound=te=>w==null?void 0:w.play(te),w)for(const te of e.placements)(Q=te.audio)!=null&&Q.clip&&w.loop(te.audio);const L=document.getElementById("flash");p.sinks.screenFlash=te=>{L.style.transition="none",L.style.background=(te==null?void 0:te.color)??"#fff",L.style.opacity=String((te==null?void 0:te.intensity)??.4),requestAnimationFrame(()=>{L.style.transition=`opacity ${((te==null?void 0:te.duration)??.2)*1e3}ms ease-out`,L.style.opacity="0"})};let I={until:0,amp:0};p.sinks.screenShake=te=>{I={until:performance.now()+((te==null?void 0:te.duration)??.3)*1e3,amp:((te==null?void 0:te.intensity)??.3)*.25}};const C=await xb(e.config,ji(R),{screenAspect:Ct.get("aspect")==="real"}),D=await ws["/world/"+(((ue=e.config.ui)==null?void 0:ue.render)??"scripts/ui.js")](),S=new Wb({ui:D,room:p,player:R,input:T,toScreen:te=>c.worldToScreen(te)}),b=new Ab(c,p,{hideBelow:((Me=e.render)==null?void 0:Me.hideBelowLayer)??null}),N=Bn||Ct.has("nofx")?null:new Pw(c.scene,{mobile:matchMedia("(pointer: coarse)").matches,layers:(ge=e.render)==null?void 0:ge.fxLayers});N&&(p.sinks.fx=te=>N.oneShot(te),N.prepare([...Lw.matchAll(/`(fx\r?\n[\s\S]*?)`/g)].map(te=>te[1])));let F=p.elapsed;if(!Ct.has("spawn")){document.head.insertAdjacentHTML("beforeend",`<style id="web-hud">${Iw}</style>`);const te=Ct.get("village")??"/realm/?back=1";Ct.has("meter")&&document.documentElement.classList.add("meter"),document.documentElement.classList.add("hud-wood");const Ce=window.econTab,ke=Ct.get("door")==="bet";if(ke&&document.documentElement.classList.add("only-bet"),typeof Ce=="function"){const fe=()=>Bn?parent.postMessage({type:"justa-close"},location.origin):location.assign(te);window.econTab=Te=>Te==="home"?fe():ke&&Te!=="gamba"?void 0:Ce(Te),Ce(ke?"gamba":Dw.has(Ct.get("door"))?Ct.get("door"):"rivals"),ke&&typeof window.gambaTab=="function"&&window.gambaTab("bet"),Ct.get("door")==="gamba"&&["bet","stats","lb"].includes(Ct.get("sub"))&&typeof window.gambaTab=="function"&&window.gambaTab(Ct.get("sub"))}if(ke&&!Bn){const{startBet:fe}=await Ne(async()=>{const{startBet:Te}=await import("./bet-BNrn4fvI.js");return{startBet:Te}},__vite__mapDeps([15,2]));fe({room:p,player:R,village:te})}if(Bn){document.documentElement.classList.add("modal");const{startModal:fe}=await Ne(async()=>{const{startModal:pt}=await import("./modal-CPw2EEYX.js");return{startModal:pt}},__vite__mapDeps([16,5,2])),Te=()=>parent.postMessage({type:"justa-close"},location.origin),ht=fe({room:p,player:R,door:Ct.get("door"),place:Ct.get("building"),onClose:Te});addEventListener("message",pt=>{const $e=pt.data;pt.origin!==location.origin||($e==null?void 0:$e.type)!=="justa-door"||ht.open($e.door,$e.place)});const U=window.sendAction;window.sendAction=(pt,...$e)=>Pf[pt]?top.location.assign(`/realm/play/?door=${Pf[pt]}`):U(pt,...$e),addEventListener("pageshow",pt=>{pt.persisted&&location.reload()})}}let k="";const $=()=>{const te=JSON.stringify(R.state);if(te!==k){k=te;try{localStorage.setItem(sc+"state",te)}catch{}}};setInterval($,2e3),addEventListener("pagehide",$);const ie=Ct.has("prof")?{n:0,room:0,rig:0,views:0,stage:0,hud:0,frame:0}:null,J=(te,Ce)=>{const ke=performance.now();return ie&&(ie[te]+=ke-Ce),ke};let de=performance.now();function K(te){const Ce=Math.max(0,(te-de)/1e3),ke=Math.min(.1,Ce);de=te;let fe=performance.now();const Te=fe;if(p.advance(Ce),fe=J("room",fe),Bn){requestAnimationFrame(K);return}c.govern(te-(K.prev??te)),K.prev=te;const ht=C.update(ke,p.nowMs,c.aspect);te<I.until&&(ht.x+=(Math.random()-.5)*I.amp,ht.y+=(Math.random()-.5)*I.amp),fe=J("rig",fe),b.sync(),N&&(N.update((p.elapsed-F)/1e3,p),F=p.elapsed),fe=J("views",fe),c.frame(ht,ke),fe=J("stage",fe),S.frame(te),fe=J("hud",fe),ie&&(ie.frame+=fe-Te,ie.n++),requestAnimationFrame(K)}ie&&(window.__prof=ie),requestAnimationFrame(K),window.__justa={world:e,stage:c,rig:C,room:p,player:R,hud:S,db:d,input:T,audio:w},document.documentElement.classList.add("justa-ready"),Bn&&parent.postMessage({type:"justa-ready"},location.origin)}kw().catch(i=>{console.error(i),document.getElementById("fault").textContent=String((i==null?void 0:i.stack)??i)});export{lo as c,Hb as m};

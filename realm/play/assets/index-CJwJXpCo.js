const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/arrival-BGB7dWv4.js","assets/bank-BayQo6zl.js","assets/jouster-CNNuhO2i.js","assets/joust-2BfEs9QO.js","assets/player-CqzJShkt.js","assets/meadow-DQnD2Hmd.js","assets/tex-hero-D9FSdSdV.js","assets/color-DDSg_o2D.js","assets/tex-meadow-CQRPL3Pn.js","assets/tex-sky-H7hQEGu6.js","assets/tex-soil-6tL0S4Gb.js","assets/tileset-ground-dAb9Cutk.js","assets/ui-3thon8Eh.js","assets/modal-B8WotaKj.js"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();const fp="modulepreload",hp=function(i){return"/realm/play/"+i},ru={},Ne=function(e,t,n){let s=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),o=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));s=Promise.allSettled(t.map(c=>{if(c=hp(c),c in ru)return;ru[c]=!0;const l=c.endsWith(".css"),f=l?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${f}`))return;const h=document.createElement("link");if(h.rel=l?"stylesheet":fp,l||(h.as="script"),h.crossOrigin="",h.href=c,o&&h.setAttribute("nonce",o),document.head.appendChild(h),l)return new Promise((d,p)=>{h.addEventListener("load",d),h.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${c}`)))})}))}function r(a){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=a,window.dispatchEvent(o),!o.defaultPrevented)throw a}return s.then(a=>{for(const o of a||[])o.status==="rejected"&&r(o.reason);return e().catch(r)})},dp=`# name: the game's name: fill it once you know what this is. description: one line for the box art.
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
`,pp=`atmosphere:\r
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
`,mp=`# spawn-scene v2 yaml objects\r
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
`,gp=`# spawn-scene v2 yaml x0z0\r
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
`,_p=`# The web version's own layer over the copied Spawn world. world/ stays an exact copy (npm run sync); what the web\r
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
`,dc=Symbol.for("yaml.alias"),dl=Symbol.for("yaml.document"),Si=Symbol.for("yaml.map"),Wf=Symbol.for("yaml.pair"),Wn=Symbol.for("yaml.scalar"),Xs=Symbol.for("yaml.seq"),Sn=Symbol.for("yaml.node.type"),Qi=i=>!!i&&typeof i=="object"&&i[Sn]===dc,es=i=>!!i&&typeof i=="object"&&i[Sn]===dl,$s=i=>!!i&&typeof i=="object"&&i[Sn]===Si,Et=i=>!!i&&typeof i=="object"&&i[Sn]===Wf,xt=i=>!!i&&typeof i=="object"&&i[Sn]===Wn,Ks=i=>!!i&&typeof i=="object"&&i[Sn]===Xs;function At(i){if(i&&typeof i=="object")switch(i[Sn]){case Si:case Xs:return!0}return!1}function Rt(i){if(i&&typeof i=="object")switch(i[Sn]){case dc:case Si:case Wn:case Xs:return!0}return!1}const qf=i=>(xt(i)||At(i))&&!!i.anchor,ln=Symbol("break visit"),jf=Symbol("skip children"),Vn=Symbol("remove node");function ts(i,e){const t=Xf(e);es(i)?As(null,i.contents,t,Object.freeze([i]))===Vn&&(i.contents=null):As(null,i,t,Object.freeze([]))}ts.BREAK=ln;ts.SKIP=jf;ts.REMOVE=Vn;function As(i,e,t,n){const s=$f(i,e,t,n);if(Rt(s)||Et(s))return Kf(i,n,s),As(i,s,t,n);if(typeof s!="symbol"){if(At(e)){n=Object.freeze(n.concat(e));for(let r=0;r<e.items.length;++r){const a=As(r,e.items[r],t,n);if(typeof a=="number")r=a-1;else{if(a===ln)return ln;a===Vn&&(e.items.splice(r,1),r-=1)}}}else if(Et(e)){n=Object.freeze(n.concat(e));const r=As("key",e.key,t,n);if(r===ln)return ln;r===Vn&&(e.key=null);const a=As("value",e.value,t,n);if(a===ln)return ln;a===Vn&&(e.value=null)}}return s}async function Ya(i,e){const t=Xf(e);es(i)?await Rs(null,i.contents,t,Object.freeze([i]))===Vn&&(i.contents=null):await Rs(null,i,t,Object.freeze([]))}Ya.BREAK=ln;Ya.SKIP=jf;Ya.REMOVE=Vn;async function Rs(i,e,t,n){const s=await $f(i,e,t,n);if(Rt(s)||Et(s))return Kf(i,n,s),Rs(i,s,t,n);if(typeof s!="symbol"){if(At(e)){n=Object.freeze(n.concat(e));for(let r=0;r<e.items.length;++r){const a=await Rs(r,e.items[r],t,n);if(typeof a=="number")r=a-1;else{if(a===ln)return ln;a===Vn&&(e.items.splice(r,1),r-=1)}}}else if(Et(e)){n=Object.freeze(n.concat(e));const r=await Rs("key",e.key,t,n);if(r===ln)return ln;r===Vn&&(e.key=null);const a=await Rs("value",e.value,t,n);if(a===ln)return ln;a===Vn&&(e.value=null)}}return s}function Xf(i){return typeof i=="object"&&(i.Collection||i.Node||i.Value)?Object.assign({Alias:i.Node,Map:i.Node,Scalar:i.Node,Seq:i.Node},i.Value&&{Map:i.Value,Scalar:i.Value,Seq:i.Value},i.Collection&&{Map:i.Collection,Seq:i.Collection},i):i}function $f(i,e,t,n){var s,r,a,o,c;if(typeof t=="function")return t(i,e,n);if($s(e))return(s=t.Map)==null?void 0:s.call(t,i,e,n);if(Ks(e))return(r=t.Seq)==null?void 0:r.call(t,i,e,n);if(Et(e))return(a=t.Pair)==null?void 0:a.call(t,i,e,n);if(xt(e))return(o=t.Scalar)==null?void 0:o.call(t,i,e,n);if(Qi(e))return(c=t.Alias)==null?void 0:c.call(t,i,e,n)}function Kf(i,e,t){const n=e[e.length-1];if(At(n))n.items[i]=t;else if(Et(n))i==="key"?n.key=t:n.value=t;else if(es(n))n.contents=t;else{const s=Qi(n)?"alias":"scalar";throw new Error(`Cannot replace node with ${s} parent`)}}const vp={"!":"%21",",":"%2C","[":"%5B","]":"%5D","{":"%7B","}":"%7D"},yp=i=>i.replace(/[!,[\]{}]/g,e=>vp[e]);class nn{constructor(e,t){this.docStart=null,this.docEnd=!1,this.yaml=Object.assign({},nn.defaultYaml,e),this.tags=Object.assign({},nn.defaultTags,t)}clone(){const e=new nn(this.yaml,this.tags);return e.docStart=this.docStart,e}atDocument(){const e=new nn(this.yaml,this.tags);switch(this.yaml.version){case"1.1":this.atNextDocument=!0;break;case"1.2":this.atNextDocument=!1,this.yaml={explicit:nn.defaultYaml.explicit,version:"1.2"},this.tags=Object.assign({},nn.defaultTags);break}return e}add(e,t){this.atNextDocument&&(this.yaml={explicit:nn.defaultYaml.explicit,version:"1.1"},this.tags=Object.assign({},nn.defaultTags),this.atNextDocument=!1);const n=e.trim().split(/[ \t]+/),s=n.shift();switch(s){case"%TAG":{if(n.length!==2&&(t(0,"%TAG directive should contain exactly two parts"),n.length<2))return!1;const[r,a]=n;return this.tags[r]=a,!0}case"%YAML":{if(this.yaml.explicit=!0,n.length!==1)return t(0,"%YAML directive should contain exactly one part"),!1;const[r]=n;if(r==="1.1"||r==="1.2")return this.yaml.version=r,!0;{const a=/^\d+\.\d+$/.test(r);return t(6,`Unsupported YAML version ${r}`,a),!1}}default:return t(0,`Unknown directive ${s}`,!0),!1}}tagName(e,t){if(e==="!")return"!";if(e[0]!=="!")return t(`Not a valid tag: ${e}`),null;if(e[1]==="<"){const a=e.slice(2,-1);return a==="!"||a==="!!"?(t(`Verbatim tags aren't resolved, so ${e} is invalid.`),null):(e[e.length-1]!==">"&&t("Verbatim tags must end with a >"),a)}const[,n,s]=e.match(/^(.*!)([^!]*)$/s);s||t(`The ${e} tag has no suffix`);const r=this.tags[n];if(r)try{return r+decodeURIComponent(s)}catch(a){return t(String(a)),null}return n==="!"?e:(t(`Could not resolve tag: ${e}`),null)}tagString(e){for(const[t,n]of Object.entries(this.tags))if(e.startsWith(n))return t+yp(e.substring(n.length));return e[0]==="!"?e:`!<${e}>`}toString(e){const t=this.yaml.explicit?[`%YAML ${this.yaml.version||"1.2"}`]:[],n=Object.entries(this.tags);let s;if(e&&n.length>0&&Rt(e.contents)){const r={};ts(e.contents,(a,o)=>{Rt(o)&&o.tag&&(r[o.tag]=!0)}),s=Object.keys(r)}else s=[];for(const[r,a]of n)r==="!!"&&a==="tag:yaml.org,2002:"||(!e||s.some(o=>o.startsWith(a)))&&t.push(`%TAG ${r} ${a}`);return t.join(`
`)}}nn.defaultYaml={explicit:!1,version:"1.2"};nn.defaultTags={"!!":"tag:yaml.org,2002:"};function Yf(i){if(/[\x00-\x19\s,[\]{}]/.test(i)){const t=`Anchor must not contain whitespace or control characters: ${JSON.stringify(i)}`;throw new Error(t)}return!0}function Jf(i){const e=new Set;return ts(i,{Value(t,n){n.anchor&&e.add(n.anchor)}}),e}function Zf(i,e){for(let t=1;;++t){const n=`${i}${t}`;if(!e.has(n))return n}}function xp(i,e){const t=[],n=new Map;let s=null;return{onAnchor:r=>{t.push(r),s??(s=Jf(i));const a=Zf(e,s);return s.add(a),a},setAnchors:()=>{for(const r of t){const a=n.get(r);if(typeof a=="object"&&a.anchor&&(xt(a.node)||At(a.node)))a.node.anchor=a.anchor;else{const o=new Error("Failed to resolve repeated object (this should not happen)");throw o.source=r,o}}},sourceObjects:n}}function Cs(i,e,t,n){if(n&&typeof n=="object")if(Array.isArray(n))for(let s=0,r=n.length;s<r;++s){const a=n[s],o=Cs(i,n,String(s),a);o===void 0?delete n[s]:o!==a&&(n[s]=o)}else if(n instanceof Map)for(const s of Array.from(n.keys())){const r=n.get(s),a=Cs(i,n,s,r);a===void 0?n.delete(s):a!==r&&n.set(s,a)}else if(n instanceof Set)for(const s of Array.from(n)){const r=Cs(i,n,s,s);r===void 0?n.delete(s):r!==s&&(n.delete(s),n.add(r))}else for(const[s,r]of Object.entries(n)){const a=Cs(i,n,s,r);a===void 0?delete n[s]:a!==r&&(n[s]=a)}return i.call(e,t,n)}function wn(i,e,t){if(Array.isArray(i))return i.map((n,s)=>wn(n,String(s),t));if(i&&typeof i.toJSON=="function"){if(!t||!qf(i))return i.toJSON(e,t);const n={aliasCount:0,count:1,res:void 0};t.anchors.set(i,n),t.onCreate=r=>{n.res=r,delete t.onCreate};const s=i.toJSON(e,t);return t.onCreate&&t.onCreate(s),s}return typeof i=="bigint"&&!(t!=null&&t.keep)?Number(i):i}class pc{constructor(e){Object.defineProperty(this,Sn,{value:e})}clone(){const e=Object.create(Object.getPrototypeOf(this),Object.getOwnPropertyDescriptors(this));return this.range&&(e.range=this.range.slice()),e}toJS(e,{mapAsMap:t,maxAliasCount:n,onAnchor:s,reviver:r}={}){if(!es(e))throw new TypeError("A document argument is required");const a={anchors:new Map,doc:e,keep:!0,mapAsMap:t===!0,mapKeyWarned:!1,maxAliasCount:typeof n=="number"?n:100},o=wn(this,"",a);if(typeof s=="function")for(const{count:c,res:l}of a.anchors.values())s(l,c);return typeof r=="function"?Cs(r,{"":o},"",o):o}}class Ja extends pc{constructor(e){super(dc),this.source=e,Object.defineProperty(this,"tag",{set(){throw new Error("Alias nodes cannot have tags")}})}resolve(e,t){if((t==null?void 0:t.maxAliasCount)===0)throw new ReferenceError("Alias resolution is disabled");let n;t!=null&&t.aliasResolveCache?n=t.aliasResolveCache:(n=[],ts(e,{Node:(r,a)=>{(Qi(a)||qf(a))&&n.push(a)}}),t&&(t.aliasResolveCache=n));let s;for(const r of n){if(r===this)break;r.anchor===this.source&&(s=r)}if(s&&t){const{anchors:r,doc:a,maxAliasCount:o}=t;let c=r.get(s);if(c||(wn(s,null,t),c=r.get(s)),(c==null?void 0:c.res)===void 0){const l="This should not happen: Alias anchor was not resolved?";throw new ReferenceError(l)}if(o>=0&&(c.count+=1,c.aliasCount===0&&(c.aliasCount=Ea(a,s,r)),c.count*c.aliasCount>o)){const l="Excessive alias count indicates a resource exhaustion attack";throw new ReferenceError(l)}}return s}toJSON(e,t){if(!t)return{source:this.source};const n=this.resolve(t.doc,t);if(!n){const s=`Unresolved alias (the anchor must be set before the alias): ${this.source}`;throw new ReferenceError(s)}return t.anchors.get(n).res}toString(e,t,n){const s=`*${this.source}`;if(e){if(Yf(this.source),e.options.verifyAliasOrder&&!e.anchors.has(this.source)){const r=`Unresolved alias (the anchor must be set before the alias): ${this.source}`;throw new Error(r)}if(e.implicitKey)return`${s} `}return s}}function Ea(i,e,t){if(Qi(e)){const n=e.resolve(i),s=t&&n&&t.get(n);return s?s.count*s.aliasCount:0}else if(At(e)){let n=0;for(const s of e.items){const r=Ea(i,s,t);r>n&&(n=r)}return n}else if(Et(e)){const n=Ea(i,e.key,t),s=Ea(i,e.value,t);return Math.max(n,s)}return 1}const Qf=i=>!i||typeof i!="function"&&typeof i!="object";class Ze extends pc{constructor(e){super(Wn),this.value=e}toJSON(e,t){return t!=null&&t.keep?this.value:wn(this.value,e,t)}toString(){return String(this.value)}}Ze.BLOCK_FOLDED="BLOCK_FOLDED";Ze.BLOCK_LITERAL="BLOCK_LITERAL";Ze.PLAIN="PLAIN";Ze.QUOTE_DOUBLE="QUOTE_DOUBLE";Ze.QUOTE_SINGLE="QUOTE_SINGLE";const bp="tag:yaml.org,2002:";function wp(i,e,t){if(e){const n=t.filter(r=>r.tag===e),s=n.find(r=>!r.format)??n[0];if(!s)throw new Error(`Tag ${e} not found`);return s}return t.find(n=>{var s;return((s=n.identify)==null?void 0:s.call(n,i))&&!n.format})}function xr(i,e,t){var h,d,p;if(es(i)&&(i=i.contents),Rt(i))return i;if(Et(i)){const x=(d=(h=t.schema[Si]).createNode)==null?void 0:d.call(h,t.schema,null,t);return x.items.push(i),x}(i instanceof String||i instanceof Number||i instanceof Boolean||typeof BigInt<"u"&&i instanceof BigInt)&&(i=i.valueOf());const{aliasDuplicateObjects:n,onAnchor:s,onTagObj:r,schema:a,sourceObjects:o}=t;let c;if(n&&i&&typeof i=="object"){if(c=o.get(i),c)return c.anchor??(c.anchor=s(i)),new Ja(c.anchor);c={anchor:null,node:null},o.set(i,c)}e!=null&&e.startsWith("!!")&&(e=bp+e.slice(2));let l=wp(i,e,a.tags);if(!l){if(i&&typeof i.toJSON=="function"&&(i=i.toJSON()),!i||typeof i!="object"){const x=new Ze(i);return c&&(c.node=x),x}l=i instanceof Map?a[Si]:Symbol.iterator in Object(i)?a[Xs]:a[Si]}r&&(r(l),delete t.onTagObj);const f=l!=null&&l.createNode?l.createNode(t.schema,i,t):typeof((p=l==null?void 0:l.nodeClass)==null?void 0:p.from)=="function"?l.nodeClass.from(t.schema,i,t):new Ze(i);return e?f.tag=e:l.default||(f.tag=l.tag),c&&(c.node=f),f}function Ba(i,e,t){let n=t;for(let s=e.length-1;s>=0;--s){const r=e[s];if(typeof r=="number"&&Number.isInteger(r)&&r>=0){const a=[];a[r]=n,n=a}else n=new Map([[r,n]])}return xr(n,void 0,{aliasDuplicateObjects:!1,keepUndefined:!1,onAnchor:()=>{throw new Error("This should not happen, please report a bug.")},schema:i,sourceObjects:new Map})}const mr=i=>i==null||typeof i=="object"&&!!i[Symbol.iterator]().next().done;class eh extends pc{constructor(e,t){super(e),Object.defineProperty(this,"schema",{value:t,configurable:!0,enumerable:!1,writable:!0})}clone(e){const t=Object.create(Object.getPrototypeOf(this),Object.getOwnPropertyDescriptors(this));return e&&(t.schema=e),t.items=t.items.map(n=>Rt(n)||Et(n)?n.clone(e):n),this.range&&(t.range=this.range.slice()),t}addIn(e,t){if(mr(e))this.add(t);else{const[n,...s]=e,r=this.get(n,!0);if(At(r))r.addIn(s,t);else if(r===void 0&&this.schema)this.set(n,Ba(this.schema,s,t));else throw new Error(`Expected YAML collection at ${n}. Remaining path: ${s}`)}}deleteIn(e){const[t,...n]=e;if(n.length===0)return this.delete(t);const s=this.get(t,!0);if(At(s))return s.deleteIn(n);throw new Error(`Expected YAML collection at ${t}. Remaining path: ${n}`)}getIn(e,t){const[n,...s]=e,r=this.get(n,!0);return s.length===0?!t&&xt(r)?r.value:r:At(r)?r.getIn(s,t):void 0}hasAllNullValues(e){return this.items.every(t=>{if(!Et(t))return!1;const n=t.value;return n==null||e&&xt(n)&&n.value==null&&!n.commentBefore&&!n.comment&&!n.tag})}hasIn(e){const[t,...n]=e;if(n.length===0)return this.has(t);const s=this.get(t,!0);return At(s)?s.hasIn(n):!1}setIn(e,t){const[n,...s]=e;if(s.length===0)this.set(n,t);else{const r=this.get(n,!0);if(At(r))r.setIn(s,t);else if(r===void 0&&this.schema)this.set(n,Ba(this.schema,s,t));else throw new Error(`Expected YAML collection at ${n}. Remaining path: ${s}`)}}}const Mp=i=>i.replace(/^(?!$)(?: $)?/gm,"#");function ni(i,e){return/^\n+$/.test(i)?i.substring(1):e?i.replace(/^(?! *$)/gm,e):i}const Wi=(i,e,t)=>i.endsWith(`
`)?ni(t,e):t.includes(`
`)?`
`+ni(t,e):(i.endsWith(" ")?"":" ")+t,th="flow",pl="block",Ta="quoted";function Za(i,e,t="flow",{indentAtStart:n,lineWidth:s=80,minContentWidth:r=20,onFold:a,onOverflow:o}={}){if(!s||s<0)return i;s<r&&(r=0);const c=Math.max(1+r,1+s-e.length);if(i.length<=c)return i;const l=[],f={};let h=s-e.length;typeof n=="number"&&(n>s-Math.max(2,r)?l.push(0):h=s-n);let d,p,x=!1,y=-1,_=-1,g=-1;t===pl&&(y=au(i,y,e.length),y!==-1&&(h=y+c));for(let T;T=i[y+=1];){if(t===Ta&&T==="\\"){switch(_=y,i[y+1]){case"x":y+=3;break;case"u":y+=5;break;case"U":y+=9;break;default:y+=1}g=y}if(T===`
`)t===pl&&(y=au(i,y,e.length)),h=y+e.length+c,d=void 0;else{if(T===" "&&p&&p!==" "&&p!==`
`&&p!=="	"){const w=i[y+1];w&&w!==" "&&w!==`
`&&w!=="	"&&(d=y)}if(y>=h)if(d)l.push(d),h=d+c,d=void 0;else if(t===Ta){for(;p===" "||p==="	";)p=T,T=i[y+=1],x=!0;const w=y>g+1?y-2:_-1;if(f[w])return i;l.push(w),f[w]=!0,h=w+c,d=void 0}else x=!0}p=T}if(x&&o&&o(),l.length===0)return i;a&&a();let R=i.slice(0,l[0]);for(let T=0;T<l.length;++T){const w=l[T],I=l[T+1]||i.length;w===0?R=`
${e}${i.slice(0,I)}`:(t===Ta&&f[w]&&(R+=`${i[w]}\\`),R+=`
${e}${i.slice(w+1,I)}`)}return R}function au(i,e,t){let n=e,s=e+1,r=i[s];for(;r===" "||r==="	";)if(e<s+t)r=i[++e];else{do r=i[++e];while(r&&r!==`
`);n=e,s=e+1,r=i[s]}return n}const Qa=(i,e)=>({indentAtStart:e?i.indent.length:i.indentAtStart,lineWidth:i.options.lineWidth,minContentWidth:i.options.minContentWidth}),eo=i=>/^(%|---|\.\.\.)/m.test(i);function Sp(i,e,t){if(!e||e<0)return!1;const n=e-t,s=i.length;if(s<=n)return!1;for(let r=0,a=0;r<s;++r)if(i[r]===`
`){if(r-a>n)return!0;if(a=r+1,s-a<=n)return!1}return!0}function _r(i,e){const t=JSON.stringify(i);if(e.options.doubleQuotedAsJSON)return t;const{implicitKey:n}=e,s=e.options.doubleQuotedMinMultiLineLength,r=e.indent||(eo(i)?"  ":"");let a="",o=0;for(let c=0,l=t[c];l;l=t[++c])if(l===" "&&t[c+1]==="\\"&&t[c+2]==="n"&&(a+=t.slice(o,c)+"\\ ",c+=1,o=c,l="\\"),l==="\\")switch(t[c+1]){case"u":{a+=t.slice(o,c);const f=t.substr(c+2,4);switch(f){case"0000":a+="\\0";break;case"0007":a+="\\a";break;case"000b":a+="\\v";break;case"001b":a+="\\e";break;case"0085":a+="\\N";break;case"00a0":a+="\\_";break;case"2028":a+="\\L";break;case"2029":a+="\\P";break;default:f.substr(0,2)==="00"?a+="\\x"+f.substr(2):a+=t.substr(c,6)}c+=5,o=c+1}break;case"n":if(n||t[c+2]==='"'||t.length<s)c+=1;else{for(a+=t.slice(o,c)+`

`;t[c+2]==="\\"&&t[c+3]==="n"&&t[c+4]!=='"';)a+=`
`,c+=2;a+=r,t[c+2]===" "&&(a+="\\"),c+=1,o=c+1}break;default:c+=1}return a=o?a+t.slice(o):t,n?a:Za(a,r,Ta,Qa(e,!1))}function ml(i,e){if(e.options.singleQuote===!1||e.implicitKey&&i.includes(`
`)||/[ \t]\n|\n[ \t]/.test(i))return _r(i,e);const t=e.indent||(eo(i)?"  ":""),n="'"+i.replace(/'/g,"''").replace(/\n+/g,`$&
${t}`)+"'";return e.implicitKey?n:Za(n,t,th,Qa(e,!1))}function Ps(i,e){const{singleQuote:t}=e.options;let n;if(t===!1)n=_r;else{const s=i.includes('"'),r=i.includes("'");s&&!r?n=ml:r&&!s?n=_r:n=t?ml:_r}return n(i,e)}let gl;try{gl=new RegExp(`(^|(?<!
))
+(?!
|$)`,"g")}catch{gl=/\n+(?!\n|$)/g}function Aa({comment:i,type:e,value:t},n,s,r){const{blockQuote:a,commentString:o,lineWidth:c}=n.options;if(!a||/\n[\t ]+$/.test(t))return Ps(t,n);const l=n.indent||(n.forceBlockIndent||eo(t)?"  ":""),f=a==="literal"?!0:a==="folded"||e===Ze.BLOCK_FOLDED?!1:e===Ze.BLOCK_LITERAL?!0:!Sp(t,c,l.length);if(!t)return f?`|
`:`>
`;let h,d;for(d=t.length;d>0;--d){const I=t[d-1];if(I!==`
`&&I!=="	"&&I!==" ")break}let p=t.substring(d);const x=p.indexOf(`
`);x===-1?h="-":t===p||x!==p.length-1?(h="+",r&&r()):h="",p&&(t=t.slice(0,-p.length),p[p.length-1]===`
`&&(p=p.slice(0,-1)),p=p.replace(gl,`$&${l}`));let y=!1,_,g=-1;for(_=0;_<t.length;++_){const I=t[_];if(I===" ")y=!0;else if(I===`
`)g=_;else break}let R=t.substring(0,g<_?g+1:_);R&&(t=t.substring(R.length),R=R.replace(/\n+/g,`$&${l}`));let w=(y?l?"2":"1":"")+h;if(i&&(w+=" "+o(i.replace(/ ?[\r\n]+/g," ")),s&&s()),!f){const I=t.replace(/\n+/g,`
$&`).replace(/(?:^|\n)([\t ].*)(?:([\n\t ]*)\n(?![\n\t ]))?/g,"$1$2").replace(/\n+/g,`$&${l}`);let L=!1;const C=Qa(n,!0);a!=="folded"&&e!==Ze.BLOCK_FOLDED&&(C.onOverflow=()=>{L=!0});const D=Za(`${R}${I}${p}`,l,pl,C);if(!L)return`>${w}
${l}${D}`}return t=t.replace(/\n+/g,`$&${l}`),`|${w}
${l}${R}${t}${p}`}function Ep(i,e,t,n){const{type:s,value:r}=i,{actualString:a,implicitKey:o,indent:c,indentStep:l,inFlow:f}=e;if(o&&r.includes(`
`)||f&&/[[\]{},]/.test(r))return Ps(r,e);if(/^[\n\t ,[\]{}#&*!|>'"%@`]|^[?-]$|^[?-][ \t]|[\n:][ \t]|[ \t]\n|[\n\t ]#|[\n\t :]$/.test(r))return o||f||!r.includes(`
`)?Ps(r,e):Aa(i,e,t,n);if(!o&&!f&&s!==Ze.PLAIN&&r.includes(`
`))return Aa(i,e,t,n);if(eo(r)){if(c==="")return e.forceBlockIndent=!0,Aa(i,e,t,n);if(o&&c===l)return Ps(r,e)}const h=r.replace(/\n+/g,`$&
${c}`);if(a){const d=y=>{var _;return y.default&&y.tag!=="tag:yaml.org,2002:str"&&((_=y.test)==null?void 0:_.test(h))},{compat:p,tags:x}=e.doc.schema;if(x.some(d)||p!=null&&p.some(d))return Ps(r,e)}return o?h:Za(h,c,th,Qa(e,!1))}function Cr(i,e,t,n){const{implicitKey:s,inFlow:r}=e,a=typeof i.value=="string"?i:Object.assign({},i,{value:String(i.value)});let{type:o}=i;o!==Ze.QUOTE_DOUBLE&&/[\x00-\x08\x0b-\x1f\x7f-\x9f\u{D800}-\u{DFFF}]/u.test(a.value)&&(o=Ze.QUOTE_DOUBLE);const c=f=>{switch(f){case Ze.BLOCK_FOLDED:case Ze.BLOCK_LITERAL:return s||r?Ps(a.value,e):Aa(a,e,t,n);case Ze.QUOTE_DOUBLE:return _r(a.value,e);case Ze.QUOTE_SINGLE:return ml(a.value,e);case Ze.PLAIN:return Ep(a,e,t,n);default:return null}};let l=c(o);if(l===null){const{defaultKeyType:f,defaultStringType:h}=e.options,d=s&&f||h;if(l=c(d),l===null)throw new Error(`Unsupported default string type ${d}`)}return l}function nh(i,e){const t=Object.assign({blockQuote:!0,commentString:Mp,defaultKeyType:null,defaultStringType:"PLAIN",directives:null,doubleQuotedAsJSON:!1,doubleQuotedMinMultiLineLength:40,falseStr:"false",flowCollectionPadding:!0,indentSeq:!0,lineWidth:80,minContentWidth:20,nullStr:"null",simpleKeys:!1,singleQuote:null,trailingComma:!1,trueStr:"true",verifyAliasOrder:!0},i.schema.toStringOptions,e);let n;switch(t.collectionStyle){case"block":n=!1;break;case"flow":n=!0;break;default:n=null}return{anchors:new Set,doc:i,flowCollectionPadding:t.flowCollectionPadding?" ":"",indent:"",indentStep:typeof t.indent=="number"?" ".repeat(t.indent):"  ",inFlow:n,options:t}}function Tp(i,e){var s;if(e.tag){const r=i.filter(a=>a.tag===e.tag);if(r.length>0)return r.find(a=>a.format===e.format)??r[0]}let t,n;if(xt(e)){n=e.value;let r=i.filter(a=>{var o;return(o=a.identify)==null?void 0:o.call(a,n)});if(r.length>1){const a=r.filter(o=>o.test);a.length>0&&(r=a)}t=r.find(a=>a.format===e.format)??r.find(a=>!a.format)}else n=e,t=i.find(r=>r.nodeClass&&n instanceof r.nodeClass);if(!t){const r=((s=n==null?void 0:n.constructor)==null?void 0:s.name)??(n===null?"null":typeof n);throw new Error(`Tag not resolved for ${r} value`)}return t}function Ap(i,e,{anchors:t,doc:n}){if(!n.directives)return"";const s=[],r=(xt(i)||At(i))&&i.anchor;r&&Yf(r)&&(t.add(r),s.push(`&${r}`));const a=i.tag??(e.default?null:e.tag);return a&&s.push(n.directives.tagString(a)),s.join(" ")}function Fs(i,e,t,n){var c;if(Et(i))return i.toString(e,t,n);if(Qi(i)){if(e.doc.directives)return i.toString(e);if((c=e.resolvedAliases)!=null&&c.has(i))throw new TypeError("Cannot stringify circular structure without alias nodes");e.resolvedAliases?e.resolvedAliases.add(i):e.resolvedAliases=new Set([i]),i=i.resolve(e.doc)}let s;const r=Rt(i)?i:e.doc.createNode(i,{onTagObj:l=>s=l});s??(s=Tp(e.doc.schema.tags,r));const a=Ap(r,s,e);a.length>0&&(e.indentAtStart=(e.indentAtStart??0)+a.length+1);const o=typeof s.stringify=="function"?s.stringify(r,e,t,n):xt(r)?Cr(r,e,t,n):r.toString(e,t,n);return a?xt(r)||o[0]==="{"||o[0]==="["?`${a} ${o}`:`${a}
${e.indent}${o}`:o}function Rp({key:i,value:e},t,n,s){const{allNullValues:r,doc:a,indent:o,indentStep:c,options:{commentString:l,indentSeq:f,simpleKeys:h}}=t;let d=Rt(i)&&i.comment||null;if(h){if(d)throw new Error("With simple keys, key nodes cannot have comments");if(At(i)||!Rt(i)&&typeof i=="object"){const C="With simple keys, collection cannot be used as a key value";throw new Error(C)}}let p=!h&&(!i||d&&e==null&&!t.inFlow||At(i)||(xt(i)?i.type===Ze.BLOCK_FOLDED||i.type===Ze.BLOCK_LITERAL:typeof i=="object"));t=Object.assign({},t,{allNullValues:!1,implicitKey:!p&&(h||!r),indent:o+c});let x=!1,y=!1,_=Fs(i,t,()=>x=!0,()=>y=!0);if(!p&&!t.inFlow&&_.length>1024){if(h)throw new Error("With simple keys, single line scalar must not span more than 1024 characters");p=!0}if(t.inFlow){if(r||e==null)return x&&n&&n(),_===""?"?":p?`? ${_}`:_}else if(r&&!h||e==null&&p)return _=`? ${_}`,d&&!x?_+=Wi(_,t.indent,l(d)):y&&s&&s(),_;x&&(d=null),p?(d&&(_+=Wi(_,t.indent,l(d))),_=`? ${_}
${o}:`):(_=`${_}:`,d&&(_+=Wi(_,t.indent,l(d))));let g,R,T;Rt(e)?(g=!!e.spaceBefore,R=e.commentBefore,T=e.comment):(g=!1,R=null,T=null,e&&typeof e=="object"&&(e=a.createNode(e))),t.implicitKey=!1,!p&&!d&&xt(e)&&(t.indentAtStart=_.length+1),y=!1,!f&&c.length>=2&&!t.inFlow&&!p&&Ks(e)&&!e.flow&&!e.tag&&!e.anchor&&(t.indent=t.indent.substring(2));let w=!1;const I=Fs(e,t,()=>w=!0,()=>y=!0);let L=" ";if(d||g||R){if(L=g?`
`:"",R){const C=l(R);L+=`
${ni(C,t.indent)}`}I===""&&!t.inFlow?L===`
`&&T&&(L=`

`):L+=`
${t.indent}`}else if(!p&&At(e)){const C=I[0],D=I.indexOf(`
`),S=D!==-1,b=t.inFlow??e.flow??e.items.length===0;if(S||!b){let O=!1;if(S&&(C==="&"||C==="!")){let F=I.indexOf(" ");C==="&"&&F!==-1&&F<D&&I[F+1]==="!"&&(F=I.indexOf(" ",F+1)),(F===-1||D<F)&&(O=!0)}O||(L=`
${t.indent}`)}}else(I===""||I[0]===`
`)&&(L="");return _+=L+I,t.inFlow?w&&n&&n():T&&!w?_+=Wi(_,t.indent,l(T)):y&&s&&s(),_}function ih(i,e){(i==="debug"||i==="warn")&&console.warn(e)}const qr="<<",ai={identify:i=>i===qr||typeof i=="symbol"&&i.description===qr,default:"key",tag:"tag:yaml.org,2002:merge",test:/^<<$/,resolve:()=>Object.assign(new Ze(Symbol(qr)),{addToJSMap:sh}),stringify:()=>qr},Cp=(i,e)=>(ai.identify(e)||xt(e)&&(!e.type||e.type===Ze.PLAIN)&&ai.identify(e.value))&&(i==null?void 0:i.doc.schema.tags.some(t=>t.tag===ai.tag&&t.default));function sh(i,e,t){const n=rh(i,t);if(Ks(n))for(const s of n.items)xo(i,e,s);else if(Array.isArray(n))for(const s of n)xo(i,e,s);else xo(i,e,n)}function xo(i,e,t){const n=rh(i,t);if(!$s(n))throw new Error("Merge sources must be maps or map aliases");const s=n.toJSON(null,i,Map);for(const[r,a]of s)e instanceof Map?e.has(r)||e.set(r,a):e instanceof Set?e.add(r):Object.prototype.hasOwnProperty.call(e,r)||Object.defineProperty(e,r,{value:a,writable:!0,enumerable:!0,configurable:!0});return e}function rh(i,e){return i&&Qi(e)?e.resolve(i.doc,i):e}function ah(i,e,{key:t,value:n}){if(Rt(t)&&t.addToJSMap)t.addToJSMap(i,e,n);else if(Cp(i,t))sh(i,e,n);else{const s=wn(t,"",i);if(e instanceof Map)e.set(s,wn(n,s,i));else if(e instanceof Set)e.add(s);else{const r=Pp(t,s,i),a=wn(n,r,i);r in e?Object.defineProperty(e,r,{value:a,writable:!0,enumerable:!0,configurable:!0}):e[r]=a}}return e}function Pp(i,e,t){if(e===null)return"";if(typeof e!="object")return String(e);if(Rt(i)&&(t!=null&&t.doc)){const n=nh(t.doc,{});n.anchors=new Set;for(const r of t.anchors.keys())n.anchors.add(r.anchor);n.inFlow=!0,n.inStringifyKey=!0;const s=i.toString(n);if(!t.mapKeyWarned){let r=JSON.stringify(s);r.length>40&&(r=r.substring(0,36)+'..."'),ih(t.doc.options.logLevel,`Keys with collection values will be stringified due to JS Object restrictions: ${r}. Set mapAsMap: true to use object keys.`),t.mapKeyWarned=!0}return s}return JSON.stringify(e)}function mc(i,e,t){const n=xr(i,void 0,t),s=xr(e,void 0,t);return new en(n,s)}class en{constructor(e,t=null){Object.defineProperty(this,Sn,{value:Wf}),this.key=e,this.value=t}clone(e){let{key:t,value:n}=this;return Rt(t)&&(t=t.clone(e)),Rt(n)&&(n=n.clone(e)),new en(t,n)}toJSON(e,t){const n=t!=null&&t.mapAsMap?new Map:{};return ah(t,n,this)}toString(e,t,n){return e!=null&&e.doc?Rp(this,e,t,n):JSON.stringify(this)}}function oh(i,e,t){return(e.inFlow??i.flow?Ip:Lp)(i,e,t)}function Lp({comment:i,items:e},t,{blockItemPrefix:n,flowChars:s,itemIndent:r,onChompKeep:a,onComment:o}){const{indent:c,options:{commentString:l}}=t,f=Object.assign({},t,{indent:r,type:null});let h=!1;const d=[];for(let x=0;x<e.length;++x){const y=e[x];let _=null;if(Rt(y))!h&&y.spaceBefore&&d.push(""),za(t,d,y.commentBefore,h),y.comment&&(_=y.comment);else if(Et(y)){const R=Rt(y.key)?y.key:null;R&&(!h&&R.spaceBefore&&d.push(""),za(t,d,R.commentBefore,h))}h=!1;let g=Fs(y,f,()=>_=null,()=>h=!0);_&&(g+=Wi(g,r,l(_))),h&&_&&(h=!1),d.push(n+g)}let p;if(d.length===0)p=s.start+s.end;else{p=d[0];for(let x=1;x<d.length;++x){const y=d[x];p+=y?`
${c}${y}`:`
`}}return i?(p+=`
`+ni(l(i),c),o&&o()):h&&a&&a(),p}function Ip({items:i},e,{flowChars:t,itemIndent:n}){const{indent:s,indentStep:r,flowCollectionPadding:a,options:{commentString:o}}=e;n+=r;const c=Object.assign({},e,{indent:n,inFlow:!0,type:null});let l=!1,f=0;const h=[];for(let x=0;x<i.length;++x){const y=i[x];let _=null;if(Rt(y))y.spaceBefore&&h.push(""),za(e,h,y.commentBefore,!1),y.comment&&(_=y.comment);else if(Et(y)){const R=Rt(y.key)?y.key:null;R&&(R.spaceBefore&&h.push(""),za(e,h,R.commentBefore,!1),R.comment&&(l=!0));const T=Rt(y.value)?y.value:null;T?(T.comment&&(_=T.comment),T.commentBefore&&(l=!0)):y.value==null&&(R!=null&&R.comment)&&(_=R.comment)}_&&(l=!0);let g=Fs(y,c,()=>_=null);l||(l=h.length>f||g.includes(`
`)),x<i.length-1?g+=",":e.options.trailingComma&&(e.options.lineWidth>0&&(l||(l=h.reduce((R,T)=>R+T.length+2,2)+(g.length+2)>e.options.lineWidth)),l&&(g+=",")),_&&(g+=Wi(g,n,o(_))),h.push(g),f=h.length}const{start:d,end:p}=t;if(h.length===0)return d+p;if(!l){const x=h.reduce((y,_)=>y+_.length+2,2);l=e.options.lineWidth>0&&x>e.options.lineWidth}if(l){let x=d;for(const y of h)x+=y?`
${r}${s}${y}`:`
`;return`${x}
${s}${p}`}else return`${d}${a}${h.join(" ")}${a}${p}`}function za({indent:i,options:{commentString:e}},t,n,s){if(n&&s&&(n=n.replace(/^\n+/,"")),n){const r=ni(e(n),i);t.push(r.trimStart())}}function qi(i,e){const t=xt(e)?e.value:e;for(const n of i)if(Et(n)&&(n.key===e||n.key===t||xt(n.key)&&n.key.value===t))return n}class _n extends eh{static get tagName(){return"tag:yaml.org,2002:map"}constructor(e){super(Si,e),this.items=[]}static from(e,t,n){const{keepUndefined:s,replacer:r}=n,a=new this(e),o=(c,l)=>{if(typeof r=="function")l=r.call(t,c,l);else if(Array.isArray(r)&&!r.includes(c))return;(l!==void 0||s)&&a.items.push(mc(c,l,n))};if(t instanceof Map)for(const[c,l]of t)o(c,l);else if(t&&typeof t=="object")for(const c of Object.keys(t))o(c,t[c]);return typeof e.sortMapEntries=="function"&&a.items.sort(e.sortMapEntries),a}add(e,t){var a;let n;Et(e)?n=e:!e||typeof e!="object"||!("key"in e)?n=new en(e,e==null?void 0:e.value):n=new en(e.key,e.value);const s=qi(this.items,n.key),r=(a=this.schema)==null?void 0:a.sortMapEntries;if(s){if(!t)throw new Error(`Key ${n.key} already set`);xt(s.value)&&Qf(n.value)?s.value.value=n.value:s.value=n.value}else if(r){const o=this.items.findIndex(c=>r(n,c)<0);o===-1?this.items.push(n):this.items.splice(o,0,n)}else this.items.push(n)}delete(e){const t=qi(this.items,e);return t?this.items.splice(this.items.indexOf(t),1).length>0:!1}get(e,t){const n=qi(this.items,e),s=n==null?void 0:n.value;return(!t&&xt(s)?s.value:s)??void 0}has(e){return!!qi(this.items,e)}set(e,t){this.add(new en(e,t),!0)}toJSON(e,t,n){const s=n?new n:t!=null&&t.mapAsMap?new Map:{};t!=null&&t.onCreate&&t.onCreate(s);for(const r of this.items)ah(t,s,r);return s}toString(e,t,n){if(!e)return JSON.stringify(this);for(const s of this.items)if(!Et(s))throw new Error(`Map items must all be pairs; found ${JSON.stringify(s)} instead`);return!e.allNullValues&&this.hasAllNullValues(!1)&&(e=Object.assign({},e,{allNullValues:!0})),oh(this,e,{blockItemPrefix:"",flowChars:{start:"{",end:"}"},itemIndent:e.indent||"",onChompKeep:n,onComment:t})}}const Ys={collection:"map",default:!0,nodeClass:_n,tag:"tag:yaml.org,2002:map",resolve(i,e){return $s(i)||e("Expected a mapping for this tag"),i},createNode:(i,e,t)=>_n.from(i,e,t)};class Ti extends eh{static get tagName(){return"tag:yaml.org,2002:seq"}constructor(e){super(Xs,e),this.items=[]}add(e){this.items.push(e)}delete(e){const t=jr(e);return typeof t!="number"?!1:this.items.splice(t,1).length>0}get(e,t){const n=jr(e);if(typeof n!="number")return;const s=this.items[n];return!t&&xt(s)?s.value:s}has(e){const t=jr(e);return typeof t=="number"&&t<this.items.length}set(e,t){const n=jr(e);if(typeof n!="number")throw new Error(`Expected a valid index, not ${e}.`);const s=this.items[n];xt(s)&&Qf(t)?s.value=t:this.items[n]=t}toJSON(e,t){const n=[];t!=null&&t.onCreate&&t.onCreate(n);let s=0;for(const r of this.items)n.push(wn(r,String(s++),t));return n}toString(e,t,n){return e?oh(this,e,{blockItemPrefix:"- ",flowChars:{start:"[",end:"]"},itemIndent:(e.indent||"")+"  ",onChompKeep:n,onComment:t}):JSON.stringify(this)}static from(e,t,n){const{replacer:s}=n,r=new this(e);if(t&&Symbol.iterator in Object(t)){let a=0;for(let o of t){if(typeof s=="function"){const c=t instanceof Set?o:String(a++);o=s.call(t,c,o)}r.items.push(xr(o,void 0,n))}}return r}}function jr(i){let e=xt(i)?i.value:i;return e&&typeof e=="string"&&(e=Number(e)),typeof e=="number"&&Number.isInteger(e)&&e>=0?e:null}const Js={collection:"seq",default:!0,nodeClass:Ti,tag:"tag:yaml.org,2002:seq",resolve(i,e){return Ks(i)||e("Expected a sequence for this tag"),i},createNode:(i,e,t)=>Ti.from(i,e,t)},to={identify:i=>typeof i=="string",default:!0,tag:"tag:yaml.org,2002:str",resolve:i=>i,stringify(i,e,t,n){return e=Object.assign({actualString:!0},e),Cr(i,e,t,n)}},no={identify:i=>i==null,createNode:()=>new Ze(null),default:!0,tag:"tag:yaml.org,2002:null",test:/^(?:~|[Nn]ull|NULL)?$/,resolve:()=>new Ze(null),stringify:({source:i},e)=>typeof i=="string"&&no.test.test(i)?i:e.options.nullStr},gc={identify:i=>typeof i=="boolean",default:!0,tag:"tag:yaml.org,2002:bool",test:/^(?:[Tt]rue|TRUE|[Ff]alse|FALSE)$/,resolve:i=>new Ze(i[0]==="t"||i[0]==="T"),stringify({source:i,value:e},t){if(i&&gc.test.test(i)){const n=i[0]==="t"||i[0]==="T";if(e===n)return i}return e?t.options.trueStr:t.options.falseStr}};function Un({format:i,minFractionDigits:e,tag:t,value:n}){if(typeof n=="bigint")return String(n);const s=typeof n=="number"?n:Number(n);if(!isFinite(s))return isNaN(s)?".nan":s<0?"-.inf":".inf";let r=Object.is(n,-0)?"-0":JSON.stringify(n);if(!i&&e&&(!t||t==="tag:yaml.org,2002:float")&&/^-?\d/.test(r)&&!r.includes("e")){let a=r.indexOf(".");a<0&&(a=r.length,r+=".");let o=e-(r.length-a-1);for(;o-- >0;)r+="0"}return r}const lh={identify:i=>typeof i=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^(?:[-+]?\.(?:inf|Inf|INF)|\.nan|\.NaN|\.NAN)$/,resolve:i=>i.slice(-3).toLowerCase()==="nan"?NaN:i[0]==="-"?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY,stringify:Un},ch={identify:i=>typeof i=="number",default:!0,tag:"tag:yaml.org,2002:float",format:"EXP",test:/^[-+]?(?:\.[0-9]+|[0-9]+(?:\.[0-9]*)?)[eE][-+]?[0-9]+$/,resolve:i=>parseFloat(i),stringify(i){const e=Number(i.value);return isFinite(e)?e.toExponential():Un(i)}},uh={identify:i=>typeof i=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^[-+]?(?:\.[0-9]+|[0-9]+\.[0-9]*)$/,resolve(i){const e=new Ze(parseFloat(i)),t=i.indexOf(".");return t!==-1&&i[i.length-1]==="0"&&(e.minFractionDigits=i.length-t-1),e},stringify:Un},io=i=>typeof i=="bigint"||Number.isInteger(i),_c=(i,e,t,{intAsBigInt:n})=>n?BigInt(i):parseInt(i.substring(e),t);function fh(i,e,t){const{value:n}=i;return io(n)&&n>=0?t+n.toString(e):Un(i)}const hh={identify:i=>io(i)&&i>=0,default:!0,tag:"tag:yaml.org,2002:int",format:"OCT",test:/^0o[0-7]+$/,resolve:(i,e,t)=>_c(i,2,8,t),stringify:i=>fh(i,8,"0o")},dh={identify:io,default:!0,tag:"tag:yaml.org,2002:int",test:/^[-+]?[0-9]+$/,resolve:(i,e,t)=>_c(i,0,10,t),stringify:Un},ph={identify:i=>io(i)&&i>=0,default:!0,tag:"tag:yaml.org,2002:int",format:"HEX",test:/^0x[0-9a-fA-F]+$/,resolve:(i,e,t)=>_c(i,2,16,t),stringify:i=>fh(i,16,"0x")},Dp=[Ys,Js,to,no,gc,hh,dh,ph,lh,ch,uh];function ou(i){return typeof i=="bigint"||Number.isInteger(i)}const Xr=({value:i})=>JSON.stringify(i),Op=[{identify:i=>typeof i=="string",default:!0,tag:"tag:yaml.org,2002:str",resolve:i=>i,stringify:Xr},{identify:i=>i==null,createNode:()=>new Ze(null),default:!0,tag:"tag:yaml.org,2002:null",test:/^null$/,resolve:()=>null,stringify:Xr},{identify:i=>typeof i=="boolean",default:!0,tag:"tag:yaml.org,2002:bool",test:/^true$|^false$/,resolve:i=>i==="true",stringify:Xr},{identify:ou,default:!0,tag:"tag:yaml.org,2002:int",test:/^-?(?:0|[1-9][0-9]*)$/,resolve:(i,e,{intAsBigInt:t})=>t?BigInt(i):parseInt(i,10),stringify:({value:i})=>ou(i)?i.toString():JSON.stringify(i)},{identify:i=>typeof i=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^-?(?:0|[1-9][0-9]*)(?:\.[0-9]*)?(?:[eE][-+]?[0-9]+)?$/,resolve:i=>parseFloat(i),stringify:Xr}],Np={default:!0,tag:"",test:/^/,resolve(i,e){return e(`Unresolved plain scalar ${JSON.stringify(i)}`),i}},kp=[Ys,Js].concat(Op,Np),vc={identify:i=>i instanceof Uint8Array,default:!1,tag:"tag:yaml.org,2002:binary",resolve(i,e){if(typeof atob=="function"){const t=atob(i.replace(/[\n\r]/g,"")),n=new Uint8Array(t.length);for(let s=0;s<t.length;++s)n[s]=t.charCodeAt(s);return n}else return e("This environment does not support reading binary tags; either Buffer or atob is required"),i},stringify({comment:i,type:e,value:t},n,s,r){if(!t)return"";const a=t;let o;if(typeof btoa=="function"){let c="";for(let l=0;l<a.length;++l)c+=String.fromCharCode(a[l]);o=btoa(c)}else throw new Error("This environment does not support writing binary tags; either Buffer or btoa is required");if(e??(e=Ze.BLOCK_LITERAL),e!==Ze.QUOTE_DOUBLE){const c=Math.max(n.options.lineWidth-n.indent.length,n.options.minContentWidth),l=Math.ceil(o.length/c),f=new Array(l);for(let h=0,d=0;h<l;++h,d+=c)f[h]=o.substr(d,c);o=f.join(e===Ze.BLOCK_LITERAL?`
`:" ")}return Cr({comment:i,type:e,value:o},n,s,r)}};function mh(i,e){if(Ks(i))for(let t=0;t<i.items.length;++t){let n=i.items[t];if(!Et(n)){if($s(n)){n.items.length>1&&e("Each pair must have its own sequence indicator");const s=n.items[0]||new en(new Ze(null));if(n.commentBefore&&(s.key.commentBefore=s.key.commentBefore?`${n.commentBefore}
${s.key.commentBefore}`:n.commentBefore),n.comment){const r=s.value??s.key;r.comment=r.comment?`${n.comment}
${r.comment}`:n.comment}n=s}i.items[t]=Et(n)?n:new en(n)}}else e("Expected a sequence for this tag");return i}function gh(i,e,t){const{replacer:n}=t,s=new Ti(i);s.tag="tag:yaml.org,2002:pairs";let r=0;if(e&&Symbol.iterator in Object(e))for(let a of e){typeof n=="function"&&(a=n.call(e,String(r++),a));let o,c;if(Array.isArray(a))if(a.length===2)o=a[0],c=a[1];else throw new TypeError(`Expected [key, value] tuple: ${a}`);else if(a&&a instanceof Object){const l=Object.keys(a);if(l.length===1)o=l[0],c=a[o];else throw new TypeError(`Expected tuple with one key, not ${l.length} keys`)}else o=a;s.items.push(mc(o,c,t))}return s}const yc={collection:"seq",default:!1,tag:"tag:yaml.org,2002:pairs",resolve:mh,createNode:gh};class Ds extends Ti{constructor(){super(),this.add=_n.prototype.add.bind(this),this.delete=_n.prototype.delete.bind(this),this.get=_n.prototype.get.bind(this),this.has=_n.prototype.has.bind(this),this.set=_n.prototype.set.bind(this),this.tag=Ds.tag}toJSON(e,t){if(!t)return super.toJSON(e);const n=new Map;t!=null&&t.onCreate&&t.onCreate(n);for(const s of this.items){let r,a;if(Et(s)?(r=wn(s.key,"",t),a=wn(s.value,r,t)):r=wn(s,"",t),n.has(r))throw new Error("Ordered maps must not include duplicate keys");n.set(r,a)}return n}static from(e,t,n){const s=gh(e,t,n),r=new this;return r.items=s.items,r}}Ds.tag="tag:yaml.org,2002:omap";const xc={collection:"seq",identify:i=>i instanceof Map,nodeClass:Ds,default:!1,tag:"tag:yaml.org,2002:omap",resolve(i,e){const t=mh(i,e),n=[];for(const{key:s}of t.items)xt(s)&&(n.includes(s.value)?e(`Ordered maps must not include duplicate keys: ${s.value}`):n.push(s.value));return Object.assign(new Ds,t)},createNode:(i,e,t)=>Ds.from(i,e,t)};function _h({value:i,source:e},t){return e&&(i?vh:yh).test.test(e)?e:i?t.options.trueStr:t.options.falseStr}const vh={identify:i=>i===!0,default:!0,tag:"tag:yaml.org,2002:bool",test:/^(?:Y|y|[Yy]es|YES|[Tt]rue|TRUE|[Oo]n|ON)$/,resolve:()=>new Ze(!0),stringify:_h},yh={identify:i=>i===!1,default:!0,tag:"tag:yaml.org,2002:bool",test:/^(?:N|n|[Nn]o|NO|[Ff]alse|FALSE|[Oo]ff|OFF)$/,resolve:()=>new Ze(!1),stringify:_h},Up={identify:i=>typeof i=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^(?:[-+]?\.(?:inf|Inf|INF)|\.nan|\.NaN|\.NAN)$/,resolve:i=>i.slice(-3).toLowerCase()==="nan"?NaN:i[0]==="-"?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY,stringify:Un},Fp={identify:i=>typeof i=="number",default:!0,tag:"tag:yaml.org,2002:float",format:"EXP",test:/^[-+]?(?:[0-9][0-9_]*)?(?:\.[0-9_]*)?[eE][-+]?[0-9]+$/,resolve:i=>parseFloat(i.replace(/_/g,"")),stringify(i){const e=Number(i.value);return isFinite(e)?e.toExponential():Un(i)}},Bp={identify:i=>typeof i=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^[-+]?(?:[0-9][0-9_]*)?\.[0-9_]*$/,resolve(i){const e=new Ze(parseFloat(i.replace(/_/g,""))),t=i.indexOf(".");if(t!==-1){const n=i.substring(t+1).replace(/_/g,"");n[n.length-1]==="0"&&(e.minFractionDigits=n.length)}return e},stringify:Un},Pr=i=>typeof i=="bigint"||Number.isInteger(i);function so(i,e,t,{intAsBigInt:n}){const s=i[0];if((s==="-"||s==="+")&&(e+=1),i=i.substring(e).replace(/_/g,""),n){switch(t){case 2:i=`0b${i}`;break;case 8:i=`0o${i}`;break;case 16:i=`0x${i}`;break}const a=BigInt(i);return s==="-"?BigInt(-1)*a:a}const r=parseInt(i,t);return s==="-"?-1*r:r}function bc(i,e,t){const{value:n}=i;if(Pr(n)){const s=n.toString(e);return n<0?"-"+t+s.substr(1):t+s}return Un(i)}const zp={identify:Pr,default:!0,tag:"tag:yaml.org,2002:int",format:"BIN",test:/^[-+]?0b[0-1_]+$/,resolve:(i,e,t)=>so(i,2,2,t),stringify:i=>bc(i,2,"0b")},Hp={identify:Pr,default:!0,tag:"tag:yaml.org,2002:int",format:"OCT",test:/^[-+]?0[0-7_]+$/,resolve:(i,e,t)=>so(i,1,8,t),stringify:i=>bc(i,8,"0")},Gp={identify:Pr,default:!0,tag:"tag:yaml.org,2002:int",test:/^[-+]?[0-9][0-9_]*$/,resolve:(i,e,t)=>so(i,0,10,t),stringify:Un},Vp={identify:Pr,default:!0,tag:"tag:yaml.org,2002:int",format:"HEX",test:/^[-+]?0x[0-9a-fA-F_]+$/,resolve:(i,e,t)=>so(i,2,16,t),stringify:i=>bc(i,16,"0x")};class Os extends _n{constructor(e){super(e),this.tag=Os.tag}add(e){let t;Et(e)?t=e:e&&typeof e=="object"&&"key"in e&&"value"in e&&e.value===null?t=new en(e.key,null):t=new en(e,null),qi(this.items,t.key)||this.items.push(t)}get(e,t){const n=qi(this.items,e);return!t&&Et(n)?xt(n.key)?n.key.value:n.key:n}set(e,t){if(typeof t!="boolean")throw new Error(`Expected boolean value for set(key, value) in a YAML set, not ${typeof t}`);const n=qi(this.items,e);n&&!t?this.items.splice(this.items.indexOf(n),1):!n&&t&&this.items.push(new en(e))}toJSON(e,t){return super.toJSON(e,t,Set)}toString(e,t,n){if(!e)return JSON.stringify(this);if(this.hasAllNullValues(!0))return super.toString(Object.assign({},e,{allNullValues:!0}),t,n);throw new Error("Set items must all have null values")}static from(e,t,n){const{replacer:s}=n,r=new this(e);if(t&&Symbol.iterator in Object(t))for(let a of t)typeof s=="function"&&(a=s.call(t,a,a)),r.items.push(mc(a,null,n));return r}}Os.tag="tag:yaml.org,2002:set";const wc={collection:"map",identify:i=>i instanceof Set,nodeClass:Os,default:!1,tag:"tag:yaml.org,2002:set",createNode:(i,e,t)=>Os.from(i,e,t),resolve(i,e){if($s(i)){if(i.hasAllNullValues(!0))return Object.assign(new Os,i);e("Set items must all have null values")}else e("Expected a mapping for this tag");return i}};function Mc(i,e){const t=i[0],n=t==="-"||t==="+"?i.substring(1):i,s=a=>e?BigInt(a):Number(a),r=n.replace(/_/g,"").split(":").reduce((a,o)=>a*s(60)+s(o),s(0));return t==="-"?s(-1)*r:r}function xh(i){let{value:e}=i,t=a=>a;if(typeof e=="bigint")t=a=>BigInt(a);else if(isNaN(e)||!isFinite(e))return Un(i);let n="";e<0&&(n="-",e*=t(-1));const s=t(60),r=[e%s];return e<60?r.unshift(0):(e=(e-r[0])/s,r.unshift(e%s),e>=60&&(e=(e-r[0])/s,r.unshift(e))),n+r.map(a=>String(a).padStart(2,"0")).join(":").replace(/000000\d*$/,"")}const bh={identify:i=>typeof i=="bigint"||Number.isInteger(i),default:!0,tag:"tag:yaml.org,2002:int",format:"TIME",test:/^[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+$/,resolve:(i,e,{intAsBigInt:t})=>Mc(i,t),stringify:xh},wh={identify:i=>typeof i=="number",default:!0,tag:"tag:yaml.org,2002:float",format:"TIME",test:/^[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+\.[0-9_]*$/,resolve:i=>Mc(i,!1),stringify:xh},ro={identify:i=>i instanceof Date,default:!0,tag:"tag:yaml.org,2002:timestamp",test:RegExp("^([0-9]{4})-([0-9]{1,2})-([0-9]{1,2})(?:(?:t|T|[ \\t]+)([0-9]{1,2}):([0-9]{1,2}):([0-9]{1,2}(\\.[0-9]+)?)(?:[ \\t]*(Z|[-+][012]?[0-9](?::[0-9]{2})?))?)?$"),resolve(i){const e=i.match(ro.test);if(!e)throw new Error("!!timestamp expects a date, starting with yyyy-mm-dd");const[,t,n,s,r,a,o]=e.map(Number),c=e[7]?Number((e[7]+"00").substr(1,3)):0;let l=Date.UTC(t,n-1,s,r||0,a||0,o||0,c);const f=e[8];if(f&&f!=="Z"){let h=Mc(f,!1);Math.abs(h)<30&&(h*=60),l-=6e4*h}return new Date(l)},stringify:({value:i})=>(i==null?void 0:i.toISOString().replace(/(T00:00:00)?\.000Z$/,""))??""},lu=[Ys,Js,to,no,vh,yh,zp,Hp,Gp,Vp,Up,Fp,Bp,vc,ai,xc,yc,wc,bh,wh,ro],cu=new Map([["core",Dp],["failsafe",[Ys,Js,to]],["json",kp],["yaml11",lu],["yaml-1.1",lu]]),uu={binary:vc,bool:gc,float:uh,floatExp:ch,floatNaN:lh,floatTime:wh,int:dh,intHex:ph,intOct:hh,intTime:bh,map:Ys,merge:ai,null:no,omap:xc,pairs:yc,seq:Js,set:wc,timestamp:ro},Wp={"tag:yaml.org,2002:binary":vc,"tag:yaml.org,2002:merge":ai,"tag:yaml.org,2002:omap":xc,"tag:yaml.org,2002:pairs":yc,"tag:yaml.org,2002:set":wc,"tag:yaml.org,2002:timestamp":ro};function bo(i,e,t){const n=cu.get(e);if(n&&!i)return t&&!n.includes(ai)?n.concat(ai):n.slice();let s=n;if(!s)if(Array.isArray(i))s=[];else{const r=Array.from(cu.keys()).filter(a=>a!=="yaml11").map(a=>JSON.stringify(a)).join(", ");throw new Error(`Unknown schema "${e}"; use one of ${r} or define customTags array`)}if(Array.isArray(i))for(const r of i)s=s.concat(r);else typeof i=="function"&&(s=i(s.slice()));return t&&(s=s.concat(ai)),s.reduce((r,a)=>{const o=typeof a=="string"?uu[a]:a;if(!o){const c=JSON.stringify(a),l=Object.keys(uu).map(f=>JSON.stringify(f)).join(", ");throw new Error(`Unknown custom tag ${c}; use one of ${l}`)}return r.includes(o)||r.push(o),r},[])}const qp=(i,e)=>i.key<e.key?-1:i.key>e.key?1:0;class ao{constructor({compat:e,customTags:t,merge:n,resolveKnownTags:s,schema:r,sortMapEntries:a,toStringDefaults:o}){this.compat=Array.isArray(e)?bo(e,"compat"):e?bo(null,e):null,this.name=typeof r=="string"&&r||"core",this.knownTags=s?Wp:{},this.tags=bo(t,this.name,n),this.toStringOptions=o??null,Object.defineProperty(this,Si,{value:Ys}),Object.defineProperty(this,Wn,{value:to}),Object.defineProperty(this,Xs,{value:Js}),this.sortMapEntries=typeof a=="function"?a:a===!0?qp:null}clone(){const e=Object.create(ao.prototype,Object.getOwnPropertyDescriptors(this));return e.tags=this.tags.slice(),e}}function jp(i,e){var c;const t=[];let n=e.directives===!0;if(e.directives!==!1&&i.directives){const l=i.directives.toString(i);l?(t.push(l),n=!0):i.directives.docStart&&(n=!0)}n&&t.push("---");const s=nh(i,e),{commentString:r}=s.options;if(i.commentBefore){t.length!==1&&t.unshift("");const l=r(i.commentBefore);t.unshift(ni(l,""))}let a=!1,o=null;if(i.contents){if(Rt(i.contents)){if(i.contents.spaceBefore&&n&&t.push(""),i.contents.commentBefore){const h=r(i.contents.commentBefore);t.push(ni(h,""))}s.forceBlockIndent=!!i.comment,o=i.contents.comment}const l=o?void 0:()=>a=!0;let f=Fs(i.contents,s,()=>o=null,l);o&&(f+=Wi(f,"",r(o))),(f[0]==="|"||f[0]===">")&&t[t.length-1]==="---"?t[t.length-1]=`--- ${f}`:t.push(f)}else t.push(Fs(i.contents,s));if((c=i.directives)!=null&&c.docEnd)if(i.comment){const l=r(i.comment);l.includes(`
`)?(t.push("..."),t.push(ni(l,""))):t.push(`... ${l}`)}else t.push("...");else{let l=i.comment;l&&a&&(l=l.replace(/^\n+/,"")),l&&((!a||o)&&t[t.length-1]!==""&&t.push(""),t.push(ni(r(l),"")))}return t.join(`
`)+`
`}class Zs{constructor(e,t,n){this.commentBefore=null,this.comment=null,this.errors=[],this.warnings=[],Object.defineProperty(this,Sn,{value:dl});let s=null;typeof t=="function"||Array.isArray(t)?s=t:n===void 0&&t&&(n=t,t=void 0);const r=Object.assign({intAsBigInt:!1,keepSourceTokens:!1,logLevel:"warn",prettyErrors:!0,strict:!0,stringKeys:!1,uniqueKeys:!0,version:"1.2"},n);this.options=r;let{version:a}=r;n!=null&&n._directives?(this.directives=n._directives.atDocument(),this.directives.yaml.explicit&&(a=this.directives.yaml.version)):this.directives=new nn({version:a}),this.setSchema(a,n),this.contents=e===void 0?null:this.createNode(e,s,n)}clone(){const e=Object.create(Zs.prototype,{[Sn]:{value:dl}});return e.commentBefore=this.commentBefore,e.comment=this.comment,e.errors=this.errors.slice(),e.warnings=this.warnings.slice(),e.options=Object.assign({},this.options),this.directives&&(e.directives=this.directives.clone()),e.schema=this.schema.clone(),e.contents=Rt(this.contents)?this.contents.clone(e.schema):this.contents,this.range&&(e.range=this.range.slice()),e}add(e){os(this.contents)&&this.contents.add(e)}addIn(e,t){os(this.contents)&&this.contents.addIn(e,t)}createAlias(e,t){if(!e.anchor){const n=Jf(this);e.anchor=!t||n.has(t)?Zf(t||"a",n):t}return new Ja(e.anchor)}createNode(e,t,n){let s;if(typeof t=="function")e=t.call({"":e},"",e),s=t;else if(Array.isArray(t)){const _=R=>typeof R=="number"||R instanceof String||R instanceof Number,g=t.filter(_).map(String);g.length>0&&(t=t.concat(g)),s=t}else n===void 0&&t&&(n=t,t=void 0);const{aliasDuplicateObjects:r,anchorPrefix:a,flow:o,keepUndefined:c,onTagObj:l,tag:f}=n??{},{onAnchor:h,setAnchors:d,sourceObjects:p}=xp(this,a||"a"),x={aliasDuplicateObjects:r??!0,keepUndefined:c??!1,onAnchor:h,onTagObj:l,replacer:s,schema:this.schema,sourceObjects:p},y=xr(e,f,x);return o&&At(y)&&(y.flow=!0),d(),y}createPair(e,t,n={}){const s=this.createNode(e,null,n),r=this.createNode(t,null,n);return new en(s,r)}delete(e){return os(this.contents)?this.contents.delete(e):!1}deleteIn(e){return mr(e)?this.contents==null?!1:(this.contents=null,!0):os(this.contents)?this.contents.deleteIn(e):!1}get(e,t){return At(this.contents)?this.contents.get(e,t):void 0}getIn(e,t){return mr(e)?!t&&xt(this.contents)?this.contents.value:this.contents:At(this.contents)?this.contents.getIn(e,t):void 0}has(e){return At(this.contents)?this.contents.has(e):!1}hasIn(e){return mr(e)?this.contents!==void 0:At(this.contents)?this.contents.hasIn(e):!1}set(e,t){this.contents==null?this.contents=Ba(this.schema,[e],t):os(this.contents)&&this.contents.set(e,t)}setIn(e,t){mr(e)?this.contents=t:this.contents==null?this.contents=Ba(this.schema,Array.from(e),t):os(this.contents)&&this.contents.setIn(e,t)}setSchema(e,t={}){typeof e=="number"&&(e=String(e));let n;switch(e){case"1.1":this.directives?this.directives.yaml.version="1.1":this.directives=new nn({version:"1.1"}),n={resolveKnownTags:!1,schema:"yaml-1.1"};break;case"1.2":case"next":this.directives?this.directives.yaml.version=e:this.directives=new nn({version:e}),n={resolveKnownTags:!0,schema:"core"};break;case null:this.directives&&delete this.directives,n=null;break;default:{const s=JSON.stringify(e);throw new Error(`Expected '1.1', '1.2' or null as first argument, but found: ${s}`)}}if(t.schema instanceof Object)this.schema=t.schema;else if(n)this.schema=new ao(Object.assign(n,t));else throw new Error("With a null YAML version, the { schema: Schema } option is required")}toJS({json:e,jsonArg:t,mapAsMap:n,maxAliasCount:s,onAnchor:r,reviver:a}={}){const o={anchors:new Map,doc:this,keep:!e,mapAsMap:n===!0,mapKeyWarned:!1,maxAliasCount:typeof s=="number"?s:100},c=wn(this.contents,t??"",o);if(typeof r=="function")for(const{count:l,res:f}of o.anchors.values())r(f,l);return typeof a=="function"?Cs(a,{"":c},"",c):c}toJSON(e,t){return this.toJS({json:!0,jsonArg:e,mapAsMap:!1,onAnchor:t})}toString(e={}){if(this.errors.length>0)throw new Error("Document with errors cannot be stringified");if("indent"in e&&(!Number.isInteger(e.indent)||Number(e.indent)<=0)){const t=JSON.stringify(e.indent);throw new Error(`"indent" option must be a positive integer, not ${t}`)}return jp(this,e)}}function os(i){if(At(i))return!0;throw new Error("Expected a YAML collection as document contents")}class Sc extends Error{constructor(e,t,n,s){super(),this.name=e,this.code=n,this.message=s,this.pos=t}}class ji extends Sc{constructor(e,t,n){super("YAMLParseError",e,t,n)}}class Mh extends Sc{constructor(e,t,n){super("YAMLWarning",e,t,n)}}const Ha=(i,e)=>t=>{if(t.pos[0]===-1)return;t.linePos=t.pos.map(o=>e.linePos(o));const{line:n,col:s}=t.linePos[0];t.message+=` at line ${n}, column ${s}`;let r=s-1,a=i.substring(e.lineStarts[n-1],e.lineStarts[n]).replace(/[\n\r]+$/,"");if(r>=60&&a.length>80){const o=Math.min(r-39,a.length-79);a="…"+a.substring(o),r-=o-1}if(a.length>80&&(a=a.substring(0,79)+"…"),n>1&&/^ *$/.test(a.substring(0,r))){let o=i.substring(e.lineStarts[n-2],e.lineStarts[n-1]);o.length>80&&(o=o.substring(0,79)+`…
`),a=o+a}if(/[^ ]/.test(a)){let o=1;const c=t.linePos[1];(c==null?void 0:c.line)===n&&c.col>s&&(o=Math.max(1,Math.min(c.col-s,80-r)));const l=" ".repeat(r)+"^".repeat(o);t.message+=`:

${a}
${l}
`}};function Bs(i,{flow:e,indicator:t,next:n,offset:s,onError:r,parentIndent:a,startOnNewline:o}){let c=!1,l=o,f=o,h="",d="",p=!1,x=!1,y=null,_=null,g=null,R=null,T=null,w=null,I=null;for(const D of i)switch(x&&(D.type!=="space"&&D.type!=="newline"&&D.type!=="comma"&&r(D.offset,"MISSING_CHAR","Tags and anchors must be separated from the next token by white space"),x=!1),y&&(l&&D.type!=="comment"&&D.type!=="newline"&&r(y,"TAB_AS_INDENT","Tabs are not allowed as indentation"),y=null),D.type){case"space":!e&&(t!=="doc-start"||(n==null?void 0:n.type)!=="flow-collection")&&D.source.includes("	")&&(y=D),f=!0;break;case"comment":{f||r(D,"MISSING_CHAR","Comments must be separated from other tokens by white space characters");const S=D.source.substring(1)||" ";h?h+=d+S:h=S,d="",l=!1;break}case"newline":l?h?h+=D.source:(!w||t!=="seq-item-ind")&&(c=!0):d+=D.source,l=!0,p=!0,(_||g)&&(R=D),f=!0;break;case"anchor":_&&r(D,"MULTIPLE_ANCHORS","A node can have at most one anchor"),D.source.endsWith(":")&&r(D.offset+D.source.length-1,"BAD_ALIAS","Anchor ending in : is ambiguous",!0),_=D,I??(I=D.offset),l=!1,f=!1,x=!0;break;case"tag":{g&&r(D,"MULTIPLE_TAGS","A node can have at most one tag"),g=D,I??(I=D.offset),l=!1,f=!1,x=!0;break}case t:(_||g)&&r(D,"BAD_PROP_ORDER",`Anchors and tags must be after the ${D.source} indicator`),w&&r(D,"UNEXPECTED_TOKEN",`Unexpected ${D.source} in ${e??"collection"}`),w=D,l=t==="seq-item-ind"||t==="explicit-key-ind",f=!1;break;case"comma":if(e){T&&r(D,"UNEXPECTED_TOKEN",`Unexpected , in ${e}`),T=D,l=!1,f=!1;break}default:r(D,"UNEXPECTED_TOKEN",`Unexpected ${D.type} token`),l=!1,f=!1}const L=i[i.length-1],C=L?L.offset+L.source.length:s;return x&&n&&n.type!=="space"&&n.type!=="newline"&&n.type!=="comma"&&(n.type!=="scalar"||n.source!=="")&&r(n.offset,"MISSING_CHAR","Tags and anchors must be separated from the next token by white space"),y&&(l&&y.indent<=a||(n==null?void 0:n.type)==="block-map"||(n==null?void 0:n.type)==="block-seq")&&r(y,"TAB_AS_INDENT","Tabs are not allowed as indentation"),{comma:T,found:w,spaceBefore:c,comment:h,hasNewline:p,anchor:_,tag:g,newlineAfterProp:R,end:C,start:I??C}}function br(i){if(!i)return null;switch(i.type){case"alias":case"scalar":case"double-quoted-scalar":case"single-quoted-scalar":if(i.source.includes(`
`))return!0;if(i.end){for(const e of i.end)if(e.type==="newline")return!0}return!1;case"flow-collection":for(const e of i.items){for(const t of e.start)if(t.type==="newline")return!0;if(e.sep){for(const t of e.sep)if(t.type==="newline")return!0}if(br(e.key)||br(e.value))return!0}return!1;default:return!0}}function _l(i,e,t){if((e==null?void 0:e.type)==="flow-collection"){const n=e.end[0];n.indent===i&&(n.source==="]"||n.source==="}")&&br(e)&&t(n,"BAD_INDENT","Flow end indicator should be more indented than parent",!0)}}function Sh(i,e,t){const{uniqueKeys:n}=i.options;if(n===!1)return!1;const s=typeof n=="function"?n:(r,a)=>r===a||xt(r)&&xt(a)&&r.value===a.value;return e.some(r=>s(r.key,t))}const fu="All mapping items must start at the same column";function Xp({composeNode:i,composeEmptyNode:e},t,n,s,r){var f;const a=(r==null?void 0:r.nodeClass)??_n,o=new a(t.schema);t.atRoot&&(t.atRoot=!1);let c=n.offset,l=null;for(const h of n.items){const{start:d,key:p,sep:x,value:y}=h,_=Bs(d,{indicator:"explicit-key-ind",next:p??(x==null?void 0:x[0]),offset:c,onError:s,parentIndent:n.indent,startOnNewline:!0}),g=!_.found;if(g){if(p&&(p.type==="block-seq"?s(c,"BLOCK_AS_IMPLICIT_KEY","A block sequence may not be used as an implicit map key"):"indent"in p&&p.indent!==n.indent&&s(c,"BAD_INDENT",fu)),!_.anchor&&!_.tag&&!x){l=_.end,_.comment&&(o.comment?o.comment+=`
`+_.comment:o.comment=_.comment);continue}(_.newlineAfterProp||br(p))&&s(p??d[d.length-1],"MULTILINE_IMPLICIT_KEY","Implicit keys need to be on a single line")}else((f=_.found)==null?void 0:f.indent)!==n.indent&&s(c,"BAD_INDENT",fu);t.atKey=!0;const R=_.end,T=p?i(t,p,_,s):e(t,R,d,null,_,s);t.schema.compat&&_l(n.indent,p,s),t.atKey=!1,Sh(t,o.items,T)&&s(R,"DUPLICATE_KEY","Map keys must be unique");const w=Bs(x??[],{indicator:"map-value-ind",next:y,offset:T.range[2],onError:s,parentIndent:n.indent,startOnNewline:!p||p.type==="block-scalar"});if(c=w.end,w.found){g&&((y==null?void 0:y.type)==="block-map"&&!w.hasNewline&&s(c,"BLOCK_AS_IMPLICIT_KEY","Nested mappings are not allowed in compact mappings"),t.options.strict&&_.start<w.found.offset-1024&&s(T.range,"KEY_OVER_1024_CHARS","The : indicator must be at most 1024 chars after the start of an implicit block mapping key"));const I=y?i(t,y,w,s):e(t,c,x,null,w,s);t.schema.compat&&_l(n.indent,y,s),c=I.range[2];const L=new en(T,I);t.options.keepSourceTokens&&(L.srcToken=h),o.items.push(L)}else{g&&s(T.range,"MISSING_CHAR","Implicit map keys need to be followed by map values"),w.comment&&(T.comment?T.comment+=`
`+w.comment:T.comment=w.comment);const I=new en(T);t.options.keepSourceTokens&&(I.srcToken=h),o.items.push(I)}}return l&&l<c&&s(l,"IMPOSSIBLE","Map comment with trailing content"),o.range=[n.offset,c,l??c],o}function $p({composeNode:i,composeEmptyNode:e},t,n,s,r){const a=(r==null?void 0:r.nodeClass)??Ti,o=new a(t.schema);t.atRoot&&(t.atRoot=!1),t.atKey&&(t.atKey=!1);let c=n.offset,l=null;for(const{start:f,value:h}of n.items){const d=Bs(f,{indicator:"seq-item-ind",next:h,offset:c,onError:s,parentIndent:n.indent,startOnNewline:!0});if(!d.found)if(d.anchor||d.tag||h)(h==null?void 0:h.type)==="block-seq"?s(d.end,"BAD_INDENT","All sequence items must start at the same column"):s(c,"MISSING_CHAR","Sequence item without - indicator");else{l=d.end,d.comment&&(o.comment=d.comment);continue}const p=h?i(t,h,d,s):e(t,d.end,f,null,d,s);t.schema.compat&&_l(n.indent,h,s),c=p.range[2],o.items.push(p)}return o.range=[n.offset,c,l??c],o}function Lr(i,e,t,n){let s="";if(i){let r=!1,a="";for(const o of i){const{source:c,type:l}=o;switch(l){case"space":r=!0;break;case"comment":{t&&!r&&n(o,"MISSING_CHAR","Comments must be separated from other tokens by white space characters");const f=c.substring(1)||" ";s?s+=a+f:s=f,a="";break}case"newline":s&&(a+=c),r=!0;break;default:n(o,"UNEXPECTED_TOKEN",`Unexpected ${l} at node end`)}e+=c.length}}return{comment:s,offset:e}}const wo="Block collections are not allowed within flow collections",Mo=i=>i&&(i.type==="block-map"||i.type==="block-seq");function Kp({composeNode:i,composeEmptyNode:e},t,n,s,r){var _;const a=n.start.source==="{",o=a?"flow map":"flow sequence",c=(r==null?void 0:r.nodeClass)??(a?_n:Ti),l=new c(t.schema);l.flow=!0;const f=t.atRoot;f&&(t.atRoot=!1),t.atKey&&(t.atKey=!1);let h=n.offset+n.start.source.length;for(let g=0;g<n.items.length;++g){const R=n.items[g],{start:T,key:w,sep:I,value:L}=R,C=Bs(T,{flow:o,indicator:"explicit-key-ind",next:w??(I==null?void 0:I[0]),offset:h,onError:s,parentIndent:n.indent,startOnNewline:!1});if(!C.found){if(!C.anchor&&!C.tag&&!I&&!L){g===0&&C.comma?s(C.comma,"UNEXPECTED_TOKEN",`Unexpected , in ${o}`):g<n.items.length-1&&s(C.start,"UNEXPECTED_TOKEN",`Unexpected empty item in ${o}`),C.comment&&(l.comment?l.comment+=`
`+C.comment:l.comment=C.comment),h=C.end;continue}!a&&t.options.strict&&br(w)&&s(w,"MULTILINE_IMPLICIT_KEY","Implicit keys of flow sequence pairs need to be on a single line")}if(g===0)C.comma&&s(C.comma,"UNEXPECTED_TOKEN",`Unexpected , in ${o}`);else if(C.comma||s(C.start,"MISSING_CHAR",`Missing , between ${o} items`),C.comment){let D="";e:for(const S of T)switch(S.type){case"comma":case"space":break;case"comment":D=S.source.substring(1);break e;default:break e}if(D){let S=l.items[l.items.length-1];Et(S)&&(S=S.value??S.key),S.comment?S.comment+=`
`+D:S.comment=D,C.comment=C.comment.substring(D.length+1)}}if(!a&&!I&&!C.found){const D=L?i(t,L,C,s):e(t,C.end,I,null,C,s);l.items.push(D),h=D.range[2],Mo(L)&&s(D.range,"BLOCK_IN_FLOW",wo)}else{t.atKey=!0;const D=C.end,S=w?i(t,w,C,s):e(t,D,T,null,C,s);Mo(w)&&s(S.range,"BLOCK_IN_FLOW",wo),t.atKey=!1;const b=Bs(I??[],{flow:o,indicator:"map-value-ind",next:L,offset:S.range[2],onError:s,parentIndent:n.indent,startOnNewline:!1});if(b.found){if(!a&&!C.found&&t.options.strict){if(I)for(const U of I){if(U===b.found)break;if(U.type==="newline"){s(U,"MULTILINE_IMPLICIT_KEY","Implicit keys of flow sequence pairs need to be on a single line");break}}C.start<b.found.offset-1024&&s(b.found,"KEY_OVER_1024_CHARS","The : indicator must be at most 1024 chars after the start of an implicit flow sequence key")}}else L&&("source"in L&&((_=L.source)==null?void 0:_[0])===":"?s(L,"MISSING_CHAR",`Missing space after : in ${o}`):s(b.start,"MISSING_CHAR",`Missing , or : between ${o} items`));const O=L?i(t,L,b,s):b.found?e(t,b.end,I,null,b,s):null;O?Mo(L)&&s(O.range,"BLOCK_IN_FLOW",wo):b.comment&&(S.comment?S.comment+=`
`+b.comment:S.comment=b.comment);const F=new en(S,O);if(t.options.keepSourceTokens&&(F.srcToken=R),a){const U=l;Sh(t,U.items,S)&&s(D,"DUPLICATE_KEY","Map keys must be unique"),U.items.push(F)}else{const U=new _n(t.schema);U.flow=!0,U.items.push(F);const $=(O??S).range;U.range=[S.range[0],$[1],$[2]],l.items.push(U)}h=O?O.range[2]:b.end}}const d=a?"}":"]",[p,...x]=n.end;let y=h;if((p==null?void 0:p.source)===d)y=p.offset+p.source.length;else{const g=o[0].toUpperCase()+o.substring(1),R=f?`${g} must end with a ${d}`:`${g} in block collection must be sufficiently indented and end with a ${d}`;s(h,f?"MISSING_CHAR":"BAD_INDENT",R),p&&p.source.length!==1&&x.unshift(p)}if(x.length>0){const g=Lr(x,y,t.options.strict,s);g.comment&&(l.comment?l.comment+=`
`+g.comment:l.comment=g.comment),l.range=[n.offset,y,g.offset]}else l.range=[n.offset,y,y];return l}function So(i,e,t,n,s,r){const a=t.type==="block-map"?Xp(i,e,t,n,r):t.type==="block-seq"?$p(i,e,t,n,r):Kp(i,e,t,n,r),o=a.constructor;return s==="!"||s===o.tagName?(a.tag=o.tagName,a):(s&&(a.tag=s),a)}function Yp(i,e,t,n,s){var d;const r=n.tag,a=r?e.directives.tagName(r.source,p=>s(r,"TAG_RESOLVE_FAILED",p)):null;if(t.type==="block-seq"){const{anchor:p,newlineAfterProp:x}=n,y=p&&r?p.offset>r.offset?p:r:p??r;y&&(!x||x.offset<y.offset)&&s(y,"MISSING_CHAR","Missing newline after block sequence props")}const o=t.type==="block-map"?"map":t.type==="block-seq"?"seq":t.start.source==="{"?"map":"seq";if(!r||!a||a==="!"||a===_n.tagName&&o==="map"||a===Ti.tagName&&o==="seq")return So(i,e,t,s,a);let c=e.schema.tags.find(p=>p.tag===a&&p.collection===o);if(!c){const p=e.schema.knownTags[a];if((p==null?void 0:p.collection)===o)e.schema.tags.push(Object.assign({},p,{default:!1})),c=p;else return p?s(r,"BAD_COLLECTION_TYPE",`${p.tag} used for ${o} collection, but expects ${p.collection??"scalar"}`,!0):s(r,"TAG_RESOLVE_FAILED",`Unresolved tag: ${a}`,!0),So(i,e,t,s,a)}const l=So(i,e,t,s,a,c),f=((d=c.resolve)==null?void 0:d.call(c,l,p=>s(r,"TAG_RESOLVE_FAILED",p),e.options))??l,h=Rt(f)?f:new Ze(f);return h.range=l.range,h.tag=a,c!=null&&c.format&&(h.format=c.format),h}function Eh(i,e,t){const n=e.offset,s=Jp(e,i.options.strict,t);if(!s)return{value:"",type:null,comment:"",range:[n,n,n]};const r=s.mode===">"?Ze.BLOCK_FOLDED:Ze.BLOCK_LITERAL,a=e.source?Zp(e.source):[];let o=a.length;for(let y=a.length-1;y>=0;--y){const _=a[y][1];if(_===""||_==="\r")o=y;else break}if(o===0){const y=s.chomp==="+"&&a.length>0?`
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
`}const x=n+s.length+e.source.length;return{value:h,type:r,comment:s.comment,range:[n,x,x]}}function Jp({offset:i,props:e},t,n){if(e[0].type!=="block-scalar-header")return n(e[0],"IMPOSSIBLE","Block scalar header not found"),null;const{source:s}=e[0],r=s[0];let a=0,o="",c=-1;for(let d=1;d<s.length;++d){const p=s[d];if(!o&&(p==="-"||p==="+"))o=p;else{const x=Number(p);!a&&x?a=x:c===-1&&(c=i+d)}}c!==-1&&n(c,"UNEXPECTED_TOKEN",`Block scalar header includes extra characters: ${s}`);let l=!1,f="",h=s.length;for(let d=1;d<e.length;++d){const p=e[d];switch(p.type){case"space":l=!0;case"newline":h+=p.source.length;break;case"comment":t&&!l&&n(p,"MISSING_CHAR","Comments must be separated from other tokens by white space characters"),h+=p.source.length,f=p.source.substring(1);break;case"error":n(p,"UNEXPECTED_TOKEN",p.message),h+=p.source.length;break;default:{const x=`Unexpected token in block scalar header: ${p.type}`;n(p,"UNEXPECTED_TOKEN",x);const y=p.source;y&&typeof y=="string"&&(h+=y.length)}}}return{mode:r,indent:a,chomp:o,comment:f,length:h}}function Zp(i){const e=i.split(/\n( *)/),t=e[0],n=t.match(/^( *)/),r=[n!=null&&n[1]?[n[1],t.slice(n[1].length)]:["",t]];for(let a=1;a<e.length;a+=2)r.push([e[a],e[a+1]]);return r}function Th(i,e,t){const{offset:n,type:s,source:r,end:a}=i;let o,c;const l=(d,p,x)=>t(n+d,p,x);switch(s){case"scalar":o=Ze.PLAIN,c=Qp(r,l);break;case"single-quoted-scalar":o=Ze.QUOTE_SINGLE,c=em(r,l);break;case"double-quoted-scalar":o=Ze.QUOTE_DOUBLE,c=tm(r,l);break;default:return t(i,"UNEXPECTED_TOKEN",`Expected a flow scalar value, but found: ${s}`),{value:"",type:null,comment:"",range:[n,n+r.length,n+r.length]}}const f=n+r.length,h=Lr(a,f,e,t);return{value:c,type:o,comment:h.comment,range:[n,f,h.offset]}}function Qp(i,e){let t="";switch(i[0]){case"	":t="a tab character";break;case",":t="flow indicator character ,";break;case"%":t="directive indicator character %";break;case"|":case">":{t=`block scalar indicator ${i[0]}`;break}case"@":case"`":{t=`reserved character ${i[0]}`;break}}return t&&e(0,"BAD_SCALAR_START",`Plain value cannot start with ${t}`),Ah(i)}function em(i,e){return(i[i.length-1]!=="'"||i.length===1)&&e(i.length,"MISSING_CHAR","Missing closing 'quote"),Ah(i.slice(1,-1)).replace(/''/g,"'")}function Ah(i){const e=/(.*?)\r?\n/sy;let t=e.exec(i);if(!t)return i;let n,s;try{n=new RegExp("(?<![ 	])[ 	]+$"),s=new RegExp("^[ 	]+|(?<![ 	])[ 	]+$","g")}catch{n=/[ \t]+$/,s=/^[ \t]+|[ \t]+$/g}let r=t[1].replace(n,""),a=" ",o=e.lastIndex;for(;t=e.exec(i);){const l=t[1].replace(s,"");l===""?a===`
`?r+=a:a=`
`:(r+=a+l,a=" "),o=e.lastIndex}const c=/[ \t]*(.*)/sy;return c.lastIndex=o,t=c.exec(i),r+a+((t==null?void 0:t[1])??"")}function tm(i,e){let t="";for(let n=1;n<i.length-1;++n){const s=i[n];if(!(s==="\r"&&i[n+1]===`
`))if(s===`
`){const{fold:r,offset:a}=nm(i,n);t+=r,n=a}else if(s==="\\"){let r=i[++n];const a=im[r];if(a)t+=a;else if(r===`
`)for(r=i[n+1];r===" "||r==="	";)r=i[++n+1];else if(r==="\r"&&i[n+1]===`
`)for(r=i[++n+1];r===" "||r==="	";)r=i[++n+1];else if(r==="x"||r==="u"||r==="U"){const o=r==="x"?2:r==="u"?4:8;t+=sm(i,n+1,o,e),n+=o}else{const o=i.substr(n-1,2);e(n-1,"BAD_DQ_ESCAPE",`Invalid escape sequence ${o}`),t+=o}}else if(s===" "||s==="	"){const r=n;let a=i[n+1];for(;a===" "||a==="	";)a=i[++n+1];a!==`
`&&!(a==="\r"&&i[n+2]===`
`)&&(t+=n>r?i.slice(r,n+1):s)}else t+=s}return(i[i.length-1]!=='"'||i.length===1)&&e(i.length,"MISSING_CHAR",'Missing closing "quote'),t}function nm(i,e){let t="",n=i[e+1];for(;(n===" "||n==="	"||n===`
`||n==="\r")&&!(n==="\r"&&i[e+2]!==`
`);)n===`
`&&(t+=`
`),e+=1,n=i[e+1];return t||(t=" "),{fold:t,offset:e}}const im={0:"\0",a:"\x07",b:"\b",e:"\x1B",f:"\f",n:`
`,r:"\r",t:"	",v:"\v",N:"",_:" ",L:"\u2028",P:"\u2029"," ":" ",'"':'"',"/":"/","\\":"\\","	":"	"};function sm(i,e,t,n){const s=i.substr(e,t),a=s.length===t&&/^[0-9a-fA-F]+$/.test(s)?parseInt(s,16):NaN;try{return String.fromCodePoint(a)}catch{const o=i.substr(e-2,t+2);return n(e-2,"BAD_DQ_ESCAPE",`Invalid escape sequence ${o}`),o}}function Rh(i,e,t,n){const{value:s,type:r,comment:a,range:o}=e.type==="block-scalar"?Eh(i,e,n):Th(e,i.options.strict,n),c=t?i.directives.tagName(t.source,h=>n(t,"TAG_RESOLVE_FAILED",h)):null;let l;i.options.stringKeys&&i.atKey?l=i.schema[Wn]:c?l=rm(i.schema,s,c,t,n):e.type==="scalar"?l=am(i,s,e,n):l=i.schema[Wn];let f;try{const h=l.resolve(s,d=>n(t??e,"TAG_RESOLVE_FAILED",d),i.options);f=xt(h)?h:new Ze(h)}catch(h){const d=h instanceof Error?h.message:String(h);n(t??e,"TAG_RESOLVE_FAILED",d),f=new Ze(s)}return f.range=o,f.source=s,r&&(f.type=r),c&&(f.tag=c),l.format&&(f.format=l.format),a&&(f.comment=a),f}function rm(i,e,t,n,s){var o;if(t==="!")return i[Wn];const r=[];for(const c of i.tags)if(!c.collection&&c.tag===t)if(c.default&&c.test)r.push(c);else return c;for(const c of r)if((o=c.test)!=null&&o.test(e))return c;const a=i.knownTags[t];return a&&!a.collection?(i.tags.push(Object.assign({},a,{default:!1,test:void 0})),a):(s(n,"TAG_RESOLVE_FAILED",`Unresolved tag: ${t}`,t!=="tag:yaml.org,2002:str"),i[Wn])}function am({atKey:i,directives:e,schema:t},n,s,r){const a=t.tags.find(o=>{var c;return(o.default===!0||i&&o.default==="key")&&((c=o.test)==null?void 0:c.test(n))})||t[Wn];if(t.compat){const o=t.compat.find(c=>{var l;return c.default&&((l=c.test)==null?void 0:l.test(n))})??t[Wn];if(a.tag!==o.tag){const c=e.tagString(a.tag),l=e.tagString(o.tag),f=`Value may be parsed as either ${c} or ${l}`;r(s,"TAG_RESOLVE_FAILED",f,!0)}}return a}function om(i,e,t){if(e){t??(t=e.length);for(let n=t-1;n>=0;--n){let s=e[n];switch(s.type){case"space":case"comment":case"newline":i-=s.source.length;continue}for(s=e[++n];(s==null?void 0:s.type)==="space";)i+=s.source.length,s=e[++n];break}}return i}const lm={composeNode:Ch,composeEmptyNode:Ec};function Ch(i,e,t,n){const s=i.atKey,{spaceBefore:r,comment:a,anchor:o,tag:c}=t;let l,f=!0;switch(e.type){case"alias":l=cm(i,e,n),(o||c)&&n(e,"ALIAS_PROPS","An alias node must not specify any properties");break;case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":case"block-scalar":l=Rh(i,e,c,n),o&&(l.anchor=o.source.substring(1));break;case"block-map":case"block-seq":case"flow-collection":try{l=Yp(lm,i,e,t,n),o&&(l.anchor=o.source.substring(1))}catch(h){const d=h instanceof Error?h.message:String(h);n(e,"RESOURCE_EXHAUSTION",d)}break;default:{const h=e.type==="error"?e.message:`Unsupported token (type: ${e.type})`;n(e,"UNEXPECTED_TOKEN",h),f=!1}}return l??(l=Ec(i,e.offset,void 0,null,t,n)),o&&l.anchor===""&&n(o,"BAD_ALIAS","Anchor cannot be an empty string"),s&&i.options.stringKeys&&(!xt(l)||typeof l.value!="string"||l.tag&&l.tag!=="tag:yaml.org,2002:str")&&n(c??e,"NON_STRING_KEY","With stringKeys, all keys must be strings"),r&&(l.spaceBefore=!0),a&&(e.type==="scalar"&&e.source===""?l.comment=a:l.commentBefore=a),i.options.keepSourceTokens&&f&&(l.srcToken=e),l}function Ec(i,e,t,n,{spaceBefore:s,comment:r,anchor:a,tag:o,end:c},l){const f={type:"scalar",offset:om(e,t,n),indent:-1,source:""},h=Rh(i,f,o,l);return a&&(h.anchor=a.source.substring(1),h.anchor===""&&l(a,"BAD_ALIAS","Anchor cannot be an empty string")),s&&(h.spaceBefore=!0),r&&(h.comment=r,h.range[2]=c),h}function cm({options:i},{offset:e,source:t,end:n},s){const r=new Ja(t.substring(1));r.source===""&&s(e,"BAD_ALIAS","Alias cannot be an empty string"),r.source.endsWith(":")&&s(e+t.length-1,"BAD_ALIAS","Alias ending in : is ambiguous",!0);const a=e+t.length,o=Lr(n,a,i.strict,s);return r.range=[e,a,o.offset],o.comment&&(r.comment=o.comment),r}function um(i,e,{offset:t,start:n,value:s,end:r},a){const o=Object.assign({_directives:e},i),c=new Zs(void 0,o),l={atKey:!1,atRoot:!0,directives:c.directives,options:c.options,schema:c.schema},f=Bs(n,{indicator:"doc-start",next:s??(r==null?void 0:r[0]),offset:t,onError:a,parentIndent:0,startOnNewline:!0});f.found&&(c.directives.docStart=!0,s&&(s.type==="block-map"||s.type==="block-seq")&&!f.hasNewline&&a(f.end,"MISSING_CHAR","Block collection cannot start on same line with directives-end marker")),c.contents=s?Ch(l,s,f,a):Ec(l,f.end,n,null,f,a);const h=c.contents.range[2],d=Lr(r,h,!1,a);return d.comment&&(c.comment=d.comment),c.range=[t,h,d.offset],c}function lr(i){if(typeof i=="number")return[i,i+1];if(Array.isArray(i))return i.length===2?i:[i[0],i[1]];const{offset:e,source:t}=i;return[e,e+(typeof t=="string"?t.length:1)]}function hu(i){var s;let e="",t=!1,n=!1;for(let r=0;r<i.length;++r){const a=i[r];switch(a[0]){case"#":e+=(e===""?"":n?`

`:`
`)+(a.substring(1)||" "),t=!0,n=!1;break;case"%":((s=i[r+1])==null?void 0:s[0])!=="#"&&(r+=1),t=!1;break;default:t||(n=!0),t=!1}}return{comment:e,afterEmptyLine:n}}class Tc{constructor(e={}){this.doc=null,this.atDirectives=!1,this.prelude=[],this.errors=[],this.warnings=[],this.onError=(t,n,s,r)=>{const a=lr(t);r?this.warnings.push(new Mh(a,n,s)):this.errors.push(new ji(a,n,s))},this.directives=new nn({version:e.version||"1.2"}),this.options=e}decorate(e,t){const{comment:n,afterEmptyLine:s}=hu(this.prelude);if(n){const r=e.contents;if(t)e.comment=e.comment?`${e.comment}
${n}`:n;else if(s||e.directives.docStart||!r)e.commentBefore=n;else if(At(r)&&!r.flow&&r.items.length>0){let a=r.items[0];Et(a)&&(a=a.key);const o=a.commentBefore;a.commentBefore=o?`${n}
${o}`:n}else{const a=r.commentBefore;r.commentBefore=a?`${n}
${a}`:n}}if(t){for(let r=0;r<this.errors.length;++r)e.errors.push(this.errors[r]);for(let r=0;r<this.warnings.length;++r)e.warnings.push(this.warnings[r])}else e.errors=this.errors,e.warnings=this.warnings;this.prelude=[],this.errors=[],this.warnings=[]}streamInfo(){return{comment:hu(this.prelude).comment,directives:this.directives,errors:this.errors,warnings:this.warnings}}*compose(e,t=!1,n=-1){for(const s of e)yield*this.next(s);yield*this.end(t,n)}*next(e){switch(e.type){case"directive":this.directives.add(e.source,(t,n,s)=>{const r=lr(e);r[0]+=t,this.onError(r,"BAD_DIRECTIVE",n,s)}),this.prelude.push(e.source),this.atDirectives=!0;break;case"document":{const t=um(this.options,this.directives,e,this.onError);this.atDirectives&&!t.directives.docStart&&this.onError(e,"MISSING_CHAR","Missing directives-end/doc-start indicator line"),this.decorate(t,!1),this.doc&&(yield this.doc),this.doc=t,this.atDirectives=!1;break}case"byte-order-mark":case"space":break;case"comment":case"newline":this.prelude.push(e.source);break;case"error":{const t=e.source?`${e.message}: ${JSON.stringify(e.source)}`:e.message,n=new ji(lr(e),"UNEXPECTED_TOKEN",t);this.atDirectives||!this.doc?this.errors.push(n):this.doc.errors.push(n);break}case"doc-end":{if(!this.doc){const n="Unexpected doc-end without preceding document";this.errors.push(new ji(lr(e),"UNEXPECTED_TOKEN",n));break}this.doc.directives.docEnd=!0;const t=Lr(e.end,e.offset+e.source.length,this.doc.options.strict,this.onError);if(this.decorate(this.doc,!0),t.comment){const n=this.doc.comment;this.doc.comment=n?`${n}
${t.comment}`:t.comment}this.doc.range[2]=t.offset;break}default:this.errors.push(new ji(lr(e),"UNEXPECTED_TOKEN",`Unsupported token ${e.type}`))}}*end(e=!1,t=-1){if(this.doc)this.decorate(this.doc,!0),yield this.doc,this.doc=null;else if(e){const n=Object.assign({_directives:this.directives},this.options),s=new Zs(void 0,n);this.atDirectives&&this.onError(t,"MISSING_CHAR","Missing directives-end indicator line"),s.range=[0,t,t],this.decorate(s,!1),yield s}}}function fm(i,e=!0,t){if(i){const n=(s,r,a)=>{const o=typeof s=="number"?s:Array.isArray(s)?s[0]:s.offset;if(t)t(o,r,a);else throw new ji([o,o+1],r,a)};switch(i.type){case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":return Th(i,e,n);case"block-scalar":return Eh({options:{strict:e}},i,n)}}return null}function hm(i,e){const{implicitKey:t=!1,indent:n,inFlow:s=!1,offset:r=-1,type:a="PLAIN"}=e,o=Cr({type:a,value:i},{implicitKey:t,indent:n>0?" ".repeat(n):"",inFlow:s,options:{blockQuote:!0,lineWidth:-1}}),c=e.end??[{type:"newline",offset:-1,indent:n,source:`
`}];switch(o[0]){case"|":case">":{const l=o.indexOf(`
`),f=o.substring(0,l),h=o.substring(l+1)+`
`,d=[{type:"block-scalar-header",offset:r,indent:n,source:f}];return Ph(d,c)||d.push({type:"newline",offset:-1,indent:n,source:`
`}),{type:"block-scalar",offset:r,indent:n,props:d,source:h}}case'"':return{type:"double-quoted-scalar",offset:r,indent:n,source:o,end:c};case"'":return{type:"single-quoted-scalar",offset:r,indent:n,source:o,end:c};default:return{type:"scalar",offset:r,indent:n,source:o,end:c}}}function dm(i,e,t={}){let{afterKey:n=!1,implicitKey:s=!1,inFlow:r=!1,type:a}=t,o="indent"in i?i.indent:null;if(n&&typeof o=="number"&&(o+=2),!a)switch(i.type){case"single-quoted-scalar":a="QUOTE_SINGLE";break;case"double-quoted-scalar":a="QUOTE_DOUBLE";break;case"block-scalar":{const l=i.props[0];if(l.type!=="block-scalar-header")throw new Error("Invalid block scalar header");a=l.source[0]===">"?"BLOCK_FOLDED":"BLOCK_LITERAL";break}default:a="PLAIN"}const c=Cr({type:a,value:e},{implicitKey:s||o===null,indent:o!==null&&o>0?" ".repeat(o):"",inFlow:r,options:{blockQuote:!0,lineWidth:-1}});switch(c[0]){case"|":case">":pm(i,c);break;case'"':Eo(i,c,"double-quoted-scalar");break;case"'":Eo(i,c,"single-quoted-scalar");break;default:Eo(i,c,"scalar")}}function pm(i,e){const t=e.indexOf(`
`),n=e.substring(0,t),s=e.substring(t+1)+`
`;if(i.type==="block-scalar"){const r=i.props[0];if(r.type!=="block-scalar-header")throw new Error("Invalid block scalar header");r.source=n,i.source=s}else{const{offset:r}=i,a="indent"in i?i.indent:-1,o=[{type:"block-scalar-header",offset:r,indent:a,source:n}];Ph(o,"end"in i?i.end:void 0)||o.push({type:"newline",offset:-1,indent:a,source:`
`});for(const c of Object.keys(i))c!=="type"&&c!=="offset"&&delete i[c];Object.assign(i,{type:"block-scalar",indent:a,props:o,source:s})}}function Ph(i,e){if(e)for(const t of e)switch(t.type){case"space":case"comment":i.push(t);break;case"newline":return i.push(t),!0}return!1}function Eo(i,e,t){switch(i.type){case"scalar":case"double-quoted-scalar":case"single-quoted-scalar":i.type=t,i.source=e;break;case"block-scalar":{const n=i.props.slice(1);let s=e.length;i.props[0].type==="block-scalar-header"&&(s-=i.props[0].source.length);for(const r of n)r.offset+=s;delete i.props,Object.assign(i,{type:t,source:e,end:n});break}case"block-map":case"block-seq":{const s={type:"newline",offset:i.offset+e.length,indent:i.indent,source:`
`};delete i.items,Object.assign(i,{type:t,source:e,end:[s]});break}default:{const n="indent"in i?i.indent:-1,s="end"in i&&Array.isArray(i.end)?i.end.filter(r=>r.type==="space"||r.type==="comment"||r.type==="newline"):[];for(const r of Object.keys(i))r!=="type"&&r!=="offset"&&delete i[r];Object.assign(i,{type:t,indent:n,source:e,end:s})}}}const mm=i=>"type"in i?Ga(i):Ra(i);function Ga(i){switch(i.type){case"block-scalar":{let e="";for(const t of i.props)e+=Ga(t);return e+i.source}case"block-map":case"block-seq":{let e="";for(const t of i.items)e+=Ra(t);return e}case"flow-collection":{let e=i.start.source;for(const t of i.items)e+=Ra(t);for(const t of i.end)e+=t.source;return e}case"document":{let e=Ra(i);if(i.end)for(const t of i.end)e+=t.source;return e}default:{let e=i.source;if("end"in i&&i.end)for(const t of i.end)e+=t.source;return e}}}function Ra({start:i,key:e,sep:t,value:n}){let s="";for(const r of i)s+=r.source;if(e&&(s+=Ga(e)),t)for(const r of t)s+=r.source;return n&&(s+=Ga(n)),s}const vl=Symbol("break visit"),gm=Symbol("skip children"),Lh=Symbol("remove item");function Yi(i,e){"type"in i&&i.type==="document"&&(i={start:i.start,value:i.value}),Ih(Object.freeze([]),i,e)}Yi.BREAK=vl;Yi.SKIP=gm;Yi.REMOVE=Lh;Yi.itemAtPath=(i,e)=>{let t=i;for(const[n,s]of e){const r=t==null?void 0:t[n];if(r&&"items"in r)t=r.items[s];else return}return t};Yi.parentCollection=(i,e)=>{const t=Yi.itemAtPath(i,e.slice(0,-1)),n=e[e.length-1][0],s=t==null?void 0:t[n];if(s&&"items"in s)return s;throw new Error("Parent collection not found")};function Ih(i,e,t){let n=t(e,i);if(typeof n=="symbol")return n;for(const s of["key","value"]){const r=e[s];if(r&&"items"in r){for(let a=0;a<r.items.length;++a){const o=Ih(Object.freeze(i.concat([[s,a]])),r.items[a],t);if(typeof o=="number")a=o-1;else{if(o===vl)return vl;o===Lh&&(r.items.splice(a,1),a-=1)}}typeof n=="function"&&s==="key"&&(n=n(e,i))}}return typeof n=="function"?n(e,i):n}const oo="\uFEFF",lo="",co="",wr="",_m=i=>!!i&&"items"in i,vm=i=>!!i&&(i.type==="scalar"||i.type==="single-quoted-scalar"||i.type==="double-quoted-scalar"||i.type==="block-scalar");function ym(i){switch(i){case oo:return"<BOM>";case lo:return"<DOC>";case co:return"<FLOW_END>";case wr:return"<SCALAR>";default:return JSON.stringify(i)}}function Dh(i){switch(i){case oo:return"byte-order-mark";case lo:return"doc-mode";case co:return"flow-error-end";case wr:return"scalar";case"---":return"doc-start";case"...":return"doc-end";case"":case`
`:case`\r
`:return"newline";case"-":return"seq-item-ind";case"?":return"explicit-key-ind";case":":return"map-value-ind";case"{":return"flow-map-start";case"}":return"flow-map-end";case"[":return"flow-seq-start";case"]":return"flow-seq-end";case",":return"comma"}switch(i[0]){case" ":case"	":return"space";case"#":return"comment";case"%":return"directive-line";case"*":return"alias";case"&":return"anchor";case"!":return"tag";case"'":return"single-quoted-scalar";case'"':return"double-quoted-scalar";case"|":case">":return"block-scalar-header"}return null}const xm=Object.freeze(Object.defineProperty({__proto__:null,BOM:oo,DOCUMENT:lo,FLOW_END:co,SCALAR:wr,createScalarToken:hm,isCollection:_m,isScalar:vm,prettyToken:ym,resolveAsScalar:fm,setScalarValue:dm,stringify:mm,tokenType:Dh,visit:Yi},Symbol.toStringTag,{value:"Module"}));function Cn(i){switch(i){case void 0:case" ":case`
`:case"\r":case"	":return!0;default:return!1}}const du=new Set("0123456789ABCDEFabcdef"),bm=new Set("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-#;/?:@&=+$_.!~*'()"),$r=new Set(",[]{}"),wm=new Set(` ,[]{}
\r	`),To=i=>!i||wm.has(i);class Oh{constructor(){this.atEnd=!1,this.blockScalarIndent=-1,this.blockScalarKeep=!1,this.buffer="",this.flowKey=!1,this.flowLevel=0,this.indentNext=0,this.indentValue=0,this.lineEndPos=null,this.next=null,this.pos=0}*lex(e,t=!1){if(e){if(typeof e!="string")throw TypeError("source is not a string");this.buffer=this.buffer?this.buffer+e:e,this.lineEndPos=null}this.atEnd=!t;let n=this.next??"stream";for(;n&&(t||this.hasChars(1));)n=yield*this.parseNext(n)}atLineEnd(){let e=this.pos,t=this.buffer[e];for(;t===" "||t==="	";)t=this.buffer[++e];return!t||t==="#"||t===`
`?!0:t==="\r"?this.buffer[e+1]===`
`:!1}charAt(e){return this.buffer[this.pos+e]}continueScalar(e){let t=this.buffer[e];if(this.indentNext>0){let n=0;for(;t===" ";)t=this.buffer[++n+e];if(t==="\r"){const s=this.buffer[n+e+1];if(s===`
`||!s&&!this.atEnd)return e+n+1}return t===`
`||n>=this.indentNext||!t&&!this.atEnd?e+n:-1}if(t==="-"||t==="."){const n=this.buffer.substr(e,3);if((n==="---"||n==="...")&&Cn(this.buffer[e+3]))return-1}return e}getLine(){let e=this.lineEndPos;return(typeof e!="number"||e!==-1&&e<this.pos)&&(e=this.buffer.indexOf(`
`,this.pos),this.lineEndPos=e),e===-1?this.atEnd?this.buffer.substring(this.pos):null:(this.buffer[e-1]==="\r"&&(e-=1),this.buffer.substring(this.pos,e))}hasChars(e){return this.pos+e<=this.buffer.length}setNext(e){return this.buffer=this.buffer.substring(this.pos),this.pos=0,this.lineEndPos=null,this.next=e,null}peek(e){return this.buffer.substr(this.pos,e)}*parseNext(e){switch(e){case"stream":return yield*this.parseStream();case"line-start":return yield*this.parseLineStart();case"block-start":return yield*this.parseBlockStart();case"doc":return yield*this.parseDocument();case"flow":return yield*this.parseFlowCollection();case"quoted-scalar":return yield*this.parseQuotedScalar();case"block-scalar":return yield*this.parseBlockScalar();case"plain-scalar":return yield*this.parsePlainScalar()}}*parseStream(){let e=this.getLine();if(e===null)return this.setNext("stream");if(e[0]===oo&&(yield*this.pushCount(1),e=e.substring(1)),e[0]==="%"){let t=e.length,n=e.indexOf("#");for(;n!==-1;){const r=e[n-1];if(r===" "||r==="	"){t=n-1;break}else n=e.indexOf("#",n+1)}for(;;){const r=e[t-1];if(r===" "||r==="	")t-=1;else break}const s=(yield*this.pushCount(t))+(yield*this.pushSpaces(!0));return yield*this.pushCount(e.length-s),this.pushNewline(),"stream"}if(this.atLineEnd()){const t=yield*this.pushSpaces(!0);return yield*this.pushCount(e.length-t),yield*this.pushNewline(),"stream"}return yield lo,yield*this.parseLineStart()}*parseLineStart(){const e=this.charAt(0);if(!e&&!this.atEnd)return this.setNext("line-start");if(e==="-"||e==="."){if(!this.atEnd&&!this.hasChars(4))return this.setNext("line-start");const t=this.peek(3);if((t==="---"||t==="...")&&Cn(this.charAt(3)))return yield*this.pushCount(3),this.indentValue=0,this.indentNext=0,t==="---"?"doc":"stream"}return this.indentValue=yield*this.pushSpaces(!1),this.indentNext>this.indentValue&&!Cn(this.charAt(1))&&(this.indentNext=this.indentValue),yield*this.parseBlockStart()}*parseBlockStart(){const[e,t]=this.peek(2);if(!t&&!this.atEnd)return this.setNext("block-start");if((e==="-"||e==="?"||e===":")&&Cn(t)){const n=(yield*this.pushCount(1))+(yield*this.pushSpaces(!0));return this.indentNext=this.indentValue+1,this.indentValue+=n,"block-start"}return"doc"}*parseDocument(){yield*this.pushSpaces(!0);const e=this.getLine();if(e===null)return this.setNext("doc");let t=yield*this.pushIndicators();switch(e[t]){case"#":yield*this.pushCount(e.length-t);case void 0:return yield*this.pushNewline(),yield*this.parseLineStart();case"{":case"[":return yield*this.pushCount(1),this.flowKey=!1,this.flowLevel=1,"flow";case"}":case"]":return yield*this.pushCount(1),"doc";case"*":return yield*this.pushUntil(To),"doc";case'"':case"'":return yield*this.parseQuotedScalar();case"|":case">":return t+=yield*this.parseBlockScalarHeader(),t+=yield*this.pushSpaces(!0),yield*this.pushCount(e.length-t),yield*this.pushNewline(),yield*this.parseBlockScalar();default:return yield*this.parsePlainScalar()}}*parseFlowCollection(){let e,t,n=-1;do e=yield*this.pushNewline(),e>0?(t=yield*this.pushSpaces(!1),this.indentValue=n=t):t=0,t+=yield*this.pushSpaces(!0);while(e+t>0);const s=this.getLine();if(s===null)return this.setNext("flow");if((n!==-1&&n<this.indentNext&&s[0]!=="#"||n===0&&(s.startsWith("---")||s.startsWith("..."))&&Cn(s[3]))&&!(n===this.indentNext-1&&this.flowLevel===1&&(s[0]==="]"||s[0]==="}")))return this.flowLevel=0,yield co,yield*this.parseLineStart();let r=0;for(;s[r]===",";)r+=yield*this.pushCount(1),r+=yield*this.pushSpaces(!0),this.flowKey=!1;switch(r+=yield*this.pushIndicators(),s[r]){case void 0:return"flow";case"#":return yield*this.pushCount(s.length-r),"flow";case"{":case"[":return yield*this.pushCount(1),this.flowKey=!1,this.flowLevel+=1,"flow";case"}":case"]":return yield*this.pushCount(1),this.flowKey=!0,this.flowLevel-=1,this.flowLevel?"flow":"doc";case"*":return yield*this.pushUntil(To),"flow";case'"':case"'":return this.flowKey=!0,yield*this.parseQuotedScalar();case":":{const a=this.charAt(1);if(this.flowKey||Cn(a)||a===",")return this.flowKey=!1,yield*this.pushCount(1),yield*this.pushSpaces(!0),"flow"}default:return this.flowKey=!1,yield*this.parsePlainScalar()}}*parseQuotedScalar(){const e=this.charAt(0);let t=this.buffer.indexOf(e,this.pos+1);if(e==="'")for(;t!==-1&&this.buffer[t+1]==="'";)t=this.buffer.indexOf("'",t+2);else for(;t!==-1;){let r=0;for(;this.buffer[t-1-r]==="\\";)r+=1;if(r%2===0)break;t=this.buffer.indexOf('"',t+1)}const n=this.buffer.substring(0,t);let s=n.indexOf(`
`,this.pos);if(s!==-1){for(;s!==-1;){const r=this.continueScalar(s+1);if(r===-1)break;s=n.indexOf(`
`,r)}s!==-1&&(t=s-(n[s-1]==="\r"?2:1))}if(t===-1){if(!this.atEnd)return this.setNext("quoted-scalar");t=this.buffer.length}return yield*this.pushToIndex(t+1,!1),this.flowLevel?"flow":"doc"}*parseBlockScalarHeader(){this.blockScalarIndent=-1,this.blockScalarKeep=!1;let e=this.pos;for(;;){const t=this.buffer[++e];if(t==="+")this.blockScalarKeep=!0;else if(t>"0"&&t<="9")this.blockScalarIndent=Number(t)-1;else if(t!=="-")break}return yield*this.pushUntil(t=>Cn(t)||t==="#")}*parseBlockScalar(){let e=this.pos-1,t=0,n;e:for(let r=this.pos;n=this.buffer[r];++r)switch(n){case" ":t+=1;break;case`
`:e=r,t=0;break;case"\r":{const a=this.buffer[r+1];if(!a&&!this.atEnd)return this.setNext("block-scalar");if(a===`
`)break}default:break e}if(!n&&!this.atEnd)return this.setNext("block-scalar");if(t>=this.indentNext){this.blockScalarIndent===-1?this.indentNext=t:this.indentNext=this.blockScalarIndent+(this.indentNext===0?1:this.indentNext);do{const r=this.continueScalar(e+1);if(r===-1)break;e=this.buffer.indexOf(`
`,r)}while(e!==-1);if(e===-1){if(!this.atEnd)return this.setNext("block-scalar");e=this.buffer.length}}let s=e+1;for(n=this.buffer[s];n===" ";)n=this.buffer[++s];if(n==="	"){for(;n==="	"||n===" "||n==="\r"||n===`
`;)n=this.buffer[++s];e=s-1}else if(!this.blockScalarKeep)do{let r=e-1,a=this.buffer[r];a==="\r"&&(a=this.buffer[--r]);const o=r;for(;a===" ";)a=this.buffer[--r];if(a===`
`&&r>=this.pos&&r+1+t>o)e=r;else break}while(!0);return yield wr,yield*this.pushToIndex(e+1,!0),yield*this.parseLineStart()}*parsePlainScalar(){const e=this.flowLevel>0;let t=this.pos-1,n=this.pos-1,s;for(;s=this.buffer[++n];)if(s===":"){const r=this.buffer[n+1];if(Cn(r)||e&&$r.has(r))break;t=n}else if(Cn(s)){let r=this.buffer[n+1];if(s==="\r"&&(r===`
`?(n+=1,s=`
`,r=this.buffer[n+1]):t=n),r==="#"||e&&$r.has(r))break;if(s===`
`){const a=this.continueScalar(n+1);if(a===-1)break;n=Math.max(n,a-2)}}else{if(e&&$r.has(s))break;t=n}return!s&&!this.atEnd?this.setNext("plain-scalar"):(yield wr,yield*this.pushToIndex(t+1,!0),e?"flow":"doc")}*pushCount(e){return e>0?(yield this.buffer.substr(this.pos,e),this.pos+=e,e):0}*pushToIndex(e,t){const n=this.buffer.slice(this.pos,e);return n?(yield n,this.pos+=n.length,n.length):(t&&(yield""),0)}*pushIndicators(){let e=0;e:for(;;){switch(this.charAt(0)){case"!":e+=yield*this.pushTag(),e+=yield*this.pushSpaces(!0);continue e;case"&":e+=yield*this.pushUntil(To),e+=yield*this.pushSpaces(!0);continue e;case"-":case"?":case":":{const t=this.flowLevel>0,n=this.charAt(1);if(Cn(n)||t&&$r.has(n)){t?this.flowKey&&(this.flowKey=!1):this.indentNext=this.indentValue+1,e+=yield*this.pushCount(1),e+=yield*this.pushSpaces(!0);continue e}}}break e}return e}*pushTag(){if(this.charAt(1)==="<"){let e=this.pos+2,t=this.buffer[e];for(;!Cn(t)&&t!==">";)t=this.buffer[++e];return yield*this.pushToIndex(t===">"?e+1:e,!1)}else{let e=this.pos+1,t=this.buffer[e];for(;t;)if(bm.has(t))t=this.buffer[++e];else if(t==="%"&&du.has(this.buffer[e+1])&&du.has(this.buffer[e+2]))t=this.buffer[e+=3];else break;return yield*this.pushToIndex(e,!1)}}*pushNewline(){const e=this.buffer[this.pos];return e===`
`?yield*this.pushCount(1):e==="\r"&&this.charAt(1)===`
`?yield*this.pushCount(2):0}*pushSpaces(e){let t=this.pos-1,n;do n=this.buffer[++t];while(n===" "||e&&n==="	");const s=t-this.pos;return s>0&&(yield this.buffer.substr(this.pos,s),this.pos=t),s}*pushUntil(e){let t=this.pos,n=this.buffer[t];for(;!e(n);)n=this.buffer[++t];return yield*this.pushToIndex(t,!1)}}class Nh{constructor(){this.lineStarts=[],this.addNewLine=e=>this.lineStarts.push(e),this.linePos=e=>{let t=0,n=this.lineStarts.length;for(;t<n;){const r=t+n>>1;this.lineStarts[r]<e?t=r+1:n=r}if(this.lineStarts[t]===e)return{line:t+1,col:1};if(t===0)return{line:0,col:e};const s=this.lineStarts[t-1];return{line:t,col:e-s+1}}}}function wi(i,e){for(let t=0;t<i.length;++t)if(i[t].type===e)return!0;return!1}function pu(i){for(let e=0;e<i.length;++e)switch(i[e].type){case"space":case"comment":case"newline":break;default:return e}return-1}function kh(i){switch(i==null?void 0:i.type){case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":case"flow-collection":return!0;default:return!1}}function Kr(i){switch(i.type){case"document":return i.start;case"block-map":{const e=i.items[i.items.length-1];return e.sep??e.start}case"block-seq":return i.items[i.items.length-1].start;default:return[]}}function ls(i){var t;if(i.length===0)return[];let e=i.length;e:for(;--e>=0;)switch(i[e].type){case"doc-start":case"explicit-key-ind":case"map-value-ind":case"seq-item-ind":case"newline":break e}for(;((t=i[++e])==null?void 0:t.type)==="space";);return i.splice(e,i.length)}function Va(i,e){if(e.length<1e5)Array.prototype.push.apply(i,e);else for(let t=0;t<e.length;++t)i.push(e[t])}function mu(i){if(i.start.type==="flow-seq-start")for(const e of i.items)e.sep&&!e.value&&!wi(e.start,"explicit-key-ind")&&!wi(e.sep,"map-value-ind")&&(e.key&&(e.value=e.key),delete e.key,kh(e.value)?e.value.end?Va(e.value.end,e.sep):e.value.end=e.sep:Va(e.start,e.sep),delete e.sep)}let Ac=class{constructor(e){this.atNewLine=!0,this.atScalar=!1,this.indent=0,this.offset=0,this.onKeyLine=!1,this.stack=[],this.source="",this.type="",this.lexer=new Oh,this.onNewLine=e}*parse(e,t=!1){this.onNewLine&&this.offset===0&&this.onNewLine(0);for(const n of this.lexer.lex(e,t))yield*this.next(n);t||(yield*this.end())}*next(e){if(this.source=e,this.atScalar){this.atScalar=!1,yield*this.step(),this.offset+=e.length;return}const t=Dh(e);if(t)if(t==="scalar")this.atNewLine=!1,this.atScalar=!0,this.type="scalar";else{switch(this.type=t,yield*this.step(),t){case"newline":this.atNewLine=!0,this.indent=0,this.onNewLine&&this.onNewLine(this.offset+e.length);break;case"space":this.atNewLine&&e[0]===" "&&(this.indent+=e.length);break;case"explicit-key-ind":case"map-value-ind":case"seq-item-ind":this.atNewLine&&(this.indent+=e.length);break;case"doc-mode":case"flow-error-end":return;default:this.atNewLine=!1}this.offset+=e.length}else{const n=`Not a YAML token: ${e}`;yield*this.pop({type:"error",offset:this.offset,message:n,source:e}),this.offset+=e.length}}*end(){for(;this.stack.length>0;)yield*this.pop()}get sourceToken(){return{type:this.type,offset:this.offset,indent:this.indent,source:this.source}}*step(){const e=this.peek(1);if(this.type==="doc-end"&&(e==null?void 0:e.type)!=="doc-end"){for(;this.stack.length>0;)yield*this.pop();this.stack.push({type:"doc-end",offset:this.offset,source:this.source});return}if(!e)return yield*this.stream();switch(e.type){case"document":return yield*this.document(e);case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":return yield*this.scalar(e);case"block-scalar":return yield*this.blockScalar(e);case"block-map":return yield*this.blockMap(e);case"block-seq":return yield*this.blockSequence(e);case"flow-collection":return yield*this.flowCollection(e);case"doc-end":return yield*this.documentEnd(e)}yield*this.pop()}peek(e){return this.stack[this.stack.length-e]}*pop(e){const t=e??this.stack.pop();if(!t)yield{type:"error",offset:this.offset,source:"",message:"Tried to pop an empty stack"};else if(this.stack.length===0)yield t;else{const n=this.peek(1);switch(t.type==="block-scalar"?t.indent="indent"in n?n.indent:0:t.type==="flow-collection"&&n.type==="document"&&(t.indent=0),t.type==="flow-collection"&&mu(t),n.type){case"document":n.value=t;break;case"block-scalar":n.props.push(t);break;case"block-map":{const s=n.items[n.items.length-1];if(s.value){n.items.push({start:[],key:t,sep:[]}),this.onKeyLine=!0;return}else if(s.sep)s.value=t;else{Object.assign(s,{key:t,sep:[]}),this.onKeyLine=!s.explicitKey;return}break}case"block-seq":{const s=n.items[n.items.length-1];s.value?n.items.push({start:[],value:t}):s.value=t;break}case"flow-collection":{const s=n.items[n.items.length-1];!s||s.value?n.items.push({start:[],key:t,sep:[]}):s.sep?s.value=t:Object.assign(s,{key:t,sep:[]});return}default:yield*this.pop(),yield*this.pop(t)}if((n.type==="document"||n.type==="block-map"||n.type==="block-seq")&&(t.type==="block-map"||t.type==="block-seq")){const s=t.items[t.items.length-1];s&&!s.sep&&!s.value&&s.start.length>0&&pu(s.start)===-1&&(t.indent===0||s.start.every(r=>r.type!=="comment"||r.indent<t.indent))&&(n.type==="document"?n.end=s.start:n.items.push({start:s.start}),t.items.splice(-1,1))}}}*stream(){switch(this.type){case"directive-line":yield{type:"directive",offset:this.offset,source:this.source};return;case"byte-order-mark":case"space":case"comment":case"newline":yield this.sourceToken;return;case"doc-mode":case"doc-start":{const e={type:"document",offset:this.offset,start:[]};this.type==="doc-start"&&e.start.push(this.sourceToken),this.stack.push(e);return}}yield{type:"error",offset:this.offset,message:`Unexpected ${this.type} token in YAML stream`,source:this.source}}*document(e){if(e.value)return yield*this.lineEnd(e);switch(this.type){case"doc-start":{pu(e.start)!==-1?(yield*this.pop(),yield*this.step()):e.start.push(this.sourceToken);return}case"anchor":case"tag":case"space":case"comment":case"newline":e.start.push(this.sourceToken);return}const t=this.startBlockValue(e);t?this.stack.push(t):yield{type:"error",offset:this.offset,message:`Unexpected ${this.type} token in YAML document`,source:this.source}}*scalar(e){if(this.type==="map-value-ind"){const t=Kr(this.peek(2)),n=ls(t);let s;e.end?(s=e.end,s.push(this.sourceToken),delete e.end):s=[this.sourceToken];const r={type:"block-map",offset:e.offset,indent:e.indent,items:[{start:n,key:e,sep:s}]};this.onKeyLine=!0,this.stack[this.stack.length-1]=r}else yield*this.lineEnd(e)}*blockScalar(e){switch(this.type){case"space":case"comment":case"newline":e.props.push(this.sourceToken);return;case"scalar":if(e.source=this.source,this.atNewLine=!0,this.indent=0,this.onNewLine){let t=this.source.indexOf(`
`)+1;for(;t!==0;)this.onNewLine(this.offset+t),t=this.source.indexOf(`
`,t)+1}yield*this.pop();break;default:yield*this.pop(),yield*this.step()}}*blockMap(e){var n;const t=e.items[e.items.length-1];switch(this.type){case"newline":if(this.onKeyLine=!1,t.value){const s="end"in t.value?t.value.end:void 0,r=Array.isArray(s)?s[s.length-1]:void 0;(r==null?void 0:r.type)==="comment"?s==null||s.push(this.sourceToken):e.items.push({start:[this.sourceToken]})}else t.sep?t.sep.push(this.sourceToken):t.start.push(this.sourceToken);return;case"space":case"comment":if(t.value)e.items.push({start:[this.sourceToken]});else if(t.sep)t.sep.push(this.sourceToken);else{if(this.atIndentedComment(t.start,e.indent)){const s=e.items[e.items.length-2],r=(n=s==null?void 0:s.value)==null?void 0:n.end;if(Array.isArray(r)){Va(r,t.start),r.push(this.sourceToken),e.items.pop();return}}t.start.push(this.sourceToken)}return}if(this.indent>=e.indent){const s=!this.onKeyLine&&this.indent===e.indent,r=s&&(t.sep||t.explicitKey)&&this.type!=="seq-item-ind";let a=[];if(r&&t.sep&&!t.value){const o=[];for(let c=0;c<t.sep.length;++c){const l=t.sep[c];switch(l.type){case"newline":o.push(c);break;case"space":break;case"comment":l.indent>e.indent&&(o.length=0);break;default:o.length=0}}o.length>=2&&(a=t.sep.splice(o[1]))}switch(this.type){case"anchor":case"tag":r||t.value?(a.push(this.sourceToken),e.items.push({start:a}),this.onKeyLine=!0):t.sep?t.sep.push(this.sourceToken):t.start.push(this.sourceToken);return;case"explicit-key-ind":!t.sep&&!t.explicitKey?(t.start.push(this.sourceToken),t.explicitKey=!0):r||t.value?(a.push(this.sourceToken),e.items.push({start:a,explicitKey:!0})):this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:[this.sourceToken],explicitKey:!0}]}),this.onKeyLine=!0;return;case"map-value-ind":if(t.explicitKey)if(t.sep)if(t.value)e.items.push({start:[],key:null,sep:[this.sourceToken]});else if(wi(t.sep,"map-value-ind"))this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:a,key:null,sep:[this.sourceToken]}]});else if(kh(t.key)&&!wi(t.sep,"newline")){const o=ls(t.start),c=t.key,l=t.sep;l.push(this.sourceToken),delete t.key,delete t.sep,this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:o,key:c,sep:l}]})}else a.length>0?t.sep=t.sep.concat(a,this.sourceToken):t.sep.push(this.sourceToken);else if(wi(t.start,"newline"))Object.assign(t,{key:null,sep:[this.sourceToken]});else{const o=ls(t.start);this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:o,key:null,sep:[this.sourceToken]}]})}else t.sep?t.value||r?e.items.push({start:a,key:null,sep:[this.sourceToken]}):wi(t.sep,"map-value-ind")?this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:[],key:null,sep:[this.sourceToken]}]}):t.sep.push(this.sourceToken):Object.assign(t,{key:null,sep:[this.sourceToken]});this.onKeyLine=!0;return;case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":{const o=this.flowScalar(this.type);r||t.value?(e.items.push({start:a,key:o,sep:[]}),this.onKeyLine=!0):t.sep?this.stack.push(o):(Object.assign(t,{key:o,sep:[]}),this.onKeyLine=!0);return}default:{const o=this.startBlockValue(e);if(o){if(o.type==="block-seq"){if(!t.explicitKey&&t.sep&&!wi(t.sep,"newline")){yield*this.pop({type:"error",offset:this.offset,message:"Unexpected block-seq-ind on same line with key",source:this.source});return}}else s&&e.items.push({start:a});this.stack.push(o);return}}}}yield*this.pop(),yield*this.step()}*blockSequence(e){var n;const t=e.items[e.items.length-1];switch(this.type){case"newline":if(t.value){const s="end"in t.value?t.value.end:void 0,r=Array.isArray(s)?s[s.length-1]:void 0;(r==null?void 0:r.type)==="comment"?s==null||s.push(this.sourceToken):e.items.push({start:[this.sourceToken]})}else t.start.push(this.sourceToken);return;case"space":case"comment":if(t.value)e.items.push({start:[this.sourceToken]});else{if(this.atIndentedComment(t.start,e.indent)){const s=e.items[e.items.length-2],r=(n=s==null?void 0:s.value)==null?void 0:n.end;if(Array.isArray(r)){Va(r,t.start),r.push(this.sourceToken),e.items.pop();return}}t.start.push(this.sourceToken)}return;case"anchor":case"tag":if(t.value||this.indent<=e.indent)break;t.start.push(this.sourceToken);return;case"seq-item-ind":if(this.indent!==e.indent)break;t.value||wi(t.start,"seq-item-ind")?e.items.push({start:[this.sourceToken]}):t.start.push(this.sourceToken);return}if(this.indent>e.indent){const s=this.startBlockValue(e);if(s){this.stack.push(s);return}}yield*this.pop(),yield*this.step()}*flowCollection(e){const t=e.items[e.items.length-1];if(this.type==="flow-error-end"){let n;do yield*this.pop(),n=this.peek(1);while((n==null?void 0:n.type)==="flow-collection")}else if(e.end.length===0){switch(this.type){case"comma":case"explicit-key-ind":!t||t.sep?e.items.push({start:[this.sourceToken]}):t.start.push(this.sourceToken);return;case"map-value-ind":!t||t.value?e.items.push({start:[],key:null,sep:[this.sourceToken]}):t.sep?t.sep.push(this.sourceToken):Object.assign(t,{key:null,sep:[this.sourceToken]});return;case"space":case"comment":case"newline":case"anchor":case"tag":!t||t.value?e.items.push({start:[this.sourceToken]}):t.sep?t.sep.push(this.sourceToken):t.start.push(this.sourceToken);return;case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":{const s=this.flowScalar(this.type);!t||t.value?e.items.push({start:[],key:s,sep:[]}):t.sep?this.stack.push(s):Object.assign(t,{key:s,sep:[]});return}case"flow-map-end":case"flow-seq-end":e.end.push(this.sourceToken);return}const n=this.startBlockValue(e);n?this.stack.push(n):(yield*this.pop(),yield*this.step())}else{const n=this.peek(2);if(n.type==="block-map"&&(this.type==="map-value-ind"&&n.indent===e.indent||this.type==="newline"&&!n.items[n.items.length-1].sep))yield*this.pop(),yield*this.step();else if(this.type==="map-value-ind"&&n.type!=="flow-collection"){const s=Kr(n),r=ls(s);mu(e);const a=e.end.splice(1,e.end.length);a.push(this.sourceToken);const o={type:"block-map",offset:e.offset,indent:e.indent,items:[{start:r,key:e,sep:a}]};this.onKeyLine=!0,this.stack[this.stack.length-1]=o}else yield*this.lineEnd(e)}}flowScalar(e){if(this.onNewLine){let t=this.source.indexOf(`
`)+1;for(;t!==0;)this.onNewLine(this.offset+t),t=this.source.indexOf(`
`,t)+1}return{type:e,offset:this.offset,indent:this.indent,source:this.source}}startBlockValue(e){switch(this.type){case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":return this.flowScalar(this.type);case"block-scalar-header":return{type:"block-scalar",offset:this.offset,indent:this.indent,props:[this.sourceToken],source:""};case"flow-map-start":case"flow-seq-start":return{type:"flow-collection",offset:this.offset,indent:this.indent,start:this.sourceToken,items:[],end:[]};case"seq-item-ind":return{type:"block-seq",offset:this.offset,indent:this.indent,items:[{start:[this.sourceToken]}]};case"explicit-key-ind":{this.onKeyLine=!0;const t=Kr(e),n=ls(t);return n.push(this.sourceToken),{type:"block-map",offset:this.offset,indent:this.indent,items:[{start:n,explicitKey:!0}]}}case"map-value-ind":{this.onKeyLine=!0;const t=Kr(e),n=ls(t);return{type:"block-map",offset:this.offset,indent:this.indent,items:[{start:n,key:null,sep:[this.sourceToken]}]}}}return null}atIndentedComment(e,t){return this.type!=="comment"||this.indent<=t?!1:e.every(n=>n.type==="newline"||n.type==="space")}*documentEnd(e){this.type!=="doc-mode"&&(e.end?e.end.push(this.sourceToken):e.end=[this.sourceToken],this.type==="newline"&&(yield*this.pop()))}*lineEnd(e){switch(this.type){case"comma":case"doc-start":case"doc-end":case"flow-seq-end":case"flow-map-end":case"map-value-ind":yield*this.pop(),yield*this.step();break;case"newline":this.onKeyLine=!1;case"space":case"comment":default:e.end?e.end.push(this.sourceToken):e.end=[this.sourceToken],this.type==="newline"&&(yield*this.pop())}}};function Uh(i){const e=i.prettyErrors!==!1;return{lineCounter:i.lineCounter||e&&new Nh||null,prettyErrors:e}}function Mm(i,e={}){const{lineCounter:t,prettyErrors:n}=Uh(e),s=new Ac(t==null?void 0:t.addNewLine),r=new Tc(e),a=Array.from(r.compose(s.parse(i)));if(n&&t)for(const o of a)o.errors.forEach(Ha(i,t)),o.warnings.forEach(Ha(i,t));return a.length>0?a:Object.assign([],{empty:!0},r.streamInfo())}function Fh(i,e={}){const{lineCounter:t,prettyErrors:n}=Uh(e),s=new Ac(t==null?void 0:t.addNewLine),r=new Tc(e);let a=null;for(const o of r.compose(s.parse(i),!0,i.length))if(!a)a=o;else if(a.options.logLevel!=="silent"){a.errors.push(new ji(o.range.slice(0,2),"MULTIPLE_DOCS","Source contains multiple documents; please use YAML.parseAllDocuments()"));break}return n&&t&&(a.errors.forEach(Ha(i,t)),a.warnings.forEach(Ha(i,t))),a}function Sm(i,e,t){let n;typeof e=="function"?n=e:t===void 0&&e&&typeof e=="object"&&(t=e);const s=Fh(i,t);if(!s)return null;if(s.warnings.forEach(r=>ih(s.options.logLevel,r)),s.errors.length>0){if(s.options.logLevel!=="silent")throw s.errors[0];s.errors=[]}return s.toJS(Object.assign({reviver:n},t))}function Em(i,e,t){let n=null;if(typeof e=="function"||Array.isArray(e)?n=e:t===void 0&&e&&(t=e),typeof t=="string"&&(t=t.length),typeof t=="number"){const s=Math.round(t);t=s<1?void 0:s>8?{indent:8}:{indent:s}}if(i===void 0){const{keepUndefined:s}=t??e??{};if(!s)return}return es(i)&&!n?i.toString(t):new Zs(i,n,t).toString(t)}const Ca=Object.freeze(Object.defineProperty({__proto__:null,Alias:Ja,CST:xm,Composer:Tc,Document:Zs,Lexer:Oh,LineCounter:Nh,Pair:en,Parser:Ac,Scalar:Ze,Schema:ao,YAMLError:Sc,YAMLMap:_n,YAMLParseError:ji,YAMLSeq:Ti,YAMLWarning:Mh,isAlias:Qi,isCollection:At,isDocument:es,isMap:$s,isNode:Rt,isPair:Et,isScalar:xt,isSeq:Ks,parse:Sm,parseAllDocuments:Mm,parseDocument:Fh,stringify:Em,visit:ts,visitAsync:Ya},Symbol.toStringTag,{value:"Module"})),Tm=Object.assign({"/world/world.config.yaml":dp}),Am=Object.assign({"/world/places/main/config.yaml":pp}),Rm=Object.assign({"/world/places/main/cells/objects.scene":mp,"/world/places/main/cells/x0z0.scene":gp}),Cm=Object.assign({"/world/templates/camera.js":()=>Ne(()=>import("./camera-K4zneVSs.js"),[]),"/world/templates/player.js":()=>Ne(()=>import("./player-BYsER5Iw.js"),[]),"/world/templates/sprite.js":()=>Ne(()=>import("./sprite-DoGeqWOJ.js"),[])});function Pm(i,e){const t=Ca.parse(i)??{};return Object.entries(t).map(([n,s])=>{var r;return{...s,id:(s==null?void 0:s.id)??((r=s==null?void 0:s.overrides)==null?void 0:r.id)??n,cell:e}})}async function Rc(i){const[e,t]=String(i).split("#"),n=Cm["/world/"+e];if(!n)throw new Error(`no template ${e}`);const s=await n();return s[t]??s.default??{}}const gu=i=>i&&typeof i=="object"&&!Array.isArray(i);function yl(i,e){const t={...i};for(const[n,s]of Object.entries(e??{}))t[n]=gu(s)&&gu(i==null?void 0:i[n])?yl(i[n],s):s;return t}async function Lm(i){if(!i.template)return i;const{template:e,overrides:t,...n}=i;return yl(yl(await Rc(e),t),n)}const Im=Object.assign({"/web/overrides.yaml":_p});function Dm(i,e){if(!e)return{...i,sounds:{},render:{}};const t=new Set(e.remove??[]),n=i.placements.filter(r=>!t.has(r.id));for(const[r,a]of Object.entries(e.add??{}))n.push({...a,id:r,cell:"web"});const s=e.terrain?{...i.place,terrain:{...i.place.terrain,...e.terrain}}:i.place;return{...i,place:s,placements:n,sounds:e.sounds??{},render:e.render??{}}}async function Om(i,{web:e=!0}={}){const t=Ca.parse(Object.values(Tm)[0]??"")??{},n=i??t.defaultPlace??"main",s=Am[`/world/places/${n}/config.yaml`];if(s==null)throw new Error(`no place ${n}`);const r=[];for(const[l,f]of Object.entries(Rm))l.startsWith(`/world/places/${n}/cells/`)&&r.push(...Pm(f,l.split("/").pop().replace(/\.scene$/,"")));const a=await Promise.all(r.map(Lm)),o={config:t,name:n,place:Ca.parse(s)??{},placements:a},c=Object.values(Im)[0];return Dm(o,e&&c?Ca.parse(c):null)}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Cc="172",Nm=0,_u=1,km=2,Bh=1,Um=2,ei=3,Ai=0,un=1,ti=2,Ei=0,Mn=1,Mr=2,Wa=3,qa=4,Fm=5,Gi=100,Bm=101,zm=102,Hm=103,Gm=104,Vm=200,Wm=201,qm=202,jm=203,xl=204,bl=205,Xm=206,$m=207,Km=208,Ym=209,Jm=210,Zm=211,Qm=212,eg=213,tg=214,wl=0,Ml=1,Sl=2,zs=3,El=4,Tl=5,Al=6,Rl=7,zh=0,ng=1,ig=2,oi=0,sg=1,rg=2,ag=3,og=4,lg=5,cg=6,ug=7,Hh=300,Hs=301,Gs=302,Cl=303,Pl=304,uo=306,Sr=1e3,ii=1001,Ll=1002,Wt=1003,fg=1004,Yr=1005,cn=1006,Ao=1007,Gn=1008,qn=1009,Gh=1010,Vh=1011,Er=1012,Pc=1013,Ji=1014,si=1015,Ir=1016,Lc=1017,Ic=1018,Vs=1020,Wh=35902,qh=1021,jh=1022,bn=1023,Xh=1024,$h=1025,Ns=1026,Ws=1027,Kh=1028,Dc=1029,Yh=1030,Oc=1031,Nc=1033,Pa=33776,La=33777,Ia=33778,Da=33779,Il=35840,Dl=35841,Ol=35842,Nl=35843,kl=36196,Ul=37492,Fl=37496,Bl=37808,zl=37809,Hl=37810,Gl=37811,Vl=37812,Wl=37813,ql=37814,jl=37815,Xl=37816,$l=37817,Kl=37818,Yl=37819,Jl=37820,Zl=37821,Oa=36492,Ql=36494,ec=36495,Jh=36283,tc=36284,nc=36285,ic=36286,hg=3200,dg=3201,pg=0,mg=1,Mi="",jt="srgb",qs="srgb-linear",ja="linear",vt="srgb",cs=7680,vu=519,gg=512,_g=513,vg=514,Zh=515,yg=516,xg=517,bg=518,wg=519,yu=35044,Mg=35048,xu="300 es",ri=2e3,Xa=2001;class Qs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const Jt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ro=Math.PI/180,sc=180/Math.PI;function Dr(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Jt[i&255]+Jt[i>>8&255]+Jt[i>>16&255]+Jt[i>>24&255]+"-"+Jt[e&255]+Jt[e>>8&255]+"-"+Jt[e>>16&15|64]+Jt[e>>24&255]+"-"+Jt[t&63|128]+Jt[t>>8&255]+"-"+Jt[t>>16&255]+Jt[t>>24&255]+Jt[n&255]+Jt[n>>8&255]+Jt[n>>16&255]+Jt[n>>24&255]).toLowerCase()}function ut(i,e,t){return Math.max(e,Math.min(t,i))}function Sg(i,e){return(i%e+e)%e}function Co(i,e,t){return(1-t)*i+t*e}function cr(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function on(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class yt{constructor(e=0,t=0){yt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ut(this.x,e.x,t.x),this.y=ut(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ut(this.x,e,t),this.y=ut(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ut(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ut(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class et{constructor(e,t,n,s,r,a,o,c,l){et.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l)}set(e,t,n,s,r,a,o,c,l){const f=this.elements;return f[0]=e,f[1]=s,f[2]=o,f[3]=t,f[4]=r,f[5]=c,f[6]=n,f[7]=a,f[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],f=n[4],h=n[7],d=n[2],p=n[5],x=n[8],y=s[0],_=s[3],g=s[6],R=s[1],T=s[4],w=s[7],I=s[2],L=s[5],C=s[8];return r[0]=a*y+o*R+c*I,r[3]=a*_+o*T+c*L,r[6]=a*g+o*w+c*C,r[1]=l*y+f*R+h*I,r[4]=l*_+f*T+h*L,r[7]=l*g+f*w+h*C,r[2]=d*y+p*R+x*I,r[5]=d*_+p*T+x*L,r[8]=d*g+p*w+x*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],f=e[8];return t*a*f-t*o*l-n*r*f+n*o*c+s*r*l-s*a*c}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],f=e[8],h=f*a-o*l,d=o*c-f*r,p=l*r-a*c,x=t*h+n*d+s*p;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/x;return e[0]=h*y,e[1]=(s*l-f*n)*y,e[2]=(o*n-s*a)*y,e[3]=d*y,e[4]=(f*t-s*c)*y,e[5]=(s*r-o*t)*y,e[6]=p*y,e[7]=(n*c-l*t)*y,e[8]=(a*t-n*r)*y,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-s*l,s*c,-s*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Po.makeScale(e,t)),this}rotate(e){return this.premultiply(Po.makeRotation(-e)),this}translate(e,t){return this.premultiply(Po.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Po=new et;function Qh(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Tr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Eg(){const i=Tr("canvas");return i.style.display="block",i}const bu={};function Es(i){i in bu||(bu[i]=!0,console.warn(i))}function Tg(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function Ag(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Rg(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const wu=new et().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Mu=new et().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Cg(){const i={enabled:!0,workingColorSpace:qs,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===vt&&(s.r=li(s.r),s.g=li(s.g),s.b=li(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===vt&&(s.r=ks(s.r),s.g=ks(s.g),s.b=ks(s.b))),s},fromWorkingColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},toWorkingColorSpace:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Mi?ja:this.spaces[s].transfer},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[qs]:{primaries:e,whitePoint:n,transfer:ja,toXYZ:wu,fromXYZ:Mu,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:jt},outputColorSpaceConfig:{drawingBufferColorSpace:jt}},[jt]:{primaries:e,whitePoint:n,transfer:vt,toXYZ:wu,fromXYZ:Mu,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:jt}}}),i}const ht=Cg();function li(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ks(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let us;class Pg{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{us===void 0&&(us=Tr("canvas")),us.width=e.width,us.height=e.height;const n=us.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=us}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Tr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=li(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(li(t[n]/255)*255):t[n]=li(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Lg=0;class ed{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Lg++}),this.uuid=Dr(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Lo(s[a].image)):r.push(Lo(s[a]))}else r=Lo(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function Lo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Pg.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ig=0;class Xt extends Qs{constructor(e=Xt.DEFAULT_IMAGE,t=Xt.DEFAULT_MAPPING,n=ii,s=ii,r=cn,a=Gn,o=bn,c=qn,l=Xt.DEFAULT_ANISOTROPY,f=Mi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ig++}),this.uuid=Dr(),this.name="",this.source=new ed(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new yt(0,0),this.repeat=new yt(1,1),this.center=new yt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new et,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Hh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Sr:e.x=e.x-Math.floor(e.x);break;case ii:e.x=e.x<0?0:1;break;case Ll:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Sr:e.y=e.y-Math.floor(e.y);break;case ii:e.y=e.y<0?0:1;break;case Ll:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Xt.DEFAULT_IMAGE=null;Xt.DEFAULT_MAPPING=Hh;Xt.DEFAULT_ANISOTROPY=1;class Lt{constructor(e=0,t=0,n=0,s=1){Lt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const c=e.elements,l=c[0],f=c[4],h=c[8],d=c[1],p=c[5],x=c[9],y=c[2],_=c[6],g=c[10];if(Math.abs(f-d)<.01&&Math.abs(h-y)<.01&&Math.abs(x-_)<.01){if(Math.abs(f+d)<.1&&Math.abs(h+y)<.1&&Math.abs(x+_)<.1&&Math.abs(l+p+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const T=(l+1)/2,w=(p+1)/2,I=(g+1)/2,L=(f+d)/4,C=(h+y)/4,D=(x+_)/4;return T>w&&T>I?T<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(T),s=L/n,r=C/n):w>I?w<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(w),n=L/s,r=D/s):I<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(I),n=C/r,s=D/r),this.set(n,s,r,t),this}let R=Math.sqrt((_-x)*(_-x)+(h-y)*(h-y)+(d-f)*(d-f));return Math.abs(R)<.001&&(R=1),this.x=(_-x)/R,this.y=(h-y)/R,this.z=(d-f)/R,this.w=Math.acos((l+p+g-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ut(this.x,e.x,t.x),this.y=ut(this.y,e.y,t.y),this.z=ut(this.z,e.z,t.z),this.w=ut(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ut(this.x,e,t),this.y=ut(this.y,e,t),this.z=ut(this.z,e,t),this.w=ut(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ut(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Dg extends Qs{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Lt(0,0,e,t),this.scissorTest=!1,this.viewport=new Lt(0,0,e,t);const s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:cn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Xt(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const t=Object.assign({},e.texture.image);return this.texture.source=new ed(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ri extends Dg{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class td extends Xt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Wt,this.minFilter=Wt,this.wrapR=ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Og extends Xt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Wt,this.minFilter=Wt,this.wrapR=ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Or{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let c=n[s+0],l=n[s+1],f=n[s+2],h=n[s+3];const d=r[a+0],p=r[a+1],x=r[a+2],y=r[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=f,e[t+3]=h;return}if(o===1){e[t+0]=d,e[t+1]=p,e[t+2]=x,e[t+3]=y;return}if(h!==y||c!==d||l!==p||f!==x){let _=1-o;const g=c*d+l*p+f*x+h*y,R=g>=0?1:-1,T=1-g*g;if(T>Number.EPSILON){const I=Math.sqrt(T),L=Math.atan2(I,g*R);_=Math.sin(_*L)/I,o=Math.sin(o*L)/I}const w=o*R;if(c=c*_+d*w,l=l*_+p*w,f=f*_+x*w,h=h*_+y*w,_===1-o){const I=1/Math.sqrt(c*c+l*l+f*f+h*h);c*=I,l*=I,f*=I,h*=I}}e[t]=c,e[t+1]=l,e[t+2]=f,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,s,r,a){const o=n[s],c=n[s+1],l=n[s+2],f=n[s+3],h=r[a],d=r[a+1],p=r[a+2],x=r[a+3];return e[t]=o*x+f*h+c*p-l*d,e[t+1]=c*x+f*d+l*h-o*p,e[t+2]=l*x+f*p+o*d-c*h,e[t+3]=f*x-o*h-c*d-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),f=o(s/2),h=o(r/2),d=c(n/2),p=c(s/2),x=c(r/2);switch(a){case"XYZ":this._x=d*f*h+l*p*x,this._y=l*p*h-d*f*x,this._z=l*f*x+d*p*h,this._w=l*f*h-d*p*x;break;case"YXZ":this._x=d*f*h+l*p*x,this._y=l*p*h-d*f*x,this._z=l*f*x-d*p*h,this._w=l*f*h+d*p*x;break;case"ZXY":this._x=d*f*h-l*p*x,this._y=l*p*h+d*f*x,this._z=l*f*x+d*p*h,this._w=l*f*h-d*p*x;break;case"ZYX":this._x=d*f*h-l*p*x,this._y=l*p*h+d*f*x,this._z=l*f*x-d*p*h,this._w=l*f*h+d*p*x;break;case"YZX":this._x=d*f*h+l*p*x,this._y=l*p*h+d*f*x,this._z=l*f*x-d*p*h,this._w=l*f*h-d*p*x;break;case"XZY":this._x=d*f*h-l*p*x,this._y=l*p*h-d*f*x,this._z=l*f*x+d*p*h,this._w=l*f*h+d*p*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],f=t[6],h=t[10],d=n+o+h;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(f-c)*p,this._y=(r-l)*p,this._z=(a-s)*p}else if(n>o&&n>h){const p=2*Math.sqrt(1+n-o-h);this._w=(f-c)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+l)/p}else if(o>h){const p=2*Math.sqrt(1+o-n-h);this._w=(r-l)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(c+f)/p}else{const p=2*Math.sqrt(1+h-n-o);this._w=(a-s)/p,this._x=(r+l)/p,this._y=(c+f)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ut(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,f=t._w;return this._x=n*f+a*o+s*l-r*c,this._y=s*f+a*c+r*o-n*l,this._z=r*f+a*l+n*c-s*o,this._w=a*f-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const c=1-o*o;if(c<=Number.EPSILON){const p=1-t;return this._w=p*a+t*this._w,this._x=p*n+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}const l=Math.sqrt(c),f=Math.atan2(l,o),h=Math.sin((1-t)*f)/l,d=Math.sin(t*f)/l;return this._w=a*h+this._w*d,this._x=n*h+this._x*d,this._y=s*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class X{constructor(e=0,t=0,n=0){X.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Su.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Su.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*s-o*n),f=2*(o*t-r*s),h=2*(r*n-a*t);return this.x=t+c*l+a*h-o*f,this.y=n+c*f+o*l-r*h,this.z=s+c*h+r*f-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ut(this.x,e.x,t.x),this.y=ut(this.y,e.y,t.y),this.z=ut(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ut(this.x,e,t),this.y=ut(this.y,e,t),this.z=ut(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ut(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Io.copy(this).projectOnVector(e),this.sub(Io)}reflect(e){return this.sub(Io.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ut(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Io=new X,Su=new Or;class Nr{constructor(e=new X(1/0,1/0,1/0),t=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Pn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Pn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Pn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Pn):Pn.fromBufferAttribute(r,a),Pn.applyMatrix4(e.matrixWorld),this.expandByPoint(Pn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Jr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Jr.copy(n.boundingBox)),Jr.applyMatrix4(e.matrixWorld),this.union(Jr)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Pn),Pn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ur),Zr.subVectors(this.max,ur),fs.subVectors(e.a,ur),hs.subVectors(e.b,ur),ds.subVectors(e.c,ur),mi.subVectors(hs,fs),gi.subVectors(ds,hs),Oi.subVectors(fs,ds);let t=[0,-mi.z,mi.y,0,-gi.z,gi.y,0,-Oi.z,Oi.y,mi.z,0,-mi.x,gi.z,0,-gi.x,Oi.z,0,-Oi.x,-mi.y,mi.x,0,-gi.y,gi.x,0,-Oi.y,Oi.x,0];return!Do(t,fs,hs,ds,Zr)||(t=[1,0,0,0,1,0,0,0,1],!Do(t,fs,hs,ds,Zr))?!1:(Qr.crossVectors(mi,gi),t=[Qr.x,Qr.y,Qr.z],Do(t,fs,hs,ds,Zr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Pn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Pn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Kn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Kn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Kn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Kn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Kn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Kn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Kn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Kn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Kn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Kn=[new X,new X,new X,new X,new X,new X,new X,new X],Pn=new X,Jr=new Nr,fs=new X,hs=new X,ds=new X,mi=new X,gi=new X,Oi=new X,ur=new X,Zr=new X,Qr=new X,Ni=new X;function Do(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Ni.fromArray(i,r);const o=s.x*Math.abs(Ni.x)+s.y*Math.abs(Ni.y)+s.z*Math.abs(Ni.z),c=e.dot(Ni),l=t.dot(Ni),f=n.dot(Ni);if(Math.max(-Math.max(c,l,f),Math.min(c,l,f))>o)return!1}return!0}const Ng=new Nr,fr=new X,Oo=new X;class kc{constructor(e=new X,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Ng.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;fr.subVectors(e,this.center);const t=fr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(fr,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Oo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(fr.copy(e.center).add(Oo)),this.expandByPoint(fr.copy(e.center).sub(Oo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Yn=new X,No=new X,ea=new X,_i=new X,ko=new X,ta=new X,Uo=new X;class kg{constructor(e=new X,t=new X(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Yn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Yn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Yn.copy(this.origin).addScaledVector(this.direction,t),Yn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){No.copy(e).add(t).multiplyScalar(.5),ea.copy(t).sub(e).normalize(),_i.copy(this.origin).sub(No);const r=e.distanceTo(t)*.5,a=-this.direction.dot(ea),o=_i.dot(this.direction),c=-_i.dot(ea),l=_i.lengthSq(),f=Math.abs(1-a*a);let h,d,p,x;if(f>0)if(h=a*c-o,d=a*o-c,x=r*f,h>=0)if(d>=-x)if(d<=x){const y=1/f;h*=y,d*=y,p=h*(h+a*d+2*o)+d*(a*h+d+2*c)+l}else d=r,h=Math.max(0,-(a*d+o)),p=-h*h+d*(d+2*c)+l;else d=-r,h=Math.max(0,-(a*d+o)),p=-h*h+d*(d+2*c)+l;else d<=-x?(h=Math.max(0,-(-a*r+o)),d=h>0?-r:Math.min(Math.max(-r,-c),r),p=-h*h+d*(d+2*c)+l):d<=x?(h=0,d=Math.min(Math.max(-r,-c),r),p=d*(d+2*c)+l):(h=Math.max(0,-(a*r+o)),d=h>0?r:Math.min(Math.max(-r,-c),r),p=-h*h+d*(d+2*c)+l);else d=a>0?-r:r,h=Math.max(0,-(a*d+o)),p=-h*h+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(No).addScaledVector(ea,d),p}intersectSphere(e,t){Yn.subVectors(e.center,this.origin);const n=Yn.dot(this.direction),s=Yn.dot(Yn)-n*n,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,c;const l=1/this.direction.x,f=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,s=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,s=(e.min.x-d.x)*l),f>=0?(r=(e.min.y-d.y)*f,a=(e.max.y-d.y)*f):(r=(e.max.y-d.y)*f,a=(e.min.y-d.y)*f),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),h>=0?(o=(e.min.z-d.z)*h,c=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,c=(e.min.z-d.z)*h),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Yn)!==null}intersectTriangle(e,t,n,s,r){ko.subVectors(t,e),ta.subVectors(n,e),Uo.crossVectors(ko,ta);let a=this.direction.dot(Uo),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;_i.subVectors(this.origin,e);const c=o*this.direction.dot(ta.crossVectors(_i,ta));if(c<0)return null;const l=o*this.direction.dot(ko.cross(_i));if(l<0||c+l>a)return null;const f=-o*_i.dot(Uo);return f<0?null:this.at(f/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Nt{constructor(e,t,n,s,r,a,o,c,l,f,h,d,p,x,y,_){Nt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l,f,h,d,p,x,y,_)}set(e,t,n,s,r,a,o,c,l,f,h,d,p,x,y,_){const g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=s,g[1]=r,g[5]=a,g[9]=o,g[13]=c,g[2]=l,g[6]=f,g[10]=h,g[14]=d,g[3]=p,g[7]=x,g[11]=y,g[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Nt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/ps.setFromMatrixColumn(e,0).length(),r=1/ps.setFromMatrixColumn(e,1).length(),a=1/ps.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),f=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const d=a*f,p=a*h,x=o*f,y=o*h;t[0]=c*f,t[4]=-c*h,t[8]=l,t[1]=p+x*l,t[5]=d-y*l,t[9]=-o*c,t[2]=y-d*l,t[6]=x+p*l,t[10]=a*c}else if(e.order==="YXZ"){const d=c*f,p=c*h,x=l*f,y=l*h;t[0]=d+y*o,t[4]=x*o-p,t[8]=a*l,t[1]=a*h,t[5]=a*f,t[9]=-o,t[2]=p*o-x,t[6]=y+d*o,t[10]=a*c}else if(e.order==="ZXY"){const d=c*f,p=c*h,x=l*f,y=l*h;t[0]=d-y*o,t[4]=-a*h,t[8]=x+p*o,t[1]=p+x*o,t[5]=a*f,t[9]=y-d*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const d=a*f,p=a*h,x=o*f,y=o*h;t[0]=c*f,t[4]=x*l-p,t[8]=d*l+y,t[1]=c*h,t[5]=y*l+d,t[9]=p*l-x,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const d=a*c,p=a*l,x=o*c,y=o*l;t[0]=c*f,t[4]=y-d*h,t[8]=x*h+p,t[1]=h,t[5]=a*f,t[9]=-o*f,t[2]=-l*f,t[6]=p*h+x,t[10]=d-y*h}else if(e.order==="XZY"){const d=a*c,p=a*l,x=o*c,y=o*l;t[0]=c*f,t[4]=-h,t[8]=l*f,t[1]=d*h+y,t[5]=a*f,t[9]=p*h-x,t[2]=x*h-p,t[6]=o*f,t[10]=y*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ug,e,Fg)}lookAt(e,t,n){const s=this.elements;return pn.subVectors(e,t),pn.lengthSq()===0&&(pn.z=1),pn.normalize(),vi.crossVectors(n,pn),vi.lengthSq()===0&&(Math.abs(n.z)===1?pn.x+=1e-4:pn.z+=1e-4,pn.normalize(),vi.crossVectors(n,pn)),vi.normalize(),na.crossVectors(pn,vi),s[0]=vi.x,s[4]=na.x,s[8]=pn.x,s[1]=vi.y,s[5]=na.y,s[9]=pn.y,s[2]=vi.z,s[6]=na.z,s[10]=pn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],f=n[1],h=n[5],d=n[9],p=n[13],x=n[2],y=n[6],_=n[10],g=n[14],R=n[3],T=n[7],w=n[11],I=n[15],L=s[0],C=s[4],D=s[8],S=s[12],b=s[1],O=s[5],F=s[9],U=s[13],$=s[2],re=s[6],J=s[10],fe=s[14],K=s[3],ee=s[7],ne=s[11],me=s[15];return r[0]=a*L+o*b+c*$+l*K,r[4]=a*C+o*O+c*re+l*ee,r[8]=a*D+o*F+c*J+l*ne,r[12]=a*S+o*U+c*fe+l*me,r[1]=f*L+h*b+d*$+p*K,r[5]=f*C+h*O+d*re+p*ee,r[9]=f*D+h*F+d*J+p*ne,r[13]=f*S+h*U+d*fe+p*me,r[2]=x*L+y*b+_*$+g*K,r[6]=x*C+y*O+_*re+g*ee,r[10]=x*D+y*F+_*J+g*ne,r[14]=x*S+y*U+_*fe+g*me,r[3]=R*L+T*b+w*$+I*K,r[7]=R*C+T*O+w*re+I*ee,r[11]=R*D+T*F+w*J+I*ne,r[15]=R*S+T*U+w*fe+I*me,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],f=e[2],h=e[6],d=e[10],p=e[14],x=e[3],y=e[7],_=e[11],g=e[15];return x*(+r*c*h-s*l*h-r*o*d+n*l*d+s*o*p-n*c*p)+y*(+t*c*p-t*l*d+r*a*d-s*a*p+s*l*f-r*c*f)+_*(+t*l*h-t*o*p-r*a*h+n*a*p+r*o*f-n*l*f)+g*(-s*o*f-t*c*h+t*o*d+s*a*h-n*a*d+n*c*f)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],f=e[8],h=e[9],d=e[10],p=e[11],x=e[12],y=e[13],_=e[14],g=e[15],R=h*_*l-y*d*l+y*c*p-o*_*p-h*c*g+o*d*g,T=x*d*l-f*_*l-x*c*p+a*_*p+f*c*g-a*d*g,w=f*y*l-x*h*l+x*o*p-a*y*p-f*o*g+a*h*g,I=x*h*c-f*y*c-x*o*d+a*y*d+f*o*_-a*h*_,L=t*R+n*T+s*w+r*I;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/L;return e[0]=R*C,e[1]=(y*d*r-h*_*r-y*s*p+n*_*p+h*s*g-n*d*g)*C,e[2]=(o*_*r-y*c*r+y*s*l-n*_*l-o*s*g+n*c*g)*C,e[3]=(h*c*r-o*d*r-h*s*l+n*d*l+o*s*p-n*c*p)*C,e[4]=T*C,e[5]=(f*_*r-x*d*r+x*s*p-t*_*p-f*s*g+t*d*g)*C,e[6]=(x*c*r-a*_*r-x*s*l+t*_*l+a*s*g-t*c*g)*C,e[7]=(a*d*r-f*c*r+f*s*l-t*d*l-a*s*p+t*c*p)*C,e[8]=w*C,e[9]=(x*h*r-f*y*r-x*n*p+t*y*p+f*n*g-t*h*g)*C,e[10]=(a*y*r-x*o*r+x*n*l-t*y*l-a*n*g+t*o*g)*C,e[11]=(f*o*r-a*h*r-f*n*l+t*h*l+a*n*p-t*o*p)*C,e[12]=I*C,e[13]=(f*y*s-x*h*s+x*n*d-t*y*d-f*n*_+t*h*_)*C,e[14]=(x*o*s-a*y*s-x*n*c+t*y*c+a*n*_-t*o*_)*C,e[15]=(a*h*s-f*o*s+f*n*c-t*h*c-a*n*d+t*o*d)*C,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,f=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,f*o+n,f*c-s*a,0,l*c-s*o,f*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,f=a+a,h=o+o,d=r*l,p=r*f,x=r*h,y=a*f,_=a*h,g=o*h,R=c*l,T=c*f,w=c*h,I=n.x,L=n.y,C=n.z;return s[0]=(1-(y+g))*I,s[1]=(p+w)*I,s[2]=(x-T)*I,s[3]=0,s[4]=(p-w)*L,s[5]=(1-(d+g))*L,s[6]=(_+R)*L,s[7]=0,s[8]=(x+T)*C,s[9]=(_-R)*C,s[10]=(1-(d+y))*C,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=ps.set(s[0],s[1],s[2]).length();const a=ps.set(s[4],s[5],s[6]).length(),o=ps.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Ln.copy(this);const l=1/r,f=1/a,h=1/o;return Ln.elements[0]*=l,Ln.elements[1]*=l,Ln.elements[2]*=l,Ln.elements[4]*=f,Ln.elements[5]*=f,Ln.elements[6]*=f,Ln.elements[8]*=h,Ln.elements[9]*=h,Ln.elements[10]*=h,t.setFromRotationMatrix(Ln),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=ri){const c=this.elements,l=2*r/(t-e),f=2*r/(n-s),h=(t+e)/(t-e),d=(n+s)/(n-s);let p,x;if(o===ri)p=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(o===Xa)p=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=f,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=ri){const c=this.elements,l=1/(t-e),f=1/(n-s),h=1/(a-r),d=(t+e)*l,p=(n+s)*f;let x,y;if(o===ri)x=(a+r)*h,y=-2*h;else if(o===Xa)x=r*h,y=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*f,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=y,c[14]=-x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const ps=new X,Ln=new Nt,Ug=new X(0,0,0),Fg=new X(1,1,1),vi=new X,na=new X,pn=new X,Eu=new Nt,Tu=new Or;class fi{constructor(e=0,t=0,n=0,s=fi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],f=s[9],h=s[2],d=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(ut(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-f,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-ut(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(ut(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-ut(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(ut(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-f,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-ut(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-f,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Eu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Eu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Tu.setFromEuler(this),this.setFromQuaternion(Tu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}fi.DEFAULT_ORDER="XYZ";class nd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Bg=0;const Au=new X,ms=new Or,Jn=new Nt,ia=new X,hr=new X,zg=new X,Hg=new Or,Ru=new X(1,0,0),Cu=new X(0,1,0),Pu=new X(0,0,1),Lu={type:"added"},Gg={type:"removed"},gs={type:"childadded",child:null},Fo={type:"childremoved",child:null};class fn extends Qs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Bg++}),this.uuid=Dr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=fn.DEFAULT_UP.clone();const e=new X,t=new fi,n=new Or,s=new X(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Nt},normalMatrix:{value:new et}}),this.matrix=new Nt,this.matrixWorld=new Nt,this.matrixAutoUpdate=fn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new nd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ms.setFromAxisAngle(e,t),this.quaternion.multiply(ms),this}rotateOnWorldAxis(e,t){return ms.setFromAxisAngle(e,t),this.quaternion.premultiply(ms),this}rotateX(e){return this.rotateOnAxis(Ru,e)}rotateY(e){return this.rotateOnAxis(Cu,e)}rotateZ(e){return this.rotateOnAxis(Pu,e)}translateOnAxis(e,t){return Au.copy(e).applyQuaternion(this.quaternion),this.position.add(Au.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ru,e)}translateY(e){return this.translateOnAxis(Cu,e)}translateZ(e){return this.translateOnAxis(Pu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Jn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ia.copy(e):ia.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),hr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Jn.lookAt(hr,ia,this.up):Jn.lookAt(ia,hr,this.up),this.quaternion.setFromRotationMatrix(Jn),s&&(Jn.extractRotation(s.matrixWorld),ms.setFromRotationMatrix(Jn),this.quaternion.premultiply(ms.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Lu),gs.child=e,this.dispatchEvent(gs),gs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Gg),Fo.child=e,this.dispatchEvent(Fo),Fo.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Jn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Jn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Jn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Lu),gs.child=e,this.dispatchEvent(gs),gs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hr,e,zg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hr,Hg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,f=c.length;l<f;l++){const h=c[l];r(e.shapes,h)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];s.animations.push(r(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),f=a(e.images),h=a(e.shapes),d=a(e.skeletons),p=a(e.animations),x=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),f.length>0&&(n.images=f),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),x.length>0&&(n.nodes=x)}return n.object=s,n;function a(o){const c=[];for(const l in o){const f=o[l];delete f.metadata,c.push(f)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}fn.DEFAULT_UP=new X(0,1,0);fn.DEFAULT_MATRIX_AUTO_UPDATE=!0;fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const In=new X,Zn=new X,Bo=new X,Qn=new X,_s=new X,vs=new X,Iu=new X,zo=new X,Ho=new X,Go=new X,Vo=new Lt,Wo=new Lt,qo=new Lt;class On{constructor(e=new X,t=new X,n=new X){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),In.subVectors(e,t),s.cross(In);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){In.subVectors(s,t),Zn.subVectors(n,t),Bo.subVectors(e,t);const a=In.dot(In),o=In.dot(Zn),c=In.dot(Bo),l=Zn.dot(Zn),f=Zn.dot(Bo),h=a*l-o*o;if(h===0)return r.set(0,0,0),null;const d=1/h,p=(l*c-o*f)*d,x=(a*f-o*c)*d;return r.set(1-p-x,x,p)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Qn)===null?!1:Qn.x>=0&&Qn.y>=0&&Qn.x+Qn.y<=1}static getInterpolation(e,t,n,s,r,a,o,c){return this.getBarycoord(e,t,n,s,Qn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Qn.x),c.addScaledVector(a,Qn.y),c.addScaledVector(o,Qn.z),c)}static getInterpolatedAttribute(e,t,n,s,r,a){return Vo.setScalar(0),Wo.setScalar(0),qo.setScalar(0),Vo.fromBufferAttribute(e,t),Wo.fromBufferAttribute(e,n),qo.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Vo,r.x),a.addScaledVector(Wo,r.y),a.addScaledVector(qo,r.z),a}static isFrontFacing(e,t,n,s){return In.subVectors(n,t),Zn.subVectors(e,t),In.cross(Zn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return In.subVectors(this.c,this.b),Zn.subVectors(this.a,this.b),In.cross(Zn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return On.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return On.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return On.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return On.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return On.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let a,o;_s.subVectors(s,n),vs.subVectors(r,n),zo.subVectors(e,n);const c=_s.dot(zo),l=vs.dot(zo);if(c<=0&&l<=0)return t.copy(n);Ho.subVectors(e,s);const f=_s.dot(Ho),h=vs.dot(Ho);if(f>=0&&h<=f)return t.copy(s);const d=c*h-f*l;if(d<=0&&c>=0&&f<=0)return a=c/(c-f),t.copy(n).addScaledVector(_s,a);Go.subVectors(e,r);const p=_s.dot(Go),x=vs.dot(Go);if(x>=0&&p<=x)return t.copy(r);const y=p*l-c*x;if(y<=0&&l>=0&&x<=0)return o=l/(l-x),t.copy(n).addScaledVector(vs,o);const _=f*x-p*h;if(_<=0&&h-f>=0&&p-x>=0)return Iu.subVectors(r,s),o=(h-f)/(h-f+(p-x)),t.copy(s).addScaledVector(Iu,o);const g=1/(_+y+d);return a=y*g,o=d*g,t.copy(n).addScaledVector(_s,a).addScaledVector(vs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const id={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},yi={h:0,s:0,l:0},sa={h:0,s:0,l:0};function jo(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class dt{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=jt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ht.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=ht.workingColorSpace){return this.r=e,this.g=t,this.b=n,ht.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=ht.workingColorSpace){if(e=Sg(e,1),t=ut(t,0,1),n=ut(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=jo(a,r,e+1/3),this.g=jo(a,r,e),this.b=jo(a,r,e-1/3)}return ht.toWorkingColorSpace(this,s),this}setStyle(e,t=jt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=jt){const n=id[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=li(e.r),this.g=li(e.g),this.b=li(e.b),this}copyLinearToSRGB(e){return this.r=ks(e.r),this.g=ks(e.g),this.b=ks(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=jt){return ht.fromWorkingColorSpace(Zt.copy(this),e),Math.round(ut(Zt.r*255,0,255))*65536+Math.round(ut(Zt.g*255,0,255))*256+Math.round(ut(Zt.b*255,0,255))}getHexString(e=jt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ht.workingColorSpace){ht.fromWorkingColorSpace(Zt.copy(this),t);const n=Zt.r,s=Zt.g,r=Zt.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let c,l;const f=(o+a)/2;if(o===a)c=0,l=0;else{const h=a-o;switch(l=f<=.5?h/(a+o):h/(2-a-o),a){case n:c=(s-r)/h+(s<r?6:0);break;case s:c=(r-n)/h+2;break;case r:c=(n-s)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=f,e}getRGB(e,t=ht.workingColorSpace){return ht.fromWorkingColorSpace(Zt.copy(this),t),e.r=Zt.r,e.g=Zt.g,e.b=Zt.b,e}getStyle(e=jt){ht.fromWorkingColorSpace(Zt.copy(this),e);const t=Zt.r,n=Zt.g,s=Zt.b;return e!==jt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(yi),this.setHSL(yi.h+e,yi.s+t,yi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(yi),e.getHSL(sa);const n=Co(yi.h,sa.h,t),s=Co(yi.s,sa.s,t),r=Co(yi.l,sa.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Zt=new dt;dt.NAMES=id;let Vg=0;class fo extends Qs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Vg++}),this.uuid=Dr(),this.name="",this.type="Material",this.blending=Mn,this.side=Ai,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=xl,this.blendDst=bl,this.blendEquation=Gi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new dt(0,0,0),this.blendAlpha=0,this.depthFunc=zs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=vu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=cs,this.stencilZFail=cs,this.stencilZPass=cs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Mn&&(n.blending=this.blending),this.side!==Ai&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==xl&&(n.blendSrc=this.blendSrc),this.blendDst!==bl&&(n.blendDst=this.blendDst),this.blendEquation!==Gi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==zs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==vu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==cs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==cs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==cs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Ar extends fo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new dt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fi,this.combine=zh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ot=new X,ra=new yt;class Nn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=yu,this.updateRanges=[],this.gpuType=si,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ra.fromBufferAttribute(this,t),ra.applyMatrix3(e),this.setXY(t,ra.x,ra.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyMatrix3(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyMatrix4(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyNormalMatrix(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.transformDirection(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=cr(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=on(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=cr(t,this.array)),t}setX(e,t){return this.normalized&&(t=on(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=cr(t,this.array)),t}setY(e,t){return this.normalized&&(t=on(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=cr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=on(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=cr(t,this.array)),t}setW(e,t){return this.normalized&&(t=on(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=on(t,this.array),n=on(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=on(t,this.array),n=on(n,this.array),s=on(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=on(t,this.array),n=on(n,this.array),s=on(s,this.array),r=on(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==yu&&(e.usage=this.usage),e}}class sd extends Nn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class rd extends Nn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class ci extends Nn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Wg=0;const xn=new Nt,Xo=new fn,ys=new X,mn=new Nr,dr=new Nr,Vt=new X;class di extends Qs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Wg++}),this.uuid=Dr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Qh(e)?rd:sd)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new et().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return xn.makeRotationFromQuaternion(e),this.applyMatrix4(xn),this}rotateX(e){return xn.makeRotationX(e),this.applyMatrix4(xn),this}rotateY(e){return xn.makeRotationY(e),this.applyMatrix4(xn),this}rotateZ(e){return xn.makeRotationZ(e),this.applyMatrix4(xn),this}translate(e,t,n){return xn.makeTranslation(e,t,n),this.applyMatrix4(xn),this}scale(e,t,n){return xn.makeScale(e,t,n),this.applyMatrix4(xn),this}lookAt(e){return Xo.lookAt(e),Xo.updateMatrix(),this.applyMatrix4(Xo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ys).negate(),this.translate(ys.x,ys.y,ys.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ci(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Nr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];mn.setFromBufferAttribute(r),this.morphTargetsRelative?(Vt.addVectors(this.boundingBox.min,mn.min),this.boundingBox.expandByPoint(Vt),Vt.addVectors(this.boundingBox.max,mn.max),this.boundingBox.expandByPoint(Vt)):(this.boundingBox.expandByPoint(mn.min),this.boundingBox.expandByPoint(mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new kc);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new X,1/0);return}if(e){const n=this.boundingSphere.center;if(mn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];dr.setFromBufferAttribute(o),this.morphTargetsRelative?(Vt.addVectors(mn.min,dr.min),mn.expandByPoint(Vt),Vt.addVectors(mn.max,dr.max),mn.expandByPoint(Vt)):(mn.expandByPoint(dr.min),mn.expandByPoint(dr.max))}mn.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Vt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Vt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],c=this.morphTargetsRelative;for(let l=0,f=o.count;l<f;l++)Vt.fromBufferAttribute(o,l),c&&(ys.fromBufferAttribute(e,l),Vt.add(ys)),s=Math.max(s,n.distanceToSquared(Vt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Nn(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let D=0;D<n.count;D++)o[D]=new X,c[D]=new X;const l=new X,f=new X,h=new X,d=new yt,p=new yt,x=new yt,y=new X,_=new X;function g(D,S,b){l.fromBufferAttribute(n,D),f.fromBufferAttribute(n,S),h.fromBufferAttribute(n,b),d.fromBufferAttribute(r,D),p.fromBufferAttribute(r,S),x.fromBufferAttribute(r,b),f.sub(l),h.sub(l),p.sub(d),x.sub(d);const O=1/(p.x*x.y-x.x*p.y);isFinite(O)&&(y.copy(f).multiplyScalar(x.y).addScaledVector(h,-p.y).multiplyScalar(O),_.copy(h).multiplyScalar(p.x).addScaledVector(f,-x.x).multiplyScalar(O),o[D].add(y),o[S].add(y),o[b].add(y),c[D].add(_),c[S].add(_),c[b].add(_))}let R=this.groups;R.length===0&&(R=[{start:0,count:e.count}]);for(let D=0,S=R.length;D<S;++D){const b=R[D],O=b.start,F=b.count;for(let U=O,$=O+F;U<$;U+=3)g(e.getX(U+0),e.getX(U+1),e.getX(U+2))}const T=new X,w=new X,I=new X,L=new X;function C(D){I.fromBufferAttribute(s,D),L.copy(I);const S=o[D];T.copy(S),T.sub(I.multiplyScalar(I.dot(S))).normalize(),w.crossVectors(L,S);const O=w.dot(c[D])<0?-1:1;a.setXYZW(D,T.x,T.y,T.z,O)}for(let D=0,S=R.length;D<S;++D){const b=R[D],O=b.start,F=b.count;for(let U=O,$=O+F;U<$;U+=3)C(e.getX(U+0)),C(e.getX(U+1)),C(e.getX(U+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Nn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const s=new X,r=new X,a=new X,o=new X,c=new X,l=new X,f=new X,h=new X;if(e)for(let d=0,p=e.count;d<p;d+=3){const x=e.getX(d+0),y=e.getX(d+1),_=e.getX(d+2);s.fromBufferAttribute(t,x),r.fromBufferAttribute(t,y),a.fromBufferAttribute(t,_),f.subVectors(a,r),h.subVectors(s,r),f.cross(h),o.fromBufferAttribute(n,x),c.fromBufferAttribute(n,y),l.fromBufferAttribute(n,_),o.add(f),c.add(f),l.add(f),n.setXYZ(x,o.x,o.y,o.z),n.setXYZ(y,c.x,c.y,c.z),n.setXYZ(_,l.x,l.y,l.z)}else for(let d=0,p=t.count;d<p;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),f.subVectors(a,r),h.subVectors(s,r),f.cross(h),n.setXYZ(d+0,f.x,f.y,f.z),n.setXYZ(d+1,f.x,f.y,f.z),n.setXYZ(d+2,f.x,f.y,f.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Vt.fromBufferAttribute(e,t),Vt.normalize(),e.setXYZ(t,Vt.x,Vt.y,Vt.z)}toNonIndexed(){function e(o,c){const l=o.array,f=o.itemSize,h=o.normalized,d=new l.constructor(c.length*f);let p=0,x=0;for(let y=0,_=c.length;y<_;y++){o.isInterleavedBufferAttribute?p=c[y]*o.data.stride+o.offset:p=c[y]*f;for(let g=0;g<f;g++)d[x++]=l[p++]}return new Nn(d,f,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new di,n=this.index.array,s=this.attributes;for(const o in s){const c=s[o],l=e(c,n);t.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let f=0,h=l.length;f<h;f++){const d=l[f],p=e(d,n);c.push(p)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],f=[];for(let h=0,d=l.length;h<d;h++){const p=l[h];f.push(p.toJSON(e.data))}f.length>0&&(s[c]=f,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const s=e.attributes;for(const l in s){const f=s[l];this.setAttribute(l,f.clone(t))}const r=e.morphAttributes;for(const l in r){const f=[],h=r[l];for(let d=0,p=h.length;d<p;d++)f.push(h[d].clone(t));this.morphAttributes[l]=f}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,f=a.length;l<f;l++){const h=a[l];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Du=new Nt,ki=new kg,aa=new kc,Ou=new X,oa=new X,la=new X,ca=new X,$o=new X,ua=new X,Nu=new X,fa=new X;class sn extends fn{constructor(e=new di,t=new Ar){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){ua.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const f=o[c],h=r[c];f!==0&&($o.fromBufferAttribute(h,e),a?ua.addScaledVector($o,f):ua.addScaledVector($o.sub(t),f))}t.add(ua)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),aa.copy(n.boundingSphere),aa.applyMatrix4(r),ki.copy(e.ray).recast(e.near),!(aa.containsPoint(ki.origin)===!1&&(ki.intersectSphere(aa,Ou)===null||ki.origin.distanceToSquared(Ou)>(e.far-e.near)**2))&&(Du.copy(r).invert(),ki.copy(e.ray).applyMatrix4(Du),!(n.boundingBox!==null&&ki.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ki)))}_computeIntersections(e,t,n){let s;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,f=r.attributes.uv1,h=r.attributes.normal,d=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,y=d.length;x<y;x++){const _=d[x],g=a[_.materialIndex],R=Math.max(_.start,p.start),T=Math.min(o.count,Math.min(_.start+_.count,p.start+p.count));for(let w=R,I=T;w<I;w+=3){const L=o.getX(w),C=o.getX(w+1),D=o.getX(w+2);s=ha(this,g,e,n,l,f,h,L,C,D),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=_.materialIndex,t.push(s))}}else{const x=Math.max(0,p.start),y=Math.min(o.count,p.start+p.count);for(let _=x,g=y;_<g;_+=3){const R=o.getX(_),T=o.getX(_+1),w=o.getX(_+2);s=ha(this,a,e,n,l,f,h,R,T,w),s&&(s.faceIndex=Math.floor(_/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let x=0,y=d.length;x<y;x++){const _=d[x],g=a[_.materialIndex],R=Math.max(_.start,p.start),T=Math.min(c.count,Math.min(_.start+_.count,p.start+p.count));for(let w=R,I=T;w<I;w+=3){const L=w,C=w+1,D=w+2;s=ha(this,g,e,n,l,f,h,L,C,D),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=_.materialIndex,t.push(s))}}else{const x=Math.max(0,p.start),y=Math.min(c.count,p.start+p.count);for(let _=x,g=y;_<g;_+=3){const R=_,T=_+1,w=_+2;s=ha(this,a,e,n,l,f,h,R,T,w),s&&(s.faceIndex=Math.floor(_/3),t.push(s))}}}}function qg(i,e,t,n,s,r,a,o){let c;if(e.side===un?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,e.side===Ai,o),c===null)return null;fa.copy(o),fa.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(fa);return l<t.near||l>t.far?null:{distance:l,point:fa.clone(),object:i}}function ha(i,e,t,n,s,r,a,o,c,l){i.getVertexPosition(o,oa),i.getVertexPosition(c,la),i.getVertexPosition(l,ca);const f=qg(i,e,t,n,oa,la,ca,Nu);if(f){const h=new X;On.getBarycoord(Nu,oa,la,ca,h),s&&(f.uv=On.getInterpolatedAttribute(s,o,c,l,h,new yt)),r&&(f.uv1=On.getInterpolatedAttribute(r,o,c,l,h,new yt)),a&&(f.normal=On.getInterpolatedAttribute(a,o,c,l,h,new X),f.normal.dot(n.direction)>0&&f.normal.multiplyScalar(-1));const d={a:o,b:c,c:l,normal:new X,materialIndex:0};On.getNormal(oa,la,ca,d.normal),f.face=d,f.barycoord=h}return f}class kr extends di{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],f=[],h=[];let d=0,p=0;x("z","y","x",-1,-1,n,t,e,a,r,0),x("z","y","x",1,-1,n,t,-e,a,r,1),x("x","z","y",1,1,e,n,t,s,a,2),x("x","z","y",1,-1,e,n,-t,s,a,3),x("x","y","z",1,-1,e,t,n,s,r,4),x("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new ci(l,3)),this.setAttribute("normal",new ci(f,3)),this.setAttribute("uv",new ci(h,2));function x(y,_,g,R,T,w,I,L,C,D,S){const b=w/C,O=I/D,F=w/2,U=I/2,$=L/2,re=C+1,J=D+1;let fe=0,K=0;const ee=new X;for(let ne=0;ne<J;ne++){const me=ne*O-U;for(let ve=0;ve<re;ve++){const Re=ve*b-F;ee[y]=Re*R,ee[_]=me*T,ee[g]=$,l.push(ee.x,ee.y,ee.z),ee[y]=0,ee[_]=0,ee[g]=L>0?1:-1,f.push(ee.x,ee.y,ee.z),h.push(ve/C),h.push(1-ne/D),fe+=1}}for(let ne=0;ne<D;ne++)for(let me=0;me<C;me++){const ve=d+me+re*ne,Re=d+me+re*(ne+1),Q=d+(me+1)+re*(ne+1),ue=d+(me+1)+re*ne;c.push(ve,Re,ue),c.push(Re,Q,ue),K+=6}o.addGroup(p,K,S),p+=K,d+=fe}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new kr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function js(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function tn(i){const e={};for(let t=0;t<i.length;t++){const n=js(i[t]);for(const s in n)e[s]=n[s]}return e}function jg(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function ad(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ht.workingColorSpace}const Xg={clone:js,merge:tn};var $g=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Kg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class kn extends fo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=$g,this.fragmentShader=Kg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=js(e.uniforms),this.uniformsGroups=jg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class od extends fn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Nt,this.projectionMatrix=new Nt,this.projectionMatrixInverse=new Nt,this.coordinateSystem=ri}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const xi=new X,ku=new yt,Uu=new yt;class Dn extends od{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=sc*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ro*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return sc*2*Math.atan(Math.tan(Ro*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){xi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(xi.x,xi.y).multiplyScalar(-e/xi.z),xi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(xi.x,xi.y).multiplyScalar(-e/xi.z)}getViewSize(e,t){return this.getViewBounds(e,ku,Uu),t.subVectors(Uu,ku)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ro*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const xs=-90,bs=1;class Yg extends fn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Dn(xs,bs,e,t);s.layers=this.layers,this.add(s);const r=new Dn(xs,bs,e,t);r.layers=this.layers,this.add(r);const a=new Dn(xs,bs,e,t);a.layers=this.layers,this.add(a);const o=new Dn(xs,bs,e,t);o.layers=this.layers,this.add(o);const c=new Dn(xs,bs,e,t);c.layers=this.layers,this.add(c);const l=new Dn(xs,bs,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,c]=t;for(const l of t)this.remove(l);if(e===ri)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Xa)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,l,f]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,l),n.texture.generateMipmaps=y,e.setRenderTarget(n,5,s),e.render(t,f),e.setRenderTarget(h,d,p),e.xr.enabled=x,n.texture.needsPMREMUpdate=!0}}class ld extends Xt{constructor(e,t,n,s,r,a,o,c,l,f){e=e!==void 0?e:[],t=t!==void 0?t:Hs,super(e,t,n,s,r,a,o,c,l,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Jg extends Ri{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new ld(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:cn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new kr(5,5,5),r=new kn({name:"CubemapFromEquirect",uniforms:js(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:un,blending:Ei});r.uniforms.tEquirect.value=t;const a=new sn(s,r),o=t.minFilter;return t.minFilter===Gn&&(t.minFilter=cn),new Yg(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,s){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}}class cd extends fn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new fi,this.environmentIntensity=1,this.environmentRotation=new fi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Zg extends Xt{constructor(e=null,t=1,n=1,s,r,a,o,c,l=Wt,f=Wt,h,d){super(null,a,o,c,l,f,s,r,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Qg extends Nn{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Ko=new X,e0=new X,t0=new et;class zi{constructor(e=new X(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=Ko.subVectors(n,t).cross(e0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Ko),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||t0.getNormalMatrix(e),s=this.coplanarPoint(Ko).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ui=new kc,da=new X;class ud{constructor(e=new zi,t=new zi,n=new zi,s=new zi,r=new zi,a=new zi){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ri){const n=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],c=s[3],l=s[4],f=s[5],h=s[6],d=s[7],p=s[8],x=s[9],y=s[10],_=s[11],g=s[12],R=s[13],T=s[14],w=s[15];if(n[0].setComponents(c-r,d-l,_-p,w-g).normalize(),n[1].setComponents(c+r,d+l,_+p,w+g).normalize(),n[2].setComponents(c+a,d+f,_+x,w+R).normalize(),n[3].setComponents(c-a,d-f,_-x,w-R).normalize(),n[4].setComponents(c-o,d-h,_-y,w-T).normalize(),t===ri)n[5].setComponents(c+o,d+h,_+y,w+T).normalize();else if(t===Xa)n[5].setComponents(o,h,y,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ui.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ui.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ui)}intersectsSprite(e){return Ui.center.set(0,0,0),Ui.radius=.7071067811865476,Ui.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ui)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(da.x=s.normal.x>0?e.max.x:e.min.x,da.y=s.normal.y>0?e.max.y:e.min.y,da.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(da)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}let pa=class extends fn{constructor(){super(),this.isGroup=!0,this.type="Group"}};class rc extends Xt{constructor(e,t,n,s,r,a,o,c,l){super(e,t,n,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class fd extends Xt{constructor(e,t,n,s,r,a,o,c,l,f=Ns){if(f!==Ns&&f!==Ws)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&f===Ns&&(n=Ji),n===void 0&&f===Ws&&(n=Vs),super(null,s,r,a,o,c,f,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Wt,this.minFilter=c!==void 0?c:Wt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class hi extends di{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(s),l=o+1,f=c+1,h=e/o,d=t/c,p=[],x=[],y=[],_=[];for(let g=0;g<f;g++){const R=g*d-a;for(let T=0;T<l;T++){const w=T*h-r;x.push(w,-R,0),y.push(0,0,1),_.push(T/o),_.push(1-g/c)}}for(let g=0;g<c;g++)for(let R=0;R<o;R++){const T=R+l*g,w=R+l*(g+1),I=R+1+l*(g+1),L=R+1+l*g;p.push(T,w,L),p.push(w,I,L)}this.setIndex(p),this.setAttribute("position",new ci(x,3)),this.setAttribute("normal",new ci(y,3)),this.setAttribute("uv",new ci(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hi(e.width,e.height,e.widthSegments,e.heightSegments)}}class n0 extends fo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=hg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class i0 extends fo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Fu={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class s0{constructor(e,t,n){const s=this;let r=!1,a=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(f){o++,r===!1&&s.onStart!==void 0&&s.onStart(f,a,o),r=!0},this.itemEnd=function(f){a++,s.onProgress!==void 0&&s.onProgress(f,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(f){s.onError!==void 0&&s.onError(f)},this.resolveURL=function(f){return c?c(f):f},this.setURLModifier=function(f){return c=f,this},this.addHandler=function(f,h){return l.push(f,h),this},this.removeHandler=function(f){const h=l.indexOf(f);return h!==-1&&l.splice(h,2),this},this.getHandler=function(f){for(let h=0,d=l.length;h<d;h+=2){const p=l[h],x=l[h+1];if(p.global&&(p.lastIndex=0),p.test(f))return x}return null}}}const r0=new s0;class Uc{constructor(e){this.manager=e!==void 0?e:r0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Uc.DEFAULT_MATERIAL_NAME="__DEFAULT";class a0 extends Uc{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=Fu.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;const o=Tr("img");function c(){f(),Fu.add(e,this),t&&t(this),r.manager.itemEnd(e)}function l(h){f(),s&&s(h),r.manager.itemError(e),r.manager.itemEnd(e)}function f(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}}class hd extends Uc{constructor(e){super(e)}load(e,t,n,s){const r=new Xt,a=new a0(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}}class Fc extends od{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=f*this.view.offsetY,c=o-f*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class o0 extends di{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class l0 extends Dn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}function Bu(i,e,t,n){const s=c0(n);switch(t){case qh:return i*e;case Xh:return i*e;case $h:return i*e*2;case Kh:return i*e/s.components*s.byteLength;case Dc:return i*e/s.components*s.byteLength;case Yh:return i*e*2/s.components*s.byteLength;case Oc:return i*e*2/s.components*s.byteLength;case jh:return i*e*3/s.components*s.byteLength;case bn:return i*e*4/s.components*s.byteLength;case Nc:return i*e*4/s.components*s.byteLength;case Pa:case La:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ia:case Da:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Dl:case Nl:return Math.max(i,16)*Math.max(e,8)/4;case Il:case Ol:return Math.max(i,8)*Math.max(e,8)/2;case kl:case Ul:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Fl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Bl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case zl:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Hl:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Gl:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Vl:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Wl:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case ql:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case jl:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Xl:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case $l:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Kl:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Yl:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Jl:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Zl:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Oa:case Ql:case ec:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Jh:case tc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case nc:case ic:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function c0(i){switch(i){case qn:case Gh:return{byteLength:1,components:1};case Er:case Vh:case Ir:return{byteLength:2,components:1};case Lc:case Ic:return{byteLength:2,components:4};case Ji:case Pc:case si:return{byteLength:4,components:1};case Wh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Cc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Cc);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function dd(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function u0(i){const e=new WeakMap;function t(o,c){const l=o.array,f=o.usage,h=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,f),o.onUploadCallback();let p;if(l instanceof Float32Array)p=i.FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=i.SHORT;else if(l instanceof Uint32Array)p=i.UNSIGNED_INT;else if(l instanceof Int32Array)p=i.INT;else if(l instanceof Int8Array)p=i.BYTE;else if(l instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,c,l){const f=c.array,h=c.updateRanges;if(i.bindBuffer(l,o),h.length===0)i.bufferSubData(l,0,f);else{h.sort((p,x)=>p.start-x.start);let d=0;for(let p=1;p<h.length;p++){const x=h[d],y=h[p];y.start<=x.start+x.count+1?x.count=Math.max(x.count,y.start+y.count-x.start):(++d,h[d]=y)}h.length=d+1;for(let p=0,x=h.length;p<x;p++){const y=h[p];i.bufferSubData(l,y.start*f.BYTES_PER_ELEMENT,f,y.start,y.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const f=e.get(o);(!f||f.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var f0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,h0=`#ifdef USE_ALPHAHASH
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
#endif`,d0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,p0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,m0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,g0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,_0=`#ifdef USE_AOMAP
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
#endif`,v0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,y0=`#ifdef USE_BATCHING
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
#endif`,x0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,b0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,w0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,M0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,S0=`#ifdef USE_IRIDESCENCE
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
#endif`,E0=`#ifdef USE_BUMPMAP
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
#endif`,T0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,A0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,R0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,C0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,P0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,L0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,I0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,D0=`#if defined( USE_COLOR_ALPHA )
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
#endif`,O0=`#define PI 3.141592653589793
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
} // validated`,N0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,k0=`vec3 transformedNormal = objectNormal;
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
#endif`,U0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,F0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,B0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,z0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,H0="gl_FragColor = linearToOutputTexel( gl_FragColor );",G0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,V0=`#ifdef USE_ENVMAP
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
#endif`,W0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,q0=`#ifdef USE_ENVMAP
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
#endif`,j0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,X0=`#ifdef USE_ENVMAP
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
#endif`,$0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,K0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Y0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,J0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Z0=`#ifdef USE_GRADIENTMAP
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
}`,Q0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,e_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,t_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,n_=`uniform bool receiveShadow;
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
#endif`,i_=`#ifdef USE_ENVMAP
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
#endif`,s_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,r_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,a_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,o_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,l_=`PhysicalMaterial material;
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
#endif`,c_=`struct PhysicalMaterial {
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
}`,u_=`
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
#endif`,f_=`#if defined( RE_IndirectDiffuse )
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
#endif`,h_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,d_=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,p_=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,m_=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,g_=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,__=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,v_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,y_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,x_=`#if defined( USE_POINTS_UV )
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
#endif`,b_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,w_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,M_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,S_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,E_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,T_=`#ifdef USE_MORPHTARGETS
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
#endif`,A_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,R_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,C_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,P_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,L_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,I_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,D_=`#ifdef USE_NORMALMAP
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
#endif`,O_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,N_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,k_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,U_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,F_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,B_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,z_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,H_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,G_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,V_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,W_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,q_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,j_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,X_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,$_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,K_=`float getShadowMask() {
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
}`,Y_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,J_=`#ifdef USE_SKINNING
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
#endif`,Z_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Q_=`#ifdef USE_SKINNING
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
#endif`,ev=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,tv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,nv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,iv=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,sv=`#ifdef USE_TRANSMISSION
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
#endif`,rv=`#ifdef USE_TRANSMISSION
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
#endif`,av=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ov=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,lv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const uv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,fv=`uniform sampler2D t2D;
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
}`,hv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dv=`#ifdef ENVMAP_TYPE_CUBE
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
}`,pv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gv=`#include <common>
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
}`,_v=`#if DEPTH_PACKING == 3200
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
}`,vv=`#define DISTANCE
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
}`,yv=`#define DISTANCE
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
}`,xv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,bv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wv=`uniform float scale;
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
}`,Mv=`uniform vec3 diffuse;
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
}`,Sv=`#include <common>
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
}`,Ev=`uniform vec3 diffuse;
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
}`,Tv=`#define LAMBERT
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
}`,Av=`#define LAMBERT
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
}`,Rv=`#define MATCAP
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
}`,Cv=`#define MATCAP
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
}`,Pv=`#define NORMAL
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
}`,Lv=`#define NORMAL
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
}`,Iv=`#define PHONG
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
}`,Dv=`#define PHONG
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
}`,Ov=`#define STANDARD
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
}`,Nv=`#define STANDARD
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
}`,kv=`#define TOON
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
}`,Uv=`#define TOON
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
}`,Fv=`uniform float size;
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
}`,Bv=`uniform vec3 diffuse;
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
}`,zv=`#include <common>
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
}`,Hv=`uniform vec3 color;
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
}`,Gv=`uniform float rotation;
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
}`,Vv=`uniform vec3 diffuse;
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
}`,tt={alphahash_fragment:f0,alphahash_pars_fragment:h0,alphamap_fragment:d0,alphamap_pars_fragment:p0,alphatest_fragment:m0,alphatest_pars_fragment:g0,aomap_fragment:_0,aomap_pars_fragment:v0,batching_pars_vertex:y0,batching_vertex:x0,begin_vertex:b0,beginnormal_vertex:w0,bsdfs:M0,iridescence_fragment:S0,bumpmap_pars_fragment:E0,clipping_planes_fragment:T0,clipping_planes_pars_fragment:A0,clipping_planes_pars_vertex:R0,clipping_planes_vertex:C0,color_fragment:P0,color_pars_fragment:L0,color_pars_vertex:I0,color_vertex:D0,common:O0,cube_uv_reflection_fragment:N0,defaultnormal_vertex:k0,displacementmap_pars_vertex:U0,displacementmap_vertex:F0,emissivemap_fragment:B0,emissivemap_pars_fragment:z0,colorspace_fragment:H0,colorspace_pars_fragment:G0,envmap_fragment:V0,envmap_common_pars_fragment:W0,envmap_pars_fragment:q0,envmap_pars_vertex:j0,envmap_physical_pars_fragment:i_,envmap_vertex:X0,fog_vertex:$0,fog_pars_vertex:K0,fog_fragment:Y0,fog_pars_fragment:J0,gradientmap_pars_fragment:Z0,lightmap_pars_fragment:Q0,lights_lambert_fragment:e_,lights_lambert_pars_fragment:t_,lights_pars_begin:n_,lights_toon_fragment:s_,lights_toon_pars_fragment:r_,lights_phong_fragment:a_,lights_phong_pars_fragment:o_,lights_physical_fragment:l_,lights_physical_pars_fragment:c_,lights_fragment_begin:u_,lights_fragment_maps:f_,lights_fragment_end:h_,logdepthbuf_fragment:d_,logdepthbuf_pars_fragment:p_,logdepthbuf_pars_vertex:m_,logdepthbuf_vertex:g_,map_fragment:__,map_pars_fragment:v_,map_particle_fragment:y_,map_particle_pars_fragment:x_,metalnessmap_fragment:b_,metalnessmap_pars_fragment:w_,morphinstance_vertex:M_,morphcolor_vertex:S_,morphnormal_vertex:E_,morphtarget_pars_vertex:T_,morphtarget_vertex:A_,normal_fragment_begin:R_,normal_fragment_maps:C_,normal_pars_fragment:P_,normal_pars_vertex:L_,normal_vertex:I_,normalmap_pars_fragment:D_,clearcoat_normal_fragment_begin:O_,clearcoat_normal_fragment_maps:N_,clearcoat_pars_fragment:k_,iridescence_pars_fragment:U_,opaque_fragment:F_,packing:B_,premultiplied_alpha_fragment:z_,project_vertex:H_,dithering_fragment:G_,dithering_pars_fragment:V_,roughnessmap_fragment:W_,roughnessmap_pars_fragment:q_,shadowmap_pars_fragment:j_,shadowmap_pars_vertex:X_,shadowmap_vertex:$_,shadowmask_pars_fragment:K_,skinbase_vertex:Y_,skinning_pars_vertex:J_,skinning_vertex:Z_,skinnormal_vertex:Q_,specularmap_fragment:ev,specularmap_pars_fragment:tv,tonemapping_fragment:nv,tonemapping_pars_fragment:iv,transmission_fragment:sv,transmission_pars_fragment:rv,uv_pars_fragment:av,uv_pars_vertex:ov,uv_vertex:lv,worldpos_vertex:cv,background_vert:uv,background_frag:fv,backgroundCube_vert:hv,backgroundCube_frag:dv,cube_vert:pv,cube_frag:mv,depth_vert:gv,depth_frag:_v,distanceRGBA_vert:vv,distanceRGBA_frag:yv,equirect_vert:xv,equirect_frag:bv,linedashed_vert:wv,linedashed_frag:Mv,meshbasic_vert:Sv,meshbasic_frag:Ev,meshlambert_vert:Tv,meshlambert_frag:Av,meshmatcap_vert:Rv,meshmatcap_frag:Cv,meshnormal_vert:Pv,meshnormal_frag:Lv,meshphong_vert:Iv,meshphong_frag:Dv,meshphysical_vert:Ov,meshphysical_frag:Nv,meshtoon_vert:kv,meshtoon_frag:Uv,points_vert:Fv,points_frag:Bv,shadow_vert:zv,shadow_frag:Hv,sprite_vert:Gv,sprite_frag:Vv},we={common:{diffuse:{value:new dt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new et}},envmap:{envMap:{value:null},envMapRotation:{value:new et},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new et}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new et}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new et},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new et},normalScale:{value:new yt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new et},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new et}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new et}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new et}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new dt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new dt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0},uvTransform:{value:new et}},sprite:{diffuse:{value:new dt(16777215)},opacity:{value:1},center:{value:new yt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}}},Hn={basic:{uniforms:tn([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.fog]),vertexShader:tt.meshbasic_vert,fragmentShader:tt.meshbasic_frag},lambert:{uniforms:tn([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new dt(0)}}]),vertexShader:tt.meshlambert_vert,fragmentShader:tt.meshlambert_frag},phong:{uniforms:tn([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new dt(0)},specular:{value:new dt(1118481)},shininess:{value:30}}]),vertexShader:tt.meshphong_vert,fragmentShader:tt.meshphong_frag},standard:{uniforms:tn([we.common,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.roughnessmap,we.metalnessmap,we.fog,we.lights,{emissive:{value:new dt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag},toon:{uniforms:tn([we.common,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.gradientmap,we.fog,we.lights,{emissive:{value:new dt(0)}}]),vertexShader:tt.meshtoon_vert,fragmentShader:tt.meshtoon_frag},matcap:{uniforms:tn([we.common,we.bumpmap,we.normalmap,we.displacementmap,we.fog,{matcap:{value:null}}]),vertexShader:tt.meshmatcap_vert,fragmentShader:tt.meshmatcap_frag},points:{uniforms:tn([we.points,we.fog]),vertexShader:tt.points_vert,fragmentShader:tt.points_frag},dashed:{uniforms:tn([we.common,we.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:tt.linedashed_vert,fragmentShader:tt.linedashed_frag},depth:{uniforms:tn([we.common,we.displacementmap]),vertexShader:tt.depth_vert,fragmentShader:tt.depth_frag},normal:{uniforms:tn([we.common,we.bumpmap,we.normalmap,we.displacementmap,{opacity:{value:1}}]),vertexShader:tt.meshnormal_vert,fragmentShader:tt.meshnormal_frag},sprite:{uniforms:tn([we.sprite,we.fog]),vertexShader:tt.sprite_vert,fragmentShader:tt.sprite_frag},background:{uniforms:{uvTransform:{value:new et},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:tt.background_vert,fragmentShader:tt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new et}},vertexShader:tt.backgroundCube_vert,fragmentShader:tt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:tt.cube_vert,fragmentShader:tt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:tt.equirect_vert,fragmentShader:tt.equirect_frag},distanceRGBA:{uniforms:tn([we.common,we.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:tt.distanceRGBA_vert,fragmentShader:tt.distanceRGBA_frag},shadow:{uniforms:tn([we.lights,we.fog,{color:{value:new dt(0)},opacity:{value:1}}]),vertexShader:tt.shadow_vert,fragmentShader:tt.shadow_frag}};Hn.physical={uniforms:tn([Hn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new et},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new et},clearcoatNormalScale:{value:new yt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new et},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new et},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new et},sheen:{value:0},sheenColor:{value:new dt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new et},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new et},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new et},transmissionSamplerSize:{value:new yt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new et},attenuationDistance:{value:0},attenuationColor:{value:new dt(0)},specularColor:{value:new dt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new et},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new et},anisotropyVector:{value:new yt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new et}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag};const ma={r:0,b:0,g:0},Fi=new fi,Wv=new Nt;function qv(i,e,t,n,s,r,a){const o=new dt(0);let c=r===!0?0:1,l,f,h=null,d=0,p=null;function x(T){let w=T.isScene===!0?T.background:null;return w&&w.isTexture&&(w=(T.backgroundBlurriness>0?t:e).get(w)),w}function y(T){let w=!1;const I=x(T);I===null?g(o,c):I&&I.isColor&&(g(I,1),w=!0);const L=i.xr.getEnvironmentBlendMode();L==="additive"?n.buffers.color.setClear(0,0,0,1,a):L==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||w)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function _(T,w){const I=x(w);I&&(I.isCubeTexture||I.mapping===uo)?(f===void 0&&(f=new sn(new kr(1,1,1),new kn({name:"BackgroundCubeMaterial",uniforms:js(Hn.backgroundCube.uniforms),vertexShader:Hn.backgroundCube.vertexShader,fragmentShader:Hn.backgroundCube.fragmentShader,side:un,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(L,C,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(f)),Fi.copy(w.backgroundRotation),Fi.x*=-1,Fi.y*=-1,Fi.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(Fi.y*=-1,Fi.z*=-1),f.material.uniforms.envMap.value=I,f.material.uniforms.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(Wv.makeRotationFromEuler(Fi)),f.material.toneMapped=ht.getTransfer(I.colorSpace)!==vt,(h!==I||d!==I.version||p!==i.toneMapping)&&(f.material.needsUpdate=!0,h=I,d=I.version,p=i.toneMapping),f.layers.enableAll(),T.unshift(f,f.geometry,f.material,0,0,null)):I&&I.isTexture&&(l===void 0&&(l=new sn(new hi(2,2),new kn({name:"BackgroundMaterial",uniforms:js(Hn.background.uniforms),vertexShader:Hn.background.vertexShader,fragmentShader:Hn.background.fragmentShader,side:Ai,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=I,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=ht.getTransfer(I.colorSpace)!==vt,I.matrixAutoUpdate===!0&&I.updateMatrix(),l.material.uniforms.uvTransform.value.copy(I.matrix),(h!==I||d!==I.version||p!==i.toneMapping)&&(l.material.needsUpdate=!0,h=I,d=I.version,p=i.toneMapping),l.layers.enableAll(),T.unshift(l,l.geometry,l.material,0,0,null))}function g(T,w){T.getRGB(ma,ad(i)),n.buffers.color.setClear(ma.r,ma.g,ma.b,w,a)}function R(){f!==void 0&&(f.geometry.dispose(),f.material.dispose()),l!==void 0&&(l.geometry.dispose(),l.material.dispose())}return{getClearColor:function(){return o},setClearColor:function(T,w=1){o.set(T),c=w,g(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(T){c=T,g(o,c)},render:y,addToRenderList:_,dispose:R}}function jv(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,a=!1;function o(b,O,F,U,$){let re=!1;const J=h(U,F,O);r!==J&&(r=J,l(r.object)),re=p(b,U,F,$),re&&x(b,U,F,$),$!==null&&e.update($,i.ELEMENT_ARRAY_BUFFER),(re||a)&&(a=!1,w(b,O,F,U),$!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get($).buffer))}function c(){return i.createVertexArray()}function l(b){return i.bindVertexArray(b)}function f(b){return i.deleteVertexArray(b)}function h(b,O,F){const U=F.wireframe===!0;let $=n[b.id];$===void 0&&($={},n[b.id]=$);let re=$[O.id];re===void 0&&(re={},$[O.id]=re);let J=re[U];return J===void 0&&(J=d(c()),re[U]=J),J}function d(b){const O=[],F=[],U=[];for(let $=0;$<t;$++)O[$]=0,F[$]=0,U[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:F,attributeDivisors:U,object:b,attributes:{},index:null}}function p(b,O,F,U){const $=r.attributes,re=O.attributes;let J=0;const fe=F.getAttributes();for(const K in fe)if(fe[K].location>=0){const ne=$[K];let me=re[K];if(me===void 0&&(K==="instanceMatrix"&&b.instanceMatrix&&(me=b.instanceMatrix),K==="instanceColor"&&b.instanceColor&&(me=b.instanceColor)),ne===void 0||ne.attribute!==me||me&&ne.data!==me.data)return!0;J++}return r.attributesNum!==J||r.index!==U}function x(b,O,F,U){const $={},re=O.attributes;let J=0;const fe=F.getAttributes();for(const K in fe)if(fe[K].location>=0){let ne=re[K];ne===void 0&&(K==="instanceMatrix"&&b.instanceMatrix&&(ne=b.instanceMatrix),K==="instanceColor"&&b.instanceColor&&(ne=b.instanceColor));const me={};me.attribute=ne,ne&&ne.data&&(me.data=ne.data),$[K]=me,J++}r.attributes=$,r.attributesNum=J,r.index=U}function y(){const b=r.newAttributes;for(let O=0,F=b.length;O<F;O++)b[O]=0}function _(b){g(b,0)}function g(b,O){const F=r.newAttributes,U=r.enabledAttributes,$=r.attributeDivisors;F[b]=1,U[b]===0&&(i.enableVertexAttribArray(b),U[b]=1),$[b]!==O&&(i.vertexAttribDivisor(b,O),$[b]=O)}function R(){const b=r.newAttributes,O=r.enabledAttributes;for(let F=0,U=O.length;F<U;F++)O[F]!==b[F]&&(i.disableVertexAttribArray(F),O[F]=0)}function T(b,O,F,U,$,re,J){J===!0?i.vertexAttribIPointer(b,O,F,$,re):i.vertexAttribPointer(b,O,F,U,$,re)}function w(b,O,F,U){y();const $=U.attributes,re=F.getAttributes(),J=O.defaultAttributeValues;for(const fe in re){const K=re[fe];if(K.location>=0){let ee=$[fe];if(ee===void 0&&(fe==="instanceMatrix"&&b.instanceMatrix&&(ee=b.instanceMatrix),fe==="instanceColor"&&b.instanceColor&&(ee=b.instanceColor)),ee!==void 0){const ne=ee.normalized,me=ee.itemSize,ve=e.get(ee);if(ve===void 0)continue;const Re=ve.buffer,Q=ve.type,ue=ve.bytesPerElement,Me=Q===i.INT||Q===i.UNSIGNED_INT||ee.gpuType===Pc;if(ee.isInterleavedBufferAttribute){const ge=ee.data,ke=ge.stride,ze=ee.offset;if(ge.isInstancedInterleavedBuffer){for(let ae=0;ae<K.locationSize;ae++)g(K.location+ae,ge.meshPerAttribute);b.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let ae=0;ae<K.locationSize;ae++)_(K.location+ae);i.bindBuffer(i.ARRAY_BUFFER,Re);for(let ae=0;ae<K.locationSize;ae++)T(K.location+ae,me/K.locationSize,Q,ne,ke*ue,(ze+me/K.locationSize*ae)*ue,Me)}else{if(ee.isInstancedBufferAttribute){for(let ge=0;ge<K.locationSize;ge++)g(K.location+ge,ee.meshPerAttribute);b.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let ge=0;ge<K.locationSize;ge++)_(K.location+ge);i.bindBuffer(i.ARRAY_BUFFER,Re);for(let ge=0;ge<K.locationSize;ge++)T(K.location+ge,me/K.locationSize,Q,ne,me*ue,me/K.locationSize*ge*ue,Me)}}else if(J!==void 0){const ne=J[fe];if(ne!==void 0)switch(ne.length){case 2:i.vertexAttrib2fv(K.location,ne);break;case 3:i.vertexAttrib3fv(K.location,ne);break;case 4:i.vertexAttrib4fv(K.location,ne);break;default:i.vertexAttrib1fv(K.location,ne)}}}}R()}function I(){D();for(const b in n){const O=n[b];for(const F in O){const U=O[F];for(const $ in U)f(U[$].object),delete U[$];delete O[F]}delete n[b]}}function L(b){if(n[b.id]===void 0)return;const O=n[b.id];for(const F in O){const U=O[F];for(const $ in U)f(U[$].object),delete U[$];delete O[F]}delete n[b.id]}function C(b){for(const O in n){const F=n[O];if(F[b.id]===void 0)continue;const U=F[b.id];for(const $ in U)f(U[$].object),delete U[$];delete F[b.id]}}function D(){S(),a=!0,r!==s&&(r=s,l(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:D,resetDefaultState:S,dispose:I,releaseStatesOfGeometry:L,releaseStatesOfProgram:C,initAttributes:y,enableAttribute:_,disableUnusedAttributes:R}}function Xv(i,e,t){let n;function s(l){n=l}function r(l,f){i.drawArrays(n,l,f),t.update(f,n,1)}function a(l,f,h){h!==0&&(i.drawArraysInstanced(n,l,f,h),t.update(f,n,h))}function o(l,f,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,f,0,h);let p=0;for(let x=0;x<h;x++)p+=f[x];t.update(p,n,1)}function c(l,f,h,d){if(h===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let x=0;x<l.length;x++)a(l[x],f[x],d[x]);else{p.multiDrawArraysInstancedWEBGL(n,l,0,f,0,d,0,h);let x=0;for(let y=0;y<h;y++)x+=f[y]*d[y];t.update(x,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function $v(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(C){return!(C!==bn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const D=C===Ir&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==qn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==si&&!D)}function c(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const f=c(l);f!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",f,"instead."),l=f);const h=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),_=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),R=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),T=i.getParameter(i.MAX_VARYING_VECTORS),w=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),I=x>0,L=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:h,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:x,maxTextureSize:y,maxCubemapSize:_,maxAttributes:g,maxVertexUniforms:R,maxVaryings:T,maxFragmentUniforms:w,vertexTextures:I,maxSamples:L}}function Kv(i){const e=this;let t=null,n=0,s=!1,r=!1;const a=new zi,o=new et,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const p=h.length!==0||d||n!==0||s;return s=d,n=h.length,p},this.beginShadows=function(){r=!0,f(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=f(h,d,0)},this.setState=function(h,d,p){const x=h.clippingPlanes,y=h.clipIntersection,_=h.clipShadows,g=i.get(h);if(!s||x===null||x.length===0||r&&!_)r?f(null):l();else{const R=r?0:n,T=R*4;let w=g.clippingState||null;c.value=w,w=f(x,d,T,p);for(let I=0;I!==T;++I)w[I]=t[I];g.clippingState=w,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=R}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function f(h,d,p,x){const y=h!==null?h.length:0;let _=null;if(y!==0){if(_=c.value,x!==!0||_===null){const g=p+y*4,R=d.matrixWorldInverse;o.getNormalMatrix(R),(_===null||_.length<g)&&(_=new Float32Array(g));for(let T=0,w=p;T!==y;++T,w+=4)a.copy(h[T]).applyMatrix4(R,o),a.normal.toArray(_,w),_[w+3]=a.constant}c.value=_,c.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,_}}function Yv(i){let e=new WeakMap;function t(a,o){return o===Cl?a.mapping=Hs:o===Pl&&(a.mapping=Gs),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Cl||o===Pl)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new Jg(c.height);return l.fromEquirectangularTexture(i,a),e.set(a,l),a.addEventListener("dispose",s),t(l.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}const Ls=4,zu=[.125,.215,.35,.446,.526,.582],Vi=20,Yo=new Fc,Hu=new dt;let Jo=null,Zo=0,Qo=0,el=!1;const Hi=(1+Math.sqrt(5))/2,ws=1/Hi,Gu=[new X(-Hi,ws,0),new X(Hi,ws,0),new X(-ws,0,Hi),new X(ws,0,Hi),new X(0,Hi,-ws),new X(0,Hi,ws),new X(-1,1,-1),new X(1,1,-1),new X(-1,1,1),new X(1,1,1)];class Vu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){Jo=this._renderer.getRenderTarget(),Zo=this._renderer.getActiveCubeFace(),Qo=this._renderer.getActiveMipmapLevel(),el=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ju(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=qu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Jo,Zo,Qo),this._renderer.xr.enabled=el,e.scissorTest=!1,ga(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Hs||e.mapping===Gs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Jo=this._renderer.getRenderTarget(),Zo=this._renderer.getActiveCubeFace(),Qo=this._renderer.getActiveMipmapLevel(),el=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:cn,minFilter:cn,generateMipmaps:!1,type:Ir,format:bn,colorSpace:qs,depthBuffer:!1},s=Wu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Wu(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Jv(r)),this._blurMaterial=Zv(r,e,t)}return s}_compileMaterial(e){const t=new sn(this._lodPlanes[0],e);this._renderer.compile(t,Yo)}_sceneToCubeUV(e,t,n,s){const o=new Dn(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,d=f.toneMapping;f.getClearColor(Hu),f.toneMapping=oi,f.autoClear=!1;const p=new Ar({name:"PMREM.Background",side:un,depthWrite:!1,depthTest:!1}),x=new sn(new kr,p);let y=!1;const _=e.background;_?_.isColor&&(p.color.copy(_),e.background=null,y=!0):(p.color.copy(Hu),y=!0);for(let g=0;g<6;g++){const R=g%3;R===0?(o.up.set(0,c[g],0),o.lookAt(l[g],0,0)):R===1?(o.up.set(0,0,c[g]),o.lookAt(0,l[g],0)):(o.up.set(0,c[g],0),o.lookAt(0,0,l[g]));const T=this._cubeSize;ga(s,R*T,g>2?T:0,T,T),f.setRenderTarget(s),y&&f.render(x,o),f.render(e,o)}x.geometry.dispose(),x.material.dispose(),f.toneMapping=d,f.autoClear=h,e.background=_}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===Hs||e.mapping===Gs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=ju()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=qu());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new sn(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const c=this._cubeSize;ga(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,Yo)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Gu[(s-r-1)%Gu.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,h=new sn(this._lodPlanes[s],l),d=l.uniforms,p=this._sizeLods[n]-1,x=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Vi-1),y=r/x,_=isFinite(r)?1+Math.floor(f*y):Vi;_>Vi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${Vi}`);const g=[];let R=0;for(let C=0;C<Vi;++C){const D=C/y,S=Math.exp(-D*D/2);g.push(S),C===0?R+=S:C<_&&(R+=2*S)}for(let C=0;C<g.length;C++)g[C]=g[C]/R;d.envMap.value=e.texture,d.samples.value=_,d.weights.value=g,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:T}=this;d.dTheta.value=x,d.mipInt.value=T-n;const w=this._sizeLods[s],I=3*w*(s>T-Ls?s-T+Ls:0),L=4*(this._cubeSize-w);ga(t,I,L,3*w,2*w),c.setRenderTarget(t),c.render(h,Yo)}}function Jv(i){const e=[],t=[],n=[];let s=i;const r=i-Ls+1+zu.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);t.push(o);let c=1/o;a>i-Ls?c=zu[a-i+Ls-1]:a===0&&(c=0),n.push(c);const l=1/(o-2),f=-l,h=1+l,d=[f,f,h,f,h,h,f,f,h,h,f,h],p=6,x=6,y=3,_=2,g=1,R=new Float32Array(y*x*p),T=new Float32Array(_*x*p),w=new Float32Array(g*x*p);for(let L=0;L<p;L++){const C=L%3*2/3-1,D=L>2?0:-1,S=[C,D,0,C+2/3,D,0,C+2/3,D+1,0,C,D,0,C+2/3,D+1,0,C,D+1,0];R.set(S,y*x*L),T.set(d,_*x*L);const b=[L,L,L,L,L,L];w.set(b,g*x*L)}const I=new di;I.setAttribute("position",new Nn(R,y)),I.setAttribute("uv",new Nn(T,_)),I.setAttribute("faceIndex",new Nn(w,g)),e.push(I),s>Ls&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Wu(i,e,t){const n=new Ri(i,e,t);return n.texture.mapping=uo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ga(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Zv(i,e,t){const n=new Float32Array(Vi),s=new X(0,1,0);return new kn({name:"SphericalGaussianBlur",defines:{n:Vi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Bc(),fragmentShader:`

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
		`,blending:Ei,depthTest:!1,depthWrite:!1})}function qu(){return new kn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Bc(),fragmentShader:`

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
		`,blending:Ei,depthTest:!1,depthWrite:!1})}function ju(){return new kn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Bc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ei,depthTest:!1,depthWrite:!1})}function Bc(){return`

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
	`}function Qv(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===Cl||c===Pl,f=c===Hs||c===Gs;if(l||f){let h=e.get(o);const d=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new Vu(i)),h=l?t.fromEquirectangular(o,h):t.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{const p=o.image;return l&&p&&p.height>0||f&&p&&s(p)?(t===null&&(t=new Vu(i)),h=l?t.fromEquirectangular(o):t.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",r),h.texture):null}}}return o}function s(o){let c=0;const l=6;for(let f=0;f<l;f++)o[f]!==void 0&&c++;return c===l}function r(o){const c=o.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function ey(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&Es("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function ty(i,e,t,n){const s={},r=new WeakMap;function a(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const x in d.attributes)e.remove(d.attributes[x]);d.removeEventListener("dispose",a),delete s[d.id];const p=r.get(d);p&&(e.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(h,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,t.memory.geometries++),d}function c(h){const d=h.attributes;for(const p in d)e.update(d[p],i.ARRAY_BUFFER)}function l(h){const d=[],p=h.index,x=h.attributes.position;let y=0;if(p!==null){const R=p.array;y=p.version;for(let T=0,w=R.length;T<w;T+=3){const I=R[T+0],L=R[T+1],C=R[T+2];d.push(I,L,L,C,C,I)}}else if(x!==void 0){const R=x.array;y=x.version;for(let T=0,w=R.length/3-1;T<w;T+=3){const I=T+0,L=T+1,C=T+2;d.push(I,L,L,C,C,I)}}else return;const _=new(Qh(d)?rd:sd)(d,1);_.version=y;const g=r.get(h);g&&e.remove(g),r.set(h,_)}function f(h){const d=r.get(h);if(d){const p=h.index;p!==null&&d.version<p.version&&l(h)}else l(h);return r.get(h)}return{get:o,update:c,getWireframeAttribute:f}}function ny(i,e,t){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function c(d,p){i.drawElements(n,p,r,d*a),t.update(p,n,1)}function l(d,p,x){x!==0&&(i.drawElementsInstanced(n,p,r,d*a,x),t.update(p,n,x))}function f(d,p,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,d,0,x);let _=0;for(let g=0;g<x;g++)_+=p[g];t.update(_,n,1)}function h(d,p,x,y){if(x===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let g=0;g<d.length;g++)l(d[g]/a,p[g],y[g]);else{_.multiDrawElementsInstancedWEBGL(n,p,0,r,d,0,y,0,x);let g=0;for(let R=0;R<x;R++)g+=p[R]*y[R];t.update(g,n,1)}}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=f,this.renderMultiDrawInstances=h}function iy(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function sy(i,e,t){const n=new WeakMap,s=new Lt;function r(a,o,c){const l=a.morphTargetInfluences,f=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=f!==void 0?f.length:0;let d=n.get(o);if(d===void 0||d.count!==h){let S=function(){C.dispose(),n.delete(o),o.removeEventListener("dispose",S)};d!==void 0&&d.texture.dispose();const p=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,y=o.morphAttributes.color!==void 0,_=o.morphAttributes.position||[],g=o.morphAttributes.normal||[],R=o.morphAttributes.color||[];let T=0;p===!0&&(T=1),x===!0&&(T=2),y===!0&&(T=3);let w=o.attributes.position.count*T,I=1;w>e.maxTextureSize&&(I=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const L=new Float32Array(w*I*4*h),C=new td(L,w,I,h);C.type=si,C.needsUpdate=!0;const D=T*4;for(let b=0;b<h;b++){const O=_[b],F=g[b],U=R[b],$=w*I*4*b;for(let re=0;re<O.count;re++){const J=re*D;p===!0&&(s.fromBufferAttribute(O,re),L[$+J+0]=s.x,L[$+J+1]=s.y,L[$+J+2]=s.z,L[$+J+3]=0),x===!0&&(s.fromBufferAttribute(F,re),L[$+J+4]=s.x,L[$+J+5]=s.y,L[$+J+6]=s.z,L[$+J+7]=0),y===!0&&(s.fromBufferAttribute(U,re),L[$+J+8]=s.x,L[$+J+9]=s.y,L[$+J+10]=s.z,L[$+J+11]=U.itemSize===4?s.w:1)}}d={count:h,texture:C,size:new yt(w,I)},n.set(o,d),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let p=0;for(let y=0;y<l.length;y++)p+=l[y];const x=o.morphTargetsRelative?1:1-p;c.getUniforms().setValue(i,"morphTargetBaseInfluence",x),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function ry(i,e,t,n){let s=new WeakMap;function r(c){const l=n.render.frame,f=c.geometry,h=e.get(c,f);if(s.get(h)!==l&&(e.update(h),s.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return h}function a(){s=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:a}}const pd=new Xt,Xu=new fd(1,1),md=new td,gd=new Og,_d=new ld,$u=[],Ku=[],Yu=new Float32Array(16),Ju=new Float32Array(9),Zu=new Float32Array(4);function er(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=$u[s];if(r===void 0&&(r=new Float32Array(s),$u[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function kt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Ut(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function ho(i,e){let t=Ku[e];t===void 0&&(t=new Int32Array(e),Ku[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function ay(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function oy(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;i.uniform2fv(this.addr,e),Ut(t,e)}}function ly(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(kt(t,e))return;i.uniform3fv(this.addr,e),Ut(t,e)}}function cy(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;i.uniform4fv(this.addr,e),Ut(t,e)}}function uy(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(kt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Ut(t,e)}else{if(kt(t,n))return;Zu.set(n),i.uniformMatrix2fv(this.addr,!1,Zu),Ut(t,n)}}function fy(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(kt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Ut(t,e)}else{if(kt(t,n))return;Ju.set(n),i.uniformMatrix3fv(this.addr,!1,Ju),Ut(t,n)}}function hy(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(kt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Ut(t,e)}else{if(kt(t,n))return;Yu.set(n),i.uniformMatrix4fv(this.addr,!1,Yu),Ut(t,n)}}function dy(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function py(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;i.uniform2iv(this.addr,e),Ut(t,e)}}function my(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(kt(t,e))return;i.uniform3iv(this.addr,e),Ut(t,e)}}function gy(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;i.uniform4iv(this.addr,e),Ut(t,e)}}function _y(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function vy(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;i.uniform2uiv(this.addr,e),Ut(t,e)}}function yy(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(kt(t,e))return;i.uniform3uiv(this.addr,e),Ut(t,e)}}function xy(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;i.uniform4uiv(this.addr,e),Ut(t,e)}}function by(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Xu.compareFunction=Zh,r=Xu):r=pd,t.setTexture2D(e||r,s)}function wy(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||gd,s)}function My(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||_d,s)}function Sy(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||md,s)}function Ey(i){switch(i){case 5126:return ay;case 35664:return oy;case 35665:return ly;case 35666:return cy;case 35674:return uy;case 35675:return fy;case 35676:return hy;case 5124:case 35670:return dy;case 35667:case 35671:return py;case 35668:case 35672:return my;case 35669:case 35673:return gy;case 5125:return _y;case 36294:return vy;case 36295:return yy;case 36296:return xy;case 35678:case 36198:case 36298:case 36306:case 35682:return by;case 35679:case 36299:case 36307:return wy;case 35680:case 36300:case 36308:case 36293:return My;case 36289:case 36303:case 36311:case 36292:return Sy}}function Ty(i,e){i.uniform1fv(this.addr,e)}function Ay(i,e){const t=er(e,this.size,2);i.uniform2fv(this.addr,t)}function Ry(i,e){const t=er(e,this.size,3);i.uniform3fv(this.addr,t)}function Cy(i,e){const t=er(e,this.size,4);i.uniform4fv(this.addr,t)}function Py(i,e){const t=er(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Ly(i,e){const t=er(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Iy(i,e){const t=er(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Dy(i,e){i.uniform1iv(this.addr,e)}function Oy(i,e){i.uniform2iv(this.addr,e)}function Ny(i,e){i.uniform3iv(this.addr,e)}function ky(i,e){i.uniform4iv(this.addr,e)}function Uy(i,e){i.uniform1uiv(this.addr,e)}function Fy(i,e){i.uniform2uiv(this.addr,e)}function By(i,e){i.uniform3uiv(this.addr,e)}function zy(i,e){i.uniform4uiv(this.addr,e)}function Hy(i,e,t){const n=this.cache,s=e.length,r=ho(t,s);kt(n,r)||(i.uniform1iv(this.addr,r),Ut(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||pd,r[a])}function Gy(i,e,t){const n=this.cache,s=e.length,r=ho(t,s);kt(n,r)||(i.uniform1iv(this.addr,r),Ut(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||gd,r[a])}function Vy(i,e,t){const n=this.cache,s=e.length,r=ho(t,s);kt(n,r)||(i.uniform1iv(this.addr,r),Ut(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||_d,r[a])}function Wy(i,e,t){const n=this.cache,s=e.length,r=ho(t,s);kt(n,r)||(i.uniform1iv(this.addr,r),Ut(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||md,r[a])}function qy(i){switch(i){case 5126:return Ty;case 35664:return Ay;case 35665:return Ry;case 35666:return Cy;case 35674:return Py;case 35675:return Ly;case 35676:return Iy;case 5124:case 35670:return Dy;case 35667:case 35671:return Oy;case 35668:case 35672:return Ny;case 35669:case 35673:return ky;case 5125:return Uy;case 36294:return Fy;case 36295:return By;case 36296:return zy;case 35678:case 36198:case 36298:case 36306:case 35682:return Hy;case 35679:case 36299:case 36307:return Gy;case 35680:case 36300:case 36308:case 36293:return Vy;case 36289:case 36303:case 36311:case 36292:return Wy}}class jy{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Ey(t.type)}}class Xy{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=qy(t.type)}}class $y{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],n)}}}const tl=/(\w+)(\])?(\[|\.)?/g;function Qu(i,e){i.seq.push(e),i.map[e.id]=e}function Ky(i,e,t){const n=i.name,s=n.length;for(tl.lastIndex=0;;){const r=tl.exec(n),a=tl.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){Qu(t,l===void 0?new jy(o,i,e):new Xy(o,i,e));break}else{let h=t.map[o];h===void 0&&(h=new $y(o),Qu(t,h)),t=h}}}class Na{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);Ky(r,a,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&n.push(a)}return n}}function ef(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Yy=37297;let Jy=0;function Zy(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const tf=new et;function Qy(i){ht._getMatrix(tf,ht.workingColorSpace,i);const e=`mat3( ${tf.elements.map(t=>t.toFixed(4))} )`;switch(ht.getTransfer(i)){case ja:return[e,"LinearTransferOETF"];case vt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function nf(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+Zy(i.getShaderSource(e),a)}else return s}function ex(i,e){const t=Qy(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function tx(i,e){let t;switch(e){case sg:t="Linear";break;case rg:t="Reinhard";break;case ag:t="Cineon";break;case og:t="ACESFilmic";break;case cg:t="AgX";break;case ug:t="Neutral";break;case lg:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const _a=new X;function nx(){ht.getLuminanceCoefficients(_a);const i=_a.x.toFixed(4),e=_a.y.toFixed(4),t=_a.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ix(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(gr).join(`
`)}function sx(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function rx(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function gr(i){return i!==""}function sf(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function rf(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const ax=/^[ \t]*#include +<([\w\d./]+)>/gm;function ac(i){return i.replace(ax,lx)}const ox=new Map;function lx(i,e){let t=tt[e];if(t===void 0){const n=ox.get(e);if(n!==void 0)t=tt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return ac(t)}const cx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function af(i){return i.replace(cx,ux)}function ux(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function of(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function fx(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Bh?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Um?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===ei&&(e="SHADOWMAP_TYPE_VSM"),e}function hx(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Hs:case Gs:e="ENVMAP_TYPE_CUBE";break;case uo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function dx(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Gs:e="ENVMAP_MODE_REFRACTION";break}return e}function px(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case zh:e="ENVMAP_BLENDING_MULTIPLY";break;case ng:e="ENVMAP_BLENDING_MIX";break;case ig:e="ENVMAP_BLENDING_ADD";break}return e}function mx(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function gx(i,e,t,n){const s=i.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=fx(t),l=hx(t),f=dx(t),h=px(t),d=mx(t),p=ix(t),x=sx(r),y=s.createProgram();let _,g,R=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(gr).join(`
`),_.length>0&&(_+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(gr).join(`
`),g.length>0&&(g+=`
`)):(_=[of(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(gr).join(`
`),g=[of(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+f:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==oi?"#define TONE_MAPPING":"",t.toneMapping!==oi?tt.tonemapping_pars_fragment:"",t.toneMapping!==oi?tx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",tt.colorspace_pars_fragment,ex("linearToOutputTexel",t.outputColorSpace),nx(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(gr).join(`
`)),a=ac(a),a=sf(a,t),a=rf(a,t),o=ac(o),o=sf(o,t),o=rf(o,t),a=af(a),o=af(o),t.isRawShaderMaterial!==!0&&(R=`#version 300 es
`,_=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,g=["#define varying in",t.glslVersion===xu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===xu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const T=R+_+a,w=R+g+o,I=ef(s,s.VERTEX_SHADER,T),L=ef(s,s.FRAGMENT_SHADER,w);s.attachShader(y,I),s.attachShader(y,L),t.index0AttributeName!==void 0?s.bindAttribLocation(y,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function C(O){if(i.debug.checkShaderErrors){const F=s.getProgramInfoLog(y).trim(),U=s.getShaderInfoLog(I).trim(),$=s.getShaderInfoLog(L).trim();let re=!0,J=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(re=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,y,I,L);else{const fe=nf(s,I,"vertex"),K=nf(s,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+O.name+`
Material Type: `+O.type+`

Program Info Log: `+F+`
`+fe+`
`+K)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(U===""||$==="")&&(J=!1);J&&(O.diagnostics={runnable:re,programLog:F,vertexShader:{log:U,prefix:_},fragmentShader:{log:$,prefix:g}})}s.deleteShader(I),s.deleteShader(L),D=new Na(s,y),S=rx(s,y)}let D;this.getUniforms=function(){return D===void 0&&C(this),D};let S;this.getAttributes=function(){return S===void 0&&C(this),S};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=s.getProgramParameter(y,Yy)),b},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Jy++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=I,this.fragmentShader=L,this}let _x=0;class vx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new yx(e),t.set(e,n)),n}}class yx{constructor(e){this.id=_x++,this.code=e,this.usedTimes=0}}function xx(i,e,t,n,s,r,a){const o=new nd,c=new vx,l=new Set,f=[],h=s.logarithmicDepthBuffer,d=s.vertexTextures;let p=s.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(S){return l.add(S),S===0?"uv":`uv${S}`}function _(S,b,O,F,U){const $=F.fog,re=U.geometry,J=S.isMeshStandardMaterial?F.environment:null,fe=(S.isMeshStandardMaterial?t:e).get(S.envMap||J),K=fe&&fe.mapping===uo?fe.image.height:null,ee=x[S.type];S.precision!==null&&(p=s.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));const ne=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,me=ne!==void 0?ne.length:0;let ve=0;re.morphAttributes.position!==void 0&&(ve=1),re.morphAttributes.normal!==void 0&&(ve=2),re.morphAttributes.color!==void 0&&(ve=3);let Re,Q,ue,Me;if(ee){const Je=Hn[ee];Re=Je.vertexShader,Q=Je.fragmentShader}else Re=S.vertexShader,Q=S.fragmentShader,c.update(S),ue=c.getVertexShaderID(S),Me=c.getFragmentShaderID(S);const ge=i.getRenderTarget(),ke=i.state.buffers.depth.getReversed(),ze=U.isInstancedMesh===!0,ae=U.isBatchedMesh===!0,de=!!S.map,Se=!!S.matcap,Ye=!!fe,N=!!S.aoMap,Mt=!!S.lightMap,it=!!S.bumpMap,Le=!!S.normalMap,De=!!S.displacementMap,gt=!!S.emissiveMap,Ue=!!S.metalnessMap,P=!!S.roughnessMap,M=S.anisotropy>0,V=S.clearcoat>0,oe=S.dispersion>0,le=S.iridescence>0,te=S.sheen>0,Fe=S.transmission>0,_e=M&&!!S.anisotropyMap,Pe=V&&!!S.clearcoatMap,ot=V&&!!S.clearcoatNormalMap,pe=V&&!!S.clearcoatRoughnessMap,Oe=le&&!!S.iridescenceMap,Ve=le&&!!S.iridescenceThicknessMap,qe=te&&!!S.sheenColorMap,Ie=te&&!!S.sheenRoughnessMap,Ee=!!S.specularMap,Qe=!!S.specularColorMap,pt=!!S.specularIntensityMap,B=Fe&&!!S.transmissionMap,ye=Fe&&!!S.thicknessMap,Z=!!S.gradientMap,ie=!!S.alphaMap,Te=S.alphaTest>0,W=!!S.alphaHash,$e=!!S.extensions;let St=oi;S.toneMapped&&(ge===null||ge.isXRRenderTarget===!0)&&(St=i.toneMapping);const Ft={shaderID:ee,shaderType:S.type,shaderName:S.name,vertexShader:Re,fragmentShader:Q,defines:S.defines,customVertexShaderID:ue,customFragmentShaderID:Me,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:ae,batchingColor:ae&&U._colorsTexture!==null,instancing:ze,instancingColor:ze&&U.instanceColor!==null,instancingMorph:ze&&U.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ge===null?i.outputColorSpace:ge.isXRRenderTarget===!0?ge.texture.colorSpace:qs,alphaToCoverage:!!S.alphaToCoverage,map:de,matcap:Se,envMap:Ye,envMapMode:Ye&&fe.mapping,envMapCubeUVHeight:K,aoMap:N,lightMap:Mt,bumpMap:it,normalMap:Le,displacementMap:d&&De,emissiveMap:gt,normalMapObjectSpace:Le&&S.normalMapType===mg,normalMapTangentSpace:Le&&S.normalMapType===pg,metalnessMap:Ue,roughnessMap:P,anisotropy:M,anisotropyMap:_e,clearcoat:V,clearcoatMap:Pe,clearcoatNormalMap:ot,clearcoatRoughnessMap:pe,dispersion:oe,iridescence:le,iridescenceMap:Oe,iridescenceThicknessMap:Ve,sheen:te,sheenColorMap:qe,sheenRoughnessMap:Ie,specularMap:Ee,specularColorMap:Qe,specularIntensityMap:pt,transmission:Fe,transmissionMap:B,thicknessMap:ye,gradientMap:Z,opaque:S.transparent===!1&&S.blending===Mn&&S.alphaToCoverage===!1,alphaMap:ie,alphaTest:Te,alphaHash:W,combine:S.combine,mapUv:de&&y(S.map.channel),aoMapUv:N&&y(S.aoMap.channel),lightMapUv:Mt&&y(S.lightMap.channel),bumpMapUv:it&&y(S.bumpMap.channel),normalMapUv:Le&&y(S.normalMap.channel),displacementMapUv:De&&y(S.displacementMap.channel),emissiveMapUv:gt&&y(S.emissiveMap.channel),metalnessMapUv:Ue&&y(S.metalnessMap.channel),roughnessMapUv:P&&y(S.roughnessMap.channel),anisotropyMapUv:_e&&y(S.anisotropyMap.channel),clearcoatMapUv:Pe&&y(S.clearcoatMap.channel),clearcoatNormalMapUv:ot&&y(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:pe&&y(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Oe&&y(S.iridescenceMap.channel),iridescenceThicknessMapUv:Ve&&y(S.iridescenceThicknessMap.channel),sheenColorMapUv:qe&&y(S.sheenColorMap.channel),sheenRoughnessMapUv:Ie&&y(S.sheenRoughnessMap.channel),specularMapUv:Ee&&y(S.specularMap.channel),specularColorMapUv:Qe&&y(S.specularColorMap.channel),specularIntensityMapUv:pt&&y(S.specularIntensityMap.channel),transmissionMapUv:B&&y(S.transmissionMap.channel),thicknessMapUv:ye&&y(S.thicknessMap.channel),alphaMapUv:ie&&y(S.alphaMap.channel),vertexTangents:!!re.attributes.tangent&&(Le||M),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!re.attributes.uv&&(de||ie),fog:!!$,useFog:S.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:ke,skinning:U.isSkinnedMesh===!0,morphTargets:re.morphAttributes.position!==void 0,morphNormals:re.morphAttributes.normal!==void 0,morphColors:re.morphAttributes.color!==void 0,morphTargetsCount:me,morphTextureStride:ve,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&O.length>0,shadowMapType:i.shadowMap.type,toneMapping:St,decodeVideoTexture:de&&S.map.isVideoTexture===!0&&ht.getTransfer(S.map.colorSpace)===vt,decodeVideoTextureEmissive:gt&&S.emissiveMap.isVideoTexture===!0&&ht.getTransfer(S.emissiveMap.colorSpace)===vt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===ti,flipSided:S.side===un,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:$e&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:($e&&S.extensions.multiDraw===!0||ae)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Ft.vertexUv1s=l.has(1),Ft.vertexUv2s=l.has(2),Ft.vertexUv3s=l.has(3),l.clear(),Ft}function g(S){const b=[];if(S.shaderID?b.push(S.shaderID):(b.push(S.customVertexShaderID),b.push(S.customFragmentShaderID)),S.defines!==void 0)for(const O in S.defines)b.push(O),b.push(S.defines[O]);return S.isRawShaderMaterial===!1&&(R(b,S),T(b,S),b.push(i.outputColorSpace)),b.push(S.customProgramCacheKey),b.join()}function R(S,b){S.push(b.precision),S.push(b.outputColorSpace),S.push(b.envMapMode),S.push(b.envMapCubeUVHeight),S.push(b.mapUv),S.push(b.alphaMapUv),S.push(b.lightMapUv),S.push(b.aoMapUv),S.push(b.bumpMapUv),S.push(b.normalMapUv),S.push(b.displacementMapUv),S.push(b.emissiveMapUv),S.push(b.metalnessMapUv),S.push(b.roughnessMapUv),S.push(b.anisotropyMapUv),S.push(b.clearcoatMapUv),S.push(b.clearcoatNormalMapUv),S.push(b.clearcoatRoughnessMapUv),S.push(b.iridescenceMapUv),S.push(b.iridescenceThicknessMapUv),S.push(b.sheenColorMapUv),S.push(b.sheenRoughnessMapUv),S.push(b.specularMapUv),S.push(b.specularColorMapUv),S.push(b.specularIntensityMapUv),S.push(b.transmissionMapUv),S.push(b.thicknessMapUv),S.push(b.combine),S.push(b.fogExp2),S.push(b.sizeAttenuation),S.push(b.morphTargetsCount),S.push(b.morphAttributeCount),S.push(b.numDirLights),S.push(b.numPointLights),S.push(b.numSpotLights),S.push(b.numSpotLightMaps),S.push(b.numHemiLights),S.push(b.numRectAreaLights),S.push(b.numDirLightShadows),S.push(b.numPointLightShadows),S.push(b.numSpotLightShadows),S.push(b.numSpotLightShadowsWithMaps),S.push(b.numLightProbes),S.push(b.shadowMapType),S.push(b.toneMapping),S.push(b.numClippingPlanes),S.push(b.numClipIntersection),S.push(b.depthPacking)}function T(S,b){o.disableAll(),b.supportsVertexTextures&&o.enable(0),b.instancing&&o.enable(1),b.instancingColor&&o.enable(2),b.instancingMorph&&o.enable(3),b.matcap&&o.enable(4),b.envMap&&o.enable(5),b.normalMapObjectSpace&&o.enable(6),b.normalMapTangentSpace&&o.enable(7),b.clearcoat&&o.enable(8),b.iridescence&&o.enable(9),b.alphaTest&&o.enable(10),b.vertexColors&&o.enable(11),b.vertexAlphas&&o.enable(12),b.vertexUv1s&&o.enable(13),b.vertexUv2s&&o.enable(14),b.vertexUv3s&&o.enable(15),b.vertexTangents&&o.enable(16),b.anisotropy&&o.enable(17),b.alphaHash&&o.enable(18),b.batching&&o.enable(19),b.dispersion&&o.enable(20),b.batchingColor&&o.enable(21),S.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reverseDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),S.push(o.mask)}function w(S){const b=x[S.type];let O;if(b){const F=Hn[b];O=Xg.clone(F.uniforms)}else O=S.uniforms;return O}function I(S,b){let O;for(let F=0,U=f.length;F<U;F++){const $=f[F];if($.cacheKey===b){O=$,++O.usedTimes;break}}return O===void 0&&(O=new gx(i,b,S,r),f.push(O)),O}function L(S){if(--S.usedTimes===0){const b=f.indexOf(S);f[b]=f[f.length-1],f.pop(),S.destroy()}}function C(S){c.remove(S)}function D(){c.dispose()}return{getParameters:_,getProgramCacheKey:g,getUniforms:w,acquireProgram:I,releaseProgram:L,releaseShaderCache:C,programs:f,dispose:D}}function bx(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function wx(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function lf(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function cf(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(h,d,p,x,y,_){let g=i[e];return g===void 0?(g={id:h.id,object:h,geometry:d,material:p,groupOrder:x,renderOrder:h.renderOrder,z:y,group:_},i[e]=g):(g.id=h.id,g.object=h,g.geometry=d,g.material=p,g.groupOrder=x,g.renderOrder=h.renderOrder,g.z=y,g.group=_),e++,g}function o(h,d,p,x,y,_){const g=a(h,d,p,x,y,_);p.transmission>0?n.push(g):p.transparent===!0?s.push(g):t.push(g)}function c(h,d,p,x,y,_){const g=a(h,d,p,x,y,_);p.transmission>0?n.unshift(g):p.transparent===!0?s.unshift(g):t.unshift(g)}function l(h,d){t.length>1&&t.sort(h||wx),n.length>1&&n.sort(d||lf),s.length>1&&s.sort(d||lf)}function f(){for(let h=e,d=i.length;h<d;h++){const p=i[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:c,finish:f,sort:l}}function Mx(){let i=new WeakMap;function e(n,s){const r=i.get(n);let a;return r===void 0?(a=new cf,i.set(n,[a])):s>=r.length?(a=new cf,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Sx(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new X,color:new dt};break;case"SpotLight":t={position:new X,direction:new X,color:new dt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new X,color:new dt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new X,skyColor:new dt,groundColor:new dt};break;case"RectAreaLight":t={color:new dt,position:new X,halfWidth:new X,halfHeight:new X};break}return i[e.id]=t,t}}}function Ex(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Tx=0;function Ax(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Rx(i){const e=new Sx,t=Ex(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new X);const s=new X,r=new Nt,a=new Nt;function o(l){let f=0,h=0,d=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let p=0,x=0,y=0,_=0,g=0,R=0,T=0,w=0,I=0,L=0,C=0;l.sort(Ax);for(let S=0,b=l.length;S<b;S++){const O=l[S],F=O.color,U=O.intensity,$=O.distance,re=O.shadow&&O.shadow.map?O.shadow.map.texture:null;if(O.isAmbientLight)f+=F.r*U,h+=F.g*U,d+=F.b*U;else if(O.isLightProbe){for(let J=0;J<9;J++)n.probe[J].addScaledVector(O.sh.coefficients[J],U);C++}else if(O.isDirectionalLight){const J=e.get(O);if(J.color.copy(O.color).multiplyScalar(O.intensity),O.castShadow){const fe=O.shadow,K=t.get(O);K.shadowIntensity=fe.intensity,K.shadowBias=fe.bias,K.shadowNormalBias=fe.normalBias,K.shadowRadius=fe.radius,K.shadowMapSize=fe.mapSize,n.directionalShadow[p]=K,n.directionalShadowMap[p]=re,n.directionalShadowMatrix[p]=O.shadow.matrix,R++}n.directional[p]=J,p++}else if(O.isSpotLight){const J=e.get(O);J.position.setFromMatrixPosition(O.matrixWorld),J.color.copy(F).multiplyScalar(U),J.distance=$,J.coneCos=Math.cos(O.angle),J.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),J.decay=O.decay,n.spot[y]=J;const fe=O.shadow;if(O.map&&(n.spotLightMap[I]=O.map,I++,fe.updateMatrices(O),O.castShadow&&L++),n.spotLightMatrix[y]=fe.matrix,O.castShadow){const K=t.get(O);K.shadowIntensity=fe.intensity,K.shadowBias=fe.bias,K.shadowNormalBias=fe.normalBias,K.shadowRadius=fe.radius,K.shadowMapSize=fe.mapSize,n.spotShadow[y]=K,n.spotShadowMap[y]=re,w++}y++}else if(O.isRectAreaLight){const J=e.get(O);J.color.copy(F).multiplyScalar(U),J.halfWidth.set(O.width*.5,0,0),J.halfHeight.set(0,O.height*.5,0),n.rectArea[_]=J,_++}else if(O.isPointLight){const J=e.get(O);if(J.color.copy(O.color).multiplyScalar(O.intensity),J.distance=O.distance,J.decay=O.decay,O.castShadow){const fe=O.shadow,K=t.get(O);K.shadowIntensity=fe.intensity,K.shadowBias=fe.bias,K.shadowNormalBias=fe.normalBias,K.shadowRadius=fe.radius,K.shadowMapSize=fe.mapSize,K.shadowCameraNear=fe.camera.near,K.shadowCameraFar=fe.camera.far,n.pointShadow[x]=K,n.pointShadowMap[x]=re,n.pointShadowMatrix[x]=O.shadow.matrix,T++}n.point[x]=J,x++}else if(O.isHemisphereLight){const J=e.get(O);J.skyColor.copy(O.color).multiplyScalar(U),J.groundColor.copy(O.groundColor).multiplyScalar(U),n.hemi[g]=J,g++}}_>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=we.LTC_FLOAT_1,n.rectAreaLTC2=we.LTC_FLOAT_2):(n.rectAreaLTC1=we.LTC_HALF_1,n.rectAreaLTC2=we.LTC_HALF_2)),n.ambient[0]=f,n.ambient[1]=h,n.ambient[2]=d;const D=n.hash;(D.directionalLength!==p||D.pointLength!==x||D.spotLength!==y||D.rectAreaLength!==_||D.hemiLength!==g||D.numDirectionalShadows!==R||D.numPointShadows!==T||D.numSpotShadows!==w||D.numSpotMaps!==I||D.numLightProbes!==C)&&(n.directional.length=p,n.spot.length=y,n.rectArea.length=_,n.point.length=x,n.hemi.length=g,n.directionalShadow.length=R,n.directionalShadowMap.length=R,n.pointShadow.length=T,n.pointShadowMap.length=T,n.spotShadow.length=w,n.spotShadowMap.length=w,n.directionalShadowMatrix.length=R,n.pointShadowMatrix.length=T,n.spotLightMatrix.length=w+I-L,n.spotLightMap.length=I,n.numSpotLightShadowsWithMaps=L,n.numLightProbes=C,D.directionalLength=p,D.pointLength=x,D.spotLength=y,D.rectAreaLength=_,D.hemiLength=g,D.numDirectionalShadows=R,D.numPointShadows=T,D.numSpotShadows=w,D.numSpotMaps=I,D.numLightProbes=C,n.version=Tx++)}function c(l,f){let h=0,d=0,p=0,x=0,y=0;const _=f.matrixWorldInverse;for(let g=0,R=l.length;g<R;g++){const T=l[g];if(T.isDirectionalLight){const w=n.directional[h];w.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(_),h++}else if(T.isSpotLight){const w=n.spot[p];w.position.setFromMatrixPosition(T.matrixWorld),w.position.applyMatrix4(_),w.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(_),p++}else if(T.isRectAreaLight){const w=n.rectArea[x];w.position.setFromMatrixPosition(T.matrixWorld),w.position.applyMatrix4(_),a.identity(),r.copy(T.matrixWorld),r.premultiply(_),a.extractRotation(r),w.halfWidth.set(T.width*.5,0,0),w.halfHeight.set(0,T.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),x++}else if(T.isPointLight){const w=n.point[d];w.position.setFromMatrixPosition(T.matrixWorld),w.position.applyMatrix4(_),d++}else if(T.isHemisphereLight){const w=n.hemi[y];w.direction.setFromMatrixPosition(T.matrixWorld),w.direction.transformDirection(_),y++}}}return{setup:o,setupView:c,state:n}}function uf(i){const e=new Rx(i),t=[],n=[];function s(f){l.camera=f,t.length=0,n.length=0}function r(f){t.push(f)}function a(f){n.push(f)}function o(){e.setup(t)}function c(f){e.setupView(t,f)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function Cx(i){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new uf(i),e.set(s,[o])):r>=a.length?(o=new uf(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const Px=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Lx=`uniform sampler2D shadow_pass;
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
}`;function Ix(i,e,t){let n=new ud;const s=new yt,r=new yt,a=new Lt,o=new n0({depthPacking:dg}),c=new i0,l={},f=t.maxTextureSize,h={[Ai]:un,[un]:Ai,[ti]:ti},d=new kn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new yt},radius:{value:4}},vertexShader:Px,fragmentShader:Lx}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const x=new di;x.setAttribute("position",new Nn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new sn(x,d),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Bh;let g=this.type;this.render=function(L,C,D){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||L.length===0)return;const S=i.getRenderTarget(),b=i.getActiveCubeFace(),O=i.getActiveMipmapLevel(),F=i.state;F.setBlending(Ei),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const U=g!==ei&&this.type===ei,$=g===ei&&this.type!==ei;for(let re=0,J=L.length;re<J;re++){const fe=L[re],K=fe.shadow;if(K===void 0){console.warn("THREE.WebGLShadowMap:",fe,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;s.copy(K.mapSize);const ee=K.getFrameExtents();if(s.multiply(ee),r.copy(K.mapSize),(s.x>f||s.y>f)&&(s.x>f&&(r.x=Math.floor(f/ee.x),s.x=r.x*ee.x,K.mapSize.x=r.x),s.y>f&&(r.y=Math.floor(f/ee.y),s.y=r.y*ee.y,K.mapSize.y=r.y)),K.map===null||U===!0||$===!0){const me=this.type!==ei?{minFilter:Wt,magFilter:Wt}:{};K.map!==null&&K.map.dispose(),K.map=new Ri(s.x,s.y,me),K.map.texture.name=fe.name+".shadowMap",K.camera.updateProjectionMatrix()}i.setRenderTarget(K.map),i.clear();const ne=K.getViewportCount();for(let me=0;me<ne;me++){const ve=K.getViewport(me);a.set(r.x*ve.x,r.y*ve.y,r.x*ve.z,r.y*ve.w),F.viewport(a),K.updateMatrices(fe,me),n=K.getFrustum(),w(C,D,K.camera,fe,this.type)}K.isPointLightShadow!==!0&&this.type===ei&&R(K,D),K.needsUpdate=!1}g=this.type,_.needsUpdate=!1,i.setRenderTarget(S,b,O)};function R(L,C){const D=e.update(y);d.defines.VSM_SAMPLES!==L.blurSamples&&(d.defines.VSM_SAMPLES=L.blurSamples,p.defines.VSM_SAMPLES=L.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new Ri(s.x,s.y)),d.uniforms.shadow_pass.value=L.map.texture,d.uniforms.resolution.value=L.mapSize,d.uniforms.radius.value=L.radius,i.setRenderTarget(L.mapPass),i.clear(),i.renderBufferDirect(C,null,D,d,y,null),p.uniforms.shadow_pass.value=L.mapPass.texture,p.uniforms.resolution.value=L.mapSize,p.uniforms.radius.value=L.radius,i.setRenderTarget(L.map),i.clear(),i.renderBufferDirect(C,null,D,p,y,null)}function T(L,C,D,S){let b=null;const O=D.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(O!==void 0)b=O;else if(b=D.isPointLight===!0?c:o,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const F=b.uuid,U=C.uuid;let $=l[F];$===void 0&&($={},l[F]=$);let re=$[U];re===void 0&&(re=b.clone(),$[U]=re,C.addEventListener("dispose",I)),b=re}if(b.visible=C.visible,b.wireframe=C.wireframe,S===ei?b.side=C.shadowSide!==null?C.shadowSide:C.side:b.side=C.shadowSide!==null?C.shadowSide:h[C.side],b.alphaMap=C.alphaMap,b.alphaTest=C.alphaTest,b.map=C.map,b.clipShadows=C.clipShadows,b.clippingPlanes=C.clippingPlanes,b.clipIntersection=C.clipIntersection,b.displacementMap=C.displacementMap,b.displacementScale=C.displacementScale,b.displacementBias=C.displacementBias,b.wireframeLinewidth=C.wireframeLinewidth,b.linewidth=C.linewidth,D.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const F=i.properties.get(b);F.light=D}return b}function w(L,C,D,S,b){if(L.visible===!1)return;if(L.layers.test(C.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&b===ei)&&(!L.frustumCulled||n.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,L.matrixWorld);const U=e.update(L),$=L.material;if(Array.isArray($)){const re=U.groups;for(let J=0,fe=re.length;J<fe;J++){const K=re[J],ee=$[K.materialIndex];if(ee&&ee.visible){const ne=T(L,ee,S,b);L.onBeforeShadow(i,L,C,D,U,ne,K),i.renderBufferDirect(D,null,U,ne,L,K),L.onAfterShadow(i,L,C,D,U,ne,K)}}}else if($.visible){const re=T(L,$,S,b);L.onBeforeShadow(i,L,C,D,U,re,null),i.renderBufferDirect(D,null,U,re,L,null),L.onAfterShadow(i,L,C,D,U,re,null)}}const F=L.children;for(let U=0,$=F.length;U<$;U++)w(F[U],C,D,S,b)}function I(L){L.target.removeEventListener("dispose",I);for(const D in l){const S=l[D],b=L.target.uuid;b in S&&(S[b].dispose(),delete S[b])}}}const Dx={[wl]:Ml,[Sl]:Al,[El]:Rl,[zs]:Tl,[Ml]:wl,[Al]:Sl,[Rl]:El,[Tl]:zs};function Ox(i,e){function t(){let B=!1;const ye=new Lt;let Z=null;const ie=new Lt(0,0,0,0);return{setMask:function(Te){Z!==Te&&!B&&(i.colorMask(Te,Te,Te,Te),Z=Te)},setLocked:function(Te){B=Te},setClear:function(Te,W,$e,St,Ft){Ft===!0&&(Te*=St,W*=St,$e*=St),ye.set(Te,W,$e,St),ie.equals(ye)===!1&&(i.clearColor(Te,W,$e,St),ie.copy(ye))},reset:function(){B=!1,Z=null,ie.set(-1,0,0,0)}}}function n(){let B=!1,ye=!1,Z=null,ie=null,Te=null;return{setReversed:function(W){if(ye!==W){const $e=e.get("EXT_clip_control");ye?$e.clipControlEXT($e.LOWER_LEFT_EXT,$e.ZERO_TO_ONE_EXT):$e.clipControlEXT($e.LOWER_LEFT_EXT,$e.NEGATIVE_ONE_TO_ONE_EXT);const St=Te;Te=null,this.setClear(St)}ye=W},getReversed:function(){return ye},setTest:function(W){W?ge(i.DEPTH_TEST):ke(i.DEPTH_TEST)},setMask:function(W){Z!==W&&!B&&(i.depthMask(W),Z=W)},setFunc:function(W){if(ye&&(W=Dx[W]),ie!==W){switch(W){case wl:i.depthFunc(i.NEVER);break;case Ml:i.depthFunc(i.ALWAYS);break;case Sl:i.depthFunc(i.LESS);break;case zs:i.depthFunc(i.LEQUAL);break;case El:i.depthFunc(i.EQUAL);break;case Tl:i.depthFunc(i.GEQUAL);break;case Al:i.depthFunc(i.GREATER);break;case Rl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ie=W}},setLocked:function(W){B=W},setClear:function(W){Te!==W&&(ye&&(W=1-W),i.clearDepth(W),Te=W)},reset:function(){B=!1,Z=null,ie=null,Te=null,ye=!1}}}function s(){let B=!1,ye=null,Z=null,ie=null,Te=null,W=null,$e=null,St=null,Ft=null;return{setTest:function(Je){B||(Je?ge(i.STENCIL_TEST):ke(i.STENCIL_TEST))},setMask:function(Je){ye!==Je&&!B&&(i.stencilMask(Je),ye=Je)},setFunc:function(Je,$t,hn){(Z!==Je||ie!==$t||Te!==hn)&&(i.stencilFunc(Je,$t,hn),Z=Je,ie=$t,Te=hn)},setOp:function(Je,$t,hn){(W!==Je||$e!==$t||St!==hn)&&(i.stencilOp(Je,$t,hn),W=Je,$e=$t,St=hn)},setLocked:function(Je){B=Je},setClear:function(Je){Ft!==Je&&(i.clearStencil(Je),Ft=Je)},reset:function(){B=!1,ye=null,Z=null,ie=null,Te=null,W=null,$e=null,St=null,Ft=null}}}const r=new t,a=new n,o=new s,c=new WeakMap,l=new WeakMap;let f={},h={},d=new WeakMap,p=[],x=null,y=!1,_=null,g=null,R=null,T=null,w=null,I=null,L=null,C=new dt(0,0,0),D=0,S=!1,b=null,O=null,F=null,U=null,$=null;const re=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let J=!1,fe=0;const K=i.getParameter(i.VERSION);K.indexOf("WebGL")!==-1?(fe=parseFloat(/^WebGL (\d)/.exec(K)[1]),J=fe>=1):K.indexOf("OpenGL ES")!==-1&&(fe=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),J=fe>=2);let ee=null,ne={};const me=i.getParameter(i.SCISSOR_BOX),ve=i.getParameter(i.VIEWPORT),Re=new Lt().fromArray(me),Q=new Lt().fromArray(ve);function ue(B,ye,Z,ie){const Te=new Uint8Array(4),W=i.createTexture();i.bindTexture(B,W),i.texParameteri(B,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(B,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let $e=0;$e<Z;$e++)B===i.TEXTURE_3D||B===i.TEXTURE_2D_ARRAY?i.texImage3D(ye,0,i.RGBA,1,1,ie,0,i.RGBA,i.UNSIGNED_BYTE,Te):i.texImage2D(ye+$e,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Te);return W}const Me={};Me[i.TEXTURE_2D]=ue(i.TEXTURE_2D,i.TEXTURE_2D,1),Me[i.TEXTURE_CUBE_MAP]=ue(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Me[i.TEXTURE_2D_ARRAY]=ue(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Me[i.TEXTURE_3D]=ue(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ge(i.DEPTH_TEST),a.setFunc(zs),it(!1),Le(_u),ge(i.CULL_FACE),N(Ei);function ge(B){f[B]!==!0&&(i.enable(B),f[B]=!0)}function ke(B){f[B]!==!1&&(i.disable(B),f[B]=!1)}function ze(B,ye){return h[B]!==ye?(i.bindFramebuffer(B,ye),h[B]=ye,B===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=ye),B===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=ye),!0):!1}function ae(B,ye){let Z=p,ie=!1;if(B){Z=d.get(ye),Z===void 0&&(Z=[],d.set(ye,Z));const Te=B.textures;if(Z.length!==Te.length||Z[0]!==i.COLOR_ATTACHMENT0){for(let W=0,$e=Te.length;W<$e;W++)Z[W]=i.COLOR_ATTACHMENT0+W;Z.length=Te.length,ie=!0}}else Z[0]!==i.BACK&&(Z[0]=i.BACK,ie=!0);ie&&i.drawBuffers(Z)}function de(B){return x!==B?(i.useProgram(B),x=B,!0):!1}const Se={[Gi]:i.FUNC_ADD,[Bm]:i.FUNC_SUBTRACT,[zm]:i.FUNC_REVERSE_SUBTRACT};Se[Hm]=i.MIN,Se[Gm]=i.MAX;const Ye={[Vm]:i.ZERO,[Wm]:i.ONE,[qm]:i.SRC_COLOR,[xl]:i.SRC_ALPHA,[Jm]:i.SRC_ALPHA_SATURATE,[Km]:i.DST_COLOR,[Xm]:i.DST_ALPHA,[jm]:i.ONE_MINUS_SRC_COLOR,[bl]:i.ONE_MINUS_SRC_ALPHA,[Ym]:i.ONE_MINUS_DST_COLOR,[$m]:i.ONE_MINUS_DST_ALPHA,[Zm]:i.CONSTANT_COLOR,[Qm]:i.ONE_MINUS_CONSTANT_COLOR,[eg]:i.CONSTANT_ALPHA,[tg]:i.ONE_MINUS_CONSTANT_ALPHA};function N(B,ye,Z,ie,Te,W,$e,St,Ft,Je){if(B===Ei){y===!0&&(ke(i.BLEND),y=!1);return}if(y===!1&&(ge(i.BLEND),y=!0),B!==Fm){if(B!==_||Je!==S){if((g!==Gi||w!==Gi)&&(i.blendEquation(i.FUNC_ADD),g=Gi,w=Gi),Je)switch(B){case Mn:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Mr:i.blendFunc(i.ONE,i.ONE);break;case Wa:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case qa:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case Mn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Mr:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Wa:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case qa:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}R=null,T=null,I=null,L=null,C.set(0,0,0),D=0,_=B,S=Je}return}Te=Te||ye,W=W||Z,$e=$e||ie,(ye!==g||Te!==w)&&(i.blendEquationSeparate(Se[ye],Se[Te]),g=ye,w=Te),(Z!==R||ie!==T||W!==I||$e!==L)&&(i.blendFuncSeparate(Ye[Z],Ye[ie],Ye[W],Ye[$e]),R=Z,T=ie,I=W,L=$e),(St.equals(C)===!1||Ft!==D)&&(i.blendColor(St.r,St.g,St.b,Ft),C.copy(St),D=Ft),_=B,S=!1}function Mt(B,ye){B.side===ti?ke(i.CULL_FACE):ge(i.CULL_FACE);let Z=B.side===un;ye&&(Z=!Z),it(Z),B.blending===Mn&&B.transparent===!1?N(Ei):N(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),a.setFunc(B.depthFunc),a.setTest(B.depthTest),a.setMask(B.depthWrite),r.setMask(B.colorWrite);const ie=B.stencilWrite;o.setTest(ie),ie&&(o.setMask(B.stencilWriteMask),o.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),o.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),gt(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?ge(i.SAMPLE_ALPHA_TO_COVERAGE):ke(i.SAMPLE_ALPHA_TO_COVERAGE)}function it(B){b!==B&&(B?i.frontFace(i.CW):i.frontFace(i.CCW),b=B)}function Le(B){B!==Nm?(ge(i.CULL_FACE),B!==O&&(B===_u?i.cullFace(i.BACK):B===km?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ke(i.CULL_FACE),O=B}function De(B){B!==F&&(J&&i.lineWidth(B),F=B)}function gt(B,ye,Z){B?(ge(i.POLYGON_OFFSET_FILL),(U!==ye||$!==Z)&&(i.polygonOffset(ye,Z),U=ye,$=Z)):ke(i.POLYGON_OFFSET_FILL)}function Ue(B){B?ge(i.SCISSOR_TEST):ke(i.SCISSOR_TEST)}function P(B){B===void 0&&(B=i.TEXTURE0+re-1),ee!==B&&(i.activeTexture(B),ee=B)}function M(B,ye,Z){Z===void 0&&(ee===null?Z=i.TEXTURE0+re-1:Z=ee);let ie=ne[Z];ie===void 0&&(ie={type:void 0,texture:void 0},ne[Z]=ie),(ie.type!==B||ie.texture!==ye)&&(ee!==Z&&(i.activeTexture(Z),ee=Z),i.bindTexture(B,ye||Me[B]),ie.type=B,ie.texture=ye)}function V(){const B=ne[ee];B!==void 0&&B.type!==void 0&&(i.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function oe(){try{i.compressedTexImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function le(){try{i.compressedTexImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function te(){try{i.texSubImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Fe(){try{i.texSubImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function _e(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Pe(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ot(){try{i.texStorage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function pe(){try{i.texStorage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Oe(){try{i.texImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ve(){try{i.texImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function qe(B){Re.equals(B)===!1&&(i.scissor(B.x,B.y,B.z,B.w),Re.copy(B))}function Ie(B){Q.equals(B)===!1&&(i.viewport(B.x,B.y,B.z,B.w),Q.copy(B))}function Ee(B,ye){let Z=l.get(ye);Z===void 0&&(Z=new WeakMap,l.set(ye,Z));let ie=Z.get(B);ie===void 0&&(ie=i.getUniformBlockIndex(ye,B.name),Z.set(B,ie))}function Qe(B,ye){const ie=l.get(ye).get(B);c.get(ye)!==ie&&(i.uniformBlockBinding(ye,ie,B.__bindingPointIndex),c.set(ye,ie))}function pt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),f={},ee=null,ne={},h={},d=new WeakMap,p=[],x=null,y=!1,_=null,g=null,R=null,T=null,w=null,I=null,L=null,C=new dt(0,0,0),D=0,S=!1,b=null,O=null,F=null,U=null,$=null,Re.set(0,0,i.canvas.width,i.canvas.height),Q.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ge,disable:ke,bindFramebuffer:ze,drawBuffers:ae,useProgram:de,setBlending:N,setMaterial:Mt,setFlipSided:it,setCullFace:Le,setLineWidth:De,setPolygonOffset:gt,setScissorTest:Ue,activeTexture:P,bindTexture:M,unbindTexture:V,compressedTexImage2D:oe,compressedTexImage3D:le,texImage2D:Oe,texImage3D:Ve,updateUBOMapping:Ee,uniformBlockBinding:Qe,texStorage2D:ot,texStorage3D:pe,texSubImage2D:te,texSubImage3D:Fe,compressedTexSubImage2D:_e,compressedTexSubImage3D:Pe,scissor:qe,viewport:Ie,reset:pt}}function Nx(i,e,t,n,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new yt,f=new WeakMap;let h;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(P,M){return p?new OffscreenCanvas(P,M):Tr("canvas")}function y(P,M,V){let oe=1;const le=Ue(P);if((le.width>V||le.height>V)&&(oe=V/Math.max(le.width,le.height)),oe<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const te=Math.floor(oe*le.width),Fe=Math.floor(oe*le.height);h===void 0&&(h=x(te,Fe));const _e=M?x(te,Fe):h;return _e.width=te,_e.height=Fe,_e.getContext("2d").drawImage(P,0,0,te,Fe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+le.width+"x"+le.height+") to ("+te+"x"+Fe+")."),_e}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+le.width+"x"+le.height+")."),P;return P}function _(P){return P.generateMipmaps}function g(P){i.generateMipmap(P)}function R(P){return P.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?i.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function T(P,M,V,oe,le=!1){if(P!==null){if(i[P]!==void 0)return i[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let te=M;if(M===i.RED&&(V===i.FLOAT&&(te=i.R32F),V===i.HALF_FLOAT&&(te=i.R16F),V===i.UNSIGNED_BYTE&&(te=i.R8)),M===i.RED_INTEGER&&(V===i.UNSIGNED_BYTE&&(te=i.R8UI),V===i.UNSIGNED_SHORT&&(te=i.R16UI),V===i.UNSIGNED_INT&&(te=i.R32UI),V===i.BYTE&&(te=i.R8I),V===i.SHORT&&(te=i.R16I),V===i.INT&&(te=i.R32I)),M===i.RG&&(V===i.FLOAT&&(te=i.RG32F),V===i.HALF_FLOAT&&(te=i.RG16F),V===i.UNSIGNED_BYTE&&(te=i.RG8)),M===i.RG_INTEGER&&(V===i.UNSIGNED_BYTE&&(te=i.RG8UI),V===i.UNSIGNED_SHORT&&(te=i.RG16UI),V===i.UNSIGNED_INT&&(te=i.RG32UI),V===i.BYTE&&(te=i.RG8I),V===i.SHORT&&(te=i.RG16I),V===i.INT&&(te=i.RG32I)),M===i.RGB_INTEGER&&(V===i.UNSIGNED_BYTE&&(te=i.RGB8UI),V===i.UNSIGNED_SHORT&&(te=i.RGB16UI),V===i.UNSIGNED_INT&&(te=i.RGB32UI),V===i.BYTE&&(te=i.RGB8I),V===i.SHORT&&(te=i.RGB16I),V===i.INT&&(te=i.RGB32I)),M===i.RGBA_INTEGER&&(V===i.UNSIGNED_BYTE&&(te=i.RGBA8UI),V===i.UNSIGNED_SHORT&&(te=i.RGBA16UI),V===i.UNSIGNED_INT&&(te=i.RGBA32UI),V===i.BYTE&&(te=i.RGBA8I),V===i.SHORT&&(te=i.RGBA16I),V===i.INT&&(te=i.RGBA32I)),M===i.RGB&&V===i.UNSIGNED_INT_5_9_9_9_REV&&(te=i.RGB9_E5),M===i.RGBA){const Fe=le?ja:ht.getTransfer(oe);V===i.FLOAT&&(te=i.RGBA32F),V===i.HALF_FLOAT&&(te=i.RGBA16F),V===i.UNSIGNED_BYTE&&(te=Fe===vt?i.SRGB8_ALPHA8:i.RGBA8),V===i.UNSIGNED_SHORT_4_4_4_4&&(te=i.RGBA4),V===i.UNSIGNED_SHORT_5_5_5_1&&(te=i.RGB5_A1)}return(te===i.R16F||te===i.R32F||te===i.RG16F||te===i.RG32F||te===i.RGBA16F||te===i.RGBA32F)&&e.get("EXT_color_buffer_float"),te}function w(P,M){let V;return P?M===null||M===Ji||M===Vs?V=i.DEPTH24_STENCIL8:M===si?V=i.DEPTH32F_STENCIL8:M===Er&&(V=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Ji||M===Vs?V=i.DEPTH_COMPONENT24:M===si?V=i.DEPTH_COMPONENT32F:M===Er&&(V=i.DEPTH_COMPONENT16),V}function I(P,M){return _(P)===!0||P.isFramebufferTexture&&P.minFilter!==Wt&&P.minFilter!==cn?Math.log2(Math.max(M.width,M.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?M.mipmaps.length:1}function L(P){const M=P.target;M.removeEventListener("dispose",L),D(M),M.isVideoTexture&&f.delete(M)}function C(P){const M=P.target;M.removeEventListener("dispose",C),b(M)}function D(P){const M=n.get(P);if(M.__webglInit===void 0)return;const V=P.source,oe=d.get(V);if(oe){const le=oe[M.__cacheKey];le.usedTimes--,le.usedTimes===0&&S(P),Object.keys(oe).length===0&&d.delete(V)}n.remove(P)}function S(P){const M=n.get(P);i.deleteTexture(M.__webglTexture);const V=P.source,oe=d.get(V);delete oe[M.__cacheKey],a.memory.textures--}function b(P){const M=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let oe=0;oe<6;oe++){if(Array.isArray(M.__webglFramebuffer[oe]))for(let le=0;le<M.__webglFramebuffer[oe].length;le++)i.deleteFramebuffer(M.__webglFramebuffer[oe][le]);else i.deleteFramebuffer(M.__webglFramebuffer[oe]);M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer[oe])}else{if(Array.isArray(M.__webglFramebuffer))for(let oe=0;oe<M.__webglFramebuffer.length;oe++)i.deleteFramebuffer(M.__webglFramebuffer[oe]);else i.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&i.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let oe=0;oe<M.__webglColorRenderbuffer.length;oe++)M.__webglColorRenderbuffer[oe]&&i.deleteRenderbuffer(M.__webglColorRenderbuffer[oe]);M.__webglDepthRenderbuffer&&i.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const V=P.textures;for(let oe=0,le=V.length;oe<le;oe++){const te=n.get(V[oe]);te.__webglTexture&&(i.deleteTexture(te.__webglTexture),a.memory.textures--),n.remove(V[oe])}n.remove(P)}let O=0;function F(){O=0}function U(){const P=O;return P>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+s.maxTextures),O+=1,P}function $(P){const M=[];return M.push(P.wrapS),M.push(P.wrapT),M.push(P.wrapR||0),M.push(P.magFilter),M.push(P.minFilter),M.push(P.anisotropy),M.push(P.internalFormat),M.push(P.format),M.push(P.type),M.push(P.generateMipmaps),M.push(P.premultiplyAlpha),M.push(P.flipY),M.push(P.unpackAlignment),M.push(P.colorSpace),M.join()}function re(P,M){const V=n.get(P);if(P.isVideoTexture&&De(P),P.isRenderTargetTexture===!1&&P.version>0&&V.__version!==P.version){const oe=P.image;if(oe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(oe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Q(V,P,M);return}}t.bindTexture(i.TEXTURE_2D,V.__webglTexture,i.TEXTURE0+M)}function J(P,M){const V=n.get(P);if(P.version>0&&V.__version!==P.version){Q(V,P,M);return}t.bindTexture(i.TEXTURE_2D_ARRAY,V.__webglTexture,i.TEXTURE0+M)}function fe(P,M){const V=n.get(P);if(P.version>0&&V.__version!==P.version){Q(V,P,M);return}t.bindTexture(i.TEXTURE_3D,V.__webglTexture,i.TEXTURE0+M)}function K(P,M){const V=n.get(P);if(P.version>0&&V.__version!==P.version){ue(V,P,M);return}t.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture,i.TEXTURE0+M)}const ee={[Sr]:i.REPEAT,[ii]:i.CLAMP_TO_EDGE,[Ll]:i.MIRRORED_REPEAT},ne={[Wt]:i.NEAREST,[fg]:i.NEAREST_MIPMAP_NEAREST,[Yr]:i.NEAREST_MIPMAP_LINEAR,[cn]:i.LINEAR,[Ao]:i.LINEAR_MIPMAP_NEAREST,[Gn]:i.LINEAR_MIPMAP_LINEAR},me={[gg]:i.NEVER,[wg]:i.ALWAYS,[_g]:i.LESS,[Zh]:i.LEQUAL,[vg]:i.EQUAL,[bg]:i.GEQUAL,[yg]:i.GREATER,[xg]:i.NOTEQUAL};function ve(P,M){if(M.type===si&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===cn||M.magFilter===Ao||M.magFilter===Yr||M.magFilter===Gn||M.minFilter===cn||M.minFilter===Ao||M.minFilter===Yr||M.minFilter===Gn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(P,i.TEXTURE_WRAP_S,ee[M.wrapS]),i.texParameteri(P,i.TEXTURE_WRAP_T,ee[M.wrapT]),(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)&&i.texParameteri(P,i.TEXTURE_WRAP_R,ee[M.wrapR]),i.texParameteri(P,i.TEXTURE_MAG_FILTER,ne[M.magFilter]),i.texParameteri(P,i.TEXTURE_MIN_FILTER,ne[M.minFilter]),M.compareFunction&&(i.texParameteri(P,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(P,i.TEXTURE_COMPARE_FUNC,me[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Wt||M.minFilter!==Yr&&M.minFilter!==Gn||M.type===si&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){const V=e.get("EXT_texture_filter_anisotropic");i.texParameterf(P,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function Re(P,M){let V=!1;P.__webglInit===void 0&&(P.__webglInit=!0,M.addEventListener("dispose",L));const oe=M.source;let le=d.get(oe);le===void 0&&(le={},d.set(oe,le));const te=$(M);if(te!==P.__cacheKey){le[te]===void 0&&(le[te]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,V=!0),le[te].usedTimes++;const Fe=le[P.__cacheKey];Fe!==void 0&&(le[P.__cacheKey].usedTimes--,Fe.usedTimes===0&&S(M)),P.__cacheKey=te,P.__webglTexture=le[te].texture}return V}function Q(P,M,V){let oe=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(oe=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(oe=i.TEXTURE_3D);const le=Re(P,M),te=M.source;t.bindTexture(oe,P.__webglTexture,i.TEXTURE0+V);const Fe=n.get(te);if(te.version!==Fe.__version||le===!0){t.activeTexture(i.TEXTURE0+V);const _e=ht.getPrimaries(ht.workingColorSpace),Pe=M.colorSpace===Mi?null:ht.getPrimaries(M.colorSpace),ot=M.colorSpace===Mi||_e===Pe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ot);let pe=y(M.image,!1,s.maxTextureSize);pe=gt(M,pe);const Oe=r.convert(M.format,M.colorSpace),Ve=r.convert(M.type);let qe=T(M.internalFormat,Oe,Ve,M.colorSpace,M.isVideoTexture);ve(oe,M);let Ie;const Ee=M.mipmaps,Qe=M.isVideoTexture!==!0,pt=Fe.__version===void 0||le===!0,B=te.dataReady,ye=I(M,pe);if(M.isDepthTexture)qe=w(M.format===Ws,M.type),pt&&(Qe?t.texStorage2D(i.TEXTURE_2D,1,qe,pe.width,pe.height):t.texImage2D(i.TEXTURE_2D,0,qe,pe.width,pe.height,0,Oe,Ve,null));else if(M.isDataTexture)if(Ee.length>0){Qe&&pt&&t.texStorage2D(i.TEXTURE_2D,ye,qe,Ee[0].width,Ee[0].height);for(let Z=0,ie=Ee.length;Z<ie;Z++)Ie=Ee[Z],Qe?B&&t.texSubImage2D(i.TEXTURE_2D,Z,0,0,Ie.width,Ie.height,Oe,Ve,Ie.data):t.texImage2D(i.TEXTURE_2D,Z,qe,Ie.width,Ie.height,0,Oe,Ve,Ie.data);M.generateMipmaps=!1}else Qe?(pt&&t.texStorage2D(i.TEXTURE_2D,ye,qe,pe.width,pe.height),B&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,pe.width,pe.height,Oe,Ve,pe.data)):t.texImage2D(i.TEXTURE_2D,0,qe,pe.width,pe.height,0,Oe,Ve,pe.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Qe&&pt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ye,qe,Ee[0].width,Ee[0].height,pe.depth);for(let Z=0,ie=Ee.length;Z<ie;Z++)if(Ie=Ee[Z],M.format!==bn)if(Oe!==null)if(Qe){if(B)if(M.layerUpdates.size>0){const Te=Bu(Ie.width,Ie.height,M.format,M.type);for(const W of M.layerUpdates){const $e=Ie.data.subarray(W*Te/Ie.data.BYTES_PER_ELEMENT,(W+1)*Te/Ie.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,W,Ie.width,Ie.height,1,Oe,$e)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,0,Ie.width,Ie.height,pe.depth,Oe,Ie.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Z,qe,Ie.width,Ie.height,pe.depth,0,Ie.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Qe?B&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,0,Ie.width,Ie.height,pe.depth,Oe,Ve,Ie.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Z,qe,Ie.width,Ie.height,pe.depth,0,Oe,Ve,Ie.data)}else{Qe&&pt&&t.texStorage2D(i.TEXTURE_2D,ye,qe,Ee[0].width,Ee[0].height);for(let Z=0,ie=Ee.length;Z<ie;Z++)Ie=Ee[Z],M.format!==bn?Oe!==null?Qe?B&&t.compressedTexSubImage2D(i.TEXTURE_2D,Z,0,0,Ie.width,Ie.height,Oe,Ie.data):t.compressedTexImage2D(i.TEXTURE_2D,Z,qe,Ie.width,Ie.height,0,Ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Qe?B&&t.texSubImage2D(i.TEXTURE_2D,Z,0,0,Ie.width,Ie.height,Oe,Ve,Ie.data):t.texImage2D(i.TEXTURE_2D,Z,qe,Ie.width,Ie.height,0,Oe,Ve,Ie.data)}else if(M.isDataArrayTexture)if(Qe){if(pt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ye,qe,pe.width,pe.height,pe.depth),B)if(M.layerUpdates.size>0){const Z=Bu(pe.width,pe.height,M.format,M.type);for(const ie of M.layerUpdates){const Te=pe.data.subarray(ie*Z/pe.data.BYTES_PER_ELEMENT,(ie+1)*Z/pe.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ie,pe.width,pe.height,1,Oe,Ve,Te)}M.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,pe.width,pe.height,pe.depth,Oe,Ve,pe.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,qe,pe.width,pe.height,pe.depth,0,Oe,Ve,pe.data);else if(M.isData3DTexture)Qe?(pt&&t.texStorage3D(i.TEXTURE_3D,ye,qe,pe.width,pe.height,pe.depth),B&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,pe.width,pe.height,pe.depth,Oe,Ve,pe.data)):t.texImage3D(i.TEXTURE_3D,0,qe,pe.width,pe.height,pe.depth,0,Oe,Ve,pe.data);else if(M.isFramebufferTexture){if(pt)if(Qe)t.texStorage2D(i.TEXTURE_2D,ye,qe,pe.width,pe.height);else{let Z=pe.width,ie=pe.height;for(let Te=0;Te<ye;Te++)t.texImage2D(i.TEXTURE_2D,Te,qe,Z,ie,0,Oe,Ve,null),Z>>=1,ie>>=1}}else if(Ee.length>0){if(Qe&&pt){const Z=Ue(Ee[0]);t.texStorage2D(i.TEXTURE_2D,ye,qe,Z.width,Z.height)}for(let Z=0,ie=Ee.length;Z<ie;Z++)Ie=Ee[Z],Qe?B&&t.texSubImage2D(i.TEXTURE_2D,Z,0,0,Oe,Ve,Ie):t.texImage2D(i.TEXTURE_2D,Z,qe,Oe,Ve,Ie);M.generateMipmaps=!1}else if(Qe){if(pt){const Z=Ue(pe);t.texStorage2D(i.TEXTURE_2D,ye,qe,Z.width,Z.height)}B&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Oe,Ve,pe)}else t.texImage2D(i.TEXTURE_2D,0,qe,Oe,Ve,pe);_(M)&&g(oe),Fe.__version=te.version,M.onUpdate&&M.onUpdate(M)}P.__version=M.version}function ue(P,M,V){if(M.image.length!==6)return;const oe=Re(P,M),le=M.source;t.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture,i.TEXTURE0+V);const te=n.get(le);if(le.version!==te.__version||oe===!0){t.activeTexture(i.TEXTURE0+V);const Fe=ht.getPrimaries(ht.workingColorSpace),_e=M.colorSpace===Mi?null:ht.getPrimaries(M.colorSpace),Pe=M.colorSpace===Mi||Fe===_e?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pe);const ot=M.isCompressedTexture||M.image[0].isCompressedTexture,pe=M.image[0]&&M.image[0].isDataTexture,Oe=[];for(let ie=0;ie<6;ie++)!ot&&!pe?Oe[ie]=y(M.image[ie],!0,s.maxCubemapSize):Oe[ie]=pe?M.image[ie].image:M.image[ie],Oe[ie]=gt(M,Oe[ie]);const Ve=Oe[0],qe=r.convert(M.format,M.colorSpace),Ie=r.convert(M.type),Ee=T(M.internalFormat,qe,Ie,M.colorSpace),Qe=M.isVideoTexture!==!0,pt=te.__version===void 0||oe===!0,B=le.dataReady;let ye=I(M,Ve);ve(i.TEXTURE_CUBE_MAP,M);let Z;if(ot){Qe&&pt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ye,Ee,Ve.width,Ve.height);for(let ie=0;ie<6;ie++){Z=Oe[ie].mipmaps;for(let Te=0;Te<Z.length;Te++){const W=Z[Te];M.format!==bn?qe!==null?Qe?B&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Te,0,0,W.width,W.height,qe,W.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Te,Ee,W.width,W.height,0,W.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Qe?B&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Te,0,0,W.width,W.height,qe,Ie,W.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Te,Ee,W.width,W.height,0,qe,Ie,W.data)}}}else{if(Z=M.mipmaps,Qe&&pt){Z.length>0&&ye++;const ie=Ue(Oe[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ye,Ee,ie.width,ie.height)}for(let ie=0;ie<6;ie++)if(pe){Qe?B&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,Oe[ie].width,Oe[ie].height,qe,Ie,Oe[ie].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,Ee,Oe[ie].width,Oe[ie].height,0,qe,Ie,Oe[ie].data);for(let Te=0;Te<Z.length;Te++){const $e=Z[Te].image[ie].image;Qe?B&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Te+1,0,0,$e.width,$e.height,qe,Ie,$e.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Te+1,Ee,$e.width,$e.height,0,qe,Ie,$e.data)}}else{Qe?B&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,qe,Ie,Oe[ie]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,Ee,qe,Ie,Oe[ie]);for(let Te=0;Te<Z.length;Te++){const W=Z[Te];Qe?B&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Te+1,0,0,qe,Ie,W.image[ie]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Te+1,Ee,qe,Ie,W.image[ie])}}}_(M)&&g(i.TEXTURE_CUBE_MAP),te.__version=le.version,M.onUpdate&&M.onUpdate(M)}P.__version=M.version}function Me(P,M,V,oe,le,te){const Fe=r.convert(V.format,V.colorSpace),_e=r.convert(V.type),Pe=T(V.internalFormat,Fe,_e,V.colorSpace),ot=n.get(M),pe=n.get(V);if(pe.__renderTarget=M,!ot.__hasExternalTextures){const Oe=Math.max(1,M.width>>te),Ve=Math.max(1,M.height>>te);le===i.TEXTURE_3D||le===i.TEXTURE_2D_ARRAY?t.texImage3D(le,te,Pe,Oe,Ve,M.depth,0,Fe,_e,null):t.texImage2D(le,te,Pe,Oe,Ve,0,Fe,_e,null)}t.bindFramebuffer(i.FRAMEBUFFER,P),Le(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,oe,le,pe.__webglTexture,0,it(M)):(le===i.TEXTURE_2D||le>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&le<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,oe,le,pe.__webglTexture,te),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ge(P,M,V){if(i.bindRenderbuffer(i.RENDERBUFFER,P),M.depthBuffer){const oe=M.depthTexture,le=oe&&oe.isDepthTexture?oe.type:null,te=w(M.stencilBuffer,le),Fe=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_e=it(M);Le(M)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,_e,te,M.width,M.height):V?i.renderbufferStorageMultisample(i.RENDERBUFFER,_e,te,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,te,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Fe,i.RENDERBUFFER,P)}else{const oe=M.textures;for(let le=0;le<oe.length;le++){const te=oe[le],Fe=r.convert(te.format,te.colorSpace),_e=r.convert(te.type),Pe=T(te.internalFormat,Fe,_e,te.colorSpace),ot=it(M);V&&Le(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ot,Pe,M.width,M.height):Le(M)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ot,Pe,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,Pe,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ke(P,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,P),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const oe=n.get(M.depthTexture);oe.__renderTarget=M,(!oe.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),re(M.depthTexture,0);const le=oe.__webglTexture,te=it(M);if(M.depthTexture.format===Ns)Le(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,le,0,te):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,le,0);else if(M.depthTexture.format===Ws)Le(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,le,0,te):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,le,0);else throw new Error("Unknown depthTexture format")}function ze(P){const M=n.get(P),V=P.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==P.depthTexture){const oe=P.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),oe){const le=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,oe.removeEventListener("dispose",le)};oe.addEventListener("dispose",le),M.__depthDisposeCallback=le}M.__boundDepthTexture=oe}if(P.depthTexture&&!M.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");ke(M.__webglFramebuffer,P)}else if(V){M.__webglDepthbuffer=[];for(let oe=0;oe<6;oe++)if(t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[oe]),M.__webglDepthbuffer[oe]===void 0)M.__webglDepthbuffer[oe]=i.createRenderbuffer(),ge(M.__webglDepthbuffer[oe],P,!1);else{const le=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,te=M.__webglDepthbuffer[oe];i.bindRenderbuffer(i.RENDERBUFFER,te),i.framebufferRenderbuffer(i.FRAMEBUFFER,le,i.RENDERBUFFER,te)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=i.createRenderbuffer(),ge(M.__webglDepthbuffer,P,!1);else{const oe=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,le=M.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,le),i.framebufferRenderbuffer(i.FRAMEBUFFER,oe,i.RENDERBUFFER,le)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function ae(P,M,V){const oe=n.get(P);M!==void 0&&Me(oe.__webglFramebuffer,P,P.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),V!==void 0&&ze(P)}function de(P){const M=P.texture,V=n.get(P),oe=n.get(M);P.addEventListener("dispose",C);const le=P.textures,te=P.isWebGLCubeRenderTarget===!0,Fe=le.length>1;if(Fe||(oe.__webglTexture===void 0&&(oe.__webglTexture=i.createTexture()),oe.__version=M.version,a.memory.textures++),te){V.__webglFramebuffer=[];for(let _e=0;_e<6;_e++)if(M.mipmaps&&M.mipmaps.length>0){V.__webglFramebuffer[_e]=[];for(let Pe=0;Pe<M.mipmaps.length;Pe++)V.__webglFramebuffer[_e][Pe]=i.createFramebuffer()}else V.__webglFramebuffer[_e]=i.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){V.__webglFramebuffer=[];for(let _e=0;_e<M.mipmaps.length;_e++)V.__webglFramebuffer[_e]=i.createFramebuffer()}else V.__webglFramebuffer=i.createFramebuffer();if(Fe)for(let _e=0,Pe=le.length;_e<Pe;_e++){const ot=n.get(le[_e]);ot.__webglTexture===void 0&&(ot.__webglTexture=i.createTexture(),a.memory.textures++)}if(P.samples>0&&Le(P)===!1){V.__webglMultisampledFramebuffer=i.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let _e=0;_e<le.length;_e++){const Pe=le[_e];V.__webglColorRenderbuffer[_e]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,V.__webglColorRenderbuffer[_e]);const ot=r.convert(Pe.format,Pe.colorSpace),pe=r.convert(Pe.type),Oe=T(Pe.internalFormat,ot,pe,Pe.colorSpace,P.isXRRenderTarget===!0),Ve=it(P);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ve,Oe,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.RENDERBUFFER,V.__webglColorRenderbuffer[_e])}i.bindRenderbuffer(i.RENDERBUFFER,null),P.depthBuffer&&(V.__webglDepthRenderbuffer=i.createRenderbuffer(),ge(V.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(te){t.bindTexture(i.TEXTURE_CUBE_MAP,oe.__webglTexture),ve(i.TEXTURE_CUBE_MAP,M);for(let _e=0;_e<6;_e++)if(M.mipmaps&&M.mipmaps.length>0)for(let Pe=0;Pe<M.mipmaps.length;Pe++)Me(V.__webglFramebuffer[_e][Pe],P,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Pe);else Me(V.__webglFramebuffer[_e],P,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0);_(M)&&g(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Fe){for(let _e=0,Pe=le.length;_e<Pe;_e++){const ot=le[_e],pe=n.get(ot);t.bindTexture(i.TEXTURE_2D,pe.__webglTexture),ve(i.TEXTURE_2D,ot),Me(V.__webglFramebuffer,P,ot,i.COLOR_ATTACHMENT0+_e,i.TEXTURE_2D,0),_(ot)&&g(i.TEXTURE_2D)}t.unbindTexture()}else{let _e=i.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(_e=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(_e,oe.__webglTexture),ve(_e,M),M.mipmaps&&M.mipmaps.length>0)for(let Pe=0;Pe<M.mipmaps.length;Pe++)Me(V.__webglFramebuffer[Pe],P,M,i.COLOR_ATTACHMENT0,_e,Pe);else Me(V.__webglFramebuffer,P,M,i.COLOR_ATTACHMENT0,_e,0);_(M)&&g(_e),t.unbindTexture()}P.depthBuffer&&ze(P)}function Se(P){const M=P.textures;for(let V=0,oe=M.length;V<oe;V++){const le=M[V];if(_(le)){const te=R(P),Fe=n.get(le).__webglTexture;t.bindTexture(te,Fe),g(te),t.unbindTexture()}}}const Ye=[],N=[];function Mt(P){if(P.samples>0){if(Le(P)===!1){const M=P.textures,V=P.width,oe=P.height;let le=i.COLOR_BUFFER_BIT;const te=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Fe=n.get(P),_e=M.length>1;if(_e)for(let Pe=0;Pe<M.length;Pe++)t.bindFramebuffer(i.FRAMEBUFFER,Fe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Fe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Fe.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Fe.__webglFramebuffer);for(let Pe=0;Pe<M.length;Pe++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(le|=i.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(le|=i.STENCIL_BUFFER_BIT)),_e){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Fe.__webglColorRenderbuffer[Pe]);const ot=n.get(M[Pe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ot,0)}i.blitFramebuffer(0,0,V,oe,0,0,V,oe,le,i.NEAREST),c===!0&&(Ye.length=0,N.length=0,Ye.push(i.COLOR_ATTACHMENT0+Pe),P.depthBuffer&&P.resolveDepthBuffer===!1&&(Ye.push(te),N.push(te),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,N)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ye))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),_e)for(let Pe=0;Pe<M.length;Pe++){t.bindFramebuffer(i.FRAMEBUFFER,Fe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pe,i.RENDERBUFFER,Fe.__webglColorRenderbuffer[Pe]);const ot=n.get(M[Pe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Fe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pe,i.TEXTURE_2D,ot,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Fe.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&c){const M=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[M])}}}function it(P){return Math.min(s.maxSamples,P.samples)}function Le(P){const M=n.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function De(P){const M=a.render.frame;f.get(P)!==M&&(f.set(P,M),P.update())}function gt(P,M){const V=P.colorSpace,oe=P.format,le=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||V!==qs&&V!==Mi&&(ht.getTransfer(V)===vt?(oe!==bn||le!==qn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),M}function Ue(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(l.width=P.naturalWidth||P.width,l.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(l.width=P.displayWidth,l.height=P.displayHeight):(l.width=P.width,l.height=P.height),l}this.allocateTextureUnit=U,this.resetTextureUnits=F,this.setTexture2D=re,this.setTexture2DArray=J,this.setTexture3D=fe,this.setTextureCube=K,this.rebindTextures=ae,this.setupRenderTarget=de,this.updateRenderTargetMipmap=Se,this.updateMultisampleRenderTarget=Mt,this.setupDepthRenderbuffer=ze,this.setupFrameBufferTexture=Me,this.useMultisampledRTT=Le}function kx(i,e){function t(n,s=Mi){let r;const a=ht.getTransfer(s);if(n===qn)return i.UNSIGNED_BYTE;if(n===Lc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ic)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Wh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Gh)return i.BYTE;if(n===Vh)return i.SHORT;if(n===Er)return i.UNSIGNED_SHORT;if(n===Pc)return i.INT;if(n===Ji)return i.UNSIGNED_INT;if(n===si)return i.FLOAT;if(n===Ir)return i.HALF_FLOAT;if(n===qh)return i.ALPHA;if(n===jh)return i.RGB;if(n===bn)return i.RGBA;if(n===Xh)return i.LUMINANCE;if(n===$h)return i.LUMINANCE_ALPHA;if(n===Ns)return i.DEPTH_COMPONENT;if(n===Ws)return i.DEPTH_STENCIL;if(n===Kh)return i.RED;if(n===Dc)return i.RED_INTEGER;if(n===Yh)return i.RG;if(n===Oc)return i.RG_INTEGER;if(n===Nc)return i.RGBA_INTEGER;if(n===Pa||n===La||n===Ia||n===Da)if(a===vt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Pa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===La)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ia)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Da)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Pa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===La)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ia)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Da)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Il||n===Dl||n===Ol||n===Nl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Il)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Dl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ol)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Nl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===kl||n===Ul||n===Fl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===kl||n===Ul)return a===vt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Fl)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Bl||n===zl||n===Hl||n===Gl||n===Vl||n===Wl||n===ql||n===jl||n===Xl||n===$l||n===Kl||n===Yl||n===Jl||n===Zl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Bl)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===zl)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Hl)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Gl)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Vl)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Wl)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ql)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===jl)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Xl)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===$l)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Kl)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Yl)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Jl)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Zl)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Oa||n===Ql||n===ec)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Oa)return a===vt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ql)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ec)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Jh||n===tc||n===nc||n===ic)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Oa)return r.COMPRESSED_RED_RGTC1_EXT;if(n===tc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===nc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ic)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Vs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const Ux={type:"move"};class nl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new pa,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new pa,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new pa,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const y of e.hand.values()){const _=t.getJointPose(y,n),g=this._getHandJoint(l,y);_!==null&&(g.matrix.fromArray(_.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=_.radius),g.visible=_!==null}const f=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=f.position.distanceTo(h.position),p=.02,x=.005;l.inputState.pinching&&d>p+x?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=p-x&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Ux)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new pa;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Fx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Bx=`
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

}`;class zx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const s=new Xt,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new kn({vertexShader:Fx,fragmentShader:Bx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new sn(new hi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Hx extends Qs{constructor(e,t){super();const n=this;let s=null,r=1,a=null,o="local-floor",c=1,l=null,f=null,h=null,d=null,p=null,x=null;const y=new zx,_=t.getContextAttributes();let g=null,R=null;const T=[],w=[],I=new yt;let L=null;const C=new Dn;C.viewport=new Lt;const D=new Dn;D.viewport=new Lt;const S=[C,D],b=new l0;let O=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let ue=T[Q];return ue===void 0&&(ue=new nl,T[Q]=ue),ue.getTargetRaySpace()},this.getControllerGrip=function(Q){let ue=T[Q];return ue===void 0&&(ue=new nl,T[Q]=ue),ue.getGripSpace()},this.getHand=function(Q){let ue=T[Q];return ue===void 0&&(ue=new nl,T[Q]=ue),ue.getHandSpace()};function U(Q){const ue=w.indexOf(Q.inputSource);if(ue===-1)return;const Me=T[ue];Me!==void 0&&(Me.update(Q.inputSource,Q.frame,l||a),Me.dispatchEvent({type:Q.type,data:Q.inputSource}))}function $(){s.removeEventListener("select",U),s.removeEventListener("selectstart",U),s.removeEventListener("selectend",U),s.removeEventListener("squeeze",U),s.removeEventListener("squeezestart",U),s.removeEventListener("squeezeend",U),s.removeEventListener("end",$),s.removeEventListener("inputsourceschange",re);for(let Q=0;Q<T.length;Q++){const ue=w[Q];ue!==null&&(w[Q]=null,T[Q].disconnect(ue))}O=null,F=null,y.reset(),e.setRenderTarget(g),p=null,d=null,h=null,s=null,R=null,Re.stop(),n.isPresenting=!1,e.setPixelRatio(L),e.setSize(I.width,I.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){r=Q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){o=Q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(Q){l=Q},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return h},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function(Q){if(s=Q,s!==null){if(g=e.getRenderTarget(),s.addEventListener("select",U),s.addEventListener("selectstart",U),s.addEventListener("selectend",U),s.addEventListener("squeeze",U),s.addEventListener("squeezestart",U),s.addEventListener("squeezeend",U),s.addEventListener("end",$),s.addEventListener("inputsourceschange",re),_.xrCompatible!==!0&&await t.makeXRCompatible(),L=e.getPixelRatio(),e.getSize(I),s.enabledFeatures!==void 0&&s.enabledFeatures.includes("layers")){let Me=null,ge=null,ke=null;_.depth&&(ke=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Me=_.stencil?Ws:Ns,ge=_.stencil?Vs:Ji);const ze={colorFormat:t.RGBA8,depthFormat:ke,scaleFactor:r};h=new XRWebGLBinding(s,t),d=h.createProjectionLayer(ze),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),R=new Ri(d.textureWidth,d.textureHeight,{format:bn,type:qn,depthTexture:new fd(d.textureWidth,d.textureHeight,ge,void 0,void 0,void 0,void 0,void 0,void 0,Me),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}else{const Me={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,Me),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),R=new Ri(p.framebufferWidth,p.framebufferHeight,{format:bn,type:qn,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}R.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),Re.setContext(s),Re.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function re(Q){for(let ue=0;ue<Q.removed.length;ue++){const Me=Q.removed[ue],ge=w.indexOf(Me);ge>=0&&(w[ge]=null,T[ge].disconnect(Me))}for(let ue=0;ue<Q.added.length;ue++){const Me=Q.added[ue];let ge=w.indexOf(Me);if(ge===-1){for(let ze=0;ze<T.length;ze++)if(ze>=w.length){w.push(Me),ge=ze;break}else if(w[ze]===null){w[ze]=Me,ge=ze;break}if(ge===-1)break}const ke=T[ge];ke&&ke.connect(Me)}}const J=new X,fe=new X;function K(Q,ue,Me){J.setFromMatrixPosition(ue.matrixWorld),fe.setFromMatrixPosition(Me.matrixWorld);const ge=J.distanceTo(fe),ke=ue.projectionMatrix.elements,ze=Me.projectionMatrix.elements,ae=ke[14]/(ke[10]-1),de=ke[14]/(ke[10]+1),Se=(ke[9]+1)/ke[5],Ye=(ke[9]-1)/ke[5],N=(ke[8]-1)/ke[0],Mt=(ze[8]+1)/ze[0],it=ae*N,Le=ae*Mt,De=ge/(-N+Mt),gt=De*-N;if(ue.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(gt),Q.translateZ(De),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),ke[10]===-1)Q.projectionMatrix.copy(ue.projectionMatrix),Q.projectionMatrixInverse.copy(ue.projectionMatrixInverse);else{const Ue=ae+De,P=de+De,M=it-gt,V=Le+(ge-gt),oe=Se*de/P*Ue,le=Ye*de/P*Ue;Q.projectionMatrix.makePerspective(M,V,oe,le,Ue,P),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function ee(Q,ue){ue===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(ue.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(s===null)return;let ue=Q.near,Me=Q.far;y.texture!==null&&(y.depthNear>0&&(ue=y.depthNear),y.depthFar>0&&(Me=y.depthFar)),b.near=D.near=C.near=ue,b.far=D.far=C.far=Me,(O!==b.near||F!==b.far)&&(s.updateRenderState({depthNear:b.near,depthFar:b.far}),O=b.near,F=b.far),C.layers.mask=Q.layers.mask|2,D.layers.mask=Q.layers.mask|4,b.layers.mask=C.layers.mask|D.layers.mask;const ge=Q.parent,ke=b.cameras;ee(b,ge);for(let ze=0;ze<ke.length;ze++)ee(ke[ze],ge);ke.length===2?K(b,C,D):b.projectionMatrix.copy(C.projectionMatrix),ne(Q,b,ge)};function ne(Q,ue,Me){Me===null?Q.matrix.copy(ue.matrixWorld):(Q.matrix.copy(Me.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(ue.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(ue.projectionMatrix),Q.projectionMatrixInverse.copy(ue.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=sc*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(d===null&&p===null))return c},this.setFoveation=function(Q){c=Q,d!==null&&(d.fixedFoveation=Q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Q)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(b)};let me=null;function ve(Q,ue){if(f=ue.getViewerPose(l||a),x=ue,f!==null){const Me=f.views;p!==null&&(e.setRenderTargetFramebuffer(R,p.framebuffer),e.setRenderTarget(R));let ge=!1;Me.length!==b.cameras.length&&(b.cameras.length=0,ge=!0);for(let ze=0;ze<Me.length;ze++){const ae=Me[ze];let de=null;if(p!==null)de=p.getViewport(ae);else{const Ye=h.getViewSubImage(d,ae);de=Ye.viewport,ze===0&&(e.setRenderTargetTextures(R,Ye.colorTexture,d.ignoreDepthValues?void 0:Ye.depthStencilTexture),e.setRenderTarget(R))}let Se=S[ze];Se===void 0&&(Se=new Dn,Se.layers.enable(ze),Se.viewport=new Lt,S[ze]=Se),Se.matrix.fromArray(ae.transform.matrix),Se.matrix.decompose(Se.position,Se.quaternion,Se.scale),Se.projectionMatrix.fromArray(ae.projectionMatrix),Se.projectionMatrixInverse.copy(Se.projectionMatrix).invert(),Se.viewport.set(de.x,de.y,de.width,de.height),ze===0&&(b.matrix.copy(Se.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),ge===!0&&b.cameras.push(Se)}const ke=s.enabledFeatures;if(ke&&ke.includes("depth-sensing")){const ze=h.getDepthInformation(Me[0]);ze&&ze.isValid&&ze.texture&&y.init(e,ze,s.renderState)}}for(let Me=0;Me<T.length;Me++){const ge=w[Me],ke=T[Me];ge!==null&&ke!==void 0&&ke.update(ge,ue,l||a)}me&&me(Q,ue),ue.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ue}),x=null}const Re=new dd;Re.setAnimationLoop(ve),this.setAnimationLoop=function(Q){me=Q},this.dispose=function(){}}}const Bi=new fi,Gx=new Nt;function Vx(i,e){function t(_,g){_.matrixAutoUpdate===!0&&_.updateMatrix(),g.value.copy(_.matrix)}function n(_,g){g.color.getRGB(_.fogColor.value,ad(i)),g.isFog?(_.fogNear.value=g.near,_.fogFar.value=g.far):g.isFogExp2&&(_.fogDensity.value=g.density)}function s(_,g,R,T,w){g.isMeshBasicMaterial||g.isMeshLambertMaterial?r(_,g):g.isMeshToonMaterial?(r(_,g),h(_,g)):g.isMeshPhongMaterial?(r(_,g),f(_,g)):g.isMeshStandardMaterial?(r(_,g),d(_,g),g.isMeshPhysicalMaterial&&p(_,g,w)):g.isMeshMatcapMaterial?(r(_,g),x(_,g)):g.isMeshDepthMaterial?r(_,g):g.isMeshDistanceMaterial?(r(_,g),y(_,g)):g.isMeshNormalMaterial?r(_,g):g.isLineBasicMaterial?(a(_,g),g.isLineDashedMaterial&&o(_,g)):g.isPointsMaterial?c(_,g,R,T):g.isSpriteMaterial?l(_,g):g.isShadowMaterial?(_.color.value.copy(g.color),_.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(_,g){_.opacity.value=g.opacity,g.color&&_.diffuse.value.copy(g.color),g.emissive&&_.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(_.map.value=g.map,t(g.map,_.mapTransform)),g.alphaMap&&(_.alphaMap.value=g.alphaMap,t(g.alphaMap,_.alphaMapTransform)),g.bumpMap&&(_.bumpMap.value=g.bumpMap,t(g.bumpMap,_.bumpMapTransform),_.bumpScale.value=g.bumpScale,g.side===un&&(_.bumpScale.value*=-1)),g.normalMap&&(_.normalMap.value=g.normalMap,t(g.normalMap,_.normalMapTransform),_.normalScale.value.copy(g.normalScale),g.side===un&&_.normalScale.value.negate()),g.displacementMap&&(_.displacementMap.value=g.displacementMap,t(g.displacementMap,_.displacementMapTransform),_.displacementScale.value=g.displacementScale,_.displacementBias.value=g.displacementBias),g.emissiveMap&&(_.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,_.emissiveMapTransform)),g.specularMap&&(_.specularMap.value=g.specularMap,t(g.specularMap,_.specularMapTransform)),g.alphaTest>0&&(_.alphaTest.value=g.alphaTest);const R=e.get(g),T=R.envMap,w=R.envMapRotation;T&&(_.envMap.value=T,Bi.copy(w),Bi.x*=-1,Bi.y*=-1,Bi.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Bi.y*=-1,Bi.z*=-1),_.envMapRotation.value.setFromMatrix4(Gx.makeRotationFromEuler(Bi)),_.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,_.reflectivity.value=g.reflectivity,_.ior.value=g.ior,_.refractionRatio.value=g.refractionRatio),g.lightMap&&(_.lightMap.value=g.lightMap,_.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,_.lightMapTransform)),g.aoMap&&(_.aoMap.value=g.aoMap,_.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,_.aoMapTransform))}function a(_,g){_.diffuse.value.copy(g.color),_.opacity.value=g.opacity,g.map&&(_.map.value=g.map,t(g.map,_.mapTransform))}function o(_,g){_.dashSize.value=g.dashSize,_.totalSize.value=g.dashSize+g.gapSize,_.scale.value=g.scale}function c(_,g,R,T){_.diffuse.value.copy(g.color),_.opacity.value=g.opacity,_.size.value=g.size*R,_.scale.value=T*.5,g.map&&(_.map.value=g.map,t(g.map,_.uvTransform)),g.alphaMap&&(_.alphaMap.value=g.alphaMap,t(g.alphaMap,_.alphaMapTransform)),g.alphaTest>0&&(_.alphaTest.value=g.alphaTest)}function l(_,g){_.diffuse.value.copy(g.color),_.opacity.value=g.opacity,_.rotation.value=g.rotation,g.map&&(_.map.value=g.map,t(g.map,_.mapTransform)),g.alphaMap&&(_.alphaMap.value=g.alphaMap,t(g.alphaMap,_.alphaMapTransform)),g.alphaTest>0&&(_.alphaTest.value=g.alphaTest)}function f(_,g){_.specular.value.copy(g.specular),_.shininess.value=Math.max(g.shininess,1e-4)}function h(_,g){g.gradientMap&&(_.gradientMap.value=g.gradientMap)}function d(_,g){_.metalness.value=g.metalness,g.metalnessMap&&(_.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,_.metalnessMapTransform)),_.roughness.value=g.roughness,g.roughnessMap&&(_.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,_.roughnessMapTransform)),g.envMap&&(_.envMapIntensity.value=g.envMapIntensity)}function p(_,g,R){_.ior.value=g.ior,g.sheen>0&&(_.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),_.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(_.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,_.sheenColorMapTransform)),g.sheenRoughnessMap&&(_.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,_.sheenRoughnessMapTransform))),g.clearcoat>0&&(_.clearcoat.value=g.clearcoat,_.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(_.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,_.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(_.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===un&&_.clearcoatNormalScale.value.negate())),g.dispersion>0&&(_.dispersion.value=g.dispersion),g.iridescence>0&&(_.iridescence.value=g.iridescence,_.iridescenceIOR.value=g.iridescenceIOR,_.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(_.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,_.iridescenceMapTransform)),g.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),g.transmission>0&&(_.transmission.value=g.transmission,_.transmissionSamplerMap.value=R.texture,_.transmissionSamplerSize.value.set(R.width,R.height),g.transmissionMap&&(_.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,_.transmissionMapTransform)),_.thickness.value=g.thickness,g.thicknessMap&&(_.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=g.attenuationDistance,_.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(_.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(_.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=g.specularIntensity,_.specularColor.value.copy(g.specularColor),g.specularColorMap&&(_.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,_.specularColorMapTransform)),g.specularIntensityMap&&(_.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,_.specularIntensityMapTransform))}function x(_,g){g.matcap&&(_.matcap.value=g.matcap)}function y(_,g){const R=e.get(g).light;_.referencePosition.value.setFromMatrixPosition(R.matrixWorld),_.nearDistance.value=R.shadow.camera.near,_.farDistance.value=R.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Wx(i,e,t,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(R,T){const w=T.program;n.uniformBlockBinding(R,w)}function l(R,T){let w=s[R.id];w===void 0&&(x(R),w=f(R),s[R.id]=w,R.addEventListener("dispose",_));const I=T.program;n.updateUBOMapping(R,I);const L=e.render.frame;r[R.id]!==L&&(d(R),r[R.id]=L)}function f(R){const T=h();R.__bindingPointIndex=T;const w=i.createBuffer(),I=R.__size,L=R.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,I,L),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,T,w),w}function h(){for(let R=0;R<o;R++)if(a.indexOf(R)===-1)return a.push(R),R;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(R){const T=s[R.id],w=R.uniforms,I=R.__cache;i.bindBuffer(i.UNIFORM_BUFFER,T);for(let L=0,C=w.length;L<C;L++){const D=Array.isArray(w[L])?w[L]:[w[L]];for(let S=0,b=D.length;S<b;S++){const O=D[S];if(p(O,L,S,I)===!0){const F=O.__offset,U=Array.isArray(O.value)?O.value:[O.value];let $=0;for(let re=0;re<U.length;re++){const J=U[re],fe=y(J);typeof J=="number"||typeof J=="boolean"?(O.__data[0]=J,i.bufferSubData(i.UNIFORM_BUFFER,F+$,O.__data)):J.isMatrix3?(O.__data[0]=J.elements[0],O.__data[1]=J.elements[1],O.__data[2]=J.elements[2],O.__data[3]=0,O.__data[4]=J.elements[3],O.__data[5]=J.elements[4],O.__data[6]=J.elements[5],O.__data[7]=0,O.__data[8]=J.elements[6],O.__data[9]=J.elements[7],O.__data[10]=J.elements[8],O.__data[11]=0):(J.toArray(O.__data,$),$+=fe.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,F,O.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(R,T,w,I){const L=R.value,C=T+"_"+w;if(I[C]===void 0)return typeof L=="number"||typeof L=="boolean"?I[C]=L:I[C]=L.clone(),!0;{const D=I[C];if(typeof L=="number"||typeof L=="boolean"){if(D!==L)return I[C]=L,!0}else if(D.equals(L)===!1)return D.copy(L),!0}return!1}function x(R){const T=R.uniforms;let w=0;const I=16;for(let C=0,D=T.length;C<D;C++){const S=Array.isArray(T[C])?T[C]:[T[C]];for(let b=0,O=S.length;b<O;b++){const F=S[b],U=Array.isArray(F.value)?F.value:[F.value];for(let $=0,re=U.length;$<re;$++){const J=U[$],fe=y(J),K=w%I,ee=K%fe.boundary,ne=K+ee;w+=ee,ne!==0&&I-ne<fe.storage&&(w+=I-ne),F.__data=new Float32Array(fe.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=w,w+=fe.storage}}}const L=w%I;return L>0&&(w+=I-L),R.__size=w,R.__cache={},this}function y(R){const T={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(T.boundary=4,T.storage=4):R.isVector2?(T.boundary=8,T.storage=8):R.isVector3||R.isColor?(T.boundary=16,T.storage=12):R.isVector4?(T.boundary=16,T.storage=16):R.isMatrix3?(T.boundary=48,T.storage=48):R.isMatrix4?(T.boundary=64,T.storage=64):R.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",R),T}function _(R){const T=R.target;T.removeEventListener("dispose",_);const w=a.indexOf(T.__bindingPointIndex);a.splice(w,1),i.deleteBuffer(s[T.id]),delete s[T.id],delete r[T.id]}function g(){for(const R in s)i.deleteBuffer(s[R]);a=[],s={},r={}}return{bind:c,update:l,dispose:g}}class qx{constructor(e={}){const{canvas:t=Eg(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;const x=new Uint32Array(4),y=new Int32Array(4);let _=null,g=null;const R=[],T=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=jt,this.toneMapping=oi,this.toneMappingExposure=1;const w=this;let I=!1,L=0,C=0,D=null,S=-1,b=null;const O=new Lt,F=new Lt;let U=null;const $=new dt(0);let re=0,J=t.width,fe=t.height,K=1,ee=null,ne=null;const me=new Lt(0,0,J,fe),ve=new Lt(0,0,J,fe);let Re=!1;const Q=new ud;let ue=!1,Me=!1;this.transmissionResolutionScale=1;const ge=new Nt,ke=new Nt,ze=new X,ae=new Lt,de={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Se=!1;function Ye(){return D===null?K:1}let N=n;function Mt(E,z){return t.getContext(E,z)}try{const E={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:f,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Cc}`),t.addEventListener("webglcontextlost",ie,!1),t.addEventListener("webglcontextrestored",Te,!1),t.addEventListener("webglcontextcreationerror",W,!1),N===null){const z="webgl2";if(N=Mt(z,E),N===null)throw Mt(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let it,Le,De,gt,Ue,P,M,V,oe,le,te,Fe,_e,Pe,ot,pe,Oe,Ve,qe,Ie,Ee,Qe,pt,B;function ye(){it=new ey(N),it.init(),Qe=new kx(N,it),Le=new $v(N,it,e,Qe),De=new Ox(N,it),Le.reverseDepthBuffer&&d&&De.buffers.depth.setReversed(!0),gt=new iy(N),Ue=new bx,P=new Nx(N,it,De,Ue,Le,Qe,gt),M=new Yv(w),V=new Qv(w),oe=new u0(N),pt=new jv(N,oe),le=new ty(N,oe,gt,pt),te=new ry(N,le,oe,gt),qe=new sy(N,Le,P),pe=new Kv(Ue),Fe=new xx(w,M,V,it,Le,pt,pe),_e=new Vx(w,Ue),Pe=new Mx,ot=new Cx(it),Ve=new qv(w,M,V,De,te,p,c),Oe=new Ix(w,te,Le),B=new Wx(N,gt,Le,De),Ie=new Xv(N,it,gt),Ee=new ny(N,it,gt),gt.programs=Fe.programs,w.capabilities=Le,w.extensions=it,w.properties=Ue,w.renderLists=Pe,w.shadowMap=Oe,w.state=De,w.info=gt}ye();const Z=new Hx(w,N);this.xr=Z,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const E=it.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=it.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(E){E!==void 0&&(K=E,this.setSize(J,fe,!1))},this.getSize=function(E){return E.set(J,fe)},this.setSize=function(E,z,q=!0){if(Z.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}J=E,fe=z,t.width=Math.floor(E*K),t.height=Math.floor(z*K),q===!0&&(t.style.width=E+"px",t.style.height=z+"px"),this.setViewport(0,0,E,z)},this.getDrawingBufferSize=function(E){return E.set(J*K,fe*K).floor()},this.setDrawingBufferSize=function(E,z,q){J=E,fe=z,K=q,t.width=Math.floor(E*q),t.height=Math.floor(z*q),this.setViewport(0,0,E,z)},this.getCurrentViewport=function(E){return E.copy(O)},this.getViewport=function(E){return E.copy(me)},this.setViewport=function(E,z,q,j){E.isVector4?me.set(E.x,E.y,E.z,E.w):me.set(E,z,q,j),De.viewport(O.copy(me).multiplyScalar(K).round())},this.getScissor=function(E){return E.copy(ve)},this.setScissor=function(E,z,q,j){E.isVector4?ve.set(E.x,E.y,E.z,E.w):ve.set(E,z,q,j),De.scissor(F.copy(ve).multiplyScalar(K).round())},this.getScissorTest=function(){return Re},this.setScissorTest=function(E){De.setScissorTest(Re=E)},this.setOpaqueSort=function(E){ee=E},this.setTransparentSort=function(E){ne=E},this.getClearColor=function(E){return E.copy(Ve.getClearColor())},this.setClearColor=function(){Ve.setClearColor.apply(Ve,arguments)},this.getClearAlpha=function(){return Ve.getClearAlpha()},this.setClearAlpha=function(){Ve.setClearAlpha.apply(Ve,arguments)},this.clear=function(E=!0,z=!0,q=!0){let j=0;if(E){let H=!1;if(D!==null){const he=D.texture.format;H=he===Nc||he===Oc||he===Dc}if(H){const he=D.texture.type,xe=he===qn||he===Ji||he===Er||he===Vs||he===Lc||he===Ic,Ce=Ve.getClearColor(),Ae=Ve.getClearAlpha(),We=Ce.r,je=Ce.g,He=Ce.b;xe?(x[0]=We,x[1]=je,x[2]=He,x[3]=Ae,N.clearBufferuiv(N.COLOR,0,x)):(y[0]=We,y[1]=je,y[2]=He,y[3]=Ae,N.clearBufferiv(N.COLOR,0,y))}else j|=N.COLOR_BUFFER_BIT}z&&(j|=N.DEPTH_BUFFER_BIT),q&&(j|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ie,!1),t.removeEventListener("webglcontextrestored",Te,!1),t.removeEventListener("webglcontextcreationerror",W,!1),Ve.dispose(),Pe.dispose(),ot.dispose(),Ue.dispose(),M.dispose(),V.dispose(),te.dispose(),pt.dispose(),B.dispose(),Fe.dispose(),Z.dispose(),Z.removeEventListener("sessionstart",tr),Z.removeEventListener("sessionend",Fn),Bn.stop()};function ie(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function Te(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;const E=gt.autoReset,z=Oe.enabled,q=Oe.autoUpdate,j=Oe.needsUpdate,H=Oe.type;ye(),gt.autoReset=E,Oe.enabled=z,Oe.autoUpdate=q,Oe.needsUpdate=j,Oe.type=H}function W(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function $e(E){const z=E.target;z.removeEventListener("dispose",$e),St(z)}function St(E){Ft(E),Ue.remove(E)}function Ft(E){const z=Ue.get(E).programs;z!==void 0&&(z.forEach(function(q){Fe.releaseProgram(q)}),E.isShaderMaterial&&Fe.releaseShaderCache(E))}this.renderBufferDirect=function(E,z,q,j,H,he){z===null&&(z=de);const xe=H.isMesh&&H.matrixWorld.determinant()<0,Ce=go(E,z,q,j,H);De.setMaterial(j,xe);let Ae=q.index,We=1;if(j.wireframe===!0){if(Ae=le.getWireframeAttribute(q),Ae===void 0)return;We=2}const je=q.drawRange,He=q.attributes.position;let lt=je.start*We,ft=(je.start+je.count)*We;he!==null&&(lt=Math.max(lt,he.start*We),ft=Math.min(ft,(he.start+he.count)*We)),Ae!==null?(lt=Math.max(lt,0),ft=Math.min(ft,Ae.count)):He!=null&&(lt=Math.max(lt,0),ft=Math.min(ft,He.count));const Tt=ft-lt;if(Tt<0||Tt===1/0)return;pt.setup(H,j,Ce,q,Ae);let _t,ct=Ie;if(Ae!==null&&(_t=oe.get(Ae),ct=Ee,ct.setIndex(_t)),H.isMesh)j.wireframe===!0?(De.setLineWidth(j.wireframeLinewidth*Ye()),ct.setMode(N.LINES)):ct.setMode(N.TRIANGLES);else if(H.isLine){let be=j.linewidth;be===void 0&&(be=1),De.setLineWidth(be*Ye()),H.isLineSegments?ct.setMode(N.LINES):H.isLineLoop?ct.setMode(N.LINE_LOOP):ct.setMode(N.LINE_STRIP)}else H.isPoints?ct.setMode(N.POINTS):H.isSprite&&ct.setMode(N.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)ct.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(it.get("WEBGL_multi_draw"))ct.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const be=H._multiDrawStarts,Pt=H._multiDrawCounts,st=H._multiDrawCount,Kt=Ae?oe.get(Ae).bytesPerElement:1,En=Ue.get(j).currentProgram.getUniforms();for(let Bt=0;Bt<st;Bt++)En.setValue(N,"_gl_DrawID",Bt),ct.render(be[Bt]/Kt,Pt[Bt])}else if(H.isInstancedMesh)ct.renderInstances(lt,Tt,H.count);else if(q.isInstancedBufferGeometry){const be=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Pt=Math.min(q.instanceCount,be);ct.renderInstances(lt,Tt,Pt)}else ct.render(lt,Tt)};function Je(E,z,q){E.transparent===!0&&E.side===ti&&E.forceSinglePass===!1?(E.side=un,E.needsUpdate=!0,It(E,z,q),E.side=Ai,E.needsUpdate=!0,It(E,z,q),E.side=ti):It(E,z,q)}this.compile=function(E,z,q=null){q===null&&(q=E),g=ot.get(q),g.init(z),T.push(g),q.traverseVisible(function(H){H.isLight&&H.layers.test(z.layers)&&(g.pushLight(H),H.castShadow&&g.pushShadow(H))}),E!==q&&E.traverseVisible(function(H){H.isLight&&H.layers.test(z.layers)&&(g.pushLight(H),H.castShadow&&g.pushShadow(H))}),g.setupLights();const j=new Set;return E.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const he=H.material;if(he)if(Array.isArray(he))for(let xe=0;xe<he.length;xe++){const Ce=he[xe];Je(Ce,q,H),j.add(Ce)}else Je(he,q,H),j.add(he)}),T.pop(),g=null,j},this.compileAsync=function(E,z,q=null){const j=this.compile(E,z,q);return new Promise(H=>{function he(){if(j.forEach(function(xe){Ue.get(xe).currentProgram.isReady()&&j.delete(xe)}),j.size===0){H(E);return}setTimeout(he,10)}it.get("KHR_parallel_shader_compile")!==null?he():setTimeout(he,10)})};let $t=null;function hn(E){$t&&$t(E)}function tr(){Bn.stop()}function Fn(){Bn.start()}const Bn=new dd;Bn.setAnimationLoop(hn),typeof self<"u"&&Bn.setContext(self),this.setAnimationLoop=function(E){$t=E,Z.setAnimationLoop(E),E===null?Bn.stop():Bn.start()},Z.addEventListener("sessionstart",tr),Z.addEventListener("sessionend",Fn),this.render=function(E,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),Z.enabled===!0&&Z.isPresenting===!0&&(Z.cameraAutoUpdate===!0&&Z.updateCamera(z),z=Z.getCamera()),E.isScene===!0&&E.onBeforeRender(w,E,z,D),g=ot.get(E,T.length),g.init(z),T.push(g),ke.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),Q.setFromProjectionMatrix(ke),Me=this.localClippingEnabled,ue=pe.init(this.clippingPlanes,Me),_=Pe.get(E,R.length),_.init(),R.push(_),Z.enabled===!0&&Z.isPresenting===!0){const he=w.xr.getDepthSensingMesh();he!==null&&qt(he,z,-1/0,w.sortObjects)}qt(E,z,0,w.sortObjects),_.finish(),w.sortObjects===!0&&_.sort(ee,ne),Se=Z.enabled===!1||Z.isPresenting===!1||Z.hasDepthSensing()===!1,Se&&Ve.addToRenderList(_,E),this.info.render.frame++,ue===!0&&pe.beginShadows();const q=g.state.shadowsArray;Oe.render(q,E,z),ue===!0&&pe.endShadows(),this.info.autoReset===!0&&this.info.reset();const j=_.opaque,H=_.transmissive;if(g.setupLights(),z.isArrayCamera){const he=z.cameras;if(H.length>0)for(let xe=0,Ce=he.length;xe<Ce;xe++){const Ae=he[xe];jn(j,H,E,Ae)}Se&&Ve.render(E);for(let xe=0,Ce=he.length;xe<Ce;xe++){const Ae=he[xe];nr(_,E,Ae,Ae.viewport)}}else H.length>0&&jn(j,H,E,z),Se&&Ve.render(E),nr(_,E,z);D!==null&&C===0&&(P.updateMultisampleRenderTarget(D),P.updateRenderTargetMipmap(D)),E.isScene===!0&&E.onAfterRender(w,E,z),pt.resetDefaultState(),S=-1,b=null,T.pop(),T.length>0?(g=T[T.length-1],ue===!0&&pe.setGlobalState(w.clippingPlanes,g.state.camera)):g=null,R.pop(),R.length>0?_=R[R.length-1]:_=null};function qt(E,z,q,j){if(E.visible===!1)return;if(E.layers.test(z.layers)){if(E.isGroup)q=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(z);else if(E.isLight)g.pushLight(E),E.castShadow&&g.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Q.intersectsSprite(E)){j&&ae.setFromMatrixPosition(E.matrixWorld).applyMatrix4(ke);const xe=te.update(E),Ce=E.material;Ce.visible&&_.push(E,xe,Ce,q,ae.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||Q.intersectsObject(E))){const xe=te.update(E),Ce=E.material;if(j&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),ae.copy(E.boundingSphere.center)):(xe.boundingSphere===null&&xe.computeBoundingSphere(),ae.copy(xe.boundingSphere.center)),ae.applyMatrix4(E.matrixWorld).applyMatrix4(ke)),Array.isArray(Ce)){const Ae=xe.groups;for(let We=0,je=Ae.length;We<je;We++){const He=Ae[We],lt=Ce[He.materialIndex];lt&&lt.visible&&_.push(E,xe,lt,q,ae.z,He)}}else Ce.visible&&_.push(E,xe,Ce,q,ae.z,null)}}const he=E.children;for(let xe=0,Ce=he.length;xe<Ce;xe++)qt(he[xe],z,q,j)}function nr(E,z,q,j){const H=E.opaque,he=E.transmissive,xe=E.transparent;g.setupLightsView(q),ue===!0&&pe.setGlobalState(w.clippingPlanes,q),j&&De.viewport(O.copy(j)),H.length>0&&Pi(H,z,q),he.length>0&&Pi(he,z,q),xe.length>0&&Pi(xe,z,q),De.buffers.depth.setTest(!0),De.buffers.depth.setMask(!0),De.buffers.color.setMask(!0),De.setPolygonOffset(!1)}function jn(E,z,q,j){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[j.id]===void 0&&(g.state.transmissionRenderTarget[j.id]=new Ri(1,1,{generateMipmaps:!0,type:it.has("EXT_color_buffer_half_float")||it.has("EXT_color_buffer_float")?Ir:qn,minFilter:Gn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ht.workingColorSpace}));const he=g.state.transmissionRenderTarget[j.id],xe=j.viewport||O;he.setSize(xe.z*w.transmissionResolutionScale,xe.w*w.transmissionResolutionScale);const Ce=w.getRenderTarget();w.setRenderTarget(he),w.getClearColor($),re=w.getClearAlpha(),re<1&&w.setClearColor(16777215,.5),w.clear(),Se&&Ve.render(q);const Ae=w.toneMapping;w.toneMapping=oi;const We=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),g.setupLightsView(j),ue===!0&&pe.setGlobalState(w.clippingPlanes,j),Pi(E,q,j),P.updateMultisampleRenderTarget(he),P.updateRenderTargetMipmap(he),it.has("WEBGL_multisampled_render_to_texture")===!1){let je=!1;for(let He=0,lt=z.length;He<lt;He++){const ft=z[He],Tt=ft.object,_t=ft.geometry,ct=ft.material,be=ft.group;if(ct.side===ti&&Tt.layers.test(j.layers)){const Pt=ct.side;ct.side=un,ct.needsUpdate=!0,ir(Tt,q,j,_t,ct,be),ct.side=Pt,ct.needsUpdate=!0,je=!0}}je===!0&&(P.updateMultisampleRenderTarget(he),P.updateRenderTargetMipmap(he))}w.setRenderTarget(Ce),w.setClearColor($,re),We!==void 0&&(j.viewport=We),w.toneMapping=Ae}function Pi(E,z,q){const j=z.isScene===!0?z.overrideMaterial:null;for(let H=0,he=E.length;H<he;H++){const xe=E[H],Ce=xe.object,Ae=xe.geometry,We=j===null?xe.material:j,je=xe.group;Ce.layers.test(q.layers)&&ir(Ce,z,q,Ae,We,je)}}function ir(E,z,q,j,H,he){E.onBeforeRender(w,z,q,j,H,he),E.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),H.onBeforeRender(w,z,q,j,E,he),H.transparent===!0&&H.side===ti&&H.forceSinglePass===!1?(H.side=un,H.needsUpdate=!0,w.renderBufferDirect(q,z,j,H,E,he),H.side=Ai,H.needsUpdate=!0,w.renderBufferDirect(q,z,j,H,E,he),H.side=ti):w.renderBufferDirect(q,z,j,H,E,he),E.onAfterRender(w,z,q,j,H,he)}function It(E,z,q){z.isScene!==!0&&(z=de);const j=Ue.get(E),H=g.state.lights,he=g.state.shadowsArray,xe=H.state.version,Ce=Fe.getParameters(E,H.state,he,z,q),Ae=Fe.getProgramCacheKey(Ce);let We=j.programs;j.environment=E.isMeshStandardMaterial?z.environment:null,j.fog=z.fog,j.envMap=(E.isMeshStandardMaterial?V:M).get(E.envMap||j.environment),j.envMapRotation=j.environment!==null&&E.envMap===null?z.environmentRotation:E.envMapRotation,We===void 0&&(E.addEventListener("dispose",$e),We=new Map,j.programs=We);let je=We.get(Ae);if(je!==void 0){if(j.currentProgram===je&&j.lightsStateVersion===xe)return Ur(E,Ce),je}else Ce.uniforms=Fe.getUniforms(E),E.onBeforeCompile(Ce,w),je=Fe.acquireProgram(Ce,Ae),We.set(Ae,je),j.uniforms=Ce.uniforms;const He=j.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(He.clippingPlanes=pe.uniform),Ur(E,Ce),j.needsLights=Fr(E),j.lightsStateVersion=xe,j.needsLights&&(He.ambientLightColor.value=H.state.ambient,He.lightProbe.value=H.state.probe,He.directionalLights.value=H.state.directional,He.directionalLightShadows.value=H.state.directionalShadow,He.spotLights.value=H.state.spot,He.spotLightShadows.value=H.state.spotShadow,He.rectAreaLights.value=H.state.rectArea,He.ltc_1.value=H.state.rectAreaLTC1,He.ltc_2.value=H.state.rectAreaLTC2,He.pointLights.value=H.state.point,He.pointLightShadows.value=H.state.pointShadow,He.hemisphereLights.value=H.state.hemi,He.directionalShadowMap.value=H.state.directionalShadowMap,He.directionalShadowMatrix.value=H.state.directionalShadowMatrix,He.spotShadowMap.value=H.state.spotShadowMap,He.spotLightMatrix.value=H.state.spotLightMatrix,He.spotLightMap.value=H.state.spotLightMap,He.pointShadowMap.value=H.state.pointShadowMap,He.pointShadowMatrix.value=H.state.pointShadowMatrix),j.currentProgram=je,j.uniformsList=null,je}function sr(E){if(E.uniformsList===null){const z=E.currentProgram.getUniforms();E.uniformsList=Na.seqWithValue(z.seq,E.uniforms)}return E.uniformsList}function Ur(E,z){const q=Ue.get(E);q.outputColorSpace=z.outputColorSpace,q.batching=z.batching,q.batchingColor=z.batchingColor,q.instancing=z.instancing,q.instancingColor=z.instancingColor,q.instancingMorph=z.instancingMorph,q.skinning=z.skinning,q.morphTargets=z.morphTargets,q.morphNormals=z.morphNormals,q.morphColors=z.morphColors,q.morphTargetsCount=z.morphTargetsCount,q.numClippingPlanes=z.numClippingPlanes,q.numIntersection=z.numClipIntersection,q.vertexAlphas=z.vertexAlphas,q.vertexTangents=z.vertexTangents,q.toneMapping=z.toneMapping}function go(E,z,q,j,H){z.isScene!==!0&&(z=de),P.resetTextureUnits();const he=z.fog,xe=j.isMeshStandardMaterial?z.environment:null,Ce=D===null?w.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:qs,Ae=(j.isMeshStandardMaterial?V:M).get(j.envMap||xe),We=j.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,je=!!q.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),He=!!q.morphAttributes.position,lt=!!q.morphAttributes.normal,ft=!!q.morphAttributes.color;let Tt=oi;j.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(Tt=w.toneMapping);const _t=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,ct=_t!==void 0?_t.length:0,be=Ue.get(j),Pt=g.state.lights;if(ue===!0&&(Me===!0||E!==b)){const zt=E===b&&j.id===S;pe.setState(j,E,zt)}let st=!1;j.version===be.__version?(be.needsLights&&be.lightsStateVersion!==Pt.state.version||be.outputColorSpace!==Ce||H.isBatchedMesh&&be.batching===!1||!H.isBatchedMesh&&be.batching===!0||H.isBatchedMesh&&be.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&be.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&be.instancing===!1||!H.isInstancedMesh&&be.instancing===!0||H.isSkinnedMesh&&be.skinning===!1||!H.isSkinnedMesh&&be.skinning===!0||H.isInstancedMesh&&be.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&be.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&be.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&be.instancingMorph===!1&&H.morphTexture!==null||be.envMap!==Ae||j.fog===!0&&be.fog!==he||be.numClippingPlanes!==void 0&&(be.numClippingPlanes!==pe.numPlanes||be.numIntersection!==pe.numIntersection)||be.vertexAlphas!==We||be.vertexTangents!==je||be.morphTargets!==He||be.morphNormals!==lt||be.morphColors!==ft||be.toneMapping!==Tt||be.morphTargetsCount!==ct)&&(st=!0):(st=!0,be.__version=j.version);let Kt=be.currentProgram;st===!0&&(Kt=It(j,z,H));let En=!1,Bt=!1,Tn=!1;const bt=Kt.getUniforms(),an=be.uniforms;if(De.useProgram(Kt.program)&&(En=!0,Bt=!0,Tn=!0),j.id!==S&&(S=j.id,Bt=!0),En||b!==E){De.buffers.depth.getReversed()?(ge.copy(E.projectionMatrix),Ag(ge),Rg(ge),bt.setValue(N,"projectionMatrix",ge)):bt.setValue(N,"projectionMatrix",E.projectionMatrix),bt.setValue(N,"viewMatrix",E.matrixWorldInverse);const Ht=bt.map.cameraPosition;Ht!==void 0&&Ht.setValue(N,ze.setFromMatrixPosition(E.matrixWorld)),Le.logarithmicDepthBuffer&&bt.setValue(N,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&bt.setValue(N,"isOrthographic",E.isOrthographicCamera===!0),b!==E&&(b=E,Bt=!0,Tn=!0)}if(H.isSkinnedMesh){bt.setOptional(N,H,"bindMatrix"),bt.setOptional(N,H,"bindMatrixInverse");const zt=H.skeleton;zt&&(zt.boneTexture===null&&zt.computeBoneTexture(),bt.setValue(N,"boneTexture",zt.boneTexture,P))}H.isBatchedMesh&&(bt.setOptional(N,H,"batchingTexture"),bt.setValue(N,"batchingTexture",H._matricesTexture,P),bt.setOptional(N,H,"batchingIdTexture"),bt.setValue(N,"batchingIdTexture",H._indirectTexture,P),bt.setOptional(N,H,"batchingColorTexture"),H._colorsTexture!==null&&bt.setValue(N,"batchingColorTexture",H._colorsTexture,P));const Yt=q.morphAttributes;if((Yt.position!==void 0||Yt.normal!==void 0||Yt.color!==void 0)&&qe.update(H,q,Kt),(Bt||be.receiveShadow!==H.receiveShadow)&&(be.receiveShadow=H.receiveShadow,bt.setValue(N,"receiveShadow",H.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(an.envMap.value=Ae,an.flipEnvMap.value=Ae.isCubeTexture&&Ae.isRenderTargetTexture===!1?-1:1),j.isMeshStandardMaterial&&j.envMap===null&&z.environment!==null&&(an.envMapIntensity.value=z.environmentIntensity),Bt&&(bt.setValue(N,"toneMappingExposure",w.toneMappingExposure),be.needsLights&&rr(an,Tn),he&&j.fog===!0&&_e.refreshFogUniforms(an,he),_e.refreshMaterialUniforms(an,j,K,fe,g.state.transmissionRenderTarget[E.id]),Na.upload(N,sr(be),an,P)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(Na.upload(N,sr(be),an,P),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&bt.setValue(N,"center",H.center),bt.setValue(N,"modelViewMatrix",H.modelViewMatrix),bt.setValue(N,"normalMatrix",H.normalMatrix),bt.setValue(N,"modelMatrix",H.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){const zt=j.uniformsGroups;for(let Ht=0,Li=zt.length;Ht<Li;Ht++){const Xn=zt[Ht];B.update(Xn,Kt),B.bind(Xn,Kt)}}return Kt}function rr(E,z){E.ambientLightColor.needsUpdate=z,E.lightProbe.needsUpdate=z,E.directionalLights.needsUpdate=z,E.directionalLightShadows.needsUpdate=z,E.pointLights.needsUpdate=z,E.pointLightShadows.needsUpdate=z,E.spotLights.needsUpdate=z,E.spotLightShadows.needsUpdate=z,E.rectAreaLights.needsUpdate=z,E.hemisphereLights.needsUpdate=z}function Fr(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(E,z,q){Ue.get(E.texture).__webglTexture=z,Ue.get(E.depthTexture).__webglTexture=q;const j=Ue.get(E);j.__hasExternalTextures=!0,j.__autoAllocateDepthBuffer=q===void 0,j.__autoAllocateDepthBuffer||it.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),j.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,z){const q=Ue.get(E);q.__webglFramebuffer=z,q.__useDefaultFramebuffer=z===void 0};const ss=N.createFramebuffer();this.setRenderTarget=function(E,z=0,q=0){D=E,L=z,C=q;let j=!0,H=null,he=!1,xe=!1;if(E){const Ae=Ue.get(E);if(Ae.__useDefaultFramebuffer!==void 0)De.bindFramebuffer(N.FRAMEBUFFER,null),j=!1;else if(Ae.__webglFramebuffer===void 0)P.setupRenderTarget(E);else if(Ae.__hasExternalTextures)P.rebindTextures(E,Ue.get(E.texture).__webglTexture,Ue.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const He=E.depthTexture;if(Ae.__boundDepthTexture!==He){if(He!==null&&Ue.has(He)&&(E.width!==He.image.width||E.height!==He.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(E)}}const We=E.texture;(We.isData3DTexture||We.isDataArrayTexture||We.isCompressedArrayTexture)&&(xe=!0);const je=Ue.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(je[z])?H=je[z][q]:H=je[z],he=!0):E.samples>0&&P.useMultisampledRTT(E)===!1?H=Ue.get(E).__webglMultisampledFramebuffer:Array.isArray(je)?H=je[q]:H=je,O.copy(E.viewport),F.copy(E.scissor),U=E.scissorTest}else O.copy(me).multiplyScalar(K).floor(),F.copy(ve).multiplyScalar(K).floor(),U=Re;if(q!==0&&(H=ss),De.bindFramebuffer(N.FRAMEBUFFER,H)&&j&&De.drawBuffers(E,H),De.viewport(O),De.scissor(F),De.setScissorTest(U),he){const Ae=Ue.get(E.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+z,Ae.__webglTexture,q)}else if(xe){const Ae=Ue.get(E.texture),We=z;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ae.__webglTexture,q,We)}else if(E!==null&&q!==0){const Ae=Ue.get(E.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Ae.__webglTexture,q)}S=-1},this.readRenderTargetPixels=function(E,z,q,j,H,he,xe){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ce=Ue.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&xe!==void 0&&(Ce=Ce[xe]),Ce){De.bindFramebuffer(N.FRAMEBUFFER,Ce);try{const Ae=E.texture,We=Ae.format,je=Ae.type;if(!Le.textureFormatReadable(We)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Le.textureTypeReadable(je)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=E.width-j&&q>=0&&q<=E.height-H&&N.readPixels(z,q,j,H,Qe.convert(We),Qe.convert(je),he)}finally{const Ae=D!==null?Ue.get(D).__webglFramebuffer:null;De.bindFramebuffer(N.FRAMEBUFFER,Ae)}}},this.readRenderTargetPixelsAsync=async function(E,z,q,j,H,he,xe){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ce=Ue.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&xe!==void 0&&(Ce=Ce[xe]),Ce){const Ae=E.texture,We=Ae.format,je=Ae.type;if(!Le.textureFormatReadable(We))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Le.textureTypeReadable(je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(z>=0&&z<=E.width-j&&q>=0&&q<=E.height-H){De.bindFramebuffer(N.FRAMEBUFFER,Ce);const He=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,He),N.bufferData(N.PIXEL_PACK_BUFFER,he.byteLength,N.STREAM_READ),N.readPixels(z,q,j,H,Qe.convert(We),Qe.convert(je),0);const lt=D!==null?Ue.get(D).__webglFramebuffer:null;De.bindFramebuffer(N.FRAMEBUFFER,lt);const ft=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await Tg(N,ft,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,He),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,he),N.deleteBuffer(He),N.deleteSync(ft),he}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,z=null,q=0){E.isTexture!==!0&&(Es("WebGLRenderer: copyFramebufferToTexture function signature has changed."),z=arguments[0]||null,E=arguments[1]);const j=Math.pow(2,-q),H=Math.floor(E.image.width*j),he=Math.floor(E.image.height*j),xe=z!==null?z.x:0,Ce=z!==null?z.y:0;P.setTexture2D(E,0),N.copyTexSubImage2D(N.TEXTURE_2D,q,0,0,xe,Ce,H,he),De.unbindTexture()};const vn=N.createFramebuffer(),rs=N.createFramebuffer();this.copyTextureToTexture=function(E,z,q=null,j=null,H=0,he=null){E.isTexture!==!0&&(Es("WebGLRenderer: copyTextureToTexture function signature has changed."),j=arguments[0]||null,E=arguments[1],z=arguments[2],he=arguments[3]||0,q=null),he===null&&(H!==0?(Es("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),he=H,H=0):he=0);let xe,Ce,Ae,We,je,He,lt,ft,Tt;const _t=E.isCompressedTexture?E.mipmaps[he]:E.image;if(q!==null)xe=q.max.x-q.min.x,Ce=q.max.y-q.min.y,Ae=q.isBox3?q.max.z-q.min.z:1,We=q.min.x,je=q.min.y,He=q.isBox3?q.min.z:0;else{const Yt=Math.pow(2,-H);xe=Math.floor(_t.width*Yt),Ce=Math.floor(_t.height*Yt),E.isDataArrayTexture?Ae=_t.depth:E.isData3DTexture?Ae=Math.floor(_t.depth*Yt):Ae=1,We=0,je=0,He=0}j!==null?(lt=j.x,ft=j.y,Tt=j.z):(lt=0,ft=0,Tt=0);const ct=Qe.convert(z.format),be=Qe.convert(z.type);let Pt;z.isData3DTexture?(P.setTexture3D(z,0),Pt=N.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(P.setTexture2DArray(z,0),Pt=N.TEXTURE_2D_ARRAY):(P.setTexture2D(z,0),Pt=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,z.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,z.unpackAlignment);const st=N.getParameter(N.UNPACK_ROW_LENGTH),Kt=N.getParameter(N.UNPACK_IMAGE_HEIGHT),En=N.getParameter(N.UNPACK_SKIP_PIXELS),Bt=N.getParameter(N.UNPACK_SKIP_ROWS),Tn=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,_t.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,_t.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,We),N.pixelStorei(N.UNPACK_SKIP_ROWS,je),N.pixelStorei(N.UNPACK_SKIP_IMAGES,He);const bt=E.isDataArrayTexture||E.isData3DTexture,an=z.isDataArrayTexture||z.isData3DTexture;if(E.isDepthTexture){const Yt=Ue.get(E),zt=Ue.get(z),Ht=Ue.get(Yt.__renderTarget),Li=Ue.get(zt.__renderTarget);De.bindFramebuffer(N.READ_FRAMEBUFFER,Ht.__webglFramebuffer),De.bindFramebuffer(N.DRAW_FRAMEBUFFER,Li.__webglFramebuffer);for(let Xn=0;Xn<Ae;Xn++)bt&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ue.get(E).__webglTexture,H,He+Xn),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ue.get(z).__webglTexture,he,Tt+Xn)),N.blitFramebuffer(We,je,xe,Ce,lt,ft,xe,Ce,N.DEPTH_BUFFER_BIT,N.NEAREST);De.bindFramebuffer(N.READ_FRAMEBUFFER,null),De.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(H!==0||E.isRenderTargetTexture||Ue.has(E)){const Yt=Ue.get(E),zt=Ue.get(z);De.bindFramebuffer(N.READ_FRAMEBUFFER,vn),De.bindFramebuffer(N.DRAW_FRAMEBUFFER,rs);for(let Ht=0;Ht<Ae;Ht++)bt?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Yt.__webglTexture,H,He+Ht):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Yt.__webglTexture,H),an?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,zt.__webglTexture,he,Tt+Ht):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,zt.__webglTexture,he),H!==0?N.blitFramebuffer(We,je,xe,Ce,lt,ft,xe,Ce,N.COLOR_BUFFER_BIT,N.NEAREST):an?N.copyTexSubImage3D(Pt,he,lt,ft,Tt+Ht,We,je,xe,Ce):N.copyTexSubImage2D(Pt,he,lt,ft,We,je,xe,Ce);De.bindFramebuffer(N.READ_FRAMEBUFFER,null),De.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else an?E.isDataTexture||E.isData3DTexture?N.texSubImage3D(Pt,he,lt,ft,Tt,xe,Ce,Ae,ct,be,_t.data):z.isCompressedArrayTexture?N.compressedTexSubImage3D(Pt,he,lt,ft,Tt,xe,Ce,Ae,ct,_t.data):N.texSubImage3D(Pt,he,lt,ft,Tt,xe,Ce,Ae,ct,be,_t):E.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,he,lt,ft,xe,Ce,ct,be,_t.data):E.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,he,lt,ft,_t.width,_t.height,ct,_t.data):N.texSubImage2D(N.TEXTURE_2D,he,lt,ft,xe,Ce,ct,be,_t);N.pixelStorei(N.UNPACK_ROW_LENGTH,st),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Kt),N.pixelStorei(N.UNPACK_SKIP_PIXELS,En),N.pixelStorei(N.UNPACK_SKIP_ROWS,Bt),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Tn),he===0&&z.generateMipmaps&&N.generateMipmap(Pt),De.unbindTexture()},this.copyTextureToTexture3D=function(E,z,q=null,j=null,H=0){return E.isTexture!==!0&&(Es("WebGLRenderer: copyTextureToTexture3D function signature has changed."),q=arguments[0]||null,j=arguments[1]||null,E=arguments[2],z=arguments[3],H=arguments[4]||0),Es('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,z,q,j,H)},this.initRenderTarget=function(E){Ue.get(E).__webglFramebuffer===void 0&&P.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?P.setTextureCube(E,0):E.isData3DTexture?P.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?P.setTexture2DArray(E,0):P.setTexture2D(E,0),De.unbindTexture()},this.resetState=function(){L=0,C=0,D=null,De.reset(),pt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ri}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=ht._getDrawingBufferColorSpace(e),t.unpackColorSpace=ht._getUnpackColorSpace()}}const vd=[.5,0];function jx(i,e,t){var x,y;const[n,s]=i.parallax??[1,1],r=((x=i.feet)==null?void 0:x.x)??0,a=((y=i.feet)==null?void 0:y.y)??0,o=i.attach?e.x+r:r+e.x*(1-n),c=a+e.y*(1-s),f=i.attach&&i.repeatX?t:i.size[0],h=i.size[1],[d,p]=i.anchor??vd;return{cx:o+(.5-d)*f,cy:c+(.5-p)*h,w:f,h}}function Xx(i,e,t,n={index:0,rows:1}){var f;const s=i.uvRect??{x:0,y:0,width:1,height:1};let r=s.width,a=s.x;if(i.attach&&i.repeatX){const h=i.size[0]/(s.width||1),[d]=i.parallax??[1,1];r=t/h,a=s.x+(e.x*d-t/2-(((f=i.feet)==null?void 0:f.x)??0))/h}const o=n.rows||1,c=s.height/o,l=s.y+s.height-(n.index+1)*c;return{repeat:[r,c],offset:[a,l]}}const oc=(i,e=0)=>(i.sortingLayer??0)*1e6+(i.sortingOrder??0)*1e3+e;function $x(i,{i0:e,i1:t,k0:n,k1:s,size:r=1,columns:a=4,rows:o=1,texW:c=128,texH:l=32}){const f=[],h=[],d=[],p=1/a,x=1/o,y=.5/c,_=.5/l;let g=0;for(let R=n;R<=s;R++)for(let T=e;T<=t;T++){const w=i({x:T,y:R});if(!w)continue;const I=(w-1)%a,L=Math.floor((w-1)/a),C=T*r,D=C+r,S=0-R*r,b=S-r,O=I*p+y,F=(I+1)*p-y,U=1-L*x-_,$=1-(L+1)*x+_;f.push(C,b,0,D,b,0,D,S,0,C,S,0),h.push(O,$,F,$,F,U,O,U),d.push(g,g+1,g+2,g,g+2,g+3),g+=4}return{positions:f,uvs:h,indices:d,count:g/4}}var ns=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function yd(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}function Kx(i){if(i.__esModule)return i;var e=i.default;if(typeof e=="function"){var t=function n(){return this instanceof n?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};t.prototype=e.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(i).forEach(function(n){var s=Object.getOwnPropertyDescriptor(i,n);Object.defineProperty(t,n,s.get?s:{enumerable:!0,get:function(){return i[n]}})}),t}var zc={exports:{}};zc.exports;(function(i){(function(e,t,n){function s(c){var l=this,f=o();l.next=function(){var h=2091639*l.s0+l.c*23283064365386963e-26;return l.s0=l.s1,l.s1=l.s2,l.s2=h-(l.c=h|0)},l.c=1,l.s0=f(" "),l.s1=f(" "),l.s2=f(" "),l.s0-=f(c),l.s0<0&&(l.s0+=1),l.s1-=f(c),l.s1<0&&(l.s1+=1),l.s2-=f(c),l.s2<0&&(l.s2+=1),f=null}function r(c,l){return l.c=c.c,l.s0=c.s0,l.s1=c.s1,l.s2=c.s2,l}function a(c,l){var f=new s(c),h=l&&l.state,d=f.next;return d.int32=function(){return f.next()*4294967296|0},d.double=function(){return d()+(d()*2097152|0)*11102230246251565e-32},d.quick=d,h&&(typeof h=="object"&&r(h,f),d.state=function(){return r(f,{})}),d}function o(){var c=4022871197,l=function(f){f=String(f);for(var h=0;h<f.length;h++){c+=f.charCodeAt(h);var d=.02519603282416938*c;c=d>>>0,d-=c,d*=c,c=d>>>0,d-=c,c+=d*4294967296}return(c>>>0)*23283064365386963e-26};return l}t&&t.exports?t.exports=a:this.alea=a})(ns,i)})(zc);var Yx=zc.exports,Hc={exports:{}};Hc.exports;(function(i){(function(e,t,n){function s(o){var c=this,l="";c.x=0,c.y=0,c.z=0,c.w=0,c.next=function(){var h=c.x^c.x<<11;return c.x=c.y,c.y=c.z,c.z=c.w,c.w^=c.w>>>19^h^h>>>8},o===(o|0)?c.x=o:l+=o;for(var f=0;f<l.length+64;f++)c.x^=l.charCodeAt(f)|0,c.next()}function r(o,c){return c.x=o.x,c.y=o.y,c.z=o.z,c.w=o.w,c}function a(o,c){var l=new s(o),f=c&&c.state,h=function(){return(l.next()>>>0)/4294967296};return h.double=function(){do var d=l.next()>>>11,p=(l.next()>>>0)/4294967296,x=(d+p)/(1<<21);while(x===0);return x},h.int32=l.next,h.quick=h,f&&(typeof f=="object"&&r(f,l),h.state=function(){return r(l,{})}),h}t&&t.exports?t.exports=a:this.xor128=a})(ns,i)})(Hc);var Jx=Hc.exports,Gc={exports:{}};Gc.exports;(function(i){(function(e,t,n){function s(o){var c=this,l="";c.next=function(){var h=c.x^c.x>>>2;return c.x=c.y,c.y=c.z,c.z=c.w,c.w=c.v,(c.d=c.d+362437|0)+(c.v=c.v^c.v<<4^(h^h<<1))|0},c.x=0,c.y=0,c.z=0,c.w=0,c.v=0,o===(o|0)?c.x=o:l+=o;for(var f=0;f<l.length+64;f++)c.x^=l.charCodeAt(f)|0,f==l.length&&(c.d=c.x<<10^c.x>>>4),c.next()}function r(o,c){return c.x=o.x,c.y=o.y,c.z=o.z,c.w=o.w,c.v=o.v,c.d=o.d,c}function a(o,c){var l=new s(o),f=c&&c.state,h=function(){return(l.next()>>>0)/4294967296};return h.double=function(){do var d=l.next()>>>11,p=(l.next()>>>0)/4294967296,x=(d+p)/(1<<21);while(x===0);return x},h.int32=l.next,h.quick=h,f&&(typeof f=="object"&&r(f,l),h.state=function(){return r(l,{})}),h}t&&t.exports?t.exports=a:this.xorwow=a})(ns,i)})(Gc);var Zx=Gc.exports,Vc={exports:{}};Vc.exports;(function(i){(function(e,t,n){function s(o){var c=this;c.next=function(){var f=c.x,h=c.i,d,p;return d=f[h],d^=d>>>7,p=d^d<<24,d=f[h+1&7],p^=d^d>>>10,d=f[h+3&7],p^=d^d>>>3,d=f[h+4&7],p^=d^d<<7,d=f[h+7&7],d=d^d<<13,p^=d^d<<9,f[h]=p,c.i=h+1&7,p};function l(f,h){var d,p=[];if(h===(h|0))p[0]=h;else for(h=""+h,d=0;d<h.length;++d)p[d&7]=p[d&7]<<15^h.charCodeAt(d)+p[d+1&7]<<13;for(;p.length<8;)p.push(0);for(d=0;d<8&&p[d]===0;++d);for(d==8?p[7]=-1:p[d],f.x=p,f.i=0,d=256;d>0;--d)f.next()}l(c,o)}function r(o,c){return c.x=o.x.slice(),c.i=o.i,c}function a(o,c){o==null&&(o=+new Date);var l=new s(o),f=c&&c.state,h=function(){return(l.next()>>>0)/4294967296};return h.double=function(){do var d=l.next()>>>11,p=(l.next()>>>0)/4294967296,x=(d+p)/(1<<21);while(x===0);return x},h.int32=l.next,h.quick=h,f&&(f.x&&r(f,l),h.state=function(){return r(l,{})}),h}t&&t.exports?t.exports=a:this.xorshift7=a})(ns,i)})(Vc);var Qx=Vc.exports,Wc={exports:{}};Wc.exports;(function(i){(function(e,t,n){function s(o){var c=this;c.next=function(){var f=c.w,h=c.X,d=c.i,p,x;return c.w=f=f+1640531527|0,x=h[d+34&127],p=h[d=d+1&127],x^=x<<13,p^=p<<17,x^=x>>>15,p^=p>>>12,x=h[d]=x^p,c.i=d,x+(f^f>>>16)|0};function l(f,h){var d,p,x,y,_,g=[],R=128;for(h===(h|0)?(p=h,h=null):(h=h+"\0",p=0,R=Math.max(R,h.length)),x=0,y=-32;y<R;++y)h&&(p^=h.charCodeAt((y+32)%h.length)),y===0&&(_=p),p^=p<<10,p^=p>>>15,p^=p<<4,p^=p>>>13,y>=0&&(_=_+1640531527|0,d=g[y&127]^=p+_,x=d==0?x+1:0);for(x>=128&&(g[(h&&h.length||0)&127]=-1),x=127,y=4*128;y>0;--y)p=g[x+34&127],d=g[x=x+1&127],p^=p<<13,d^=d<<17,p^=p>>>15,d^=d>>>12,g[x]=p^d;f.w=_,f.X=g,f.i=x}l(c,o)}function r(o,c){return c.i=o.i,c.w=o.w,c.X=o.X.slice(),c}function a(o,c){o==null&&(o=+new Date);var l=new s(o),f=c&&c.state,h=function(){return(l.next()>>>0)/4294967296};return h.double=function(){do var d=l.next()>>>11,p=(l.next()>>>0)/4294967296,x=(d+p)/(1<<21);while(x===0);return x},h.int32=l.next,h.quick=h,f&&(f.X&&r(f,l),h.state=function(){return r(l,{})}),h}t&&t.exports?t.exports=a:this.xor4096=a})(ns,i)})(Wc);var eb=Wc.exports,qc={exports:{}};qc.exports;(function(i){(function(e,t,n){function s(o){var c=this,l="";c.next=function(){var h=c.b,d=c.c,p=c.d,x=c.a;return h=h<<25^h>>>7^d,d=d-p|0,p=p<<24^p>>>8^x,x=x-h|0,c.b=h=h<<20^h>>>12^d,c.c=d=d-p|0,c.d=p<<16^d>>>16^x,c.a=x-h|0},c.a=0,c.b=0,c.c=-1640531527,c.d=1367130551,o===Math.floor(o)?(c.a=o/4294967296|0,c.b=o|0):l+=o;for(var f=0;f<l.length+20;f++)c.b^=l.charCodeAt(f)|0,c.next()}function r(o,c){return c.a=o.a,c.b=o.b,c.c=o.c,c.d=o.d,c}function a(o,c){var l=new s(o),f=c&&c.state,h=function(){return(l.next()>>>0)/4294967296};return h.double=function(){do var d=l.next()>>>11,p=(l.next()>>>0)/4294967296,x=(d+p)/(1<<21);while(x===0);return x},h.int32=l.next,h.quick=h,f&&(typeof f=="object"&&r(f,l),h.state=function(){return r(l,{})}),h}t&&t.exports?t.exports=a:this.tychei=a})(ns,i)})(qc);var tb=qc.exports,xd={exports:{}};const nb={},ib=Object.freeze(Object.defineProperty({__proto__:null,default:nb},Symbol.toStringTag,{value:"Module"})),ka=Kx(ib);(function(i){(function(e,t,n){var s=256,r=6,a=52,o="random",c=n.pow(s,r),l=n.pow(2,a),f=l*2,h=s-1,d;function p(w,I,L){var C=[];I=I==!0?{entropy:!0}:I||{};var D=g(_(I.entropy?[w,T(t)]:w??R(),3),C),S=new x(C),b=function(){for(var O=S.g(r),F=c,U=0;O<l;)O=(O+U)*s,F*=s,U=S.g(1);for(;O>=f;)O/=2,F/=2,U>>>=1;return(O+U)/F};return b.int32=function(){return S.g(4)|0},b.quick=function(){return S.g(4)/4294967296},b.double=b,g(T(S.S),t),(I.pass||L||function(O,F,U,$){return $&&($.S&&y($,S),O.state=function(){return y(S,{})}),U?(n[o]=O,F):O})(b,D,"global"in I?I.global:this==n,I.state)}function x(w){var I,L=w.length,C=this,D=0,S=C.i=C.j=0,b=C.S=[];for(L||(w=[L++]);D<s;)b[D]=D++;for(D=0;D<s;D++)b[D]=b[S=h&S+w[D%L]+(I=b[D])],b[S]=I;(C.g=function(O){for(var F,U=0,$=C.i,re=C.j,J=C.S;O--;)F=J[$=h&$+1],U=U*s+J[h&(J[$]=J[re=h&re+F])+(J[re]=F)];return C.i=$,C.j=re,U})(s)}function y(w,I){return I.i=w.i,I.j=w.j,I.S=w.S.slice(),I}function _(w,I){var L=[],C=typeof w,D;if(I&&C=="object")for(D in w)try{L.push(_(w[D],I-1))}catch{}return L.length?L:C=="string"?w:w+"\0"}function g(w,I){for(var L=w+"",C,D=0;D<L.length;)I[h&D]=h&(C^=I[h&D]*19)+L.charCodeAt(D++);return T(I)}function R(){try{var w;return d&&(w=d.randomBytes)?w=w(s):(w=new Uint8Array(s),(e.crypto||e.msCrypto).getRandomValues(w)),T(w)}catch{var I=e.navigator,L=I&&I.plugins;return[+new Date,e,L,e.screen,T(t)]}}function T(w){return String.fromCharCode.apply(0,w)}if(g(n.random(),t),i.exports){i.exports=p;try{d=ka}catch{}}else n["seed"+o]=p})(typeof self<"u"?self:ns,[],Math)})(xd);var sb=xd.exports,rb=Yx,ab=Jx,ob=Zx,lb=Qx,cb=eb,ub=tb,is=sb;is.alea=rb;is.xor128=ab;is.xorwow=ob;is.xorshift7=lb;is.xor4096=cb;is.tychei=ub;var fb=is;const bd=yd(fb),hb=Object.assign({"/world/scripts/arrival.js":()=>Ne(()=>import("./arrival-BGB7dWv4.js"),__vite__mapDeps([0,1])),"/world/scripts/bank.js":()=>Ne(()=>import("./bank-BayQo6zl.js"),[]),"/world/scripts/camera.js":()=>Ne(()=>import("./camera-CFdr3yOD.js"),[]),"/world/scripts/db.js":()=>Ne(()=>import("./db-UtNTmWkn.js"),[]),"/world/scripts/ground.js":()=>Ne(()=>import("./ground-b0nUTt3G.js"),[]),"/world/scripts/joust-camera.js":()=>Ne(()=>import("./joust-camera-Fg9LmHPp.js"),[]),"/world/scripts/jouster.js":()=>Ne(()=>import("./jouster-CNNuhO2i.js"),__vite__mapDeps([2,3,1])),"/world/scripts/lib/color.js":()=>Ne(()=>import("./color-DDSg_o2D.js"),[]),"/world/scripts/lib/econ.js":()=>Ne(()=>Promise.resolve().then(()=>Xc),void 0),"/world/scripts/look-default.js":()=>Ne(()=>import("./look-default-BibdNaYP.js"),[]),"/world/scripts/player.js":()=>Ne(()=>import("./player-CqzJShkt.js"),__vite__mapDeps([4,5,6,7])),"/world/scripts/tex-hero.js":()=>Ne(()=>import("./tex-hero-D9FSdSdV.js"),__vite__mapDeps([6,5,7])),"/world/scripts/tex-lance.js":()=>Ne(()=>import("./tex-lance-h9_Q8DQT.js"),[]),"/world/scripts/tex-meadow.js":()=>Ne(()=>import("./tex-meadow-CQRPL3Pn.js"),__vite__mapDeps([8,5,7])),"/world/scripts/tex-sky.js":()=>Ne(()=>import("./tex-sky-H7hQEGu6.js"),__vite__mapDeps([9,5,7])),"/world/scripts/tex-soil.js":()=>Ne(()=>import("./tex-soil-6tL0S4Gb.js"),__vite__mapDeps([10,5,7])),"/world/scripts/tex-tilt.js":()=>Ne(()=>import("./tex-tilt-DATa2CU9.js"),[]),"/world/scripts/tileset-ground.js":()=>Ne(()=>import("./tileset-ground-dAb9Cutk.js"),__vite__mapDeps([11,5])),"/world/scripts/tileset-sand.js":()=>Ne(()=>import("./tileset-sand-D3oqsxai.js"),[]),"/world/scripts/ui.js":()=>Ne(()=>import("./ui-3thon8Eh.js"),__vite__mapDeps([12,3]))}),il=new Map;function db(i){const[e,t=""]=String(i).split("?");return{path:e,params:Object.fromEntries(new URLSearchParams(t))}}function lc(i,e=pb){if(il.has(i))return il.get(i);const t=(async()=>{const{path:n,params:s}=db(i),r=hb["/world/"+n];if(!r)throw new Error(`no texture script ${n}`);const a=await r();if(typeof a.texture!="function")throw new Error(`${n} has no texture(ctx)`);const o=bd.alea(i);let c=null;const l={params:s,random:()=>o(),canvas(f,h){const d=e(Math.max(1,Math.round(f)),Math.max(1,Math.round(h)));return c||(c=d),d.getContext("2d",{willReadFrequently:!0})},atlas(){throw new Error(`${n}: ctx.atlas is not in this port yet`)},wang(){throw new Error(`${n}: ctx.wang is not in this port yet`)}};if(await a.texture(l),!c)throw new Error(`${n} drew no canvas`);return{canvas:c,meta:a.meta??{}}})();return il.set(i,t),t}function pb(i,e){const t=document.createElement("canvas");return t.width=i,t.height=e,t}const ff=[[.4124,.3576,.1805],[.2126,.7152,.0722],[.0193,.1192,.9505]],va=[[.8951,.2664,-.1614],[-.7502,1.7135,.0367],[.0389,-.0685,1.0296]],hf=[.3127,.329],mb=90,df=.04,ya=(i,e)=>i.map(t=>e[0].map((n,s)=>t.reduce((r,a,o)=>r+a*e[o][s],0))),pf=(i,e)=>i.map(t=>t[0]*e[0]+t[1]*e[1]+t[2]*e[2]);function mf([[i,e,t],[n,s,r],[a,o,c]]){const l=s*c-r*o,f=-(n*c-r*a),h=n*o-s*a,d=i*l+e*f+t*h;return[[l/d,-(e*c-t*o)/d,(e*r-t*s)/d],[f/d,(i*c-t*a)/d,-(i*r-t*n)/d],[h/d,-(i*o-e*a)/d,(i*s-e*n)/d]]}function sl(i){const e=(.860117757+.000154118254*i+128641212e-15*i*i)/(1+.000842420235*i+708145163e-15*i*i),t=(.317398726+422806245e-13*i+420481691e-16*i*i)/(1-289741816e-13*i+161456053e-15*i*i);return[e,t]}const gb=([i,e])=>[4*i/(12*e-2*i+3),6*e/(12*e-2*i+3)],_b=([i,e])=>[3*i/(2*i-8*e+4),2*e/(2*i-8*e+4)],gf=([i,e])=>[i/e,1,(1-i-e)/e];function vb(i=0,e=0){if(!i&&!e)return[[1,0,0],[0,1,0],[0,0,1]];const t=6504,n=1e6/t,s=1e6/(n+mb*i),r=sl(t),a=sl(s),o=gb(hf),c=a[0]-r[0],l=a[1]-r[1],f=sl(t+10),h=f[0]-r[0],d=f[1]-r[1],p=Math.hypot(h,d)||1,x=-d/p,y=h/p,_=y>=0?1:-1,g=[o[0]+c+_*x*df*e,o[1]+l+_*y*df*e],R=pf(va,gf(hf)),T=pf(va,gf(_b(g))),w=[[T[0]/R[0],0,0],[0,T[1]/R[1],0],[0,0,T[2]/R[2]]];return ya(mf(ff),ya(mf(va),ya(w,ya(va,ff))))}function yb(i,e={}){const t={exposure:1,saturation:1,contrast:1,brightness:0,temperature:0,tint:0,vignette:0,roundness:2,feather:.45,vignetteColor:[0,0,0],grain:0};if(!(i!=null&&i.look))return t;const n={op:"scene"};let s=i.look({scene:n,param:(a,o)=>e[a]??o});const r=[];for(;s&&s!==n;)r.unshift(s),s=s.input;for(const a of r){if(a.op==="grade")for(const o of["exposure","saturation","contrast","brightness","temperature","tint"])a.opts[o]!=null&&(t[o]=a.opts[o]);a.op==="vignette"&&(t.vignette=a.intensity,t.roundness=a.opts.roundness??2,t.feather=a.opts.feather??.45,t.vignetteColor=a.opts.color??[0,0,0]),a.op==="grain"&&(t.grain=a.intensity)}return t}const xb=`
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
}`;class bb{constructor(e,t,{neutral:n=!0}={}){this.renderer=e,this.rt=new Ri(2,2,{type:qn,colorSpace:jt,depthBuffer:!1});const s=vb(t.temperature,t.tint),r=new et().set(s[0][0],s[0][1],s[0][2],s[1][0],s[1][1],s[1][2],s[2][0],s[2][1],s[2][2]);this.material=new kn({uniforms:{tScene:{value:this.rt.texture},exposure:{value:t.exposure},contrast:{value:t.contrast},brightness:{value:t.brightness},saturation:{value:t.saturation},wb:{value:r},neutralOn:{value:n?1:0},vigI:{value:t.vignette},vigRound:{value:t.roundness},vigFeather:{value:t.feather},vigColor:{value:new X(...t.vignetteColor)},grainI:{value:t.grain},time:{value:0},res:{value:new yt(2,2)}},vertexShader:"varying vec2 vUv; void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:xb,depthTest:!1,depthWrite:!1}),this.quad=new sn(new hi(2,2),this.material),this.quad.frustumCulled=!1,this.scene=new cd,this.scene.add(this.quad),this.camera=new Fc(-1,1,1,-1,0,1)}setSize(e,t){this.rt.setSize(Math.max(2,e),Math.max(2,t)),this.material.uniforms.res.value.set(e,t)}render(e,t,n=0){const s=this.renderer;s.setRenderTarget(this.rt),s.clear(),s.render(e,t),s.setRenderTarget(null),this.material.uniforms.time.value=n,s.render(this.scene,this.camera)}}const _f=.4,wb=Object.freeze({r:.5,g:.5,b:.5,a:1}),Ua=i=>i<=.04045?i/12.92:Math.pow((i+.055)/1.055,2.4),Us=(i,e,t)=>Math.min(t,Math.max(e,i));function Is(i,e=1){const t=String(i).trim();return t.endsWith("%")?Number.parseFloat(t)/100*e:Number.parseFloat(t)}function vf(i,e,t){const n=Math.pow(i+.3963377774*e+.2158037573*t,3),s=Math.pow(i-.1055613458*e-.0638541728*t,3),r=Math.pow(i-.0894841775*e-1.291485548*t,3);return[4.0767416621*n-3.3077115913*s+.2309699292*r,-1.2684380046*n+2.6097574011*s-.3413193965*r,-.0041960863*n-.7034186147*s+1.707614701*r]}function yf([i,e,t]){const n=Math.cbrt(.4122214708*i+.5363325363*e+.0514459929*t),s=Math.cbrt(.2119034982*i+.6806995451*e+.1073969566*t),r=Math.cbrt(.0883024619*i+.2817188376*e+.6299787005*t);return[.2104542553*n+.793617785*s-.0040720468*r,1.9779984951*n-2.428592205*s+.4505937099*r,.0259040371*n+.7827717662*s-.808675766*r]}const rl=.02,xf=1e-4,bf=i=>i.every(e=>e>=0&&e<=1),wf=i=>i.map(e=>Us(e,0,1)),Mf=(i,e)=>Math.hypot(i[0]-e[0],i[1]-e[1],i[2]-e[2]);function Mb(i,e,t){const n=t*Math.PI/180,s=Math.cos(n),r=Math.sin(n),a=p=>[i,p*s,p*r];let o=a(e),c=vf(...o);if(bf(c))return c;let l=wf(c);if(Mf(yf(l),o)<rl)return l;let f=0,h=e,d=!0;for(;h-f>xf;){const p=(f+h)/2;if(o=a(p),c=vf(...o),d&&bf(c)){f=p;continue}l=wf(c);const x=Mf(yf(l),o);if(x<rl){if(rl-x<xf)return l;d=!1,f=p}else h=p}return l}function Sb(i){const[e,t]=i.split("/"),n=e.trim().split(/[\s,]+/);if(n.length<3)return null;const s=Us(Is(n[0]),0,1),r=Us(Is(n[1],_f),0,_f),a=Is(n[2]);if(![s,r,a].every(Number.isFinite))return null;const[o,c,l]=s>=1?[1,1,1]:s<=0?[0,0,0]:Mb(s,r,a),f=t===void 0?1:Us(Is(t),0,1);return{r:o,g:c,b:l,a:Number.isFinite(f)?f:1}}function Eb(i){const e=i.length===3||i.length===4?[...i].map(n=>n+n).join(""):i;if(!/^[0-9a-f]{6}([0-9a-f]{2})?$/i.test(e))return null;const t=n=>Number.parseInt(e.slice(n,n+2),16)/255;return{r:Ua(t(0)),g:Ua(t(2)),b:Ua(t(4)),a:e.length===8?t(6):1}}function Tb(i){const e=i.split(/[\s,/]+/).filter(Boolean);if(e.length<3)return null;const t=s=>Ua(Us(Is(s,255)/255,0,1)),n={r:t(e[0]),g:t(e[1]),b:t(e[2]),a:e[3]===void 0?1:Us(Is(e[3]),0,1)};return[n.r,n.g,n.b,n.a].every(Number.isFinite)?n:null}function Sf(i){const e=String(i??"").trim().toLowerCase();let t=null;return e.startsWith("#")?t=Eb(e.slice(1)):e.startsWith("oklch(")&&e.endsWith(")")?t=Sb(e.slice(6,-1)):/^rgba?\(/.test(e)&&e.endsWith(")")&&(t=Tb(e.slice(e.indexOf("(")+1,-1))),t??{...wb}}const Ab={alpha:Mn,add:Mr,multiply:qa,subtract:Wa},Ef=[1,.85,.72],Rb=1e3,Cb=.75,Pb=.95,Lb=2,Ib=8,Db=2,Ob=3,po=i=>{const e=String(i),t="/realm/play/";return e.startsWith("/cdn/")?t+"cdn/"+e.slice(5).replace(/\.png$/i,".webp")+"?v="+Ob:e.startsWith("/art/")?t+e.slice(1):null},Nb=i=>String(i).replace(/\/cdn\/(value\.[0-9a-f]{64}\.(?:png|webp|mp3))/g,e=>po(e));class kb{constructor(e,{toneMapping:t="neutral",look:n=null,scale:s=null}={}){this.renderer=new qx({canvas:e,antialias:!1,alpha:!1,powerPreference:"high-performance"}),this.base=Math.min(devicePixelRatio||1,2),this.forced=s,this.step=0,this.gov={ms:[],sum:0,slow:0,keep:0,flips:0,sinceUp:1/0},this.renderer.setPixelRatio(this.scale),this.renderer.outputColorSpace=jt,this.renderer.toneMapping=oi,this.look=new bb(this.renderer,n??{exposure:1,saturation:1,contrast:1,brightness:0,temperature:0,tint:0,vignette:0,roundness:2,feather:.45,vignetteColor:[0,0,0],grain:0},{neutral:t==="neutral"}),this.scene=new cd,this.camera=new Fc(-1,1,1,-1,.1,1e3),this.camera.position.set(0,0,100),this.sprites=[],this.loader=new hd,this.missing=[],this.t=0}worldToScreen(e){const t=new X(e.x,e.y,0).project(this.camera);return{x:(t.x+1)/2*this.cssW,y:(1-t.y)/2*this.cssH,onScreen:Math.abs(t.x)<=1&&Math.abs(t.y)<=1}}get scale(){return this.forced??this.base*Ef[this.step]}resize(e,t){this.cssW=e,this.cssH=t,this.renderer.setPixelRatio(this.scale),this.renderer.setSize(e,t,!1);const n=this.renderer.getPixelRatio();this.look.setSize(Math.round(e*n),Math.round(t*n)),this.aspect=e/Math.max(1,t)}govern(e){const t=this.gov;if(this.forced!=null||!(e>0))return;if(e>250){t.ms.length=0,t.sum=0;return}if(t.ms.push(e),t.sum+=e,t.sum<Rb)return;const n=[...t.ms].sort((a,o)=>a-o)[t.ms.length>>1],s=t.sum/t.ms.length;t.ms.length=0,t.sum=0,t.sinceUp++,this.refresh=Math.max(4,Math.min(this.refresh??n,n));const r=this.refresh/s;r<Cb?(t.keep=0,++t.slow>=Lb&&this.step<Ef.length-1&&(t.slow=0,t.sinceUp<=4&&t.flips++,this.step++,this.resize(this.cssW,this.cssH))):r>Pb?(t.slow=0,++t.keep>=Ib&&this.step>0&&t.flips<Db&&(t.keep=0,t.sinceUp=0,this.step--,this.resize(this.cssW,this.cssH))):(t.slow=0,t.keep=0)}setSky(e){if((e==null?void 0:e.kind)!=="gradient")return;const t=Sf(e.horizon),n=Sf(e.zenith),s=new kn({uniforms:{h:{value:new X(t.r,t.g,t.b)},z:{value:new X(n.r,n.g,n.b)}},vertexShader:"varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:"uniform vec3 h; uniform vec3 z; varying vec2 vUv; void main() { gl_FragColor = vec4(mix(h, z, vUv.y), 1.0); }",depthTest:!1,depthWrite:!1});this.sky=new sn(new hi(1,1),s),this.sky.renderOrder=-1e12,this.sky.frustumCulled=!1,this.scene.add(this.sky)}async picture(e,t){let n,s={};const r=po(e);if(r)try{n=await this.loader.loadAsync(r)}catch{return this.missing.push(e),null}else{const o=await lc(e);n=new rc(o.canvas),s=o.meta}n.colorSpace=jt;const a=(t??s.filter??(r?"linear":"pixel"))==="linear";return n.magFilter=a?cn:Wt,n.minFilter=a?Gn:Wt,n.generateMipmaps=a,n.wrapS=Sr,n.wrapT=ii,{tex:n,meta:s}}async addSprite(e,t){var l,f;const n=e.sprite,s=await this.picture(n.texture,n.filter);if(!s)return null;(((l=n.uvRect)==null?void 0:l.height)??1)>1&&(s.tex.wrapT=Sr);const r=new Ar({map:s.tex,transparent:!0,depthTest:!1,depthWrite:!1,opacity:n.opacity??1,blending:Ab[n.blend]??Mn});n.tint!=null&&(r.color=Array.isArray(n.tint)?new dt(n.tint[0],n.tint[1],n.tint[2]):new dt(n.tint));const a=new sn(new hi(1,1),r);a.renderOrder=oc(n,t),a.frustumCulled=!1,this.scene.add(a);const o=e.feetPosition??{},c={id:e.id,mesh:a,meta:s.meta,s:{feet:o,attach:o.attach==="camera",size:n.size??[1,1],anchor:n.anchor,parallax:n.parallax,repeatX:!!n.repeatX,uvRect:n.uvRect},clip:((f=Object.values(e.mixer??{})[0])==null?void 0:f.clip)??s.meta.defaultAnimation??null};return this.sprites.push(c),c}async setTiles(e,t){const n=await lc(e.tileset),s=new rc(n.canvas);s.colorSpace=jt;const r=(n.meta.filter??"pixel")==="linear";s.magFilter=s.minFilter=r?cn:Wt,s.generateMipmaps=!1;const a=e.tilesetColumns??4,o=n.canvas.width/a,c=$x(t.tileAt,{i0:-260,i1:260,k0:0,k1:40,size:e.tileSize??1,columns:a,rows:Math.max(1,Math.round(n.canvas.height/o)),texW:n.canvas.width,texH:n.canvas.height}),l=new di;l.setAttribute("position",new ci(c.positions,3)),l.setAttribute("uv",new ci(c.uvs,2)),l.setIndex(c.indices);const f=new sn(l,new Ar({map:s,transparent:!0,depthTest:!1,depthWrite:!1}));f.renderOrder=oc({sortingLayer:0},0),f.frustumCulled=!1,this.scene.add(f),this.tiles=f}frame(e,t){var o;this.t+=t;const n=e.orthoSize,s=n*this.aspect,r=s*2*1.1,a=this.camera;a.left=-s,a.right=s,a.top=n,a.bottom=-n,a.position.set(e.x,e.y,100),a.updateProjectionMatrix(),this.sky&&(this.sky.position.set(e.x,e.y,-50),this.sky.scale.set(s*2.02,n*2.02,1));for(const c of this.sprites){const l=jx(c.s,e,r);c.mesh.position.set(l.cx,l.cy,0),c.mesh.scale.set(l.w,l.h,1);const f=c.meta.rows??1,h=c.meta.fps??0,d=c.clip&&((o=c.meta.animations)==null?void 0:o[c.clip])||null,p=d&&h?d[Math.floor(this.t*h)%d.length]:0,x=Xx(c.s,e,r,{index:p,rows:f}),y=c.mesh.material.map;y.repeat.set(x.repeat[0],x.repeat[1]),y.offset.set(x.offset[0],x.offset[1])}this.look.render(this.scene,a,this.t)}}const Ub=16/9,Fb=1.2,al=1.9,Bb=.5,Tf=3,zb=.22,Hb=Object.assign({"/world/scripts/arrival.js":()=>Ne(()=>import("./arrival-BGB7dWv4.js"),__vite__mapDeps([0,1])),"/world/scripts/bank.js":()=>Ne(()=>import("./bank-BayQo6zl.js"),[]),"/world/scripts/camera.js":()=>Ne(()=>import("./camera-CFdr3yOD.js"),[]),"/world/scripts/db.js":()=>Ne(()=>import("./db-UtNTmWkn.js"),[]),"/world/scripts/ground.js":()=>Ne(()=>import("./ground-b0nUTt3G.js"),[]),"/world/scripts/joust-camera.js":()=>Ne(()=>import("./joust-camera-Fg9LmHPp.js"),[]),"/world/scripts/jouster.js":()=>Ne(()=>import("./jouster-CNNuhO2i.js"),__vite__mapDeps([2,3,1])),"/world/scripts/lib/color.js":()=>Ne(()=>import("./color-DDSg_o2D.js"),[]),"/world/scripts/lib/econ.js":()=>Ne(()=>Promise.resolve().then(()=>Xc),void 0),"/world/scripts/look-default.js":()=>Ne(()=>import("./look-default-BibdNaYP.js"),[]),"/world/scripts/player.js":()=>Ne(()=>import("./player-CqzJShkt.js"),__vite__mapDeps([4,5,6,7])),"/world/scripts/tex-hero.js":()=>Ne(()=>import("./tex-hero-D9FSdSdV.js"),__vite__mapDeps([6,5,7])),"/world/scripts/tex-lance.js":()=>Ne(()=>import("./tex-lance-h9_Q8DQT.js"),[]),"/world/scripts/tex-meadow.js":()=>Ne(()=>import("./tex-meadow-CQRPL3Pn.js"),__vite__mapDeps([8,5,7])),"/world/scripts/tex-sky.js":()=>Ne(()=>import("./tex-sky-H7hQEGu6.js"),__vite__mapDeps([9,5,7])),"/world/scripts/tex-soil.js":()=>Ne(()=>import("./tex-soil-6tL0S4Gb.js"),__vite__mapDeps([10,5,7])),"/world/scripts/tex-tilt.js":()=>Ne(()=>import("./tex-tilt-DATa2CU9.js"),[]),"/world/scripts/tileset-ground.js":()=>Ne(()=>import("./tileset-ground-dAb9Cutk.js"),__vite__mapDeps([11,5])),"/world/scripts/tileset-sand.js":()=>Ne(()=>import("./tileset-sand-D3oqsxai.js"),[]),"/world/scripts/ui.js":()=>Ne(()=>import("./ui-3thon8Eh.js"),__vite__mapDeps([12,3]))});async function Gb(i,e,{screenAspect:t=!1}={}){const n=await Rc(i.camera),s=[].concat(n.behavior??[]),r=await Promise.all(s.map(async c=>{const l=Hb["/world/"+String(c).split("#")[0]];if(!l)throw new Error(`no camera behavior ${c}`);return l()})),a={state:structuredClone(n.state??{}),target:e,feetPosition:{x:0,y:0,z:15},rotation:null},o={x:null,y:null,on:!1};return{self:a,update(c,l,f){var L,C,D;const h=.008333333333333333;let d=Math.min(c,.25);const p=t?{aspect:f}:{};for(;d>1e-6;){const S=Math.min(h,d);d-=S;const b={self:a,now:()=>l,world:{camera:p},query:()=>[],getObject:()=>null};for(const O of r)(L=O.update)==null||L.call(O,b,S)}const x=a.state.orthoSize??((C=n.state)==null?void 0:C.orthoSize)??6;let y=a.feetPosition.x,_=a.feetPosition.y;const g=e.state??{},R=g.phase&&g.phase!=="armory"&&g.phase!=="end",T=x*f,w=e.feetPosition.x,I=w<y-T+al||w>y+T-al;if(!t&&R&&f>0&&f<Ub&&(f<Fb||I)){const S=(D=g.hud)==null?void 0:D.oppX,b=g.dir||1;let O=w+b*(T-al);if(S!=null){const $=2*(T-Bb),re=Math.min(1,Math.max(0,($+Tf-Math.abs(S-w))/Tf));O+=((w+S)/2-O)*re}const F=f<1?x*(1-2*zb):_,U=1-Math.exp(-6*Math.min(c,.25));o.on||(o.x=y,o.y=_,o.on=!0),o.x+=(O-o.x)*U,o.y+=(F-o.y)*U,y=o.x,_=o.y}else if(o.on){const S=1-Math.exp(-6*Math.min(c,.25));o.x+=(y-o.x)*S,o.y+=(_-o.y)*S,Math.abs(o.x-y)<.02&&Math.abs(o.y-_)<.02?o.on=!1:(y=o.x,_=o.y)}return{x:y,y:_,orthoSize:x}}}}const Vb=1/30,Wb=.25,$a=i=>i&&typeof i=="object"&&!Array.isArray(i),Rr=i=>({x:Number((i==null?void 0:i.x)??0),y:Number((i==null?void 0:i.y)??0),z:Number((i==null?void 0:i.z)??0)}),Af={linear:i=>i,easeInQuad:i=>i*i,easeOutQuad:i=>i*(2-i),easeInOutQuad:i=>i<.5?2*i*i:-1+(4-2*i)*i,easeOutCubic:i=>1-Math.pow(1-i,3),easeInCubic:i=>i*i*i,easeInOutCubic:i=>i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2};class qb{constructor(e,t,n){var s;this.id=e,this.room=n,this.parent=t.parent??null,this.tags=[...t.tags??[]],this.state=structuredClone(t.state??{}),this.feetPosition=Rr(t.feetPosition),this.attach=((s=t.feetPosition)==null?void 0:s.attach)??null,this.velocity=Rr(t.velocity),this.rotation={yaw:0,pitch:0,roll:0,...$a(t.rotation)?t.rotation:{}},this.sprite=t.sprite?{...t.sprite}:null,this.physics=t.physics??null,this.visible=t.visible!==!1,this.fx=t.fx??null,this.anim={},this.audio=t.audio??null,this.scope=t.scope??null,this.audience=t.audience??null,this.lifetime=t.lifetime??null,this.bornAt=n.nowMs,this.grounded=!1,this.userId=t.userId??null,this.displayName=t.displayName??null,this.isLocal=t.isLocal??!0,this.behaviors=[].concat(t.behavior??[]),this.mods=[],this.fields={}}get body(){return $a(this.physics)?this.physics.body:this.physics}}function Xi(i){if(!i)return null;if(i._handle)return i._handle;const e=i.room,t={get id(){return i.id},get objectId(){return i.id},get tags(){return i.tags},get parent(){return i.parent},get state(){return i.state},set state(n){i.state=$a(n)?n:{}},get feetPosition(){return i.feetPosition},set feetPosition(n){i.feetPosition=Rr(n)},get velocity(){return i.velocity},set velocity(n){i.velocity=Rr(n)},get rotation(){return i.rotation},set rotation(n){i.rotation={yaw:0,pitch:0,roll:0,...$a(n)?n:{}}},get sprite(){return i.sprite},set sprite(n){i.sprite=n?{...n}:null},get visible(){return i.visible},set visible(n){i.visible=!!n},get fx(){return i.fx},set fx(n){i.fx=n},get anim(){return i.anim},get audio(){return i.audio},set audio(n){i.audio=n},get grounded(){return i.grounded},get userId(){return i.userId},get displayName(){return i.displayName},get isLocal(){return i.isLocal},get children(){return[...e.entities.values()].filter(n=>n.parent===i.id).map(Xi)},get lifetime(){return i.lifetime},set lifetime(n){i.lifetime=n,i.bornAt=e.nowMs}};return i._handle=new Proxy(t,{get:(n,s)=>s in n?n[s]:i.fields[s],set:(n,s,r)=>(s in n?n[s]=r:i.fields[s]=r,!0),has:(n,s)=>s in n||s in i.fields,deleteProperty:(n,s)=>(delete i.fields[s],!0)}),i._handle}class jb{constructor(e={}){this.roomId=e.roomId??"web",this.scripts=e.scripts??{},this.gravity=Rr(e.gravity??{y:-9.81}),this.groundY=e.groundY??0,this.sqlFor=e.sql??null,this.startMs=e.startMs??Date.now(),this.elapsed=0,this.clock=0,this.entities=new Map,this.timers=new Map,this.tweens=[],this.listeners=new Map,this.sinks={},this.session={},this.worldState={},this.placeState={},this.rng=bd.alea(e.seed??String(this.startMs)),this.timerSeq=0,this.timeScale=1,this.freezeUntil=0,this.slowUntil=0,this.inputs=new Map,this.inputSeq=0,this.errors=[],this.cameraState={}}get nowMs(){return this.startMs+this.clock}async loadModule(e){const t=String(e).split("#")[0],n=this.scripts["/world/"+t];if(!n)throw new Error(`no behavior ${t}`);return n()}ctxOf(e,t){const n=this,s=Xi(e);return{self:s,state:s?s.state:n.worldState,player:e&&e.tags.includes("player")?s:null,session:n.session,world:{state:n.worldState,camera:n.cameraState,mode:"dev",id:n.roomId},place:{state:n.placeState,gravity:n.gravity,players:n.players().map(Xi)},now:()=>n.nowMs,random:()=>n.rng(),getRoomId:()=>n.roomId,sql:n.sqlFor?n.sqlFor((e==null?void 0:e.userId)??null):null,after:(r,a,o)=>n.after(e,t,r,a,o),cancel:r=>n.timers.delete(r),emit:(r,a,o)=>n.emit(r,a,o,e),on:(r,a)=>n.on(r,a),spawn:(r,a)=>n.spawn(r,a,e),destroy:r=>n.destroy(r),getObject:r=>Xi(n.entities.get(r)),query:(r={})=>n.query(r,e),worldToScreen:r=>n.worldToScreen?n.worldToScreen(r):null,log:(...r)=>console.log("[world]",...r),_room:n}}async attachBehaviors(e){e.mods=await Promise.all(e.behaviors.map(t=>this.loadModule(t)));for(const t of e.mods)this.call(e,t,"onSpawn")}call(e,t,n,...s){if(typeof(t==null?void 0:t[n])=="function")try{const r=t[n](this.ctxOf(e,t),...s);return r&&typeof r.then=="function"&&r.catch(a=>this.fault(e,n,a)),r}catch(r){this.fault(e,n,r)}}fault(e,t,n){this.errors.push({at:this.nowMs,id:e==null?void 0:e.id,hook:t,message:String((n==null?void 0:n.message)??n)}),console.error(`[world] ${(e==null?void 0:e.id)??"room"} ${t}:`,n)}spawn(e,t,n){const s=typeof e=="string"?t??{}:e??{};let r=typeof e=="string"?e:s.id??`obj-${++this.timerSeq}`;const a=s.parent?`${s.parent}/${r}`:r;this.entities.has(a)&&this.destroy(a);const o=new qb(a,s,this);return this.entities.set(a,o),o.behaviors.length&&this.attachBehaviors(o).catch(c=>this.fault(o,"load",c)),a}destroy(e){for(const t of[].concat(e??[])){const n=this.entities.get(t);if(n){for(const s of[...this.entities.values()])s.parent===t&&this.destroy(s.id);for(const s of n.mods)this.call(n,s,"onDestroy");this.entities.delete(t);for(const[s,r]of this.timers)r.owner===t&&this.timers.delete(s)}}}query(e,t){let n=[...this.entities.values()];if(e.ignoreSelf!==!1&&t&&(n=n.filter(s=>s!==t)),e.tags&&(n=n.filter(s=>e.tags.every(r=>s.tags.includes(r)))),e.radius!=null&&t){const s=this.worldPosition(t);n=n.filter(r=>{const a=this.worldPosition(r);return Math.hypot(a.x-s.x,a.y-s.y,a.z-s.z)<=e.radius})}return e.select==="ids"?n.map(s=>s.id):n.map(Xi)}players(){return[...this.entities.values()].filter(e=>e.tags.includes("player"))}after(e,t,n,s,r){const a=`t${++this.timerSeq}`;return this.timers.set(a,{owner:(e==null?void 0:e.id)??null,mod:t,name:s,payload:r,due:this.clock+Math.max(0,n)*1e3}),a}on(e,t){return this.listeners.has(e)||this.listeners.set(e,new Set),this.listeners.get(e).add(t),()=>{var n;return(n=this.listeners.get(e))==null?void 0:n.delete(t)}}emit(e,t,n,s){var r,a;e==="hitstop"&&(this.freezeUntil=Math.max(this.freezeUntil,this.clock+((t==null?void 0:t.duration)??0)*1e3)),e==="slowMo"&&(this.slowUntil=this.clock+((t==null?void 0:t.duration)??0)*1e3,this.slowScale=(t==null?void 0:t.scale)??.4),(a=(r=this.sinks)[e])==null||a.call(r,t,n,s);for(const o of this.listeners.get(e)??[])try{o(t,n)}catch(c){this.fault(s,"on:"+e,c)}}animate(e,t,n={}){const s=this.entities.get(typeof e=="string"?e:e==null?void 0:e.id);if(!s)return;const r=Object.entries(t).map(([a,o])=>{const c=a.split("."),l=()=>c.reduce((h,d)=>h==null?void 0:h[d],s);let f=Array.isArray(o)?o.slice():[l(),o];return f=f.map((h,d)=>typeof h=="string"&&/^[+-]=/.test(h)?Number(d?f[d-1]:l())+Number(h.replace("=","")):Number(h)),{keys:c,pts:f}});this.tweens.push({e:s,tracks:r,t0:this.elapsed+(n.delay??0)*1e3,dur:Math.max(1,(n.duration??1)*1e3),ease:Af[n.easing]??Af.linear})}stepTweens(){this.tweens=this.tweens.filter(e=>{if(!this.entities.has(e.e.id))return!1;if(this.elapsed<e.t0)return!0;const t=Math.min(1,(this.elapsed-e.t0)/e.dur),n=e.ease(t);for(const s of e.tracks){const r=s.pts.length-1,a=n*r,o=Math.min(r-1,Math.floor(a)),c=a-o,l=r===0?s.pts[0]:s.pts[o]+(s.pts[o+1]-s.pts[o])*c,f=s.keys.slice(0,-1).reduce((h,d)=>h[d]??(h[d]={}),e.e);f[s.keys[s.keys.length-1]]=l}return t<1})}worldPosition(e){const t={...e.feetPosition};let n=e.parent?this.entities.get(e.parent):null;for(;n;)t.x+=n.feetPosition.x,t.y+=n.feetPosition.y,t.z+=n.feetPosition.z,n=n.parent?this.entities.get(n.parent):null;return t}advance(e){let t=Math.max(0,e)*1e3,n=Math.min(Math.max(0,e),Wb);for(;n>1e-6;){const s=Math.min(n,Vb);n-=s,t-=s*1e3,this.clock+=s*1e3;const r=this.clock<this.freezeUntil,a=r?0:this.clock<this.slowUntil?this.slowScale:1;this.tick(s*a)}t>0&&(this.clock+=t)}tick(e){this.elapsed+=e*1e3;const t=[...this.entities.values()];for(const n of t){const s=this.inputs.get(n.id);if(s){const r=s();Object.keys(r.pressed).length&&this.inputSeq++;for(const a of n.mods)this.call(n,a,"onInput",r)}}for(const n of t)if(this.entities.has(n.id))for(const s of n.mods)this.call(n,s,"update",e);for(const n of[...this.entities.values()])(n.body==="character"||n.body==="dynamic")&&(n.feetPosition={x:n.feetPosition.x+n.velocity.x*e,y:n.feetPosition.y+n.velocity.y*e,z:n.feetPosition.z},n.grounded=!1,n.feetPosition.y<=this.groundY&&(n.feetPosition.y=this.groundY,n.velocity.y<0&&(n.velocity={...n.velocity,y:0}),n.grounded=!0)),n.lifetime!=null&&this.nowMs-n.bornAt>=n.lifetime*1e3&&this.destroy(n.id);this.stepTweens();for(const[n,s]of[...this.timers]){if(s.due>this.clock)continue;this.timers.delete(n);const r=s.owner?this.entities.get(s.owner):null;s.owner&&!r||this.call(r,s.mod,s.name,s.payload)}}}const Xb=.1,wd=-.6,Md=tt.map_fragment.replace("texture2D( map, vMapUv )",`texture2D( map, vMapUv, ${wd.toFixed(2)} )`);Md.includes(wd.toFixed(2))||console.warn("[justa] three's map chunk changed: the mip bias is off");const $b={alpha:Mn,add:Mr,multiply:qa,subtract:Wa};class Kb{constructor(e,t,{hideBelow:n=null}={}){this.stage=e,this.room=t,this.hideBelow=n,this.views=new Map,this.sources=new Map,this.order=new Map,this.seq=0,this.loader=new hd}source(e,t){const n=e+"|"+(t??"");return this.sources.has(n)||this.sources.set(n,(async()=>{const s=po(e);let r,a={};if(s)r=await this.loader.loadAsync(s);else{const c=await lc(e);r=new rc(c.canvas),a=c.meta}r.colorSpace=jt;const o=(t??a.filter??(s?"linear":"pixel"))==="linear";return r.magFilter=o?cn:Wt,r.minFilter=o?Gn:Wt,r.generateMipmaps=o,{tex:r,meta:a}})().catch(s=>(console.warn("[justa] picture",e,(s==null?void 0:s.message)??s),null))),this.sources.get(n)}view(e){let t=this.views.get(e.id);if(!t){const n=new fn,s=new Ar({transparent:!0,depthTest:!1,depthWrite:!1,visible:!1});s.onBeforeCompile=a=>{a.fragmentShader=a.fragmentShader.replace("#include <map_fragment>",Md)},s.customProgramCacheKey=()=>"sprite-bias";const r=new sn(new hi(1,1),s);r.frustumCulled=!1,n.add(r),this.stage.scene.add(n),t={pivot:n,mesh:r,ref:null,pending:null,seq:++this.seq},this.views.set(e.id,t)}return t}setTexture(e,t){const n=t.texture,s=n+"|"+(t.filter??"");e.ref!==s&&(e.ref=s,e.pending=s,this.source(n,t.filter).then(r=>{var o;if(e.pending!==s||!r)return;const a=r.tex.clone();a.wrapS=a.wrapT=ii,a.needsUpdate=!0,(o=e.mesh.material.map)==null||o.dispose(),e.mesh.material.map=a,e.mesh.material.needsUpdate=!0,e.meta=r.meta,this.stage.renderer.initTexture(a)}))}sync(){var t,n,s,r,a,o;const e=new Set;for(const c of this.room.entities.values()){const l=c.sprite;if(!l||!l.texture||Math.max(((t=l.size)==null?void 0:t[0])??1,((n=l.size)==null?void 0:n[1])??1)<Xb)continue;e.add(c.id);const f=this.view(c);this.setTexture(f,l);const h=f.mesh.material.map,d=((s=l.size)==null?void 0:s[0])??1,p=((r=l.size)==null?void 0:r[1])??1,[x,y]=l.anchor??vd,_=this.room.worldPosition(c);f.pivot.position.set(_.x,_.y,0),f.pivot.rotation.z=(((a=c.rotation)==null?void 0:a.roll)??0)*Math.PI/180,f.mesh.position.set((.5-x)*d,(.5-y)*p,0),f.mesh.scale.set(d,p,1);const g=l.uvRect??{x:0,y:0,width:1,height:1};if(h){const T=!!l.flipX,w=!!l.flipY;h.repeat.set(T?-g.width:g.width,w?-g.height:g.height),h.offset.set(T?g.x+g.width:g.x,w?g.y+g.height:g.y)}const R=f.mesh.material;R.visible=!!h&&c.visible!==!1&&(l.opacity??1)>0&&!(this.hideBelow!=null&&(l.sortingLayer??0)<this.hideBelow),R.opacity=l.opacity??1,R.blending=$b[l.blend]??Mn,l.tint!=null?R.color.set(Array.isArray(l.tint)?new dt(l.tint[0],l.tint[1],l.tint[2]):new dt(l.tint)):R.color.set(16777215),f.mesh.renderOrder=oc(l,f.seq%1e3)+(_.z??0)*10}for(const[c,l]of this.views)e.has(c)||(this.stage.scene.remove(l.pivot),(o=l.mesh.material.map)==null||o.dispose(),l.mesh.material.dispose(),l.mesh.geometry.dispose(),this.views.delete(c))}}const Rf={space:["Space"],enter:["Enter","NumpadEnter"],shift:["ShiftLeft","ShiftRight"],escape:["Escape"],tab:["Tab"]};function ol(i){const e=String(i);return Rf[e.toLowerCase()]?Rf[e.toLowerCase()]:/^[a-z]$/i.test(e)?["Key"+e.toUpperCase()]:/^[0-9]$/.test(e)?["Digit"+e]:[e]}class Yb{constructor(e={}){this.actions=e.actions??{},this.axesDef=e.axes??{},this.held=new Set,this.pressed=new Set,this.released=new Set,this.data={},this.at={},this.keys=new Set,this.byCode=new Map;for(const[t,n]of Object.entries(this.actions))for(const s of[].concat((n==null?void 0:n.keys)??[]))for(const r of ol(s))this.byCode.set(r,t)}action(e,t,{down:n=null,at:s=null}={}){if(n===!1){this.held.delete(e),this.released.add(e);return}this.pressed.has(e)||(this.at[e]=s??performance.now()),this.pressed.add(e),t!==void 0&&(this.data[e]=t),n===!0&&this.held.add(e)}axes(){const e={};for(const[t,n]of Object.entries(this.axesDef)){const s=String((n==null?void 0:n.keys)??"").split("/");let r=0;for(let a=0;a+1<s.length;a+=2)ol(s[a]).some(o=>this.keys.has(o))&&(r-=1),ol(s[a+1]).some(o=>this.keys.has(o))&&(r+=1);e[t]=Math.max(-1,Math.min(1,r))}return e}frame(){const e={pressed:Object.fromEntries([...this.pressed].map(t=>[t,!0])),released:Object.fromEntries([...this.released].map(t=>[t,!0])),held:Object.fromEntries([...this.held].map(t=>[t,!0])),actionData:this.data,axes:this.axes(),pressedAt:this.at};return this.pressed.clear(),this.released.clear(),this.data={},this.at={},e}bind(e){const t=s=>{var r;return/^(INPUT|TEXTAREA|SELECT)$/.test(((r=s.target)==null?void 0:r.tagName)??"")};addEventListener("keydown",s=>{if(t(s))return;this.keys.add(s.code);const r=this.byCode.get(s.code)??this.byCode.get(s.key);r&&!s.repeat&&(this.action(r,void 0,{down:!0,at:s.timeStamp}),s.preventDefault())}),addEventListener("keyup",s=>{this.keys.delete(s.code);const r=this.byCode.get(s.code)??this.byCode.get(s.key);r&&this.action(r,void 0,{down:!1})});const n=Object.entries(this.actions).filter(([,s])=>(s==null?void 0:s.mouse)==="left").map(([s])=>s);e.addEventListener("pointerdown",s=>{if(s.button===0)for(const r of n)this.action(r,void 0,{down:!0,at:s.timeStamp})}),e.addEventListener("pointerup",()=>{for(const s of n)this.action(s,void 0,{down:!1})}),addEventListener("blur",()=>{this.keys.clear(),this.held.clear()})}}var Cf=11;function Jb(i,e){var t=e.attributes,n,s,r,a,o;if(!(e.nodeType===Cf||i.nodeType===Cf)){for(var c=t.length-1;c>=0;c--)n=t[c],s=n.name,r=n.namespaceURI,a=n.value,r?(s=n.localName||s,o=i.getAttributeNS(r,s),o!==a&&(n.prefix==="xmlns"&&(s=n.name),i.setAttributeNS(r,s,a))):(o=i.getAttribute(s),o!==a&&i.setAttribute(s,a));for(var l=i.attributes,f=l.length-1;f>=0;f--)n=l[f],s=n.name,r=n.namespaceURI,r?(s=n.localName||s,e.hasAttributeNS(r,s)||i.removeAttributeNS(r,s)):e.hasAttribute(s)||i.removeAttribute(s)}}var xa,Zb="http://www.w3.org/1999/xhtml",rn=typeof document>"u"?void 0:document,Qb=!!rn&&"content"in rn.createElement("template"),ew=!!rn&&rn.createRange&&"createContextualFragment"in rn.createRange();function tw(i){var e=rn.createElement("template");return e.innerHTML=i,e.content.childNodes[0]}function nw(i){xa||(xa=rn.createRange(),xa.selectNode(rn.body));var e=xa.createContextualFragment(i);return e.childNodes[0]}function iw(i){var e=rn.createElement("body");return e.innerHTML=i,e.childNodes[0]}function sw(i){return i=i.trim(),Qb?tw(i):ew?nw(i):iw(i)}function ba(i,e){var t=i.nodeName,n=e.nodeName,s,r;return t===n?!0:(s=t.charCodeAt(0),r=n.charCodeAt(0),s<=90&&r>=97?t===n.toUpperCase():r<=90&&s>=97?n===t.toUpperCase():!1)}function rw(i,e){return!e||e===Zb?rn.createElement(i):rn.createElementNS(e,i)}function aw(i,e){for(var t=i.firstChild;t;){var n=t.nextSibling;e.appendChild(t),t=n}return e}function ll(i,e,t){i[t]!==e[t]&&(i[t]=e[t],i[t]?i.setAttribute(t,""):i.removeAttribute(t))}var Pf={OPTION:function(i,e){var t=i.parentNode;if(t){var n=t.nodeName.toUpperCase();n==="OPTGROUP"&&(t=t.parentNode,n=t&&t.nodeName.toUpperCase()),n==="SELECT"&&!t.hasAttribute("multiple")&&(i.hasAttribute("selected")&&!e.selected&&(i.setAttribute("selected","selected"),i.removeAttribute("selected")),t.selectedIndex=-1)}ll(i,e,"selected")},INPUT:function(i,e){ll(i,e,"checked"),ll(i,e,"disabled"),i.value!==e.value&&(i.value=e.value),e.hasAttribute("value")||i.removeAttribute("value")},TEXTAREA:function(i,e){var t=e.value;i.value!==t&&(i.value=t);var n=i.firstChild;if(n){var s=n.nodeValue;if(s==t||!t&&s==i.placeholder)return;n.nodeValue=t}},SELECT:function(i,e){if(!e.hasAttribute("multiple")){for(var t=-1,n=0,s=i.firstChild,r,a;s;)if(a=s.nodeName&&s.nodeName.toUpperCase(),a==="OPTGROUP")r=s,s=r.firstChild,s||(s=r.nextSibling,r=null);else{if(a==="OPTION"){if(s.hasAttribute("selected")){t=n;break}n++}s=s.nextSibling,!s&&r&&(s=r.nextSibling,r=null)}i.selectedIndex=t}}},pr=1,Lf=11,If=3,Df=8;function bi(){}function ow(i){if(i)return i.getAttribute&&i.getAttribute("id")||i.id}function lw(i){return function(t,n,s){if(s||(s={}),typeof n=="string")if(t.nodeName==="#document"||t.nodeName==="HTML"){var r=n;n=rn.createElement("html"),n.innerHTML=r}else if(t.nodeName==="BODY"){var a=n;n=rn.createElement("html"),n.innerHTML=a;var o=n.querySelector("body");o&&(n=o)}else n=sw(n);else n.nodeType===Lf&&(n=n.firstElementChild);var c=s.getNodeKey||ow,l=s.onBeforeNodeAdded||bi,f=s.onNodeAdded||bi,h=s.onBeforeElUpdated||bi,d=s.onElUpdated||bi,p=s.onBeforeNodeDiscarded||bi,x=s.onNodeDiscarded||bi,y=s.onBeforeElChildrenUpdated||bi,_=s.skipFromChildren||bi,g=s.addChild||function(ee,ne){return ee.appendChild(ne)},R=s.childrenOnly===!0,T=Object.create(null),w=[];function I(ee){w.push(ee)}function L(ee,ne){if(ee.nodeType===pr)for(var me=ee.firstChild;me;){var ve=void 0;ne&&(ve=c(me))?I(ve):(x(me),me.firstChild&&L(me,ne)),me=me.nextSibling}}function C(ee,ne,me){p(ee)!==!1&&(ne&&ne.removeChild(ee),x(ee),L(ee,me))}function D(ee){if(ee.nodeType===pr||ee.nodeType===Lf)for(var ne=ee.firstChild;ne;){var me=c(ne);me&&(T[me]=ne),D(ne),ne=ne.nextSibling}}D(t);function S(ee){f(ee);for(var ne=ee.firstChild;ne;){var me=ne.nextSibling,ve=c(ne);if(ve){var Re=T[ve];Re&&ba(ne,Re)?(ne.parentNode.replaceChild(Re,ne),O(Re,ne)):S(ne)}else S(ne);ne=me}}function b(ee,ne,me){for(;ne;){var ve=ne.nextSibling;(me=c(ne))?I(me):C(ne,ee,!0),ne=ve}}function O(ee,ne,me){var ve=c(ne);if(ve&&delete T[ve],!me){var Re=h(ee,ne);if(Re===!1||(Re instanceof HTMLElement&&(ee=Re,D(ee)),i(ee,ne),d(ee),y(ee,ne)===!1))return}ee.nodeName!=="TEXTAREA"?F(ee,ne):Pf.TEXTAREA(ee,ne)}function F(ee,ne){var me=_(ee,ne),ve=ne.firstChild,Re=ee.firstChild,Q,ue,Me,ge,ke;e:for(;ve;){for(ge=ve.nextSibling,Q=c(ve);!me&&Re;){if(Me=Re.nextSibling,ve.isSameNode&&ve.isSameNode(Re)){ve=ge,Re=Me;continue e}ue=c(Re);var ze=Re.nodeType,ae=void 0;if(ze===ve.nodeType&&(ze===pr?(Q?Q!==ue&&((ke=T[Q])?Me===ke?ae=!1:(ee.insertBefore(ke,Re),ue?I(ue):C(Re,ee,!0),Re=ke,ue=c(Re)):ae=!1):ue&&(ae=!1),ae=ae!==!1&&ba(Re,ve),ae&&O(Re,ve)):(ze===If||ze==Df)&&(ae=!0,Re.nodeValue!==ve.nodeValue&&(Re.nodeValue=ve.nodeValue))),ae){ve=ge,Re=Me;continue e}ue?I(ue):C(Re,ee,!0),Re=Me}if(Q&&(ke=T[Q])&&ba(ke,ve))me||g(ee,ke),O(ke,ve);else{var de=l(ve);de!==!1&&(de&&(ve=de),ve.actualize&&(ve=ve.actualize(ee.ownerDocument||rn)),g(ee,ve),S(ve))}ve=ge,Re=Me}b(ee,Re,ue);var Se=Pf[ee.nodeName];Se&&Se(ee,ne)}var U=t,$=U.nodeType,re=n.nodeType;if(!R){if($===pr)re===pr?ba(t,n)||(x(t),U=aw(t,rw(n.nodeName,n.namespaceURI))):U=n;else if($===If||$===Df){if(re===$)return U.nodeValue!==n.nodeValue&&(U.nodeValue=n.nodeValue),U;U=n}}if(U===n)x(t);else{if(n.isSameNode&&n.isSameNode(U))return;if(O(U,n,R),w)for(var J=0,fe=w.length;J<fe;J++){var K=T[w[J]];K&&C(K,K.parentNode,!1)}}return!R&&U!==t&&t.parentNode&&(U.actualize&&(U=U.actualize(t.ownerDocument||rn)),t.parentNode.replaceChild(U,t)),U}}var cw=lw(Jb);const uw=30,fw=`<style id="hud-util">
:root{--spawn-chrome-reservation-right-inset:0px;--spawn-chrome-reservation-right-top:0px;--spawn-chrome-reservation-right-height:0px}
#tome-ui-container .fixed{position:fixed}#tome-ui-container .absolute{position:absolute}#tome-ui-container .inset-0{inset:0}
#tome-ui-container .pointer-events-none{pointer-events:none}#tome-ui-container .pointer-events-auto{pointer-events:auto}
</style>`;class hw{constructor({ui:e,room:t,player:n,input:s,toScreen:r,root:a=document.body}){var c;this.ui=e,this.room=t,this.player=n,this.input=s,this.toScreen=r,a.insertAdjacentHTML("beforeend",fw),this.container=document.createElement("div"),this.container.id="tome-ui-container",this.container.style.cssText="position:fixed;inset:0;pointer-events:none;z-index:20",this.mount=document.createElement("div"),this.mount.id="tome-game-mount",this.mount.style.cssText="position:fixed;inset:0;pointer-events:none;z-index:21",a.append(this.container,this.mount),this.last=0,this.failed=!1,this.born=new WeakMap,this.paintedAt=t.nowMs;for(const[l,f]of Object.entries(e))l!=="default"&&l!=="onMount"&&l!=="onDestroy"&&typeof f=="function"&&(window[l]=f);window.sendAction=(l,f,h={})=>{s.action(l,f,{at:performance.now(),...h}),h.down==null&&setTimeout(()=>s.action(l,void 0,{down:!1}),0)},window.sendAxis=(l,f)=>{s.sentAxes={...s.sentAxes??{},[l]:f}},window.openLink=l=>window.open(l,"_blank","noopener");const o=this.handle();try{(c=e.onMount)==null||c.call(e,this.mount,o)}catch(l){console.error("[hud] onMount",l)}}alignAnimations(){var t;const e=this.room.nowMs;for(const n of document.getAnimations()){const s=(t=n.effect)==null?void 0:t.target;if(!s||!this.container.contains(s)||!(n instanceof CSSAnimation))continue;let r=this.born.get(n);r==null&&(r=this.paintedAt,this.born.set(n,r)),n.playState!=="paused"&&n.pause(),n.currentTime=e-r}}handle(){const e=this.player;return{get state(){return e.state},get id(){return e.id},get displayName(){return e.displayName},get userId(){return e.userId}}}frame(e){if(e-this.last>=1e3/uw||this.room.inputSeq!==this.seenSeq){this.last=e,this.seenSeq=this.room.inputSeq,this.paintedAt=this.room.nowMs;const t={now:()=>this.room.nowMs,self:this.handle(),session:this.room.session,world:{engine:{ui:{referenceHeight:1080}}}};let n;try{n=this.ui.default(t,this.handle()),this.failed=!1}catch(s){this.failed||console.error("[hud] render",s),this.failed=!0,n=""}cw(this.container,`<div id="tome-ui-container">${Nb(n)}</div>`,{childrenOnly:!0,onBeforeElUpdated:(s,r)=>s===document.activeElement&&/^(INPUT|SELECT|TEXTAREA)$/.test(s.tagName)?!1:(s.tagName==="INPUT"&&(s.type==="radio"||s.type==="checkbox")&&(s.checked=r.hasAttribute("checked")),!0)})}this.alignAnimations();for(const t of this.container.querySelectorAll("[data-world-anchor]")){const n=this.room.entities.get(t.getAttribute("data-world-anchor"));if(!n)continue;const[s,r,a]=(t.getAttribute("data-anchor-offset")??"0 0 0").split(/\s+/).map(Number),o=this.room.worldPosition(n),c=this.toScreen({x:o.x+(s||0),y:o.y+(r||0),z:o.z+(a||0)});c&&(t.style.left=c.x.toFixed(1)+"px",t.style.top=c.y.toFixed(1)+"px")}}}class dw{constructor(e={}){this.map=e,this.buffers=new Map,this.loops=[];try{this.ctx=new AudioContext}catch(s){console.warn("[audio] no AudioContext",(s==null?void 0:s.message)??s),this.ctx=null;return}if(this.master=this.ctx.createGain(),this.master.connect(this.ctx.destination),new URLSearchParams(location.search).has("mute")&&(this.master.gain.value=0),this.music=this.ctx.createGain(),this.music.connect(this.master),this.ctx.state!=="running"){const s=()=>{this.ctx.resume().then(()=>{if(this.ctx.state==="running")for(const r of["pointerdown","keydown","touchend"])removeEventListener(r,s,!0)},()=>{})};for(const r of["pointerdown","keydown","touchend"])addEventListener(r,s,!0);this.ctx.resume().catch(()=>{})}const t=()=>{this.ctx.suspend().catch(()=>{})},n=()=>{document.visibilityState==="visible"&&this.ctx.resume().catch(()=>{})};addEventListener("pagehide",t),addEventListener("freeze",t),addEventListener("pageshow",s=>{s.persisted&&n()}),addEventListener("resume",n),document.addEventListener("visibilitychange",()=>document.visibilityState==="hidden"?t():n())}get running(){var e;return((e=this.ctx)==null?void 0:e.state)==="running"}fileOf(e){return e in this.map?this.map[e]:e}async buffer(e){const t=this.fileOf(e);if(!t||!this.ctx)return null;if(!this.buffers.has(t)){const n=po(t)??t;this.buffers.set(t,fetch(n).then(s=>{if(!s.ok)throw new Error(s.status);return s.arrayBuffer()}).then(s=>this.ctx.decodeAudioData(s)).catch(s=>(console.warn("[audio]",t,(s==null?void 0:s.message)??s),null)))}return this.buffers.get(t)}async play({clip:e,volume:t=.8,pitch:n=1}={}){if(!this.running||!e)return;const s=await this.buffer(e);if(!s)return;const r=this.ctx.createBufferSource(),a=this.ctx.createGain();r.buffer=s,r.playbackRate.value=n,a.gain.value=t,r.connect(a),a.connect(this.master),r.start()}async loop(e){const t=await this.buffer(e.clip);if(!t)return;const n=this.ctx.createBufferSource(),s=this.ctx.createGain();n.buffer=t,n.loop=e.loop!==!1,s.gain.value=e.gain??1,n.connect(s),s.connect(e.bus==="Music"?this.music:this.master),n.start(),this.loops.push(n)}}var Sd={exports:{}};(function(i,e){var t=void 0,n=function(s){return t||(t=new Promise(function(r,a){var o=typeof s<"u"?s:{},c=o.onAbort;o.onAbort=function(u){a(new Error(u)),c&&c(u)},o.postRun=o.postRun||[],o.postRun.push(function(){r(o)}),i=void 0;var l;l||(l=typeof o<"u"?o:{});var f=typeof window=="object",h=typeof importScripts=="function",d=typeof process=="object"&&typeof process.versions=="object"&&typeof process.versions.node=="string";l.onRuntimeInitialized=function(){function u(G,ce){switch(typeof ce){case"boolean":cp(G,ce?1:0);break;case"number":ap(G,ce);break;case"string":op(G,ce,-1,-1);break;case"object":if(ce===null)nu(G);else if(ce.length!=null){var Be=zr(ce,Br);lp(G,Be,ce.length,-1),Gr(Be)}else Wr(G,"Wrong API use : tried to return a value of an unknown type ("+ce+").",-1);break;default:nu(G)}}function m(G,ce){for(var Be=[],Ke=0;Ke<G;Ke+=1){var rt=N(ce+4*Ke,"i32"),wt=tp(rt);if(wt===1||wt===2)rt=rp(rt);else if(wt===3)rt=ip(rt);else if(wt===4){wt=rt,rt=np(wt),wt=sp(wt);for(var An=new Uint8Array(rt),yn=0;yn<rt;yn+=1)An[yn]=S[wt+yn];rt=An}else rt=null;Be.push(rt)}return Be}function v(G,ce){this.Ka=G,this.db=ce,this.Ia=1,this.eb=[]}function A(G,ce){if(this.db=ce,ce=Fe(G)+1,this.Xa=vo(ce),this.Xa===null)throw Error("Unable to allocate memory for the SQL string");_e(G,b,this.Xa,ce),this.cb=this.Xa,this.Ta=this.hb=null}function k(G){if(this.filename="dbfile_"+(4294967295*Math.random()>>>0),G!=null){var ce=this.filename,Be="/",Ke=ce;if(Be&&(Be=typeof Be=="string"?Be:$t(Be),Ke=ce?Ue(Be+"/"+ce):Be),ce=Qe(!0,!0),Ke=ss(Ke,(ce!==void 0?ce:438)&4095|32768,0),G){if(typeof G=="string"){Be=Array(G.length);for(var rt=0,wt=G.length;rt<wt;++rt)Be[rt]=G.charCodeAt(rt);G=Be}xe(Ke,ce|146),Be=Ae(Ke,577),lt(Be,G,0,G.length,0),We(Be),xe(Ke,ce)}}this.handleError(Xe(this.filename,Y)),this.db=N(Y,"i32"),su(this.db),this.Ya={},this.Ma={}}var Y=pi(4),se=l.cwrap,Xe=se("sqlite3_open","number",["string","number"]),mt=se("sqlite3_close_v2","number",["number"]),nt=se("sqlite3_exec","number",["number","string","number","number","number"]),Dt=se("sqlite3_changes","number",["number"]),Gt=se("sqlite3_prepare_v2","number",["number","string","number","number","number"]),Jc=se("sqlite3_sql","string",["number"]),Fd=se("sqlite3_normalized_sql","string",["number"]),Zc=se("sqlite3_prepare_v2","number",["number","number","number","number","number"]),Bd=se("sqlite3_bind_text","number",["number","number","number","number","number"]),Qc=se("sqlite3_bind_blob","number",["number","number","number","number","number"]),zd=se("sqlite3_bind_double","number",["number","number","number"]),Hd=se("sqlite3_bind_int","number",["number","number","number"]),Gd=se("sqlite3_bind_parameter_index","number",["number","string"]),Vd=se("sqlite3_step","number",["number"]),Wd=se("sqlite3_errmsg","string",["number"]),qd=se("sqlite3_column_count","number",["number"]),jd=se("sqlite3_data_count","number",["number"]),Xd=se("sqlite3_column_double","number",["number","number"]),eu=se("sqlite3_column_text","string",["number","number"]),$d=se("sqlite3_column_blob","number",["number","number"]),Kd=se("sqlite3_column_bytes","number",["number","number"]),Yd=se("sqlite3_column_type","number",["number","number"]),Jd=se("sqlite3_column_name","string",["number","number"]),Zd=se("sqlite3_reset","number",["number"]),Qd=se("sqlite3_clear_bindings","number",["number"]),ep=se("sqlite3_finalize","number",["number"]),tu=se("sqlite3_create_function_v2","number","number string number number number number number number number".split(" ")),tp=se("sqlite3_value_type","number",["number"]),np=se("sqlite3_value_bytes","number",["number"]),ip=se("sqlite3_value_text","string",["number"]),sp=se("sqlite3_value_blob","number",["number"]),rp=se("sqlite3_value_double","number",["number"]),ap=se("sqlite3_result_double","",["number","number"]),nu=se("sqlite3_result_null","",["number"]),op=se("sqlite3_result_text","",["number","string","number","number"]),lp=se("sqlite3_result_blob","",["number","number","number","number"]),cp=se("sqlite3_result_int","",["number","number"]),Wr=se("sqlite3_result_error","",["number","string","number"]),iu=se("sqlite3_aggregate_context","number",["number","number"]),su=se("RegisterExtensionFunctions","number",["number"]);v.prototype.bind=function(G){if(!this.Ka)throw"Statement closed";return this.reset(),Array.isArray(G)?this.vb(G):G!=null&&typeof G=="object"?this.wb(G):!0},v.prototype.step=function(){if(!this.Ka)throw"Statement closed";this.Ia=1;var G=Vd(this.Ka);switch(G){case 100:return!0;case 101:return!1;default:throw this.db.handleError(G)}},v.prototype.qb=function(G){return G==null&&(G=this.Ia,this.Ia+=1),Xd(this.Ka,G)},v.prototype.zb=function(G){if(G==null&&(G=this.Ia,this.Ia+=1),G=eu(this.Ka,G),typeof BigInt!="function")throw Error("BigInt is not supported");return BigInt(G)},v.prototype.Ab=function(G){return G==null&&(G=this.Ia,this.Ia+=1),eu(this.Ka,G)},v.prototype.getBlob=function(G){G==null&&(G=this.Ia,this.Ia+=1);var ce=Kd(this.Ka,G);G=$d(this.Ka,G);for(var Be=new Uint8Array(ce),Ke=0;Ke<ce;Ke+=1)Be[Ke]=S[G+Ke];return Be},v.prototype.get=function(G,ce){ce=ce||{},G!=null&&this.bind(G)&&this.step(),G=[];for(var Be=jd(this.Ka),Ke=0;Ke<Be;Ke+=1)switch(Yd(this.Ka,Ke)){case 1:var rt=ce.useBigInt?this.zb(Ke):this.qb(Ke);G.push(rt);break;case 2:G.push(this.qb(Ke));break;case 3:G.push(this.Ab(Ke));break;case 4:G.push(this.getBlob(Ke));break;default:G.push(null)}return G},v.prototype.getColumnNames=function(){for(var G=[],ce=qd(this.Ka),Be=0;Be<ce;Be+=1)G.push(Jd(this.Ka,Be));return G},v.prototype.getAsObject=function(G,ce){G=this.get(G,ce),ce=this.getColumnNames();for(var Be={},Ke=0;Ke<ce.length;Ke+=1)Be[ce[Ke]]=G[Ke];return Be},v.prototype.getSQL=function(){return Jc(this.Ka)},v.prototype.getNormalizedSQL=function(){return Fd(this.Ka)},v.prototype.run=function(G){return G!=null&&this.bind(G),this.step(),this.reset()},v.prototype.mb=function(G,ce){ce==null&&(ce=this.Ia,this.Ia+=1),G=Pe(G);var Be=zr(G,Br);this.eb.push(Be),this.db.handleError(Bd(this.Ka,ce,Be,G.length-1,0))},v.prototype.ub=function(G,ce){ce==null&&(ce=this.Ia,this.Ia+=1);var Be=zr(G,Br);this.eb.push(Be),this.db.handleError(Qc(this.Ka,ce,Be,G.length,0))},v.prototype.lb=function(G,ce){ce==null&&(ce=this.Ia,this.Ia+=1),this.db.handleError((G===(G|0)?Hd:zd)(this.Ka,ce,G))},v.prototype.xb=function(G){G==null&&(G=this.Ia,this.Ia+=1),Qc(this.Ka,G,0,0,0)},v.prototype.nb=function(G,ce){switch(ce==null&&(ce=this.Ia,this.Ia+=1),typeof G){case"string":this.mb(G,ce);return;case"number":this.lb(G,ce);return;case"bigint":this.mb(G.toString(),ce);return;case"boolean":this.lb(G+0,ce);return;case"object":if(G===null){this.xb(ce);return}if(G.length!=null){this.ub(G,ce);return}}throw"Wrong API use : tried to bind a value of an unknown type ("+G+")."},v.prototype.wb=function(G){var ce=this;return Object.keys(G).forEach(function(Be){var Ke=Gd(ce.Ka,Be);Ke!==0&&ce.nb(G[Be],Ke)}),!0},v.prototype.vb=function(G){for(var ce=0;ce<G.length;ce+=1)this.nb(G[ce],ce+1);return!0},v.prototype.reset=function(){return this.freemem(),Qd(this.Ka)===0&&Zd(this.Ka)===0},v.prototype.freemem=function(){for(var G;(G=this.eb.pop())!==void 0;)Gr(G)},v.prototype.free=function(){this.freemem();var G=ep(this.Ka)===0;return delete this.db.Ya[this.Ka],this.Ka=0,G},A.prototype.next=function(){if(this.Xa===null)return{done:!0};if(this.Ta!==null&&(this.Ta.free(),this.Ta=null),!this.db.db)throw this.fb(),Error("Database closed");var G=or(),ce=pi(4);Mt(Y),Mt(ce);try{this.db.handleError(Zc(this.db.db,this.cb,-1,Y,ce)),this.cb=N(ce,"i32");var Be=N(Y,"i32");return Be===0?(this.fb(),{done:!0}):(this.Ta=new v(Be,this.db),this.db.Ya[Be]=this.Ta,{value:this.Ta,done:!1})}catch(Ke){throw this.hb=De(this.cb),this.fb(),Ke}finally{ar(G)}},A.prototype.fb=function(){Gr(this.Xa),this.Xa=null},A.prototype.getRemainingSQL=function(){return this.hb!==null?this.hb:De(this.cb)},typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"&&(A.prototype[Symbol.iterator]=function(){return this}),k.prototype.run=function(G,ce){if(!this.db)throw"Database closed";if(ce){G=this.prepare(G,ce);try{G.step()}finally{G.free()}}else this.handleError(nt(this.db,G,0,0,Y));return this},k.prototype.exec=function(G,ce,Be){if(!this.db)throw"Database closed";var Ke=or(),rt=null;try{var wt=Li(G),An=pi(4);for(G=[];N(wt,"i8")!==0;){Mt(Y),Mt(An),this.handleError(Zc(this.db,wt,-1,Y,An));var yn=N(Y,"i32");if(wt=N(An,"i32"),yn!==0){var dn=null;for(rt=new v(yn,this),ce!=null&&rt.bind(ce);rt.step();)dn===null&&(dn={columns:rt.getColumnNames(),values:[]},G.push(dn)),dn.values.push(rt.get(null,Be));rt.free()}}return G}catch(Rn){throw rt&&rt.free(),Rn}finally{ar(Ke)}},k.prototype.each=function(G,ce,Be,Ke,rt){typeof ce=="function"&&(Ke=Be,Be=ce,ce=void 0),G=this.prepare(G,ce);try{for(;G.step();)Be(G.getAsObject(null,rt))}finally{G.free()}if(typeof Ke=="function")return Ke()},k.prototype.prepare=function(G,ce){if(Mt(Y),this.handleError(Gt(this.db,G,-1,Y,0)),G=N(Y,"i32"),G===0)throw"Nothing to prepare";var Be=new v(G,this);return ce!=null&&Be.bind(ce),this.Ya[G]=Be},k.prototype.iterateStatements=function(G){return new A(G,this)},k.prototype.export=function(){Object.values(this.Ya).forEach(function(ce){ce.free()}),Object.values(this.Ma).forEach(as),this.Ma={},this.handleError(mt(this.db));var G=ft(this.filename);return this.handleError(Xe(this.filename,Y)),this.db=N(Y,"i32"),su(this.db),G},k.prototype.close=function(){this.db!==null&&(Object.values(this.Ya).forEach(function(G){G.free()}),Object.values(this.Ma).forEach(as),this.Ma={},this.handleError(mt(this.db)),q("/"+this.filename),this.db=null)},k.prototype.handleError=function(G){if(G===0)return null;throw G=Wd(this.db),Error(G)},k.prototype.getRowsModified=function(){return Dt(this.db)},k.prototype.create_function=function(G,ce){Object.prototype.hasOwnProperty.call(this.Ma,G)&&(as(this.Ma[G]),delete this.Ma[G]);var Be=Hr(function(Ke,rt,wt){rt=m(rt,wt);try{var An=ce.apply(null,rt)}catch(yn){Wr(Ke,yn,-1);return}u(Ke,An)},"viii");return this.Ma[G]=Be,this.handleError(tu(this.db,G,ce.length,1,0,Be,0,0,0)),this},k.prototype.create_aggregate=function(G,ce){var Be=ce.init||function(){return null},Ke=ce.finalize||function(dn){return dn},rt=ce.step;if(!rt)throw"An aggregate function must have a step function in "+G;var wt={};Object.hasOwnProperty.call(this.Ma,G)&&(as(this.Ma[G]),delete this.Ma[G]),ce=G+"__finalize",Object.hasOwnProperty.call(this.Ma,ce)&&(as(this.Ma[ce]),delete this.Ma[ce]);var An=Hr(function(dn,Rn,yo){var Di=iu(dn,1);Object.hasOwnProperty.call(wt,Di)||(wt[Di]=Be()),Rn=m(Rn,yo),Rn=[wt[Di]].concat(Rn);try{wt[Di]=rt.apply(null,Rn)}catch(up){delete wt[Di],Wr(dn,up,-1)}},"viii"),yn=Hr(function(dn){var Rn=iu(dn,1);try{var yo=Ke(wt[Rn])}catch(Di){delete wt[Rn],Wr(dn,Di,-1);return}u(dn,yo),delete wt[Rn]},"vi");return this.Ma[G]=An,this.Ma[ce]=yn,this.handleError(tu(this.db,G,rt.length-1,1,0,0,An,yn,0)),this},l.Database=k};var p=Object.assign({},l),x="./this.program",y="",_,g;if(d){var R=ka,T=ka;y=__dirname+"/",g=u=>(u=ue(u)?new URL(u):T.normalize(u),R.readFileSync(u)),_=u=>(u=ue(u)?new URL(u):T.normalize(u),new Promise((m,v)=>{R.readFile(u,void 0,(A,k)=>{A?v(A):m(k.buffer)})})),!l.thisProgram&&1<process.argv.length&&(x=process.argv[1].replace(/\\/g,"/")),process.argv.slice(2),i.exports=l}else(f||h)&&(h?y=self.location.href:typeof document<"u"&&document.currentScript&&(y=document.currentScript.src),y=y.startsWith("blob:")?"":y.substr(0,y.replace(/[?#].*/,"").lastIndexOf("/")+1),h&&(g=u=>{var m=new XMLHttpRequest;return m.open("GET",u,!1),m.responseType="arraybuffer",m.send(null),new Uint8Array(m.response)}),_=u=>ue(u)?new Promise((m,v)=>{var A=new XMLHttpRequest;A.open("GET",u,!0),A.responseType="arraybuffer",A.onload=()=>{(A.status==200||A.status==0&&A.response)&&v(A.response),m(A.status)},A.onerror=m,A.send(null)}):fetch(u,{credentials:"same-origin"}).then(m=>m.ok?m.arrayBuffer():Promise.reject(Error(m.status+" : "+m.url))));var w=l.print||console.log.bind(console),I=l.printErr||console.error.bind(console);Object.assign(l,p),p=null,l.thisProgram&&(x=l.thisProgram);var L;l.wasmBinary&&(L=l.wasmBinary);var C,D=!1,S,b,O,F,U,$,re;function J(){var u=C.buffer;l.HEAP8=S=new Int8Array(u),l.HEAP16=O=new Int16Array(u),l.HEAPU8=b=new Uint8Array(u),l.HEAPU16=new Uint16Array(u),l.HEAP32=F=new Int32Array(u),l.HEAPU32=U=new Uint32Array(u),l.HEAPF32=$=new Float32Array(u),l.HEAPF64=re=new Float64Array(u)}var fe=[],K=[],ee=[];function ne(){var u=l.preRun.shift();fe.unshift(u)}var me=0,ve=null;function Re(u){var m;throw(m=l.onAbort)==null||m.call(l,u),u="Aborted("+u+")",I(u),D=!0,new WebAssembly.RuntimeError(u+". Build with -sASSERTIONS for more info.")}var Q=u=>u.startsWith("data:application/octet-stream;base64,"),ue=u=>u.startsWith("file://"),Me;function ge(u){if(u==Me&&L)return new Uint8Array(L);if(g)return g(u);throw"both async and sync fetching of the wasm failed"}function ke(u){return L?Promise.resolve().then(()=>ge(u)):_(u).then(m=>new Uint8Array(m),()=>ge(u))}function ze(u,m,v){return ke(u).then(A=>WebAssembly.instantiate(A,m)).then(v,A=>{I(`failed to asynchronously prepare wasm: ${A}`),Re(A)})}function ae(u,m){var v=Me;L||typeof WebAssembly.instantiateStreaming!="function"||Q(v)||ue(v)||d||typeof fetch!="function"?ze(v,u,m):fetch(v,{credentials:"same-origin"}).then(A=>WebAssembly.instantiateStreaming(A,u).then(m,function(k){return I(`wasm streaming compile failed: ${k}`),I("falling back to ArrayBuffer instantiation"),ze(v,u,m)}))}var de,Se,Ye=u=>{for(;0<u.length;)u.shift()(l)};function N(u,m="i8"){switch(m.endsWith("*")&&(m="*"),m){case"i1":return S[u];case"i8":return S[u];case"i16":return O[u>>1];case"i32":return F[u>>2];case"i64":Re("to do getValue(i64) use WASM_BIGINT");case"float":return $[u>>2];case"double":return re[u>>3];case"*":return U[u>>2];default:Re(`invalid type for getValue: ${m}`)}}function Mt(u){var m="i32";switch(m.endsWith("*")&&(m="*"),m){case"i1":S[u]=0;break;case"i8":S[u]=0;break;case"i16":O[u>>1]=0;break;case"i32":F[u>>2]=0;break;case"i64":Re("to do setValue(i64) use WASM_BIGINT");case"float":$[u>>2]=0;break;case"double":re[u>>3]=0;break;case"*":U[u>>2]=0;break;default:Re(`invalid type for setValue: ${m}`)}}var it=typeof TextDecoder<"u"?new TextDecoder:void 0,Le=(u,m,v)=>{var A=m+v;for(v=m;u[v]&&!(v>=A);)++v;if(16<v-m&&u.buffer&&it)return it.decode(u.subarray(m,v));for(A="";m<v;){var k=u[m++];if(k&128){var Y=u[m++]&63;if((k&224)==192)A+=String.fromCharCode((k&31)<<6|Y);else{var se=u[m++]&63;k=(k&240)==224?(k&15)<<12|Y<<6|se:(k&7)<<18|Y<<12|se<<6|u[m++]&63,65536>k?A+=String.fromCharCode(k):(k-=65536,A+=String.fromCharCode(55296|k>>10,56320|k&1023))}}else A+=String.fromCharCode(k)}return A},De=(u,m)=>u?Le(b,u,m):"",gt=(u,m)=>{for(var v=0,A=u.length-1;0<=A;A--){var k=u[A];k==="."?u.splice(A,1):k===".."?(u.splice(A,1),v++):v&&(u.splice(A,1),v--)}if(m)for(;v;v--)u.unshift("..");return u},Ue=u=>{var m=u.charAt(0)==="/",v=u.substr(-1)==="/";return(u=gt(u.split("/").filter(A=>!!A),!m).join("/"))||m||(u="."),u&&v&&(u+="/"),(m?"/":"")+u},P=u=>{var m=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/.exec(u).slice(1);return u=m[0],m=m[1],!u&&!m?".":(m&&(m=m.substr(0,m.length-1)),u+m)},M=u=>{if(u==="/")return"/";u=Ue(u),u=u.replace(/\/$/,"");var m=u.lastIndexOf("/");return m===-1?u:u.substr(m+1)},V=()=>{if(typeof crypto=="object"&&typeof crypto.getRandomValues=="function")return v=>crypto.getRandomValues(v);if(d)try{var u=ka;if(u.randomFillSync)return v=>u.randomFillSync(v);var m=u.randomBytes;return v=>(v.set(m(v.byteLength)),v)}catch{}Re("initRandomDevice")},oe=u=>(oe=V())(u),le=(...u)=>{for(var m="",v=!1,A=u.length-1;-1<=A&&!v;A--){if(v=0<=A?u[A]:"/",typeof v!="string")throw new TypeError("Arguments to path.resolve must be strings");if(!v)return"";m=v+"/"+m,v=v.charAt(0)==="/"}return m=gt(m.split("/").filter(k=>!!k),!v).join("/"),(v?"/":"")+m||"."},te=[],Fe=u=>{for(var m=0,v=0;v<u.length;++v){var A=u.charCodeAt(v);127>=A?m++:2047>=A?m+=2:55296<=A&&57343>=A?(m+=4,++v):m+=3}return m},_e=(u,m,v,A)=>{if(!(0<A))return 0;var k=v;A=v+A-1;for(var Y=0;Y<u.length;++Y){var se=u.charCodeAt(Y);if(55296<=se&&57343>=se){var Xe=u.charCodeAt(++Y);se=65536+((se&1023)<<10)|Xe&1023}if(127>=se){if(v>=A)break;m[v++]=se}else{if(2047>=se){if(v+1>=A)break;m[v++]=192|se>>6}else{if(65535>=se){if(v+2>=A)break;m[v++]=224|se>>12}else{if(v+3>=A)break;m[v++]=240|se>>18,m[v++]=128|se>>12&63}m[v++]=128|se>>6&63}m[v++]=128|se&63}}return m[v]=0,v-k};function Pe(u,m){var v=Array(Fe(u)+1);return u=_e(u,v,0,v.length),m&&(v.length=u),v}var ot=[];function pe(u,m){ot[u]={input:[],output:[],Wa:m},rr(u,Oe)}var Oe={open(u){var m=ot[u.node.rdev];if(!m)throw new W(43);u.tty=m,u.seekable=!1},close(u){u.tty.Wa.fsync(u.tty)},fsync(u){u.tty.Wa.fsync(u.tty)},read(u,m,v,A){if(!u.tty||!u.tty.Wa.rb)throw new W(60);for(var k=0,Y=0;Y<A;Y++){try{var se=u.tty.Wa.rb(u.tty)}catch{throw new W(29)}if(se===void 0&&k===0)throw new W(6);if(se==null)break;k++,m[v+Y]=se}return k&&(u.node.timestamp=Date.now()),k},write(u,m,v,A){if(!u.tty||!u.tty.Wa.ib)throw new W(60);try{for(var k=0;k<A;k++)u.tty.Wa.ib(u.tty,m[v+k])}catch{throw new W(29)}return A&&(u.node.timestamp=Date.now()),k}},Ve={rb(){e:{if(!te.length){var u=null;if(d){var m=Buffer.alloc(256),v=0,A=process.stdin.fd;try{v=R.readSync(A,m,0,256)}catch(k){if(k.toString().includes("EOF"))v=0;else throw k}0<v&&(u=m.slice(0,v).toString("utf-8"))}else typeof window<"u"&&typeof window.prompt=="function"&&(u=window.prompt("Input: "),u!==null&&(u+=`
`));if(!u){u=null;break e}te=Pe(u,!0)}u=te.shift()}return u},ib(u,m){m===null||m===10?(w(Le(u.output,0)),u.output=[]):m!=0&&u.output.push(m)},fsync(u){u.output&&0<u.output.length&&(w(Le(u.output,0)),u.output=[])},Lb(){return{Gb:25856,Ib:5,Fb:191,Hb:35387,Eb:[3,28,127,21,4,0,1,0,17,19,26,0,18,15,23,22,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}},Mb(){return 0},Nb(){return[24,80]}},qe={ib(u,m){m===null||m===10?(I(Le(u.output,0)),u.output=[]):m!=0&&u.output.push(m)},fsync(u){u.output&&0<u.output.length&&(I(Le(u.output,0)),u.output=[])}};function Ie(u,m){var v=u.Ha?u.Ha.length:0;v>=m||(m=Math.max(m,v*(1048576>v?2:1.125)>>>0),v!=0&&(m=Math.max(m,256)),v=u.Ha,u.Ha=new Uint8Array(m),0<u.La&&u.Ha.set(v.subarray(0,u.La),0))}var Ee={Pa:null,Qa(){return Ee.createNode(null,"/",16895,0)},createNode(u,m,v,A){if((v&61440)===24576||(v&61440)===4096)throw new W(63);return Ee.Pa||(Ee.Pa={dir:{node:{Oa:Ee.Fa.Oa,Na:Ee.Fa.Na,lookup:Ee.Fa.lookup,$a:Ee.Fa.$a,rename:Ee.Fa.rename,unlink:Ee.Fa.unlink,rmdir:Ee.Fa.rmdir,readdir:Ee.Fa.readdir,symlink:Ee.Fa.symlink},stream:{Sa:Ee.Ga.Sa}},file:{node:{Oa:Ee.Fa.Oa,Na:Ee.Fa.Na},stream:{Sa:Ee.Ga.Sa,read:Ee.Ga.read,write:Ee.Ga.write,kb:Ee.Ga.kb,ab:Ee.Ga.ab,bb:Ee.Ga.bb}},link:{node:{Oa:Ee.Fa.Oa,Na:Ee.Fa.Na,readlink:Ee.Fa.readlink},stream:{}},ob:{node:{Oa:Ee.Fa.Oa,Na:Ee.Fa.Na},stream:go}}),v=Bn(u,m,v,A),qt(v.mode)?(v.Fa=Ee.Pa.dir.node,v.Ga=Ee.Pa.dir.stream,v.Ha={}):(v.mode&61440)===32768?(v.Fa=Ee.Pa.file.node,v.Ga=Ee.Pa.file.stream,v.La=0,v.Ha=null):(v.mode&61440)===40960?(v.Fa=Ee.Pa.link.node,v.Ga=Ee.Pa.link.stream):(v.mode&61440)===8192&&(v.Fa=Ee.Pa.ob.node,v.Ga=Ee.Pa.ob.stream),v.timestamp=Date.now(),u&&(u.Ha[m]=v,u.timestamp=v.timestamp),v},Kb(u){return u.Ha?u.Ha.subarray?u.Ha.subarray(0,u.La):new Uint8Array(u.Ha):new Uint8Array(0)},Fa:{Oa(u){var m={};return m.dev=(u.mode&61440)===8192?u.id:1,m.ino=u.id,m.mode=u.mode,m.nlink=1,m.uid=0,m.gid=0,m.rdev=u.rdev,qt(u.mode)?m.size=4096:(u.mode&61440)===32768?m.size=u.La:(u.mode&61440)===40960?m.size=u.link.length:m.size=0,m.atime=new Date(u.timestamp),m.mtime=new Date(u.timestamp),m.ctime=new Date(u.timestamp),m.yb=4096,m.blocks=Math.ceil(m.size/m.yb),m},Na(u,m){if(m.mode!==void 0&&(u.mode=m.mode),m.timestamp!==void 0&&(u.timestamp=m.timestamp),m.size!==void 0&&(m=m.size,u.La!=m))if(m==0)u.Ha=null,u.La=0;else{var v=u.Ha;u.Ha=new Uint8Array(m),v&&u.Ha.set(v.subarray(0,Math.min(m,u.La))),u.La=m}},lookup(){throw $e[44]},$a(u,m,v,A){return Ee.createNode(u,m,v,A)},rename(u,m,v){if(qt(u.mode)){try{var A=Fn(m,v)}catch{}if(A)for(var k in A.Ha)throw new W(55)}delete u.parent.Ha[u.name],u.parent.timestamp=Date.now(),u.name=v,m.Ha[v]=u,m.timestamp=u.parent.timestamp},unlink(u,m){delete u.Ha[m],u.timestamp=Date.now()},rmdir(u,m){var v=Fn(u,m),A;for(A in v.Ha)throw new W(55);delete u.Ha[m],u.timestamp=Date.now()},readdir(u){var m=[".",".."],v;for(v of Object.keys(u.Ha))m.push(v);return m},symlink(u,m,v){return u=Ee.createNode(u,m,41471,0),u.link=v,u},readlink(u){if((u.mode&61440)!==40960)throw new W(28);return u.link}},Ga:{read(u,m,v,A,k){var Y=u.node.Ha;if(k>=u.node.La)return 0;if(u=Math.min(u.node.La-k,A),8<u&&Y.subarray)m.set(Y.subarray(k,k+u),v);else for(A=0;A<u;A++)m[v+A]=Y[k+A];return u},write(u,m,v,A,k,Y){if(m.buffer===S.buffer&&(Y=!1),!A)return 0;if(u=u.node,u.timestamp=Date.now(),m.subarray&&(!u.Ha||u.Ha.subarray)){if(Y)return u.Ha=m.subarray(v,v+A),u.La=A;if(u.La===0&&k===0)return u.Ha=m.slice(v,v+A),u.La=A;if(k+A<=u.La)return u.Ha.set(m.subarray(v,v+A),k),A}if(Ie(u,k+A),u.Ha.subarray&&m.subarray)u.Ha.set(m.subarray(v,v+A),k);else for(Y=0;Y<A;Y++)u.Ha[k+Y]=m[v+Y];return u.La=Math.max(u.La,k+A),A},Sa(u,m,v){if(v===1?m+=u.position:v===2&&(u.node.mode&61440)===32768&&(m+=u.node.La),0>m)throw new W(28);return m},kb(u,m,v){Ie(u.node,m+v),u.node.La=Math.max(u.node.La,m+v)},ab(u,m,v,A,k){if((u.node.mode&61440)!==32768)throw new W(43);if(u=u.node.Ha,k&2||u.buffer!==S.buffer){if((0<v||v+m<u.length)&&(u.subarray?u=u.subarray(v,v+m):u=Array.prototype.slice.call(u,v,v+m)),v=!0,m=65536*Math.ceil(m/65536),(k=Kc(65536,m))?(b.fill(0,k,k+m),m=k):m=0,!m)throw new W(48);S.set(u,m)}else v=!1,m=u.byteOffset;return{Cb:m,tb:v}},bb(u,m,v,A){return Ee.Ga.write(u,m,0,A,v,!1),0}}},Qe=(u,m)=>{var v=0;return u&&(v|=365),m&&(v|=146),v},pt=null,B={},ye=[],Z=1,ie=null,Te=!0,W=class{constructor(u){this.name="ErrnoError",this.Ja=u}},$e={},St=class{constructor(){this.Za={},this.node=null}get flags(){return this.Za.flags}set flags(u){this.Za.flags=u}get position(){return this.Za.position}set position(u){this.Za.position=u}},Ft=class{constructor(u,m,v,A){u||(u=this),this.parent=u,this.Qa=u.Qa,this.Ua=null,this.id=Z++,this.name=m,this.mode=v,this.Fa={},this.Ga={},this.rdev=A}get read(){return(this.mode&365)===365}set read(u){u?this.mode|=365:this.mode&=-366}get write(){return(this.mode&146)===146}set write(u){u?this.mode|=146:this.mode&=-147}};function Je(u,m={}){if(u=le(u),!u)return{path:"",node:null};if(m=Object.assign({pb:!0,jb:0},m),8<m.jb)throw new W(32);u=u.split("/").filter(se=>!!se);for(var v=pt,A="/",k=0;k<u.length;k++){var Y=k===u.length-1;if(Y&&m.parent)break;if(v=Fn(v,u[k]),A=Ue(A+"/"+u[k]),v.Ua&&(!Y||Y&&m.pb)&&(v=v.Ua.root),!Y||m.Ra){for(Y=0;(v.mode&61440)===40960;)if(v=j(A),A=le(P(A),v),v=Je(A,{jb:m.jb+1}).node,40<Y++)throw new W(32)}}return{path:A,node:v}}function $t(u){for(var m;;){if(u===u.parent)return u=u.Qa.sb,m?u[u.length-1]!=="/"?`${u}/${m}`:u+m:u;m=m?`${u.name}/${m}`:u.name,u=u.parent}}function hn(u,m){for(var v=0,A=0;A<m.length;A++)v=(v<<5)-v+m.charCodeAt(A)|0;return(u+v>>>0)%ie.length}function tr(u){var m=hn(u.parent.id,u.name);if(ie[m]===u)ie[m]=u.Va;else for(m=ie[m];m;){if(m.Va===u){m.Va=u.Va;break}m=m.Va}}function Fn(u,m){var v=qt(u.mode)?(v=jn(u,"x"))?v:u.Fa.lookup?0:2:54;if(v)throw new W(v);for(v=ie[hn(u.id,m)];v;v=v.Va){var A=v.name;if(v.parent.id===u.id&&A===m)return v}return u.Fa.lookup(u,m)}function Bn(u,m,v,A){return u=new Ft(u,m,v,A),m=hn(u.parent.id,u.name),u.Va=ie[m],ie[m]=u}function qt(u){return(u&61440)===16384}function nr(u){var m=["r","w","rw"][u&3];return u&512&&(m+="w"),m}function jn(u,m){if(Te)return 0;if(!m.includes("r")||u.mode&292){if(m.includes("w")&&!(u.mode&146)||m.includes("x")&&!(u.mode&73))return 2}else return 2;return 0}function Pi(u,m){try{return Fn(u,m),20}catch{}return jn(u,"wx")}function ir(u,m,v){try{var A=Fn(u,m)}catch(k){return k.Ja}if(u=jn(u,"wx"))return u;if(v){if(!qt(A.mode))return 54;if(A===A.parent||$t(A)==="/")return 10}else if(qt(A.mode))return 31;return 0}function It(u){if(u=ye[u],!u)throw new W(8);return u}function sr(u,m=-1){if(u=Object.assign(new St,u),m==-1)e:{for(m=0;4096>=m;m++)if(!ye[m])break e;throw new W(33)}return u.fd=m,ye[m]=u}function Ur(u,m=-1){var v,A;return u=sr(u,m),(A=(v=u.Ga)==null?void 0:v.Jb)==null||A.call(v,u),u}var go={open(u){var m,v;u.Ga=B[u.node.rdev].Ga,(v=(m=u.Ga).open)==null||v.call(m,u)},Sa(){throw new W(70)}};function rr(u,m){B[u]={Ga:m}}function Fr(u,m){var v=m==="/";if(v&&pt)throw new W(10);if(!v&&m){var A=Je(m,{pb:!1});if(m=A.path,A=A.node,A.Ua)throw new W(10);if(!qt(A.mode))throw new W(54)}m={type:u,Ob:{},sb:m,Bb:[]},u=u.Qa(m),u.Qa=m,m.root=u,v?pt=u:A&&(A.Ua=m,A.Qa&&A.Qa.Bb.push(m))}function ss(u,m,v){var A=Je(u,{parent:!0}).node;if(u=M(u),!u||u==="."||u==="..")throw new W(28);var k=Pi(A,u);if(k)throw new W(k);if(!A.Fa.$a)throw new W(63);return A.Fa.$a(A,u,m,v)}function vn(u,m){return ss(u,(m!==void 0?m:511)&1023|16384,0)}function rs(u,m,v){typeof v>"u"&&(v=m,m=438),ss(u,m|8192,v)}function E(u,m){if(!le(u))throw new W(44);var v=Je(m,{parent:!0}).node;if(!v)throw new W(44);m=M(m);var A=Pi(v,m);if(A)throw new W(A);if(!v.Fa.symlink)throw new W(63);v.Fa.symlink(v,m,u)}function z(u){var m=Je(u,{parent:!0}).node;u=M(u);var v=Fn(m,u),A=ir(m,u,!0);if(A)throw new W(A);if(!m.Fa.rmdir)throw new W(63);if(v.Ua)throw new W(10);m.Fa.rmdir(m,u),tr(v)}function q(u){var m=Je(u,{parent:!0}).node;if(!m)throw new W(44);u=M(u);var v=Fn(m,u),A=ir(m,u,!1);if(A)throw new W(A);if(!m.Fa.unlink)throw new W(63);if(v.Ua)throw new W(10);m.Fa.unlink(m,u),tr(v)}function j(u){if(u=Je(u).node,!u)throw new W(44);if(!u.Fa.readlink)throw new W(28);return le($t(u.parent),u.Fa.readlink(u))}function H(u,m){if(u=Je(u,{Ra:!m}).node,!u)throw new W(44);if(!u.Fa.Oa)throw new W(63);return u.Fa.Oa(u)}function he(u){return H(u,!0)}function xe(u,m){if(u=typeof u=="string"?Je(u,{Ra:!0}).node:u,!u.Fa.Na)throw new W(63);u.Fa.Na(u,{mode:m&4095|u.mode&-4096,timestamp:Date.now()})}function Ce(u,m){if(0>m)throw new W(28);if(u=typeof u=="string"?Je(u,{Ra:!0}).node:u,!u.Fa.Na)throw new W(63);if(qt(u.mode))throw new W(31);if((u.mode&61440)!==32768)throw new W(28);var v=jn(u,"w");if(v)throw new W(v);u.Fa.Na(u,{size:m,timestamp:Date.now()})}function Ae(u,m,v){if(u==="")throw new W(44);if(typeof m=="string"){var A={r:0,"r+":2,w:577,"w+":578,a:1089,"a+":1090}[m];if(typeof A>"u")throw Error(`Unknown file open mode: ${m}`);m=A}if(v=m&64?(typeof v>"u"?438:v)&4095|32768:0,typeof u=="object")var k=u;else{u=Ue(u);try{k=Je(u,{Ra:!(m&131072)}).node}catch{}}if(A=!1,m&64)if(k){if(m&128)throw new W(20)}else k=ss(u,v,0),A=!0;if(!k)throw new W(44);if((k.mode&61440)===8192&&(m&=-513),m&65536&&!qt(k.mode))throw new W(54);if(!A&&(v=k?(k.mode&61440)===40960?32:qt(k.mode)&&(nr(m)!=="r"||m&512)?31:jn(k,nr(m)):44))throw new W(v);return m&512&&!A&&Ce(k,0),m&=-131713,k=sr({node:k,path:$t(k),flags:m,seekable:!0,position:0,Ga:k.Ga,Db:[],error:!1}),k.Ga.open&&k.Ga.open(k),!l.logReadFiles||m&1||(Pt||(Pt={}),u in Pt||(Pt[u]=1)),k}function We(u){if(u.fd===null)throw new W(8);u.gb&&(u.gb=null);try{u.Ga.close&&u.Ga.close(u)}catch(m){throw m}finally{ye[u.fd]=null}u.fd=null}function je(u,m,v){if(u.fd===null)throw new W(8);if(!u.seekable||!u.Ga.Sa)throw new W(70);if(v!=0&&v!=1&&v!=2)throw new W(28);u.position=u.Ga.Sa(u,m,v),u.Db=[]}function He(u,m,v,A,k){if(0>A||0>k)throw new W(28);if(u.fd===null)throw new W(8);if((u.flags&2097155)===1)throw new W(8);if(qt(u.node.mode))throw new W(31);if(!u.Ga.read)throw new W(28);var Y=typeof k<"u";if(!Y)k=u.position;else if(!u.seekable)throw new W(70);return m=u.Ga.read(u,m,v,A,k),Y||(u.position+=m),m}function lt(u,m,v,A,k){if(0>A||0>k)throw new W(28);if(u.fd===null)throw new W(8);if(!(u.flags&2097155))throw new W(8);if(qt(u.node.mode))throw new W(31);if(!u.Ga.write)throw new W(28);u.seekable&&u.flags&1024&&je(u,0,2);var Y=typeof k<"u";if(!Y)k=u.position;else if(!u.seekable)throw new W(70);return m=u.Ga.write(u,m,v,A,k,void 0),Y||(u.position+=m),m}function ft(u){var m,v=Ae(u,v||0);u=H(u).size;var A=new Uint8Array(u);return He(v,A,0,u,0),m=A,We(v),m}var Tt;function _t(u,m,v){u=Ue("/dev/"+u);var A=Qe(!!m,!!v);ct||(ct=64);var k=ct++<<8|0;rr(k,{open(Y){Y.seekable=!1},close(){var Y;(Y=v==null?void 0:v.buffer)!=null&&Y.length&&v(10)},read(Y,se,Xe,mt){for(var nt=0,Dt=0;Dt<mt;Dt++){try{var Gt=m()}catch{throw new W(29)}if(Gt===void 0&&nt===0)throw new W(6);if(Gt==null)break;nt++,se[Xe+Dt]=Gt}return nt&&(Y.node.timestamp=Date.now()),nt},write(Y,se,Xe,mt){for(var nt=0;nt<mt;nt++)try{v(se[Xe+nt])}catch{throw new W(29)}return mt&&(Y.node.timestamp=Date.now()),nt}}),rs(u,A,k)}var ct,be={},Pt;function st(u,m,v){if(m.charAt(0)==="/")return m;if(u=u===-100?"/":It(u).path,m.length==0){if(!v)throw new W(44);return u}return Ue(u+"/"+m)}function Kt(u,m,v){u=u(m),F[v>>2]=u.dev,F[v+4>>2]=u.mode,U[v+8>>2]=u.nlink,F[v+12>>2]=u.uid,F[v+16>>2]=u.gid,F[v+20>>2]=u.rdev,Se=[u.size>>>0,(de=u.size,1<=+Math.abs(de)?0<de?+Math.floor(de/4294967296)>>>0:~~+Math.ceil((de-+(~~de>>>0))/4294967296)>>>0:0)],F[v+24>>2]=Se[0],F[v+28>>2]=Se[1],F[v+32>>2]=4096,F[v+36>>2]=u.blocks,m=u.atime.getTime();var A=u.mtime.getTime(),k=u.ctime.getTime();return Se=[Math.floor(m/1e3)>>>0,(de=Math.floor(m/1e3),1<=+Math.abs(de)?0<de?+Math.floor(de/4294967296)>>>0:~~+Math.ceil((de-+(~~de>>>0))/4294967296)>>>0:0)],F[v+40>>2]=Se[0],F[v+44>>2]=Se[1],U[v+48>>2]=m%1e3*1e3,Se=[Math.floor(A/1e3)>>>0,(de=Math.floor(A/1e3),1<=+Math.abs(de)?0<de?+Math.floor(de/4294967296)>>>0:~~+Math.ceil((de-+(~~de>>>0))/4294967296)>>>0:0)],F[v+56>>2]=Se[0],F[v+60>>2]=Se[1],U[v+64>>2]=A%1e3*1e3,Se=[Math.floor(k/1e3)>>>0,(de=Math.floor(k/1e3),1<=+Math.abs(de)?0<de?+Math.floor(de/4294967296)>>>0:~~+Math.ceil((de-+(~~de>>>0))/4294967296)>>>0:0)],F[v+72>>2]=Se[0],F[v+76>>2]=Se[1],U[v+80>>2]=k%1e3*1e3,Se=[u.ino>>>0,(de=u.ino,1<=+Math.abs(de)?0<de?+Math.floor(de/4294967296)>>>0:~~+Math.ceil((de-+(~~de>>>0))/4294967296)>>>0:0)],F[v+88>>2]=Se[0],F[v+92>>2]=Se[1],0}var En=void 0;function Bt(){var u=F[+En>>2];return En+=4,u}var Tn=(u,m)=>m+2097152>>>0<4194305-!!u?(u>>>0)+4294967296*m:NaN,bt=[0,31,60,91,121,152,182,213,244,274,305,335],an=[0,31,59,90,120,151,181,212,243,273,304,334],Yt={},zt=()=>{if(!Ht){var u={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:(typeof navigator=="object"&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",_:x||"./this.program"},m;for(m in Yt)Yt[m]===void 0?delete u[m]:u[m]=Yt[m];var v=[];for(m in u)v.push(`${m}=${u[m]}`);Ht=v}return Ht},Ht,Li=u=>{var m=Fe(u)+1,v=pi(m);return _e(u,b,v,m),v},Xn=(u,m,v,A)=>{var k={string:nt=>{var Dt=0;return nt!=null&&nt!==0&&(Dt=Li(nt)),Dt},array:nt=>{var Dt=pi(nt.length);return S.set(nt,Dt),Dt}};u=l["_"+u];var Y=[],se=0;if(A)for(var Xe=0;Xe<A.length;Xe++){var mt=k[v[Xe]];mt?(se===0&&(se=or()),Y[Xe]=mt(A[Xe])):Y[Xe]=A[Xe]}return v=u(...Y),v=function(nt){return se!==0&&ar(se),m==="string"?nt?Le(b,nt):"":m==="boolean"?!!nt:nt}(v)},Br=0,zr=(u,m)=>(m=m==1?pi(u.length):vo(u.length),u.subarray||u.slice||(u=new Uint8Array(u)),b.set(u,m),m),Ii,_o=[],$n,as=u=>{Ii.delete($n.get(u)),$n.set(u,null),_o.push(u)},Hr=(u,m)=>{if(!Ii){Ii=new WeakMap;var v=$n.length;if(Ii)for(var A=0;A<0+v;A++){var k=$n.get(A);k&&Ii.set(k,A)}}if(v=Ii.get(u)||0)return v;if(_o.length)v=_o.pop();else{try{$n.grow(1)}catch(Xe){throw Xe instanceof RangeError?"Unable to grow wasm table. Set ALLOW_TABLE_GROWTH.":Xe}v=$n.length-1}try{$n.set(v,u)}catch(Xe){if(!(Xe instanceof TypeError))throw Xe;if(typeof WebAssembly.Function=="function"){A=WebAssembly.Function,k={i:"i32",j:"i64",f:"f32",d:"f64",e:"externref",p:"i32"};for(var Y={parameters:[],results:m[0]=="v"?[]:[k[m[0]]]},se=1;se<m.length;++se)Y.parameters.push(k[m[se]]);m=new A(Y,u)}else{for(A=[1],k=m.slice(0,1),m=m.slice(1),Y={i:127,p:127,j:126,f:125,d:124,e:111},A.push(96),se=m.length,128>se?A.push(se):A.push(se%128|128,se>>7),se=0;se<m.length;++se)A.push(Y[m[se]]);k=="v"?A.push(0):A.push(1,Y[k]),m=[0,97,115,109,1,0,0,0,1],k=A.length,128>k?m.push(k):m.push(k%128|128,k>>7),m.push(...A),m.push(2,7,1,1,101,1,102,0,0,7,5,1,1,102,0,0),m=new WebAssembly.Module(new Uint8Array(m)),m=new WebAssembly.Instance(m,{e:{f:u}}).exports.f}$n.set(v,m)}return Ii.set(u,v),v};[44].forEach(u=>{$e[u]=new W(u),$e[u].stack="<generic error, no stack>"}),ie=Array(4096),Fr(Ee,"/"),vn("/tmp"),vn("/home"),vn("/home/web_user"),function(){vn("/dev"),rr(259,{read:()=>0,write:(A,k,Y,se)=>se}),rs("/dev/null",259),pe(1280,Ve),pe(1536,qe),rs("/dev/tty",1280),rs("/dev/tty1",1536);var u=new Uint8Array(1024),m=0,v=()=>(m===0&&(m=oe(u).byteLength),u[--m]);_t("random",v),_t("urandom",v),vn("/dev/shm"),vn("/dev/shm/tmp")}(),function(){vn("/proc");var u=vn("/proc/self");vn("/proc/self/fd"),Fr({Qa(){var m=Bn(u,"fd",16895,73);return m.Fa={lookup(v,A){var k=It(+A);return v={parent:null,Qa:{sb:"fake"},Fa:{readlink:()=>k.path}},v.parent=v}},m}},"/proc/self/fd")}();var Ud={a:(u,m,v,A)=>{Re(`Assertion failed: ${u?Le(b,u):""}, at: `+[m?m?Le(b,m):"":"unknown filename",v,A?A?Le(b,A):"":"unknown function"])},h:function(u,m){try{return u=u?Le(b,u):"",xe(u,m),0}catch(v){if(typeof be>"u"||v.name!=="ErrnoError")throw v;return-v.Ja}},H:function(u,m,v){try{if(m=m?Le(b,m):"",m=st(u,m),v&-8)return-28;var A=Je(m,{Ra:!0}).node;return A?(u="",v&4&&(u+="r"),v&2&&(u+="w"),v&1&&(u+="x"),u&&jn(A,u)?-2:0):-44}catch(k){if(typeof be>"u"||k.name!=="ErrnoError")throw k;return-k.Ja}},i:function(u,m){try{var v=It(u);return xe(v.node,m),0}catch(A){if(typeof be>"u"||A.name!=="ErrnoError")throw A;return-A.Ja}},g:function(u){try{var m=It(u).node,v=typeof m=="string"?Je(m,{Ra:!0}).node:m;if(!v.Fa.Na)throw new W(63);return v.Fa.Na(v,{timestamp:Date.now()}),0}catch(A){if(typeof be>"u"||A.name!=="ErrnoError")throw A;return-A.Ja}},b:function(u,m,v){En=v;try{var A=It(u);switch(m){case 0:var k=Bt();if(0>k)break;for(;ye[k];)k++;return Ur(A,k).fd;case 1:case 2:return 0;case 3:return A.flags;case 4:return k=Bt(),A.flags|=k,0;case 12:return k=Bt(),O[k+0>>1]=2,0;case 13:case 14:return 0}return-28}catch(Y){if(typeof be>"u"||Y.name!=="ErrnoError")throw Y;return-Y.Ja}},f:function(u,m){try{var v=It(u);return Kt(H,v.path,m)}catch(A){if(typeof be>"u"||A.name!=="ErrnoError")throw A;return-A.Ja}},n:function(u,m,v){m=Tn(m,v);try{if(isNaN(m))return 61;var A=It(u);if(!(A.flags&2097155))throw new W(28);return Ce(A.node,m),0}catch(k){if(typeof be>"u"||k.name!=="ErrnoError")throw k;return-k.Ja}},C:function(u,m){try{if(m===0)return-28;var v=Fe("/")+1;return m<v?-68:(_e("/",b,u,m),v)}catch(A){if(typeof be>"u"||A.name!=="ErrnoError")throw A;return-A.Ja}},F:function(u,m){try{return u=u?Le(b,u):"",Kt(he,u,m)}catch(v){if(typeof be>"u"||v.name!=="ErrnoError")throw v;return-v.Ja}},z:function(u,m,v){try{return m=m?Le(b,m):"",m=st(u,m),m=Ue(m),m[m.length-1]==="/"&&(m=m.substr(0,m.length-1)),vn(m,v),0}catch(A){if(typeof be>"u"||A.name!=="ErrnoError")throw A;return-A.Ja}},E:function(u,m,v,A){try{m=m?Le(b,m):"";var k=A&256;return m=st(u,m,A&4096),Kt(k?he:H,m,v)}catch(Y){if(typeof be>"u"||Y.name!=="ErrnoError")throw Y;return-Y.Ja}},x:function(u,m,v,A){En=A;try{m=m?Le(b,m):"",m=st(u,m);var k=A?Bt():0;return Ae(m,v,k).fd}catch(Y){if(typeof be>"u"||Y.name!=="ErrnoError")throw Y;return-Y.Ja}},v:function(u,m,v,A){try{if(m=m?Le(b,m):"",m=st(u,m),0>=A)return-28;var k=j(m),Y=Math.min(A,Fe(k)),se=S[v+Y];return _e(k,b,v,A+1),S[v+Y]=se,Y}catch(Xe){if(typeof be>"u"||Xe.name!=="ErrnoError")throw Xe;return-Xe.Ja}},u:function(u){try{return u=u?Le(b,u):"",z(u),0}catch(m){if(typeof be>"u"||m.name!=="ErrnoError")throw m;return-m.Ja}},G:function(u,m){try{return u=u?Le(b,u):"",Kt(H,u,m)}catch(v){if(typeof be>"u"||v.name!=="ErrnoError")throw v;return-v.Ja}},r:function(u,m,v){try{return m=m?Le(b,m):"",m=st(u,m),v===0?q(m):v===512?z(m):Re("Invalid flags passed to unlinkat"),0}catch(A){if(typeof be>"u"||A.name!=="ErrnoError")throw A;return-A.Ja}},q:function(u,m,v){try{if(m=m?Le(b,m):"",m=st(u,m,!0),v){var A=U[v>>2]+4294967296*F[v+4>>2],k=F[v+8>>2];Y=1e3*A+k/1e6,v+=16,A=U[v>>2]+4294967296*F[v+4>>2],k=F[v+8>>2],se=1e3*A+k/1e6}else var Y=Date.now(),se=Y;u=Y;var Xe=Je(m,{Ra:!0}).node;return Xe.Fa.Na(Xe,{timestamp:Math.max(u,se)}),0}catch(mt){if(typeof be>"u"||mt.name!=="ErrnoError")throw mt;return-mt.Ja}},l:function(u,m,v){u=new Date(1e3*Tn(u,m)),F[v>>2]=u.getSeconds(),F[v+4>>2]=u.getMinutes(),F[v+8>>2]=u.getHours(),F[v+12>>2]=u.getDate(),F[v+16>>2]=u.getMonth(),F[v+20>>2]=u.getFullYear()-1900,F[v+24>>2]=u.getDay(),m=u.getFullYear(),F[v+28>>2]=(m%4!==0||m%100===0&&m%400!==0?an:bt)[u.getMonth()]+u.getDate()-1|0,F[v+36>>2]=-(60*u.getTimezoneOffset()),m=new Date(u.getFullYear(),6,1).getTimezoneOffset();var A=new Date(u.getFullYear(),0,1).getTimezoneOffset();F[v+32>>2]=(m!=A&&u.getTimezoneOffset()==Math.min(A,m))|0},j:function(u,m,v,A,k,Y,se,Xe){k=Tn(k,Y);try{if(isNaN(k))return 61;var mt=It(A);if(m&2&&!(v&2)&&(mt.flags&2097155)!==2)throw new W(2);if((mt.flags&2097155)===1)throw new W(2);if(!mt.Ga.ab)throw new W(43);var nt=mt.Ga.ab(mt,u,k,m,v),Dt=nt.Cb;return F[se>>2]=nt.tb,U[Xe>>2]=Dt,0}catch(Gt){if(typeof be>"u"||Gt.name!=="ErrnoError")throw Gt;return-Gt.Ja}},k:function(u,m,v,A,k,Y,se){Y=Tn(Y,se);try{var Xe=It(k);if(v&2){if((Xe.node.mode&61440)!==32768)throw new W(43);if(!(A&2)){var mt=b.slice(u,u+m);Xe.Ga.bb&&Xe.Ga.bb(Xe,mt,Y,m,A)}}}catch(nt){if(typeof be>"u"||nt.name!=="ErrnoError")throw nt;return-nt.Ja}},y:(u,m,v,A)=>{var k=new Date().getFullYear(),Y=new Date(k,0,1).getTimezoneOffset();k=new Date(k,6,1).getTimezoneOffset(),U[u>>2]=60*Math.max(Y,k),F[m>>2]=+(Y!=k),m=se=>{var Xe=Math.abs(se);return`UTC${0<=se?"-":"+"}${String(Math.floor(Xe/60)).padStart(2,"0")}${String(Xe%60).padStart(2,"0")}`},u=m(Y),m=m(k),k<Y?(_e(u,b,v,17),_e(m,b,A,17)):(_e(u,b,A,17),_e(m,b,v,17))},d:()=>Date.now(),s:()=>2147483648,c:()=>performance.now(),o:u=>{var m=b.length;if(u>>>=0,2147483648<u)return!1;for(var v=1;4>=v;v*=2){var A=m*(1+.2/v);A=Math.min(A,u+100663296);var k=Math;A=Math.max(u,A);e:{k=(k.min.call(k,2147483648,A+(65536-A%65536)%65536)-C.buffer.byteLength+65535)/65536;try{C.grow(k),J();var Y=1;break e}catch{}Y=void 0}if(Y)return!0}return!1},A:(u,m)=>{var v=0;return zt().forEach((A,k)=>{var Y=m+v;for(k=U[u+4*k>>2]=Y,Y=0;Y<A.length;++Y)S[k++]=A.charCodeAt(Y);S[k]=0,v+=A.length+1}),0},B:(u,m)=>{var v=zt();U[u>>2]=v.length;var A=0;return v.forEach(k=>A+=k.length+1),U[m>>2]=A,0},e:function(u){try{var m=It(u);return We(m),0}catch(v){if(typeof be>"u"||v.name!=="ErrnoError")throw v;return v.Ja}},p:function(u,m){try{var v=It(u);return S[m]=v.tty?2:qt(v.mode)?3:(v.mode&61440)===40960?7:4,O[m+2>>1]=0,Se=[0,(de=0,1<=+Math.abs(de)?0<de?+Math.floor(de/4294967296)>>>0:~~+Math.ceil((de-+(~~de>>>0))/4294967296)>>>0:0)],F[m+8>>2]=Se[0],F[m+12>>2]=Se[1],Se=[0,(de=0,1<=+Math.abs(de)?0<de?+Math.floor(de/4294967296)>>>0:~~+Math.ceil((de-+(~~de>>>0))/4294967296)>>>0:0)],F[m+16>>2]=Se[0],F[m+20>>2]=Se[1],0}catch(A){if(typeof be>"u"||A.name!=="ErrnoError")throw A;return A.Ja}},w:function(u,m,v,A){try{e:{var k=It(u);u=m;for(var Y,se=m=0;se<v;se++){var Xe=U[u>>2],mt=U[u+4>>2];u+=8;var nt=He(k,S,Xe,mt,Y);if(0>nt){var Dt=-1;break e}if(m+=nt,nt<mt)break;typeof Y<"u"&&(Y+=nt)}Dt=m}return U[A>>2]=Dt,0}catch(Gt){if(typeof be>"u"||Gt.name!=="ErrnoError")throw Gt;return Gt.Ja}},m:function(u,m,v,A,k){m=Tn(m,v);try{if(isNaN(m))return 61;var Y=It(u);return je(Y,m,A),Se=[Y.position>>>0,(de=Y.position,1<=+Math.abs(de)?0<de?+Math.floor(de/4294967296)>>>0:~~+Math.ceil((de-+(~~de>>>0))/4294967296)>>>0:0)],F[k>>2]=Se[0],F[k+4>>2]=Se[1],Y.gb&&m===0&&A===0&&(Y.gb=null),0}catch(se){if(typeof be>"u"||se.name!=="ErrnoError")throw se;return se.Ja}},D:function(u){var v;try{var m=It(u);return(v=m.Ga)!=null&&v.fsync?m.Ga.fsync(m):0}catch(A){if(typeof be>"u"||A.name!=="ErrnoError")throw A;return A.Ja}},t:function(u,m,v,A){try{e:{var k=It(u);u=m;for(var Y,se=m=0;se<v;se++){var Xe=U[u>>2],mt=U[u+4>>2];u+=8;var nt=lt(k,S,Xe,mt,Y);if(0>nt){var Dt=-1;break e}m+=nt,typeof Y<"u"&&(Y+=nt)}Dt=m}return U[A>>2]=Dt,0}catch(Gt){if(typeof be>"u"||Gt.name!=="ErrnoError")throw Gt;return Gt.Ja}}},Ge=function(){var v;function u(A){var k;return Ge=A.exports,C=Ge.I,J(),$n=Ge.K,K.unshift(Ge.J),me--,(k=l.monitorRunDependencies)==null||k.call(l,me),me==0&&ve&&(A=ve,ve=null,A()),Ge}var m={a:Ud};if(me++,(v=l.monitorRunDependencies)==null||v.call(l,me),l.instantiateWasm)try{return l.instantiateWasm(m,u)}catch(A){return I(`Module.instantiateWasm callback failed with error: ${A}`),!1}return Me||(Me=Q("sql-wasm.wasm")?"sql-wasm.wasm":l.locateFile?l.locateFile("sql-wasm.wasm",y):y+"sql-wasm.wasm"),ae(m,function(A){u(A.instance)}),{}}();l._sqlite3_free=u=>(l._sqlite3_free=Ge.L)(u),l._sqlite3_value_text=u=>(l._sqlite3_value_text=Ge.M)(u),l._sqlite3_prepare_v2=(u,m,v,A,k)=>(l._sqlite3_prepare_v2=Ge.N)(u,m,v,A,k),l._sqlite3_step=u=>(l._sqlite3_step=Ge.O)(u),l._sqlite3_reset=u=>(l._sqlite3_reset=Ge.P)(u),l._sqlite3_exec=(u,m,v,A,k)=>(l._sqlite3_exec=Ge.Q)(u,m,v,A,k),l._sqlite3_finalize=u=>(l._sqlite3_finalize=Ge.R)(u),l._sqlite3_column_name=(u,m)=>(l._sqlite3_column_name=Ge.S)(u,m),l._sqlite3_column_text=(u,m)=>(l._sqlite3_column_text=Ge.T)(u,m),l._sqlite3_column_type=(u,m)=>(l._sqlite3_column_type=Ge.U)(u,m),l._sqlite3_errmsg=u=>(l._sqlite3_errmsg=Ge.V)(u),l._sqlite3_clear_bindings=u=>(l._sqlite3_clear_bindings=Ge.W)(u),l._sqlite3_value_blob=u=>(l._sqlite3_value_blob=Ge.X)(u),l._sqlite3_value_bytes=u=>(l._sqlite3_value_bytes=Ge.Y)(u),l._sqlite3_value_double=u=>(l._sqlite3_value_double=Ge.Z)(u),l._sqlite3_value_int=u=>(l._sqlite3_value_int=Ge._)(u),l._sqlite3_value_type=u=>(l._sqlite3_value_type=Ge.$)(u),l._sqlite3_result_blob=(u,m,v,A)=>(l._sqlite3_result_blob=Ge.aa)(u,m,v,A),l._sqlite3_result_double=(u,m)=>(l._sqlite3_result_double=Ge.ba)(u,m),l._sqlite3_result_error=(u,m,v)=>(l._sqlite3_result_error=Ge.ca)(u,m,v),l._sqlite3_result_int=(u,m)=>(l._sqlite3_result_int=Ge.da)(u,m),l._sqlite3_result_int64=(u,m,v)=>(l._sqlite3_result_int64=Ge.ea)(u,m,v),l._sqlite3_result_null=u=>(l._sqlite3_result_null=Ge.fa)(u),l._sqlite3_result_text=(u,m,v,A)=>(l._sqlite3_result_text=Ge.ga)(u,m,v,A),l._sqlite3_aggregate_context=(u,m)=>(l._sqlite3_aggregate_context=Ge.ha)(u,m),l._sqlite3_column_count=u=>(l._sqlite3_column_count=Ge.ia)(u),l._sqlite3_data_count=u=>(l._sqlite3_data_count=Ge.ja)(u),l._sqlite3_column_blob=(u,m)=>(l._sqlite3_column_blob=Ge.ka)(u,m),l._sqlite3_column_bytes=(u,m)=>(l._sqlite3_column_bytes=Ge.la)(u,m),l._sqlite3_column_double=(u,m)=>(l._sqlite3_column_double=Ge.ma)(u,m),l._sqlite3_bind_blob=(u,m,v,A,k)=>(l._sqlite3_bind_blob=Ge.na)(u,m,v,A,k),l._sqlite3_bind_double=(u,m,v)=>(l._sqlite3_bind_double=Ge.oa)(u,m,v),l._sqlite3_bind_int=(u,m,v)=>(l._sqlite3_bind_int=Ge.pa)(u,m,v),l._sqlite3_bind_text=(u,m,v,A,k)=>(l._sqlite3_bind_text=Ge.qa)(u,m,v,A,k),l._sqlite3_bind_parameter_index=(u,m)=>(l._sqlite3_bind_parameter_index=Ge.ra)(u,m),l._sqlite3_sql=u=>(l._sqlite3_sql=Ge.sa)(u),l._sqlite3_normalized_sql=u=>(l._sqlite3_normalized_sql=Ge.ta)(u),l._sqlite3_changes=u=>(l._sqlite3_changes=Ge.ua)(u),l._sqlite3_close_v2=u=>(l._sqlite3_close_v2=Ge.va)(u),l._sqlite3_create_function_v2=(u,m,v,A,k,Y,se,Xe,mt)=>(l._sqlite3_create_function_v2=Ge.wa)(u,m,v,A,k,Y,se,Xe,mt),l._sqlite3_open=(u,m)=>(l._sqlite3_open=Ge.xa)(u,m);var vo=l._malloc=u=>(vo=l._malloc=Ge.ya)(u),Gr=l._free=u=>(Gr=l._free=Ge.za)(u);l._RegisterExtensionFunctions=u=>(l._RegisterExtensionFunctions=Ge.Aa)(u);var Kc=(u,m)=>(Kc=Ge.Ba)(u,m),ar=u=>(ar=Ge.Ca)(u),pi=u=>(pi=Ge.Da)(u),or=()=>(or=Ge.Ea)();l.stackSave=()=>or(),l.stackRestore=u=>ar(u),l.stackAlloc=u=>pi(u),l.cwrap=(u,m,v,A)=>{var k=!v||v.every(Y=>Y==="number"||Y==="boolean");return m!=="string"&&k&&!A?l["_"+u]:(...Y)=>Xn(u,m,v,Y)},l.addFunction=Hr,l.removeFunction=as,l.UTF8ToString=De,l.ALLOC_NORMAL=Br,l.allocate=zr,l.allocateUTF8OnStack=Li;var Vr;ve=function u(){Vr||Yc(),Vr||(ve=u)};function Yc(){function u(){var v;if(!Vr&&(Vr=!0,l.calledRun=!0,!D)){if(l.noFSInit||Tt||(Tt=!0,l.stdin=l.stdin,l.stdout=l.stdout,l.stderr=l.stderr,l.stdin?_t("stdin",l.stdin):E("/dev/tty","/dev/stdin"),l.stdout?_t("stdout",null,l.stdout):E("/dev/tty","/dev/stdout"),l.stderr?_t("stderr",null,l.stderr):E("/dev/tty1","/dev/stderr"),Ae("/dev/stdin",0),Ae("/dev/stdout",1),Ae("/dev/stderr",1)),Te=!1,Ye(K),(v=l.onRuntimeInitialized)==null||v.call(l),l.postRun)for(typeof l.postRun=="function"&&(l.postRun=[l.postRun]);l.postRun.length;){var m=l.postRun.shift();ee.unshift(m)}Ye(ee)}}if(!(0<me)){if(l.preRun)for(typeof l.preRun=="function"&&(l.preRun=[l.preRun]);l.preRun.length;)ne();Ye(fe),0<me||(l.setStatus?(l.setStatus("Running..."),setTimeout(function(){setTimeout(function(){l.setStatus("")},1),u()},1)):u())}}if(l.preInit)for(typeof l.preInit=="function"&&(l.preInit=[l.preInit]);0<l.preInit.length;)l.preInit.pop()();return Yc(),o}),t)};i.exports=n,i.exports.default=n})(Sd);var pw=Sd.exports;const mw=yd(pw),gw="/realm/play/assets/sql-wasm-Bku9E_kW.wasm",_w="justa-web",Ki="db";function Ed(){return new Promise((i,e)=>{const t=indexedDB.open(_w,1);t.onupgradeneeded=()=>t.result.createObjectStore(Ki),t.onsuccess=()=>i(t.result),t.onerror=()=>e(t.error)})}async function vw(){try{const i=await Ed();return await new Promise(e=>{const t=i.transaction(Ki).objectStore(Ki).get(Ki);t.onsuccess=()=>e(t.result??null),t.onerror=()=>e(null)})}catch{return null}}async function yw(i){try{const e=await Ed();await new Promise(t=>{const n=e.transaction(Ki,"readwrite");n.objectStore(Ki).put(i,Ki),n.oncomplete=t,n.onerror=t})}catch{}}function xw(i,e){let t=i[0];const n={};return e.forEach((s,r)=>{const a="$p"+r;if(s!==null&&!["string","number","boolean"].includes(typeof s))throw new TypeError(`ctx.sql: \${} binds string, number, boolean or null, got ${typeof s}`);n[a]=typeof s=="boolean"?s?1:0:s,t+=a+i[r+1]}),{text:t,params:n}}async function bw({persist:i=!0}={}){const e=await mw({locateFile:()=>gw}),t=i?await vw():null;let n=t?new e.Database(t):new e.Database,s=!1,r=null;const a=()=>{!i||!s||r||(s=!1,r=yw(n.export()).then(()=>{r=null,s&&a()}))};function o(c,l,f){var _,g,R;const{text:h,params:d}=xw(l,f);c!=null&&(d["@caller"]=c);let p=[],x=0;n.run("BEGIN");try{for(const T of n.iterateStatements(h)){T.bind(d);const w=[];for(;T.step();)w.push(T.getAsObject());T.getColumnNames().length&&(p=w),x+=n.getRowsModified(),T.free()}n.run("COMMIT")}catch(T){try{n.run("ROLLBACK")}catch{}throw T}const y=((R=(g=(_=n.exec("SELECT last_insert_rowid() AS id")[0])==null?void 0:_.values)==null?void 0:g[0])==null?void 0:R[0])??0;return x&&(s=!0,queueMicrotask(a)),{rows:p,changes:x,lastInsertRowid:Number(y)}}return{sqlFor:c=>(l,...f)=>Promise.resolve().then(()=>o(c,l,f)),async migrate(c){await c((l,...f)=>Promise.resolve().then(()=>o(null,l,f)))},async reset(){n.close(),n=new e.Database,s=!0,a()},get raw(){return n}}}function ui(i){return i=(i^i>>>16)>>>0,i=Math.imul(i,2146121005)>>>0,i=(i^i>>>15)>>>0,i=Math.imul(i,2221713035)>>>0,(i^i>>>16)>>>0}const Qt=(i,e)=>ui((i^ui(e+2654435769))>>>0)/4294967296;function wa(i){const e=Math.floor(i),t=i-e,n=t*t*(3-2*t),s=ui(e|0)/2147483648-1,r=ui(e+1|0)/2147483648-1;return s+(r-s)*n}const Of={depth:1};function ww(){return{seed:0,t:0,age:0,life:1/0,time:0,mobile:!1,size:0,spin:0,glo:1,tint:[1,1,1],p:[0,0,0],v:[0,0,0],offset:[0,0,0]}}const cl=/\s*(?:(\d+(?:\.\d+)?|\.\d+)|(\.\.)|([A-Za-z_][A-Za-z0-9_]*(?:-[A-Za-z][A-Za-z0-9_]*)*)|([$%#][A-Za-z_][A-Za-z0-9_]*)|([()<>,:+\-*/.?|~@;]))/y;function Mw(i){const e=[];for(cl.lastIndex=0;;){const t=cl.lastIndex;if(/^\s*$/.test(i.slice(t)))break;const n=cl.exec(i);if(!n)throw new Error(`fx: cannot read "${i.slice(t)}"`);n[1]!==void 0?e.push({k:"num",v:Number(n[1])}):n[2]!==void 0?e.push({k:".."}):n[3]!==void 0?e.push({k:"id",v:n[3]}):n[4]!==void 0?e.push({k:n[4][0],v:n[4].slice(1)}):e.push({k:n[5]})}return e}const Ci=i=>typeof i!="number",Zi=()=>[0,0,0],Sw={"+":(i,e)=>i+e,"-":(i,e)=>i-e,"*":(i,e)=>i*e,"/":(i,e)=>e===0?0:i/e};function Nf(i,e,t,n){const s=Ci(e),r=Ci(t);return!s&&!r?i(e,t):(n[0]=i(s?e[0]:e,r?t[0]:t),n[1]=i(s?e[1]:e,r?t[1]:t),n[2]=i(s?e[2]:e,r?t[2]:t),n)}function Ew(i,e,t,n){const s=Ci(i),r=Ci(e);if(!s&&!r)return i+(e-i)*t;for(let a=0;a<3;a++){const o=s?i[a]:i,c=r?e[a]:e;n[a]=o+(c-o)*t}return n}const Tw=(i,e)=>Ci(i)?i:(e[0]=e[1]=e[2]=i,e),vr=i=>({fn:()=>i,k:"const",v:i}),Aw=i=>(i.k==="const",i);class Rw{constructor(e,t){this.t=Mw(e),this.i=0,this.ids=t}peek(e){var t;return((t=this.t[this.i])==null?void 0:t.k)===e}take(e){const t=this.t[this.i];if(!t||e&&t.k!==e)throw new Error(`fx: expected ${e??"more"} at ${this.i}`);return this.i++,t}done(){return this.i>=this.t.length}value(){if(this.peek("?"))return this.tier();let e=this.sum();if(!this.peek(">"))return e;const t=[{t:0,n:e}];for(;this.peek(">");){this.take(">");const n=this.sum();if(this.peek(":")){if(this.take(":"),n.k!=="const"||Ci(n.v))throw new Error("fx: a ramp's time is a number");t.push({t:n.v,n:this.sum()})}else{t.push({t:1,n});break}}return Cw(t)}tier(){this.take("?");const e=this.take("id").v;this.take(":");const t=this.sum();this.take("|");const n=this.sum();if(e!=="mobile")throw new Error(`fx: unknown tier ?${e}`);return{fn:s=>s.mobile?t.fn(s):n.fn(s),k:"var"}}sum(){let e=this.product();for(;this.peek("+")||this.peek("-");){const t=this.take().k,n=this.product();e=ul(t,e,n)}return e}product(){let e=this.unary();for(;this.peek("*")||this.peek("/");){const t=this.take().k,n=this.unary();e=ul(t,e,n)}return e}unary(){return this.peek("-")?(this.take("-"),this.peek("num")?this.number(-this.take("num").v):ul("*",vr(-1),this.unary())):this.postfix(this.primary())}number(e){if(!this.peek(".."))return vr(e);this.take("..");const n=(this.peek("-")?(this.take("-"),-1):1)*this.take("num").v,s=this.ids.next++;return{fn:r=>e+(n-e)*Qt(r.seed,s),k:"var"}}postfix(e){var t;for(;;)if(this.peek("~"))this.take("~");else if(this.peek(".")&&((t=this.t[this.i+1])==null?void 0:t.k)==="id"){this.take(".");const n=this.take("id").v,s=this.args();e=Lw(e,n,s)}else return e}args(){this.take("(");const e=[];if(this.peek(")"))return this.take(")"),e;for(;e.push(this.value()),this.peek(",");)this.take(",");return this.take(")"),e}primary(){const e=this.t[this.i];if(!e)throw new Error("fx: a value is missing");if(e.k==="num")return this.number(this.take("num").v);if(e.k==="$")return this.take("$"),Pw(e.v);if(e.k==="%"||e.k==="#")throw new Error(`fx: ${e.k}${e.v} is not read here yet`);if(e.k==="("){this.take("(");const t=this.value();return this.take(")"),t}if(e.k==="<"){this.take("<");const t=this.sum();this.take(",");const n=this.sum();this.take(",");const s=this.sum();if(this.take(">"),[t,n,s].every(a=>a.k==="const"))return vr([t.v,n.v,s.v]);const r=Zi();return{fn:a=>(r[0]=t.fn(a),r[1]=n.fn(a),r[2]=s.fn(a),r),k:"var"}}if(e.k==="id")return this.take("id"),this.peek("(")?Dw(e.v,this.args(),this.ids):{fn:()=>e.v,k:"name",name:e.v};throw new Error(`fx: unexpected ${e.k}`)}}function ul(i,e,t){const n=Sw[i];if(e.k==="const"&&t.k==="const")return vr(Nf(n,e.v,t.v,Zi()));const s=Zi();return{fn:r=>Nf(n,e.fn(r),t.fn(r),s),k:"var"}}function Cw(i){const e=Zi();return{k:"var",fn(t){const n=Math.min(Math.max(t.t,0),1);let s=1;for(;s<i.length-1&&i[s].t<n;)s++;const r=i[s-1],a=i[s],o=a.t-r.t;return Ew(r.n.fn(t),a.n.fn(t),o>0?Math.min(Math.max((n-r.t)/o,0),1):1,e)}}}function Pw(i){const e={size:t=>t.size,spin:t=>t.spin,glo:t=>t.glo,tint:t=>t.tint,age:t=>t.age,life:t=>Number.isFinite(t.life)?t.life:0,v:t=>t.v}[i];if(!e)throw new Error(`fx: unknown variable $${i}`);return{fn:e,k:"var"}}function Lw(i,e,t){if(e==="c"){const r=t[0],a=Zi();return{fn:o=>{const c=i.fn(o),l=r.fn(o),f=Ci(c);return a[0]=f?c[0]:c,a[1]=(f?c[1]:c)+l,a[2]=f?c[2]:c,a},k:"var",shape:i.shape}}const n={sin:Math.sin,cos:Math.cos,abs:Math.abs,floor:Math.floor,sqrt:Math.sqrt,fract:r=>r-Math.floor(r)}[e];if(!n)throw new Error(`fx: unknown .${e}()`);const s=Zi();return{fn:r=>{const a=i.fn(r);return Ci(a)?(s[0]=n(a[0]),s[1]=n(a[1]),s[2]=n(a[2]),s):n(a)},k:"var"}}function fl(i,e,t,n=1){const s=2*i-1,r=Math.sqrt(Math.max(0,1-s*s)),a=2*Math.PI*e;return t[0]=r*Math.cos(a)*n,t[1]=s*n,t[2]=r*Math.sin(a)*n,t}function Iw(i,e,t,n){const s=2*Math.PI*e,r=i[0],a=i[1],o=i[2],c=.9*Math.cos(.9*s*a+3.3),l=Math.cos(s*o+1.3*t+2.1),f=1.3*Math.cos(1.3*s*o+.7),h=Math.cos(s*r+1.1*t+4.2),d=1.1*Math.cos(1.1*s*r+1.9),p=Math.cos(s*a+1.7*t);return n[0]=c-l,n[1]=f-h,n[2]=d-p,n}function Dw(i,e,t){const n=(a,o,c=0)=>e[a]?e[a].fn(o):c,s=t.next,r=Zi();switch(t.next+=4,i){case"up":return{fn:a=>(r[0]=0,r[1]=n(0,a,1),r[2]=0,r),k:"var"};case"sdir":case"sphereDir":return{fn:a=>fl(Qt(a.seed,s),Qt(a.seed,s+1),r),k:"var"};case"cone":return{k:"var",fn(a){const o=n(0,a,15)*Math.PI/180,c=1-Qt(a.seed,s)*(1-Math.cos(o)),l=Math.sqrt(Math.max(0,1-c*c)),f=2*Math.PI*Qt(a.seed,s+1);return r[0]=l*Math.cos(f),r[1]=c,r[2]=l*Math.sin(f),r}};case"radial":return{k:"var",fn(a){const o=a.offset[0],c=a.offset[2],l=Math.hypot(o,c),f=n(0,a,1);if(r[1]=0,l>1e-6)return r[0]=o/l*f,r[2]=c/l*f,r;const h=2*Math.PI*Qt(a.seed,s);return r[0]=Math.cos(h)*f,r[2]=Math.sin(h)*f,r}};case"blast":return{k:"var",fn(a){const o=a.offset,c=Math.hypot(o[0],o[1],o[2]),l=n(0,a,1);return c>1e-6?(r[0]=o[0]/c*l,r[1]=o[1]/c*l,r[2]=o[2]/c*l,r):fl(Qt(a.seed,s),Qt(a.seed,s+1),r,l)}};case"grav":case"gravity":return vr([0,-9.81,0]);case"buoy":case"buoyancy":return{fn:a=>(r[0]=0,r[1]=n(0,a,1),r[2]=0,r),k:"var"};case"drag":return{fn:a=>{const o=n(0,a,1);return r[0]=-o*a.v[0],r[1]=-o*a.v[1],r[2]=-o*a.v[2],r},k:"var"};case"curl":return{fn:a=>Iw(a.p,n(0,a,.5),a.time,r),k:"var"};case"force":return{fn:a=>Tw(n(0,a,0),r),k:"var"};case"hdr":case"rgb":case"vec3":return{fn:a=>(r[0]=n(0,a),r[1]=n(1,a),r[2]=n(2,a),r),k:"var"};case"spin":return{fn:a=>a.age*(2*Qt(a.seed,s)-1)*n(0,a,1)*2*Math.PI,k:"var"};case"flick":case"flicker":return{fn:a=>1+Of.depth*n(1,a,.15)*wa(a.time*n(0,a,1)+a.seed%997),k:"var"};case"fire":case"firelight":return{fn:a=>1+Of.depth*(.25*wa(a.time*n(0,a,1.2)+3.1)+.15*wa(a.time*n(1,a,2)+17.7)),k:"var"};case"noise":return{fn:a=>wa(n(0,a,a.time)),k:"var"};case"time":return{fn:a=>a.time,k:"var"};case"point":return{fn:()=>(r[0]=r[1]=r[2]=0,r),k:"var",shape:!0};case"disc":return{k:"var",shape:!0,fn(a){const o=n(0,a,1)*Math.sqrt(Qt(a.seed,s)),c=2*Math.PI*Qt(a.seed,s+1);return r[0]=o*Math.cos(c),r[1]=0,r[2]=o*Math.sin(c),r}};case"sphere":return{k:"var",shape:!0,fn(a){const o=n(0,a,1)*Math.cbrt(Qt(a.seed,s+2));return fl(Qt(a.seed,s),Qt(a.seed,s+1),r,o)}};case"box":return{fn:a=>{for(let o=0;o<3;o++)r[o]=(2*Qt(a.seed,s+o)-1)*n(o,a,1);return r},k:"var",shape:!0};case"line":return{k:"var",shape:!0,fn(a){const o=n(1,a,1),c=n(2,a,0),l=n(3,a,0),f=Math.hypot(o,c,l)||1,h=(Qt(a.seed,s)-.5)*n(0,a,1);return r[0]=o/f*h,r[1]=c/f*h,r[2]=l/f*h,r}};case"sprite":case"light":return{fn:()=>null,k:"render",name:i,args:e};case"bounce":return{fn:()=>null,k:"floor",args:e};default:throw new Error(`fx: unknown ${i}()`)}}function kf(i,e={next:1}){const t=new Rw(String(i),e),n=t.value();if(!t.done())throw new Error(`fx: "${i}" has more than one value`);return Aw(n)}const Ow=["life","v","size","spin","tint"],Nw=["acc","sz","col","a","rot","glo"],kw=new Set(["rate","burst","n","on","at","floor","r",...Ow,...Nw]),Uf=8;function Uw(i){const e=[];let t=0,n="";for(const s of i)s==="("?t++:s===")"&&(t=Math.max(0,t-1)),/\s/.test(s)&&t===0?(n&&e.push(n),n=""):n+=s;return n&&e.push(n),e}function Fw(i){if((i==null?void 0:i.k)!=="render")throw new Error("fx: r= takes sprite(...) or light(...)");const e=n=>i.args[n],t=(n,s)=>{var r;return((r=e(n))==null?void 0:r.k)==="name"?e(n).name:s};if(i.name==="sprite"){const n=e(3);if(n&&n.k!=="const")throw new Error("fx: a sprite's stretch is a number");return{kind:"sprite",texture:t(0,"soft-disc"),blend:t(1,"alpha"),align:t(2,"full"),stretch:n?n.v:0}}return{kind:"light",color:e(0),intensity:e(1),radius:e(2)}}function Bw(i){var e;if(i.k==="name"){if(!["die","stick","bounce"].includes(i.name))throw new Error(`fx: floor=${i.name}?`);return{mode:i.name,k:.5}}if(i.k==="floor")return{mode:"bounce",k:((e=i.args[0])==null?void 0:e.k)==="const"?i.args[0].v:.5};throw new Error("fx: floor= takes die, stick or bounce(k)")}function zw(i){const[,e,t]=i.match(/^pop\s+(\S+)\s*(.*)$/)??[];if(!e)throw new Error(`fx: "${i}" is not a pop line`);const n={name:e,ignored:[]},s={next:1};for(const r of Uw(t)){const a=r.indexOf("=");if(a<=0)throw new Error(`fx: "${r}" is not key=value`);const o=r.slice(0,a),c=r.slice(a+1);if(!kw.has(o)){n.ignored.push(o);continue}const l=o==="on"&&c.match(/^@([A-Za-z_][\w-]*)(?:\?(\d*\.?\d+))?$/);if(l){n.parent={name:l[1],chance:l[2]===void 0?1:Number(l[2])};continue}const f=kf(c,s);if(o==="r")n.r=Fw(f);else if(o==="floor")n.floor=Bw(f);else if(o==="n"){if(f.k!=="const")throw new Error("fx: n= is a number");n.n=f.v}else n[o]=f}if(!n.r)throw new Error(`fx: pop ${e} has no r=`);return!n.rate&&!n.burst&&n.n==null&&!n.parent&&(n.burst=kf("1")),n}function Hw(i){var n;const e=[];for(const s of String(i).split(/\r?\n/)){const r=s.replace(/\/\/.*$/,"");r.trim()&&(/^\s/.test(r)&&e.length?e[e.length-1]+=" "+r.trim():e.push(r.trim()))}if(((n=e[0])==null?void 0:n.split(/\s+/)[0])!=="fx")throw new Error("fx: a program starts with the line fx");const t=e.slice(1).map(zw);if(t.length>Uf)throw new Error(`fx: ${t.length} populations, at most ${Uf}`);for(const s of t)if(s.parent&&!t.some(r=>r.name===s.parent.name))throw new Error(`fx: pop ${s.name} is born on @${s.parent.name}, which is not here`);return{pops:t}}const Ff=0,Bf=.3;class Gw{constructor(){this.n=0,this.cap=0,this.grow(64)}grow(e){const t=(s,r)=>{const a=new Float64Array(e*r);return s&&a.set(s.subarray(0,this.n*r)),a};this.p=t(this.p,3),this.v=t(this.v,3),this.o=t(this.o,3),this.tint=t(this.tint,3),this.age=t(this.age,1),this.life=t(this.life,1),this.size=t(this.size,1),this.spin=t(this.spin,1),this.stuck=t(this.stuck,1);const n=new Uint32Array(e);this.seed&&n.set(this.seed.subarray(0,this.n)),this.seed=n,this.cap=e}add(){return this.n===this.cap&&this.grow(this.cap*2),this.n++}kill(e){const t=--this.n;if(e!==t){for(const[n,s]of[[this.p,3],[this.v,3],[this.o,3],[this.tint,3],[this.age,1],[this.life,1],[this.size,1],[this.spin,1],[this.stuck,1]])for(let r=0;r<s;r++)n[e*s+r]=n[t*s+r];this.seed[e]=this.seed[t]}}}const Ms=(i,e)=>typeof i=="number"?(e[0]=e[1]=e[2]=i,e):i,zf=Object.freeze([0,0,0]),Vw=Object.freeze([1,1,1]);class Ww{constructor(e,{anchor:t=[0,0,0],mobile:n=!1,seed:s=1}={}){this.pops=e.pops.map(r=>({pop:r,pool:new Gw,carry:0,burst:!1,children:[]}));for(const r of this.pops)r.pop.parent&&this.pops.find(a=>a.pop.name===r.pop.parent.name).children.push(r);this.anchor=[...t],this.from=[...t],this.time=0,this.emitting=!0,this.seed=ui(s>>>0),this.births=0,this.c=ww(),this.scratch=[0,0,0],this.c.mobile=n}moveTo(e,t,n){this.anchor[0]=e,this.anchor[1]=t,this.anchor[2]=n}stop(){this.emitting=!1;for(const e of this.pops)e.pop.n!=null&&!e.pop.life&&(e.pool.n=0)}get done(){return this.pops.some(e=>e.pool.n>0)?!1:!this.emitting||this.pops.every(e=>e.pop.parent||!e.pop.rate&&e.pop.n==null&&e.burst)}read(e,t){const n=this.c;n.seed=e.seed[t],n.age=e.age[t],n.life=e.life[t],n.t=Number.isFinite(n.life)&&n.life>0?n.age/n.life:0,n.size=e.size[t],n.spin=e.spin[t];for(let s=0;s<3;s++)n.p[s]=e.p[t*3+s],n.v[s]=e.v[t*3+s],n.offset[s]=e.o[t*3+s],n.tint[s]=e.tint[t*3+s];return n}born(e,t,n,s=null){const{pop:r,pool:a}=e,o=a.add(),c=this.c;a.seed[o]=ui((this.seed^Math.imul(++this.births,2654435761))>>>0),c.seed=a.seed[o],c.age=0,c.t=0,c.life=1/0;const l=r.on??r.at,f=l&&!s?Ms(l.fn(c),this.scratch):zf;for(let p=0;p<3;p++)c.offset[p]=f[p];for(let p=0;p<3;p++)a.o[o*3+p]=f[p],a.p[o*3+p]=s?s[p]:this.from[p]+(this.anchor[p]-this.from[p])*t+f[p];const h=r.v?Ms(r.v.fn(c),this.scratch):zf;for(let p=0;p<3;p++)a.v[o*3+p]=h[p];a.life[o]=r.life?Math.max(.001,r.life.fn(c)):1/0,a.size[o]=r.size?r.size.fn(c):.1,a.spin[o]=r.spin?r.spin.fn(c):0;const d=r.tint?Ms(r.tint.fn(c),this.scratch):Vw;for(let p=0;p<3;p++)a.tint[o*3+p]=d[p];a.stuck[o]=0,a.age[o]=0,this.step(e,o,(1-t)*n)}step(e,t,n){const{pop:s,pool:r}=e;if(r.age[t]+=n,r.age[t]>=r.life[t])return!1;if(r.stuck[t])return!0;if(s.acc){const c=Ms(s.acc.fn(this.read(r,t)),this.scratch);for(let l=0;l<3;l++)r.v[t*3+l]+=c[l]*n}for(let c=0;c<3;c++)r.p[t*3+c]+=r.v[t*3+c]*n;const a=s.floor,o=t*3+1;if(a&&r.p[o]<Ff){if(a.mode==="die")return!1;r.p[o]=Ff,a.mode==="stick"?(r.v[t*3]=r.v[o]=r.v[t*3+2]=0,r.stuck[t]=1):r.v[o]<0&&(r.v[o]=-r.v[o]*a.k,r.v[t*3]*=.7,r.v[t*3+2]*=.7,r.v[o]<Bf&&(r.v[o]=0,r.stuck[t]=Math.hypot(r.v[t*3],r.v[t*3+2])<Bf?1:0))}return!0}update(e){this.time+=e,this.c.time=this.time;for(const t of this.pops){const{pop:n,pool:s}=t;for(let o=0;o<s.n;){if(this.step(t,o,e)){o++;continue}for(const c of t.children)ui((s.seed[o]^1540483477)>>>0)/4294967296<c.pop.parent.chance&&this.born(c,1,0,[s.p[o*3],s.p[o*3+1],s.p[o*3+2]]);s.kill(o)}if(!this.emitting)continue;const r=this.c;r.seed=this.seed,r.t=0,r.age=this.time;let a=0;if(n.burst&&!t.burst&&(t.burst=!0,a+=Math.max(0,Math.round(n.burst.fn(r)))),n.rate){t.carry+=Math.max(0,n.rate.fn(r))*e;const o=Math.floor(t.carry);t.carry-=o,a+=o}n.n!=null&&(a+=Math.max(0,n.n-s.n));for(let o=0;o<a;o++)this.born(t,(o+.5)/a,e)}this.from[0]=this.anchor[0],this.from[1]=this.anchor[1],this.from[2]=this.anchor[2]}draw(e,t,n=null){for(const s of this.pops){const{pop:r,pool:a}=s,o=r.r;for(let c=0;c<a.n;c++){if(n&&o.kind!=="light"&&!n(a.p[c*3],a.p[c*3+1],a.p[c*3+2],Math.max(a.size[c]*3,1)))continue;const l=this.read(a,c);if(l.glo=r.glo?r.glo.fn(l):1,o.kind==="light"){t&&t(o,l.p[0],l.p[1],l.p[2],Ms(o.color?o.color.fn(l):1,this.scratch),o.intensity?o.intensity.fn(l):1,o.radius?o.radius.fn(l):5);continue}const f=r.sz?r.sz.fn(l):l.size,h=r.a?r.a.fn(l):1;if(!(f>0)||!(h>0))continue;const d=r.col?Ms(r.col.fn(l),this.scratch):l.tint;e(o,l.p[0],l.p[1],l.p[2],l.v[0],l.v[1],l.v[2],f,r.rot?r.rot.fn(l):0,d,Math.min(h,1))}}}}const gn=128;function qw(i,e,t){const n=Math.floor(i),s=Math.floor(e),r=i-n,a=e-s,o=r*r*(3-2*r),c=a*a*(3-2*a),l=(x,y)=>ui((Math.imul(n+x,668265261)^Math.imul(s+y,374761393)^t)>>>0)/4294967296,f=l(0,0),h=l(1,0),d=l(0,1),p=l(1,1);return f+(h-f)*o+(d-f)*c+(f-h-d+p)*o*c}function Ma(i,e,t){let n=0,s=.5,r=0;for(let a=0;a<4;a++)n+=s*qw(i,e,t+a*101),r+=s,i*=2.03,e*=2.03,s*=.5;return n/r}const Ts=(i,e,t)=>{const n=Math.min(Math.max((t-i)/(e-i),0),1);return n*n*(3-2*n)},cc={"soft-disc":(i,e)=>{const t=i*i+e*e;return t>=1?0:(1-t)*(1-t)},"smoke-puff":(i,e)=>{const t=Math.atan2(e,i),n=Math.hypot(i,e),s=.97+.06*(Ma(Math.cos(t)*1.6+3,Math.sin(t)*1.6+3,7)-.5)*2;return Ts(s,s*.25,n)*(.78+.22*Ma(i*2.2+5,e*2.2+5,13))},"flame-wisp":(i,e)=>{const t=(e+1)/2,n=(Ma(t*2.5,1.7,29)-.5)*.5*t,s=.62*Math.pow(1-t,.55)*(.35+.65*Math.sin(Math.min(t*6,Math.PI/2))),r=Math.abs(i-n)/Math.max(s,.001),a=Ma(i*3+11,t*4-2,31);return Ts(1,.25,r)*Ts(1,.55,t+(a-.5)*.5)*Ts(0,.12,t)},ember:(i,e)=>{const t=i*i+e*e;return Math.min(1,Math.exp(-t/.035)+.35*Math.exp(-t/.25))},chip:(i,e)=>{const t=Math.atan2(e,i),n=Math.hypot(i,e),s=7,r=(t+Math.PI)/(2*Math.PI)*s,a=Math.floor(r),o=r-a,c=T=>.55+.4*(ui(T%s+41)/4294967296),l=a/s*2*Math.PI-Math.PI,f=(a+1)/s*2*Math.PI-Math.PI,h=[Math.cos(l)*c(a),Math.sin(l)*c(a)],d=[Math.cos(f)*c(a+1),Math.sin(f)*c(a+1)],p=d[0]-h[0],x=d[1]-h[1],y=Math.cos(t),_=Math.sin(t),g=y*x-_*p,R=g===0?c(a):(h[0]*x-h[1]*p)/g;return o>=0?Ts(R+1/gn,R-1/gn,n):0}};cc.stalk=(i,e)=>{const t=Math.abs(i);if(t>=.96)return 0;const n=.2*Math.sqrt(1-(t/.96)**2)*(.85+.15*Math.sin(i*9));return Ts(n+1/gn,n-1/gn,Math.abs(e))};const hl=new Map;function Td(i){const e=cc[i]?i:"soft-disc";if(hl.has(e))return hl.get(e);const t=cc[e],n=new Uint8Array(gn*gn*4);for(let r=0;r<gn;r++)for(let a=0;a<gn;a++){const o=(a+.5)/gn*2-1,c=(r+.5)/gn*2-1,l=(r*gn+a)*4;n[l]=n[l+1]=n[l+2]=255,n[l+3]=Math.round(Math.min(Math.max(t(o,c),0),1)*255)}const s=new Zg(n,gn,gn,bn);return s.flipY=!1,s.generateMipmaps=!0,s.minFilter=Gn,s.magFilter=cn,s.needsUpdate=!0,hl.set(e,s),s}const Ad=2048,jw={alpha:Mn,add:Mr},Xw=`attribute vec2 iCenter; attribute vec2 iScale; attribute float iRot; attribute vec4 iColor;
varying vec2 vUv; varying vec4 vColor;
void main() {
  vUv = uv; vColor = iColor;
  vec2 p = position.xy * iScale; float c = cos(iRot), s = sin(iRot);
  p = vec2(c * p.x - s * p.y, s * p.x + c * p.y);
  gl_Position = projectionMatrix * viewMatrix * vec4(iCenter + p, 0.0, 1.0);
}`,$w=`uniform sampler2D map; varying vec2 vUv; varying vec4 vColor;
void main() {
  float a = texture2D(map, vUv).a * vColor.a;
  if (a < 0.003) discard;
  gl_FragColor = vec4(vColor.rgb, a);
  #include <colorspace_fragment>
}`;class Kw{constructor(e,t,n,s){const r=new hi(1,1),a=new o0;a.index=r.index,a.setAttribute("position",r.attributes.position),a.setAttribute("uv",r.attributes.uv);const o=l=>new Qg(new Float32Array(Ad*l),l).setUsage(Mg);this.center=o(2),this.scale=o(2),this.rot=o(1),this.color=o(4),a.setAttribute("iCenter",this.center),a.setAttribute("iScale",this.scale),a.setAttribute("iRot",this.rot),a.setAttribute("iColor",this.color),a.instanceCount=0;const c=new kn({uniforms:{map:{value:Td(t)}},vertexShader:Xw,fragmentShader:$w,transparent:!0,depthTest:!1,depthWrite:!1,blending:jw[n]??Mn});this.mesh=new sn(a,c),this.mesh.frustumCulled=!1,this.mesh.renderOrder=s,this.mesh.visible=!1,e.add(this.mesh),this.n=0}}class Yw{constructor(e){this.scene=e,this.groups=new Map,this.dropped=0}group(e,t){const n=e.texture+"|"+e.blend+"|"+t;let s=this.groups.get(n);return s||this.groups.set(n,s=new Kw(this.scene,e.texture,e.blend,t*1e6+999e3)),s}prepare(e){e.kind!=="light"&&Td(e.texture)}begin(){for(const e of this.groups.values())e.n=0}card(e,t,n,s,r,a,o,c,l,f,h,d){const p=this.group(t,e);if(p.n===Ad){this.dropped++;return}let x=l,y=f;t.align==="velocity"&&(x=l+Math.hypot(a,o,c)*t.stretch,y=Math.atan2(o,a));const _=p.n++;p.center.array[_*2]=n,p.center.array[_*2+1]=s,p.scale.array[_*2]=x,p.scale.array[_*2+1]=l,p.rot.array[_]=y;const g=p.color.array;g[_*4]=h[0],g[_*4+1]=h[1],g[_*4+2]=h[2],g[_*4+3]=d}end(){for(const e of this.groups.values())if(e.mesh.visible=e.n>0,e.mesh.geometry.instanceCount=e.n,!!e.n)for(const t of[e.center,e.scale,e.rot,e.color])t.clearUpdateRanges(),t.addUpdateRange(0,e.n*t.itemSize),t.needsUpdate=!0}}const Jw=.1;class Zw{constructor(e,{mobile:t=!1,layers:n=[[-1/0,14]]}={}){this.renderer=new Yw(e),this.mobile=t,this.layers=[...n].sort((s,r)=>r[0]-s[0]),this.programs=new Map,this.attached=new Map,this.effects=[],this.warned=new Set,this.seed=1}layerOf(e){var t;for(const[n,s]of this.layers)if(e>=n)return s;return((t=this.layers[this.layers.length-1])==null?void 0:t[1])??14}warn(e){this.warned.has(e)||(this.warned.add(e),console.warn("[justa] "+e))}program(e){if(typeof e!="string"||!e.trim().startsWith("fx"))return this.warn(`fx: only program text plays here, not ${String(e).slice(0,40)}`),null;if(!this.programs.has(e))try{const t=Hw(e);for(const n of t.pops)n.ignored.length&&this.warn(`fx: pop ${n.name} ignores ${n.ignored.join(", ")}`),this.renderer.prepare(n.r);this.programs.set(e,t)}catch(t){this.warn(t.message),this.programs.set(e,null)}return this.programs.get(e)}prepare(e){for(const t of e)this.program(t)}start(e,t){const n=new Ww(e,{anchor:t,mobile:this.mobile,seed:this.seed++});return n.layer=this.layerOf(t[2]),this.effects.push(n),n}oneShot(e={}){const t=this.program(e.script),n=e.position;!t||!n||(this.start(t,Array.isArray(n)?n:[n.x??0,n.y??0,n.z??0]).once=!0)}update(e,t){var a;const n=Math.min(Math.max(e,0),Jw),s=new Set;for(const o of t.entities.values()){const c=(a=o.fx)==null?void 0:a.script,l=this.attached.get(o.id);if(!c||o.visible===!1)continue;const f=t.worldPosition(o);if(s.add(o.id),(l==null?void 0:l.script)!==c){l==null||l.effect.stop();const h=this.program(c);if(!h){this.attached.delete(o.id);continue}this.attached.set(o.id,{script:c,effect:this.start(h,[f.x,f.y,f.z??0])})}else l.effect.moveTo(f.x,f.y,f.z??0)}for(const[o,c]of this.attached)s.has(o)||(c.effect.stop(),this.attached.delete(o));const r=this.renderer;r.begin(),this.effects=this.effects.filter(o=>{n>0&&o.update(n);const c=o.layer;return o.draw((l,f,h,d,p,x,y,_,g,R,T)=>r.card(c,l,f,h,d,p,x,y,_,g,R,T),null),!o.done}),r.end()}}const at={live:!1,testRooms:["teste-justa"],admins:["pa_2e3191d32798f85073f61058545e6b9a","pa_f3710841bdaa8d039ecbc9e5ec447efc","pa_0116e39b6f79ca58333a506e44924da0"],epoch:0,levels:[0,217,614,1128,1736,2426,3189,4019,4910,5859,6862,7917,9021,10171,11367,12607,13888,15210,16572,17972,19409],passes:3,maxPasses:5,perPass:.8333,barSpeed:1.6,levelBonus:.01,setStep:.02,bossAcc:[.58,.6,.62,.64,.66,.68,.7,.72,.74,.76],startGrant:1e6,faucet:1e6,freeRuns:5,runPrice:5e3,holderRuns:{per:5,runs:2,capNfts:25,perOneOfOne:1},pass:{price:25e4,toPool:.8,dropMult:1.5,mintCap:20,freeRuns:10},mintPrice:2500,royalty:5,payoutShare:.4,drops:[{chance:.2,tiers:[2]},{chance:.18,tiers:[2,3]},{chance:.16,tiers:[3]},{chance:.14,tiers:[3,4]},{chance:.12,tiers:[4]},{chance:.1,tiers:[4,5]},{chance:.09,tiers:[5]},{chance:.08,tiers:[5,6]},{chance:.07,tiers:[6]},{chance:.06,tiers:[6,7]}],forgePoints:[0,1,2,4,8,16,32,64,128,256],ranked:{start:1e3,kNew:32,kOld:16,newGames:20,defenderShare:.5,attacksPerDay:5,ghosts:5},bots:[{id:"bot:rookie",name:"Rookie Bot",elo:880,tier:1,level:0,q:.3},{id:"bot:squire",name:"Squire Bot",elo:900,tier:2,level:2,q:.35},{id:"bot:stable",name:"Stable Bot",elo:920,tier:1,level:0,q:.4},{id:"bot:farmhand",name:"Farmhand Bot",elo:960,tier:1,level:1,q:.5},{id:"bot:herald",name:"Herald Bot",elo:990,tier:1,level:1,q:.6},{id:"bot:page",name:"Page Bot",elo:1e3,tier:3,level:5,q:.5},{id:"bot:groom",name:"Groom Bot",elo:1010,tier:2,level:2,q:.55},{id:"bot:archer",name:"Archer Bot",elo:1040,tier:2,level:3,q:.65},{id:"bot:knight",name:"Knight Bot",elo:1100,tier:5,level:9,q:.65},{id:"bot:champion",name:"Champion Bot",elo:1250,tier:8,level:15,q:.8}],gamba:{payout:2,passes:3,barPerPass:.01,maxBet:1e5,lbMinBets:20,riders:[{id:"free",name:"Free rider",cap:.46},{id:"ronke",name:"Ronke",cap:.47,needs:"ronkeverse"},{id:"colored",name:"Colored Ronke",cap:.48,daily:3,needs:"colored"},{id:"one",name:"1/1",cap:.5,daily:3,needs:"oneOfOne"}],bodies:[{id:"one",name:"1/1",n:159,rider:"one"},{id:"zombie",name:"Zombie Body",n:28,rider:"colored"},{id:"gold",name:"Gold Ronke",n:48,rider:"colored"},{id:"orange",name:"Orange Noise",n:82,rider:"colored"},{id:"pink",name:"Pink Noise",n:97,rider:"colored"},{id:"green",name:"Green Noise",n:112,rider:"colored"},{id:"redpurple",name:"Gradient Red Purple",n:185,rider:"colored"},{id:"blueviolet",name:"Gradient Blue Violet",n:191,rider:"colored"},{id:"nerd",name:"Nerd Ronke",n:1832,rider:"ronke"},{id:"tattoo",name:"The Ronke Tattoo",n:1936,rider:"ronke"},{id:"ronke",name:"Ronke",n:2345,rider:"ronke"},{id:"none",name:"No Ronke",n:0,rider:"free"}]}};function Qw(i){if(at.live)return!0;var e="";try{e=i&&i.getRoomId&&i.getRoomId()||""}catch{}return at.testRooms.indexOf(e)>=0}function Rd(i){return at.admins.indexOf(i)>=0}function eM(i){return!at.live||Rd(i)}function $i(i){return Math.floor(i/864e5)}function tM(i){for(var e=0,t=1;t<at.levels.length;t++)(i||0)>=at.levels[t]&&(e=t);return e}function nM(i){return at.levels[Math.max(0,Math.min(at.levels.length-1,i||0))]}function iM(i){var e=at.levels[(i||0)+1];return e??null}function sM(i){return 2*i-2}function rM(i){return Math.max(0,(i||1)-1)*at.setStep}function aM(i){return Math.max(0,i||0)*at.levelBonus}function oM(i){return at.bossAcc[Math.max(0,Math.min(at.bossAcc.length-1,i))]}function Cd(i){return 2*i}function lM(i,e){return Cd(i)<=(e||0)}function cM(i,e){return Math.max(0,Math.min(e-1,Math.floor((i||0)/2)))}function uM(i,e,t){return Math.max(e,i*Math.pow(at.perPass,(t||1)-1))}function Pd(i,e){var t=at.holderRuns,n=Math.min(Math.max(0,i&&i.ronkeverse||0),t.capNfts);return(e?at.pass.freeRuns:at.freeRuns)+Math.floor(n/t.per)*t.runs+Math.max(0,i&&i.oneOfOne||0)*t.perOneOfOne}function fM(i,e,t,n){var s=i&&i.day===$i(t)&&i.used||0;return Math.max(0,Pd(e,n)-s)}function hM(i,e){var t=$i(e);return{day:t,used:(i&&i.day===t&&i.used||0)+1}}function dM(i,e,t,n){var s=at.drops[Math.max(0,Math.min(at.drops.length-1,i))];return t>=s.chance*(e?at.pass.dropMult:1)?0:s.tiers.length>1&&n>=.7?s.tiers[1]:s.tiers[0]}function pM(i,e){var t=at.drops[Math.max(0,Math.min(at.drops.length-1,i))];return Math.min(1,t.chance*(e?at.pass.dropMult:1))}function mM(i){return at.forgePoints[(i||1)-1]||0}function gM(i,e,t,n){var s=at.ranked,r=(n||0)<s.newGames?s.kNew:s.kOld,a=1/(1+Math.pow(10,((e||s.start)-(i||s.start))/400)),o=Math.round(r*((typeof t=="number"?t:t?1:0)-a));return{me:o,them:-Math.round(o*s.defenderShare)}}function _M(i,e){var t=Math.max(i.length?1:0,Math.floor(i.length*at.payoutShare)),n=0,s=[],r;for(r=0;r<t;r++)n+=1/(r+1);for(r=0;r<t;r++)s.push({user_id:i[r].user_id,name:i[r].name,rank:r+1,amount:Math.floor(e*(1/(r+1))/n)});return s}function vM(i){return[i-.05,i+.06,i,i+.1,i-.08].map(function(e){return Math.round(Math.max(0,Math.min(1,e))*100)/100})}function mo(i){return at.gamba.riders.find(function(e){return e.id===i})||at.gamba.riders[0]}function Ld(){return at.gamba.passes*at.gamba.barPerPass}function Id(i){return mo(i).cap-Ld()}function Dd(i){var e=0;return(i||[]).slice(0,at.gamba.passes).forEach(function(t){e+=Math.max(0,Math.min(1,+t||0))*at.gamba.barPerPass}),e}function yM(i,e){return Math.min(mo(i).cap,Id(i)+Dd(e))}function xM(i){return 1-mo(i).cap*at.gamba.payout}function Od(i){return at.gamba.bodies.find(function(e){return e.id===i})||null}function jc(i){var e=i||{},t=Od(e.rarest);return t?t.rider:(e.oneOfOne||0)>0?"one":(e.colored||0)>0?"colored":(e.ronkeverse||0)>0?"ronke":"free"}function bM(i,e){var t=jc(e);return i==="free"||i===t||i==="ronke"&&t!=="free"}function wM(i,e){return at.gamba.maxBet}function Nd(i){return i=Math.round(i||0),(i<0?"-":"")+String(Math.abs(i)).replace(/\B(?=(\d{3})+(?!\d))/g,",")}const Xc=Object.freeze(Object.defineProperty({__proto__:null,barPeriod:uM,bossAcc:oM,bossLevel:Cd,bossOpen:lM,botQs:vM,dayOf:$i,dropChance:pM,dropFor:dM,econOn:Qw,eloDelta:gM,fmt:Nd,forgeValue:mM,gambaBarMax:Ld,gambaBase:Id,gambaBody:Od,gambaBonus:Dd,gambaChance:yM,gambaEdge:xM,gambaMaxBet:wM,gambaOwns:bM,gambaRider:mo,gambaTop:jc,isAdmin:Rd,levelBonus:aM,levelFor:tM,levelXp:nM,nextLevelXp:iM,payouts:_M,runsLeft:fM,runsPerDay:Pd,setBonus:rM,spendRun:hM,testTools:eM,topBoss:cM,unlockLevel:sM},Symbol.toStringTag,{value:"Module"})),uc=.43,kd=.49,MM=.01,fc=5,SM=1234567,EM=(i=SM)=>`I'm jousting for $HORSKE in HORSKingdom

🏆 Jackpot: ${Nd(i)} $HORSKE
⚔️ Fight the house:`,Hf={url:"https://horskeverse.vercel.app",via:"HorskeOnRonke"},zM=i=>`https://x.com/intent/post?text=${encodeURIComponent(EM(i))}&url=${encodeURIComponent(Hf.url)}&via=${encodeURIComponent(Hf.via)}`,Ka=[{id:0,name:"None",bonus:0},{id:4,name:"Top 500",rank:500,bonus:.005},{id:3,name:"Top 200",rank:200,bonus:.01},{id:2,name:"Top 100",rank:100,bonus:.015},{id:1,name:"Top 69",rank:69,bonus:.02}],Gf=[{id:"checkin",name:"Check in",text:"Once a day. A new day starts at 00:00 UTC."},{id:"xpost",name:"Post on X",text:"Once a day: tell X about the joust. It counts when X opens."},{id:"lock",name:"Lock HORSKE",text:"Lock 100,000 HORSKE for 90 days. The bonus holds while it stays locked.",test:!0},{id:"weekly",name:"Buy HORSKE this week",text:"Buy 10,000 HORSKE every week.",test:!0},{id:"bouts",name:`Bet ${fc} times`,text:`Bet ${fc} times in Fight the house in a day. The bonus is for the next day.`},{id:"ronke",name:"Hold a Ronke",text:"Any Ronkeverse NFT.",test:!0}],$c="justa-web:quests",Fa=i=>Math.round(i*1e4)/1e4,TM=()=>at.gamba.passes*at.gamba.barPerPass;function Sa(i,e=globalThis.localStorage){try{const t=JSON.parse(e.getItem($c)??"null");if(t&&t.user===i)return{user:i,checkin:t.checkin??null,xpost:t.xpost??null,lock:!!t.lock,weekly:!!t.weekly,tier:Ka.some(n=>n.id===t.tier)?t.tier:0}}catch{}return{user:i,checkin:null,xpost:null,lock:!1,weekly:!1,tier:0}}function AM(i,e=globalThis.localStorage){try{e.setItem($c,JSON.stringify(i))}catch{}}function RM(i,e,t,n){const s=t&&t.day===n?t:t&&t.day===n-1?{day:n,today:0,yesterday:t.today}:{day:n,today:0,yesterday:0},r={checkin:i.checkin===n,xpost:i.xpost===n,lock:!!i.lock,weekly:!!i.weekly,bouts:s.yesterday>=fc,ronke:jc(e||{})!=="free"},a=Gf.filter(f=>r[f.id]).length,o=Ka.find(f=>f.id===i.tier)||Ka[0],c=Math.round(MM*1e4*a/Gf.length)/1e4,l=Fa(c+o.bonus);return{day:n,on:r,n:a,tier:o,quests:c,score:o.bonus,bonus:l,bouts:s,lo:Fa(uc+l),hi:Math.min(kd,Fa(uc+TM()+l))}}function CM(i,e){const t=i.gamba,n=Math.min(kd,Fa(uc+t.passes*t.barPerPass+(e||0)));for(const s of t.riders)s.cap=n,delete s.daily;return n}async function PM({db:i,userId:e,fake:t,now:n=()=>Date.now(),season:s=at,every:r=3e3}){var y;const a=i.sqlFor(e);let o=Sa(e),c=null,l=null;async function f(){const _=$i(n()),g=await a`SELECT day, COUNT(*) AS n FROM bets WHERE user_id = @caller AND status <> 'open' AND day BETWEEN ${_-1} AND ${_} GROUP BY day`,R=Object.fromEntries(g.rows.map(T=>[T.day,T.n]));c={day:_,today:R[_]||0,yesterday:R[_-1]||0}}function h(){const _=RM(o,t(),c,$i(n()));return _.bonus!==l&&(CM(s,_.bonus),l=_.bonus),_}async function d(){return o=Sa(e),await f(),h()}const p=_=>(o=Sa(e),_(o),AM(o),h());await d();const x=setInterval(()=>{d().catch(()=>{})},r);return(y=globalThis.addEventListener)==null||y.call(globalThis,"storage",_=>{_.key===$c&&(o=Sa(e),h())}),{view:h,refresh:d,stop:()=>clearInterval(x),checkIn:()=>p(_=>{_.checkin=$i(n())}),posted:()=>p(_=>{_.xpost=$i(n())}),setTest:(_,g)=>p(R=>{_==="tier"?R.tier=Ka.some(T=>T.id===+g)?+g:0:(_==="lock"||_==="weekly")&&(R[_]=!!g)})}}const LM=`// The joust, run on the player's own machine: the player's body is their rider, an AI knight rides the far lane.
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
`,IM=`/* The web version's HUD layer over the world's scripts/ui.js (which stays as Spawn has it).\r
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
`,Ss=Object.assign({"/world/scripts/arrival.js":()=>Ne(()=>import("./arrival-BGB7dWv4.js"),__vite__mapDeps([0,1])),"/world/scripts/bank.js":()=>Ne(()=>import("./bank-BayQo6zl.js"),[]),"/world/scripts/camera.js":()=>Ne(()=>import("./camera-CFdr3yOD.js"),[]),"/world/scripts/db.js":()=>Ne(()=>import("./db-UtNTmWkn.js"),[]),"/world/scripts/ground.js":()=>Ne(()=>import("./ground-b0nUTt3G.js"),[]),"/world/scripts/joust-camera.js":()=>Ne(()=>import("./joust-camera-Fg9LmHPp.js"),[]),"/world/scripts/jouster.js":()=>Ne(()=>import("./jouster-CNNuhO2i.js"),__vite__mapDeps([2,3,1])),"/world/scripts/lib/color.js":()=>Ne(()=>import("./color-DDSg_o2D.js"),[]),"/world/scripts/lib/econ.js":()=>Ne(()=>Promise.resolve().then(()=>Xc),void 0),"/world/scripts/look-default.js":()=>Ne(()=>import("./look-default-BibdNaYP.js"),[]),"/world/scripts/player.js":()=>Ne(()=>import("./player-CqzJShkt.js"),__vite__mapDeps([4,5,6,7])),"/world/scripts/tex-hero.js":()=>Ne(()=>import("./tex-hero-D9FSdSdV.js"),__vite__mapDeps([6,5,7])),"/world/scripts/tex-lance.js":()=>Ne(()=>import("./tex-lance-h9_Q8DQT.js"),[]),"/world/scripts/tex-meadow.js":()=>Ne(()=>import("./tex-meadow-CQRPL3Pn.js"),__vite__mapDeps([8,5,7])),"/world/scripts/tex-sky.js":()=>Ne(()=>import("./tex-sky-H7hQEGu6.js"),__vite__mapDeps([9,5,7])),"/world/scripts/tex-soil.js":()=>Ne(()=>import("./tex-soil-6tL0S4Gb.js"),__vite__mapDeps([10,5,7])),"/world/scripts/tex-tilt.js":()=>Ne(()=>import("./tex-tilt-DATa2CU9.js"),[]),"/world/scripts/tileset-ground.js":()=>Ne(()=>import("./tileset-ground-dAb9Cutk.js"),__vite__mapDeps([11,5])),"/world/scripts/tileset-sand.js":()=>Ne(()=>import("./tileset-sand-D3oqsxai.js"),[]),"/world/scripts/ui.js":()=>Ne(()=>import("./ui-3thon8Eh.js"),__vite__mapDeps([12,3]))}),Ct=new URLSearchParams(location.search),DM=new Set(["rivals","ranked","gamba","armory","forge","market","season"]),OM="teste-justa",zn=Ct.has("modal"),Vf={fight:"rivals",rankedFind:"ranked",gambaBet:"bet"},hc="justa-web:";function yr(i,e){try{if(e===void 0)return JSON.parse(localStorage.getItem(hc+i)??"null");localStorage.setItem(hc+i,JSON.stringify(e))}catch{return null}return e}function NM(){let i=yr("user");return(!i||Ct.has("fresh"))&&(i="web_"+Array.from(crypto.getRandomValues(new Uint8Array(8)),e=>e.toString(16).padStart(2,"0")).join(""),yr("user",i),yr("state",{})),i}function kM(i=40){return new Promise(e=>{const t=[];let n=0;const s=r=>{n&&t.push(r-n),n=r,t.length<i?requestAnimationFrame(s):e(t.sort((a,o)=>a-o)[Math.floor(i/10)])};requestAnimationFrame(s)})}async function UM(){var me,ve,Re,Q,ue,Me,ge,ke,ze;const i=kM(),e=await Om(Ct.get("place")??void 0,{web:!Ct.has("spawn")}),t=new Set((Ct.get("hide")??"").split(",").filter(Boolean));e.placements=e.placements.filter(ae=>!t.has(ae.id));const n=e.place.atmosphere??{},s=document.getElementById("stage"),r=(me=n.look)!=null&&me.script?await Ss["/world/"+n.look.script]():null,a=document.getElementById("view"),o=Number(Ct.get("scale")),c=new kb(a,{toneMapping:((ve=n.look)==null?void 0:ve.toneMapping)??"neutral",look:yb(r,(Re=n.look)==null?void 0:Re.params),scale:o>0?o:null});((Q=e.render)==null?void 0:Q.placeSky)!==!1&&c.setSky(n.sky),i.then(ae=>{ae>0&&(c.refresh=Math.max(4,Math.min(c.refresh??ae,ae)))});const l=()=>c.resize(s.clientWidth,s.clientHeight);l(),addEventListener("resize",l);const f=zn?[]:e.placements.filter(ae=>{var de;return(de=ae.sprite)==null?void 0:de.texture});await Promise.all(f.map((ae,de)=>c.addSprite(ae,de)));const h=e.place.terrain;!zn&&(h==null?void 0:h.kind)==="tilemap"&&h.draw!==!1&&!Ct.has("notiles")&&await c.setTiles(h,await Ss["/world/"+h.generator]());const d=await bw();Ss["/world/scripts/db.js"]&&await d.migrate((await Ss["/world/scripts/db.js"]()).migrate);const p=NM(),x=yr("state")??{};let y=()=>x.fake;const _=Ct.has("spawn")?null:await PM({db:d,userId:p,fake:()=>y()}),g=new jb({roomId:OM,scripts:Ss,gravity:e.place.gravity,groundY:0,sql:ae=>d.sqlFor(ae)});g.worldToScreen=ae=>c.worldToScreen(ae);const R=await Rc(e.config.player),T=g.spawn("player/"+p,{...R,state:{...R.state??{},...x},userId:p,displayName:yr("name")??"Knight",isLocal:!0}),w=g.entities.get(T);y=()=>w.state.fake;const I=new Yb(e.config.inputs);zn||I.bind(a),g.inputs.set(T,()=>I.frame());for(const ae of((ue=e.config.engine)==null?void 0:ue.behaviors)??[]){const de=await g.loadModule(ae);await g.call(w,de,"onArrive",Xi(w))}const L=zn?null:new dw(e.sounds);if(g.sinks.playSound=ae=>L==null?void 0:L.play(ae),L)for(const ae of e.placements)(Me=ae.audio)!=null&&Me.clip&&L.loop(ae.audio);const C=document.getElementById("flash");g.sinks.screenFlash=ae=>{C.style.transition="none",C.style.background=(ae==null?void 0:ae.color)??"#fff",C.style.opacity=String((ae==null?void 0:ae.intensity)??.4),requestAnimationFrame(()=>{C.style.transition=`opacity ${((ae==null?void 0:ae.duration)??.2)*1e3}ms ease-out`,C.style.opacity="0"})};let D={until:0,amp:0};g.sinks.screenShake=ae=>{D={until:performance.now()+((ae==null?void 0:ae.duration)??.3)*1e3,amp:((ae==null?void 0:ae.intensity)??.3)*.25}};const S=await Gb(e.config,Xi(w),{screenAspect:Ct.get("aspect")==="real"}),b=await Ss["/world/"+(((ge=e.config.ui)==null?void 0:ge.render)??"scripts/ui.js")](),O=new hw({ui:b,room:g,player:w,input:I,toScreen:ae=>c.worldToScreen(ae)}),F=new Kb(c,g,{hideBelow:((ke=e.render)==null?void 0:ke.hideBelowLayer)??null}),U=zn||Ct.has("nofx")?null:new Zw(c.scene,{mobile:matchMedia("(pointer: coarse)").matches,layers:(ze=e.render)==null?void 0:ze.fxLayers});U&&(g.sinks.fx=ae=>U.oneShot(ae),U.prepare([...LM.matchAll(/`(fx\r?\n[\s\S]*?)`/g)].map(ae=>ae[1])));let $=g.elapsed;if(!Ct.has("spawn")){document.head.insertAdjacentHTML("beforeend",`<style id="web-hud">${IM}</style>`);const ae=Ct.get("village")??"/realm/?back=1";Ct.has("meter")&&document.documentElement.classList.add("meter"),document.documentElement.classList.add("hud-wood");const de=window.econTab,Se=Ct.get("door")==="bet";if(Se&&document.documentElement.classList.add("only-bet"),typeof de=="function"){const Ye=()=>zn?parent.postMessage({type:"justa-close"},location.origin):location.assign(ae);window.econTab=N=>N==="home"?Ye():Se&&N!=="gamba"?void 0:de(N),de(Se?"gamba":DM.has(Ct.get("door"))?Ct.get("door"):"rivals"),Se&&typeof window.gambaTab=="function"&&window.gambaTab("bet"),Ct.get("door")==="gamba"&&["bet","stats","lb"].includes(Ct.get("sub"))&&typeof window.gambaTab=="function"&&window.gambaTab(Ct.get("sub"))}if(Se&&!zn){const{startBet:Ye}=await Ne(async()=>{const{startBet:N}=await import("./bet-CRzWvCB6.js");return{startBet:N}},[]);Ye({room:g,player:w,village:ae,quests:_})}if(zn){document.documentElement.classList.add("modal");const{startModal:Ye}=await Ne(async()=>{const{startModal:Le}=await import("./modal-B8WotaKj.js");return{startModal:Le}},__vite__mapDeps([13,3])),N=()=>parent.postMessage({type:"justa-close"},location.origin),Mt=Ye({room:g,player:w,quests:_,door:Ct.get("door"),place:Ct.get("building"),onClose:N});addEventListener("message",Le=>{const De=Le.data;Le.origin!==location.origin||(De==null?void 0:De.type)!=="justa-door"||Mt.open(De.door,De.place)});const it=window.sendAction;window.sendAction=(Le,...De)=>Vf[Le]?top.location.assign(`/realm/play/?door=${Vf[Le]}`):it(Le,...De),addEventListener("pageshow",Le=>{Le.persisted&&location.reload()})}}let re="";const J=()=>{const ae=JSON.stringify(w.state);if(ae!==re){re=ae;try{localStorage.setItem(hc+"state",ae)}catch{}}};setInterval(J,2e3),addEventListener("pagehide",J);const fe=Ct.has("prof")?{n:0,room:0,rig:0,views:0,stage:0,hud:0,frame:0}:null,K=(ae,de)=>{const Se=performance.now();return fe&&(fe[ae]+=Se-de),Se};let ee=performance.now();function ne(ae){const de=Math.max(0,(ae-ee)/1e3),Se=Math.min(.1,de);ee=ae;let Ye=performance.now();const N=Ye;if(g.advance(de),Ye=K("room",Ye),zn){requestAnimationFrame(ne);return}c.govern(ae-(ne.prev??ae)),ne.prev=ae;const Mt=S.update(Se,g.nowMs,c.aspect);ae<D.until&&(Mt.x+=(Math.random()-.5)*D.amp,Mt.y+=(Math.random()-.5)*D.amp),Ye=K("rig",Ye),F.sync(),U&&(U.update((g.elapsed-$)/1e3,g),$=g.elapsed),Ye=K("views",Ye),c.frame(Mt,Se),Ye=K("stage",Ye),O.frame(ae),Ye=K("hud",Ye),fe&&(fe.frame+=Ye-N,fe.n++),requestAnimationFrame(ne)}fe&&(window.__prof=fe),requestAnimationFrame(ne),window.__justa={world:e,stage:c,rig:S,room:g,player:w,hud:O,db:d,input:I,audio:L,quests:_},document.documentElement.classList.add("justa-ready"),zn&&parent.postMessage({type:"justa-ready"},location.origin)}UM().catch(i=>{console.error(i),document.getElementById("fault").textContent=String((i==null?void 0:i.stack)??i)});export{mM as A,_M as B,Ld as C,iM as D,nM as E,Pd as F,pM as G,Id as H,cw as I,po as J,zM as K,fc as L,uc as M,kd as N,MM as O,Gf as Q,at as S,Ka as T,aM as a,vM as b,oM as c,$i as d,Qw as e,Cd as f,Dd as g,lM as h,Rd as i,dM as j,gM as k,tM as l,uM as m,cM as n,yM as o,hM as p,Nd as q,fM as r,rM as s,eM as t,sM as u,Od as v,mo as w,jc as x,bM as y,wM as z};

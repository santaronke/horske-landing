const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/arrival-CKezWjuD.js","assets/bank-CCRVHnGB.js","assets/econ-Deg9OsSu.js","assets/db-BH8DPWPJ.js","assets/jouster-B1JpTUK7.js","assets/joust-2BfEs9QO.js","assets/player-CqzJShkt.js","assets/meadow-DQnD2Hmd.js","assets/tex-hero-D9FSdSdV.js","assets/color-DDSg_o2D.js","assets/tex-meadow-CQRPL3Pn.js","assets/tex-sky-H7hQEGu6.js","assets/tex-soil-6tL0S4Gb.js","assets/tileset-ground-dAb9Cutk.js","assets/ui-CTWhMYA8.js","assets/bet-CJfys92V.js","assets/modal-BQ_FjLC1.js"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();const yd="modulepreload",xd=function(i){return"/realm/play/"+i},Dc={},De=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),o=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));r=Promise.allSettled(t.map(c=>{if(c=xd(c),c in Dc)return;Dc[c]=!0;const l=c.endsWith(".css"),h=l?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${h}`))return;const f=document.createElement("link");if(f.rel=l?"stylesheet":yd,l||(f.as="script"),f.crossOrigin="",f.href=c,o&&f.setAttribute("nonce",o),document.head.appendChild(f),l)return new Promise((d,m)=>{f.addEventListener("load",d),f.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${c}`)))})}))}function s(a){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=a,window.dispatchEvent(o),!o.defaultPrevented)throw a}return r.then(a=>{for(const o of a||[])o.status==="rejected"&&s(o.reason);return e().catch(s)})},Sd=`# name: the game's name: fill it once you know what this is. description: one line for the box art.
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
`,bd=`atmosphere:\r
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
`,Ed=`# spawn-scene v2 yaml objects\r
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
`,Md=`# spawn-scene v2 yaml x0z0\r
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
`,wd=`# The web version's own layer over the copied Spawn world. world/ stays an exact copy (npm run sync); what the web\r
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
`,Wl=Symbol.for("yaml.alias"),jo=Symbol.for("yaml.document"),vi=Symbol.for("yaml.map"),cf=Symbol.for("yaml.pair"),kn=Symbol.for("yaml.scalar"),kr=Symbol.for("yaml.seq"),yn=Symbol.for("yaml.node.type"),Xi=i=>!!i&&typeof i=="object"&&i[yn]===Wl,ji=i=>!!i&&typeof i=="object"&&i[yn]===jo,Br=i=>!!i&&typeof i=="object"&&i[yn]===vi,Et=i=>!!i&&typeof i=="object"&&i[yn]===cf,yt=i=>!!i&&typeof i=="object"&&i[yn]===kn,zr=i=>!!i&&typeof i=="object"&&i[yn]===kr;function wt(i){if(i&&typeof i=="object")switch(i[yn]){case vi:case kr:return!0}return!1}function Tt(i){if(i&&typeof i=="object")switch(i[yn]){case Wl:case vi:case kn:case kr:return!0}return!1}const uf=i=>(yt(i)||wt(i))&&!!i.anchor,sn=Symbol("break visit"),ff=Symbol("skip children"),Un=Symbol("remove node");function $i(i,e){const t=hf(e);ji(i)?vr(null,i.contents,t,Object.freeze([i]))===Un&&(i.contents=null):vr(null,i,t,Object.freeze([]))}$i.BREAK=sn;$i.SKIP=ff;$i.REMOVE=Un;function vr(i,e,t,n){const r=df(i,e,t,n);if(Tt(r)||Et(r))return pf(i,n,r),vr(i,r,t,n);if(typeof r!="symbol"){if(wt(e)){n=Object.freeze(n.concat(e));for(let s=0;s<e.items.length;++s){const a=vr(s,e.items[s],t,n);if(typeof a=="number")s=a-1;else{if(a===sn)return sn;a===Un&&(e.items.splice(s,1),s-=1)}}}else if(Et(e)){n=Object.freeze(n.concat(e));const s=vr("key",e.key,t,n);if(s===sn)return sn;s===Un&&(e.key=null);const a=vr("value",e.value,t,n);if(a===sn)return sn;a===Un&&(e.value=null)}}return r}async function Ua(i,e){const t=hf(e);ji(i)?await yr(null,i.contents,t,Object.freeze([i]))===Un&&(i.contents=null):await yr(null,i,t,Object.freeze([]))}Ua.BREAK=sn;Ua.SKIP=ff;Ua.REMOVE=Un;async function yr(i,e,t,n){const r=await df(i,e,t,n);if(Tt(r)||Et(r))return pf(i,n,r),yr(i,r,t,n);if(typeof r!="symbol"){if(wt(e)){n=Object.freeze(n.concat(e));for(let s=0;s<e.items.length;++s){const a=await yr(s,e.items[s],t,n);if(typeof a=="number")s=a-1;else{if(a===sn)return sn;a===Un&&(e.items.splice(s,1),s-=1)}}}else if(Et(e)){n=Object.freeze(n.concat(e));const s=await yr("key",e.key,t,n);if(s===sn)return sn;s===Un&&(e.key=null);const a=await yr("value",e.value,t,n);if(a===sn)return sn;a===Un&&(e.value=null)}}return r}function hf(i){return typeof i=="object"&&(i.Collection||i.Node||i.Value)?Object.assign({Alias:i.Node,Map:i.Node,Scalar:i.Node,Seq:i.Node},i.Value&&{Map:i.Value,Scalar:i.Value,Seq:i.Value},i.Collection&&{Map:i.Collection,Seq:i.Collection},i):i}function df(i,e,t,n){var r,s,a,o,c;if(typeof t=="function")return t(i,e,n);if(Br(e))return(r=t.Map)==null?void 0:r.call(t,i,e,n);if(zr(e))return(s=t.Seq)==null?void 0:s.call(t,i,e,n);if(Et(e))return(a=t.Pair)==null?void 0:a.call(t,i,e,n);if(yt(e))return(o=t.Scalar)==null?void 0:o.call(t,i,e,n);if(Xi(e))return(c=t.Alias)==null?void 0:c.call(t,i,e,n)}function pf(i,e,t){const n=e[e.length-1];if(wt(n))n.items[i]=t;else if(Et(n))i==="key"?n.key=t:n.value=t;else if(ji(n))n.contents=t;else{const r=Xi(n)?"alias":"scalar";throw new Error(`Cannot replace node with ${r} parent`)}}const Td={"!":"%21",",":"%2C","[":"%5B","]":"%5D","{":"%7B","}":"%7D"},Ad=i=>i.replace(/[!,[\]{}]/g,e=>Td[e]);class en{constructor(e,t){this.docStart=null,this.docEnd=!1,this.yaml=Object.assign({},en.defaultYaml,e),this.tags=Object.assign({},en.defaultTags,t)}clone(){const e=new en(this.yaml,this.tags);return e.docStart=this.docStart,e}atDocument(){const e=new en(this.yaml,this.tags);switch(this.yaml.version){case"1.1":this.atNextDocument=!0;break;case"1.2":this.atNextDocument=!1,this.yaml={explicit:en.defaultYaml.explicit,version:"1.2"},this.tags=Object.assign({},en.defaultTags);break}return e}add(e,t){this.atNextDocument&&(this.yaml={explicit:en.defaultYaml.explicit,version:"1.1"},this.tags=Object.assign({},en.defaultTags),this.atNextDocument=!1);const n=e.trim().split(/[ \t]+/),r=n.shift();switch(r){case"%TAG":{if(n.length!==2&&(t(0,"%TAG directive should contain exactly two parts"),n.length<2))return!1;const[s,a]=n;return this.tags[s]=a,!0}case"%YAML":{if(this.yaml.explicit=!0,n.length!==1)return t(0,"%YAML directive should contain exactly one part"),!1;const[s]=n;if(s==="1.1"||s==="1.2")return this.yaml.version=s,!0;{const a=/^\d+\.\d+$/.test(s);return t(6,`Unsupported YAML version ${s}`,a),!1}}default:return t(0,`Unknown directive ${r}`,!0),!1}}tagName(e,t){if(e==="!")return"!";if(e[0]!=="!")return t(`Not a valid tag: ${e}`),null;if(e[1]==="<"){const a=e.slice(2,-1);return a==="!"||a==="!!"?(t(`Verbatim tags aren't resolved, so ${e} is invalid.`),null):(e[e.length-1]!==">"&&t("Verbatim tags must end with a >"),a)}const[,n,r]=e.match(/^(.*!)([^!]*)$/s);r||t(`The ${e} tag has no suffix`);const s=this.tags[n];if(s)try{return s+decodeURIComponent(r)}catch(a){return t(String(a)),null}return n==="!"?e:(t(`Could not resolve tag: ${e}`),null)}tagString(e){for(const[t,n]of Object.entries(this.tags))if(e.startsWith(n))return t+Ad(e.substring(n.length));return e[0]==="!"?e:`!<${e}>`}toString(e){const t=this.yaml.explicit?[`%YAML ${this.yaml.version||"1.2"}`]:[],n=Object.entries(this.tags);let r;if(e&&n.length>0&&Tt(e.contents)){const s={};$i(e.contents,(a,o)=>{Tt(o)&&o.tag&&(s[o.tag]=!0)}),r=Object.keys(s)}else r=[];for(const[s,a]of n)s==="!!"&&a==="tag:yaml.org,2002:"||(!e||r.some(o=>o.startsWith(a)))&&t.push(`%TAG ${s} ${a}`);return t.join(`
`)}}en.defaultYaml={explicit:!1,version:"1.2"};en.defaultTags={"!!":"tag:yaml.org,2002:"};function mf(i){if(/[\x00-\x19\s,[\]{}]/.test(i)){const t=`Anchor must not contain whitespace or control characters: ${JSON.stringify(i)}`;throw new Error(t)}return!0}function gf(i){const e=new Set;return $i(i,{Value(t,n){n.anchor&&e.add(n.anchor)}}),e}function _f(i,e){for(let t=1;;++t){const n=`${i}${t}`;if(!e.has(n))return n}}function Rd(i,e){const t=[],n=new Map;let r=null;return{onAnchor:s=>{t.push(s),r??(r=gf(i));const a=_f(e,r);return r.add(a),a},setAnchors:()=>{for(const s of t){const a=n.get(s);if(typeof a=="object"&&a.anchor&&(yt(a.node)||wt(a.node)))a.node.anchor=a.anchor;else{const o=new Error("Failed to resolve repeated object (this should not happen)");throw o.source=s,o}}},sourceObjects:n}}function xr(i,e,t,n){if(n&&typeof n=="object")if(Array.isArray(n))for(let r=0,s=n.length;r<s;++r){const a=n[r],o=xr(i,n,String(r),a);o===void 0?delete n[r]:o!==a&&(n[r]=o)}else if(n instanceof Map)for(const r of Array.from(n.keys())){const s=n.get(r),a=xr(i,n,r,s);a===void 0?n.delete(r):a!==s&&n.set(r,a)}else if(n instanceof Set)for(const r of Array.from(n)){const s=xr(i,n,r,r);s===void 0?n.delete(r):s!==r&&(n.delete(r),n.add(s))}else for(const[r,s]of Object.entries(n)){const a=xr(i,n,r,s);a===void 0?delete n[r]:a!==s&&(n[r]=a)}return i.call(e,t,n)}function vn(i,e,t){if(Array.isArray(i))return i.map((n,r)=>vn(n,String(r),t));if(i&&typeof i.toJSON=="function"){if(!t||!uf(i))return i.toJSON(e,t);const n={aliasCount:0,count:1,res:void 0};t.anchors.set(i,n),t.onCreate=s=>{n.res=s,delete t.onCreate};const r=i.toJSON(e,t);return t.onCreate&&t.onCreate(r),r}return typeof i=="bigint"&&!(t!=null&&t.keep)?Number(i):i}class ql{constructor(e){Object.defineProperty(this,yn,{value:e})}clone(){const e=Object.create(Object.getPrototypeOf(this),Object.getOwnPropertyDescriptors(this));return this.range&&(e.range=this.range.slice()),e}toJS(e,{mapAsMap:t,maxAliasCount:n,onAnchor:r,reviver:s}={}){if(!ji(e))throw new TypeError("A document argument is required");const a={anchors:new Map,doc:e,keep:!0,mapAsMap:t===!0,mapKeyWarned:!1,maxAliasCount:typeof n=="number"?n:100},o=vn(this,"",a);if(typeof r=="function")for(const{count:c,res:l}of a.anchors.values())r(l,c);return typeof s=="function"?xr(s,{"":o},"",o):o}}class Oa extends ql{constructor(e){super(Wl),this.source=e,Object.defineProperty(this,"tag",{set(){throw new Error("Alias nodes cannot have tags")}})}resolve(e,t){if((t==null?void 0:t.maxAliasCount)===0)throw new ReferenceError("Alias resolution is disabled");let n;t!=null&&t.aliasResolveCache?n=t.aliasResolveCache:(n=[],$i(e,{Node:(s,a)=>{(Xi(a)||uf(a))&&n.push(a)}}),t&&(t.aliasResolveCache=n));let r;for(const s of n){if(s===this)break;s.anchor===this.source&&(r=s)}if(r&&t){const{anchors:s,doc:a,maxAliasCount:o}=t;let c=s.get(r);if(c||(vn(r,null,t),c=s.get(r)),(c==null?void 0:c.res)===void 0){const l="This should not happen: Alias anchor was not resolved?";throw new ReferenceError(l)}if(o>=0&&(c.count+=1,c.aliasCount===0&&(c.aliasCount=fa(a,r,s)),c.count*c.aliasCount>o)){const l="Excessive alias count indicates a resource exhaustion attack";throw new ReferenceError(l)}}return r}toJSON(e,t){if(!t)return{source:this.source};const n=this.resolve(t.doc,t);if(!n){const r=`Unresolved alias (the anchor must be set before the alias): ${this.source}`;throw new ReferenceError(r)}return t.anchors.get(n).res}toString(e,t,n){const r=`*${this.source}`;if(e){if(mf(this.source),e.options.verifyAliasOrder&&!e.anchors.has(this.source)){const s=`Unresolved alias (the anchor must be set before the alias): ${this.source}`;throw new Error(s)}if(e.implicitKey)return`${r} `}return r}}function fa(i,e,t){if(Xi(e)){const n=e.resolve(i),r=t&&n&&t.get(n);return r?r.count*r.aliasCount:0}else if(wt(e)){let n=0;for(const r of e.items){const s=fa(i,r,t);s>n&&(n=s)}return n}else if(Et(e)){const n=fa(i,e.key,t),r=fa(i,e.value,t);return Math.max(n,r)}return 1}const vf=i=>!i||typeof i!="function"&&typeof i!="object";class Je extends ql{constructor(e){super(kn),this.value=e}toJSON(e,t){return t!=null&&t.keep?this.value:vn(this.value,e,t)}toString(){return String(this.value)}}Je.BLOCK_FOLDED="BLOCK_FOLDED";Je.BLOCK_LITERAL="BLOCK_LITERAL";Je.PLAIN="PLAIN";Je.QUOTE_DOUBLE="QUOTE_DOUBLE";Je.QUOTE_SINGLE="QUOTE_SINGLE";const Cd="tag:yaml.org,2002:";function Pd(i,e,t){if(e){const n=t.filter(s=>s.tag===e),r=n.find(s=>!s.format)??n[0];if(!r)throw new Error(`Tag ${e} not found`);return r}return t.find(n=>{var r;return((r=n.identify)==null?void 0:r.call(n,i))&&!n.format})}function us(i,e,t){var f,d,m;if(ji(i)&&(i=i.contents),Tt(i))return i;if(Et(i)){const x=(d=(f=t.schema[vi]).createNode)==null?void 0:d.call(f,t.schema,null,t);return x.items.push(i),x}(i instanceof String||i instanceof Number||i instanceof Boolean||typeof BigInt<"u"&&i instanceof BigInt)&&(i=i.valueOf());const{aliasDuplicateObjects:n,onAnchor:r,onTagObj:s,schema:a,sourceObjects:o}=t;let c;if(n&&i&&typeof i=="object"){if(c=o.get(i),c)return c.anchor??(c.anchor=r(i)),new Oa(c.anchor);c={anchor:null,node:null},o.set(i,c)}e!=null&&e.startsWith("!!")&&(e=Cd+e.slice(2));let l=Pd(i,e,a.tags);if(!l){if(i&&typeof i.toJSON=="function"&&(i=i.toJSON()),!i||typeof i!="object"){const x=new Je(i);return c&&(c.node=x),x}l=i instanceof Map?a[vi]:Symbol.iterator in Object(i)?a[kr]:a[vi]}s&&(s(l),delete t.onTagObj);const h=l!=null&&l.createNode?l.createNode(t.schema,i,t):typeof((m=l==null?void 0:l.nodeClass)==null?void 0:m.from)=="function"?l.nodeClass.from(t.schema,i,t):new Je(i);return e?h.tag=e:l.default||(h.tag=l.tag),c&&(c.node=h),h}function Ma(i,e,t){let n=t;for(let r=e.length-1;r>=0;--r){const s=e[r];if(typeof s=="number"&&Number.isInteger(s)&&s>=0){const a=[];a[s]=n,n=a}else n=new Map([[s,n]])}return us(n,void 0,{aliasDuplicateObjects:!1,keepUndefined:!1,onAnchor:()=>{throw new Error("This should not happen, please report a bug.")},schema:i,sourceObjects:new Map})}const as=i=>i==null||typeof i=="object"&&!!i[Symbol.iterator]().next().done;class yf extends ql{constructor(e,t){super(e),Object.defineProperty(this,"schema",{value:t,configurable:!0,enumerable:!1,writable:!0})}clone(e){const t=Object.create(Object.getPrototypeOf(this),Object.getOwnPropertyDescriptors(this));return e&&(t.schema=e),t.items=t.items.map(n=>Tt(n)||Et(n)?n.clone(e):n),this.range&&(t.range=this.range.slice()),t}addIn(e,t){if(as(e))this.add(t);else{const[n,...r]=e,s=this.get(n,!0);if(wt(s))s.addIn(r,t);else if(s===void 0&&this.schema)this.set(n,Ma(this.schema,r,t));else throw new Error(`Expected YAML collection at ${n}. Remaining path: ${r}`)}}deleteIn(e){const[t,...n]=e;if(n.length===0)return this.delete(t);const r=this.get(t,!0);if(wt(r))return r.deleteIn(n);throw new Error(`Expected YAML collection at ${t}. Remaining path: ${n}`)}getIn(e,t){const[n,...r]=e,s=this.get(n,!0);return r.length===0?!t&&yt(s)?s.value:s:wt(s)?s.getIn(r,t):void 0}hasAllNullValues(e){return this.items.every(t=>{if(!Et(t))return!1;const n=t.value;return n==null||e&&yt(n)&&n.value==null&&!n.commentBefore&&!n.comment&&!n.tag})}hasIn(e){const[t,...n]=e;if(n.length===0)return this.has(t);const r=this.get(t,!0);return wt(r)?r.hasIn(n):!1}setIn(e,t){const[n,...r]=e;if(r.length===0)this.set(n,t);else{const s=this.get(n,!0);if(wt(s))s.setIn(r,t);else if(s===void 0&&this.schema)this.set(n,Ma(this.schema,r,t));else throw new Error(`Expected YAML collection at ${n}. Remaining path: ${r}`)}}}const Ld=i=>i.replace(/^(?!$)(?: $)?/gm,"#");function Zn(i,e){return/^\n+$/.test(i)?i.substring(1):e?i.replace(/^(?! *$)/gm,e):i}const Bi=(i,e,t)=>i.endsWith(`
`)?Zn(t,e):t.includes(`
`)?`
`+Zn(t,e):(i.endsWith(" ")?"":" ")+t,xf="flow",$o="block",ha="quoted";function Fa(i,e,t="flow",{indentAtStart:n,lineWidth:r=80,minContentWidth:s=20,onFold:a,onOverflow:o}={}){if(!r||r<0)return i;r<s&&(s=0);const c=Math.max(1+s,1+r-e.length);if(i.length<=c)return i;const l=[],h={};let f=r-e.length;typeof n=="number"&&(n>r-Math.max(2,s)?l.push(0):f=r-n);let d,m,x=!1,y=-1,_=-1,g=-1;t===$o&&(y=Nc(i,y,e.length),y!==-1&&(f=y+c));for(let A;A=i[y+=1];){if(t===ha&&A==="\\"){switch(_=y,i[y+1]){case"x":y+=3;break;case"u":y+=5;break;case"U":y+=9;break;default:y+=1}g=y}if(A===`
`)t===$o&&(y=Nc(i,y,e.length)),f=y+e.length+c,d=void 0;else{if(A===" "&&m&&m!==" "&&m!==`
`&&m!=="	"){const b=i[y+1];b&&b!==" "&&b!==`
`&&b!=="	"&&(d=y)}if(y>=f)if(d)l.push(d),f=d+c,d=void 0;else if(t===ha){for(;m===" "||m==="	";)m=A,A=i[y+=1],x=!0;const b=y>g+1?y-2:_-1;if(h[b])return i;l.push(b),h[b]=!0,f=b+c,d=void 0}else x=!0}m=A}if(x&&o&&o(),l.length===0)return i;a&&a();let R=i.slice(0,l[0]);for(let A=0;A<l.length;++A){const b=l[A],L=l[A+1]||i.length;b===0?R=`
${e}${i.slice(0,L)}`:(t===ha&&h[b]&&(R+=`${i[b]}\\`),R+=`
${e}${i.slice(b+1,L)}`)}return R}function Nc(i,e,t){let n=e,r=e+1,s=i[r];for(;s===" "||s==="	";)if(e<r+t)s=i[++e];else{do s=i[++e];while(s&&s!==`
`);n=e,r=e+1,s=i[r]}return n}const ka=(i,e)=>({indentAtStart:e?i.indent.length:i.indentAtStart,lineWidth:i.options.lineWidth,minContentWidth:i.options.minContentWidth}),Ba=i=>/^(%|---|\.\.\.)/m.test(i);function Id(i,e,t){if(!e||e<0)return!1;const n=e-t,r=i.length;if(r<=n)return!1;for(let s=0,a=0;s<r;++s)if(i[s]===`
`){if(s-a>n)return!0;if(a=s+1,r-a<=n)return!1}return!0}function ls(i,e){const t=JSON.stringify(i);if(e.options.doubleQuotedAsJSON)return t;const{implicitKey:n}=e,r=e.options.doubleQuotedMinMultiLineLength,s=e.indent||(Ba(i)?"  ":"");let a="",o=0;for(let c=0,l=t[c];l;l=t[++c])if(l===" "&&t[c+1]==="\\"&&t[c+2]==="n"&&(a+=t.slice(o,c)+"\\ ",c+=1,o=c,l="\\"),l==="\\")switch(t[c+1]){case"u":{a+=t.slice(o,c);const h=t.substr(c+2,4);switch(h){case"0000":a+="\\0";break;case"0007":a+="\\a";break;case"000b":a+="\\v";break;case"001b":a+="\\e";break;case"0085":a+="\\N";break;case"00a0":a+="\\_";break;case"2028":a+="\\L";break;case"2029":a+="\\P";break;default:h.substr(0,2)==="00"?a+="\\x"+h.substr(2):a+=t.substr(c,6)}c+=5,o=c+1}break;case"n":if(n||t[c+2]==='"'||t.length<r)c+=1;else{for(a+=t.slice(o,c)+`

`;t[c+2]==="\\"&&t[c+3]==="n"&&t[c+4]!=='"';)a+=`
`,c+=2;a+=s,t[c+2]===" "&&(a+="\\"),c+=1,o=c+1}break;default:c+=1}return a=o?a+t.slice(o):t,n?a:Fa(a,s,ha,ka(e,!1))}function Yo(i,e){if(e.options.singleQuote===!1||e.implicitKey&&i.includes(`
`)||/[ \t]\n|\n[ \t]/.test(i))return ls(i,e);const t=e.indent||(Ba(i)?"  ":""),n="'"+i.replace(/'/g,"''").replace(/\n+/g,`$&
${t}`)+"'";return e.implicitKey?n:Fa(n,t,xf,ka(e,!1))}function Sr(i,e){const{singleQuote:t}=e.options;let n;if(t===!1)n=ls;else{const r=i.includes('"'),s=i.includes("'");r&&!s?n=Yo:s&&!r?n=ls:n=t?Yo:ls}return n(i,e)}let Ko;try{Ko=new RegExp(`(^|(?<!
))
+(?!
|$)`,"g")}catch{Ko=/\n+(?!\n|$)/g}function da({comment:i,type:e,value:t},n,r,s){const{blockQuote:a,commentString:o,lineWidth:c}=n.options;if(!a||/\n[\t ]+$/.test(t))return Sr(t,n);const l=n.indent||(n.forceBlockIndent||Ba(t)?"  ":""),h=a==="literal"?!0:a==="folded"||e===Je.BLOCK_FOLDED?!1:e===Je.BLOCK_LITERAL?!0:!Id(t,c,l.length);if(!t)return h?`|
`:`>
`;let f,d;for(d=t.length;d>0;--d){const L=t[d-1];if(L!==`
`&&L!=="	"&&L!==" ")break}let m=t.substring(d);const x=m.indexOf(`
`);x===-1?f="-":t===m||x!==m.length-1?(f="+",s&&s()):f="",m&&(t=t.slice(0,-m.length),m[m.length-1]===`
`&&(m=m.slice(0,-1)),m=m.replace(Ko,`$&${l}`));let y=!1,_,g=-1;for(_=0;_<t.length;++_){const L=t[_];if(L===" ")y=!0;else if(L===`
`)g=_;else break}let R=t.substring(0,g<_?g+1:_);R&&(t=t.substring(R.length),R=R.replace(/\n+/g,`$&${l}`));let b=(y?l?"2":"1":"")+f;if(i&&(b+=" "+o(i.replace(/ ?[\r\n]+/g," ")),r&&r()),!h){const L=t.replace(/\n+/g,`
$&`).replace(/(?:^|\n)([\t ].*)(?:([\n\t ]*)\n(?![\n\t ]))?/g,"$1$2").replace(/\n+/g,`$&${l}`);let I=!1;const C=ka(n,!0);a!=="folded"&&e!==Je.BLOCK_FOLDED&&(C.onOverflow=()=>{I=!0});const D=Fa(`${R}${L}${m}`,l,$o,C);if(!I)return`>${b}
${l}${D}`}return t=t.replace(/\n+/g,`$&${l}`),`|${b}
${l}${R}${t}${m}`}function Dd(i,e,t,n){const{type:r,value:s}=i,{actualString:a,implicitKey:o,indent:c,indentStep:l,inFlow:h}=e;if(o&&s.includes(`
`)||h&&/[[\]{},]/.test(s))return Sr(s,e);if(/^[\n\t ,[\]{}#&*!|>'"%@`]|^[?-]$|^[?-][ \t]|[\n:][ \t]|[ \t]\n|[\n\t ]#|[\n\t :]$/.test(s))return o||h||!s.includes(`
`)?Sr(s,e):da(i,e,t,n);if(!o&&!h&&r!==Je.PLAIN&&s.includes(`
`))return da(i,e,t,n);if(Ba(s)){if(c==="")return e.forceBlockIndent=!0,da(i,e,t,n);if(o&&c===l)return Sr(s,e)}const f=s.replace(/\n+/g,`$&
${c}`);if(a){const d=y=>{var _;return y.default&&y.tag!=="tag:yaml.org,2002:str"&&((_=y.test)==null?void 0:_.test(f))},{compat:m,tags:x}=e.doc.schema;if(x.some(d)||m!=null&&m.some(d))return Sr(s,e)}return o?f:Fa(f,c,xf,ka(e,!1))}function vs(i,e,t,n){const{implicitKey:r,inFlow:s}=e,a=typeof i.value=="string"?i:Object.assign({},i,{value:String(i.value)});let{type:o}=i;o!==Je.QUOTE_DOUBLE&&/[\x00-\x08\x0b-\x1f\x7f-\x9f\u{D800}-\u{DFFF}]/u.test(a.value)&&(o=Je.QUOTE_DOUBLE);const c=h=>{switch(h){case Je.BLOCK_FOLDED:case Je.BLOCK_LITERAL:return r||s?Sr(a.value,e):da(a,e,t,n);case Je.QUOTE_DOUBLE:return ls(a.value,e);case Je.QUOTE_SINGLE:return Yo(a.value,e);case Je.PLAIN:return Dd(a,e,t,n);default:return null}};let l=c(o);if(l===null){const{defaultKeyType:h,defaultStringType:f}=e.options,d=r&&h||f;if(l=c(d),l===null)throw new Error(`Unsupported default string type ${d}`)}return l}function Sf(i,e){const t=Object.assign({blockQuote:!0,commentString:Ld,defaultKeyType:null,defaultStringType:"PLAIN",directives:null,doubleQuotedAsJSON:!1,doubleQuotedMinMultiLineLength:40,falseStr:"false",flowCollectionPadding:!0,indentSeq:!0,lineWidth:80,minContentWidth:20,nullStr:"null",simpleKeys:!1,singleQuote:null,trailingComma:!1,trueStr:"true",verifyAliasOrder:!0},i.schema.toStringOptions,e);let n;switch(t.collectionStyle){case"block":n=!1;break;case"flow":n=!0;break;default:n=null}return{anchors:new Set,doc:i,flowCollectionPadding:t.flowCollectionPadding?" ":"",indent:"",indentStep:typeof t.indent=="number"?" ".repeat(t.indent):"  ",inFlow:n,options:t}}function Nd(i,e){var r;if(e.tag){const s=i.filter(a=>a.tag===e.tag);if(s.length>0)return s.find(a=>a.format===e.format)??s[0]}let t,n;if(yt(e)){n=e.value;let s=i.filter(a=>{var o;return(o=a.identify)==null?void 0:o.call(a,n)});if(s.length>1){const a=s.filter(o=>o.test);a.length>0&&(s=a)}t=s.find(a=>a.format===e.format)??s.find(a=>!a.format)}else n=e,t=i.find(s=>s.nodeClass&&n instanceof s.nodeClass);if(!t){const s=((r=n==null?void 0:n.constructor)==null?void 0:r.name)??(n===null?"null":typeof n);throw new Error(`Tag not resolved for ${s} value`)}return t}function Ud(i,e,{anchors:t,doc:n}){if(!n.directives)return"";const r=[],s=(yt(i)||wt(i))&&i.anchor;s&&mf(s)&&(t.add(s),r.push(`&${s}`));const a=i.tag??(e.default?null:e.tag);return a&&r.push(n.directives.tagString(a)),r.join(" ")}function Cr(i,e,t,n){var c;if(Et(i))return i.toString(e,t,n);if(Xi(i)){if(e.doc.directives)return i.toString(e);if((c=e.resolvedAliases)!=null&&c.has(i))throw new TypeError("Cannot stringify circular structure without alias nodes");e.resolvedAliases?e.resolvedAliases.add(i):e.resolvedAliases=new Set([i]),i=i.resolve(e.doc)}let r;const s=Tt(i)?i:e.doc.createNode(i,{onTagObj:l=>r=l});r??(r=Nd(e.doc.schema.tags,s));const a=Ud(s,r,e);a.length>0&&(e.indentAtStart=(e.indentAtStart??0)+a.length+1);const o=typeof r.stringify=="function"?r.stringify(s,e,t,n):yt(s)?vs(s,e,t,n):s.toString(e,t,n);return a?yt(s)||o[0]==="{"||o[0]==="["?`${a} ${o}`:`${a}
${e.indent}${o}`:o}function Od({key:i,value:e},t,n,r){const{allNullValues:s,doc:a,indent:o,indentStep:c,options:{commentString:l,indentSeq:h,simpleKeys:f}}=t;let d=Tt(i)&&i.comment||null;if(f){if(d)throw new Error("With simple keys, key nodes cannot have comments");if(wt(i)||!Tt(i)&&typeof i=="object"){const C="With simple keys, collection cannot be used as a key value";throw new Error(C)}}let m=!f&&(!i||d&&e==null&&!t.inFlow||wt(i)||(yt(i)?i.type===Je.BLOCK_FOLDED||i.type===Je.BLOCK_LITERAL:typeof i=="object"));t=Object.assign({},t,{allNullValues:!1,implicitKey:!m&&(f||!s),indent:o+c});let x=!1,y=!1,_=Cr(i,t,()=>x=!0,()=>y=!0);if(!m&&!t.inFlow&&_.length>1024){if(f)throw new Error("With simple keys, single line scalar must not span more than 1024 characters");m=!0}if(t.inFlow){if(s||e==null)return x&&n&&n(),_===""?"?":m?`? ${_}`:_}else if(s&&!f||e==null&&m)return _=`? ${_}`,d&&!x?_+=Bi(_,t.indent,l(d)):y&&r&&r(),_;x&&(d=null),m?(d&&(_+=Bi(_,t.indent,l(d))),_=`? ${_}
${o}:`):(_=`${_}:`,d&&(_+=Bi(_,t.indent,l(d))));let g,R,A;Tt(e)?(g=!!e.spaceBefore,R=e.commentBefore,A=e.comment):(g=!1,R=null,A=null,e&&typeof e=="object"&&(e=a.createNode(e))),t.implicitKey=!1,!m&&!d&&yt(e)&&(t.indentAtStart=_.length+1),y=!1,!h&&c.length>=2&&!t.inFlow&&!m&&zr(e)&&!e.flow&&!e.tag&&!e.anchor&&(t.indent=t.indent.substring(2));let b=!1;const L=Cr(e,t,()=>b=!0,()=>y=!0);let I=" ";if(d||g||R){if(I=g?`
`:"",R){const C=l(R);I+=`
${Zn(C,t.indent)}`}L===""&&!t.inFlow?I===`
`&&A&&(I=`

`):I+=`
${t.indent}`}else if(!m&&wt(e)){const C=L[0],D=L.indexOf(`
`),M=D!==-1,S=t.inFlow??e.flow??e.items.length===0;if(M||!S){let N=!1;if(M&&(C==="&"||C==="!")){let k=L.indexOf(" ");C==="&"&&k!==-1&&k<D&&L[k+1]==="!"&&(k=L.indexOf(" ",k+1)),(k===-1||D<k)&&(N=!0)}N||(I=`
${t.indent}`)}}else(L===""||L[0]===`
`)&&(I="");return _+=I+L,t.inFlow?b&&n&&n():A&&!b?_+=Bi(_,t.indent,l(A)):y&&r&&r(),_}function bf(i,e){(i==="debug"||i==="warn")&&console.warn(e)}const Ns="<<",ii={identify:i=>i===Ns||typeof i=="symbol"&&i.description===Ns,default:"key",tag:"tag:yaml.org,2002:merge",test:/^<<$/,resolve:()=>Object.assign(new Je(Symbol(Ns)),{addToJSMap:Ef}),stringify:()=>Ns},Fd=(i,e)=>(ii.identify(e)||yt(e)&&(!e.type||e.type===Je.PLAIN)&&ii.identify(e.value))&&(i==null?void 0:i.doc.schema.tags.some(t=>t.tag===ii.tag&&t.default));function Ef(i,e,t){const n=Mf(i,t);if(zr(n))for(const r of n.items)io(i,e,r);else if(Array.isArray(n))for(const r of n)io(i,e,r);else io(i,e,n)}function io(i,e,t){const n=Mf(i,t);if(!Br(n))throw new Error("Merge sources must be maps or map aliases");const r=n.toJSON(null,i,Map);for(const[s,a]of r)e instanceof Map?e.has(s)||e.set(s,a):e instanceof Set?e.add(s):Object.prototype.hasOwnProperty.call(e,s)||Object.defineProperty(e,s,{value:a,writable:!0,enumerable:!0,configurable:!0});return e}function Mf(i,e){return i&&Xi(e)?e.resolve(i.doc,i):e}function wf(i,e,{key:t,value:n}){if(Tt(t)&&t.addToJSMap)t.addToJSMap(i,e,n);else if(Fd(i,t))Ef(i,e,n);else{const r=vn(t,"",i);if(e instanceof Map)e.set(r,vn(n,r,i));else if(e instanceof Set)e.add(r);else{const s=kd(t,r,i),a=vn(n,s,i);s in e?Object.defineProperty(e,s,{value:a,writable:!0,enumerable:!0,configurable:!0}):e[s]=a}}return e}function kd(i,e,t){if(e===null)return"";if(typeof e!="object")return String(e);if(Tt(i)&&(t!=null&&t.doc)){const n=Sf(t.doc,{});n.anchors=new Set;for(const s of t.anchors.keys())n.anchors.add(s.anchor);n.inFlow=!0,n.inStringifyKey=!0;const r=i.toString(n);if(!t.mapKeyWarned){let s=JSON.stringify(r);s.length>40&&(s=s.substring(0,36)+'..."'),bf(t.doc.options.logLevel,`Keys with collection values will be stringified due to JS Object restrictions: ${s}. Set mapAsMap: true to use object keys.`),t.mapKeyWarned=!0}return r}return JSON.stringify(e)}function Xl(i,e,t){const n=us(i,void 0,t),r=us(e,void 0,t);return new Kt(n,r)}class Kt{constructor(e,t=null){Object.defineProperty(this,yn,{value:cf}),this.key=e,this.value=t}clone(e){let{key:t,value:n}=this;return Tt(t)&&(t=t.clone(e)),Tt(n)&&(n=n.clone(e)),new Kt(t,n)}toJSON(e,t){const n=t!=null&&t.mapAsMap?new Map:{};return wf(t,n,this)}toString(e,t,n){return e!=null&&e.doc?Od(this,e,t,n):JSON.stringify(this)}}function Tf(i,e,t){return(e.inFlow??i.flow?zd:Bd)(i,e,t)}function Bd({comment:i,items:e},t,{blockItemPrefix:n,flowChars:r,itemIndent:s,onChompKeep:a,onComment:o}){const{indent:c,options:{commentString:l}}=t,h=Object.assign({},t,{indent:s,type:null});let f=!1;const d=[];for(let x=0;x<e.length;++x){const y=e[x];let _=null;if(Tt(y))!f&&y.spaceBefore&&d.push(""),wa(t,d,y.commentBefore,f),y.comment&&(_=y.comment);else if(Et(y)){const R=Tt(y.key)?y.key:null;R&&(!f&&R.spaceBefore&&d.push(""),wa(t,d,R.commentBefore,f))}f=!1;let g=Cr(y,h,()=>_=null,()=>f=!0);_&&(g+=Bi(g,s,l(_))),f&&_&&(f=!1),d.push(n+g)}let m;if(d.length===0)m=r.start+r.end;else{m=d[0];for(let x=1;x<d.length;++x){const y=d[x];m+=y?`
${c}${y}`:`
`}}return i?(m+=`
`+Zn(l(i),c),o&&o()):f&&a&&a(),m}function zd({items:i},e,{flowChars:t,itemIndent:n}){const{indent:r,indentStep:s,flowCollectionPadding:a,options:{commentString:o}}=e;n+=s;const c=Object.assign({},e,{indent:n,inFlow:!0,type:null});let l=!1,h=0;const f=[];for(let x=0;x<i.length;++x){const y=i[x];let _=null;if(Tt(y))y.spaceBefore&&f.push(""),wa(e,f,y.commentBefore,!1),y.comment&&(_=y.comment);else if(Et(y)){const R=Tt(y.key)?y.key:null;R&&(R.spaceBefore&&f.push(""),wa(e,f,R.commentBefore,!1),R.comment&&(l=!0));const A=Tt(y.value)?y.value:null;A?(A.comment&&(_=A.comment),A.commentBefore&&(l=!0)):y.value==null&&(R!=null&&R.comment)&&(_=R.comment)}_&&(l=!0);let g=Cr(y,c,()=>_=null);l||(l=f.length>h||g.includes(`
`)),x<i.length-1?g+=",":e.options.trailingComma&&(e.options.lineWidth>0&&(l||(l=f.reduce((R,A)=>R+A.length+2,2)+(g.length+2)>e.options.lineWidth)),l&&(g+=",")),_&&(g+=Bi(g,n,o(_))),f.push(g),h=f.length}const{start:d,end:m}=t;if(f.length===0)return d+m;if(!l){const x=f.reduce((y,_)=>y+_.length+2,2);l=e.options.lineWidth>0&&x>e.options.lineWidth}if(l){let x=d;for(const y of f)x+=y?`
${s}${r}${y}`:`
`;return`${x}
${r}${m}`}else return`${d}${a}${f.join(" ")}${a}${m}`}function wa({indent:i,options:{commentString:e}},t,n,r){if(n&&r&&(n=n.replace(/^\n+/,"")),n){const s=Zn(e(n),i);t.push(s.trimStart())}}function zi(i,e){const t=yt(e)?e.value:e;for(const n of i)if(Et(n)&&(n.key===e||n.key===t||yt(n.key)&&n.key.value===t))return n}class dn extends yf{static get tagName(){return"tag:yaml.org,2002:map"}constructor(e){super(vi,e),this.items=[]}static from(e,t,n){const{keepUndefined:r,replacer:s}=n,a=new this(e),o=(c,l)=>{if(typeof s=="function")l=s.call(t,c,l);else if(Array.isArray(s)&&!s.includes(c))return;(l!==void 0||r)&&a.items.push(Xl(c,l,n))};if(t instanceof Map)for(const[c,l]of t)o(c,l);else if(t&&typeof t=="object")for(const c of Object.keys(t))o(c,t[c]);return typeof e.sortMapEntries=="function"&&a.items.sort(e.sortMapEntries),a}add(e,t){var a;let n;Et(e)?n=e:!e||typeof e!="object"||!("key"in e)?n=new Kt(e,e==null?void 0:e.value):n=new Kt(e.key,e.value);const r=zi(this.items,n.key),s=(a=this.schema)==null?void 0:a.sortMapEntries;if(r){if(!t)throw new Error(`Key ${n.key} already set`);yt(r.value)&&vf(n.value)?r.value.value=n.value:r.value=n.value}else if(s){const o=this.items.findIndex(c=>s(n,c)<0);o===-1?this.items.push(n):this.items.splice(o,0,n)}else this.items.push(n)}delete(e){const t=zi(this.items,e);return t?this.items.splice(this.items.indexOf(t),1).length>0:!1}get(e,t){const n=zi(this.items,e),r=n==null?void 0:n.value;return(!t&&yt(r)?r.value:r)??void 0}has(e){return!!zi(this.items,e)}set(e,t){this.add(new Kt(e,t),!0)}toJSON(e,t,n){const r=n?new n:t!=null&&t.mapAsMap?new Map:{};t!=null&&t.onCreate&&t.onCreate(r);for(const s of this.items)wf(t,r,s);return r}toString(e,t,n){if(!e)return JSON.stringify(this);for(const r of this.items)if(!Et(r))throw new Error(`Map items must all be pairs; found ${JSON.stringify(r)} instead`);return!e.allNullValues&&this.hasAllNullValues(!1)&&(e=Object.assign({},e,{allNullValues:!0})),Tf(this,e,{blockItemPrefix:"",flowChars:{start:"{",end:"}"},itemIndent:e.indent||"",onChompKeep:n,onComment:t})}}const Vr={collection:"map",default:!0,nodeClass:dn,tag:"tag:yaml.org,2002:map",resolve(i,e){return Br(i)||e("Expected a mapping for this tag"),i},createNode:(i,e,t)=>dn.from(i,e,t)};class xi extends yf{static get tagName(){return"tag:yaml.org,2002:seq"}constructor(e){super(kr,e),this.items=[]}add(e){this.items.push(e)}delete(e){const t=Us(e);return typeof t!="number"?!1:this.items.splice(t,1).length>0}get(e,t){const n=Us(e);if(typeof n!="number")return;const r=this.items[n];return!t&&yt(r)?r.value:r}has(e){const t=Us(e);return typeof t=="number"&&t<this.items.length}set(e,t){const n=Us(e);if(typeof n!="number")throw new Error(`Expected a valid index, not ${e}.`);const r=this.items[n];yt(r)&&vf(t)?r.value=t:this.items[n]=t}toJSON(e,t){const n=[];t!=null&&t.onCreate&&t.onCreate(n);let r=0;for(const s of this.items)n.push(vn(s,String(r++),t));return n}toString(e,t,n){return e?Tf(this,e,{blockItemPrefix:"- ",flowChars:{start:"[",end:"]"},itemIndent:(e.indent||"")+"  ",onChompKeep:n,onComment:t}):JSON.stringify(this)}static from(e,t,n){const{replacer:r}=n,s=new this(e);if(t&&Symbol.iterator in Object(t)){let a=0;for(let o of t){if(typeof r=="function"){const c=t instanceof Set?o:String(a++);o=r.call(t,c,o)}s.items.push(us(o,void 0,n))}}return s}}function Us(i){let e=yt(i)?i.value:i;return e&&typeof e=="string"&&(e=Number(e)),typeof e=="number"&&Number.isInteger(e)&&e>=0?e:null}const Hr={collection:"seq",default:!0,nodeClass:xi,tag:"tag:yaml.org,2002:seq",resolve(i,e){return zr(i)||e("Expected a sequence for this tag"),i},createNode:(i,e,t)=>xi.from(i,e,t)},za={identify:i=>typeof i=="string",default:!0,tag:"tag:yaml.org,2002:str",resolve:i=>i,stringify(i,e,t,n){return e=Object.assign({actualString:!0},e),vs(i,e,t,n)}},Va={identify:i=>i==null,createNode:()=>new Je(null),default:!0,tag:"tag:yaml.org,2002:null",test:/^(?:~|[Nn]ull|NULL)?$/,resolve:()=>new Je(null),stringify:({source:i},e)=>typeof i=="string"&&Va.test.test(i)?i:e.options.nullStr},jl={identify:i=>typeof i=="boolean",default:!0,tag:"tag:yaml.org,2002:bool",test:/^(?:[Tt]rue|TRUE|[Ff]alse|FALSE)$/,resolve:i=>new Je(i[0]==="t"||i[0]==="T"),stringify({source:i,value:e},t){if(i&&jl.test.test(i)){const n=i[0]==="t"||i[0]==="T";if(e===n)return i}return e?t.options.trueStr:t.options.falseStr}};function Ln({format:i,minFractionDigits:e,tag:t,value:n}){if(typeof n=="bigint")return String(n);const r=typeof n=="number"?n:Number(n);if(!isFinite(r))return isNaN(r)?".nan":r<0?"-.inf":".inf";let s=Object.is(n,-0)?"-0":JSON.stringify(n);if(!i&&e&&(!t||t==="tag:yaml.org,2002:float")&&/^-?\d/.test(s)&&!s.includes("e")){let a=s.indexOf(".");a<0&&(a=s.length,s+=".");let o=e-(s.length-a-1);for(;o-- >0;)s+="0"}return s}const Af={identify:i=>typeof i=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^(?:[-+]?\.(?:inf|Inf|INF)|\.nan|\.NaN|\.NAN)$/,resolve:i=>i.slice(-3).toLowerCase()==="nan"?NaN:i[0]==="-"?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY,stringify:Ln},Rf={identify:i=>typeof i=="number",default:!0,tag:"tag:yaml.org,2002:float",format:"EXP",test:/^[-+]?(?:\.[0-9]+|[0-9]+(?:\.[0-9]*)?)[eE][-+]?[0-9]+$/,resolve:i=>parseFloat(i),stringify(i){const e=Number(i.value);return isFinite(e)?e.toExponential():Ln(i)}},Cf={identify:i=>typeof i=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^[-+]?(?:\.[0-9]+|[0-9]+\.[0-9]*)$/,resolve(i){const e=new Je(parseFloat(i)),t=i.indexOf(".");return t!==-1&&i[i.length-1]==="0"&&(e.minFractionDigits=i.length-t-1),e},stringify:Ln},Ha=i=>typeof i=="bigint"||Number.isInteger(i),$l=(i,e,t,{intAsBigInt:n})=>n?BigInt(i):parseInt(i.substring(e),t);function Pf(i,e,t){const{value:n}=i;return Ha(n)&&n>=0?t+n.toString(e):Ln(i)}const Lf={identify:i=>Ha(i)&&i>=0,default:!0,tag:"tag:yaml.org,2002:int",format:"OCT",test:/^0o[0-7]+$/,resolve:(i,e,t)=>$l(i,2,8,t),stringify:i=>Pf(i,8,"0o")},If={identify:Ha,default:!0,tag:"tag:yaml.org,2002:int",test:/^[-+]?[0-9]+$/,resolve:(i,e,t)=>$l(i,0,10,t),stringify:Ln},Df={identify:i=>Ha(i)&&i>=0,default:!0,tag:"tag:yaml.org,2002:int",format:"HEX",test:/^0x[0-9a-fA-F]+$/,resolve:(i,e,t)=>$l(i,2,16,t),stringify:i=>Pf(i,16,"0x")},Vd=[Vr,Hr,za,Va,jl,Lf,If,Df,Af,Rf,Cf];function Uc(i){return typeof i=="bigint"||Number.isInteger(i)}const Os=({value:i})=>JSON.stringify(i),Hd=[{identify:i=>typeof i=="string",default:!0,tag:"tag:yaml.org,2002:str",resolve:i=>i,stringify:Os},{identify:i=>i==null,createNode:()=>new Je(null),default:!0,tag:"tag:yaml.org,2002:null",test:/^null$/,resolve:()=>null,stringify:Os},{identify:i=>typeof i=="boolean",default:!0,tag:"tag:yaml.org,2002:bool",test:/^true$|^false$/,resolve:i=>i==="true",stringify:Os},{identify:Uc,default:!0,tag:"tag:yaml.org,2002:int",test:/^-?(?:0|[1-9][0-9]*)$/,resolve:(i,e,{intAsBigInt:t})=>t?BigInt(i):parseInt(i,10),stringify:({value:i})=>Uc(i)?i.toString():JSON.stringify(i)},{identify:i=>typeof i=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^-?(?:0|[1-9][0-9]*)(?:\.[0-9]*)?(?:[eE][-+]?[0-9]+)?$/,resolve:i=>parseFloat(i),stringify:Os}],Gd={default:!0,tag:"",test:/^/,resolve(i,e){return e(`Unresolved plain scalar ${JSON.stringify(i)}`),i}},Wd=[Vr,Hr].concat(Hd,Gd),Yl={identify:i=>i instanceof Uint8Array,default:!1,tag:"tag:yaml.org,2002:binary",resolve(i,e){if(typeof atob=="function"){const t=atob(i.replace(/[\n\r]/g,"")),n=new Uint8Array(t.length);for(let r=0;r<t.length;++r)n[r]=t.charCodeAt(r);return n}else return e("This environment does not support reading binary tags; either Buffer or atob is required"),i},stringify({comment:i,type:e,value:t},n,r,s){if(!t)return"";const a=t;let o;if(typeof btoa=="function"){let c="";for(let l=0;l<a.length;++l)c+=String.fromCharCode(a[l]);o=btoa(c)}else throw new Error("This environment does not support writing binary tags; either Buffer or btoa is required");if(e??(e=Je.BLOCK_LITERAL),e!==Je.QUOTE_DOUBLE){const c=Math.max(n.options.lineWidth-n.indent.length,n.options.minContentWidth),l=Math.ceil(o.length/c),h=new Array(l);for(let f=0,d=0;f<l;++f,d+=c)h[f]=o.substr(d,c);o=h.join(e===Je.BLOCK_LITERAL?`
`:" ")}return vs({comment:i,type:e,value:o},n,r,s)}};function Nf(i,e){if(zr(i))for(let t=0;t<i.items.length;++t){let n=i.items[t];if(!Et(n)){if(Br(n)){n.items.length>1&&e("Each pair must have its own sequence indicator");const r=n.items[0]||new Kt(new Je(null));if(n.commentBefore&&(r.key.commentBefore=r.key.commentBefore?`${n.commentBefore}
${r.key.commentBefore}`:n.commentBefore),n.comment){const s=r.value??r.key;s.comment=s.comment?`${n.comment}
${s.comment}`:n.comment}n=r}i.items[t]=Et(n)?n:new Kt(n)}}else e("Expected a sequence for this tag");return i}function Uf(i,e,t){const{replacer:n}=t,r=new xi(i);r.tag="tag:yaml.org,2002:pairs";let s=0;if(e&&Symbol.iterator in Object(e))for(let a of e){typeof n=="function"&&(a=n.call(e,String(s++),a));let o,c;if(Array.isArray(a))if(a.length===2)o=a[0],c=a[1];else throw new TypeError(`Expected [key, value] tuple: ${a}`);else if(a&&a instanceof Object){const l=Object.keys(a);if(l.length===1)o=l[0],c=a[o];else throw new TypeError(`Expected tuple with one key, not ${l.length} keys`)}else o=a;r.items.push(Xl(o,c,t))}return r}const Kl={collection:"seq",default:!1,tag:"tag:yaml.org,2002:pairs",resolve:Nf,createNode:Uf};class Mr extends xi{constructor(){super(),this.add=dn.prototype.add.bind(this),this.delete=dn.prototype.delete.bind(this),this.get=dn.prototype.get.bind(this),this.has=dn.prototype.has.bind(this),this.set=dn.prototype.set.bind(this),this.tag=Mr.tag}toJSON(e,t){if(!t)return super.toJSON(e);const n=new Map;t!=null&&t.onCreate&&t.onCreate(n);for(const r of this.items){let s,a;if(Et(r)?(s=vn(r.key,"",t),a=vn(r.value,s,t)):s=vn(r,"",t),n.has(s))throw new Error("Ordered maps must not include duplicate keys");n.set(s,a)}return n}static from(e,t,n){const r=Uf(e,t,n),s=new this;return s.items=r.items,s}}Mr.tag="tag:yaml.org,2002:omap";const Jl={collection:"seq",identify:i=>i instanceof Map,nodeClass:Mr,default:!1,tag:"tag:yaml.org,2002:omap",resolve(i,e){const t=Nf(i,e),n=[];for(const{key:r}of t.items)yt(r)&&(n.includes(r.value)?e(`Ordered maps must not include duplicate keys: ${r.value}`):n.push(r.value));return Object.assign(new Mr,t)},createNode:(i,e,t)=>Mr.from(i,e,t)};function Of({value:i,source:e},t){return e&&(i?Ff:kf).test.test(e)?e:i?t.options.trueStr:t.options.falseStr}const Ff={identify:i=>i===!0,default:!0,tag:"tag:yaml.org,2002:bool",test:/^(?:Y|y|[Yy]es|YES|[Tt]rue|TRUE|[Oo]n|ON)$/,resolve:()=>new Je(!0),stringify:Of},kf={identify:i=>i===!1,default:!0,tag:"tag:yaml.org,2002:bool",test:/^(?:N|n|[Nn]o|NO|[Ff]alse|FALSE|[Oo]ff|OFF)$/,resolve:()=>new Je(!1),stringify:Of},qd={identify:i=>typeof i=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^(?:[-+]?\.(?:inf|Inf|INF)|\.nan|\.NaN|\.NAN)$/,resolve:i=>i.slice(-3).toLowerCase()==="nan"?NaN:i[0]==="-"?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY,stringify:Ln},Xd={identify:i=>typeof i=="number",default:!0,tag:"tag:yaml.org,2002:float",format:"EXP",test:/^[-+]?(?:[0-9][0-9_]*)?(?:\.[0-9_]*)?[eE][-+]?[0-9]+$/,resolve:i=>parseFloat(i.replace(/_/g,"")),stringify(i){const e=Number(i.value);return isFinite(e)?e.toExponential():Ln(i)}},jd={identify:i=>typeof i=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^[-+]?(?:[0-9][0-9_]*)?\.[0-9_]*$/,resolve(i){const e=new Je(parseFloat(i.replace(/_/g,""))),t=i.indexOf(".");if(t!==-1){const n=i.substring(t+1).replace(/_/g,"");n[n.length-1]==="0"&&(e.minFractionDigits=n.length)}return e},stringify:Ln},ys=i=>typeof i=="bigint"||Number.isInteger(i);function Ga(i,e,t,{intAsBigInt:n}){const r=i[0];if((r==="-"||r==="+")&&(e+=1),i=i.substring(e).replace(/_/g,""),n){switch(t){case 2:i=`0b${i}`;break;case 8:i=`0o${i}`;break;case 16:i=`0x${i}`;break}const a=BigInt(i);return r==="-"?BigInt(-1)*a:a}const s=parseInt(i,t);return r==="-"?-1*s:s}function Zl(i,e,t){const{value:n}=i;if(ys(n)){const r=n.toString(e);return n<0?"-"+t+r.substr(1):t+r}return Ln(i)}const $d={identify:ys,default:!0,tag:"tag:yaml.org,2002:int",format:"BIN",test:/^[-+]?0b[0-1_]+$/,resolve:(i,e,t)=>Ga(i,2,2,t),stringify:i=>Zl(i,2,"0b")},Yd={identify:ys,default:!0,tag:"tag:yaml.org,2002:int",format:"OCT",test:/^[-+]?0[0-7_]+$/,resolve:(i,e,t)=>Ga(i,1,8,t),stringify:i=>Zl(i,8,"0")},Kd={identify:ys,default:!0,tag:"tag:yaml.org,2002:int",test:/^[-+]?[0-9][0-9_]*$/,resolve:(i,e,t)=>Ga(i,0,10,t),stringify:Ln},Jd={identify:ys,default:!0,tag:"tag:yaml.org,2002:int",format:"HEX",test:/^[-+]?0x[0-9a-fA-F_]+$/,resolve:(i,e,t)=>Ga(i,2,16,t),stringify:i=>Zl(i,16,"0x")};class wr extends dn{constructor(e){super(e),this.tag=wr.tag}add(e){let t;Et(e)?t=e:e&&typeof e=="object"&&"key"in e&&"value"in e&&e.value===null?t=new Kt(e.key,null):t=new Kt(e,null),zi(this.items,t.key)||this.items.push(t)}get(e,t){const n=zi(this.items,e);return!t&&Et(n)?yt(n.key)?n.key.value:n.key:n}set(e,t){if(typeof t!="boolean")throw new Error(`Expected boolean value for set(key, value) in a YAML set, not ${typeof t}`);const n=zi(this.items,e);n&&!t?this.items.splice(this.items.indexOf(n),1):!n&&t&&this.items.push(new Kt(e))}toJSON(e,t){return super.toJSON(e,t,Set)}toString(e,t,n){if(!e)return JSON.stringify(this);if(this.hasAllNullValues(!0))return super.toString(Object.assign({},e,{allNullValues:!0}),t,n);throw new Error("Set items must all have null values")}static from(e,t,n){const{replacer:r}=n,s=new this(e);if(t&&Symbol.iterator in Object(t))for(let a of t)typeof r=="function"&&(a=r.call(t,a,a)),s.items.push(Xl(a,null,n));return s}}wr.tag="tag:yaml.org,2002:set";const Ql={collection:"map",identify:i=>i instanceof Set,nodeClass:wr,default:!1,tag:"tag:yaml.org,2002:set",createNode:(i,e,t)=>wr.from(i,e,t),resolve(i,e){if(Br(i)){if(i.hasAllNullValues(!0))return Object.assign(new wr,i);e("Set items must all have null values")}else e("Expected a mapping for this tag");return i}};function ec(i,e){const t=i[0],n=t==="-"||t==="+"?i.substring(1):i,r=a=>e?BigInt(a):Number(a),s=n.replace(/_/g,"").split(":").reduce((a,o)=>a*r(60)+r(o),r(0));return t==="-"?r(-1)*s:s}function Bf(i){let{value:e}=i,t=a=>a;if(typeof e=="bigint")t=a=>BigInt(a);else if(isNaN(e)||!isFinite(e))return Ln(i);let n="";e<0&&(n="-",e*=t(-1));const r=t(60),s=[e%r];return e<60?s.unshift(0):(e=(e-s[0])/r,s.unshift(e%r),e>=60&&(e=(e-s[0])/r,s.unshift(e))),n+s.map(a=>String(a).padStart(2,"0")).join(":").replace(/000000\d*$/,"")}const zf={identify:i=>typeof i=="bigint"||Number.isInteger(i),default:!0,tag:"tag:yaml.org,2002:int",format:"TIME",test:/^[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+$/,resolve:(i,e,{intAsBigInt:t})=>ec(i,t),stringify:Bf},Vf={identify:i=>typeof i=="number",default:!0,tag:"tag:yaml.org,2002:float",format:"TIME",test:/^[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+\.[0-9_]*$/,resolve:i=>ec(i,!1),stringify:Bf},Wa={identify:i=>i instanceof Date,default:!0,tag:"tag:yaml.org,2002:timestamp",test:RegExp("^([0-9]{4})-([0-9]{1,2})-([0-9]{1,2})(?:(?:t|T|[ \\t]+)([0-9]{1,2}):([0-9]{1,2}):([0-9]{1,2}(\\.[0-9]+)?)(?:[ \\t]*(Z|[-+][012]?[0-9](?::[0-9]{2})?))?)?$"),resolve(i){const e=i.match(Wa.test);if(!e)throw new Error("!!timestamp expects a date, starting with yyyy-mm-dd");const[,t,n,r,s,a,o]=e.map(Number),c=e[7]?Number((e[7]+"00").substr(1,3)):0;let l=Date.UTC(t,n-1,r,s||0,a||0,o||0,c);const h=e[8];if(h&&h!=="Z"){let f=ec(h,!1);Math.abs(f)<30&&(f*=60),l-=6e4*f}return new Date(l)},stringify:({value:i})=>(i==null?void 0:i.toISOString().replace(/(T00:00:00)?\.000Z$/,""))??""},Oc=[Vr,Hr,za,Va,Ff,kf,$d,Yd,Kd,Jd,qd,Xd,jd,Yl,ii,Jl,Kl,Ql,zf,Vf,Wa],Fc=new Map([["core",Vd],["failsafe",[Vr,Hr,za]],["json",Wd],["yaml11",Oc],["yaml-1.1",Oc]]),kc={binary:Yl,bool:jl,float:Cf,floatExp:Rf,floatNaN:Af,floatTime:Vf,int:If,intHex:Df,intOct:Lf,intTime:zf,map:Vr,merge:ii,null:Va,omap:Jl,pairs:Kl,seq:Hr,set:Ql,timestamp:Wa},Zd={"tag:yaml.org,2002:binary":Yl,"tag:yaml.org,2002:merge":ii,"tag:yaml.org,2002:omap":Jl,"tag:yaml.org,2002:pairs":Kl,"tag:yaml.org,2002:set":Ql,"tag:yaml.org,2002:timestamp":Wa};function ro(i,e,t){const n=Fc.get(e);if(n&&!i)return t&&!n.includes(ii)?n.concat(ii):n.slice();let r=n;if(!r)if(Array.isArray(i))r=[];else{const s=Array.from(Fc.keys()).filter(a=>a!=="yaml11").map(a=>JSON.stringify(a)).join(", ");throw new Error(`Unknown schema "${e}"; use one of ${s} or define customTags array`)}if(Array.isArray(i))for(const s of i)r=r.concat(s);else typeof i=="function"&&(r=i(r.slice()));return t&&(r=r.concat(ii)),r.reduce((s,a)=>{const o=typeof a=="string"?kc[a]:a;if(!o){const c=JSON.stringify(a),l=Object.keys(kc).map(h=>JSON.stringify(h)).join(", ");throw new Error(`Unknown custom tag ${c}; use one of ${l}`)}return s.includes(o)||s.push(o),s},[])}const Qd=(i,e)=>i.key<e.key?-1:i.key>e.key?1:0;class qa{constructor({compat:e,customTags:t,merge:n,resolveKnownTags:r,schema:s,sortMapEntries:a,toStringDefaults:o}){this.compat=Array.isArray(e)?ro(e,"compat"):e?ro(null,e):null,this.name=typeof s=="string"&&s||"core",this.knownTags=r?Zd:{},this.tags=ro(t,this.name,n),this.toStringOptions=o??null,Object.defineProperty(this,vi,{value:Vr}),Object.defineProperty(this,kn,{value:za}),Object.defineProperty(this,kr,{value:Hr}),this.sortMapEntries=typeof a=="function"?a:a===!0?Qd:null}clone(){const e=Object.create(qa.prototype,Object.getOwnPropertyDescriptors(this));return e.tags=this.tags.slice(),e}}function ep(i,e){var c;const t=[];let n=e.directives===!0;if(e.directives!==!1&&i.directives){const l=i.directives.toString(i);l?(t.push(l),n=!0):i.directives.docStart&&(n=!0)}n&&t.push("---");const r=Sf(i,e),{commentString:s}=r.options;if(i.commentBefore){t.length!==1&&t.unshift("");const l=s(i.commentBefore);t.unshift(Zn(l,""))}let a=!1,o=null;if(i.contents){if(Tt(i.contents)){if(i.contents.spaceBefore&&n&&t.push(""),i.contents.commentBefore){const f=s(i.contents.commentBefore);t.push(Zn(f,""))}r.forceBlockIndent=!!i.comment,o=i.contents.comment}const l=o?void 0:()=>a=!0;let h=Cr(i.contents,r,()=>o=null,l);o&&(h+=Bi(h,"",s(o))),(h[0]==="|"||h[0]===">")&&t[t.length-1]==="---"?t[t.length-1]=`--- ${h}`:t.push(h)}else t.push(Cr(i.contents,r));if((c=i.directives)!=null&&c.docEnd)if(i.comment){const l=s(i.comment);l.includes(`
`)?(t.push("..."),t.push(Zn(l,""))):t.push(`... ${l}`)}else t.push("...");else{let l=i.comment;l&&a&&(l=l.replace(/^\n+/,"")),l&&((!a||o)&&t[t.length-1]!==""&&t.push(""),t.push(Zn(s(l),"")))}return t.join(`
`)+`
`}class Gr{constructor(e,t,n){this.commentBefore=null,this.comment=null,this.errors=[],this.warnings=[],Object.defineProperty(this,yn,{value:jo});let r=null;typeof t=="function"||Array.isArray(t)?r=t:n===void 0&&t&&(n=t,t=void 0);const s=Object.assign({intAsBigInt:!1,keepSourceTokens:!1,logLevel:"warn",prettyErrors:!0,strict:!0,stringKeys:!1,uniqueKeys:!0,version:"1.2"},n);this.options=s;let{version:a}=s;n!=null&&n._directives?(this.directives=n._directives.atDocument(),this.directives.yaml.explicit&&(a=this.directives.yaml.version)):this.directives=new en({version:a}),this.setSchema(a,n),this.contents=e===void 0?null:this.createNode(e,r,n)}clone(){const e=Object.create(Gr.prototype,{[yn]:{value:jo}});return e.commentBefore=this.commentBefore,e.comment=this.comment,e.errors=this.errors.slice(),e.warnings=this.warnings.slice(),e.options=Object.assign({},this.options),this.directives&&(e.directives=this.directives.clone()),e.schema=this.schema.clone(),e.contents=Tt(this.contents)?this.contents.clone(e.schema):this.contents,this.range&&(e.range=this.range.slice()),e}add(e){er(this.contents)&&this.contents.add(e)}addIn(e,t){er(this.contents)&&this.contents.addIn(e,t)}createAlias(e,t){if(!e.anchor){const n=gf(this);e.anchor=!t||n.has(t)?_f(t||"a",n):t}return new Oa(e.anchor)}createNode(e,t,n){let r;if(typeof t=="function")e=t.call({"":e},"",e),r=t;else if(Array.isArray(t)){const _=R=>typeof R=="number"||R instanceof String||R instanceof Number,g=t.filter(_).map(String);g.length>0&&(t=t.concat(g)),r=t}else n===void 0&&t&&(n=t,t=void 0);const{aliasDuplicateObjects:s,anchorPrefix:a,flow:o,keepUndefined:c,onTagObj:l,tag:h}=n??{},{onAnchor:f,setAnchors:d,sourceObjects:m}=Rd(this,a||"a"),x={aliasDuplicateObjects:s??!0,keepUndefined:c??!1,onAnchor:f,onTagObj:l,replacer:r,schema:this.schema,sourceObjects:m},y=us(e,h,x);return o&&wt(y)&&(y.flow=!0),d(),y}createPair(e,t,n={}){const r=this.createNode(e,null,n),s=this.createNode(t,null,n);return new Kt(r,s)}delete(e){return er(this.contents)?this.contents.delete(e):!1}deleteIn(e){return as(e)?this.contents==null?!1:(this.contents=null,!0):er(this.contents)?this.contents.deleteIn(e):!1}get(e,t){return wt(this.contents)?this.contents.get(e,t):void 0}getIn(e,t){return as(e)?!t&&yt(this.contents)?this.contents.value:this.contents:wt(this.contents)?this.contents.getIn(e,t):void 0}has(e){return wt(this.contents)?this.contents.has(e):!1}hasIn(e){return as(e)?this.contents!==void 0:wt(this.contents)?this.contents.hasIn(e):!1}set(e,t){this.contents==null?this.contents=Ma(this.schema,[e],t):er(this.contents)&&this.contents.set(e,t)}setIn(e,t){as(e)?this.contents=t:this.contents==null?this.contents=Ma(this.schema,Array.from(e),t):er(this.contents)&&this.contents.setIn(e,t)}setSchema(e,t={}){typeof e=="number"&&(e=String(e));let n;switch(e){case"1.1":this.directives?this.directives.yaml.version="1.1":this.directives=new en({version:"1.1"}),n={resolveKnownTags:!1,schema:"yaml-1.1"};break;case"1.2":case"next":this.directives?this.directives.yaml.version=e:this.directives=new en({version:e}),n={resolveKnownTags:!0,schema:"core"};break;case null:this.directives&&delete this.directives,n=null;break;default:{const r=JSON.stringify(e);throw new Error(`Expected '1.1', '1.2' or null as first argument, but found: ${r}`)}}if(t.schema instanceof Object)this.schema=t.schema;else if(n)this.schema=new qa(Object.assign(n,t));else throw new Error("With a null YAML version, the { schema: Schema } option is required")}toJS({json:e,jsonArg:t,mapAsMap:n,maxAliasCount:r,onAnchor:s,reviver:a}={}){const o={anchors:new Map,doc:this,keep:!e,mapAsMap:n===!0,mapKeyWarned:!1,maxAliasCount:typeof r=="number"?r:100},c=vn(this.contents,t??"",o);if(typeof s=="function")for(const{count:l,res:h}of o.anchors.values())s(h,l);return typeof a=="function"?xr(a,{"":c},"",c):c}toJSON(e,t){return this.toJS({json:!0,jsonArg:e,mapAsMap:!1,onAnchor:t})}toString(e={}){if(this.errors.length>0)throw new Error("Document with errors cannot be stringified");if("indent"in e&&(!Number.isInteger(e.indent)||Number(e.indent)<=0)){const t=JSON.stringify(e.indent);throw new Error(`"indent" option must be a positive integer, not ${t}`)}return ep(this,e)}}function er(i){if(wt(i))return!0;throw new Error("Expected a YAML collection as document contents")}class tc extends Error{constructor(e,t,n,r){super(),this.name=e,this.code=n,this.message=r,this.pos=t}}class Vi extends tc{constructor(e,t,n){super("YAMLParseError",e,t,n)}}class Hf extends tc{constructor(e,t,n){super("YAMLWarning",e,t,n)}}const Ta=(i,e)=>t=>{if(t.pos[0]===-1)return;t.linePos=t.pos.map(o=>e.linePos(o));const{line:n,col:r}=t.linePos[0];t.message+=` at line ${n}, column ${r}`;let s=r-1,a=i.substring(e.lineStarts[n-1],e.lineStarts[n]).replace(/[\n\r]+$/,"");if(s>=60&&a.length>80){const o=Math.min(s-39,a.length-79);a="…"+a.substring(o),s-=o-1}if(a.length>80&&(a=a.substring(0,79)+"…"),n>1&&/^ *$/.test(a.substring(0,s))){let o=i.substring(e.lineStarts[n-2],e.lineStarts[n-1]);o.length>80&&(o=o.substring(0,79)+`…
`),a=o+a}if(/[^ ]/.test(a)){let o=1;const c=t.linePos[1];(c==null?void 0:c.line)===n&&c.col>r&&(o=Math.max(1,Math.min(c.col-r,80-s)));const l=" ".repeat(s)+"^".repeat(o);t.message+=`:

${a}
${l}
`}};function Pr(i,{flow:e,indicator:t,next:n,offset:r,onError:s,parentIndent:a,startOnNewline:o}){let c=!1,l=o,h=o,f="",d="",m=!1,x=!1,y=null,_=null,g=null,R=null,A=null,b=null,L=null;for(const D of i)switch(x&&(D.type!=="space"&&D.type!=="newline"&&D.type!=="comma"&&s(D.offset,"MISSING_CHAR","Tags and anchors must be separated from the next token by white space"),x=!1),y&&(l&&D.type!=="comment"&&D.type!=="newline"&&s(y,"TAB_AS_INDENT","Tabs are not allowed as indentation"),y=null),D.type){case"space":!e&&(t!=="doc-start"||(n==null?void 0:n.type)!=="flow-collection")&&D.source.includes("	")&&(y=D),h=!0;break;case"comment":{h||s(D,"MISSING_CHAR","Comments must be separated from other tokens by white space characters");const M=D.source.substring(1)||" ";f?f+=d+M:f=M,d="",l=!1;break}case"newline":l?f?f+=D.source:(!b||t!=="seq-item-ind")&&(c=!0):d+=D.source,l=!0,m=!0,(_||g)&&(R=D),h=!0;break;case"anchor":_&&s(D,"MULTIPLE_ANCHORS","A node can have at most one anchor"),D.source.endsWith(":")&&s(D.offset+D.source.length-1,"BAD_ALIAS","Anchor ending in : is ambiguous",!0),_=D,L??(L=D.offset),l=!1,h=!1,x=!0;break;case"tag":{g&&s(D,"MULTIPLE_TAGS","A node can have at most one tag"),g=D,L??(L=D.offset),l=!1,h=!1,x=!0;break}case t:(_||g)&&s(D,"BAD_PROP_ORDER",`Anchors and tags must be after the ${D.source} indicator`),b&&s(D,"UNEXPECTED_TOKEN",`Unexpected ${D.source} in ${e??"collection"}`),b=D,l=t==="seq-item-ind"||t==="explicit-key-ind",h=!1;break;case"comma":if(e){A&&s(D,"UNEXPECTED_TOKEN",`Unexpected , in ${e}`),A=D,l=!1,h=!1;break}default:s(D,"UNEXPECTED_TOKEN",`Unexpected ${D.type} token`),l=!1,h=!1}const I=i[i.length-1],C=I?I.offset+I.source.length:r;return x&&n&&n.type!=="space"&&n.type!=="newline"&&n.type!=="comma"&&(n.type!=="scalar"||n.source!=="")&&s(n.offset,"MISSING_CHAR","Tags and anchors must be separated from the next token by white space"),y&&(l&&y.indent<=a||(n==null?void 0:n.type)==="block-map"||(n==null?void 0:n.type)==="block-seq")&&s(y,"TAB_AS_INDENT","Tabs are not allowed as indentation"),{comma:A,found:b,spaceBefore:c,comment:f,hasNewline:m,anchor:_,tag:g,newlineAfterProp:R,end:C,start:L??C}}function fs(i){if(!i)return null;switch(i.type){case"alias":case"scalar":case"double-quoted-scalar":case"single-quoted-scalar":if(i.source.includes(`
`))return!0;if(i.end){for(const e of i.end)if(e.type==="newline")return!0}return!1;case"flow-collection":for(const e of i.items){for(const t of e.start)if(t.type==="newline")return!0;if(e.sep){for(const t of e.sep)if(t.type==="newline")return!0}if(fs(e.key)||fs(e.value))return!0}return!1;default:return!0}}function Jo(i,e,t){if((e==null?void 0:e.type)==="flow-collection"){const n=e.end[0];n.indent===i&&(n.source==="]"||n.source==="}")&&fs(e)&&t(n,"BAD_INDENT","Flow end indicator should be more indented than parent",!0)}}function Gf(i,e,t){const{uniqueKeys:n}=i.options;if(n===!1)return!1;const r=typeof n=="function"?n:(s,a)=>s===a||yt(s)&&yt(a)&&s.value===a.value;return e.some(s=>r(s.key,t))}const Bc="All mapping items must start at the same column";function tp({composeNode:i,composeEmptyNode:e},t,n,r,s){var h;const a=(s==null?void 0:s.nodeClass)??dn,o=new a(t.schema);t.atRoot&&(t.atRoot=!1);let c=n.offset,l=null;for(const f of n.items){const{start:d,key:m,sep:x,value:y}=f,_=Pr(d,{indicator:"explicit-key-ind",next:m??(x==null?void 0:x[0]),offset:c,onError:r,parentIndent:n.indent,startOnNewline:!0}),g=!_.found;if(g){if(m&&(m.type==="block-seq"?r(c,"BLOCK_AS_IMPLICIT_KEY","A block sequence may not be used as an implicit map key"):"indent"in m&&m.indent!==n.indent&&r(c,"BAD_INDENT",Bc)),!_.anchor&&!_.tag&&!x){l=_.end,_.comment&&(o.comment?o.comment+=`
`+_.comment:o.comment=_.comment);continue}(_.newlineAfterProp||fs(m))&&r(m??d[d.length-1],"MULTILINE_IMPLICIT_KEY","Implicit keys need to be on a single line")}else((h=_.found)==null?void 0:h.indent)!==n.indent&&r(c,"BAD_INDENT",Bc);t.atKey=!0;const R=_.end,A=m?i(t,m,_,r):e(t,R,d,null,_,r);t.schema.compat&&Jo(n.indent,m,r),t.atKey=!1,Gf(t,o.items,A)&&r(R,"DUPLICATE_KEY","Map keys must be unique");const b=Pr(x??[],{indicator:"map-value-ind",next:y,offset:A.range[2],onError:r,parentIndent:n.indent,startOnNewline:!m||m.type==="block-scalar"});if(c=b.end,b.found){g&&((y==null?void 0:y.type)==="block-map"&&!b.hasNewline&&r(c,"BLOCK_AS_IMPLICIT_KEY","Nested mappings are not allowed in compact mappings"),t.options.strict&&_.start<b.found.offset-1024&&r(A.range,"KEY_OVER_1024_CHARS","The : indicator must be at most 1024 chars after the start of an implicit block mapping key"));const L=y?i(t,y,b,r):e(t,c,x,null,b,r);t.schema.compat&&Jo(n.indent,y,r),c=L.range[2];const I=new Kt(A,L);t.options.keepSourceTokens&&(I.srcToken=f),o.items.push(I)}else{g&&r(A.range,"MISSING_CHAR","Implicit map keys need to be followed by map values"),b.comment&&(A.comment?A.comment+=`
`+b.comment:A.comment=b.comment);const L=new Kt(A);t.options.keepSourceTokens&&(L.srcToken=f),o.items.push(L)}}return l&&l<c&&r(l,"IMPOSSIBLE","Map comment with trailing content"),o.range=[n.offset,c,l??c],o}function np({composeNode:i,composeEmptyNode:e},t,n,r,s){const a=(s==null?void 0:s.nodeClass)??xi,o=new a(t.schema);t.atRoot&&(t.atRoot=!1),t.atKey&&(t.atKey=!1);let c=n.offset,l=null;for(const{start:h,value:f}of n.items){const d=Pr(h,{indicator:"seq-item-ind",next:f,offset:c,onError:r,parentIndent:n.indent,startOnNewline:!0});if(!d.found)if(d.anchor||d.tag||f)(f==null?void 0:f.type)==="block-seq"?r(d.end,"BAD_INDENT","All sequence items must start at the same column"):r(c,"MISSING_CHAR","Sequence item without - indicator");else{l=d.end,d.comment&&(o.comment=d.comment);continue}const m=f?i(t,f,d,r):e(t,d.end,h,null,d,r);t.schema.compat&&Jo(n.indent,f,r),c=m.range[2],o.items.push(m)}return o.range=[n.offset,c,l??c],o}function xs(i,e,t,n){let r="";if(i){let s=!1,a="";for(const o of i){const{source:c,type:l}=o;switch(l){case"space":s=!0;break;case"comment":{t&&!s&&n(o,"MISSING_CHAR","Comments must be separated from other tokens by white space characters");const h=c.substring(1)||" ";r?r+=a+h:r=h,a="";break}case"newline":r&&(a+=c),s=!0;break;default:n(o,"UNEXPECTED_TOKEN",`Unexpected ${l} at node end`)}e+=c.length}}return{comment:r,offset:e}}const so="Block collections are not allowed within flow collections",ao=i=>i&&(i.type==="block-map"||i.type==="block-seq");function ip({composeNode:i,composeEmptyNode:e},t,n,r,s){var _;const a=n.start.source==="{",o=a?"flow map":"flow sequence",c=(s==null?void 0:s.nodeClass)??(a?dn:xi),l=new c(t.schema);l.flow=!0;const h=t.atRoot;h&&(t.atRoot=!1),t.atKey&&(t.atKey=!1);let f=n.offset+n.start.source.length;for(let g=0;g<n.items.length;++g){const R=n.items[g],{start:A,key:b,sep:L,value:I}=R,C=Pr(A,{flow:o,indicator:"explicit-key-ind",next:b??(L==null?void 0:L[0]),offset:f,onError:r,parentIndent:n.indent,startOnNewline:!1});if(!C.found){if(!C.anchor&&!C.tag&&!L&&!I){g===0&&C.comma?r(C.comma,"UNEXPECTED_TOKEN",`Unexpected , in ${o}`):g<n.items.length-1&&r(C.start,"UNEXPECTED_TOKEN",`Unexpected empty item in ${o}`),C.comment&&(l.comment?l.comment+=`
`+C.comment:l.comment=C.comment),f=C.end;continue}!a&&t.options.strict&&fs(b)&&r(b,"MULTILINE_IMPLICIT_KEY","Implicit keys of flow sequence pairs need to be on a single line")}if(g===0)C.comma&&r(C.comma,"UNEXPECTED_TOKEN",`Unexpected , in ${o}`);else if(C.comma||r(C.start,"MISSING_CHAR",`Missing , between ${o} items`),C.comment){let D="";e:for(const M of A)switch(M.type){case"comma":case"space":break;case"comment":D=M.source.substring(1);break e;default:break e}if(D){let M=l.items[l.items.length-1];Et(M)&&(M=M.value??M.key),M.comment?M.comment+=`
`+D:M.comment=D,C.comment=C.comment.substring(D.length+1)}}if(!a&&!L&&!C.found){const D=I?i(t,I,C,r):e(t,C.end,L,null,C,r);l.items.push(D),f=D.range[2],ao(I)&&r(D.range,"BLOCK_IN_FLOW",so)}else{t.atKey=!0;const D=C.end,M=b?i(t,b,C,r):e(t,D,A,null,C,r);ao(b)&&r(M.range,"BLOCK_IN_FLOW",so),t.atKey=!1;const S=Pr(L??[],{flow:o,indicator:"map-value-ind",next:I,offset:M.range[2],onError:r,parentIndent:n.indent,startOnNewline:!1});if(S.found){if(!a&&!C.found&&t.options.strict){if(L)for(const F of L){if(F===S.found)break;if(F.type==="newline"){r(F,"MULTILINE_IMPLICIT_KEY","Implicit keys of flow sequence pairs need to be on a single line");break}}C.start<S.found.offset-1024&&r(S.found,"KEY_OVER_1024_CHARS","The : indicator must be at most 1024 chars after the start of an implicit flow sequence key")}}else I&&("source"in I&&((_=I.source)==null?void 0:_[0])===":"?r(I,"MISSING_CHAR",`Missing space after : in ${o}`):r(S.start,"MISSING_CHAR",`Missing , or : between ${o} items`));const N=I?i(t,I,S,r):S.found?e(t,S.end,L,null,S,r):null;N?ao(I)&&r(N.range,"BLOCK_IN_FLOW",so):S.comment&&(M.comment?M.comment+=`
`+S.comment:M.comment=S.comment);const k=new Kt(M,N);if(t.options.keepSourceTokens&&(k.srcToken=R),a){const F=l;Gf(t,F.items,M)&&r(D,"DUPLICATE_KEY","Map keys must be unique"),F.items.push(k)}else{const F=new dn(t.schema);F.flow=!0,F.items.push(k);const $=(N??M).range;F.range=[M.range[0],$[1],$[2]],l.items.push(F)}f=N?N.range[2]:S.end}}const d=a?"}":"]",[m,...x]=n.end;let y=f;if((m==null?void 0:m.source)===d)y=m.offset+m.source.length;else{const g=o[0].toUpperCase()+o.substring(1),R=h?`${g} must end with a ${d}`:`${g} in block collection must be sufficiently indented and end with a ${d}`;r(f,h?"MISSING_CHAR":"BAD_INDENT",R),m&&m.source.length!==1&&x.unshift(m)}if(x.length>0){const g=xs(x,y,t.options.strict,r);g.comment&&(l.comment?l.comment+=`
`+g.comment:l.comment=g.comment),l.range=[n.offset,y,g.offset]}else l.range=[n.offset,y,y];return l}function oo(i,e,t,n,r,s){const a=t.type==="block-map"?tp(i,e,t,n,s):t.type==="block-seq"?np(i,e,t,n,s):ip(i,e,t,n,s),o=a.constructor;return r==="!"||r===o.tagName?(a.tag=o.tagName,a):(r&&(a.tag=r),a)}function rp(i,e,t,n,r){var d;const s=n.tag,a=s?e.directives.tagName(s.source,m=>r(s,"TAG_RESOLVE_FAILED",m)):null;if(t.type==="block-seq"){const{anchor:m,newlineAfterProp:x}=n,y=m&&s?m.offset>s.offset?m:s:m??s;y&&(!x||x.offset<y.offset)&&r(y,"MISSING_CHAR","Missing newline after block sequence props")}const o=t.type==="block-map"?"map":t.type==="block-seq"?"seq":t.start.source==="{"?"map":"seq";if(!s||!a||a==="!"||a===dn.tagName&&o==="map"||a===xi.tagName&&o==="seq")return oo(i,e,t,r,a);let c=e.schema.tags.find(m=>m.tag===a&&m.collection===o);if(!c){const m=e.schema.knownTags[a];if((m==null?void 0:m.collection)===o)e.schema.tags.push(Object.assign({},m,{default:!1})),c=m;else return m?r(s,"BAD_COLLECTION_TYPE",`${m.tag} used for ${o} collection, but expects ${m.collection??"scalar"}`,!0):r(s,"TAG_RESOLVE_FAILED",`Unresolved tag: ${a}`,!0),oo(i,e,t,r,a)}const l=oo(i,e,t,r,a,c),h=((d=c.resolve)==null?void 0:d.call(c,l,m=>r(s,"TAG_RESOLVE_FAILED",m),e.options))??l,f=Tt(h)?h:new Je(h);return f.range=l.range,f.tag=a,c!=null&&c.format&&(f.format=c.format),f}function Wf(i,e,t){const n=e.offset,r=sp(e,i.options.strict,t);if(!r)return{value:"",type:null,comment:"",range:[n,n,n]};const s=r.mode===">"?Je.BLOCK_FOLDED:Je.BLOCK_LITERAL,a=e.source?ap(e.source):[];let o=a.length;for(let y=a.length-1;y>=0;--y){const _=a[y][1];if(_===""||_==="\r")o=y;else break}if(o===0){const y=r.chomp==="+"&&a.length>0?`
`.repeat(Math.max(1,a.length-1)):"";let _=n+r.length;return e.source&&(_+=e.source.length),{value:y,type:s,comment:r.comment,range:[n,_,_]}}let c=e.indent+r.indent,l=e.offset+r.length,h=0;for(let y=0;y<o;++y){const[_,g]=a[y];if(g===""||g==="\r")r.indent===0&&_.length>c&&(c=_.length);else{_.length<c&&t(l+_.length,"MISSING_CHAR","Block scalars with more-indented leading empty lines must use an explicit indentation indicator"),r.indent===0&&(c=_.length),h=y,c===0&&!i.atRoot&&t(l,"BAD_INDENT","Block scalar values in collections must be indented");break}l+=_.length+g.length+1}for(let y=a.length-1;y>=o;--y)a[y][0].length>c&&(o=y+1);let f="",d="",m=!1;for(let y=0;y<h;++y)f+=a[y][0].slice(c)+`
`;for(let y=h;y<o;++y){let[_,g]=a[y];l+=_.length+g.length+1;const R=g[g.length-1]==="\r";if(R&&(g=g.slice(0,-1)),g&&_.length<c){const b=`Block scalar lines must not be less indented than their ${r.indent?"explicit indentation indicator":"first line"}`;t(l-g.length-(R?2:1),"BAD_INDENT",b),_=""}s===Je.BLOCK_LITERAL?(f+=d+_.slice(c)+g,d=`
`):_.length>c||g[0]==="	"?(d===" "?d=`
`:!m&&d===`
`&&(d=`

`),f+=d+_.slice(c)+g,d=`
`,m=!0):g===""?d===`
`?f+=`
`:d=`
`:(f+=d+g,d=" ",m=!1)}switch(r.chomp){case"-":break;case"+":for(let y=o;y<a.length;++y)f+=`
`+a[y][0].slice(c);f[f.length-1]!==`
`&&(f+=`
`);break;default:f+=`
`}const x=n+r.length+e.source.length;return{value:f,type:s,comment:r.comment,range:[n,x,x]}}function sp({offset:i,props:e},t,n){if(e[0].type!=="block-scalar-header")return n(e[0],"IMPOSSIBLE","Block scalar header not found"),null;const{source:r}=e[0],s=r[0];let a=0,o="",c=-1;for(let d=1;d<r.length;++d){const m=r[d];if(!o&&(m==="-"||m==="+"))o=m;else{const x=Number(m);!a&&x?a=x:c===-1&&(c=i+d)}}c!==-1&&n(c,"UNEXPECTED_TOKEN",`Block scalar header includes extra characters: ${r}`);let l=!1,h="",f=r.length;for(let d=1;d<e.length;++d){const m=e[d];switch(m.type){case"space":l=!0;case"newline":f+=m.source.length;break;case"comment":t&&!l&&n(m,"MISSING_CHAR","Comments must be separated from other tokens by white space characters"),f+=m.source.length,h=m.source.substring(1);break;case"error":n(m,"UNEXPECTED_TOKEN",m.message),f+=m.source.length;break;default:{const x=`Unexpected token in block scalar header: ${m.type}`;n(m,"UNEXPECTED_TOKEN",x);const y=m.source;y&&typeof y=="string"&&(f+=y.length)}}}return{mode:s,indent:a,chomp:o,comment:h,length:f}}function ap(i){const e=i.split(/\n( *)/),t=e[0],n=t.match(/^( *)/),s=[n!=null&&n[1]?[n[1],t.slice(n[1].length)]:["",t]];for(let a=1;a<e.length;a+=2)s.push([e[a],e[a+1]]);return s}function qf(i,e,t){const{offset:n,type:r,source:s,end:a}=i;let o,c;const l=(d,m,x)=>t(n+d,m,x);switch(r){case"scalar":o=Je.PLAIN,c=op(s,l);break;case"single-quoted-scalar":o=Je.QUOTE_SINGLE,c=lp(s,l);break;case"double-quoted-scalar":o=Je.QUOTE_DOUBLE,c=cp(s,l);break;default:return t(i,"UNEXPECTED_TOKEN",`Expected a flow scalar value, but found: ${r}`),{value:"",type:null,comment:"",range:[n,n+s.length,n+s.length]}}const h=n+s.length,f=xs(a,h,e,t);return{value:c,type:o,comment:f.comment,range:[n,h,f.offset]}}function op(i,e){let t="";switch(i[0]){case"	":t="a tab character";break;case",":t="flow indicator character ,";break;case"%":t="directive indicator character %";break;case"|":case">":{t=`block scalar indicator ${i[0]}`;break}case"@":case"`":{t=`reserved character ${i[0]}`;break}}return t&&e(0,"BAD_SCALAR_START",`Plain value cannot start with ${t}`),Xf(i)}function lp(i,e){return(i[i.length-1]!=="'"||i.length===1)&&e(i.length,"MISSING_CHAR","Missing closing 'quote"),Xf(i.slice(1,-1)).replace(/''/g,"'")}function Xf(i){const e=/(.*?)\r?\n/sy;let t=e.exec(i);if(!t)return i;let n,r;try{n=new RegExp("(?<![ 	])[ 	]+$"),r=new RegExp("^[ 	]+|(?<![ 	])[ 	]+$","g")}catch{n=/[ \t]+$/,r=/^[ \t]+|[ \t]+$/g}let s=t[1].replace(n,""),a=" ",o=e.lastIndex;for(;t=e.exec(i);){const l=t[1].replace(r,"");l===""?a===`
`?s+=a:a=`
`:(s+=a+l,a=" "),o=e.lastIndex}const c=/[ \t]*(.*)/sy;return c.lastIndex=o,t=c.exec(i),s+a+((t==null?void 0:t[1])??"")}function cp(i,e){let t="";for(let n=1;n<i.length-1;++n){const r=i[n];if(!(r==="\r"&&i[n+1]===`
`))if(r===`
`){const{fold:s,offset:a}=up(i,n);t+=s,n=a}else if(r==="\\"){let s=i[++n];const a=fp[s];if(a)t+=a;else if(s===`
`)for(s=i[n+1];s===" "||s==="	";)s=i[++n+1];else if(s==="\r"&&i[n+1]===`
`)for(s=i[++n+1];s===" "||s==="	";)s=i[++n+1];else if(s==="x"||s==="u"||s==="U"){const o=s==="x"?2:s==="u"?4:8;t+=hp(i,n+1,o,e),n+=o}else{const o=i.substr(n-1,2);e(n-1,"BAD_DQ_ESCAPE",`Invalid escape sequence ${o}`),t+=o}}else if(r===" "||r==="	"){const s=n;let a=i[n+1];for(;a===" "||a==="	";)a=i[++n+1];a!==`
`&&!(a==="\r"&&i[n+2]===`
`)&&(t+=n>s?i.slice(s,n+1):r)}else t+=r}return(i[i.length-1]!=='"'||i.length===1)&&e(i.length,"MISSING_CHAR",'Missing closing "quote'),t}function up(i,e){let t="",n=i[e+1];for(;(n===" "||n==="	"||n===`
`||n==="\r")&&!(n==="\r"&&i[e+2]!==`
`);)n===`
`&&(t+=`
`),e+=1,n=i[e+1];return t||(t=" "),{fold:t,offset:e}}const fp={0:"\0",a:"\x07",b:"\b",e:"\x1B",f:"\f",n:`
`,r:"\r",t:"	",v:"\v",N:"",_:" ",L:"\u2028",P:"\u2029"," ":" ",'"':'"',"/":"/","\\":"\\","	":"	"};function hp(i,e,t,n){const r=i.substr(e,t),a=r.length===t&&/^[0-9a-fA-F]+$/.test(r)?parseInt(r,16):NaN;try{return String.fromCodePoint(a)}catch{const o=i.substr(e-2,t+2);return n(e-2,"BAD_DQ_ESCAPE",`Invalid escape sequence ${o}`),o}}function jf(i,e,t,n){const{value:r,type:s,comment:a,range:o}=e.type==="block-scalar"?Wf(i,e,n):qf(e,i.options.strict,n),c=t?i.directives.tagName(t.source,f=>n(t,"TAG_RESOLVE_FAILED",f)):null;let l;i.options.stringKeys&&i.atKey?l=i.schema[kn]:c?l=dp(i.schema,r,c,t,n):e.type==="scalar"?l=pp(i,r,e,n):l=i.schema[kn];let h;try{const f=l.resolve(r,d=>n(t??e,"TAG_RESOLVE_FAILED",d),i.options);h=yt(f)?f:new Je(f)}catch(f){const d=f instanceof Error?f.message:String(f);n(t??e,"TAG_RESOLVE_FAILED",d),h=new Je(r)}return h.range=o,h.source=r,s&&(h.type=s),c&&(h.tag=c),l.format&&(h.format=l.format),a&&(h.comment=a),h}function dp(i,e,t,n,r){var o;if(t==="!")return i[kn];const s=[];for(const c of i.tags)if(!c.collection&&c.tag===t)if(c.default&&c.test)s.push(c);else return c;for(const c of s)if((o=c.test)!=null&&o.test(e))return c;const a=i.knownTags[t];return a&&!a.collection?(i.tags.push(Object.assign({},a,{default:!1,test:void 0})),a):(r(n,"TAG_RESOLVE_FAILED",`Unresolved tag: ${t}`,t!=="tag:yaml.org,2002:str"),i[kn])}function pp({atKey:i,directives:e,schema:t},n,r,s){const a=t.tags.find(o=>{var c;return(o.default===!0||i&&o.default==="key")&&((c=o.test)==null?void 0:c.test(n))})||t[kn];if(t.compat){const o=t.compat.find(c=>{var l;return c.default&&((l=c.test)==null?void 0:l.test(n))})??t[kn];if(a.tag!==o.tag){const c=e.tagString(a.tag),l=e.tagString(o.tag),h=`Value may be parsed as either ${c} or ${l}`;s(r,"TAG_RESOLVE_FAILED",h,!0)}}return a}function mp(i,e,t){if(e){t??(t=e.length);for(let n=t-1;n>=0;--n){let r=e[n];switch(r.type){case"space":case"comment":case"newline":i-=r.source.length;continue}for(r=e[++n];(r==null?void 0:r.type)==="space";)i+=r.source.length,r=e[++n];break}}return i}const gp={composeNode:$f,composeEmptyNode:nc};function $f(i,e,t,n){const r=i.atKey,{spaceBefore:s,comment:a,anchor:o,tag:c}=t;let l,h=!0;switch(e.type){case"alias":l=_p(i,e,n),(o||c)&&n(e,"ALIAS_PROPS","An alias node must not specify any properties");break;case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":case"block-scalar":l=jf(i,e,c,n),o&&(l.anchor=o.source.substring(1));break;case"block-map":case"block-seq":case"flow-collection":try{l=rp(gp,i,e,t,n),o&&(l.anchor=o.source.substring(1))}catch(f){const d=f instanceof Error?f.message:String(f);n(e,"RESOURCE_EXHAUSTION",d)}break;default:{const f=e.type==="error"?e.message:`Unsupported token (type: ${e.type})`;n(e,"UNEXPECTED_TOKEN",f),h=!1}}return l??(l=nc(i,e.offset,void 0,null,t,n)),o&&l.anchor===""&&n(o,"BAD_ALIAS","Anchor cannot be an empty string"),r&&i.options.stringKeys&&(!yt(l)||typeof l.value!="string"||l.tag&&l.tag!=="tag:yaml.org,2002:str")&&n(c??e,"NON_STRING_KEY","With stringKeys, all keys must be strings"),s&&(l.spaceBefore=!0),a&&(e.type==="scalar"&&e.source===""?l.comment=a:l.commentBefore=a),i.options.keepSourceTokens&&h&&(l.srcToken=e),l}function nc(i,e,t,n,{spaceBefore:r,comment:s,anchor:a,tag:o,end:c},l){const h={type:"scalar",offset:mp(e,t,n),indent:-1,source:""},f=jf(i,h,o,l);return a&&(f.anchor=a.source.substring(1),f.anchor===""&&l(a,"BAD_ALIAS","Anchor cannot be an empty string")),r&&(f.spaceBefore=!0),s&&(f.comment=s,f.range[2]=c),f}function _p({options:i},{offset:e,source:t,end:n},r){const s=new Oa(t.substring(1));s.source===""&&r(e,"BAD_ALIAS","Alias cannot be an empty string"),s.source.endsWith(":")&&r(e+t.length-1,"BAD_ALIAS","Alias ending in : is ambiguous",!0);const a=e+t.length,o=xs(n,a,i.strict,r);return s.range=[e,a,o.offset],o.comment&&(s.comment=o.comment),s}function vp(i,e,{offset:t,start:n,value:r,end:s},a){const o=Object.assign({_directives:e},i),c=new Gr(void 0,o),l={atKey:!1,atRoot:!0,directives:c.directives,options:c.options,schema:c.schema},h=Pr(n,{indicator:"doc-start",next:r??(s==null?void 0:s[0]),offset:t,onError:a,parentIndent:0,startOnNewline:!0});h.found&&(c.directives.docStart=!0,r&&(r.type==="block-map"||r.type==="block-seq")&&!h.hasNewline&&a(h.end,"MISSING_CHAR","Block collection cannot start on same line with directives-end marker")),c.contents=r?$f(l,r,h,a):nc(l,h.end,n,null,h,a);const f=c.contents.range[2],d=xs(s,f,!1,a);return d.comment&&(c.comment=d.comment),c.range=[t,f,d.offset],c}function Qr(i){if(typeof i=="number")return[i,i+1];if(Array.isArray(i))return i.length===2?i:[i[0],i[1]];const{offset:e,source:t}=i;return[e,e+(typeof t=="string"?t.length:1)]}function zc(i){var r;let e="",t=!1,n=!1;for(let s=0;s<i.length;++s){const a=i[s];switch(a[0]){case"#":e+=(e===""?"":n?`

`:`
`)+(a.substring(1)||" "),t=!0,n=!1;break;case"%":((r=i[s+1])==null?void 0:r[0])!=="#"&&(s+=1),t=!1;break;default:t||(n=!0),t=!1}}return{comment:e,afterEmptyLine:n}}class ic{constructor(e={}){this.doc=null,this.atDirectives=!1,this.prelude=[],this.errors=[],this.warnings=[],this.onError=(t,n,r,s)=>{const a=Qr(t);s?this.warnings.push(new Hf(a,n,r)):this.errors.push(new Vi(a,n,r))},this.directives=new en({version:e.version||"1.2"}),this.options=e}decorate(e,t){const{comment:n,afterEmptyLine:r}=zc(this.prelude);if(n){const s=e.contents;if(t)e.comment=e.comment?`${e.comment}
${n}`:n;else if(r||e.directives.docStart||!s)e.commentBefore=n;else if(wt(s)&&!s.flow&&s.items.length>0){let a=s.items[0];Et(a)&&(a=a.key);const o=a.commentBefore;a.commentBefore=o?`${n}
${o}`:n}else{const a=s.commentBefore;s.commentBefore=a?`${n}
${a}`:n}}if(t){for(let s=0;s<this.errors.length;++s)e.errors.push(this.errors[s]);for(let s=0;s<this.warnings.length;++s)e.warnings.push(this.warnings[s])}else e.errors=this.errors,e.warnings=this.warnings;this.prelude=[],this.errors=[],this.warnings=[]}streamInfo(){return{comment:zc(this.prelude).comment,directives:this.directives,errors:this.errors,warnings:this.warnings}}*compose(e,t=!1,n=-1){for(const r of e)yield*this.next(r);yield*this.end(t,n)}*next(e){switch(e.type){case"directive":this.directives.add(e.source,(t,n,r)=>{const s=Qr(e);s[0]+=t,this.onError(s,"BAD_DIRECTIVE",n,r)}),this.prelude.push(e.source),this.atDirectives=!0;break;case"document":{const t=vp(this.options,this.directives,e,this.onError);this.atDirectives&&!t.directives.docStart&&this.onError(e,"MISSING_CHAR","Missing directives-end/doc-start indicator line"),this.decorate(t,!1),this.doc&&(yield this.doc),this.doc=t,this.atDirectives=!1;break}case"byte-order-mark":case"space":break;case"comment":case"newline":this.prelude.push(e.source);break;case"error":{const t=e.source?`${e.message}: ${JSON.stringify(e.source)}`:e.message,n=new Vi(Qr(e),"UNEXPECTED_TOKEN",t);this.atDirectives||!this.doc?this.errors.push(n):this.doc.errors.push(n);break}case"doc-end":{if(!this.doc){const n="Unexpected doc-end without preceding document";this.errors.push(new Vi(Qr(e),"UNEXPECTED_TOKEN",n));break}this.doc.directives.docEnd=!0;const t=xs(e.end,e.offset+e.source.length,this.doc.options.strict,this.onError);if(this.decorate(this.doc,!0),t.comment){const n=this.doc.comment;this.doc.comment=n?`${n}
${t.comment}`:t.comment}this.doc.range[2]=t.offset;break}default:this.errors.push(new Vi(Qr(e),"UNEXPECTED_TOKEN",`Unsupported token ${e.type}`))}}*end(e=!1,t=-1){if(this.doc)this.decorate(this.doc,!0),yield this.doc,this.doc=null;else if(e){const n=Object.assign({_directives:this.directives},this.options),r=new Gr(void 0,n);this.atDirectives&&this.onError(t,"MISSING_CHAR","Missing directives-end indicator line"),r.range=[0,t,t],this.decorate(r,!1),yield r}}}function yp(i,e=!0,t){if(i){const n=(r,s,a)=>{const o=typeof r=="number"?r:Array.isArray(r)?r[0]:r.offset;if(t)t(o,s,a);else throw new Vi([o,o+1],s,a)};switch(i.type){case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":return qf(i,e,n);case"block-scalar":return Wf({options:{strict:e}},i,n)}}return null}function xp(i,e){const{implicitKey:t=!1,indent:n,inFlow:r=!1,offset:s=-1,type:a="PLAIN"}=e,o=vs({type:a,value:i},{implicitKey:t,indent:n>0?" ".repeat(n):"",inFlow:r,options:{blockQuote:!0,lineWidth:-1}}),c=e.end??[{type:"newline",offset:-1,indent:n,source:`
`}];switch(o[0]){case"|":case">":{const l=o.indexOf(`
`),h=o.substring(0,l),f=o.substring(l+1)+`
`,d=[{type:"block-scalar-header",offset:s,indent:n,source:h}];return Yf(d,c)||d.push({type:"newline",offset:-1,indent:n,source:`
`}),{type:"block-scalar",offset:s,indent:n,props:d,source:f}}case'"':return{type:"double-quoted-scalar",offset:s,indent:n,source:o,end:c};case"'":return{type:"single-quoted-scalar",offset:s,indent:n,source:o,end:c};default:return{type:"scalar",offset:s,indent:n,source:o,end:c}}}function Sp(i,e,t={}){let{afterKey:n=!1,implicitKey:r=!1,inFlow:s=!1,type:a}=t,o="indent"in i?i.indent:null;if(n&&typeof o=="number"&&(o+=2),!a)switch(i.type){case"single-quoted-scalar":a="QUOTE_SINGLE";break;case"double-quoted-scalar":a="QUOTE_DOUBLE";break;case"block-scalar":{const l=i.props[0];if(l.type!=="block-scalar-header")throw new Error("Invalid block scalar header");a=l.source[0]===">"?"BLOCK_FOLDED":"BLOCK_LITERAL";break}default:a="PLAIN"}const c=vs({type:a,value:e},{implicitKey:r||o===null,indent:o!==null&&o>0?" ".repeat(o):"",inFlow:s,options:{blockQuote:!0,lineWidth:-1}});switch(c[0]){case"|":case">":bp(i,c);break;case'"':lo(i,c,"double-quoted-scalar");break;case"'":lo(i,c,"single-quoted-scalar");break;default:lo(i,c,"scalar")}}function bp(i,e){const t=e.indexOf(`
`),n=e.substring(0,t),r=e.substring(t+1)+`
`;if(i.type==="block-scalar"){const s=i.props[0];if(s.type!=="block-scalar-header")throw new Error("Invalid block scalar header");s.source=n,i.source=r}else{const{offset:s}=i,a="indent"in i?i.indent:-1,o=[{type:"block-scalar-header",offset:s,indent:a,source:n}];Yf(o,"end"in i?i.end:void 0)||o.push({type:"newline",offset:-1,indent:a,source:`
`});for(const c of Object.keys(i))c!=="type"&&c!=="offset"&&delete i[c];Object.assign(i,{type:"block-scalar",indent:a,props:o,source:r})}}function Yf(i,e){if(e)for(const t of e)switch(t.type){case"space":case"comment":i.push(t);break;case"newline":return i.push(t),!0}return!1}function lo(i,e,t){switch(i.type){case"scalar":case"double-quoted-scalar":case"single-quoted-scalar":i.type=t,i.source=e;break;case"block-scalar":{const n=i.props.slice(1);let r=e.length;i.props[0].type==="block-scalar-header"&&(r-=i.props[0].source.length);for(const s of n)s.offset+=r;delete i.props,Object.assign(i,{type:t,source:e,end:n});break}case"block-map":case"block-seq":{const r={type:"newline",offset:i.offset+e.length,indent:i.indent,source:`
`};delete i.items,Object.assign(i,{type:t,source:e,end:[r]});break}default:{const n="indent"in i?i.indent:-1,r="end"in i&&Array.isArray(i.end)?i.end.filter(s=>s.type==="space"||s.type==="comment"||s.type==="newline"):[];for(const s of Object.keys(i))s!=="type"&&s!=="offset"&&delete i[s];Object.assign(i,{type:t,indent:n,source:e,end:r})}}}const Ep=i=>"type"in i?Aa(i):pa(i);function Aa(i){switch(i.type){case"block-scalar":{let e="";for(const t of i.props)e+=Aa(t);return e+i.source}case"block-map":case"block-seq":{let e="";for(const t of i.items)e+=pa(t);return e}case"flow-collection":{let e=i.start.source;for(const t of i.items)e+=pa(t);for(const t of i.end)e+=t.source;return e}case"document":{let e=pa(i);if(i.end)for(const t of i.end)e+=t.source;return e}default:{let e=i.source;if("end"in i&&i.end)for(const t of i.end)e+=t.source;return e}}}function pa({start:i,key:e,sep:t,value:n}){let r="";for(const s of i)r+=s.source;if(e&&(r+=Aa(e)),t)for(const s of t)r+=s.source;return n&&(r+=Aa(n)),r}const Zo=Symbol("break visit"),Mp=Symbol("skip children"),Kf=Symbol("remove item");function Wi(i,e){"type"in i&&i.type==="document"&&(i={start:i.start,value:i.value}),Jf(Object.freeze([]),i,e)}Wi.BREAK=Zo;Wi.SKIP=Mp;Wi.REMOVE=Kf;Wi.itemAtPath=(i,e)=>{let t=i;for(const[n,r]of e){const s=t==null?void 0:t[n];if(s&&"items"in s)t=s.items[r];else return}return t};Wi.parentCollection=(i,e)=>{const t=Wi.itemAtPath(i,e.slice(0,-1)),n=e[e.length-1][0],r=t==null?void 0:t[n];if(r&&"items"in r)return r;throw new Error("Parent collection not found")};function Jf(i,e,t){let n=t(e,i);if(typeof n=="symbol")return n;for(const r of["key","value"]){const s=e[r];if(s&&"items"in s){for(let a=0;a<s.items.length;++a){const o=Jf(Object.freeze(i.concat([[r,a]])),s.items[a],t);if(typeof o=="number")a=o-1;else{if(o===Zo)return Zo;o===Kf&&(s.items.splice(a,1),a-=1)}}typeof n=="function"&&r==="key"&&(n=n(e,i))}}return typeof n=="function"?n(e,i):n}const Xa="\uFEFF",ja="",$a="",hs="",wp=i=>!!i&&"items"in i,Tp=i=>!!i&&(i.type==="scalar"||i.type==="single-quoted-scalar"||i.type==="double-quoted-scalar"||i.type==="block-scalar");function Ap(i){switch(i){case Xa:return"<BOM>";case ja:return"<DOC>";case $a:return"<FLOW_END>";case hs:return"<SCALAR>";default:return JSON.stringify(i)}}function Zf(i){switch(i){case Xa:return"byte-order-mark";case ja:return"doc-mode";case $a:return"flow-error-end";case hs:return"scalar";case"---":return"doc-start";case"...":return"doc-end";case"":case`
`:case`\r
`:return"newline";case"-":return"seq-item-ind";case"?":return"explicit-key-ind";case":":return"map-value-ind";case"{":return"flow-map-start";case"}":return"flow-map-end";case"[":return"flow-seq-start";case"]":return"flow-seq-end";case",":return"comma"}switch(i[0]){case" ":case"	":return"space";case"#":return"comment";case"%":return"directive-line";case"*":return"alias";case"&":return"anchor";case"!":return"tag";case"'":return"single-quoted-scalar";case'"':return"double-quoted-scalar";case"|":case">":return"block-scalar-header"}return null}const Rp=Object.freeze(Object.defineProperty({__proto__:null,BOM:Xa,DOCUMENT:ja,FLOW_END:$a,SCALAR:hs,createScalarToken:xp,isCollection:wp,isScalar:Tp,prettyToken:Ap,resolveAsScalar:yp,setScalarValue:Sp,stringify:Ep,tokenType:Zf,visit:Wi},Symbol.toStringTag,{value:"Module"}));function Mn(i){switch(i){case void 0:case" ":case`
`:case"\r":case"	":return!0;default:return!1}}const Vc=new Set("0123456789ABCDEFabcdef"),Cp=new Set("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-#;/?:@&=+$_.!~*'()"),Fs=new Set(",[]{}"),Pp=new Set(` ,[]{}
\r	`),co=i=>!i||Pp.has(i);class Qf{constructor(){this.atEnd=!1,this.blockScalarIndent=-1,this.blockScalarKeep=!1,this.buffer="",this.flowKey=!1,this.flowLevel=0,this.indentNext=0,this.indentValue=0,this.lineEndPos=null,this.next=null,this.pos=0}*lex(e,t=!1){if(e){if(typeof e!="string")throw TypeError("source is not a string");this.buffer=this.buffer?this.buffer+e:e,this.lineEndPos=null}this.atEnd=!t;let n=this.next??"stream";for(;n&&(t||this.hasChars(1));)n=yield*this.parseNext(n)}atLineEnd(){let e=this.pos,t=this.buffer[e];for(;t===" "||t==="	";)t=this.buffer[++e];return!t||t==="#"||t===`
`?!0:t==="\r"?this.buffer[e+1]===`
`:!1}charAt(e){return this.buffer[this.pos+e]}continueScalar(e){let t=this.buffer[e];if(this.indentNext>0){let n=0;for(;t===" ";)t=this.buffer[++n+e];if(t==="\r"){const r=this.buffer[n+e+1];if(r===`
`||!r&&!this.atEnd)return e+n+1}return t===`
`||n>=this.indentNext||!t&&!this.atEnd?e+n:-1}if(t==="-"||t==="."){const n=this.buffer.substr(e,3);if((n==="---"||n==="...")&&Mn(this.buffer[e+3]))return-1}return e}getLine(){let e=this.lineEndPos;return(typeof e!="number"||e!==-1&&e<this.pos)&&(e=this.buffer.indexOf(`
`,this.pos),this.lineEndPos=e),e===-1?this.atEnd?this.buffer.substring(this.pos):null:(this.buffer[e-1]==="\r"&&(e-=1),this.buffer.substring(this.pos,e))}hasChars(e){return this.pos+e<=this.buffer.length}setNext(e){return this.buffer=this.buffer.substring(this.pos),this.pos=0,this.lineEndPos=null,this.next=e,null}peek(e){return this.buffer.substr(this.pos,e)}*parseNext(e){switch(e){case"stream":return yield*this.parseStream();case"line-start":return yield*this.parseLineStart();case"block-start":return yield*this.parseBlockStart();case"doc":return yield*this.parseDocument();case"flow":return yield*this.parseFlowCollection();case"quoted-scalar":return yield*this.parseQuotedScalar();case"block-scalar":return yield*this.parseBlockScalar();case"plain-scalar":return yield*this.parsePlainScalar()}}*parseStream(){let e=this.getLine();if(e===null)return this.setNext("stream");if(e[0]===Xa&&(yield*this.pushCount(1),e=e.substring(1)),e[0]==="%"){let t=e.length,n=e.indexOf("#");for(;n!==-1;){const s=e[n-1];if(s===" "||s==="	"){t=n-1;break}else n=e.indexOf("#",n+1)}for(;;){const s=e[t-1];if(s===" "||s==="	")t-=1;else break}const r=(yield*this.pushCount(t))+(yield*this.pushSpaces(!0));return yield*this.pushCount(e.length-r),this.pushNewline(),"stream"}if(this.atLineEnd()){const t=yield*this.pushSpaces(!0);return yield*this.pushCount(e.length-t),yield*this.pushNewline(),"stream"}return yield ja,yield*this.parseLineStart()}*parseLineStart(){const e=this.charAt(0);if(!e&&!this.atEnd)return this.setNext("line-start");if(e==="-"||e==="."){if(!this.atEnd&&!this.hasChars(4))return this.setNext("line-start");const t=this.peek(3);if((t==="---"||t==="...")&&Mn(this.charAt(3)))return yield*this.pushCount(3),this.indentValue=0,this.indentNext=0,t==="---"?"doc":"stream"}return this.indentValue=yield*this.pushSpaces(!1),this.indentNext>this.indentValue&&!Mn(this.charAt(1))&&(this.indentNext=this.indentValue),yield*this.parseBlockStart()}*parseBlockStart(){const[e,t]=this.peek(2);if(!t&&!this.atEnd)return this.setNext("block-start");if((e==="-"||e==="?"||e===":")&&Mn(t)){const n=(yield*this.pushCount(1))+(yield*this.pushSpaces(!0));return this.indentNext=this.indentValue+1,this.indentValue+=n,"block-start"}return"doc"}*parseDocument(){yield*this.pushSpaces(!0);const e=this.getLine();if(e===null)return this.setNext("doc");let t=yield*this.pushIndicators();switch(e[t]){case"#":yield*this.pushCount(e.length-t);case void 0:return yield*this.pushNewline(),yield*this.parseLineStart();case"{":case"[":return yield*this.pushCount(1),this.flowKey=!1,this.flowLevel=1,"flow";case"}":case"]":return yield*this.pushCount(1),"doc";case"*":return yield*this.pushUntil(co),"doc";case'"':case"'":return yield*this.parseQuotedScalar();case"|":case">":return t+=yield*this.parseBlockScalarHeader(),t+=yield*this.pushSpaces(!0),yield*this.pushCount(e.length-t),yield*this.pushNewline(),yield*this.parseBlockScalar();default:return yield*this.parsePlainScalar()}}*parseFlowCollection(){let e,t,n=-1;do e=yield*this.pushNewline(),e>0?(t=yield*this.pushSpaces(!1),this.indentValue=n=t):t=0,t+=yield*this.pushSpaces(!0);while(e+t>0);const r=this.getLine();if(r===null)return this.setNext("flow");if((n!==-1&&n<this.indentNext&&r[0]!=="#"||n===0&&(r.startsWith("---")||r.startsWith("..."))&&Mn(r[3]))&&!(n===this.indentNext-1&&this.flowLevel===1&&(r[0]==="]"||r[0]==="}")))return this.flowLevel=0,yield $a,yield*this.parseLineStart();let s=0;for(;r[s]===",";)s+=yield*this.pushCount(1),s+=yield*this.pushSpaces(!0),this.flowKey=!1;switch(s+=yield*this.pushIndicators(),r[s]){case void 0:return"flow";case"#":return yield*this.pushCount(r.length-s),"flow";case"{":case"[":return yield*this.pushCount(1),this.flowKey=!1,this.flowLevel+=1,"flow";case"}":case"]":return yield*this.pushCount(1),this.flowKey=!0,this.flowLevel-=1,this.flowLevel?"flow":"doc";case"*":return yield*this.pushUntil(co),"flow";case'"':case"'":return this.flowKey=!0,yield*this.parseQuotedScalar();case":":{const a=this.charAt(1);if(this.flowKey||Mn(a)||a===",")return this.flowKey=!1,yield*this.pushCount(1),yield*this.pushSpaces(!0),"flow"}default:return this.flowKey=!1,yield*this.parsePlainScalar()}}*parseQuotedScalar(){const e=this.charAt(0);let t=this.buffer.indexOf(e,this.pos+1);if(e==="'")for(;t!==-1&&this.buffer[t+1]==="'";)t=this.buffer.indexOf("'",t+2);else for(;t!==-1;){let s=0;for(;this.buffer[t-1-s]==="\\";)s+=1;if(s%2===0)break;t=this.buffer.indexOf('"',t+1)}const n=this.buffer.substring(0,t);let r=n.indexOf(`
`,this.pos);if(r!==-1){for(;r!==-1;){const s=this.continueScalar(r+1);if(s===-1)break;r=n.indexOf(`
`,s)}r!==-1&&(t=r-(n[r-1]==="\r"?2:1))}if(t===-1){if(!this.atEnd)return this.setNext("quoted-scalar");t=this.buffer.length}return yield*this.pushToIndex(t+1,!1),this.flowLevel?"flow":"doc"}*parseBlockScalarHeader(){this.blockScalarIndent=-1,this.blockScalarKeep=!1;let e=this.pos;for(;;){const t=this.buffer[++e];if(t==="+")this.blockScalarKeep=!0;else if(t>"0"&&t<="9")this.blockScalarIndent=Number(t)-1;else if(t!=="-")break}return yield*this.pushUntil(t=>Mn(t)||t==="#")}*parseBlockScalar(){let e=this.pos-1,t=0,n;e:for(let s=this.pos;n=this.buffer[s];++s)switch(n){case" ":t+=1;break;case`
`:e=s,t=0;break;case"\r":{const a=this.buffer[s+1];if(!a&&!this.atEnd)return this.setNext("block-scalar");if(a===`
`)break}default:break e}if(!n&&!this.atEnd)return this.setNext("block-scalar");if(t>=this.indentNext){this.blockScalarIndent===-1?this.indentNext=t:this.indentNext=this.blockScalarIndent+(this.indentNext===0?1:this.indentNext);do{const s=this.continueScalar(e+1);if(s===-1)break;e=this.buffer.indexOf(`
`,s)}while(e!==-1);if(e===-1){if(!this.atEnd)return this.setNext("block-scalar");e=this.buffer.length}}let r=e+1;for(n=this.buffer[r];n===" ";)n=this.buffer[++r];if(n==="	"){for(;n==="	"||n===" "||n==="\r"||n===`
`;)n=this.buffer[++r];e=r-1}else if(!this.blockScalarKeep)do{let s=e-1,a=this.buffer[s];a==="\r"&&(a=this.buffer[--s]);const o=s;for(;a===" ";)a=this.buffer[--s];if(a===`
`&&s>=this.pos&&s+1+t>o)e=s;else break}while(!0);return yield hs,yield*this.pushToIndex(e+1,!0),yield*this.parseLineStart()}*parsePlainScalar(){const e=this.flowLevel>0;let t=this.pos-1,n=this.pos-1,r;for(;r=this.buffer[++n];)if(r===":"){const s=this.buffer[n+1];if(Mn(s)||e&&Fs.has(s))break;t=n}else if(Mn(r)){let s=this.buffer[n+1];if(r==="\r"&&(s===`
`?(n+=1,r=`
`,s=this.buffer[n+1]):t=n),s==="#"||e&&Fs.has(s))break;if(r===`
`){const a=this.continueScalar(n+1);if(a===-1)break;n=Math.max(n,a-2)}}else{if(e&&Fs.has(r))break;t=n}return!r&&!this.atEnd?this.setNext("plain-scalar"):(yield hs,yield*this.pushToIndex(t+1,!0),e?"flow":"doc")}*pushCount(e){return e>0?(yield this.buffer.substr(this.pos,e),this.pos+=e,e):0}*pushToIndex(e,t){const n=this.buffer.slice(this.pos,e);return n?(yield n,this.pos+=n.length,n.length):(t&&(yield""),0)}*pushIndicators(){let e=0;e:for(;;){switch(this.charAt(0)){case"!":e+=yield*this.pushTag(),e+=yield*this.pushSpaces(!0);continue e;case"&":e+=yield*this.pushUntil(co),e+=yield*this.pushSpaces(!0);continue e;case"-":case"?":case":":{const t=this.flowLevel>0,n=this.charAt(1);if(Mn(n)||t&&Fs.has(n)){t?this.flowKey&&(this.flowKey=!1):this.indentNext=this.indentValue+1,e+=yield*this.pushCount(1),e+=yield*this.pushSpaces(!0);continue e}}}break e}return e}*pushTag(){if(this.charAt(1)==="<"){let e=this.pos+2,t=this.buffer[e];for(;!Mn(t)&&t!==">";)t=this.buffer[++e];return yield*this.pushToIndex(t===">"?e+1:e,!1)}else{let e=this.pos+1,t=this.buffer[e];for(;t;)if(Cp.has(t))t=this.buffer[++e];else if(t==="%"&&Vc.has(this.buffer[e+1])&&Vc.has(this.buffer[e+2]))t=this.buffer[e+=3];else break;return yield*this.pushToIndex(e,!1)}}*pushNewline(){const e=this.buffer[this.pos];return e===`
`?yield*this.pushCount(1):e==="\r"&&this.charAt(1)===`
`?yield*this.pushCount(2):0}*pushSpaces(e){let t=this.pos-1,n;do n=this.buffer[++t];while(n===" "||e&&n==="	");const r=t-this.pos;return r>0&&(yield this.buffer.substr(this.pos,r),this.pos=t),r}*pushUntil(e){let t=this.pos,n=this.buffer[t];for(;!e(n);)n=this.buffer[++t];return yield*this.pushToIndex(t,!1)}}class eh{constructor(){this.lineStarts=[],this.addNewLine=e=>this.lineStarts.push(e),this.linePos=e=>{let t=0,n=this.lineStarts.length;for(;t<n;){const s=t+n>>1;this.lineStarts[s]<e?t=s+1:n=s}if(this.lineStarts[t]===e)return{line:t+1,col:1};if(t===0)return{line:0,col:e};const r=this.lineStarts[t-1];return{line:t,col:e-r+1}}}}function gi(i,e){for(let t=0;t<i.length;++t)if(i[t].type===e)return!0;return!1}function Hc(i){for(let e=0;e<i.length;++e)switch(i[e].type){case"space":case"comment":case"newline":break;default:return e}return-1}function th(i){switch(i==null?void 0:i.type){case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":case"flow-collection":return!0;default:return!1}}function ks(i){switch(i.type){case"document":return i.start;case"block-map":{const e=i.items[i.items.length-1];return e.sep??e.start}case"block-seq":return i.items[i.items.length-1].start;default:return[]}}function tr(i){var t;if(i.length===0)return[];let e=i.length;e:for(;--e>=0;)switch(i[e].type){case"doc-start":case"explicit-key-ind":case"map-value-ind":case"seq-item-ind":case"newline":break e}for(;((t=i[++e])==null?void 0:t.type)==="space";);return i.splice(e,i.length)}function Ra(i,e){if(e.length<1e5)Array.prototype.push.apply(i,e);else for(let t=0;t<e.length;++t)i.push(e[t])}function Gc(i){if(i.start.type==="flow-seq-start")for(const e of i.items)e.sep&&!e.value&&!gi(e.start,"explicit-key-ind")&&!gi(e.sep,"map-value-ind")&&(e.key&&(e.value=e.key),delete e.key,th(e.value)?e.value.end?Ra(e.value.end,e.sep):e.value.end=e.sep:Ra(e.start,e.sep),delete e.sep)}class rc{constructor(e){this.atNewLine=!0,this.atScalar=!1,this.indent=0,this.offset=0,this.onKeyLine=!1,this.stack=[],this.source="",this.type="",this.lexer=new Qf,this.onNewLine=e}*parse(e,t=!1){this.onNewLine&&this.offset===0&&this.onNewLine(0);for(const n of this.lexer.lex(e,t))yield*this.next(n);t||(yield*this.end())}*next(e){if(this.source=e,this.atScalar){this.atScalar=!1,yield*this.step(),this.offset+=e.length;return}const t=Zf(e);if(t)if(t==="scalar")this.atNewLine=!1,this.atScalar=!0,this.type="scalar";else{switch(this.type=t,yield*this.step(),t){case"newline":this.atNewLine=!0,this.indent=0,this.onNewLine&&this.onNewLine(this.offset+e.length);break;case"space":this.atNewLine&&e[0]===" "&&(this.indent+=e.length);break;case"explicit-key-ind":case"map-value-ind":case"seq-item-ind":this.atNewLine&&(this.indent+=e.length);break;case"doc-mode":case"flow-error-end":return;default:this.atNewLine=!1}this.offset+=e.length}else{const n=`Not a YAML token: ${e}`;yield*this.pop({type:"error",offset:this.offset,message:n,source:e}),this.offset+=e.length}}*end(){for(;this.stack.length>0;)yield*this.pop()}get sourceToken(){return{type:this.type,offset:this.offset,indent:this.indent,source:this.source}}*step(){const e=this.peek(1);if(this.type==="doc-end"&&(e==null?void 0:e.type)!=="doc-end"){for(;this.stack.length>0;)yield*this.pop();this.stack.push({type:"doc-end",offset:this.offset,source:this.source});return}if(!e)return yield*this.stream();switch(e.type){case"document":return yield*this.document(e);case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":return yield*this.scalar(e);case"block-scalar":return yield*this.blockScalar(e);case"block-map":return yield*this.blockMap(e);case"block-seq":return yield*this.blockSequence(e);case"flow-collection":return yield*this.flowCollection(e);case"doc-end":return yield*this.documentEnd(e)}yield*this.pop()}peek(e){return this.stack[this.stack.length-e]}*pop(e){const t=e??this.stack.pop();if(!t)yield{type:"error",offset:this.offset,source:"",message:"Tried to pop an empty stack"};else if(this.stack.length===0)yield t;else{const n=this.peek(1);switch(t.type==="block-scalar"?t.indent="indent"in n?n.indent:0:t.type==="flow-collection"&&n.type==="document"&&(t.indent=0),t.type==="flow-collection"&&Gc(t),n.type){case"document":n.value=t;break;case"block-scalar":n.props.push(t);break;case"block-map":{const r=n.items[n.items.length-1];if(r.value){n.items.push({start:[],key:t,sep:[]}),this.onKeyLine=!0;return}else if(r.sep)r.value=t;else{Object.assign(r,{key:t,sep:[]}),this.onKeyLine=!r.explicitKey;return}break}case"block-seq":{const r=n.items[n.items.length-1];r.value?n.items.push({start:[],value:t}):r.value=t;break}case"flow-collection":{const r=n.items[n.items.length-1];!r||r.value?n.items.push({start:[],key:t,sep:[]}):r.sep?r.value=t:Object.assign(r,{key:t,sep:[]});return}default:yield*this.pop(),yield*this.pop(t)}if((n.type==="document"||n.type==="block-map"||n.type==="block-seq")&&(t.type==="block-map"||t.type==="block-seq")){const r=t.items[t.items.length-1];r&&!r.sep&&!r.value&&r.start.length>0&&Hc(r.start)===-1&&(t.indent===0||r.start.every(s=>s.type!=="comment"||s.indent<t.indent))&&(n.type==="document"?n.end=r.start:n.items.push({start:r.start}),t.items.splice(-1,1))}}}*stream(){switch(this.type){case"directive-line":yield{type:"directive",offset:this.offset,source:this.source};return;case"byte-order-mark":case"space":case"comment":case"newline":yield this.sourceToken;return;case"doc-mode":case"doc-start":{const e={type:"document",offset:this.offset,start:[]};this.type==="doc-start"&&e.start.push(this.sourceToken),this.stack.push(e);return}}yield{type:"error",offset:this.offset,message:`Unexpected ${this.type} token in YAML stream`,source:this.source}}*document(e){if(e.value)return yield*this.lineEnd(e);switch(this.type){case"doc-start":{Hc(e.start)!==-1?(yield*this.pop(),yield*this.step()):e.start.push(this.sourceToken);return}case"anchor":case"tag":case"space":case"comment":case"newline":e.start.push(this.sourceToken);return}const t=this.startBlockValue(e);t?this.stack.push(t):yield{type:"error",offset:this.offset,message:`Unexpected ${this.type} token in YAML document`,source:this.source}}*scalar(e){if(this.type==="map-value-ind"){const t=ks(this.peek(2)),n=tr(t);let r;e.end?(r=e.end,r.push(this.sourceToken),delete e.end):r=[this.sourceToken];const s={type:"block-map",offset:e.offset,indent:e.indent,items:[{start:n,key:e,sep:r}]};this.onKeyLine=!0,this.stack[this.stack.length-1]=s}else yield*this.lineEnd(e)}*blockScalar(e){switch(this.type){case"space":case"comment":case"newline":e.props.push(this.sourceToken);return;case"scalar":if(e.source=this.source,this.atNewLine=!0,this.indent=0,this.onNewLine){let t=this.source.indexOf(`
`)+1;for(;t!==0;)this.onNewLine(this.offset+t),t=this.source.indexOf(`
`,t)+1}yield*this.pop();break;default:yield*this.pop(),yield*this.step()}}*blockMap(e){var n;const t=e.items[e.items.length-1];switch(this.type){case"newline":if(this.onKeyLine=!1,t.value){const r="end"in t.value?t.value.end:void 0,s=Array.isArray(r)?r[r.length-1]:void 0;(s==null?void 0:s.type)==="comment"?r==null||r.push(this.sourceToken):e.items.push({start:[this.sourceToken]})}else t.sep?t.sep.push(this.sourceToken):t.start.push(this.sourceToken);return;case"space":case"comment":if(t.value)e.items.push({start:[this.sourceToken]});else if(t.sep)t.sep.push(this.sourceToken);else{if(this.atIndentedComment(t.start,e.indent)){const r=e.items[e.items.length-2],s=(n=r==null?void 0:r.value)==null?void 0:n.end;if(Array.isArray(s)){Ra(s,t.start),s.push(this.sourceToken),e.items.pop();return}}t.start.push(this.sourceToken)}return}if(this.indent>=e.indent){const r=!this.onKeyLine&&this.indent===e.indent,s=r&&(t.sep||t.explicitKey)&&this.type!=="seq-item-ind";let a=[];if(s&&t.sep&&!t.value){const o=[];for(let c=0;c<t.sep.length;++c){const l=t.sep[c];switch(l.type){case"newline":o.push(c);break;case"space":break;case"comment":l.indent>e.indent&&(o.length=0);break;default:o.length=0}}o.length>=2&&(a=t.sep.splice(o[1]))}switch(this.type){case"anchor":case"tag":s||t.value?(a.push(this.sourceToken),e.items.push({start:a}),this.onKeyLine=!0):t.sep?t.sep.push(this.sourceToken):t.start.push(this.sourceToken);return;case"explicit-key-ind":!t.sep&&!t.explicitKey?(t.start.push(this.sourceToken),t.explicitKey=!0):s||t.value?(a.push(this.sourceToken),e.items.push({start:a,explicitKey:!0})):this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:[this.sourceToken],explicitKey:!0}]}),this.onKeyLine=!0;return;case"map-value-ind":if(t.explicitKey)if(t.sep)if(t.value)e.items.push({start:[],key:null,sep:[this.sourceToken]});else if(gi(t.sep,"map-value-ind"))this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:a,key:null,sep:[this.sourceToken]}]});else if(th(t.key)&&!gi(t.sep,"newline")){const o=tr(t.start),c=t.key,l=t.sep;l.push(this.sourceToken),delete t.key,delete t.sep,this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:o,key:c,sep:l}]})}else a.length>0?t.sep=t.sep.concat(a,this.sourceToken):t.sep.push(this.sourceToken);else if(gi(t.start,"newline"))Object.assign(t,{key:null,sep:[this.sourceToken]});else{const o=tr(t.start);this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:o,key:null,sep:[this.sourceToken]}]})}else t.sep?t.value||s?e.items.push({start:a,key:null,sep:[this.sourceToken]}):gi(t.sep,"map-value-ind")?this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:[],key:null,sep:[this.sourceToken]}]}):t.sep.push(this.sourceToken):Object.assign(t,{key:null,sep:[this.sourceToken]});this.onKeyLine=!0;return;case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":{const o=this.flowScalar(this.type);s||t.value?(e.items.push({start:a,key:o,sep:[]}),this.onKeyLine=!0):t.sep?this.stack.push(o):(Object.assign(t,{key:o,sep:[]}),this.onKeyLine=!0);return}default:{const o=this.startBlockValue(e);if(o){if(o.type==="block-seq"){if(!t.explicitKey&&t.sep&&!gi(t.sep,"newline")){yield*this.pop({type:"error",offset:this.offset,message:"Unexpected block-seq-ind on same line with key",source:this.source});return}}else r&&e.items.push({start:a});this.stack.push(o);return}}}}yield*this.pop(),yield*this.step()}*blockSequence(e){var n;const t=e.items[e.items.length-1];switch(this.type){case"newline":if(t.value){const r="end"in t.value?t.value.end:void 0,s=Array.isArray(r)?r[r.length-1]:void 0;(s==null?void 0:s.type)==="comment"?r==null||r.push(this.sourceToken):e.items.push({start:[this.sourceToken]})}else t.start.push(this.sourceToken);return;case"space":case"comment":if(t.value)e.items.push({start:[this.sourceToken]});else{if(this.atIndentedComment(t.start,e.indent)){const r=e.items[e.items.length-2],s=(n=r==null?void 0:r.value)==null?void 0:n.end;if(Array.isArray(s)){Ra(s,t.start),s.push(this.sourceToken),e.items.pop();return}}t.start.push(this.sourceToken)}return;case"anchor":case"tag":if(t.value||this.indent<=e.indent)break;t.start.push(this.sourceToken);return;case"seq-item-ind":if(this.indent!==e.indent)break;t.value||gi(t.start,"seq-item-ind")?e.items.push({start:[this.sourceToken]}):t.start.push(this.sourceToken);return}if(this.indent>e.indent){const r=this.startBlockValue(e);if(r){this.stack.push(r);return}}yield*this.pop(),yield*this.step()}*flowCollection(e){const t=e.items[e.items.length-1];if(this.type==="flow-error-end"){let n;do yield*this.pop(),n=this.peek(1);while((n==null?void 0:n.type)==="flow-collection")}else if(e.end.length===0){switch(this.type){case"comma":case"explicit-key-ind":!t||t.sep?e.items.push({start:[this.sourceToken]}):t.start.push(this.sourceToken);return;case"map-value-ind":!t||t.value?e.items.push({start:[],key:null,sep:[this.sourceToken]}):t.sep?t.sep.push(this.sourceToken):Object.assign(t,{key:null,sep:[this.sourceToken]});return;case"space":case"comment":case"newline":case"anchor":case"tag":!t||t.value?e.items.push({start:[this.sourceToken]}):t.sep?t.sep.push(this.sourceToken):t.start.push(this.sourceToken);return;case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":{const r=this.flowScalar(this.type);!t||t.value?e.items.push({start:[],key:r,sep:[]}):t.sep?this.stack.push(r):Object.assign(t,{key:r,sep:[]});return}case"flow-map-end":case"flow-seq-end":e.end.push(this.sourceToken);return}const n=this.startBlockValue(e);n?this.stack.push(n):(yield*this.pop(),yield*this.step())}else{const n=this.peek(2);if(n.type==="block-map"&&(this.type==="map-value-ind"&&n.indent===e.indent||this.type==="newline"&&!n.items[n.items.length-1].sep))yield*this.pop(),yield*this.step();else if(this.type==="map-value-ind"&&n.type!=="flow-collection"){const r=ks(n),s=tr(r);Gc(e);const a=e.end.splice(1,e.end.length);a.push(this.sourceToken);const o={type:"block-map",offset:e.offset,indent:e.indent,items:[{start:s,key:e,sep:a}]};this.onKeyLine=!0,this.stack[this.stack.length-1]=o}else yield*this.lineEnd(e)}}flowScalar(e){if(this.onNewLine){let t=this.source.indexOf(`
`)+1;for(;t!==0;)this.onNewLine(this.offset+t),t=this.source.indexOf(`
`,t)+1}return{type:e,offset:this.offset,indent:this.indent,source:this.source}}startBlockValue(e){switch(this.type){case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":return this.flowScalar(this.type);case"block-scalar-header":return{type:"block-scalar",offset:this.offset,indent:this.indent,props:[this.sourceToken],source:""};case"flow-map-start":case"flow-seq-start":return{type:"flow-collection",offset:this.offset,indent:this.indent,start:this.sourceToken,items:[],end:[]};case"seq-item-ind":return{type:"block-seq",offset:this.offset,indent:this.indent,items:[{start:[this.sourceToken]}]};case"explicit-key-ind":{this.onKeyLine=!0;const t=ks(e),n=tr(t);return n.push(this.sourceToken),{type:"block-map",offset:this.offset,indent:this.indent,items:[{start:n,explicitKey:!0}]}}case"map-value-ind":{this.onKeyLine=!0;const t=ks(e),n=tr(t);return{type:"block-map",offset:this.offset,indent:this.indent,items:[{start:n,key:null,sep:[this.sourceToken]}]}}}return null}atIndentedComment(e,t){return this.type!=="comment"||this.indent<=t?!1:e.every(n=>n.type==="newline"||n.type==="space")}*documentEnd(e){this.type!=="doc-mode"&&(e.end?e.end.push(this.sourceToken):e.end=[this.sourceToken],this.type==="newline"&&(yield*this.pop()))}*lineEnd(e){switch(this.type){case"comma":case"doc-start":case"doc-end":case"flow-seq-end":case"flow-map-end":case"map-value-ind":yield*this.pop(),yield*this.step();break;case"newline":this.onKeyLine=!1;case"space":case"comment":default:e.end?e.end.push(this.sourceToken):e.end=[this.sourceToken],this.type==="newline"&&(yield*this.pop())}}}function nh(i){const e=i.prettyErrors!==!1;return{lineCounter:i.lineCounter||e&&new eh||null,prettyErrors:e}}function Lp(i,e={}){const{lineCounter:t,prettyErrors:n}=nh(e),r=new rc(t==null?void 0:t.addNewLine),s=new ic(e),a=Array.from(s.compose(r.parse(i)));if(n&&t)for(const o of a)o.errors.forEach(Ta(i,t)),o.warnings.forEach(Ta(i,t));return a.length>0?a:Object.assign([],{empty:!0},s.streamInfo())}function ih(i,e={}){const{lineCounter:t,prettyErrors:n}=nh(e),r=new rc(t==null?void 0:t.addNewLine),s=new ic(e);let a=null;for(const o of s.compose(r.parse(i),!0,i.length))if(!a)a=o;else if(a.options.logLevel!=="silent"){a.errors.push(new Vi(o.range.slice(0,2),"MULTIPLE_DOCS","Source contains multiple documents; please use YAML.parseAllDocuments()"));break}return n&&t&&(a.errors.forEach(Ta(i,t)),a.warnings.forEach(Ta(i,t))),a}function Ip(i,e,t){let n;typeof e=="function"?n=e:t===void 0&&e&&typeof e=="object"&&(t=e);const r=ih(i,t);if(!r)return null;if(r.warnings.forEach(s=>bf(r.options.logLevel,s)),r.errors.length>0){if(r.options.logLevel!=="silent")throw r.errors[0];r.errors=[]}return r.toJS(Object.assign({reviver:n},t))}function Dp(i,e,t){let n=null;if(typeof e=="function"||Array.isArray(e)?n=e:t===void 0&&e&&(t=e),typeof t=="string"&&(t=t.length),typeof t=="number"){const r=Math.round(t);t=r<1?void 0:r>8?{indent:8}:{indent:r}}if(i===void 0){const{keepUndefined:r}=t??e??{};if(!r)return}return ji(i)&&!n?i.toString(t):new Gr(i,n,t).toString(t)}const ma=Object.freeze(Object.defineProperty({__proto__:null,Alias:Oa,CST:Rp,Composer:ic,Document:Gr,Lexer:Qf,LineCounter:eh,Pair:Kt,Parser:rc,Scalar:Je,Schema:qa,YAMLError:tc,YAMLMap:dn,YAMLParseError:Vi,YAMLSeq:xi,YAMLWarning:Hf,isAlias:Xi,isCollection:wt,isDocument:ji,isMap:Br,isNode:Tt,isPair:Et,isScalar:yt,isSeq:zr,parse:Ip,parseAllDocuments:Lp,parseDocument:ih,stringify:Dp,visit:$i,visitAsync:Ua},Symbol.toStringTag,{value:"Module"})),Np=Object.assign({"/world/world.config.yaml":Sd}),Up=Object.assign({"/world/places/main/config.yaml":bd}),Op=Object.assign({"/world/places/main/cells/objects.scene":Ed,"/world/places/main/cells/x0z0.scene":Md}),Fp=Object.assign({"/world/templates/camera.js":()=>De(()=>import("./camera-K4zneVSs.js"),[]),"/world/templates/player.js":()=>De(()=>import("./player-BYsER5Iw.js"),[]),"/world/templates/sprite.js":()=>De(()=>import("./sprite-DoGeqWOJ.js"),[])});function kp(i,e){const t=ma.parse(i)??{};return Object.entries(t).map(([n,r])=>{var s;return{...r,id:(r==null?void 0:r.id)??((s=r==null?void 0:r.overrides)==null?void 0:s.id)??n,cell:e}})}async function sc(i){const[e,t]=String(i).split("#"),n=Fp["/world/"+e];if(!n)throw new Error(`no template ${e}`);const r=await n();return r[t]??r.default??{}}const Wc=i=>i&&typeof i=="object"&&!Array.isArray(i);function Qo(i,e){const t={...i};for(const[n,r]of Object.entries(e??{}))t[n]=Wc(r)&&Wc(i==null?void 0:i[n])?Qo(i[n],r):r;return t}async function Bp(i){if(!i.template)return i;const{template:e,overrides:t,...n}=i;return Qo(Qo(await sc(e),t),n)}const zp=Object.assign({"/web/overrides.yaml":wd});function Vp(i,e){if(!e)return{...i,sounds:{},render:{}};const t=new Set(e.remove??[]),n=i.placements.filter(s=>!t.has(s.id));for(const[s,a]of Object.entries(e.add??{}))n.push({...a,id:s,cell:"web"});const r=e.terrain?{...i.place,terrain:{...i.place.terrain,...e.terrain}}:i.place;return{...i,place:r,placements:n,sounds:e.sounds??{},render:e.render??{}}}async function Hp(i,{web:e=!0}={}){const t=ma.parse(Object.values(Np)[0]??"")??{},n=i??t.defaultPlace??"main",r=Up[`/world/places/${n}/config.yaml`];if(r==null)throw new Error(`no place ${n}`);const s=[];for(const[l,h]of Object.entries(Op))l.startsWith(`/world/places/${n}/cells/`)&&s.push(...kp(h,l.split("/").pop().replace(/\.scene$/,"")));const a=await Promise.all(s.map(Bp)),o={config:t,name:n,place:ma.parse(r)??{},placements:a},c=Object.values(zp)[0];return Vp(o,e&&c?ma.parse(c):null)}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ac="172",Gp=0,qc=1,Wp=2,rh=1,qp=2,Kn=3,Si=0,on=1,Jn=2,yi=0,On=1,Ca=2,Pa=3,La=4,Xp=5,Fi=100,jp=101,$p=102,Yp=103,Kp=104,Jp=200,Zp=201,Qp=202,em=203,el=204,tl=205,tm=206,nm=207,im=208,rm=209,sm=210,am=211,om=212,lm=213,cm=214,nl=0,il=1,rl=2,Lr=3,sl=4,al=5,ol=6,ll=7,sh=0,um=1,fm=2,ri=0,hm=1,dm=2,pm=3,mm=4,gm=5,_m=6,vm=7,ah=300,Ir=301,Dr=302,cl=303,ul=304,Ya=306,ds=1e3,Qn=1001,fl=1002,Jt=1003,ym=1004,Bs=1005,pn=1006,uo=1007,ei=1008,Bn=1009,oh=1010,lh=1011,ps=1012,oc=1013,qi=1014,ti=1015,Ss=1016,lc=1017,cc=1018,Nr=1020,ch=35902,uh=1021,fh=1022,Pn=1023,hh=1024,dh=1025,Tr=1026,Ur=1027,ph=1028,uc=1029,mh=1030,fc=1031,hc=1033,ga=33776,_a=33777,va=33778,ya=33779,hl=35840,dl=35841,pl=35842,ml=35843,gl=36196,_l=37492,vl=37496,yl=37808,xl=37809,Sl=37810,bl=37811,El=37812,Ml=37813,wl=37814,Tl=37815,Al=37816,Rl=37817,Cl=37818,Pl=37819,Ll=37820,Il=37821,xa=36492,Dl=36494,Nl=36495,gh=36283,Ul=36284,Ol=36285,Fl=36286,xm=3200,Sm=3201,bm=0,Em=1,_i="",Wt="srgb",Or="srgb-linear",Ia="linear",_t="srgb",nr=7680,Xc=519,Mm=512,wm=513,Tm=514,_h=515,Am=516,Rm=517,Cm=518,Pm=519,jc=35044,$c="300 es",ni=2e3,Da=2001;class Wr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const $t=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],fo=Math.PI/180,kl=180/Math.PI;function bs(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return($t[i&255]+$t[i>>8&255]+$t[i>>16&255]+$t[i>>24&255]+"-"+$t[e&255]+$t[e>>8&255]+"-"+$t[e>>16&15|64]+$t[e>>24&255]+"-"+$t[t&63|128]+$t[t>>8&255]+"-"+$t[t>>16&255]+$t[t>>24&255]+$t[n&255]+$t[n>>8&255]+$t[n>>16&255]+$t[n>>24&255]).toLowerCase()}function lt(i,e,t){return Math.max(e,Math.min(t,i))}function Lm(i,e){return(i%e+e)%e}function ho(i,e,t){return(1-t)*i+t*e}function es(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function rn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class vt{constructor(e=0,t=0){vt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=lt(this.x,e.x,t.x),this.y=lt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=lt(this.x,e,t),this.y=lt(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(lt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(lt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Qe{constructor(e,t,n,r,s,a,o,c,l){Qe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,c,l)}set(e,t,n,r,s,a,o,c,l){const h=this.elements;return h[0]=e,h[1]=r,h[2]=o,h[3]=t,h[4]=s,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],f=n[7],d=n[2],m=n[5],x=n[8],y=r[0],_=r[3],g=r[6],R=r[1],A=r[4],b=r[7],L=r[2],I=r[5],C=r[8];return s[0]=a*y+o*R+c*L,s[3]=a*_+o*A+c*I,s[6]=a*g+o*b+c*C,s[1]=l*y+h*R+f*L,s[4]=l*_+h*A+f*I,s[7]=l*g+h*b+f*C,s[2]=d*y+m*R+x*L,s[5]=d*_+m*A+x*I,s[8]=d*g+m*b+x*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-n*s*h+n*o*c+r*s*l-r*a*c}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],f=h*a-o*l,d=o*c-h*s,m=l*s-a*c,x=t*f+n*d+r*m;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/x;return e[0]=f*y,e[1]=(r*l-h*n)*y,e[2]=(o*n-r*a)*y,e[3]=d*y,e[4]=(h*t-r*c)*y,e[5]=(r*s-o*t)*y,e[6]=m*y,e[7]=(n*c-l*t)*y,e[8]=(a*t-n*s)*y,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,o){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-r*l,r*c,-r*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(po.makeScale(e,t)),this}rotate(e){return this.premultiply(po.makeRotation(-e)),this}translate(e,t){return this.premultiply(po.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const po=new Qe;function vh(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function ms(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Im(){const i=ms("canvas");return i.style.display="block",i}const Yc={};function _r(i){i in Yc||(Yc[i]=!0,console.warn(i))}function Dm(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}function Nm(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Um(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Kc=new Qe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Jc=new Qe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Om(){const i={enabled:!0,workingColorSpace:Or,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===_t&&(r.r=si(r.r),r.g=si(r.g),r.b=si(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===_t&&(r.r=Ar(r.r),r.g=Ar(r.g),r.b=Ar(r.b))),r},fromWorkingColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},toWorkingColorSpace:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===_i?Ia:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Or]:{primaries:e,whitePoint:n,transfer:Ia,toXYZ:Kc,fromXYZ:Jc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Wt},outputColorSpaceConfig:{drawingBufferColorSpace:Wt}},[Wt]:{primaries:e,whitePoint:n,transfer:_t,toXYZ:Kc,fromXYZ:Jc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Wt}}}),i}const ft=Om();function si(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ar(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let ir;class Fm{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ir===void 0&&(ir=ms("canvas")),ir.width=e.width,ir.height=e.height;const n=ir.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ir}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ms("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=si(s[a]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(si(t[n]/255)*255):t[n]=si(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let km=0;class yh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:km++}),this.uuid=bs(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(mo(r[a].image)):s.push(mo(r[a]))}else s=mo(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function mo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Fm.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Bm=0;class Zt extends Wr{constructor(e=Zt.DEFAULT_IMAGE,t=Zt.DEFAULT_MAPPING,n=Qn,r=Qn,s=pn,a=ei,o=Pn,c=Bn,l=Zt.DEFAULT_ANISOTROPY,h=_i){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Bm++}),this.uuid=bs(),this.name="",this.source=new yh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new vt(0,0),this.repeat=new vt(1,1),this.center=new vt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ah)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ds:e.x=e.x-Math.floor(e.x);break;case Qn:e.x=e.x<0?0:1;break;case fl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ds:e.y=e.y-Math.floor(e.y);break;case Qn:e.y=e.y<0?0:1;break;case fl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Zt.DEFAULT_IMAGE=null;Zt.DEFAULT_MAPPING=ah;Zt.DEFAULT_ANISOTROPY=1;class Rt{constructor(e=0,t=0,n=0,r=1){Rt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const c=e.elements,l=c[0],h=c[4],f=c[8],d=c[1],m=c[5],x=c[9],y=c[2],_=c[6],g=c[10];if(Math.abs(h-d)<.01&&Math.abs(f-y)<.01&&Math.abs(x-_)<.01){if(Math.abs(h+d)<.1&&Math.abs(f+y)<.1&&Math.abs(x+_)<.1&&Math.abs(l+m+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const A=(l+1)/2,b=(m+1)/2,L=(g+1)/2,I=(h+d)/4,C=(f+y)/4,D=(x+_)/4;return A>b&&A>L?A<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(A),r=I/n,s=C/n):b>L?b<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(b),n=I/r,s=D/r):L<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(L),n=C/s,r=D/s),this.set(n,r,s,t),this}let R=Math.sqrt((_-x)*(_-x)+(f-y)*(f-y)+(d-h)*(d-h));return Math.abs(R)<.001&&(R=1),this.x=(_-x)/R,this.y=(f-y)/R,this.z=(d-h)/R,this.w=Math.acos((l+m+g-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=lt(this.x,e.x,t.x),this.y=lt(this.y,e.y,t.y),this.z=lt(this.z,e.z,t.z),this.w=lt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=lt(this.x,e,t),this.y=lt(this.y,e,t),this.z=lt(this.z,e,t),this.w=lt(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(lt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class zm extends Wr{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Rt(0,0,e,t),this.scissorTest=!1,this.viewport=new Rt(0,0,e,t);const r={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:pn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new Zt(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const t=Object.assign({},e.texture.image);return this.texture.source=new yh(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class bi extends zm{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class xh extends Zt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Jt,this.minFilter=Jt,this.wrapR=Qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Vm extends Zt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Jt,this.minFilter=Jt,this.wrapR=Qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Es{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,o){let c=n[r+0],l=n[r+1],h=n[r+2],f=n[r+3];const d=s[a+0],m=s[a+1],x=s[a+2],y=s[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=f;return}if(o===1){e[t+0]=d,e[t+1]=m,e[t+2]=x,e[t+3]=y;return}if(f!==y||c!==d||l!==m||h!==x){let _=1-o;const g=c*d+l*m+h*x+f*y,R=g>=0?1:-1,A=1-g*g;if(A>Number.EPSILON){const L=Math.sqrt(A),I=Math.atan2(L,g*R);_=Math.sin(_*I)/L,o=Math.sin(o*I)/L}const b=o*R;if(c=c*_+d*b,l=l*_+m*b,h=h*_+x*b,f=f*_+y*b,_===1-o){const L=1/Math.sqrt(c*c+l*l+h*h+f*f);c*=L,l*=L,h*=L,f*=L}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,r,s,a){const o=n[r],c=n[r+1],l=n[r+2],h=n[r+3],f=s[a],d=s[a+1],m=s[a+2],x=s[a+3];return e[t]=o*x+h*f+c*m-l*d,e[t+1]=c*x+h*d+l*f-o*m,e[t+2]=l*x+h*m+o*d-c*f,e[t+3]=h*x-o*f-c*d-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(r/2),f=o(s/2),d=c(n/2),m=c(r/2),x=c(s/2);switch(a){case"XYZ":this._x=d*h*f+l*m*x,this._y=l*m*f-d*h*x,this._z=l*h*x+d*m*f,this._w=l*h*f-d*m*x;break;case"YXZ":this._x=d*h*f+l*m*x,this._y=l*m*f-d*h*x,this._z=l*h*x-d*m*f,this._w=l*h*f+d*m*x;break;case"ZXY":this._x=d*h*f-l*m*x,this._y=l*m*f+d*h*x,this._z=l*h*x+d*m*f,this._w=l*h*f-d*m*x;break;case"ZYX":this._x=d*h*f-l*m*x,this._y=l*m*f+d*h*x,this._z=l*h*x-d*m*f,this._w=l*h*f+d*m*x;break;case"YZX":this._x=d*h*f+l*m*x,this._y=l*m*f+d*h*x,this._z=l*h*x-d*m*f,this._w=l*h*f-d*m*x;break;case"XZY":this._x=d*h*f-l*m*x,this._y=l*m*f-d*h*x,this._z=l*h*x+d*m*f,this._w=l*h*f+d*m*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],f=t[10],d=n+o+f;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(h-c)*m,this._y=(s-l)*m,this._z=(a-r)*m}else if(n>o&&n>f){const m=2*Math.sqrt(1+n-o-f);this._w=(h-c)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+l)/m}else if(o>f){const m=2*Math.sqrt(1+o-n-f);this._w=(s-l)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(c+h)/m}else{const m=2*Math.sqrt(1+f-n-o);this._w=(a-r)/m,this._x=(s+l)/m,this._y=(c+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(lt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+a*o+r*l-s*c,this._y=r*h+a*c+s*o-n*l,this._z=s*h+a*l+n*c-r*o,this._w=a*h-n*o-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+n*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=r,this._z=s,this;const c=1-o*o;if(c<=Number.EPSILON){const m=1-t;return this._w=m*a+t*this._w,this._x=m*n+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,o),f=Math.sin((1-t)*h)/l,d=Math.sin(t*h)/l;return this._w=a*f+this._w*d,this._x=n*f+this._x*d,this._y=r*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Y{constructor(e=0,t=0,n=0){Y.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Zc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Zc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*r-o*n),h=2*(o*t-s*r),f=2*(s*n-a*t);return this.x=t+c*l+a*f-o*h,this.y=n+c*h+o*l-s*f,this.z=r+c*f+s*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=lt(this.x,e.x,t.x),this.y=lt(this.y,e.y,t.y),this.z=lt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=lt(this.x,e,t),this.y=lt(this.y,e,t),this.z=lt(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(lt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=r*c-s*o,this.y=s*a-n*c,this.z=n*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return go.copy(this).projectOnVector(e),this.sub(go)}reflect(e){return this.sub(go.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(lt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const go=new Y,Zc=new Es;class Ms{constructor(e=new Y(1/0,1/0,1/0),t=new Y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(wn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(wn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=wn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,wn):wn.fromBufferAttribute(s,a),wn.applyMatrix4(e.matrixWorld),this.expandByPoint(wn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),zs.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),zs.copy(n.boundingBox)),zs.applyMatrix4(e.matrixWorld),this.union(zs)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,wn),wn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ts),Vs.subVectors(this.max,ts),rr.subVectors(e.a,ts),sr.subVectors(e.b,ts),ar.subVectors(e.c,ts),ci.subVectors(sr,rr),ui.subVectors(ar,sr),Ci.subVectors(rr,ar);let t=[0,-ci.z,ci.y,0,-ui.z,ui.y,0,-Ci.z,Ci.y,ci.z,0,-ci.x,ui.z,0,-ui.x,Ci.z,0,-Ci.x,-ci.y,ci.x,0,-ui.y,ui.x,0,-Ci.y,Ci.x,0];return!_o(t,rr,sr,ar,Vs)||(t=[1,0,0,0,1,0,0,0,1],!_o(t,rr,sr,ar,Vs))?!1:(Hs.crossVectors(ci,ui),t=[Hs.x,Hs.y,Hs.z],_o(t,rr,sr,ar,Vs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,wn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(wn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Wn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Wn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Wn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Wn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Wn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Wn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Wn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Wn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Wn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Wn=[new Y,new Y,new Y,new Y,new Y,new Y,new Y,new Y],wn=new Y,zs=new Ms,rr=new Y,sr=new Y,ar=new Y,ci=new Y,ui=new Y,Ci=new Y,ts=new Y,Vs=new Y,Hs=new Y,Pi=new Y;function _o(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){Pi.fromArray(i,s);const o=r.x*Math.abs(Pi.x)+r.y*Math.abs(Pi.y)+r.z*Math.abs(Pi.z),c=e.dot(Pi),l=t.dot(Pi),h=n.dot(Pi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}const Hm=new Ms,ns=new Y,vo=new Y;class dc{constructor(e=new Y,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Hm.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ns.subVectors(e,this.center);const t=ns.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(ns,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(vo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ns.copy(e.center).add(vo)),this.expandByPoint(ns.copy(e.center).sub(vo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const qn=new Y,yo=new Y,Gs=new Y,fi=new Y,xo=new Y,Ws=new Y,So=new Y;class Gm{constructor(e=new Y,t=new Y(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,qn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=qn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(qn.copy(this.origin).addScaledVector(this.direction,t),qn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){yo.copy(e).add(t).multiplyScalar(.5),Gs.copy(t).sub(e).normalize(),fi.copy(this.origin).sub(yo);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Gs),o=fi.dot(this.direction),c=-fi.dot(Gs),l=fi.lengthSq(),h=Math.abs(1-a*a);let f,d,m,x;if(h>0)if(f=a*c-o,d=a*o-c,x=s*h,f>=0)if(d>=-x)if(d<=x){const y=1/h;f*=y,d*=y,m=f*(f+a*d+2*o)+d*(a*f+d+2*c)+l}else d=s,f=Math.max(0,-(a*d+o)),m=-f*f+d*(d+2*c)+l;else d=-s,f=Math.max(0,-(a*d+o)),m=-f*f+d*(d+2*c)+l;else d<=-x?(f=Math.max(0,-(-a*s+o)),d=f>0?-s:Math.min(Math.max(-s,-c),s),m=-f*f+d*(d+2*c)+l):d<=x?(f=0,d=Math.min(Math.max(-s,-c),s),m=d*(d+2*c)+l):(f=Math.max(0,-(a*s+o)),d=f>0?s:Math.min(Math.max(-s,-c),s),m=-f*f+d*(d+2*c)+l);else d=a>0?-s:s,f=Math.max(0,-(a*d+o)),m=-f*f+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(yo).addScaledVector(Gs,d),m}intersectSphere(e,t){qn.subVectors(e.center,this.origin);const n=qn.dot(this.direction),r=qn.dot(qn)-n*n,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,o,c;const l=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,r=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,r=(e.min.x-d.x)*l),h>=0?(s=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(e.min.z-d.z)*f,c=(e.max.z-d.z)*f):(o=(e.max.z-d.z)*f,c=(e.min.z-d.z)*f),n>c||o>r)||((o>n||n!==n)&&(n=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,qn)!==null}intersectTriangle(e,t,n,r,s){xo.subVectors(t,e),Ws.subVectors(n,e),So.crossVectors(xo,Ws);let a=this.direction.dot(So),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;fi.subVectors(this.origin,e);const c=o*this.direction.dot(Ws.crossVectors(fi,Ws));if(c<0)return null;const l=o*this.direction.dot(xo.cross(fi));if(l<0||c+l>a)return null;const h=-o*fi.dot(So);return h<0?null:this.at(h/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Dt{constructor(e,t,n,r,s,a,o,c,l,h,f,d,m,x,y,_){Dt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,c,l,h,f,d,m,x,y,_)}set(e,t,n,r,s,a,o,c,l,h,f,d,m,x,y,_){const g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=s,g[5]=a,g[9]=o,g[13]=c,g[2]=l,g[6]=h,g[10]=f,g[14]=d,g[3]=m,g[7]=x,g[11]=y,g[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Dt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/or.setFromMatrixColumn(e,0).length(),s=1/or.setFromMatrixColumn(e,1).length(),a=1/or.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(r),l=Math.sin(r),h=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=a*h,m=a*f,x=o*h,y=o*f;t[0]=c*h,t[4]=-c*f,t[8]=l,t[1]=m+x*l,t[5]=d-y*l,t[9]=-o*c,t[2]=y-d*l,t[6]=x+m*l,t[10]=a*c}else if(e.order==="YXZ"){const d=c*h,m=c*f,x=l*h,y=l*f;t[0]=d+y*o,t[4]=x*o-m,t[8]=a*l,t[1]=a*f,t[5]=a*h,t[9]=-o,t[2]=m*o-x,t[6]=y+d*o,t[10]=a*c}else if(e.order==="ZXY"){const d=c*h,m=c*f,x=l*h,y=l*f;t[0]=d-y*o,t[4]=-a*f,t[8]=x+m*o,t[1]=m+x*o,t[5]=a*h,t[9]=y-d*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const d=a*h,m=a*f,x=o*h,y=o*f;t[0]=c*h,t[4]=x*l-m,t[8]=d*l+y,t[1]=c*f,t[5]=y*l+d,t[9]=m*l-x,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const d=a*c,m=a*l,x=o*c,y=o*l;t[0]=c*h,t[4]=y-d*f,t[8]=x*f+m,t[1]=f,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=m*f+x,t[10]=d-y*f}else if(e.order==="XZY"){const d=a*c,m=a*l,x=o*c,y=o*l;t[0]=c*h,t[4]=-f,t[8]=l*h,t[1]=d*f+y,t[5]=a*h,t[9]=m*f-x,t[2]=x*f-m,t[6]=o*h,t[10]=y*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Wm,e,qm)}lookAt(e,t,n){const r=this.elements;return fn.subVectors(e,t),fn.lengthSq()===0&&(fn.z=1),fn.normalize(),hi.crossVectors(n,fn),hi.lengthSq()===0&&(Math.abs(n.z)===1?fn.x+=1e-4:fn.z+=1e-4,fn.normalize(),hi.crossVectors(n,fn)),hi.normalize(),qs.crossVectors(fn,hi),r[0]=hi.x,r[4]=qs.x,r[8]=fn.x,r[1]=hi.y,r[5]=qs.y,r[9]=fn.y,r[2]=hi.z,r[6]=qs.z,r[10]=fn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],f=n[5],d=n[9],m=n[13],x=n[2],y=n[6],_=n[10],g=n[14],R=n[3],A=n[7],b=n[11],L=n[15],I=r[0],C=r[4],D=r[8],M=r[12],S=r[1],N=r[5],k=r[9],F=r[13],$=r[2],ae=r[6],Z=r[10],fe=r[14],J=r[3],te=r[7],se=r[11],pe=r[15];return s[0]=a*I+o*S+c*$+l*J,s[4]=a*C+o*N+c*ae+l*te,s[8]=a*D+o*k+c*Z+l*se,s[12]=a*M+o*F+c*fe+l*pe,s[1]=h*I+f*S+d*$+m*J,s[5]=h*C+f*N+d*ae+m*te,s[9]=h*D+f*k+d*Z+m*se,s[13]=h*M+f*F+d*fe+m*pe,s[2]=x*I+y*S+_*$+g*J,s[6]=x*C+y*N+_*ae+g*te,s[10]=x*D+y*k+_*Z+g*se,s[14]=x*M+y*F+_*fe+g*pe,s[3]=R*I+A*S+b*$+L*J,s[7]=R*C+A*N+b*ae+L*te,s[11]=R*D+A*k+b*Z+L*se,s[15]=R*M+A*F+b*fe+L*pe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],f=e[6],d=e[10],m=e[14],x=e[3],y=e[7],_=e[11],g=e[15];return x*(+s*c*f-r*l*f-s*o*d+n*l*d+r*o*m-n*c*m)+y*(+t*c*m-t*l*d+s*a*d-r*a*m+r*l*h-s*c*h)+_*(+t*l*f-t*o*m-s*a*f+n*a*m+s*o*h-n*l*h)+g*(-r*o*h-t*c*f+t*o*d+r*a*f-n*a*d+n*c*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],f=e[9],d=e[10],m=e[11],x=e[12],y=e[13],_=e[14],g=e[15],R=f*_*l-y*d*l+y*c*m-o*_*m-f*c*g+o*d*g,A=x*d*l-h*_*l-x*c*m+a*_*m+h*c*g-a*d*g,b=h*y*l-x*f*l+x*o*m-a*y*m-h*o*g+a*f*g,L=x*f*c-h*y*c-x*o*d+a*y*d+h*o*_-a*f*_,I=t*R+n*A+r*b+s*L;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/I;return e[0]=R*C,e[1]=(y*d*s-f*_*s-y*r*m+n*_*m+f*r*g-n*d*g)*C,e[2]=(o*_*s-y*c*s+y*r*l-n*_*l-o*r*g+n*c*g)*C,e[3]=(f*c*s-o*d*s-f*r*l+n*d*l+o*r*m-n*c*m)*C,e[4]=A*C,e[5]=(h*_*s-x*d*s+x*r*m-t*_*m-h*r*g+t*d*g)*C,e[6]=(x*c*s-a*_*s-x*r*l+t*_*l+a*r*g-t*c*g)*C,e[7]=(a*d*s-h*c*s+h*r*l-t*d*l-a*r*m+t*c*m)*C,e[8]=b*C,e[9]=(x*f*s-h*y*s-x*n*m+t*y*m+h*n*g-t*f*g)*C,e[10]=(a*y*s-x*o*s+x*n*l-t*y*l-a*n*g+t*o*g)*C,e[11]=(h*o*s-a*f*s-h*n*l+t*f*l+a*n*m-t*o*m)*C,e[12]=L*C,e[13]=(h*y*r-x*f*r+x*n*d-t*y*d-h*n*_+t*f*_)*C,e[14]=(x*o*r-a*y*r-x*n*c+t*y*c+a*n*_-t*o*_)*C,e[15]=(a*f*r-h*o*r+h*n*c-t*f*c-a*n*d+t*o*d)*C,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,o=e.y,c=e.z,l=s*a,h=s*o;return this.set(l*a+n,l*o-r*c,l*c+r*o,0,l*o+r*c,h*o+n,h*c-r*a,0,l*c-r*o,h*c+r*a,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,l=s+s,h=a+a,f=o+o,d=s*l,m=s*h,x=s*f,y=a*h,_=a*f,g=o*f,R=c*l,A=c*h,b=c*f,L=n.x,I=n.y,C=n.z;return r[0]=(1-(y+g))*L,r[1]=(m+b)*L,r[2]=(x-A)*L,r[3]=0,r[4]=(m-b)*I,r[5]=(1-(d+g))*I,r[6]=(_+R)*I,r[7]=0,r[8]=(x+A)*C,r[9]=(_-R)*C,r[10]=(1-(d+y))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=or.set(r[0],r[1],r[2]).length();const a=or.set(r[4],r[5],r[6]).length(),o=or.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Tn.copy(this);const l=1/s,h=1/a,f=1/o;return Tn.elements[0]*=l,Tn.elements[1]*=l,Tn.elements[2]*=l,Tn.elements[4]*=h,Tn.elements[5]*=h,Tn.elements[6]*=h,Tn.elements[8]*=f,Tn.elements[9]*=f,Tn.elements[10]*=f,t.setFromRotationMatrix(Tn),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,r,s,a,o=ni){const c=this.elements,l=2*s/(t-e),h=2*s/(n-r),f=(t+e)/(t-e),d=(n+r)/(n-r);let m,x;if(o===ni)m=-(a+s)/(a-s),x=-2*a*s/(a-s);else if(o===Da)m=-a/(a-s),x=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,s,a,o=ni){const c=this.elements,l=1/(t-e),h=1/(n-r),f=1/(a-s),d=(t+e)*l,m=(n+r)*h;let x,y;if(o===ni)x=(a+s)*f,y=-2*f;else if(o===Da)x=s*f,y=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-m,c[2]=0,c[6]=0,c[10]=y,c[14]=-x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const or=new Y,Tn=new Dt,Wm=new Y(0,0,0),qm=new Y(1,1,1),hi=new Y,qs=new Y,fn=new Y,Qc=new Dt,eu=new Es;class oi{constructor(e=0,t=0,n=0,r=oi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],c=r[1],l=r[5],h=r[9],f=r[2],d=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(lt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-lt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(lt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-lt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(lt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-lt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Qc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Qc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return eu.setFromEuler(this),this.setFromQuaternion(eu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}oi.DEFAULT_ORDER="XYZ";class Sh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Xm=0;const tu=new Y,lr=new Es,Xn=new Dt,Xs=new Y,is=new Y,jm=new Y,$m=new Es,nu=new Y(1,0,0),iu=new Y(0,1,0),ru=new Y(0,0,1),su={type:"added"},Ym={type:"removed"},cr={type:"childadded",child:null},bo={type:"childremoved",child:null};class ln extends Wr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Xm++}),this.uuid=bs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ln.DEFAULT_UP.clone();const e=new Y,t=new oi,n=new Es,r=new Y(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Dt},normalMatrix:{value:new Qe}}),this.matrix=new Dt,this.matrixWorld=new Dt,this.matrixAutoUpdate=ln.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Sh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return lr.setFromAxisAngle(e,t),this.quaternion.multiply(lr),this}rotateOnWorldAxis(e,t){return lr.setFromAxisAngle(e,t),this.quaternion.premultiply(lr),this}rotateX(e){return this.rotateOnAxis(nu,e)}rotateY(e){return this.rotateOnAxis(iu,e)}rotateZ(e){return this.rotateOnAxis(ru,e)}translateOnAxis(e,t){return tu.copy(e).applyQuaternion(this.quaternion),this.position.add(tu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(nu,e)}translateY(e){return this.translateOnAxis(iu,e)}translateZ(e){return this.translateOnAxis(ru,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Xn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Xs.copy(e):Xs.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),is.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Xn.lookAt(is,Xs,this.up):Xn.lookAt(Xs,is,this.up),this.quaternion.setFromRotationMatrix(Xn),r&&(Xn.extractRotation(r.matrixWorld),lr.setFromRotationMatrix(Xn),this.quaternion.premultiply(lr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(su),cr.child=e,this.dispatchEvent(cr),cr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ym),bo.child=e,this.dispatchEvent(bo),bo.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Xn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Xn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Xn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(su),cr.child=e,this.dispatchEvent(cr),cr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(is,e,jm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(is,$m,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const f=c[l];s(e.shapes,f)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(s(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),f=a(e.shapes),d=a(e.skeletons),m=a(e.animations),x=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),d.length>0&&(n.skeletons=d),m.length>0&&(n.animations=m),x.length>0&&(n.nodes=x)}return n.object=r,n;function a(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}ln.DEFAULT_UP=new Y(0,1,0);ln.DEFAULT_MATRIX_AUTO_UPDATE=!0;ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const An=new Y,jn=new Y,Eo=new Y,$n=new Y,ur=new Y,fr=new Y,au=new Y,Mo=new Y,wo=new Y,To=new Y,Ao=new Rt,Ro=new Rt,Co=new Rt;class Cn{constructor(e=new Y,t=new Y,n=new Y){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),An.subVectors(e,t),r.cross(An);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){An.subVectors(r,t),jn.subVectors(n,t),Eo.subVectors(e,t);const a=An.dot(An),o=An.dot(jn),c=An.dot(Eo),l=jn.dot(jn),h=jn.dot(Eo),f=a*l-o*o;if(f===0)return s.set(0,0,0),null;const d=1/f,m=(l*c-o*h)*d,x=(a*h-o*c)*d;return s.set(1-m-x,x,m)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,$n)===null?!1:$n.x>=0&&$n.y>=0&&$n.x+$n.y<=1}static getInterpolation(e,t,n,r,s,a,o,c){return this.getBarycoord(e,t,n,r,$n)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,$n.x),c.addScaledVector(a,$n.y),c.addScaledVector(o,$n.z),c)}static getInterpolatedAttribute(e,t,n,r,s,a){return Ao.setScalar(0),Ro.setScalar(0),Co.setScalar(0),Ao.fromBufferAttribute(e,t),Ro.fromBufferAttribute(e,n),Co.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Ao,s.x),a.addScaledVector(Ro,s.y),a.addScaledVector(Co,s.z),a}static isFrontFacing(e,t,n,r){return An.subVectors(n,t),jn.subVectors(e,t),An.cross(jn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return An.subVectors(this.c,this.b),jn.subVectors(this.a,this.b),An.cross(jn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Cn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Cn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return Cn.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return Cn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Cn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let a,o;ur.subVectors(r,n),fr.subVectors(s,n),Mo.subVectors(e,n);const c=ur.dot(Mo),l=fr.dot(Mo);if(c<=0&&l<=0)return t.copy(n);wo.subVectors(e,r);const h=ur.dot(wo),f=fr.dot(wo);if(h>=0&&f<=h)return t.copy(r);const d=c*f-h*l;if(d<=0&&c>=0&&h<=0)return a=c/(c-h),t.copy(n).addScaledVector(ur,a);To.subVectors(e,s);const m=ur.dot(To),x=fr.dot(To);if(x>=0&&m<=x)return t.copy(s);const y=m*l-c*x;if(y<=0&&l>=0&&x<=0)return o=l/(l-x),t.copy(n).addScaledVector(fr,o);const _=h*x-m*f;if(_<=0&&f-h>=0&&m-x>=0)return au.subVectors(s,r),o=(f-h)/(f-h+(m-x)),t.copy(r).addScaledVector(au,o);const g=1/(_+y+d);return a=y*g,o=d*g,t.copy(n).addScaledVector(ur,a).addScaledVector(fr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const bh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},di={h:0,s:0,l:0},js={h:0,s:0,l:0};function Po(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class ht{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Wt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ft.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=ft.workingColorSpace){return this.r=e,this.g=t,this.b=n,ft.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=ft.workingColorSpace){if(e=Lm(e,1),t=lt(t,0,1),n=lt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=Po(a,s,e+1/3),this.g=Po(a,s,e),this.b=Po(a,s,e-1/3)}return ft.toWorkingColorSpace(this,r),this}setStyle(e,t=Wt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Wt){const n=bh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=si(e.r),this.g=si(e.g),this.b=si(e.b),this}copyLinearToSRGB(e){return this.r=Ar(e.r),this.g=Ar(e.g),this.b=Ar(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Wt){return ft.fromWorkingColorSpace(Yt.copy(this),e),Math.round(lt(Yt.r*255,0,255))*65536+Math.round(lt(Yt.g*255,0,255))*256+Math.round(lt(Yt.b*255,0,255))}getHexString(e=Wt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ft.workingColorSpace){ft.fromWorkingColorSpace(Yt.copy(this),t);const n=Yt.r,r=Yt.g,s=Yt.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let c,l;const h=(o+a)/2;if(o===a)c=0,l=0;else{const f=a-o;switch(l=h<=.5?f/(a+o):f/(2-a-o),a){case n:c=(r-s)/f+(r<s?6:0);break;case r:c=(s-n)/f+2;break;case s:c=(n-r)/f+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=ft.workingColorSpace){return ft.fromWorkingColorSpace(Yt.copy(this),t),e.r=Yt.r,e.g=Yt.g,e.b=Yt.b,e}getStyle(e=Wt){ft.fromWorkingColorSpace(Yt.copy(this),e);const t=Yt.r,n=Yt.g,r=Yt.b;return e!==Wt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(di),this.setHSL(di.h+e,di.s+t,di.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(di),e.getHSL(js);const n=ho(di.h,js.h,t),r=ho(di.s,js.s,t),s=ho(di.l,js.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Yt=new ht;ht.NAMES=bh;let Km=0;class Ka extends Wr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Km++}),this.uuid=bs(),this.name="",this.type="Material",this.blending=On,this.side=Si,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=el,this.blendDst=tl,this.blendEquation=Fi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ht(0,0,0),this.blendAlpha=0,this.depthFunc=Lr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Xc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=nr,this.stencilZFail=nr,this.stencilZPass=nr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==On&&(n.blending=this.blending),this.side!==Si&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==el&&(n.blendSrc=this.blendSrc),this.blendDst!==tl&&(n.blendDst=this.blendDst),this.blendEquation!==Fi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Lr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Xc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==nr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==nr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==nr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class gs extends Ka{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ht(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new oi,this.combine=sh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Lt=new Y,$s=new vt;class Fn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=jc,this.updateRanges=[],this.gpuType=ti,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)$s.fromBufferAttribute(this,t),$s.applyMatrix3(e),this.setXY(t,$s.x,$s.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.applyMatrix3(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.applyMatrix4(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.applyNormalMatrix(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.transformDirection(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=es(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=rn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=es(t,this.array)),t}setX(e,t){return this.normalized&&(t=rn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=es(t,this.array)),t}setY(e,t){return this.normalized&&(t=rn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=es(t,this.array)),t}setZ(e,t){return this.normalized&&(t=rn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=es(t,this.array)),t}setW(e,t){return this.normalized&&(t=rn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=rn(t,this.array),n=rn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=rn(t,this.array),n=rn(n,this.array),r=rn(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=rn(t,this.array),n=rn(n,this.array),r=rn(r,this.array),s=rn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==jc&&(e.usage=this.usage),e}}class Eh extends Fn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Mh extends Fn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class ai extends Fn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Jm=0;const _n=new Dt,Lo=new ln,hr=new Y,hn=new Ms,rs=new Ms,Ht=new Y;class Mi extends Wr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Jm++}),this.uuid=bs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(vh(e)?Mh:Eh)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Qe().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return _n.makeRotationFromQuaternion(e),this.applyMatrix4(_n),this}rotateX(e){return _n.makeRotationX(e),this.applyMatrix4(_n),this}rotateY(e){return _n.makeRotationY(e),this.applyMatrix4(_n),this}rotateZ(e){return _n.makeRotationZ(e),this.applyMatrix4(_n),this}translate(e,t,n){return _n.makeTranslation(e,t,n),this.applyMatrix4(_n),this}scale(e,t,n){return _n.makeScale(e,t,n),this.applyMatrix4(_n),this}lookAt(e){return Lo.lookAt(e),Lo.updateMatrix(),this.applyMatrix4(Lo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(hr).negate(),this.translate(hr.x,hr.y,hr.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ai(n,3))}else{const n=Math.min(e.length,t.count);for(let r=0;r<n;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ms);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Y(-1/0,-1/0,-1/0),new Y(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];hn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ht.addVectors(this.boundingBox.min,hn.min),this.boundingBox.expandByPoint(Ht),Ht.addVectors(this.boundingBox.max,hn.max),this.boundingBox.expandByPoint(Ht)):(this.boundingBox.expandByPoint(hn.min),this.boundingBox.expandByPoint(hn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new dc);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Y,1/0);return}if(e){const n=this.boundingSphere.center;if(hn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];rs.setFromBufferAttribute(o),this.morphTargetsRelative?(Ht.addVectors(hn.min,rs.min),hn.expandByPoint(Ht),Ht.addVectors(hn.max,rs.max),hn.expandByPoint(Ht)):(hn.expandByPoint(rs.min),hn.expandByPoint(rs.max))}hn.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)Ht.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(Ht));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Ht.fromBufferAttribute(o,l),c&&(hr.fromBufferAttribute(e,l),Ht.add(hr)),r=Math.max(r,n.distanceToSquared(Ht))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Fn(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let D=0;D<n.count;D++)o[D]=new Y,c[D]=new Y;const l=new Y,h=new Y,f=new Y,d=new vt,m=new vt,x=new vt,y=new Y,_=new Y;function g(D,M,S){l.fromBufferAttribute(n,D),h.fromBufferAttribute(n,M),f.fromBufferAttribute(n,S),d.fromBufferAttribute(s,D),m.fromBufferAttribute(s,M),x.fromBufferAttribute(s,S),h.sub(l),f.sub(l),m.sub(d),x.sub(d);const N=1/(m.x*x.y-x.x*m.y);isFinite(N)&&(y.copy(h).multiplyScalar(x.y).addScaledVector(f,-m.y).multiplyScalar(N),_.copy(f).multiplyScalar(m.x).addScaledVector(h,-x.x).multiplyScalar(N),o[D].add(y),o[M].add(y),o[S].add(y),c[D].add(_),c[M].add(_),c[S].add(_))}let R=this.groups;R.length===0&&(R=[{start:0,count:e.count}]);for(let D=0,M=R.length;D<M;++D){const S=R[D],N=S.start,k=S.count;for(let F=N,$=N+k;F<$;F+=3)g(e.getX(F+0),e.getX(F+1),e.getX(F+2))}const A=new Y,b=new Y,L=new Y,I=new Y;function C(D){L.fromBufferAttribute(r,D),I.copy(L);const M=o[D];A.copy(M),A.sub(L.multiplyScalar(L.dot(M))).normalize(),b.crossVectors(I,M);const N=b.dot(c[D])<0?-1:1;a.setXYZW(D,A.x,A.y,A.z,N)}for(let D=0,M=R.length;D<M;++D){const S=R[D],N=S.start,k=S.count;for(let F=N,$=N+k;F<$;F+=3)C(e.getX(F+0)),C(e.getX(F+1)),C(e.getX(F+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Fn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,m=n.count;d<m;d++)n.setXYZ(d,0,0,0);const r=new Y,s=new Y,a=new Y,o=new Y,c=new Y,l=new Y,h=new Y,f=new Y;if(e)for(let d=0,m=e.count;d<m;d+=3){const x=e.getX(d+0),y=e.getX(d+1),_=e.getX(d+2);r.fromBufferAttribute(t,x),s.fromBufferAttribute(t,y),a.fromBufferAttribute(t,_),h.subVectors(a,s),f.subVectors(r,s),h.cross(f),o.fromBufferAttribute(n,x),c.fromBufferAttribute(n,y),l.fromBufferAttribute(n,_),o.add(h),c.add(h),l.add(h),n.setXYZ(x,o.x,o.y,o.z),n.setXYZ(y,c.x,c.y,c.z),n.setXYZ(_,l.x,l.y,l.z)}else for(let d=0,m=t.count;d<m;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,s),f.subVectors(r,s),h.cross(f),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ht.fromBufferAttribute(e,t),Ht.normalize(),e.setXYZ(t,Ht.x,Ht.y,Ht.z)}toNonIndexed(){function e(o,c){const l=o.array,h=o.itemSize,f=o.normalized,d=new l.constructor(c.length*h);let m=0,x=0;for(let y=0,_=c.length;y<_;y++){o.isInterleavedBufferAttribute?m=c[y]*o.data.stride+o.offset:m=c[y]*h;for(let g=0;g<h;g++)d[x++]=l[m++]}return new Fn(d,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Mi,n=this.index.array,r=this.attributes;for(const o in r){const c=r[o],l=e(c,n);t.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let h=0,f=l.length;h<f;h++){const d=l[h],m=e(d,n);c.push(m)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let f=0,d=l.length;f<d;f++){const m=l[f];h.push(m.toJSON(e.data))}h.length>0&&(r[c]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const l in r){const h=r[l];this.setAttribute(l,h.clone(t))}const s=e.morphAttributes;for(const l in s){const h=[],f=s[l];for(let d=0,m=f.length;d<m;d++)h.push(f[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,h=a.length;l<h;l++){const f=a[l];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ou=new Dt,Li=new Gm,Ys=new dc,lu=new Y,Ks=new Y,Js=new Y,Zs=new Y,Io=new Y,Qs=new Y,cu=new Y,ea=new Y;class an extends ln{constructor(e=new Mi,t=new gs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Qs.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const h=o[c],f=s[c];h!==0&&(Io.fromBufferAttribute(f,e),a?Qs.addScaledVector(Io,h):Qs.addScaledVector(Io.sub(t),h))}t.add(Qs)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ys.copy(n.boundingSphere),Ys.applyMatrix4(s),Li.copy(e.ray).recast(e.near),!(Ys.containsPoint(Li.origin)===!1&&(Li.intersectSphere(Ys,lu)===null||Li.origin.distanceToSquared(lu)>(e.far-e.near)**2))&&(ou.copy(s).invert(),Li.copy(e.ray).applyMatrix4(ou),!(n.boundingBox!==null&&Li.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Li)))}_computeIntersections(e,t,n){let r;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,f=s.attributes.normal,d=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,y=d.length;x<y;x++){const _=d[x],g=a[_.materialIndex],R=Math.max(_.start,m.start),A=Math.min(o.count,Math.min(_.start+_.count,m.start+m.count));for(let b=R,L=A;b<L;b+=3){const I=o.getX(b),C=o.getX(b+1),D=o.getX(b+2);r=ta(this,g,e,n,l,h,f,I,C,D),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=_.materialIndex,t.push(r))}}else{const x=Math.max(0,m.start),y=Math.min(o.count,m.start+m.count);for(let _=x,g=y;_<g;_+=3){const R=o.getX(_),A=o.getX(_+1),b=o.getX(_+2);r=ta(this,a,e,n,l,h,f,R,A,b),r&&(r.faceIndex=Math.floor(_/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let x=0,y=d.length;x<y;x++){const _=d[x],g=a[_.materialIndex],R=Math.max(_.start,m.start),A=Math.min(c.count,Math.min(_.start+_.count,m.start+m.count));for(let b=R,L=A;b<L;b+=3){const I=b,C=b+1,D=b+2;r=ta(this,g,e,n,l,h,f,I,C,D),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=_.materialIndex,t.push(r))}}else{const x=Math.max(0,m.start),y=Math.min(c.count,m.start+m.count);for(let _=x,g=y;_<g;_+=3){const R=_,A=_+1,b=_+2;r=ta(this,a,e,n,l,h,f,R,A,b),r&&(r.faceIndex=Math.floor(_/3),t.push(r))}}}}function Zm(i,e,t,n,r,s,a,o){let c;if(e.side===on?c=n.intersectTriangle(a,s,r,!0,o):c=n.intersectTriangle(r,s,a,e.side===Si,o),c===null)return null;ea.copy(o),ea.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(ea);return l<t.near||l>t.far?null:{distance:l,point:ea.clone(),object:i}}function ta(i,e,t,n,r,s,a,o,c,l){i.getVertexPosition(o,Ks),i.getVertexPosition(c,Js),i.getVertexPosition(l,Zs);const h=Zm(i,e,t,n,Ks,Js,Zs,cu);if(h){const f=new Y;Cn.getBarycoord(cu,Ks,Js,Zs,f),r&&(h.uv=Cn.getInterpolatedAttribute(r,o,c,l,f,new vt)),s&&(h.uv1=Cn.getInterpolatedAttribute(s,o,c,l,f,new vt)),a&&(h.normal=Cn.getInterpolatedAttribute(a,o,c,l,f,new Y),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:c,c:l,normal:new Y,materialIndex:0};Cn.getNormal(Ks,Js,Zs,d.normal),h.face=d,h.barycoord=f}return h}class ws extends Mi{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const c=[],l=[],h=[],f=[];let d=0,m=0;x("z","y","x",-1,-1,n,t,e,a,s,0),x("z","y","x",1,-1,n,t,-e,a,s,1),x("x","z","y",1,1,e,n,t,r,a,2),x("x","z","y",1,-1,e,n,-t,r,a,3),x("x","y","z",1,-1,e,t,n,r,s,4),x("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new ai(l,3)),this.setAttribute("normal",new ai(h,3)),this.setAttribute("uv",new ai(f,2));function x(y,_,g,R,A,b,L,I,C,D,M){const S=b/C,N=L/D,k=b/2,F=L/2,$=I/2,ae=C+1,Z=D+1;let fe=0,J=0;const te=new Y;for(let se=0;se<Z;se++){const pe=se*N-F;for(let _e=0;_e<ae;_e++){const Re=_e*S-k;te[y]=Re*R,te[_]=pe*A,te[g]=$,l.push(te.x,te.y,te.z),te[y]=0,te[_]=0,te[g]=I>0?1:-1,h.push(te.x,te.y,te.z),f.push(_e/C),f.push(1-se/D),fe+=1}}for(let se=0;se<D;se++)for(let pe=0;pe<C;pe++){const _e=d+pe+ae*se,Re=d+pe+ae*(se+1),ee=d+(pe+1)+ae*(se+1),G=d+(pe+1)+ae*se;c.push(_e,Re,G),c.push(Re,ee,G),J+=6}o.addGroup(m,J,M),m+=J,d+=fe}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ws(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Fr(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function Qt(i){const e={};for(let t=0;t<i.length;t++){const n=Fr(i[t]);for(const r in n)e[r]=n[r]}return e}function Qm(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function wh(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ft.workingColorSpace}const eg={clone:Fr,merge:Qt};var tg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ng=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class zn extends Ka{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=tg,this.fragmentShader=ng,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Fr(e.uniforms),this.uniformsGroups=Qm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Th extends ln{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Dt,this.projectionMatrix=new Dt,this.projectionMatrixInverse=new Dt,this.coordinateSystem=ni}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const pi=new Y,uu=new vt,fu=new vt;class Rn extends Th{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=kl*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(fo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return kl*2*Math.atan(Math.tan(fo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){pi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(pi.x,pi.y).multiplyScalar(-e/pi.z),pi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(pi.x,pi.y).multiplyScalar(-e/pi.z)}getViewSize(e,t){return this.getViewBounds(e,uu,fu),t.subVectors(fu,uu)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(fo*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*r/c,t-=a.offsetY*n/l,r*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const dr=-90,pr=1;class ig extends ln{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Rn(dr,pr,e,t);r.layers=this.layers,this.add(r);const s=new Rn(dr,pr,e,t);s.layers=this.layers,this.add(s);const a=new Rn(dr,pr,e,t);a.layers=this.layers,this.add(a);const o=new Rn(dr,pr,e,t);o.layers=this.layers,this.add(o);const c=new Rn(dr,pr,e,t);c.layers=this.layers,this.add(c);const l=new Rn(dr,pr,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,a,o,c]=t;for(const l of t)this.remove(l);if(e===ni)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Da)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,l,h]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,a),e.setRenderTarget(n,2,r),e.render(t,o),e.setRenderTarget(n,3,r),e.render(t,c),e.setRenderTarget(n,4,r),e.render(t,l),n.texture.generateMipmaps=y,e.setRenderTarget(n,5,r),e.render(t,h),e.setRenderTarget(f,d,m),e.xr.enabled=x,n.texture.needsPMREMUpdate=!0}}class Ah extends Zt{constructor(e,t,n,r,s,a,o,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:Ir,super(e,t,n,r,s,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class rg extends bi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Ah(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:pn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new ws(5,5,5),s=new zn({name:"CubemapFromEquirect",uniforms:Fr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:on,blending:yi});s.uniforms.tEquirect.value=t;const a=new an(r,s),o=t.minFilter;return t.minFilter===ei&&(t.minFilter=pn),new ig(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}}class Rh extends ln{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new oi,this.environmentIntensity=1,this.environmentRotation=new oi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Do=new Y,sg=new Y,ag=new Qe;class Ui{constructor(e=new Y(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=Do.subVectors(n,t).cross(sg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Do),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||ag.getNormalMatrix(e),r=this.coplanarPoint(Do).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ii=new dc,na=new Y;class Ch{constructor(e=new Ui,t=new Ui,n=new Ui,r=new Ui,s=new Ui,a=new Ui){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ni){const n=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],c=r[3],l=r[4],h=r[5],f=r[6],d=r[7],m=r[8],x=r[9],y=r[10],_=r[11],g=r[12],R=r[13],A=r[14],b=r[15];if(n[0].setComponents(c-s,d-l,_-m,b-g).normalize(),n[1].setComponents(c+s,d+l,_+m,b+g).normalize(),n[2].setComponents(c+a,d+h,_+x,b+R).normalize(),n[3].setComponents(c-a,d-h,_-x,b-R).normalize(),n[4].setComponents(c-o,d-f,_-y,b-A).normalize(),t===ni)n[5].setComponents(c+o,d+f,_+y,b+A).normalize();else if(t===Da)n[5].setComponents(o,f,y,A).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ii.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ii.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ii)}intersectsSprite(e){return Ii.center.set(0,0,0),Ii.radius=.7071067811865476,Ii.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ii)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(na.x=r.normal.x>0?e.max.x:e.min.x,na.y=r.normal.y>0?e.max.y:e.min.y,na.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(na)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ia extends ln{constructor(){super(),this.isGroup=!0,this.type="Group"}}class Bl extends Zt{constructor(e,t,n,r,s,a,o,c,l){super(e,t,n,r,s,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ph extends Zt{constructor(e,t,n,r,s,a,o,c,l,h=Tr){if(h!==Tr&&h!==Ur)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Tr&&(n=qi),n===void 0&&h===Ur&&(n=Nr),super(null,r,s,a,o,c,h,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Jt,this.minFilter=c!==void 0?c:Jt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Ei extends Mi{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(n),c=Math.floor(r),l=o+1,h=c+1,f=e/o,d=t/c,m=[],x=[],y=[],_=[];for(let g=0;g<h;g++){const R=g*d-a;for(let A=0;A<l;A++){const b=A*f-s;x.push(b,-R,0),y.push(0,0,1),_.push(A/o),_.push(1-g/c)}}for(let g=0;g<c;g++)for(let R=0;R<o;R++){const A=R+l*g,b=R+l*(g+1),L=R+1+l*(g+1),I=R+1+l*g;m.push(A,b,I),m.push(b,L,I)}this.setIndex(m),this.setAttribute("position",new ai(x,3)),this.setAttribute("normal",new ai(y,3)),this.setAttribute("uv",new ai(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ei(e.width,e.height,e.widthSegments,e.heightSegments)}}class og extends Ka{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=xm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class lg extends Ka{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const hu={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class cg{constructor(e,t,n){const r=this;let s=!1,a=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){o++,s===!1&&r.onStart!==void 0&&r.onStart(h,a,o),s=!0},this.itemEnd=function(h){a++,r.onProgress!==void 0&&r.onProgress(h,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,f){return l.push(h,f),this},this.removeHandler=function(h){const f=l.indexOf(h);return f!==-1&&l.splice(f,2),this},this.getHandler=function(h){for(let f=0,d=l.length;f<d;f+=2){const m=l[f],x=l[f+1];if(m.global&&(m.lastIndex=0),m.test(h))return x}return null}}}const ug=new cg;class pc{constructor(e){this.manager=e!==void 0?e:ug,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}pc.DEFAULT_MATERIAL_NAME="__DEFAULT";class fg extends pc{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=hu.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a;const o=ms("img");function c(){h(),hu.add(e,this),t&&t(this),s.manager.itemEnd(e)}function l(f){h(),r&&r(f),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}}class Lh extends pc{constructor(e){super(e)}load(e,t,n,r){const s=new Zt,a=new fg(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,r),s}}class mc extends Th{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class hg extends Rn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}function du(i,e,t,n){const r=dg(n);switch(t){case uh:return i*e;case hh:return i*e;case dh:return i*e*2;case ph:return i*e/r.components*r.byteLength;case uc:return i*e/r.components*r.byteLength;case mh:return i*e*2/r.components*r.byteLength;case fc:return i*e*2/r.components*r.byteLength;case fh:return i*e*3/r.components*r.byteLength;case Pn:return i*e*4/r.components*r.byteLength;case hc:return i*e*4/r.components*r.byteLength;case ga:case _a:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case va:case ya:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case dl:case ml:return Math.max(i,16)*Math.max(e,8)/4;case hl:case pl:return Math.max(i,8)*Math.max(e,8)/2;case gl:case _l:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case vl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case yl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case xl:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Sl:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case bl:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case El:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Ml:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case wl:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Tl:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Al:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Rl:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Cl:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Pl:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Ll:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Il:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case xa:case Dl:case Nl:return Math.ceil(i/4)*Math.ceil(e/4)*16;case gh:case Ul:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Ol:case Fl:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function dg(i){switch(i){case Bn:case oh:return{byteLength:1,components:1};case ps:case lh:case Ss:return{byteLength:2,components:1};case lc:case cc:return{byteLength:2,components:4};case qi:case oc:case ti:return{byteLength:4,components:1};case ch:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ac}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ac);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Ih(){let i=null,e=!1,t=null,n=null;function r(s,a){t(s,a),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function pg(i){const e=new WeakMap;function t(o,c){const l=o.array,h=o.usage,f=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,h),o.onUploadCallback();let m;if(l instanceof Float32Array)m=i.FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)m=i.SHORT;else if(l instanceof Uint32Array)m=i.UNSIGNED_INT;else if(l instanceof Int32Array)m=i.INT;else if(l instanceof Int8Array)m=i.BYTE;else if(l instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:m,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,c,l){const h=c.array,f=c.updateRanges;if(i.bindBuffer(l,o),f.length===0)i.bufferSubData(l,0,h);else{f.sort((m,x)=>m.start-x.start);let d=0;for(let m=1;m<f.length;m++){const x=f[d],y=f[m];y.start<=x.start+x.count+1?x.count=Math.max(x.count,y.start+y.count-x.start):(++d,f[d]=y)}f.length=d+1;for(let m=0,x=f.length;m<x;m++){const y=f[m];i.bufferSubData(l,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:r,remove:s,update:a}}var mg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,gg=`#ifdef USE_ALPHAHASH
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
#endif`,_g=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,vg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,yg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,xg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Sg=`#ifdef USE_AOMAP
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
#endif`,bg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Eg=`#ifdef USE_BATCHING
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
#endif`,Mg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,wg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Tg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ag=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Rg=`#ifdef USE_IRIDESCENCE
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
#endif`,Cg=`#ifdef USE_BUMPMAP
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
#endif`,Pg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Lg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ig=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Dg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ng=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ug=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Og=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Fg=`#if defined( USE_COLOR_ALPHA )
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
#endif`,kg=`#define PI 3.141592653589793
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
} // validated`,Bg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,zg=`vec3 transformedNormal = objectNormal;
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
#endif`,Vg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Hg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Gg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Wg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,qg="gl_FragColor = linearToOutputTexel( gl_FragColor );",Xg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,jg=`#ifdef USE_ENVMAP
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
#endif`,$g=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Yg=`#ifdef USE_ENVMAP
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
#endif`,Kg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Jg=`#ifdef USE_ENVMAP
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
#endif`,Zg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Qg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,e_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,t_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,n_=`#ifdef USE_GRADIENTMAP
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
}`,i_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,r_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,s_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,a_=`uniform bool receiveShadow;
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
#endif`,o_=`#ifdef USE_ENVMAP
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
#endif`,l_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,c_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,u_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,f_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,h_=`PhysicalMaterial material;
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
#endif`,d_=`struct PhysicalMaterial {
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
}`,p_=`
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
#endif`,m_=`#if defined( RE_IndirectDiffuse )
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
#endif`,g_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,__=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,v_=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,y_=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,x_=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,S_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,b_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,E_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,M_=`#if defined( USE_POINTS_UV )
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
#endif`,w_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,T_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,A_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,R_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,C_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,P_=`#ifdef USE_MORPHTARGETS
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
#endif`,L_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,I_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,D_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,N_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,U_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,O_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,F_=`#ifdef USE_NORMALMAP
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
#endif`,k_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,B_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,z_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,V_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,H_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,G_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,W_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,q_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,X_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,j_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,$_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Y_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,K_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,J_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Z_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Q_=`float getShadowMask() {
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
}`,e0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,t0=`#ifdef USE_SKINNING
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
#endif`,n0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,i0=`#ifdef USE_SKINNING
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
#endif`,r0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,s0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,a0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,o0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,l0=`#ifdef USE_TRANSMISSION
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
#endif`,c0=`#ifdef USE_TRANSMISSION
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
#endif`,u0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,f0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,h0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,d0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const p0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,m0=`uniform sampler2D t2D;
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
}`,g0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,v0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,y0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,x0=`#include <common>
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
}`,S0=`#if DEPTH_PACKING == 3200
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
}`,b0=`#define DISTANCE
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
}`,E0=`#define DISTANCE
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
}`,M0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,w0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,T0=`uniform float scale;
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
}`,A0=`uniform vec3 diffuse;
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
}`,R0=`#include <common>
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
}`,C0=`uniform vec3 diffuse;
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
}`,P0=`#define LAMBERT
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
}`,L0=`#define LAMBERT
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
}`,I0=`#define MATCAP
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
}`,D0=`#define MATCAP
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
}`,N0=`#define NORMAL
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
}`,U0=`#define NORMAL
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
}`,O0=`#define PHONG
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
}`,F0=`#define PHONG
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
}`,k0=`#define STANDARD
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
}`,B0=`#define STANDARD
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
}`,z0=`#define TOON
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
}`,V0=`#define TOON
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
}`,H0=`uniform float size;
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
}`,G0=`uniform vec3 diffuse;
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
}`,W0=`#include <common>
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
}`,q0=`uniform vec3 color;
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
}`,X0=`uniform float rotation;
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
}`,j0=`uniform vec3 diffuse;
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
}`,et={alphahash_fragment:mg,alphahash_pars_fragment:gg,alphamap_fragment:_g,alphamap_pars_fragment:vg,alphatest_fragment:yg,alphatest_pars_fragment:xg,aomap_fragment:Sg,aomap_pars_fragment:bg,batching_pars_vertex:Eg,batching_vertex:Mg,begin_vertex:wg,beginnormal_vertex:Tg,bsdfs:Ag,iridescence_fragment:Rg,bumpmap_pars_fragment:Cg,clipping_planes_fragment:Pg,clipping_planes_pars_fragment:Lg,clipping_planes_pars_vertex:Ig,clipping_planes_vertex:Dg,color_fragment:Ng,color_pars_fragment:Ug,color_pars_vertex:Og,color_vertex:Fg,common:kg,cube_uv_reflection_fragment:Bg,defaultnormal_vertex:zg,displacementmap_pars_vertex:Vg,displacementmap_vertex:Hg,emissivemap_fragment:Gg,emissivemap_pars_fragment:Wg,colorspace_fragment:qg,colorspace_pars_fragment:Xg,envmap_fragment:jg,envmap_common_pars_fragment:$g,envmap_pars_fragment:Yg,envmap_pars_vertex:Kg,envmap_physical_pars_fragment:o_,envmap_vertex:Jg,fog_vertex:Zg,fog_pars_vertex:Qg,fog_fragment:e_,fog_pars_fragment:t_,gradientmap_pars_fragment:n_,lightmap_pars_fragment:i_,lights_lambert_fragment:r_,lights_lambert_pars_fragment:s_,lights_pars_begin:a_,lights_toon_fragment:l_,lights_toon_pars_fragment:c_,lights_phong_fragment:u_,lights_phong_pars_fragment:f_,lights_physical_fragment:h_,lights_physical_pars_fragment:d_,lights_fragment_begin:p_,lights_fragment_maps:m_,lights_fragment_end:g_,logdepthbuf_fragment:__,logdepthbuf_pars_fragment:v_,logdepthbuf_pars_vertex:y_,logdepthbuf_vertex:x_,map_fragment:S_,map_pars_fragment:b_,map_particle_fragment:E_,map_particle_pars_fragment:M_,metalnessmap_fragment:w_,metalnessmap_pars_fragment:T_,morphinstance_vertex:A_,morphcolor_vertex:R_,morphnormal_vertex:C_,morphtarget_pars_vertex:P_,morphtarget_vertex:L_,normal_fragment_begin:I_,normal_fragment_maps:D_,normal_pars_fragment:N_,normal_pars_vertex:U_,normal_vertex:O_,normalmap_pars_fragment:F_,clearcoat_normal_fragment_begin:k_,clearcoat_normal_fragment_maps:B_,clearcoat_pars_fragment:z_,iridescence_pars_fragment:V_,opaque_fragment:H_,packing:G_,premultiplied_alpha_fragment:W_,project_vertex:q_,dithering_fragment:X_,dithering_pars_fragment:j_,roughnessmap_fragment:$_,roughnessmap_pars_fragment:Y_,shadowmap_pars_fragment:K_,shadowmap_pars_vertex:J_,shadowmap_vertex:Z_,shadowmask_pars_fragment:Q_,skinbase_vertex:e0,skinning_pars_vertex:t0,skinning_vertex:n0,skinnormal_vertex:i0,specularmap_fragment:r0,specularmap_pars_fragment:s0,tonemapping_fragment:a0,tonemapping_pars_fragment:o0,transmission_fragment:l0,transmission_pars_fragment:c0,uv_pars_fragment:u0,uv_pars_vertex:f0,uv_vertex:h0,worldpos_vertex:d0,background_vert:p0,background_frag:m0,backgroundCube_vert:g0,backgroundCube_frag:_0,cube_vert:v0,cube_frag:y0,depth_vert:x0,depth_frag:S0,distanceRGBA_vert:b0,distanceRGBA_frag:E0,equirect_vert:M0,equirect_frag:w0,linedashed_vert:T0,linedashed_frag:A0,meshbasic_vert:R0,meshbasic_frag:C0,meshlambert_vert:P0,meshlambert_frag:L0,meshmatcap_vert:I0,meshmatcap_frag:D0,meshnormal_vert:N0,meshnormal_frag:U0,meshphong_vert:O0,meshphong_frag:F0,meshphysical_vert:k0,meshphysical_frag:B0,meshtoon_vert:z0,meshtoon_frag:V0,points_vert:H0,points_frag:G0,shadow_vert:W0,shadow_frag:q0,sprite_vert:X0,sprite_frag:j0},Ee={common:{diffuse:{value:new ht(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Qe}},envmap:{envMap:{value:null},envMapRotation:{value:new Qe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Qe},normalScale:{value:new vt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ht(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ht(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0},uvTransform:{value:new Qe}},sprite:{diffuse:{value:new ht(16777215)},opacity:{value:1},center:{value:new vt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}}},Nn={basic:{uniforms:Qt([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.fog]),vertexShader:et.meshbasic_vert,fragmentShader:et.meshbasic_frag},lambert:{uniforms:Qt([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new ht(0)}}]),vertexShader:et.meshlambert_vert,fragmentShader:et.meshlambert_frag},phong:{uniforms:Qt([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new ht(0)},specular:{value:new ht(1118481)},shininess:{value:30}}]),vertexShader:et.meshphong_vert,fragmentShader:et.meshphong_frag},standard:{uniforms:Qt([Ee.common,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.roughnessmap,Ee.metalnessmap,Ee.fog,Ee.lights,{emissive:{value:new ht(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag},toon:{uniforms:Qt([Ee.common,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.gradientmap,Ee.fog,Ee.lights,{emissive:{value:new ht(0)}}]),vertexShader:et.meshtoon_vert,fragmentShader:et.meshtoon_frag},matcap:{uniforms:Qt([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,{matcap:{value:null}}]),vertexShader:et.meshmatcap_vert,fragmentShader:et.meshmatcap_frag},points:{uniforms:Qt([Ee.points,Ee.fog]),vertexShader:et.points_vert,fragmentShader:et.points_frag},dashed:{uniforms:Qt([Ee.common,Ee.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:et.linedashed_vert,fragmentShader:et.linedashed_frag},depth:{uniforms:Qt([Ee.common,Ee.displacementmap]),vertexShader:et.depth_vert,fragmentShader:et.depth_frag},normal:{uniforms:Qt([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,{opacity:{value:1}}]),vertexShader:et.meshnormal_vert,fragmentShader:et.meshnormal_frag},sprite:{uniforms:Qt([Ee.sprite,Ee.fog]),vertexShader:et.sprite_vert,fragmentShader:et.sprite_frag},background:{uniforms:{uvTransform:{value:new Qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:et.background_vert,fragmentShader:et.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Qe}},vertexShader:et.backgroundCube_vert,fragmentShader:et.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:et.cube_vert,fragmentShader:et.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:et.equirect_vert,fragmentShader:et.equirect_frag},distanceRGBA:{uniforms:Qt([Ee.common,Ee.displacementmap,{referencePosition:{value:new Y},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:et.distanceRGBA_vert,fragmentShader:et.distanceRGBA_frag},shadow:{uniforms:Qt([Ee.lights,Ee.fog,{color:{value:new ht(0)},opacity:{value:1}}]),vertexShader:et.shadow_vert,fragmentShader:et.shadow_frag}};Nn.physical={uniforms:Qt([Nn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Qe},clearcoatNormalScale:{value:new vt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Qe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Qe},sheen:{value:0},sheenColor:{value:new ht(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Qe},transmissionSamplerSize:{value:new vt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Qe},attenuationDistance:{value:0},attenuationColor:{value:new ht(0)},specularColor:{value:new ht(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Qe},anisotropyVector:{value:new vt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Qe}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag};const ra={r:0,b:0,g:0},Di=new oi,$0=new Dt;function Y0(i,e,t,n,r,s,a){const o=new ht(0);let c=s===!0?0:1,l,h,f=null,d=0,m=null;function x(A){let b=A.isScene===!0?A.background:null;return b&&b.isTexture&&(b=(A.backgroundBlurriness>0?t:e).get(b)),b}function y(A){let b=!1;const L=x(A);L===null?g(o,c):L&&L.isColor&&(g(L,1),b=!0);const I=i.xr.getEnvironmentBlendMode();I==="additive"?n.buffers.color.setClear(0,0,0,1,a):I==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||b)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function _(A,b){const L=x(b);L&&(L.isCubeTexture||L.mapping===Ya)?(h===void 0&&(h=new an(new ws(1,1,1),new zn({name:"BackgroundCubeMaterial",uniforms:Fr(Nn.backgroundCube.uniforms),vertexShader:Nn.backgroundCube.vertexShader,fragmentShader:Nn.backgroundCube.fragmentShader,side:on,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(I,C,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),Di.copy(b.backgroundRotation),Di.x*=-1,Di.y*=-1,Di.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(Di.y*=-1,Di.z*=-1),h.material.uniforms.envMap.value=L,h.material.uniforms.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4($0.makeRotationFromEuler(Di)),h.material.toneMapped=ft.getTransfer(L.colorSpace)!==_t,(f!==L||d!==L.version||m!==i.toneMapping)&&(h.material.needsUpdate=!0,f=L,d=L.version,m=i.toneMapping),h.layers.enableAll(),A.unshift(h,h.geometry,h.material,0,0,null)):L&&L.isTexture&&(l===void 0&&(l=new an(new Ei(2,2),new zn({name:"BackgroundMaterial",uniforms:Fr(Nn.background.uniforms),vertexShader:Nn.background.vertexShader,fragmentShader:Nn.background.fragmentShader,side:Si,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=L,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.toneMapped=ft.getTransfer(L.colorSpace)!==_t,L.matrixAutoUpdate===!0&&L.updateMatrix(),l.material.uniforms.uvTransform.value.copy(L.matrix),(f!==L||d!==L.version||m!==i.toneMapping)&&(l.material.needsUpdate=!0,f=L,d=L.version,m=i.toneMapping),l.layers.enableAll(),A.unshift(l,l.geometry,l.material,0,0,null))}function g(A,b){A.getRGB(ra,wh(i)),n.buffers.color.setClear(ra.r,ra.g,ra.b,b,a)}function R(){h!==void 0&&(h.geometry.dispose(),h.material.dispose()),l!==void 0&&(l.geometry.dispose(),l.material.dispose())}return{getClearColor:function(){return o},setClearColor:function(A,b=1){o.set(A),c=b,g(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(A){c=A,g(o,c)},render:y,addToRenderList:_,dispose:R}}function K0(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=d(null);let s=r,a=!1;function o(S,N,k,F,$){let ae=!1;const Z=f(F,k,N);s!==Z&&(s=Z,l(s.object)),ae=m(S,F,k,$),ae&&x(S,F,k,$),$!==null&&e.update($,i.ELEMENT_ARRAY_BUFFER),(ae||a)&&(a=!1,b(S,N,k,F),$!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get($).buffer))}function c(){return i.createVertexArray()}function l(S){return i.bindVertexArray(S)}function h(S){return i.deleteVertexArray(S)}function f(S,N,k){const F=k.wireframe===!0;let $=n[S.id];$===void 0&&($={},n[S.id]=$);let ae=$[N.id];ae===void 0&&(ae={},$[N.id]=ae);let Z=ae[F];return Z===void 0&&(Z=d(c()),ae[F]=Z),Z}function d(S){const N=[],k=[],F=[];for(let $=0;$<t;$++)N[$]=0,k[$]=0,F[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:k,attributeDivisors:F,object:S,attributes:{},index:null}}function m(S,N,k,F){const $=s.attributes,ae=N.attributes;let Z=0;const fe=k.getAttributes();for(const J in fe)if(fe[J].location>=0){const se=$[J];let pe=ae[J];if(pe===void 0&&(J==="instanceMatrix"&&S.instanceMatrix&&(pe=S.instanceMatrix),J==="instanceColor"&&S.instanceColor&&(pe=S.instanceColor)),se===void 0||se.attribute!==pe||pe&&se.data!==pe.data)return!0;Z++}return s.attributesNum!==Z||s.index!==F}function x(S,N,k,F){const $={},ae=N.attributes;let Z=0;const fe=k.getAttributes();for(const J in fe)if(fe[J].location>=0){let se=ae[J];se===void 0&&(J==="instanceMatrix"&&S.instanceMatrix&&(se=S.instanceMatrix),J==="instanceColor"&&S.instanceColor&&(se=S.instanceColor));const pe={};pe.attribute=se,se&&se.data&&(pe.data=se.data),$[J]=pe,Z++}s.attributes=$,s.attributesNum=Z,s.index=F}function y(){const S=s.newAttributes;for(let N=0,k=S.length;N<k;N++)S[N]=0}function _(S){g(S,0)}function g(S,N){const k=s.newAttributes,F=s.enabledAttributes,$=s.attributeDivisors;k[S]=1,F[S]===0&&(i.enableVertexAttribArray(S),F[S]=1),$[S]!==N&&(i.vertexAttribDivisor(S,N),$[S]=N)}function R(){const S=s.newAttributes,N=s.enabledAttributes;for(let k=0,F=N.length;k<F;k++)N[k]!==S[k]&&(i.disableVertexAttribArray(k),N[k]=0)}function A(S,N,k,F,$,ae,Z){Z===!0?i.vertexAttribIPointer(S,N,k,$,ae):i.vertexAttribPointer(S,N,k,F,$,ae)}function b(S,N,k,F){y();const $=F.attributes,ae=k.getAttributes(),Z=N.defaultAttributeValues;for(const fe in ae){const J=ae[fe];if(J.location>=0){let te=$[fe];if(te===void 0&&(fe==="instanceMatrix"&&S.instanceMatrix&&(te=S.instanceMatrix),fe==="instanceColor"&&S.instanceColor&&(te=S.instanceColor)),te!==void 0){const se=te.normalized,pe=te.itemSize,_e=e.get(te);if(_e===void 0)continue;const Re=_e.buffer,ee=_e.type,G=_e.bytesPerElement,me=ee===i.INT||ee===i.UNSIGNED_INT||te.gpuType===oc;if(te.isInterleavedBufferAttribute){const he=te.data,ve=he.stride,Ne=te.offset;if(he.isInstancedInterleavedBuffer){for(let Ve=0;Ve<J.locationSize;Ve++)g(J.location+Ve,he.meshPerAttribute);S.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let Ve=0;Ve<J.locationSize;Ve++)_(J.location+Ve);i.bindBuffer(i.ARRAY_BUFFER,Re);for(let Ve=0;Ve<J.locationSize;Ve++)A(J.location+Ve,pe/J.locationSize,ee,se,ve*G,(Ne+pe/J.locationSize*Ve)*G,me)}else{if(te.isInstancedBufferAttribute){for(let he=0;he<J.locationSize;he++)g(J.location+he,te.meshPerAttribute);S.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let he=0;he<J.locationSize;he++)_(J.location+he);i.bindBuffer(i.ARRAY_BUFFER,Re);for(let he=0;he<J.locationSize;he++)A(J.location+he,pe/J.locationSize,ee,se,pe*G,pe/J.locationSize*he*G,me)}}else if(Z!==void 0){const se=Z[fe];if(se!==void 0)switch(se.length){case 2:i.vertexAttrib2fv(J.location,se);break;case 3:i.vertexAttrib3fv(J.location,se);break;case 4:i.vertexAttrib4fv(J.location,se);break;default:i.vertexAttrib1fv(J.location,se)}}}}R()}function L(){D();for(const S in n){const N=n[S];for(const k in N){const F=N[k];for(const $ in F)h(F[$].object),delete F[$];delete N[k]}delete n[S]}}function I(S){if(n[S.id]===void 0)return;const N=n[S.id];for(const k in N){const F=N[k];for(const $ in F)h(F[$].object),delete F[$];delete N[k]}delete n[S.id]}function C(S){for(const N in n){const k=n[N];if(k[S.id]===void 0)continue;const F=k[S.id];for(const $ in F)h(F[$].object),delete F[$];delete k[S.id]}}function D(){M(),a=!0,s!==r&&(s=r,l(s.object))}function M(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:D,resetDefaultState:M,dispose:L,releaseStatesOfGeometry:I,releaseStatesOfProgram:C,initAttributes:y,enableAttribute:_,disableUnusedAttributes:R}}function J0(i,e,t){let n;function r(l){n=l}function s(l,h){i.drawArrays(n,l,h),t.update(h,n,1)}function a(l,h,f){f!==0&&(i.drawArraysInstanced(n,l,h,f),t.update(h,n,f))}function o(l,h,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,f);let m=0;for(let x=0;x<f;x++)m+=h[x];t.update(m,n,1)}function c(l,h,f,d){if(f===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let x=0;x<l.length;x++)a(l[x],h[x],d[x]);else{m.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,f);let x=0;for(let y=0;y<f;y++)x+=h[y]*d[y];t.update(x,n,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function Z0(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(C){return!(C!==Pn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const D=C===Ss&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==Bn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==ti&&!D)}function c(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const f=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),_=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),R=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),A=i.getParameter(i.MAX_VARYING_VECTORS),b=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),L=x>0,I=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:f,reverseDepthBuffer:d,maxTextures:m,maxVertexTextures:x,maxTextureSize:y,maxCubemapSize:_,maxAttributes:g,maxVertexUniforms:R,maxVaryings:A,maxFragmentUniforms:b,vertexTextures:L,maxSamples:I}}function Q0(i){const e=this;let t=null,n=0,r=!1,s=!1;const a=new Ui,o=new Qe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const m=f.length!==0||d||n!==0||r;return r=d,n=f.length,m},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){t=h(f,d,0)},this.setState=function(f,d,m){const x=f.clippingPlanes,y=f.clipIntersection,_=f.clipShadows,g=i.get(f);if(!r||x===null||x.length===0||s&&!_)s?h(null):l();else{const R=s?0:n,A=R*4;let b=g.clippingState||null;c.value=b,b=h(x,d,A,m);for(let L=0;L!==A;++L)b[L]=t[L];g.clippingState=b,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=R}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(f,d,m,x){const y=f!==null?f.length:0;let _=null;if(y!==0){if(_=c.value,x!==!0||_===null){const g=m+y*4,R=d.matrixWorldInverse;o.getNormalMatrix(R),(_===null||_.length<g)&&(_=new Float32Array(g));for(let A=0,b=m;A!==y;++A,b+=4)a.copy(f[A]).applyMatrix4(R,o),a.normal.toArray(_,b),_[b+3]=a.constant}c.value=_,c.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,_}}function ev(i){let e=new WeakMap;function t(a,o){return o===cl?a.mapping=Ir:o===ul&&(a.mapping=Dr),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===cl||o===ul)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new rg(c.height);return l.fromEquirectangularTexture(i,a),e.set(a,l),a.addEventListener("dispose",r),t(l.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}const br=4,pu=[.125,.215,.35,.446,.526,.582],ki=20,No=new mc,mu=new ht;let Uo=null,Oo=0,Fo=0,ko=!1;const Oi=(1+Math.sqrt(5))/2,mr=1/Oi,gu=[new Y(-Oi,mr,0),new Y(Oi,mr,0),new Y(-mr,0,Oi),new Y(mr,0,Oi),new Y(0,Oi,-mr),new Y(0,Oi,mr),new Y(-1,1,-1),new Y(1,1,-1),new Y(-1,1,1),new Y(1,1,1)];class _u{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){Uo=this._renderer.getRenderTarget(),Oo=this._renderer.getActiveCubeFace(),Fo=this._renderer.getActiveMipmapLevel(),ko=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=xu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=yu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Uo,Oo,Fo),this._renderer.xr.enabled=ko,e.scissorTest=!1,sa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ir||e.mapping===Dr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Uo=this._renderer.getRenderTarget(),Oo=this._renderer.getActiveCubeFace(),Fo=this._renderer.getActiveMipmapLevel(),ko=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:pn,minFilter:pn,generateMipmaps:!1,type:Ss,format:Pn,colorSpace:Or,depthBuffer:!1},r=vu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=vu(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=tv(s)),this._blurMaterial=nv(s,e,t)}return r}_compileMaterial(e){const t=new an(this._lodPlanes[0],e);this._renderer.compile(t,No)}_sceneToCubeUV(e,t,n,r){const o=new Rn(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,d=h.toneMapping;h.getClearColor(mu),h.toneMapping=ri,h.autoClear=!1;const m=new gs({name:"PMREM.Background",side:on,depthWrite:!1,depthTest:!1}),x=new an(new ws,m);let y=!1;const _=e.background;_?_.isColor&&(m.color.copy(_),e.background=null,y=!0):(m.color.copy(mu),y=!0);for(let g=0;g<6;g++){const R=g%3;R===0?(o.up.set(0,c[g],0),o.lookAt(l[g],0,0)):R===1?(o.up.set(0,0,c[g]),o.lookAt(0,l[g],0)):(o.up.set(0,c[g],0),o.lookAt(0,0,l[g]));const A=this._cubeSize;sa(r,R*A,g>2?A:0,A,A),h.setRenderTarget(r),y&&h.render(x,o),h.render(e,o)}x.geometry.dispose(),x.material.dispose(),h.toneMapping=d,h.autoClear=f,e.background=_}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===Ir||e.mapping===Dr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=xu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=yu());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new an(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const c=this._cubeSize;sa(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,No)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=gu[(r-s-1)%gu.length];this._blur(e,s-1,s,a,o)}t.autoClear=n}_blur(e,t,n,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,"latitudinal",s),this._halfBlur(a,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,f=new an(this._lodPlanes[r],l),d=l.uniforms,m=this._sizeLods[n]-1,x=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*ki-1),y=s/x,_=isFinite(s)?1+Math.floor(h*y):ki;_>ki&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${ki}`);const g=[];let R=0;for(let C=0;C<ki;++C){const D=C/y,M=Math.exp(-D*D/2);g.push(M),C===0?R+=M:C<_&&(R+=2*M)}for(let C=0;C<g.length;C++)g[C]=g[C]/R;d.envMap.value=e.texture,d.samples.value=_,d.weights.value=g,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:A}=this;d.dTheta.value=x,d.mipInt.value=A-n;const b=this._sizeLods[r],L=3*b*(r>A-br?r-A+br:0),I=4*(this._cubeSize-b);sa(t,L,I,3*b,2*b),c.setRenderTarget(t),c.render(f,No)}}function tv(i){const e=[],t=[],n=[];let r=i;const s=i-br+1+pu.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let c=1/o;a>i-br?c=pu[a-i+br-1]:a===0&&(c=0),n.push(c);const l=1/(o-2),h=-l,f=1+l,d=[h,h,f,h,f,f,h,h,f,f,h,f],m=6,x=6,y=3,_=2,g=1,R=new Float32Array(y*x*m),A=new Float32Array(_*x*m),b=new Float32Array(g*x*m);for(let I=0;I<m;I++){const C=I%3*2/3-1,D=I>2?0:-1,M=[C,D,0,C+2/3,D,0,C+2/3,D+1,0,C,D,0,C+2/3,D+1,0,C,D+1,0];R.set(M,y*x*I),A.set(d,_*x*I);const S=[I,I,I,I,I,I];b.set(S,g*x*I)}const L=new Mi;L.setAttribute("position",new Fn(R,y)),L.setAttribute("uv",new Fn(A,_)),L.setAttribute("faceIndex",new Fn(b,g)),e.push(L),r>br&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function vu(i,e,t){const n=new bi(i,e,t);return n.texture.mapping=Ya,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function sa(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function nv(i,e,t){const n=new Float32Array(ki),r=new Y(0,1,0);return new zn({name:"SphericalGaussianBlur",defines:{n:ki,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:gc(),fragmentShader:`

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
		`,blending:yi,depthTest:!1,depthWrite:!1})}function yu(){return new zn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:gc(),fragmentShader:`

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
		`,blending:yi,depthTest:!1,depthWrite:!1})}function xu(){return new zn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:gc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:yi,depthTest:!1,depthWrite:!1})}function gc(){return`

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
	`}function iv(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===cl||c===ul,h=c===Ir||c===Dr;if(l||h){let f=e.get(o);const d=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new _u(i)),f=l?t.fromEquirectangular(o,f):t.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),f.texture;if(f!==void 0)return f.texture;{const m=o.image;return l&&m&&m.height>0||h&&m&&r(m)?(t===null&&(t=new _u(i)),f=l?t.fromEquirectangular(o):t.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),o.addEventListener("dispose",s),f.texture):null}}}return o}function r(o){let c=0;const l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function s(o){const c=o.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function rv(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&_r("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function sv(i,e,t,n){const r={},s=new WeakMap;function a(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const x in d.attributes)e.remove(d.attributes[x]);d.removeEventListener("dispose",a),delete r[d.id];const m=s.get(d);m&&(e.remove(m),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(f,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,t.memory.geometries++),d}function c(f){const d=f.attributes;for(const m in d)e.update(d[m],i.ARRAY_BUFFER)}function l(f){const d=[],m=f.index,x=f.attributes.position;let y=0;if(m!==null){const R=m.array;y=m.version;for(let A=0,b=R.length;A<b;A+=3){const L=R[A+0],I=R[A+1],C=R[A+2];d.push(L,I,I,C,C,L)}}else if(x!==void 0){const R=x.array;y=x.version;for(let A=0,b=R.length/3-1;A<b;A+=3){const L=A+0,I=A+1,C=A+2;d.push(L,I,I,C,C,L)}}else return;const _=new(vh(d)?Mh:Eh)(d,1);_.version=y;const g=s.get(f);g&&e.remove(g),s.set(f,_)}function h(f){const d=s.get(f);if(d){const m=f.index;m!==null&&d.version<m.version&&l(f)}else l(f);return s.get(f)}return{get:o,update:c,getWireframeAttribute:h}}function av(i,e,t){let n;function r(d){n=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function c(d,m){i.drawElements(n,m,s,d*a),t.update(m,n,1)}function l(d,m,x){x!==0&&(i.drawElementsInstanced(n,m,s,d*a,x),t.update(m,n,x))}function h(d,m,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,s,d,0,x);let _=0;for(let g=0;g<x;g++)_+=m[g];t.update(_,n,1)}function f(d,m,x,y){if(x===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let g=0;g<d.length;g++)l(d[g]/a,m[g],y[g]);else{_.multiDrawElementsInstancedWEBGL(n,m,0,s,d,0,y,0,x);let g=0;for(let R=0;R<x;R++)g+=m[R]*y[R];t.update(g,n,1)}}this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=f}function ov(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(s/3);break;case i.LINES:t.lines+=o*(s/2);break;case i.LINE_STRIP:t.lines+=o*(s-1);break;case i.LINE_LOOP:t.lines+=o*s;break;case i.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function lv(i,e,t){const n=new WeakMap,r=new Rt;function s(a,o,c){const l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=h!==void 0?h.length:0;let d=n.get(o);if(d===void 0||d.count!==f){let M=function(){C.dispose(),n.delete(o),o.removeEventListener("dispose",M)};d!==void 0&&d.texture.dispose();const m=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,y=o.morphAttributes.color!==void 0,_=o.morphAttributes.position||[],g=o.morphAttributes.normal||[],R=o.morphAttributes.color||[];let A=0;m===!0&&(A=1),x===!0&&(A=2),y===!0&&(A=3);let b=o.attributes.position.count*A,L=1;b>e.maxTextureSize&&(L=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const I=new Float32Array(b*L*4*f),C=new xh(I,b,L,f);C.type=ti,C.needsUpdate=!0;const D=A*4;for(let S=0;S<f;S++){const N=_[S],k=g[S],F=R[S],$=b*L*4*S;for(let ae=0;ae<N.count;ae++){const Z=ae*D;m===!0&&(r.fromBufferAttribute(N,ae),I[$+Z+0]=r.x,I[$+Z+1]=r.y,I[$+Z+2]=r.z,I[$+Z+3]=0),x===!0&&(r.fromBufferAttribute(k,ae),I[$+Z+4]=r.x,I[$+Z+5]=r.y,I[$+Z+6]=r.z,I[$+Z+7]=0),y===!0&&(r.fromBufferAttribute(F,ae),I[$+Z+8]=r.x,I[$+Z+9]=r.y,I[$+Z+10]=r.z,I[$+Z+11]=F.itemSize===4?r.w:1)}}d={count:f,texture:C,size:new vt(b,L)},n.set(o,d),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let m=0;for(let y=0;y<l.length;y++)m+=l[y];const x=o.morphTargetsRelative?1:1-m;c.getUniforms().setValue(i,"morphTargetBaseInfluence",x),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:s}}function cv(i,e,t,n){let r=new WeakMap;function s(c){const l=n.render.frame,h=c.geometry,f=e.get(c,h);if(r.get(f)!==l&&(e.update(f),r.set(f,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),r.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;r.get(d)!==l&&(d.update(),r.set(d,l))}return f}function a(){r=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:a}}const Dh=new Zt,Su=new Ph(1,1),Nh=new xh,Uh=new Vm,Oh=new Ah,bu=[],Eu=[],Mu=new Float32Array(16),wu=new Float32Array(9),Tu=new Float32Array(4);function qr(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=bu[r];if(s===void 0&&(s=new Float32Array(r),bu[r]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(s,o)}return s}function Nt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Ut(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Ja(i,e){let t=Eu[e];t===void 0&&(t=new Int32Array(e),Eu[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function uv(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function fv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;i.uniform2fv(this.addr,e),Ut(t,e)}}function hv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Nt(t,e))return;i.uniform3fv(this.addr,e),Ut(t,e)}}function dv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;i.uniform4fv(this.addr,e),Ut(t,e)}}function pv(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Nt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Ut(t,e)}else{if(Nt(t,n))return;Tu.set(n),i.uniformMatrix2fv(this.addr,!1,Tu),Ut(t,n)}}function mv(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Nt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Ut(t,e)}else{if(Nt(t,n))return;wu.set(n),i.uniformMatrix3fv(this.addr,!1,wu),Ut(t,n)}}function gv(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Nt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Ut(t,e)}else{if(Nt(t,n))return;Mu.set(n),i.uniformMatrix4fv(this.addr,!1,Mu),Ut(t,n)}}function _v(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function vv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;i.uniform2iv(this.addr,e),Ut(t,e)}}function yv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Nt(t,e))return;i.uniform3iv(this.addr,e),Ut(t,e)}}function xv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;i.uniform4iv(this.addr,e),Ut(t,e)}}function Sv(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function bv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;i.uniform2uiv(this.addr,e),Ut(t,e)}}function Ev(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Nt(t,e))return;i.uniform3uiv(this.addr,e),Ut(t,e)}}function Mv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;i.uniform4uiv(this.addr,e),Ut(t,e)}}function wv(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(Su.compareFunction=_h,s=Su):s=Dh,t.setTexture2D(e||s,r)}function Tv(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Uh,r)}function Av(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Oh,r)}function Rv(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Nh,r)}function Cv(i){switch(i){case 5126:return uv;case 35664:return fv;case 35665:return hv;case 35666:return dv;case 35674:return pv;case 35675:return mv;case 35676:return gv;case 5124:case 35670:return _v;case 35667:case 35671:return vv;case 35668:case 35672:return yv;case 35669:case 35673:return xv;case 5125:return Sv;case 36294:return bv;case 36295:return Ev;case 36296:return Mv;case 35678:case 36198:case 36298:case 36306:case 35682:return wv;case 35679:case 36299:case 36307:return Tv;case 35680:case 36300:case 36308:case 36293:return Av;case 36289:case 36303:case 36311:case 36292:return Rv}}function Pv(i,e){i.uniform1fv(this.addr,e)}function Lv(i,e){const t=qr(e,this.size,2);i.uniform2fv(this.addr,t)}function Iv(i,e){const t=qr(e,this.size,3);i.uniform3fv(this.addr,t)}function Dv(i,e){const t=qr(e,this.size,4);i.uniform4fv(this.addr,t)}function Nv(i,e){const t=qr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Uv(i,e){const t=qr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Ov(i,e){const t=qr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Fv(i,e){i.uniform1iv(this.addr,e)}function kv(i,e){i.uniform2iv(this.addr,e)}function Bv(i,e){i.uniform3iv(this.addr,e)}function zv(i,e){i.uniform4iv(this.addr,e)}function Vv(i,e){i.uniform1uiv(this.addr,e)}function Hv(i,e){i.uniform2uiv(this.addr,e)}function Gv(i,e){i.uniform3uiv(this.addr,e)}function Wv(i,e){i.uniform4uiv(this.addr,e)}function qv(i,e,t){const n=this.cache,r=e.length,s=Ja(t,r);Nt(n,s)||(i.uniform1iv(this.addr,s),Ut(n,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||Dh,s[a])}function Xv(i,e,t){const n=this.cache,r=e.length,s=Ja(t,r);Nt(n,s)||(i.uniform1iv(this.addr,s),Ut(n,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Uh,s[a])}function jv(i,e,t){const n=this.cache,r=e.length,s=Ja(t,r);Nt(n,s)||(i.uniform1iv(this.addr,s),Ut(n,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Oh,s[a])}function $v(i,e,t){const n=this.cache,r=e.length,s=Ja(t,r);Nt(n,s)||(i.uniform1iv(this.addr,s),Ut(n,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Nh,s[a])}function Yv(i){switch(i){case 5126:return Pv;case 35664:return Lv;case 35665:return Iv;case 35666:return Dv;case 35674:return Nv;case 35675:return Uv;case 35676:return Ov;case 5124:case 35670:return Fv;case 35667:case 35671:return kv;case 35668:case 35672:return Bv;case 35669:case 35673:return zv;case 5125:return Vv;case 36294:return Hv;case 36295:return Gv;case 36296:return Wv;case 35678:case 36198:case 36298:case 36306:case 35682:return qv;case 35679:case 36299:case 36307:return Xv;case 35680:case 36300:case 36308:case 36293:return jv;case 36289:case 36303:case 36311:case 36292:return $v}}class Kv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Cv(t.type)}}class Jv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Yv(t.type)}}class Zv{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],n)}}}const Bo=/(\w+)(\])?(\[|\.)?/g;function Au(i,e){i.seq.push(e),i.map[e.id]=e}function Qv(i,e,t){const n=i.name,r=n.length;for(Bo.lastIndex=0;;){const s=Bo.exec(n),a=Bo.lastIndex;let o=s[1];const c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===r){Au(t,l===void 0?new Kv(o,i,e):new Jv(o,i,e));break}else{let f=t.map[o];f===void 0&&(f=new Zv(o),Au(t,f)),t=f}}}class Sa{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);Qv(s,a,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&n.push(a)}return n}}function Ru(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const ey=37297;let ty=0;function ny(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const Cu=new Qe;function iy(i){ft._getMatrix(Cu,ft.workingColorSpace,i);const e=`mat3( ${Cu.elements.map(t=>t.toFixed(4))} )`;switch(ft.getTransfer(i)){case Ia:return[e,"LinearTransferOETF"];case _t:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Pu(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+ny(i.getShaderSource(e),a)}else return r}function ry(i,e){const t=iy(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function sy(i,e){let t;switch(e){case hm:t="Linear";break;case dm:t="Reinhard";break;case pm:t="Cineon";break;case mm:t="ACESFilmic";break;case _m:t="AgX";break;case vm:t="Neutral";break;case gm:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const aa=new Y;function ay(){ft.getLuminanceCoefficients(aa);const i=aa.x.toFixed(4),e=aa.y.toFixed(4),t=aa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function oy(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(os).join(`
`)}function ly(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function cy(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),a=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function os(i){return i!==""}function Lu(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Iu(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const uy=/^[ \t]*#include +<([\w\d./]+)>/gm;function zl(i){return i.replace(uy,hy)}const fy=new Map;function hy(i,e){let t=et[e];if(t===void 0){const n=fy.get(e);if(n!==void 0)t=et[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return zl(t)}const dy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Du(i){return i.replace(dy,py)}function py(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Nu(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function my(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===rh?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===qp?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Kn&&(e="SHADOWMAP_TYPE_VSM"),e}function gy(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ir:case Dr:e="ENVMAP_TYPE_CUBE";break;case Ya:e="ENVMAP_TYPE_CUBE_UV";break}return e}function _y(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Dr:e="ENVMAP_MODE_REFRACTION";break}return e}function vy(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case sh:e="ENVMAP_BLENDING_MULTIPLY";break;case um:e="ENVMAP_BLENDING_MIX";break;case fm:e="ENVMAP_BLENDING_ADD";break}return e}function yy(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function xy(i,e,t,n){const r=i.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=my(t),l=gy(t),h=_y(t),f=vy(t),d=yy(t),m=oy(t),x=ly(s),y=r.createProgram();let _,g,R=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(os).join(`
`),_.length>0&&(_+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(os).join(`
`),g.length>0&&(g+=`
`)):(_=[Nu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(os).join(`
`),g=[Nu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ri?"#define TONE_MAPPING":"",t.toneMapping!==ri?et.tonemapping_pars_fragment:"",t.toneMapping!==ri?sy("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",et.colorspace_pars_fragment,ry("linearToOutputTexel",t.outputColorSpace),ay(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(os).join(`
`)),a=zl(a),a=Lu(a,t),a=Iu(a,t),o=zl(o),o=Lu(o,t),o=Iu(o,t),a=Du(a),o=Du(o),t.isRawShaderMaterial!==!0&&(R=`#version 300 es
`,_=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,g=["#define varying in",t.glslVersion===$c?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===$c?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const A=R+_+a,b=R+g+o,L=Ru(r,r.VERTEX_SHADER,A),I=Ru(r,r.FRAGMENT_SHADER,b);r.attachShader(y,L),r.attachShader(y,I),t.index0AttributeName!==void 0?r.bindAttribLocation(y,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y);function C(N){if(i.debug.checkShaderErrors){const k=r.getProgramInfoLog(y).trim(),F=r.getShaderInfoLog(L).trim(),$=r.getShaderInfoLog(I).trim();let ae=!0,Z=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(ae=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,y,L,I);else{const fe=Pu(r,L,"vertex"),J=Pu(r,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+k+`
`+fe+`
`+J)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(F===""||$==="")&&(Z=!1);Z&&(N.diagnostics={runnable:ae,programLog:k,vertexShader:{log:F,prefix:_},fragmentShader:{log:$,prefix:g}})}r.deleteShader(L),r.deleteShader(I),D=new Sa(r,y),M=cy(r,y)}let D;this.getUniforms=function(){return D===void 0&&C(this),D};let M;this.getAttributes=function(){return M===void 0&&C(this),M};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(y,ey)),S},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=ty++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=L,this.fragmentShader=I,this}let Sy=0;class by{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Ey(e),t.set(e,n)),n}}class Ey{constructor(e){this.id=Sy++,this.code=e,this.usedTimes=0}}function My(i,e,t,n,r,s,a){const o=new Sh,c=new by,l=new Set,h=[],f=r.logarithmicDepthBuffer,d=r.vertexTextures;let m=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(M){return l.add(M),M===0?"uv":`uv${M}`}function _(M,S,N,k,F){const $=k.fog,ae=F.geometry,Z=M.isMeshStandardMaterial?k.environment:null,fe=(M.isMeshStandardMaterial?t:e).get(M.envMap||Z),J=fe&&fe.mapping===Ya?fe.image.height:null,te=x[M.type];M.precision!==null&&(m=r.getMaxPrecision(M.precision),m!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",m,"instead."));const se=ae.morphAttributes.position||ae.morphAttributes.normal||ae.morphAttributes.color,pe=se!==void 0?se.length:0;let _e=0;ae.morphAttributes.position!==void 0&&(_e=1),ae.morphAttributes.normal!==void 0&&(_e=2),ae.morphAttributes.color!==void 0&&(_e=3);let Re,ee,G,me;if(te){const Ke=Nn[te];Re=Ke.vertexShader,ee=Ke.fragmentShader}else Re=M.vertexShader,ee=M.fragmentShader,c.update(M),G=c.getVertexShaderID(M),me=c.getFragmentShaderID(M);const he=i.getRenderTarget(),ve=i.state.buffers.depth.getReversed(),Ne=F.isInstancedMesh===!0,Ve=F.isBatchedMesh===!0,ye=!!M.map,we=!!M.matcap,ct=!!fe,O=!!M.aoMap,Ot=!!M.lightMap,rt=!!M.bumpMap,Be=!!M.normalMap,ke=!!M.displacementMap,mt=!!M.emissiveMap,Ue=!!M.metalnessMap,P=!!M.roughnessMap,E=M.anisotropy>0,W=M.clearcoat>0,oe=M.dispersion>0,le=M.iridescence>0,ne=M.sheen>0,Oe=M.transmission>0,ge=E&&!!M.anisotropyMap,Pe=W&&!!M.clearcoatMap,st=W&&!!M.clearcoatNormalMap,de=W&&!!M.clearcoatRoughnessMap,Ie=le&&!!M.iridescenceMap,Ge=le&&!!M.iridescenceThicknessMap,qe=ne&&!!M.sheenColorMap,Le=ne&&!!M.sheenRoughnessMap,Me=!!M.specularMap,Ze=!!M.specularColorMap,dt=!!M.specularIntensityMap,B=Oe&&!!M.transmissionMap,xe=Oe&&!!M.thicknessMap,Q=!!M.gradientMap,ie=!!M.alphaMap,Te=M.alphaTest>0,q=!!M.alphaHash,$e=!!M.extensions;let bt=ri;M.toneMapped&&(he===null||he.isXRRenderTarget===!0)&&(bt=i.toneMapping);const Ft={shaderID:te,shaderType:M.type,shaderName:M.name,vertexShader:Re,fragmentShader:ee,defines:M.defines,customVertexShaderID:G,customFragmentShaderID:me,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:m,batching:Ve,batchingColor:Ve&&F._colorsTexture!==null,instancing:Ne,instancingColor:Ne&&F.instanceColor!==null,instancingMorph:Ne&&F.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:he===null?i.outputColorSpace:he.isXRRenderTarget===!0?he.texture.colorSpace:Or,alphaToCoverage:!!M.alphaToCoverage,map:ye,matcap:we,envMap:ct,envMapMode:ct&&fe.mapping,envMapCubeUVHeight:J,aoMap:O,lightMap:Ot,bumpMap:rt,normalMap:Be,displacementMap:d&&ke,emissiveMap:mt,normalMapObjectSpace:Be&&M.normalMapType===Em,normalMapTangentSpace:Be&&M.normalMapType===bm,metalnessMap:Ue,roughnessMap:P,anisotropy:E,anisotropyMap:ge,clearcoat:W,clearcoatMap:Pe,clearcoatNormalMap:st,clearcoatRoughnessMap:de,dispersion:oe,iridescence:le,iridescenceMap:Ie,iridescenceThicknessMap:Ge,sheen:ne,sheenColorMap:qe,sheenRoughnessMap:Le,specularMap:Me,specularColorMap:Ze,specularIntensityMap:dt,transmission:Oe,transmissionMap:B,thicknessMap:xe,gradientMap:Q,opaque:M.transparent===!1&&M.blending===On&&M.alphaToCoverage===!1,alphaMap:ie,alphaTest:Te,alphaHash:q,combine:M.combine,mapUv:ye&&y(M.map.channel),aoMapUv:O&&y(M.aoMap.channel),lightMapUv:Ot&&y(M.lightMap.channel),bumpMapUv:rt&&y(M.bumpMap.channel),normalMapUv:Be&&y(M.normalMap.channel),displacementMapUv:ke&&y(M.displacementMap.channel),emissiveMapUv:mt&&y(M.emissiveMap.channel),metalnessMapUv:Ue&&y(M.metalnessMap.channel),roughnessMapUv:P&&y(M.roughnessMap.channel),anisotropyMapUv:ge&&y(M.anisotropyMap.channel),clearcoatMapUv:Pe&&y(M.clearcoatMap.channel),clearcoatNormalMapUv:st&&y(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:de&&y(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Ie&&y(M.iridescenceMap.channel),iridescenceThicknessMapUv:Ge&&y(M.iridescenceThicknessMap.channel),sheenColorMapUv:qe&&y(M.sheenColorMap.channel),sheenRoughnessMapUv:Le&&y(M.sheenRoughnessMap.channel),specularMapUv:Me&&y(M.specularMap.channel),specularColorMapUv:Ze&&y(M.specularColorMap.channel),specularIntensityMapUv:dt&&y(M.specularIntensityMap.channel),transmissionMapUv:B&&y(M.transmissionMap.channel),thicknessMapUv:xe&&y(M.thicknessMap.channel),alphaMapUv:ie&&y(M.alphaMap.channel),vertexTangents:!!ae.attributes.tangent&&(Be||E),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!ae.attributes.color&&ae.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!ae.attributes.uv&&(ye||ie),fog:!!$,useFog:M.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:ve,skinning:F.isSkinnedMesh===!0,morphTargets:ae.morphAttributes.position!==void 0,morphNormals:ae.morphAttributes.normal!==void 0,morphColors:ae.morphAttributes.color!==void 0,morphTargetsCount:pe,morphTextureStride:_e,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&N.length>0,shadowMapType:i.shadowMap.type,toneMapping:bt,decodeVideoTexture:ye&&M.map.isVideoTexture===!0&&ft.getTransfer(M.map.colorSpace)===_t,decodeVideoTextureEmissive:mt&&M.emissiveMap.isVideoTexture===!0&&ft.getTransfer(M.emissiveMap.colorSpace)===_t,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Jn,flipSided:M.side===on,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:$e&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:($e&&M.extensions.multiDraw===!0||Ve)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Ft.vertexUv1s=l.has(1),Ft.vertexUv2s=l.has(2),Ft.vertexUv3s=l.has(3),l.clear(),Ft}function g(M){const S=[];if(M.shaderID?S.push(M.shaderID):(S.push(M.customVertexShaderID),S.push(M.customFragmentShaderID)),M.defines!==void 0)for(const N in M.defines)S.push(N),S.push(M.defines[N]);return M.isRawShaderMaterial===!1&&(R(S,M),A(S,M),S.push(i.outputColorSpace)),S.push(M.customProgramCacheKey),S.join()}function R(M,S){M.push(S.precision),M.push(S.outputColorSpace),M.push(S.envMapMode),M.push(S.envMapCubeUVHeight),M.push(S.mapUv),M.push(S.alphaMapUv),M.push(S.lightMapUv),M.push(S.aoMapUv),M.push(S.bumpMapUv),M.push(S.normalMapUv),M.push(S.displacementMapUv),M.push(S.emissiveMapUv),M.push(S.metalnessMapUv),M.push(S.roughnessMapUv),M.push(S.anisotropyMapUv),M.push(S.clearcoatMapUv),M.push(S.clearcoatNormalMapUv),M.push(S.clearcoatRoughnessMapUv),M.push(S.iridescenceMapUv),M.push(S.iridescenceThicknessMapUv),M.push(S.sheenColorMapUv),M.push(S.sheenRoughnessMapUv),M.push(S.specularMapUv),M.push(S.specularColorMapUv),M.push(S.specularIntensityMapUv),M.push(S.transmissionMapUv),M.push(S.thicknessMapUv),M.push(S.combine),M.push(S.fogExp2),M.push(S.sizeAttenuation),M.push(S.morphTargetsCount),M.push(S.morphAttributeCount),M.push(S.numDirLights),M.push(S.numPointLights),M.push(S.numSpotLights),M.push(S.numSpotLightMaps),M.push(S.numHemiLights),M.push(S.numRectAreaLights),M.push(S.numDirLightShadows),M.push(S.numPointLightShadows),M.push(S.numSpotLightShadows),M.push(S.numSpotLightShadowsWithMaps),M.push(S.numLightProbes),M.push(S.shadowMapType),M.push(S.toneMapping),M.push(S.numClippingPlanes),M.push(S.numClipIntersection),M.push(S.depthPacking)}function A(M,S){o.disableAll(),S.supportsVertexTextures&&o.enable(0),S.instancing&&o.enable(1),S.instancingColor&&o.enable(2),S.instancingMorph&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),S.dispersion&&o.enable(20),S.batchingColor&&o.enable(21),M.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reverseDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),M.push(o.mask)}function b(M){const S=x[M.type];let N;if(S){const k=Nn[S];N=eg.clone(k.uniforms)}else N=M.uniforms;return N}function L(M,S){let N;for(let k=0,F=h.length;k<F;k++){const $=h[k];if($.cacheKey===S){N=$,++N.usedTimes;break}}return N===void 0&&(N=new xy(i,S,M,s),h.push(N)),N}function I(M){if(--M.usedTimes===0){const S=h.indexOf(M);h[S]=h[h.length-1],h.pop(),M.destroy()}}function C(M){c.remove(M)}function D(){c.dispose()}return{getParameters:_,getProgramCacheKey:g,getUniforms:b,acquireProgram:L,releaseProgram:I,releaseShaderCache:C,programs:h,dispose:D}}function wy(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function r(a,o,c){i.get(a)[o]=c}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function Ty(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Uu(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Ou(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function a(f,d,m,x,y,_){let g=i[e];return g===void 0?(g={id:f.id,object:f,geometry:d,material:m,groupOrder:x,renderOrder:f.renderOrder,z:y,group:_},i[e]=g):(g.id=f.id,g.object=f,g.geometry=d,g.material=m,g.groupOrder=x,g.renderOrder=f.renderOrder,g.z=y,g.group=_),e++,g}function o(f,d,m,x,y,_){const g=a(f,d,m,x,y,_);m.transmission>0?n.push(g):m.transparent===!0?r.push(g):t.push(g)}function c(f,d,m,x,y,_){const g=a(f,d,m,x,y,_);m.transmission>0?n.unshift(g):m.transparent===!0?r.unshift(g):t.unshift(g)}function l(f,d){t.length>1&&t.sort(f||Ty),n.length>1&&n.sort(d||Uu),r.length>1&&r.sort(d||Uu)}function h(){for(let f=e,d=i.length;f<d;f++){const m=i[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:o,unshift:c,finish:h,sort:l}}function Ay(){let i=new WeakMap;function e(n,r){const s=i.get(n);let a;return s===void 0?(a=new Ou,i.set(n,[a])):r>=s.length?(a=new Ou,s.push(a)):a=s[r],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Ry(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new Y,color:new ht};break;case"SpotLight":t={position:new Y,direction:new Y,color:new ht,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Y,color:new ht,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Y,skyColor:new ht,groundColor:new ht};break;case"RectAreaLight":t={color:new ht,position:new Y,halfWidth:new Y,halfHeight:new Y};break}return i[e.id]=t,t}}}function Cy(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Py=0;function Ly(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Iy(i){const e=new Ry,t=Cy(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new Y);const r=new Y,s=new Dt,a=new Dt;function o(l){let h=0,f=0,d=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let m=0,x=0,y=0,_=0,g=0,R=0,A=0,b=0,L=0,I=0,C=0;l.sort(Ly);for(let M=0,S=l.length;M<S;M++){const N=l[M],k=N.color,F=N.intensity,$=N.distance,ae=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)h+=k.r*F,f+=k.g*F,d+=k.b*F;else if(N.isLightProbe){for(let Z=0;Z<9;Z++)n.probe[Z].addScaledVector(N.sh.coefficients[Z],F);C++}else if(N.isDirectionalLight){const Z=e.get(N);if(Z.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const fe=N.shadow,J=t.get(N);J.shadowIntensity=fe.intensity,J.shadowBias=fe.bias,J.shadowNormalBias=fe.normalBias,J.shadowRadius=fe.radius,J.shadowMapSize=fe.mapSize,n.directionalShadow[m]=J,n.directionalShadowMap[m]=ae,n.directionalShadowMatrix[m]=N.shadow.matrix,R++}n.directional[m]=Z,m++}else if(N.isSpotLight){const Z=e.get(N);Z.position.setFromMatrixPosition(N.matrixWorld),Z.color.copy(k).multiplyScalar(F),Z.distance=$,Z.coneCos=Math.cos(N.angle),Z.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),Z.decay=N.decay,n.spot[y]=Z;const fe=N.shadow;if(N.map&&(n.spotLightMap[L]=N.map,L++,fe.updateMatrices(N),N.castShadow&&I++),n.spotLightMatrix[y]=fe.matrix,N.castShadow){const J=t.get(N);J.shadowIntensity=fe.intensity,J.shadowBias=fe.bias,J.shadowNormalBias=fe.normalBias,J.shadowRadius=fe.radius,J.shadowMapSize=fe.mapSize,n.spotShadow[y]=J,n.spotShadowMap[y]=ae,b++}y++}else if(N.isRectAreaLight){const Z=e.get(N);Z.color.copy(k).multiplyScalar(F),Z.halfWidth.set(N.width*.5,0,0),Z.halfHeight.set(0,N.height*.5,0),n.rectArea[_]=Z,_++}else if(N.isPointLight){const Z=e.get(N);if(Z.color.copy(N.color).multiplyScalar(N.intensity),Z.distance=N.distance,Z.decay=N.decay,N.castShadow){const fe=N.shadow,J=t.get(N);J.shadowIntensity=fe.intensity,J.shadowBias=fe.bias,J.shadowNormalBias=fe.normalBias,J.shadowRadius=fe.radius,J.shadowMapSize=fe.mapSize,J.shadowCameraNear=fe.camera.near,J.shadowCameraFar=fe.camera.far,n.pointShadow[x]=J,n.pointShadowMap[x]=ae,n.pointShadowMatrix[x]=N.shadow.matrix,A++}n.point[x]=Z,x++}else if(N.isHemisphereLight){const Z=e.get(N);Z.skyColor.copy(N.color).multiplyScalar(F),Z.groundColor.copy(N.groundColor).multiplyScalar(F),n.hemi[g]=Z,g++}}_>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ee.LTC_FLOAT_1,n.rectAreaLTC2=Ee.LTC_FLOAT_2):(n.rectAreaLTC1=Ee.LTC_HALF_1,n.rectAreaLTC2=Ee.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=d;const D=n.hash;(D.directionalLength!==m||D.pointLength!==x||D.spotLength!==y||D.rectAreaLength!==_||D.hemiLength!==g||D.numDirectionalShadows!==R||D.numPointShadows!==A||D.numSpotShadows!==b||D.numSpotMaps!==L||D.numLightProbes!==C)&&(n.directional.length=m,n.spot.length=y,n.rectArea.length=_,n.point.length=x,n.hemi.length=g,n.directionalShadow.length=R,n.directionalShadowMap.length=R,n.pointShadow.length=A,n.pointShadowMap.length=A,n.spotShadow.length=b,n.spotShadowMap.length=b,n.directionalShadowMatrix.length=R,n.pointShadowMatrix.length=A,n.spotLightMatrix.length=b+L-I,n.spotLightMap.length=L,n.numSpotLightShadowsWithMaps=I,n.numLightProbes=C,D.directionalLength=m,D.pointLength=x,D.spotLength=y,D.rectAreaLength=_,D.hemiLength=g,D.numDirectionalShadows=R,D.numPointShadows=A,D.numSpotShadows=b,D.numSpotMaps=L,D.numLightProbes=C,n.version=Py++)}function c(l,h){let f=0,d=0,m=0,x=0,y=0;const _=h.matrixWorldInverse;for(let g=0,R=l.length;g<R;g++){const A=l[g];if(A.isDirectionalLight){const b=n.directional[f];b.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(_),f++}else if(A.isSpotLight){const b=n.spot[m];b.position.setFromMatrixPosition(A.matrixWorld),b.position.applyMatrix4(_),b.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(_),m++}else if(A.isRectAreaLight){const b=n.rectArea[x];b.position.setFromMatrixPosition(A.matrixWorld),b.position.applyMatrix4(_),a.identity(),s.copy(A.matrixWorld),s.premultiply(_),a.extractRotation(s),b.halfWidth.set(A.width*.5,0,0),b.halfHeight.set(0,A.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),x++}else if(A.isPointLight){const b=n.point[d];b.position.setFromMatrixPosition(A.matrixWorld),b.position.applyMatrix4(_),d++}else if(A.isHemisphereLight){const b=n.hemi[y];b.direction.setFromMatrixPosition(A.matrixWorld),b.direction.transformDirection(_),y++}}}return{setup:o,setupView:c,state:n}}function Fu(i){const e=new Iy(i),t=[],n=[];function r(h){l.camera=h,t.length=0,n.length=0}function s(h){t.push(h)}function a(h){n.push(h)}function o(){e.setup(t)}function c(h){e.setupView(t,h)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:o,setupLightsView:c,pushLight:s,pushShadow:a}}function Dy(i){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new Fu(i),e.set(r,[o])):s>=a.length?(o=new Fu(i),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const Ny=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Uy=`uniform sampler2D shadow_pass;
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
}`;function Oy(i,e,t){let n=new Ch;const r=new vt,s=new vt,a=new Rt,o=new og({depthPacking:Sm}),c=new lg,l={},h=t.maxTextureSize,f={[Si]:on,[on]:Si,[Jn]:Jn},d=new zn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new vt},radius:{value:4}},vertexShader:Ny,fragmentShader:Uy}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const x=new Mi;x.setAttribute("position",new Fn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new an(x,d),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=rh;let g=this.type;this.render=function(I,C,D){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||I.length===0)return;const M=i.getRenderTarget(),S=i.getActiveCubeFace(),N=i.getActiveMipmapLevel(),k=i.state;k.setBlending(yi),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const F=g!==Kn&&this.type===Kn,$=g===Kn&&this.type!==Kn;for(let ae=0,Z=I.length;ae<Z;ae++){const fe=I[ae],J=fe.shadow;if(J===void 0){console.warn("THREE.WebGLShadowMap:",fe,"has no shadow.");continue}if(J.autoUpdate===!1&&J.needsUpdate===!1)continue;r.copy(J.mapSize);const te=J.getFrameExtents();if(r.multiply(te),s.copy(J.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/te.x),r.x=s.x*te.x,J.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/te.y),r.y=s.y*te.y,J.mapSize.y=s.y)),J.map===null||F===!0||$===!0){const pe=this.type!==Kn?{minFilter:Jt,magFilter:Jt}:{};J.map!==null&&J.map.dispose(),J.map=new bi(r.x,r.y,pe),J.map.texture.name=fe.name+".shadowMap",J.camera.updateProjectionMatrix()}i.setRenderTarget(J.map),i.clear();const se=J.getViewportCount();for(let pe=0;pe<se;pe++){const _e=J.getViewport(pe);a.set(s.x*_e.x,s.y*_e.y,s.x*_e.z,s.y*_e.w),k.viewport(a),J.updateMatrices(fe,pe),n=J.getFrustum(),b(C,D,J.camera,fe,this.type)}J.isPointLightShadow!==!0&&this.type===Kn&&R(J,D),J.needsUpdate=!1}g=this.type,_.needsUpdate=!1,i.setRenderTarget(M,S,N)};function R(I,C){const D=e.update(y);d.defines.VSM_SAMPLES!==I.blurSamples&&(d.defines.VSM_SAMPLES=I.blurSamples,m.defines.VSM_SAMPLES=I.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new bi(r.x,r.y)),d.uniforms.shadow_pass.value=I.map.texture,d.uniforms.resolution.value=I.mapSize,d.uniforms.radius.value=I.radius,i.setRenderTarget(I.mapPass),i.clear(),i.renderBufferDirect(C,null,D,d,y,null),m.uniforms.shadow_pass.value=I.mapPass.texture,m.uniforms.resolution.value=I.mapSize,m.uniforms.radius.value=I.radius,i.setRenderTarget(I.map),i.clear(),i.renderBufferDirect(C,null,D,m,y,null)}function A(I,C,D,M){let S=null;const N=D.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(N!==void 0)S=N;else if(S=D.isPointLight===!0?c:o,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const k=S.uuid,F=C.uuid;let $=l[k];$===void 0&&($={},l[k]=$);let ae=$[F];ae===void 0&&(ae=S.clone(),$[F]=ae,C.addEventListener("dispose",L)),S=ae}if(S.visible=C.visible,S.wireframe=C.wireframe,M===Kn?S.side=C.shadowSide!==null?C.shadowSide:C.side:S.side=C.shadowSide!==null?C.shadowSide:f[C.side],S.alphaMap=C.alphaMap,S.alphaTest=C.alphaTest,S.map=C.map,S.clipShadows=C.clipShadows,S.clippingPlanes=C.clippingPlanes,S.clipIntersection=C.clipIntersection,S.displacementMap=C.displacementMap,S.displacementScale=C.displacementScale,S.displacementBias=C.displacementBias,S.wireframeLinewidth=C.wireframeLinewidth,S.linewidth=C.linewidth,D.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const k=i.properties.get(S);k.light=D}return S}function b(I,C,D,M,S){if(I.visible===!1)return;if(I.layers.test(C.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&S===Kn)&&(!I.frustumCulled||n.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,I.matrixWorld);const F=e.update(I),$=I.material;if(Array.isArray($)){const ae=F.groups;for(let Z=0,fe=ae.length;Z<fe;Z++){const J=ae[Z],te=$[J.materialIndex];if(te&&te.visible){const se=A(I,te,M,S);I.onBeforeShadow(i,I,C,D,F,se,J),i.renderBufferDirect(D,null,F,se,I,J),I.onAfterShadow(i,I,C,D,F,se,J)}}}else if($.visible){const ae=A(I,$,M,S);I.onBeforeShadow(i,I,C,D,F,ae,null),i.renderBufferDirect(D,null,F,ae,I,null),I.onAfterShadow(i,I,C,D,F,ae,null)}}const k=I.children;for(let F=0,$=k.length;F<$;F++)b(k[F],C,D,M,S)}function L(I){I.target.removeEventListener("dispose",L);for(const D in l){const M=l[D],S=I.target.uuid;S in M&&(M[S].dispose(),delete M[S])}}}const Fy={[nl]:il,[rl]:ol,[sl]:ll,[Lr]:al,[il]:nl,[ol]:rl,[ll]:sl,[al]:Lr};function ky(i,e){function t(){let B=!1;const xe=new Rt;let Q=null;const ie=new Rt(0,0,0,0);return{setMask:function(Te){Q!==Te&&!B&&(i.colorMask(Te,Te,Te,Te),Q=Te)},setLocked:function(Te){B=Te},setClear:function(Te,q,$e,bt,Ft){Ft===!0&&(Te*=bt,q*=bt,$e*=bt),xe.set(Te,q,$e,bt),ie.equals(xe)===!1&&(i.clearColor(Te,q,$e,bt),ie.copy(xe))},reset:function(){B=!1,Q=null,ie.set(-1,0,0,0)}}}function n(){let B=!1,xe=!1,Q=null,ie=null,Te=null;return{setReversed:function(q){if(xe!==q){const $e=e.get("EXT_clip_control");xe?$e.clipControlEXT($e.LOWER_LEFT_EXT,$e.ZERO_TO_ONE_EXT):$e.clipControlEXT($e.LOWER_LEFT_EXT,$e.NEGATIVE_ONE_TO_ONE_EXT);const bt=Te;Te=null,this.setClear(bt)}xe=q},getReversed:function(){return xe},setTest:function(q){q?he(i.DEPTH_TEST):ve(i.DEPTH_TEST)},setMask:function(q){Q!==q&&!B&&(i.depthMask(q),Q=q)},setFunc:function(q){if(xe&&(q=Fy[q]),ie!==q){switch(q){case nl:i.depthFunc(i.NEVER);break;case il:i.depthFunc(i.ALWAYS);break;case rl:i.depthFunc(i.LESS);break;case Lr:i.depthFunc(i.LEQUAL);break;case sl:i.depthFunc(i.EQUAL);break;case al:i.depthFunc(i.GEQUAL);break;case ol:i.depthFunc(i.GREATER);break;case ll:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ie=q}},setLocked:function(q){B=q},setClear:function(q){Te!==q&&(xe&&(q=1-q),i.clearDepth(q),Te=q)},reset:function(){B=!1,Q=null,ie=null,Te=null,xe=!1}}}function r(){let B=!1,xe=null,Q=null,ie=null,Te=null,q=null,$e=null,bt=null,Ft=null;return{setTest:function(Ke){B||(Ke?he(i.STENCIL_TEST):ve(i.STENCIL_TEST))},setMask:function(Ke){xe!==Ke&&!B&&(i.stencilMask(Ke),xe=Ke)},setFunc:function(Ke,qt,cn){(Q!==Ke||ie!==qt||Te!==cn)&&(i.stencilFunc(Ke,qt,cn),Q=Ke,ie=qt,Te=cn)},setOp:function(Ke,qt,cn){(q!==Ke||$e!==qt||bt!==cn)&&(i.stencilOp(Ke,qt,cn),q=Ke,$e=qt,bt=cn)},setLocked:function(Ke){B=Ke},setClear:function(Ke){Ft!==Ke&&(i.clearStencil(Ke),Ft=Ke)},reset:function(){B=!1,xe=null,Q=null,ie=null,Te=null,q=null,$e=null,bt=null,Ft=null}}}const s=new t,a=new n,o=new r,c=new WeakMap,l=new WeakMap;let h={},f={},d=new WeakMap,m=[],x=null,y=!1,_=null,g=null,R=null,A=null,b=null,L=null,I=null,C=new ht(0,0,0),D=0,M=!1,S=null,N=null,k=null,F=null,$=null;const ae=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Z=!1,fe=0;const J=i.getParameter(i.VERSION);J.indexOf("WebGL")!==-1?(fe=parseFloat(/^WebGL (\d)/.exec(J)[1]),Z=fe>=1):J.indexOf("OpenGL ES")!==-1&&(fe=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),Z=fe>=2);let te=null,se={};const pe=i.getParameter(i.SCISSOR_BOX),_e=i.getParameter(i.VIEWPORT),Re=new Rt().fromArray(pe),ee=new Rt().fromArray(_e);function G(B,xe,Q,ie){const Te=new Uint8Array(4),q=i.createTexture();i.bindTexture(B,q),i.texParameteri(B,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(B,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let $e=0;$e<Q;$e++)B===i.TEXTURE_3D||B===i.TEXTURE_2D_ARRAY?i.texImage3D(xe,0,i.RGBA,1,1,ie,0,i.RGBA,i.UNSIGNED_BYTE,Te):i.texImage2D(xe+$e,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Te);return q}const me={};me[i.TEXTURE_2D]=G(i.TEXTURE_2D,i.TEXTURE_2D,1),me[i.TEXTURE_CUBE_MAP]=G(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),me[i.TEXTURE_2D_ARRAY]=G(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),me[i.TEXTURE_3D]=G(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),he(i.DEPTH_TEST),a.setFunc(Lr),rt(!1),Be(qc),he(i.CULL_FACE),O(yi);function he(B){h[B]!==!0&&(i.enable(B),h[B]=!0)}function ve(B){h[B]!==!1&&(i.disable(B),h[B]=!1)}function Ne(B,xe){return f[B]!==xe?(i.bindFramebuffer(B,xe),f[B]=xe,B===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=xe),B===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=xe),!0):!1}function Ve(B,xe){let Q=m,ie=!1;if(B){Q=d.get(xe),Q===void 0&&(Q=[],d.set(xe,Q));const Te=B.textures;if(Q.length!==Te.length||Q[0]!==i.COLOR_ATTACHMENT0){for(let q=0,$e=Te.length;q<$e;q++)Q[q]=i.COLOR_ATTACHMENT0+q;Q.length=Te.length,ie=!0}}else Q[0]!==i.BACK&&(Q[0]=i.BACK,ie=!0);ie&&i.drawBuffers(Q)}function ye(B){return x!==B?(i.useProgram(B),x=B,!0):!1}const we={[Fi]:i.FUNC_ADD,[jp]:i.FUNC_SUBTRACT,[$p]:i.FUNC_REVERSE_SUBTRACT};we[Yp]=i.MIN,we[Kp]=i.MAX;const ct={[Jp]:i.ZERO,[Zp]:i.ONE,[Qp]:i.SRC_COLOR,[el]:i.SRC_ALPHA,[sm]:i.SRC_ALPHA_SATURATE,[im]:i.DST_COLOR,[tm]:i.DST_ALPHA,[em]:i.ONE_MINUS_SRC_COLOR,[tl]:i.ONE_MINUS_SRC_ALPHA,[rm]:i.ONE_MINUS_DST_COLOR,[nm]:i.ONE_MINUS_DST_ALPHA,[am]:i.CONSTANT_COLOR,[om]:i.ONE_MINUS_CONSTANT_COLOR,[lm]:i.CONSTANT_ALPHA,[cm]:i.ONE_MINUS_CONSTANT_ALPHA};function O(B,xe,Q,ie,Te,q,$e,bt,Ft,Ke){if(B===yi){y===!0&&(ve(i.BLEND),y=!1);return}if(y===!1&&(he(i.BLEND),y=!0),B!==Xp){if(B!==_||Ke!==M){if((g!==Fi||b!==Fi)&&(i.blendEquation(i.FUNC_ADD),g=Fi,b=Fi),Ke)switch(B){case On:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ca:i.blendFunc(i.ONE,i.ONE);break;case Pa:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case La:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case On:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ca:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Pa:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case La:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}R=null,A=null,L=null,I=null,C.set(0,0,0),D=0,_=B,M=Ke}return}Te=Te||xe,q=q||Q,$e=$e||ie,(xe!==g||Te!==b)&&(i.blendEquationSeparate(we[xe],we[Te]),g=xe,b=Te),(Q!==R||ie!==A||q!==L||$e!==I)&&(i.blendFuncSeparate(ct[Q],ct[ie],ct[q],ct[$e]),R=Q,A=ie,L=q,I=$e),(bt.equals(C)===!1||Ft!==D)&&(i.blendColor(bt.r,bt.g,bt.b,Ft),C.copy(bt),D=Ft),_=B,M=!1}function Ot(B,xe){B.side===Jn?ve(i.CULL_FACE):he(i.CULL_FACE);let Q=B.side===on;xe&&(Q=!Q),rt(Q),B.blending===On&&B.transparent===!1?O(yi):O(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),a.setFunc(B.depthFunc),a.setTest(B.depthTest),a.setMask(B.depthWrite),s.setMask(B.colorWrite);const ie=B.stencilWrite;o.setTest(ie),ie&&(o.setMask(B.stencilWriteMask),o.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),o.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),mt(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?he(i.SAMPLE_ALPHA_TO_COVERAGE):ve(i.SAMPLE_ALPHA_TO_COVERAGE)}function rt(B){S!==B&&(B?i.frontFace(i.CW):i.frontFace(i.CCW),S=B)}function Be(B){B!==Gp?(he(i.CULL_FACE),B!==N&&(B===qc?i.cullFace(i.BACK):B===Wp?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ve(i.CULL_FACE),N=B}function ke(B){B!==k&&(Z&&i.lineWidth(B),k=B)}function mt(B,xe,Q){B?(he(i.POLYGON_OFFSET_FILL),(F!==xe||$!==Q)&&(i.polygonOffset(xe,Q),F=xe,$=Q)):ve(i.POLYGON_OFFSET_FILL)}function Ue(B){B?he(i.SCISSOR_TEST):ve(i.SCISSOR_TEST)}function P(B){B===void 0&&(B=i.TEXTURE0+ae-1),te!==B&&(i.activeTexture(B),te=B)}function E(B,xe,Q){Q===void 0&&(te===null?Q=i.TEXTURE0+ae-1:Q=te);let ie=se[Q];ie===void 0&&(ie={type:void 0,texture:void 0},se[Q]=ie),(ie.type!==B||ie.texture!==xe)&&(te!==Q&&(i.activeTexture(Q),te=Q),i.bindTexture(B,xe||me[B]),ie.type=B,ie.texture=xe)}function W(){const B=se[te];B!==void 0&&B.type!==void 0&&(i.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function oe(){try{i.compressedTexImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function le(){try{i.compressedTexImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ne(){try{i.texSubImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Oe(){try{i.texSubImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ge(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Pe(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function st(){try{i.texStorage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function de(){try{i.texStorage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ie(){try{i.texImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ge(){try{i.texImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function qe(B){Re.equals(B)===!1&&(i.scissor(B.x,B.y,B.z,B.w),Re.copy(B))}function Le(B){ee.equals(B)===!1&&(i.viewport(B.x,B.y,B.z,B.w),ee.copy(B))}function Me(B,xe){let Q=l.get(xe);Q===void 0&&(Q=new WeakMap,l.set(xe,Q));let ie=Q.get(B);ie===void 0&&(ie=i.getUniformBlockIndex(xe,B.name),Q.set(B,ie))}function Ze(B,xe){const ie=l.get(xe).get(B);c.get(xe)!==ie&&(i.uniformBlockBinding(xe,ie,B.__bindingPointIndex),c.set(xe,ie))}function dt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},te=null,se={},f={},d=new WeakMap,m=[],x=null,y=!1,_=null,g=null,R=null,A=null,b=null,L=null,I=null,C=new ht(0,0,0),D=0,M=!1,S=null,N=null,k=null,F=null,$=null,Re.set(0,0,i.canvas.width,i.canvas.height),ee.set(0,0,i.canvas.width,i.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:he,disable:ve,bindFramebuffer:Ne,drawBuffers:Ve,useProgram:ye,setBlending:O,setMaterial:Ot,setFlipSided:rt,setCullFace:Be,setLineWidth:ke,setPolygonOffset:mt,setScissorTest:Ue,activeTexture:P,bindTexture:E,unbindTexture:W,compressedTexImage2D:oe,compressedTexImage3D:le,texImage2D:Ie,texImage3D:Ge,updateUBOMapping:Me,uniformBlockBinding:Ze,texStorage2D:st,texStorage3D:de,texSubImage2D:ne,texSubImage3D:Oe,compressedTexSubImage2D:ge,compressedTexSubImage3D:Pe,scissor:qe,viewport:Le,reset:dt}}function By(i,e,t,n,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new vt,h=new WeakMap;let f;const d=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(P,E){return m?new OffscreenCanvas(P,E):ms("canvas")}function y(P,E,W){let oe=1;const le=Ue(P);if((le.width>W||le.height>W)&&(oe=W/Math.max(le.width,le.height)),oe<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const ne=Math.floor(oe*le.width),Oe=Math.floor(oe*le.height);f===void 0&&(f=x(ne,Oe));const ge=E?x(ne,Oe):f;return ge.width=ne,ge.height=Oe,ge.getContext("2d").drawImage(P,0,0,ne,Oe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+le.width+"x"+le.height+") to ("+ne+"x"+Oe+")."),ge}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+le.width+"x"+le.height+")."),P;return P}function _(P){return P.generateMipmaps}function g(P){i.generateMipmap(P)}function R(P){return P.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?i.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function A(P,E,W,oe,le=!1){if(P!==null){if(i[P]!==void 0)return i[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let ne=E;if(E===i.RED&&(W===i.FLOAT&&(ne=i.R32F),W===i.HALF_FLOAT&&(ne=i.R16F),W===i.UNSIGNED_BYTE&&(ne=i.R8)),E===i.RED_INTEGER&&(W===i.UNSIGNED_BYTE&&(ne=i.R8UI),W===i.UNSIGNED_SHORT&&(ne=i.R16UI),W===i.UNSIGNED_INT&&(ne=i.R32UI),W===i.BYTE&&(ne=i.R8I),W===i.SHORT&&(ne=i.R16I),W===i.INT&&(ne=i.R32I)),E===i.RG&&(W===i.FLOAT&&(ne=i.RG32F),W===i.HALF_FLOAT&&(ne=i.RG16F),W===i.UNSIGNED_BYTE&&(ne=i.RG8)),E===i.RG_INTEGER&&(W===i.UNSIGNED_BYTE&&(ne=i.RG8UI),W===i.UNSIGNED_SHORT&&(ne=i.RG16UI),W===i.UNSIGNED_INT&&(ne=i.RG32UI),W===i.BYTE&&(ne=i.RG8I),W===i.SHORT&&(ne=i.RG16I),W===i.INT&&(ne=i.RG32I)),E===i.RGB_INTEGER&&(W===i.UNSIGNED_BYTE&&(ne=i.RGB8UI),W===i.UNSIGNED_SHORT&&(ne=i.RGB16UI),W===i.UNSIGNED_INT&&(ne=i.RGB32UI),W===i.BYTE&&(ne=i.RGB8I),W===i.SHORT&&(ne=i.RGB16I),W===i.INT&&(ne=i.RGB32I)),E===i.RGBA_INTEGER&&(W===i.UNSIGNED_BYTE&&(ne=i.RGBA8UI),W===i.UNSIGNED_SHORT&&(ne=i.RGBA16UI),W===i.UNSIGNED_INT&&(ne=i.RGBA32UI),W===i.BYTE&&(ne=i.RGBA8I),W===i.SHORT&&(ne=i.RGBA16I),W===i.INT&&(ne=i.RGBA32I)),E===i.RGB&&W===i.UNSIGNED_INT_5_9_9_9_REV&&(ne=i.RGB9_E5),E===i.RGBA){const Oe=le?Ia:ft.getTransfer(oe);W===i.FLOAT&&(ne=i.RGBA32F),W===i.HALF_FLOAT&&(ne=i.RGBA16F),W===i.UNSIGNED_BYTE&&(ne=Oe===_t?i.SRGB8_ALPHA8:i.RGBA8),W===i.UNSIGNED_SHORT_4_4_4_4&&(ne=i.RGBA4),W===i.UNSIGNED_SHORT_5_5_5_1&&(ne=i.RGB5_A1)}return(ne===i.R16F||ne===i.R32F||ne===i.RG16F||ne===i.RG32F||ne===i.RGBA16F||ne===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ne}function b(P,E){let W;return P?E===null||E===qi||E===Nr?W=i.DEPTH24_STENCIL8:E===ti?W=i.DEPTH32F_STENCIL8:E===ps&&(W=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===qi||E===Nr?W=i.DEPTH_COMPONENT24:E===ti?W=i.DEPTH_COMPONENT32F:E===ps&&(W=i.DEPTH_COMPONENT16),W}function L(P,E){return _(P)===!0||P.isFramebufferTexture&&P.minFilter!==Jt&&P.minFilter!==pn?Math.log2(Math.max(E.width,E.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?E.mipmaps.length:1}function I(P){const E=P.target;E.removeEventListener("dispose",I),D(E),E.isVideoTexture&&h.delete(E)}function C(P){const E=P.target;E.removeEventListener("dispose",C),S(E)}function D(P){const E=n.get(P);if(E.__webglInit===void 0)return;const W=P.source,oe=d.get(W);if(oe){const le=oe[E.__cacheKey];le.usedTimes--,le.usedTimes===0&&M(P),Object.keys(oe).length===0&&d.delete(W)}n.remove(P)}function M(P){const E=n.get(P);i.deleteTexture(E.__webglTexture);const W=P.source,oe=d.get(W);delete oe[E.__cacheKey],a.memory.textures--}function S(P){const E=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let oe=0;oe<6;oe++){if(Array.isArray(E.__webglFramebuffer[oe]))for(let le=0;le<E.__webglFramebuffer[oe].length;le++)i.deleteFramebuffer(E.__webglFramebuffer[oe][le]);else i.deleteFramebuffer(E.__webglFramebuffer[oe]);E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer[oe])}else{if(Array.isArray(E.__webglFramebuffer))for(let oe=0;oe<E.__webglFramebuffer.length;oe++)i.deleteFramebuffer(E.__webglFramebuffer[oe]);else i.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&i.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let oe=0;oe<E.__webglColorRenderbuffer.length;oe++)E.__webglColorRenderbuffer[oe]&&i.deleteRenderbuffer(E.__webglColorRenderbuffer[oe]);E.__webglDepthRenderbuffer&&i.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const W=P.textures;for(let oe=0,le=W.length;oe<le;oe++){const ne=n.get(W[oe]);ne.__webglTexture&&(i.deleteTexture(ne.__webglTexture),a.memory.textures--),n.remove(W[oe])}n.remove(P)}let N=0;function k(){N=0}function F(){const P=N;return P>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+r.maxTextures),N+=1,P}function $(P){const E=[];return E.push(P.wrapS),E.push(P.wrapT),E.push(P.wrapR||0),E.push(P.magFilter),E.push(P.minFilter),E.push(P.anisotropy),E.push(P.internalFormat),E.push(P.format),E.push(P.type),E.push(P.generateMipmaps),E.push(P.premultiplyAlpha),E.push(P.flipY),E.push(P.unpackAlignment),E.push(P.colorSpace),E.join()}function ae(P,E){const W=n.get(P);if(P.isVideoTexture&&ke(P),P.isRenderTargetTexture===!1&&P.version>0&&W.__version!==P.version){const oe=P.image;if(oe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(oe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ee(W,P,E);return}}t.bindTexture(i.TEXTURE_2D,W.__webglTexture,i.TEXTURE0+E)}function Z(P,E){const W=n.get(P);if(P.version>0&&W.__version!==P.version){ee(W,P,E);return}t.bindTexture(i.TEXTURE_2D_ARRAY,W.__webglTexture,i.TEXTURE0+E)}function fe(P,E){const W=n.get(P);if(P.version>0&&W.__version!==P.version){ee(W,P,E);return}t.bindTexture(i.TEXTURE_3D,W.__webglTexture,i.TEXTURE0+E)}function J(P,E){const W=n.get(P);if(P.version>0&&W.__version!==P.version){G(W,P,E);return}t.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture,i.TEXTURE0+E)}const te={[ds]:i.REPEAT,[Qn]:i.CLAMP_TO_EDGE,[fl]:i.MIRRORED_REPEAT},se={[Jt]:i.NEAREST,[ym]:i.NEAREST_MIPMAP_NEAREST,[Bs]:i.NEAREST_MIPMAP_LINEAR,[pn]:i.LINEAR,[uo]:i.LINEAR_MIPMAP_NEAREST,[ei]:i.LINEAR_MIPMAP_LINEAR},pe={[Mm]:i.NEVER,[Pm]:i.ALWAYS,[wm]:i.LESS,[_h]:i.LEQUAL,[Tm]:i.EQUAL,[Cm]:i.GEQUAL,[Am]:i.GREATER,[Rm]:i.NOTEQUAL};function _e(P,E){if(E.type===ti&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===pn||E.magFilter===uo||E.magFilter===Bs||E.magFilter===ei||E.minFilter===pn||E.minFilter===uo||E.minFilter===Bs||E.minFilter===ei)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(P,i.TEXTURE_WRAP_S,te[E.wrapS]),i.texParameteri(P,i.TEXTURE_WRAP_T,te[E.wrapT]),(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)&&i.texParameteri(P,i.TEXTURE_WRAP_R,te[E.wrapR]),i.texParameteri(P,i.TEXTURE_MAG_FILTER,se[E.magFilter]),i.texParameteri(P,i.TEXTURE_MIN_FILTER,se[E.minFilter]),E.compareFunction&&(i.texParameteri(P,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(P,i.TEXTURE_COMPARE_FUNC,pe[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Jt||E.minFilter!==Bs&&E.minFilter!==ei||E.type===ti&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){const W=e.get("EXT_texture_filter_anisotropic");i.texParameterf(P,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function Re(P,E){let W=!1;P.__webglInit===void 0&&(P.__webglInit=!0,E.addEventListener("dispose",I));const oe=E.source;let le=d.get(oe);le===void 0&&(le={},d.set(oe,le));const ne=$(E);if(ne!==P.__cacheKey){le[ne]===void 0&&(le[ne]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,W=!0),le[ne].usedTimes++;const Oe=le[P.__cacheKey];Oe!==void 0&&(le[P.__cacheKey].usedTimes--,Oe.usedTimes===0&&M(E)),P.__cacheKey=ne,P.__webglTexture=le[ne].texture}return W}function ee(P,E,W){let oe=i.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(oe=i.TEXTURE_2D_ARRAY),E.isData3DTexture&&(oe=i.TEXTURE_3D);const le=Re(P,E),ne=E.source;t.bindTexture(oe,P.__webglTexture,i.TEXTURE0+W);const Oe=n.get(ne);if(ne.version!==Oe.__version||le===!0){t.activeTexture(i.TEXTURE0+W);const ge=ft.getPrimaries(ft.workingColorSpace),Pe=E.colorSpace===_i?null:ft.getPrimaries(E.colorSpace),st=E.colorSpace===_i||ge===Pe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,st);let de=y(E.image,!1,r.maxTextureSize);de=mt(E,de);const Ie=s.convert(E.format,E.colorSpace),Ge=s.convert(E.type);let qe=A(E.internalFormat,Ie,Ge,E.colorSpace,E.isVideoTexture);_e(oe,E);let Le;const Me=E.mipmaps,Ze=E.isVideoTexture!==!0,dt=Oe.__version===void 0||le===!0,B=ne.dataReady,xe=L(E,de);if(E.isDepthTexture)qe=b(E.format===Ur,E.type),dt&&(Ze?t.texStorage2D(i.TEXTURE_2D,1,qe,de.width,de.height):t.texImage2D(i.TEXTURE_2D,0,qe,de.width,de.height,0,Ie,Ge,null));else if(E.isDataTexture)if(Me.length>0){Ze&&dt&&t.texStorage2D(i.TEXTURE_2D,xe,qe,Me[0].width,Me[0].height);for(let Q=0,ie=Me.length;Q<ie;Q++)Le=Me[Q],Ze?B&&t.texSubImage2D(i.TEXTURE_2D,Q,0,0,Le.width,Le.height,Ie,Ge,Le.data):t.texImage2D(i.TEXTURE_2D,Q,qe,Le.width,Le.height,0,Ie,Ge,Le.data);E.generateMipmaps=!1}else Ze?(dt&&t.texStorage2D(i.TEXTURE_2D,xe,qe,de.width,de.height),B&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,de.width,de.height,Ie,Ge,de.data)):t.texImage2D(i.TEXTURE_2D,0,qe,de.width,de.height,0,Ie,Ge,de.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Ze&&dt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,xe,qe,Me[0].width,Me[0].height,de.depth);for(let Q=0,ie=Me.length;Q<ie;Q++)if(Le=Me[Q],E.format!==Pn)if(Ie!==null)if(Ze){if(B)if(E.layerUpdates.size>0){const Te=du(Le.width,Le.height,E.format,E.type);for(const q of E.layerUpdates){const $e=Le.data.subarray(q*Te/Le.data.BYTES_PER_ELEMENT,(q+1)*Te/Le.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,q,Le.width,Le.height,1,Ie,$e)}E.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,Le.width,Le.height,de.depth,Ie,Le.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Q,qe,Le.width,Le.height,de.depth,0,Le.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ze?B&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,Le.width,Le.height,de.depth,Ie,Ge,Le.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Q,qe,Le.width,Le.height,de.depth,0,Ie,Ge,Le.data)}else{Ze&&dt&&t.texStorage2D(i.TEXTURE_2D,xe,qe,Me[0].width,Me[0].height);for(let Q=0,ie=Me.length;Q<ie;Q++)Le=Me[Q],E.format!==Pn?Ie!==null?Ze?B&&t.compressedTexSubImage2D(i.TEXTURE_2D,Q,0,0,Le.width,Le.height,Ie,Le.data):t.compressedTexImage2D(i.TEXTURE_2D,Q,qe,Le.width,Le.height,0,Le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ze?B&&t.texSubImage2D(i.TEXTURE_2D,Q,0,0,Le.width,Le.height,Ie,Ge,Le.data):t.texImage2D(i.TEXTURE_2D,Q,qe,Le.width,Le.height,0,Ie,Ge,Le.data)}else if(E.isDataArrayTexture)if(Ze){if(dt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,xe,qe,de.width,de.height,de.depth),B)if(E.layerUpdates.size>0){const Q=du(de.width,de.height,E.format,E.type);for(const ie of E.layerUpdates){const Te=de.data.subarray(ie*Q/de.data.BYTES_PER_ELEMENT,(ie+1)*Q/de.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ie,de.width,de.height,1,Ie,Ge,Te)}E.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,de.width,de.height,de.depth,Ie,Ge,de.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,qe,de.width,de.height,de.depth,0,Ie,Ge,de.data);else if(E.isData3DTexture)Ze?(dt&&t.texStorage3D(i.TEXTURE_3D,xe,qe,de.width,de.height,de.depth),B&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,de.width,de.height,de.depth,Ie,Ge,de.data)):t.texImage3D(i.TEXTURE_3D,0,qe,de.width,de.height,de.depth,0,Ie,Ge,de.data);else if(E.isFramebufferTexture){if(dt)if(Ze)t.texStorage2D(i.TEXTURE_2D,xe,qe,de.width,de.height);else{let Q=de.width,ie=de.height;for(let Te=0;Te<xe;Te++)t.texImage2D(i.TEXTURE_2D,Te,qe,Q,ie,0,Ie,Ge,null),Q>>=1,ie>>=1}}else if(Me.length>0){if(Ze&&dt){const Q=Ue(Me[0]);t.texStorage2D(i.TEXTURE_2D,xe,qe,Q.width,Q.height)}for(let Q=0,ie=Me.length;Q<ie;Q++)Le=Me[Q],Ze?B&&t.texSubImage2D(i.TEXTURE_2D,Q,0,0,Ie,Ge,Le):t.texImage2D(i.TEXTURE_2D,Q,qe,Ie,Ge,Le);E.generateMipmaps=!1}else if(Ze){if(dt){const Q=Ue(de);t.texStorage2D(i.TEXTURE_2D,xe,qe,Q.width,Q.height)}B&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Ie,Ge,de)}else t.texImage2D(i.TEXTURE_2D,0,qe,Ie,Ge,de);_(E)&&g(oe),Oe.__version=ne.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function G(P,E,W){if(E.image.length!==6)return;const oe=Re(P,E),le=E.source;t.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture,i.TEXTURE0+W);const ne=n.get(le);if(le.version!==ne.__version||oe===!0){t.activeTexture(i.TEXTURE0+W);const Oe=ft.getPrimaries(ft.workingColorSpace),ge=E.colorSpace===_i?null:ft.getPrimaries(E.colorSpace),Pe=E.colorSpace===_i||Oe===ge?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pe);const st=E.isCompressedTexture||E.image[0].isCompressedTexture,de=E.image[0]&&E.image[0].isDataTexture,Ie=[];for(let ie=0;ie<6;ie++)!st&&!de?Ie[ie]=y(E.image[ie],!0,r.maxCubemapSize):Ie[ie]=de?E.image[ie].image:E.image[ie],Ie[ie]=mt(E,Ie[ie]);const Ge=Ie[0],qe=s.convert(E.format,E.colorSpace),Le=s.convert(E.type),Me=A(E.internalFormat,qe,Le,E.colorSpace),Ze=E.isVideoTexture!==!0,dt=ne.__version===void 0||oe===!0,B=le.dataReady;let xe=L(E,Ge);_e(i.TEXTURE_CUBE_MAP,E);let Q;if(st){Ze&&dt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,xe,Me,Ge.width,Ge.height);for(let ie=0;ie<6;ie++){Q=Ie[ie].mipmaps;for(let Te=0;Te<Q.length;Te++){const q=Q[Te];E.format!==Pn?qe!==null?Ze?B&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Te,0,0,q.width,q.height,qe,q.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Te,Me,q.width,q.height,0,q.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ze?B&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Te,0,0,q.width,q.height,qe,Le,q.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Te,Me,q.width,q.height,0,qe,Le,q.data)}}}else{if(Q=E.mipmaps,Ze&&dt){Q.length>0&&xe++;const ie=Ue(Ie[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,xe,Me,ie.width,ie.height)}for(let ie=0;ie<6;ie++)if(de){Ze?B&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,Ie[ie].width,Ie[ie].height,qe,Le,Ie[ie].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,Me,Ie[ie].width,Ie[ie].height,0,qe,Le,Ie[ie].data);for(let Te=0;Te<Q.length;Te++){const $e=Q[Te].image[ie].image;Ze?B&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Te+1,0,0,$e.width,$e.height,qe,Le,$e.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Te+1,Me,$e.width,$e.height,0,qe,Le,$e.data)}}else{Ze?B&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,qe,Le,Ie[ie]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,Me,qe,Le,Ie[ie]);for(let Te=0;Te<Q.length;Te++){const q=Q[Te];Ze?B&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Te+1,0,0,qe,Le,q.image[ie]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Te+1,Me,qe,Le,q.image[ie])}}}_(E)&&g(i.TEXTURE_CUBE_MAP),ne.__version=le.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function me(P,E,W,oe,le,ne){const Oe=s.convert(W.format,W.colorSpace),ge=s.convert(W.type),Pe=A(W.internalFormat,Oe,ge,W.colorSpace),st=n.get(E),de=n.get(W);if(de.__renderTarget=E,!st.__hasExternalTextures){const Ie=Math.max(1,E.width>>ne),Ge=Math.max(1,E.height>>ne);le===i.TEXTURE_3D||le===i.TEXTURE_2D_ARRAY?t.texImage3D(le,ne,Pe,Ie,Ge,E.depth,0,Oe,ge,null):t.texImage2D(le,ne,Pe,Ie,Ge,0,Oe,ge,null)}t.bindFramebuffer(i.FRAMEBUFFER,P),Be(E)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,oe,le,de.__webglTexture,0,rt(E)):(le===i.TEXTURE_2D||le>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&le<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,oe,le,de.__webglTexture,ne),t.bindFramebuffer(i.FRAMEBUFFER,null)}function he(P,E,W){if(i.bindRenderbuffer(i.RENDERBUFFER,P),E.depthBuffer){const oe=E.depthTexture,le=oe&&oe.isDepthTexture?oe.type:null,ne=b(E.stencilBuffer,le),Oe=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ge=rt(E);Be(E)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ge,ne,E.width,E.height):W?i.renderbufferStorageMultisample(i.RENDERBUFFER,ge,ne,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,ne,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Oe,i.RENDERBUFFER,P)}else{const oe=E.textures;for(let le=0;le<oe.length;le++){const ne=oe[le],Oe=s.convert(ne.format,ne.colorSpace),ge=s.convert(ne.type),Pe=A(ne.internalFormat,Oe,ge,ne.colorSpace),st=rt(E);W&&Be(E)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,st,Pe,E.width,E.height):Be(E)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,st,Pe,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,Pe,E.width,E.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ve(P,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,P),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const oe=n.get(E.depthTexture);oe.__renderTarget=E,(!oe.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),ae(E.depthTexture,0);const le=oe.__webglTexture,ne=rt(E);if(E.depthTexture.format===Tr)Be(E)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,le,0,ne):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,le,0);else if(E.depthTexture.format===Ur)Be(E)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,le,0,ne):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,le,0);else throw new Error("Unknown depthTexture format")}function Ne(P){const E=n.get(P),W=P.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==P.depthTexture){const oe=P.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),oe){const le=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,oe.removeEventListener("dispose",le)};oe.addEventListener("dispose",le),E.__depthDisposeCallback=le}E.__boundDepthTexture=oe}if(P.depthTexture&&!E.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");ve(E.__webglFramebuffer,P)}else if(W){E.__webglDepthbuffer=[];for(let oe=0;oe<6;oe++)if(t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[oe]),E.__webglDepthbuffer[oe]===void 0)E.__webglDepthbuffer[oe]=i.createRenderbuffer(),he(E.__webglDepthbuffer[oe],P,!1);else{const le=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ne=E.__webglDepthbuffer[oe];i.bindRenderbuffer(i.RENDERBUFFER,ne),i.framebufferRenderbuffer(i.FRAMEBUFFER,le,i.RENDERBUFFER,ne)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=i.createRenderbuffer(),he(E.__webglDepthbuffer,P,!1);else{const oe=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,le=E.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,le),i.framebufferRenderbuffer(i.FRAMEBUFFER,oe,i.RENDERBUFFER,le)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ve(P,E,W){const oe=n.get(P);E!==void 0&&me(oe.__webglFramebuffer,P,P.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),W!==void 0&&Ne(P)}function ye(P){const E=P.texture,W=n.get(P),oe=n.get(E);P.addEventListener("dispose",C);const le=P.textures,ne=P.isWebGLCubeRenderTarget===!0,Oe=le.length>1;if(Oe||(oe.__webglTexture===void 0&&(oe.__webglTexture=i.createTexture()),oe.__version=E.version,a.memory.textures++),ne){W.__webglFramebuffer=[];for(let ge=0;ge<6;ge++)if(E.mipmaps&&E.mipmaps.length>0){W.__webglFramebuffer[ge]=[];for(let Pe=0;Pe<E.mipmaps.length;Pe++)W.__webglFramebuffer[ge][Pe]=i.createFramebuffer()}else W.__webglFramebuffer[ge]=i.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){W.__webglFramebuffer=[];for(let ge=0;ge<E.mipmaps.length;ge++)W.__webglFramebuffer[ge]=i.createFramebuffer()}else W.__webglFramebuffer=i.createFramebuffer();if(Oe)for(let ge=0,Pe=le.length;ge<Pe;ge++){const st=n.get(le[ge]);st.__webglTexture===void 0&&(st.__webglTexture=i.createTexture(),a.memory.textures++)}if(P.samples>0&&Be(P)===!1){W.__webglMultisampledFramebuffer=i.createFramebuffer(),W.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let ge=0;ge<le.length;ge++){const Pe=le[ge];W.__webglColorRenderbuffer[ge]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,W.__webglColorRenderbuffer[ge]);const st=s.convert(Pe.format,Pe.colorSpace),de=s.convert(Pe.type),Ie=A(Pe.internalFormat,st,de,Pe.colorSpace,P.isXRRenderTarget===!0),Ge=rt(P);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ge,Ie,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ge,i.RENDERBUFFER,W.__webglColorRenderbuffer[ge])}i.bindRenderbuffer(i.RENDERBUFFER,null),P.depthBuffer&&(W.__webglDepthRenderbuffer=i.createRenderbuffer(),he(W.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ne){t.bindTexture(i.TEXTURE_CUBE_MAP,oe.__webglTexture),_e(i.TEXTURE_CUBE_MAP,E);for(let ge=0;ge<6;ge++)if(E.mipmaps&&E.mipmaps.length>0)for(let Pe=0;Pe<E.mipmaps.length;Pe++)me(W.__webglFramebuffer[ge][Pe],P,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Pe);else me(W.__webglFramebuffer[ge],P,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0);_(E)&&g(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Oe){for(let ge=0,Pe=le.length;ge<Pe;ge++){const st=le[ge],de=n.get(st);t.bindTexture(i.TEXTURE_2D,de.__webglTexture),_e(i.TEXTURE_2D,st),me(W.__webglFramebuffer,P,st,i.COLOR_ATTACHMENT0+ge,i.TEXTURE_2D,0),_(st)&&g(i.TEXTURE_2D)}t.unbindTexture()}else{let ge=i.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(ge=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ge,oe.__webglTexture),_e(ge,E),E.mipmaps&&E.mipmaps.length>0)for(let Pe=0;Pe<E.mipmaps.length;Pe++)me(W.__webglFramebuffer[Pe],P,E,i.COLOR_ATTACHMENT0,ge,Pe);else me(W.__webglFramebuffer,P,E,i.COLOR_ATTACHMENT0,ge,0);_(E)&&g(ge),t.unbindTexture()}P.depthBuffer&&Ne(P)}function we(P){const E=P.textures;for(let W=0,oe=E.length;W<oe;W++){const le=E[W];if(_(le)){const ne=R(P),Oe=n.get(le).__webglTexture;t.bindTexture(ne,Oe),g(ne),t.unbindTexture()}}}const ct=[],O=[];function Ot(P){if(P.samples>0){if(Be(P)===!1){const E=P.textures,W=P.width,oe=P.height;let le=i.COLOR_BUFFER_BIT;const ne=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Oe=n.get(P),ge=E.length>1;if(ge)for(let Pe=0;Pe<E.length;Pe++)t.bindFramebuffer(i.FRAMEBUFFER,Oe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Oe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Oe.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Oe.__webglFramebuffer);for(let Pe=0;Pe<E.length;Pe++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(le|=i.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(le|=i.STENCIL_BUFFER_BIT)),ge){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Oe.__webglColorRenderbuffer[Pe]);const st=n.get(E[Pe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,st,0)}i.blitFramebuffer(0,0,W,oe,0,0,W,oe,le,i.NEAREST),c===!0&&(ct.length=0,O.length=0,ct.push(i.COLOR_ATTACHMENT0+Pe),P.depthBuffer&&P.resolveDepthBuffer===!1&&(ct.push(ne),O.push(ne),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,O)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ct))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ge)for(let Pe=0;Pe<E.length;Pe++){t.bindFramebuffer(i.FRAMEBUFFER,Oe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pe,i.RENDERBUFFER,Oe.__webglColorRenderbuffer[Pe]);const st=n.get(E[Pe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Oe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pe,i.TEXTURE_2D,st,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Oe.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&c){const E=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[E])}}}function rt(P){return Math.min(r.maxSamples,P.samples)}function Be(P){const E=n.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function ke(P){const E=a.render.frame;h.get(P)!==E&&(h.set(P,E),P.update())}function mt(P,E){const W=P.colorSpace,oe=P.format,le=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||W!==Or&&W!==_i&&(ft.getTransfer(W)===_t?(oe!==Pn||le!==Bn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",W)),E}function Ue(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(l.width=P.naturalWidth||P.width,l.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(l.width=P.displayWidth,l.height=P.displayHeight):(l.width=P.width,l.height=P.height),l}this.allocateTextureUnit=F,this.resetTextureUnits=k,this.setTexture2D=ae,this.setTexture2DArray=Z,this.setTexture3D=fe,this.setTextureCube=J,this.rebindTextures=Ve,this.setupRenderTarget=ye,this.updateRenderTargetMipmap=we,this.updateMultisampleRenderTarget=Ot,this.setupDepthRenderbuffer=Ne,this.setupFrameBufferTexture=me,this.useMultisampledRTT=Be}function zy(i,e){function t(n,r=_i){let s;const a=ft.getTransfer(r);if(n===Bn)return i.UNSIGNED_BYTE;if(n===lc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===cc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===ch)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===oh)return i.BYTE;if(n===lh)return i.SHORT;if(n===ps)return i.UNSIGNED_SHORT;if(n===oc)return i.INT;if(n===qi)return i.UNSIGNED_INT;if(n===ti)return i.FLOAT;if(n===Ss)return i.HALF_FLOAT;if(n===uh)return i.ALPHA;if(n===fh)return i.RGB;if(n===Pn)return i.RGBA;if(n===hh)return i.LUMINANCE;if(n===dh)return i.LUMINANCE_ALPHA;if(n===Tr)return i.DEPTH_COMPONENT;if(n===Ur)return i.DEPTH_STENCIL;if(n===ph)return i.RED;if(n===uc)return i.RED_INTEGER;if(n===mh)return i.RG;if(n===fc)return i.RG_INTEGER;if(n===hc)return i.RGBA_INTEGER;if(n===ga||n===_a||n===va||n===ya)if(a===_t)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===ga)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===_a)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===va)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ya)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===ga)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===_a)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===va)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ya)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===hl||n===dl||n===pl||n===ml)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===hl)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===dl)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===pl)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ml)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===gl||n===_l||n===vl)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===gl||n===_l)return a===_t?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===vl)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===yl||n===xl||n===Sl||n===bl||n===El||n===Ml||n===wl||n===Tl||n===Al||n===Rl||n===Cl||n===Pl||n===Ll||n===Il)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===yl)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===xl)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Sl)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===bl)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===El)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ml)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===wl)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Tl)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Al)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Rl)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Cl)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Pl)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ll)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Il)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===xa||n===Dl||n===Nl)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===xa)return a===_t?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Dl)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Nl)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===gh||n===Ul||n===Ol||n===Fl)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===xa)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Ul)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ol)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Fl)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Nr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const Vy={type:"move"};class zo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ia,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ia,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Y,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Y),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ia,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Y,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Y),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const y of e.hand.values()){const _=t.getJointPose(y,n),g=this._getHandJoint(l,y);_!==null&&(g.matrix.fromArray(_.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=_.radius),g.visible=_!==null}const h=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],d=h.position.distanceTo(f.position),m=.02,x=.005;l.inputState.pinching&&d>m+x?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=m-x&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Vy)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new ia;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Hy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Gy=`
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

}`;class Wy{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const r=new Zt,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new zn({vertexShader:Hy,fragmentShader:Gy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new an(new Ei(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class qy extends Wr{constructor(e,t){super();const n=this;let r=null,s=1,a=null,o="local-floor",c=1,l=null,h=null,f=null,d=null,m=null,x=null;const y=new Wy,_=t.getContextAttributes();let g=null,R=null;const A=[],b=[],L=new vt;let I=null;const C=new Rn;C.viewport=new Rt;const D=new Rn;D.viewport=new Rt;const M=[C,D],S=new hg;let N=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ee){let G=A[ee];return G===void 0&&(G=new zo,A[ee]=G),G.getTargetRaySpace()},this.getControllerGrip=function(ee){let G=A[ee];return G===void 0&&(G=new zo,A[ee]=G),G.getGripSpace()},this.getHand=function(ee){let G=A[ee];return G===void 0&&(G=new zo,A[ee]=G),G.getHandSpace()};function F(ee){const G=b.indexOf(ee.inputSource);if(G===-1)return;const me=A[G];me!==void 0&&(me.update(ee.inputSource,ee.frame,l||a),me.dispatchEvent({type:ee.type,data:ee.inputSource}))}function $(){r.removeEventListener("select",F),r.removeEventListener("selectstart",F),r.removeEventListener("selectend",F),r.removeEventListener("squeeze",F),r.removeEventListener("squeezestart",F),r.removeEventListener("squeezeend",F),r.removeEventListener("end",$),r.removeEventListener("inputsourceschange",ae);for(let ee=0;ee<A.length;ee++){const G=b[ee];G!==null&&(b[ee]=null,A[ee].disconnect(G))}N=null,k=null,y.reset(),e.setRenderTarget(g),m=null,d=null,f=null,r=null,R=null,Re.stop(),n.isPresenting=!1,e.setPixelRatio(I),e.setSize(L.width,L.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ee){s=ee,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ee){o=ee,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(ee){l=ee},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return f},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(ee){if(r=ee,r!==null){if(g=e.getRenderTarget(),r.addEventListener("select",F),r.addEventListener("selectstart",F),r.addEventListener("selectend",F),r.addEventListener("squeeze",F),r.addEventListener("squeezestart",F),r.addEventListener("squeezeend",F),r.addEventListener("end",$),r.addEventListener("inputsourceschange",ae),_.xrCompatible!==!0&&await t.makeXRCompatible(),I=e.getPixelRatio(),e.getSize(L),r.enabledFeatures!==void 0&&r.enabledFeatures.includes("layers")){let me=null,he=null,ve=null;_.depth&&(ve=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,me=_.stencil?Ur:Tr,he=_.stencil?Nr:qi);const Ne={colorFormat:t.RGBA8,depthFormat:ve,scaleFactor:s};f=new XRWebGLBinding(r,t),d=f.createProjectionLayer(Ne),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),R=new bi(d.textureWidth,d.textureHeight,{format:Pn,type:Bn,depthTexture:new Ph(d.textureWidth,d.textureHeight,he,void 0,void 0,void 0,void 0,void 0,void 0,me),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}else{const me={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,me),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),R=new bi(m.framebufferWidth,m.framebufferHeight,{format:Pn,type:Bn,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}R.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await r.requestReferenceSpace(o),Re.setContext(r),Re.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function ae(ee){for(let G=0;G<ee.removed.length;G++){const me=ee.removed[G],he=b.indexOf(me);he>=0&&(b[he]=null,A[he].disconnect(me))}for(let G=0;G<ee.added.length;G++){const me=ee.added[G];let he=b.indexOf(me);if(he===-1){for(let Ne=0;Ne<A.length;Ne++)if(Ne>=b.length){b.push(me),he=Ne;break}else if(b[Ne]===null){b[Ne]=me,he=Ne;break}if(he===-1)break}const ve=A[he];ve&&ve.connect(me)}}const Z=new Y,fe=new Y;function J(ee,G,me){Z.setFromMatrixPosition(G.matrixWorld),fe.setFromMatrixPosition(me.matrixWorld);const he=Z.distanceTo(fe),ve=G.projectionMatrix.elements,Ne=me.projectionMatrix.elements,Ve=ve[14]/(ve[10]-1),ye=ve[14]/(ve[10]+1),we=(ve[9]+1)/ve[5],ct=(ve[9]-1)/ve[5],O=(ve[8]-1)/ve[0],Ot=(Ne[8]+1)/Ne[0],rt=Ve*O,Be=Ve*Ot,ke=he/(-O+Ot),mt=ke*-O;if(G.matrixWorld.decompose(ee.position,ee.quaternion,ee.scale),ee.translateX(mt),ee.translateZ(ke),ee.matrixWorld.compose(ee.position,ee.quaternion,ee.scale),ee.matrixWorldInverse.copy(ee.matrixWorld).invert(),ve[10]===-1)ee.projectionMatrix.copy(G.projectionMatrix),ee.projectionMatrixInverse.copy(G.projectionMatrixInverse);else{const Ue=Ve+ke,P=ye+ke,E=rt-mt,W=Be+(he-mt),oe=we*ye/P*Ue,le=ct*ye/P*Ue;ee.projectionMatrix.makePerspective(E,W,oe,le,Ue,P),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert()}}function te(ee,G){G===null?ee.matrixWorld.copy(ee.matrix):ee.matrixWorld.multiplyMatrices(G.matrixWorld,ee.matrix),ee.matrixWorldInverse.copy(ee.matrixWorld).invert()}this.updateCamera=function(ee){if(r===null)return;let G=ee.near,me=ee.far;y.texture!==null&&(y.depthNear>0&&(G=y.depthNear),y.depthFar>0&&(me=y.depthFar)),S.near=D.near=C.near=G,S.far=D.far=C.far=me,(N!==S.near||k!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),N=S.near,k=S.far),C.layers.mask=ee.layers.mask|2,D.layers.mask=ee.layers.mask|4,S.layers.mask=C.layers.mask|D.layers.mask;const he=ee.parent,ve=S.cameras;te(S,he);for(let Ne=0;Ne<ve.length;Ne++)te(ve[Ne],he);ve.length===2?J(S,C,D):S.projectionMatrix.copy(C.projectionMatrix),se(ee,S,he)};function se(ee,G,me){me===null?ee.matrix.copy(G.matrixWorld):(ee.matrix.copy(me.matrixWorld),ee.matrix.invert(),ee.matrix.multiply(G.matrixWorld)),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.updateMatrixWorld(!0),ee.projectionMatrix.copy(G.projectionMatrix),ee.projectionMatrixInverse.copy(G.projectionMatrixInverse),ee.isPerspectiveCamera&&(ee.fov=kl*2*Math.atan(1/ee.projectionMatrix.elements[5]),ee.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(d===null&&m===null))return c},this.setFoveation=function(ee){c=ee,d!==null&&(d.fixedFoveation=ee),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=ee)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(S)};let pe=null;function _e(ee,G){if(h=G.getViewerPose(l||a),x=G,h!==null){const me=h.views;m!==null&&(e.setRenderTargetFramebuffer(R,m.framebuffer),e.setRenderTarget(R));let he=!1;me.length!==S.cameras.length&&(S.cameras.length=0,he=!0);for(let Ne=0;Ne<me.length;Ne++){const Ve=me[Ne];let ye=null;if(m!==null)ye=m.getViewport(Ve);else{const ct=f.getViewSubImage(d,Ve);ye=ct.viewport,Ne===0&&(e.setRenderTargetTextures(R,ct.colorTexture,d.ignoreDepthValues?void 0:ct.depthStencilTexture),e.setRenderTarget(R))}let we=M[Ne];we===void 0&&(we=new Rn,we.layers.enable(Ne),we.viewport=new Rt,M[Ne]=we),we.matrix.fromArray(Ve.transform.matrix),we.matrix.decompose(we.position,we.quaternion,we.scale),we.projectionMatrix.fromArray(Ve.projectionMatrix),we.projectionMatrixInverse.copy(we.projectionMatrix).invert(),we.viewport.set(ye.x,ye.y,ye.width,ye.height),Ne===0&&(S.matrix.copy(we.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),he===!0&&S.cameras.push(we)}const ve=r.enabledFeatures;if(ve&&ve.includes("depth-sensing")){const Ne=f.getDepthInformation(me[0]);Ne&&Ne.isValid&&Ne.texture&&y.init(e,Ne,r.renderState)}}for(let me=0;me<A.length;me++){const he=b[me],ve=A[me];he!==null&&ve!==void 0&&ve.update(he,G,l||a)}pe&&pe(ee,G),G.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:G}),x=null}const Re=new Ih;Re.setAnimationLoop(_e),this.setAnimationLoop=function(ee){pe=ee},this.dispose=function(){}}}const Ni=new oi,Xy=new Dt;function jy(i,e){function t(_,g){_.matrixAutoUpdate===!0&&_.updateMatrix(),g.value.copy(_.matrix)}function n(_,g){g.color.getRGB(_.fogColor.value,wh(i)),g.isFog?(_.fogNear.value=g.near,_.fogFar.value=g.far):g.isFogExp2&&(_.fogDensity.value=g.density)}function r(_,g,R,A,b){g.isMeshBasicMaterial||g.isMeshLambertMaterial?s(_,g):g.isMeshToonMaterial?(s(_,g),f(_,g)):g.isMeshPhongMaterial?(s(_,g),h(_,g)):g.isMeshStandardMaterial?(s(_,g),d(_,g),g.isMeshPhysicalMaterial&&m(_,g,b)):g.isMeshMatcapMaterial?(s(_,g),x(_,g)):g.isMeshDepthMaterial?s(_,g):g.isMeshDistanceMaterial?(s(_,g),y(_,g)):g.isMeshNormalMaterial?s(_,g):g.isLineBasicMaterial?(a(_,g),g.isLineDashedMaterial&&o(_,g)):g.isPointsMaterial?c(_,g,R,A):g.isSpriteMaterial?l(_,g):g.isShadowMaterial?(_.color.value.copy(g.color),_.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function s(_,g){_.opacity.value=g.opacity,g.color&&_.diffuse.value.copy(g.color),g.emissive&&_.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(_.map.value=g.map,t(g.map,_.mapTransform)),g.alphaMap&&(_.alphaMap.value=g.alphaMap,t(g.alphaMap,_.alphaMapTransform)),g.bumpMap&&(_.bumpMap.value=g.bumpMap,t(g.bumpMap,_.bumpMapTransform),_.bumpScale.value=g.bumpScale,g.side===on&&(_.bumpScale.value*=-1)),g.normalMap&&(_.normalMap.value=g.normalMap,t(g.normalMap,_.normalMapTransform),_.normalScale.value.copy(g.normalScale),g.side===on&&_.normalScale.value.negate()),g.displacementMap&&(_.displacementMap.value=g.displacementMap,t(g.displacementMap,_.displacementMapTransform),_.displacementScale.value=g.displacementScale,_.displacementBias.value=g.displacementBias),g.emissiveMap&&(_.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,_.emissiveMapTransform)),g.specularMap&&(_.specularMap.value=g.specularMap,t(g.specularMap,_.specularMapTransform)),g.alphaTest>0&&(_.alphaTest.value=g.alphaTest);const R=e.get(g),A=R.envMap,b=R.envMapRotation;A&&(_.envMap.value=A,Ni.copy(b),Ni.x*=-1,Ni.y*=-1,Ni.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(Ni.y*=-1,Ni.z*=-1),_.envMapRotation.value.setFromMatrix4(Xy.makeRotationFromEuler(Ni)),_.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,_.reflectivity.value=g.reflectivity,_.ior.value=g.ior,_.refractionRatio.value=g.refractionRatio),g.lightMap&&(_.lightMap.value=g.lightMap,_.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,_.lightMapTransform)),g.aoMap&&(_.aoMap.value=g.aoMap,_.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,_.aoMapTransform))}function a(_,g){_.diffuse.value.copy(g.color),_.opacity.value=g.opacity,g.map&&(_.map.value=g.map,t(g.map,_.mapTransform))}function o(_,g){_.dashSize.value=g.dashSize,_.totalSize.value=g.dashSize+g.gapSize,_.scale.value=g.scale}function c(_,g,R,A){_.diffuse.value.copy(g.color),_.opacity.value=g.opacity,_.size.value=g.size*R,_.scale.value=A*.5,g.map&&(_.map.value=g.map,t(g.map,_.uvTransform)),g.alphaMap&&(_.alphaMap.value=g.alphaMap,t(g.alphaMap,_.alphaMapTransform)),g.alphaTest>0&&(_.alphaTest.value=g.alphaTest)}function l(_,g){_.diffuse.value.copy(g.color),_.opacity.value=g.opacity,_.rotation.value=g.rotation,g.map&&(_.map.value=g.map,t(g.map,_.mapTransform)),g.alphaMap&&(_.alphaMap.value=g.alphaMap,t(g.alphaMap,_.alphaMapTransform)),g.alphaTest>0&&(_.alphaTest.value=g.alphaTest)}function h(_,g){_.specular.value.copy(g.specular),_.shininess.value=Math.max(g.shininess,1e-4)}function f(_,g){g.gradientMap&&(_.gradientMap.value=g.gradientMap)}function d(_,g){_.metalness.value=g.metalness,g.metalnessMap&&(_.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,_.metalnessMapTransform)),_.roughness.value=g.roughness,g.roughnessMap&&(_.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,_.roughnessMapTransform)),g.envMap&&(_.envMapIntensity.value=g.envMapIntensity)}function m(_,g,R){_.ior.value=g.ior,g.sheen>0&&(_.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),_.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(_.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,_.sheenColorMapTransform)),g.sheenRoughnessMap&&(_.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,_.sheenRoughnessMapTransform))),g.clearcoat>0&&(_.clearcoat.value=g.clearcoat,_.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(_.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,_.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(_.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===on&&_.clearcoatNormalScale.value.negate())),g.dispersion>0&&(_.dispersion.value=g.dispersion),g.iridescence>0&&(_.iridescence.value=g.iridescence,_.iridescenceIOR.value=g.iridescenceIOR,_.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(_.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,_.iridescenceMapTransform)),g.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),g.transmission>0&&(_.transmission.value=g.transmission,_.transmissionSamplerMap.value=R.texture,_.transmissionSamplerSize.value.set(R.width,R.height),g.transmissionMap&&(_.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,_.transmissionMapTransform)),_.thickness.value=g.thickness,g.thicknessMap&&(_.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=g.attenuationDistance,_.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(_.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(_.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=g.specularIntensity,_.specularColor.value.copy(g.specularColor),g.specularColorMap&&(_.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,_.specularColorMapTransform)),g.specularIntensityMap&&(_.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,_.specularIntensityMapTransform))}function x(_,g){g.matcap&&(_.matcap.value=g.matcap)}function y(_,g){const R=e.get(g).light;_.referencePosition.value.setFromMatrixPosition(R.matrixWorld),_.nearDistance.value=R.shadow.camera.near,_.farDistance.value=R.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function $y(i,e,t,n){let r={},s={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(R,A){const b=A.program;n.uniformBlockBinding(R,b)}function l(R,A){let b=r[R.id];b===void 0&&(x(R),b=h(R),r[R.id]=b,R.addEventListener("dispose",_));const L=A.program;n.updateUBOMapping(R,L);const I=e.render.frame;s[R.id]!==I&&(d(R),s[R.id]=I)}function h(R){const A=f();R.__bindingPointIndex=A;const b=i.createBuffer(),L=R.__size,I=R.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,L,I),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,A,b),b}function f(){for(let R=0;R<o;R++)if(a.indexOf(R)===-1)return a.push(R),R;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(R){const A=r[R.id],b=R.uniforms,L=R.__cache;i.bindBuffer(i.UNIFORM_BUFFER,A);for(let I=0,C=b.length;I<C;I++){const D=Array.isArray(b[I])?b[I]:[b[I]];for(let M=0,S=D.length;M<S;M++){const N=D[M];if(m(N,I,M,L)===!0){const k=N.__offset,F=Array.isArray(N.value)?N.value:[N.value];let $=0;for(let ae=0;ae<F.length;ae++){const Z=F[ae],fe=y(Z);typeof Z=="number"||typeof Z=="boolean"?(N.__data[0]=Z,i.bufferSubData(i.UNIFORM_BUFFER,k+$,N.__data)):Z.isMatrix3?(N.__data[0]=Z.elements[0],N.__data[1]=Z.elements[1],N.__data[2]=Z.elements[2],N.__data[3]=0,N.__data[4]=Z.elements[3],N.__data[5]=Z.elements[4],N.__data[6]=Z.elements[5],N.__data[7]=0,N.__data[8]=Z.elements[6],N.__data[9]=Z.elements[7],N.__data[10]=Z.elements[8],N.__data[11]=0):(Z.toArray(N.__data,$),$+=fe.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,k,N.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(R,A,b,L){const I=R.value,C=A+"_"+b;if(L[C]===void 0)return typeof I=="number"||typeof I=="boolean"?L[C]=I:L[C]=I.clone(),!0;{const D=L[C];if(typeof I=="number"||typeof I=="boolean"){if(D!==I)return L[C]=I,!0}else if(D.equals(I)===!1)return D.copy(I),!0}return!1}function x(R){const A=R.uniforms;let b=0;const L=16;for(let C=0,D=A.length;C<D;C++){const M=Array.isArray(A[C])?A[C]:[A[C]];for(let S=0,N=M.length;S<N;S++){const k=M[S],F=Array.isArray(k.value)?k.value:[k.value];for(let $=0,ae=F.length;$<ae;$++){const Z=F[$],fe=y(Z),J=b%L,te=J%fe.boundary,se=J+te;b+=te,se!==0&&L-se<fe.storage&&(b+=L-se),k.__data=new Float32Array(fe.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=b,b+=fe.storage}}}const I=b%L;return I>0&&(b+=L-I),R.__size=b,R.__cache={},this}function y(R){const A={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(A.boundary=4,A.storage=4):R.isVector2?(A.boundary=8,A.storage=8):R.isVector3||R.isColor?(A.boundary=16,A.storage=12):R.isVector4?(A.boundary=16,A.storage=16):R.isMatrix3?(A.boundary=48,A.storage=48):R.isMatrix4?(A.boundary=64,A.storage=64):R.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",R),A}function _(R){const A=R.target;A.removeEventListener("dispose",_);const b=a.indexOf(A.__bindingPointIndex);a.splice(b,1),i.deleteBuffer(r[A.id]),delete r[A.id],delete s[A.id]}function g(){for(const R in r)i.deleteBuffer(r[R]);a=[],r={},s={}}return{bind:c,update:l,dispose:g}}class Yy{constructor(e={}){const{canvas:t=Im(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=a;const x=new Uint32Array(4),y=new Int32Array(4);let _=null,g=null;const R=[],A=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Wt,this.toneMapping=ri,this.toneMappingExposure=1;const b=this;let L=!1,I=0,C=0,D=null,M=-1,S=null;const N=new Rt,k=new Rt;let F=null;const $=new ht(0);let ae=0,Z=t.width,fe=t.height,J=1,te=null,se=null;const pe=new Rt(0,0,Z,fe),_e=new Rt(0,0,Z,fe);let Re=!1;const ee=new Ch;let G=!1,me=!1;this.transmissionResolutionScale=1;const he=new Dt,ve=new Dt,Ne=new Y,Ve=new Rt,ye={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let we=!1;function ct(){return D===null?J:1}let O=n;function Ot(w,z){return t.getContext(w,z)}try{const w={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ac}`),t.addEventListener("webglcontextlost",ie,!1),t.addEventListener("webglcontextrestored",Te,!1),t.addEventListener("webglcontextcreationerror",q,!1),O===null){const z="webgl2";if(O=Ot(z,w),O===null)throw Ot(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let rt,Be,ke,mt,Ue,P,E,W,oe,le,ne,Oe,ge,Pe,st,de,Ie,Ge,qe,Le,Me,Ze,dt,B;function xe(){rt=new rv(O),rt.init(),Ze=new zy(O,rt),Be=new Z0(O,rt,e,Ze),ke=new ky(O,rt),Be.reverseDepthBuffer&&d&&ke.buffers.depth.setReversed(!0),mt=new ov(O),Ue=new wy,P=new By(O,rt,ke,Ue,Be,Ze,mt),E=new ev(b),W=new iv(b),oe=new pg(O),dt=new K0(O,oe),le=new sv(O,oe,mt,dt),ne=new cv(O,le,oe,mt),qe=new lv(O,Be,P),de=new Q0(Ue),Oe=new My(b,E,W,rt,Be,dt,de),ge=new jy(b,Ue),Pe=new Ay,st=new Dy(rt),Ge=new Y0(b,E,W,ke,ne,m,c),Ie=new Oy(b,ne,Be),B=new $y(O,mt,Be,ke),Le=new J0(O,rt,mt),Me=new av(O,rt,mt),mt.programs=Oe.programs,b.capabilities=Be,b.extensions=rt,b.properties=Ue,b.renderLists=Pe,b.shadowMap=Ie,b.state=ke,b.info=mt}xe();const Q=new qy(b,O);this.xr=Q,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const w=rt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=rt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return J},this.setPixelRatio=function(w){w!==void 0&&(J=w,this.setSize(Z,fe,!1))},this.getSize=function(w){return w.set(Z,fe)},this.setSize=function(w,z,X=!0){if(Q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Z=w,fe=z,t.width=Math.floor(w*J),t.height=Math.floor(z*J),X===!0&&(t.style.width=w+"px",t.style.height=z+"px"),this.setViewport(0,0,w,z)},this.getDrawingBufferSize=function(w){return w.set(Z*J,fe*J).floor()},this.setDrawingBufferSize=function(w,z,X){Z=w,fe=z,J=X,t.width=Math.floor(w*X),t.height=Math.floor(z*X),this.setViewport(0,0,w,z)},this.getCurrentViewport=function(w){return w.copy(N)},this.getViewport=function(w){return w.copy(pe)},this.setViewport=function(w,z,X,j){w.isVector4?pe.set(w.x,w.y,w.z,w.w):pe.set(w,z,X,j),ke.viewport(N.copy(pe).multiplyScalar(J).round())},this.getScissor=function(w){return w.copy(_e)},this.setScissor=function(w,z,X,j){w.isVector4?_e.set(w.x,w.y,w.z,w.w):_e.set(w,z,X,j),ke.scissor(k.copy(_e).multiplyScalar(J).round())},this.getScissorTest=function(){return Re},this.setScissorTest=function(w){ke.setScissorTest(Re=w)},this.setOpaqueSort=function(w){te=w},this.setTransparentSort=function(w){se=w},this.getClearColor=function(w){return w.copy(Ge.getClearColor())},this.setClearColor=function(){Ge.setClearColor.apply(Ge,arguments)},this.getClearAlpha=function(){return Ge.getClearAlpha()},this.setClearAlpha=function(){Ge.setClearAlpha.apply(Ge,arguments)},this.clear=function(w=!0,z=!0,X=!0){let j=0;if(w){let V=!1;if(D!==null){const ue=D.texture.format;V=ue===hc||ue===fc||ue===uc}if(V){const ue=D.texture.type,Se=ue===Bn||ue===qi||ue===ps||ue===Nr||ue===lc||ue===cc,Ce=Ge.getClearColor(),Ae=Ge.getClearAlpha(),We=Ce.r,Xe=Ce.g,ze=Ce.b;Se?(x[0]=We,x[1]=Xe,x[2]=ze,x[3]=Ae,O.clearBufferuiv(O.COLOR,0,x)):(y[0]=We,y[1]=Xe,y[2]=ze,y[3]=Ae,O.clearBufferiv(O.COLOR,0,y))}else j|=O.COLOR_BUFFER_BIT}z&&(j|=O.DEPTH_BUFFER_BIT),X&&(j|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ie,!1),t.removeEventListener("webglcontextrestored",Te,!1),t.removeEventListener("webglcontextcreationerror",q,!1),Ge.dispose(),Pe.dispose(),st.dispose(),Ue.dispose(),E.dispose(),W.dispose(),ne.dispose(),dt.dispose(),B.dispose(),Oe.dispose(),Q.dispose(),Q.removeEventListener("sessionstart",Xr),Q.removeEventListener("sessionend",In),Dn.stop()};function ie(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function Te(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;const w=mt.autoReset,z=Ie.enabled,X=Ie.autoUpdate,j=Ie.needsUpdate,V=Ie.type;xe(),mt.autoReset=w,Ie.enabled=z,Ie.autoUpdate=X,Ie.needsUpdate=j,Ie.type=V}function q(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function $e(w){const z=w.target;z.removeEventListener("dispose",$e),bt(z)}function bt(w){Ft(w),Ue.remove(w)}function Ft(w){const z=Ue.get(w).programs;z!==void 0&&(z.forEach(function(X){Oe.releaseProgram(X)}),w.isShaderMaterial&&Oe.releaseShaderCache(w))}this.renderBufferDirect=function(w,z,X,j,V,ue){z===null&&(z=ye);const Se=V.isMesh&&V.matrixWorld.determinant()<0,Ce=Qa(w,z,X,j,V);ke.setMaterial(j,Se);let Ae=X.index,We=1;if(j.wireframe===!0){if(Ae=le.getWireframeAttribute(X),Ae===void 0)return;We=2}const Xe=X.drawRange,ze=X.attributes.position;let at=Xe.start*We,ut=(Xe.start+Xe.count)*We;ue!==null&&(at=Math.max(at,ue.start*We),ut=Math.min(ut,(ue.start+ue.count)*We)),Ae!==null?(at=Math.max(at,0),ut=Math.min(ut,Ae.count)):ze!=null&&(at=Math.max(at,0),ut=Math.min(ut,ze.count));const Mt=ut-at;if(Mt<0||Mt===1/0)return;dt.setup(V,j,Ce,X,Ae);let gt,ot=Le;if(Ae!==null&&(gt=oe.get(Ae),ot=Me,ot.setIndex(gt)),V.isMesh)j.wireframe===!0?(ke.setLineWidth(j.wireframeLinewidth*ct()),ot.setMode(O.LINES)):ot.setMode(O.TRIANGLES);else if(V.isLine){let be=j.linewidth;be===void 0&&(be=1),ke.setLineWidth(be*ct()),V.isLineSegments?ot.setMode(O.LINES):V.isLineLoop?ot.setMode(O.LINE_LOOP):ot.setMode(O.LINE_STRIP)}else V.isPoints?ot.setMode(O.POINTS):V.isSprite&&ot.setMode(O.TRIANGLES);if(V.isBatchedMesh)if(V._multiDrawInstances!==null)ot.renderMultiDrawInstances(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount,V._multiDrawInstances);else if(rt.get("WEBGL_multi_draw"))ot.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{const be=V._multiDrawStarts,At=V._multiDrawCounts,nt=V._multiDrawCount,Xt=Ae?oe.get(Ae).bytesPerElement:1,xn=Ue.get(j).currentProgram.getUniforms();for(let kt=0;kt<nt;kt++)xn.setValue(O,"_gl_DrawID",kt),ot.render(be[kt]/Xt,At[kt])}else if(V.isInstancedMesh)ot.renderInstances(at,Mt,V.count);else if(X.isInstancedBufferGeometry){const be=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,At=Math.min(X.instanceCount,be);ot.renderInstances(at,Mt,At)}else ot.render(at,Mt)};function Ke(w,z,X){w.transparent===!0&&w.side===Jn&&w.forceSinglePass===!1?(w.side=on,w.needsUpdate=!0,Ct(w,z,X),w.side=Si,w.needsUpdate=!0,Ct(w,z,X),w.side=Jn):Ct(w,z,X)}this.compile=function(w,z,X=null){X===null&&(X=w),g=st.get(X),g.init(z),A.push(g),X.traverseVisible(function(V){V.isLight&&V.layers.test(z.layers)&&(g.pushLight(V),V.castShadow&&g.pushShadow(V))}),w!==X&&w.traverseVisible(function(V){V.isLight&&V.layers.test(z.layers)&&(g.pushLight(V),V.castShadow&&g.pushShadow(V))}),g.setupLights();const j=new Set;return w.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;const ue=V.material;if(ue)if(Array.isArray(ue))for(let Se=0;Se<ue.length;Se++){const Ce=ue[Se];Ke(Ce,X,V),j.add(Ce)}else Ke(ue,X,V),j.add(ue)}),A.pop(),g=null,j},this.compileAsync=function(w,z,X=null){const j=this.compile(w,z,X);return new Promise(V=>{function ue(){if(j.forEach(function(Se){Ue.get(Se).currentProgram.isReady()&&j.delete(Se)}),j.size===0){V(w);return}setTimeout(ue,10)}rt.get("KHR_parallel_shader_compile")!==null?ue():setTimeout(ue,10)})};let qt=null;function cn(w){qt&&qt(w)}function Xr(){Dn.stop()}function In(){Dn.start()}const Dn=new Ih;Dn.setAnimationLoop(cn),typeof self<"u"&&Dn.setContext(self),this.setAnimationLoop=function(w){qt=w,Q.setAnimationLoop(w),w===null?Dn.stop():Dn.start()},Q.addEventListener("sessionstart",Xr),Q.addEventListener("sessionend",In),this.render=function(w,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),Q.enabled===!0&&Q.isPresenting===!0&&(Q.cameraAutoUpdate===!0&&Q.updateCamera(z),z=Q.getCamera()),w.isScene===!0&&w.onBeforeRender(b,w,z,D),g=st.get(w,A.length),g.init(z),A.push(g),ve.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),ee.setFromProjectionMatrix(ve),me=this.localClippingEnabled,G=de.init(this.clippingPlanes,me),_=Pe.get(w,R.length),_.init(),R.push(_),Q.enabled===!0&&Q.isPresenting===!0){const ue=b.xr.getDepthSensingMesh();ue!==null&&Gt(ue,z,-1/0,b.sortObjects)}Gt(w,z,0,b.sortObjects),_.finish(),b.sortObjects===!0&&_.sort(te,se),we=Q.enabled===!1||Q.isPresenting===!1||Q.hasDepthSensing()===!1,we&&Ge.addToRenderList(_,w),this.info.render.frame++,G===!0&&de.beginShadows();const X=g.state.shadowsArray;Ie.render(X,w,z),G===!0&&de.endShadows(),this.info.autoReset===!0&&this.info.reset();const j=_.opaque,V=_.transmissive;if(g.setupLights(),z.isArrayCamera){const ue=z.cameras;if(V.length>0)for(let Se=0,Ce=ue.length;Se<Ce;Se++){const Ae=ue[Se];Vn(j,V,w,Ae)}we&&Ge.render(w);for(let Se=0,Ce=ue.length;Se<Ce;Se++){const Ae=ue[Se];jr(_,w,Ae,Ae.viewport)}}else V.length>0&&Vn(j,V,w,z),we&&Ge.render(w),jr(_,w,z);D!==null&&C===0&&(P.updateMultisampleRenderTarget(D),P.updateRenderTargetMipmap(D)),w.isScene===!0&&w.onAfterRender(b,w,z),dt.resetDefaultState(),M=-1,S=null,A.pop(),A.length>0?(g=A[A.length-1],G===!0&&de.setGlobalState(b.clippingPlanes,g.state.camera)):g=null,R.pop(),R.length>0?_=R[R.length-1]:_=null};function Gt(w,z,X,j){if(w.visible===!1)return;if(w.layers.test(z.layers)){if(w.isGroup)X=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(z);else if(w.isLight)g.pushLight(w),w.castShadow&&g.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||ee.intersectsSprite(w)){j&&Ve.setFromMatrixPosition(w.matrixWorld).applyMatrix4(ve);const Se=ne.update(w),Ce=w.material;Ce.visible&&_.push(w,Se,Ce,X,Ve.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||ee.intersectsObject(w))){const Se=ne.update(w),Ce=w.material;if(j&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Ve.copy(w.boundingSphere.center)):(Se.boundingSphere===null&&Se.computeBoundingSphere(),Ve.copy(Se.boundingSphere.center)),Ve.applyMatrix4(w.matrixWorld).applyMatrix4(ve)),Array.isArray(Ce)){const Ae=Se.groups;for(let We=0,Xe=Ae.length;We<Xe;We++){const ze=Ae[We],at=Ce[ze.materialIndex];at&&at.visible&&_.push(w,Se,at,X,Ve.z,ze)}}else Ce.visible&&_.push(w,Se,Ce,X,Ve.z,null)}}const ue=w.children;for(let Se=0,Ce=ue.length;Se<Ce;Se++)Gt(ue[Se],z,X,j)}function jr(w,z,X,j){const V=w.opaque,ue=w.transmissive,Se=w.transparent;g.setupLightsView(X),G===!0&&de.setGlobalState(b.clippingPlanes,X),j&&ke.viewport(N.copy(j)),V.length>0&&wi(V,z,X),ue.length>0&&wi(ue,z,X),Se.length>0&&wi(Se,z,X),ke.buffers.depth.setTest(!0),ke.buffers.depth.setMask(!0),ke.buffers.color.setMask(!0),ke.setPolygonOffset(!1)}function Vn(w,z,X,j){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[j.id]===void 0&&(g.state.transmissionRenderTarget[j.id]=new bi(1,1,{generateMipmaps:!0,type:rt.has("EXT_color_buffer_half_float")||rt.has("EXT_color_buffer_float")?Ss:Bn,minFilter:ei,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ft.workingColorSpace}));const ue=g.state.transmissionRenderTarget[j.id],Se=j.viewport||N;ue.setSize(Se.z*b.transmissionResolutionScale,Se.w*b.transmissionResolutionScale);const Ce=b.getRenderTarget();b.setRenderTarget(ue),b.getClearColor($),ae=b.getClearAlpha(),ae<1&&b.setClearColor(16777215,.5),b.clear(),we&&Ge.render(X);const Ae=b.toneMapping;b.toneMapping=ri;const We=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),g.setupLightsView(j),G===!0&&de.setGlobalState(b.clippingPlanes,j),wi(w,X,j),P.updateMultisampleRenderTarget(ue),P.updateRenderTargetMipmap(ue),rt.has("WEBGL_multisampled_render_to_texture")===!1){let Xe=!1;for(let ze=0,at=z.length;ze<at;ze++){const ut=z[ze],Mt=ut.object,gt=ut.geometry,ot=ut.material,be=ut.group;if(ot.side===Jn&&Mt.layers.test(j.layers)){const At=ot.side;ot.side=on,ot.needsUpdate=!0,$r(Mt,X,j,gt,ot,be),ot.side=At,ot.needsUpdate=!0,Xe=!0}}Xe===!0&&(P.updateMultisampleRenderTarget(ue),P.updateRenderTargetMipmap(ue))}b.setRenderTarget(Ce),b.setClearColor($,ae),We!==void 0&&(j.viewport=We),b.toneMapping=Ae}function wi(w,z,X){const j=z.isScene===!0?z.overrideMaterial:null;for(let V=0,ue=w.length;V<ue;V++){const Se=w[V],Ce=Se.object,Ae=Se.geometry,We=j===null?Se.material:j,Xe=Se.group;Ce.layers.test(X.layers)&&$r(Ce,z,X,Ae,We,Xe)}}function $r(w,z,X,j,V,ue){w.onBeforeRender(b,z,X,j,V,ue),w.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),V.onBeforeRender(b,z,X,j,w,ue),V.transparent===!0&&V.side===Jn&&V.forceSinglePass===!1?(V.side=on,V.needsUpdate=!0,b.renderBufferDirect(X,z,j,V,w,ue),V.side=Si,V.needsUpdate=!0,b.renderBufferDirect(X,z,j,V,w,ue),V.side=Jn):b.renderBufferDirect(X,z,j,V,w,ue),w.onAfterRender(b,z,X,j,V,ue)}function Ct(w,z,X){z.isScene!==!0&&(z=ye);const j=Ue.get(w),V=g.state.lights,ue=g.state.shadowsArray,Se=V.state.version,Ce=Oe.getParameters(w,V.state,ue,z,X),Ae=Oe.getProgramCacheKey(Ce);let We=j.programs;j.environment=w.isMeshStandardMaterial?z.environment:null,j.fog=z.fog,j.envMap=(w.isMeshStandardMaterial?W:E).get(w.envMap||j.environment),j.envMapRotation=j.environment!==null&&w.envMap===null?z.environmentRotation:w.envMapRotation,We===void 0&&(w.addEventListener("dispose",$e),We=new Map,j.programs=We);let Xe=We.get(Ae);if(Xe!==void 0){if(j.currentProgram===Xe&&j.lightsStateVersion===Se)return Ts(w,Ce),Xe}else Ce.uniforms=Oe.getUniforms(w),w.onBeforeCompile(Ce,b),Xe=Oe.acquireProgram(Ce,Ae),We.set(Ae,Xe),j.uniforms=Ce.uniforms;const ze=j.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(ze.clippingPlanes=de.uniform),Ts(w,Ce),j.needsLights=As(w),j.lightsStateVersion=Se,j.needsLights&&(ze.ambientLightColor.value=V.state.ambient,ze.lightProbe.value=V.state.probe,ze.directionalLights.value=V.state.directional,ze.directionalLightShadows.value=V.state.directionalShadow,ze.spotLights.value=V.state.spot,ze.spotLightShadows.value=V.state.spotShadow,ze.rectAreaLights.value=V.state.rectArea,ze.ltc_1.value=V.state.rectAreaLTC1,ze.ltc_2.value=V.state.rectAreaLTC2,ze.pointLights.value=V.state.point,ze.pointLightShadows.value=V.state.pointShadow,ze.hemisphereLights.value=V.state.hemi,ze.directionalShadowMap.value=V.state.directionalShadowMap,ze.directionalShadowMatrix.value=V.state.directionalShadowMatrix,ze.spotShadowMap.value=V.state.spotShadowMap,ze.spotLightMatrix.value=V.state.spotLightMatrix,ze.spotLightMap.value=V.state.spotLightMap,ze.pointShadowMap.value=V.state.pointShadowMap,ze.pointShadowMatrix.value=V.state.pointShadowMatrix),j.currentProgram=Xe,j.uniformsList=null,Xe}function Yr(w){if(w.uniformsList===null){const z=w.currentProgram.getUniforms();w.uniformsList=Sa.seqWithValue(z.seq,w.uniforms)}return w.uniformsList}function Ts(w,z){const X=Ue.get(w);X.outputColorSpace=z.outputColorSpace,X.batching=z.batching,X.batchingColor=z.batchingColor,X.instancing=z.instancing,X.instancingColor=z.instancingColor,X.instancingMorph=z.instancingMorph,X.skinning=z.skinning,X.morphTargets=z.morphTargets,X.morphNormals=z.morphNormals,X.morphColors=z.morphColors,X.morphTargetsCount=z.morphTargetsCount,X.numClippingPlanes=z.numClippingPlanes,X.numIntersection=z.numClipIntersection,X.vertexAlphas=z.vertexAlphas,X.vertexTangents=z.vertexTangents,X.toneMapping=z.toneMapping}function Qa(w,z,X,j,V){z.isScene!==!0&&(z=ye),P.resetTextureUnits();const ue=z.fog,Se=j.isMeshStandardMaterial?z.environment:null,Ce=D===null?b.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:Or,Ae=(j.isMeshStandardMaterial?W:E).get(j.envMap||Se),We=j.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Xe=!!X.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),ze=!!X.morphAttributes.position,at=!!X.morphAttributes.normal,ut=!!X.morphAttributes.color;let Mt=ri;j.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(Mt=b.toneMapping);const gt=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,ot=gt!==void 0?gt.length:0,be=Ue.get(j),At=g.state.lights;if(G===!0&&(me===!0||w!==S)){const Bt=w===S&&j.id===M;de.setState(j,w,Bt)}let nt=!1;j.version===be.__version?(be.needsLights&&be.lightsStateVersion!==At.state.version||be.outputColorSpace!==Ce||V.isBatchedMesh&&be.batching===!1||!V.isBatchedMesh&&be.batching===!0||V.isBatchedMesh&&be.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&be.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&be.instancing===!1||!V.isInstancedMesh&&be.instancing===!0||V.isSkinnedMesh&&be.skinning===!1||!V.isSkinnedMesh&&be.skinning===!0||V.isInstancedMesh&&be.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&be.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&be.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&be.instancingMorph===!1&&V.morphTexture!==null||be.envMap!==Ae||j.fog===!0&&be.fog!==ue||be.numClippingPlanes!==void 0&&(be.numClippingPlanes!==de.numPlanes||be.numIntersection!==de.numIntersection)||be.vertexAlphas!==We||be.vertexTangents!==Xe||be.morphTargets!==ze||be.morphNormals!==at||be.morphColors!==ut||be.toneMapping!==Mt||be.morphTargetsCount!==ot)&&(nt=!0):(nt=!0,be.__version=j.version);let Xt=be.currentProgram;nt===!0&&(Xt=Ct(j,z,V));let xn=!1,kt=!1,Sn=!1;const xt=Xt.getUniforms(),nn=be.uniforms;if(ke.useProgram(Xt.program)&&(xn=!0,kt=!0,Sn=!0),j.id!==M&&(M=j.id,kt=!0),xn||S!==w){ke.buffers.depth.getReversed()?(he.copy(w.projectionMatrix),Nm(he),Um(he),xt.setValue(O,"projectionMatrix",he)):xt.setValue(O,"projectionMatrix",w.projectionMatrix),xt.setValue(O,"viewMatrix",w.matrixWorldInverse);const zt=xt.map.cameraPosition;zt!==void 0&&zt.setValue(O,Ne.setFromMatrixPosition(w.matrixWorld)),Be.logarithmicDepthBuffer&&xt.setValue(O,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&xt.setValue(O,"isOrthographic",w.isOrthographicCamera===!0),S!==w&&(S=w,kt=!0,Sn=!0)}if(V.isSkinnedMesh){xt.setOptional(O,V,"bindMatrix"),xt.setOptional(O,V,"bindMatrixInverse");const Bt=V.skeleton;Bt&&(Bt.boneTexture===null&&Bt.computeBoneTexture(),xt.setValue(O,"boneTexture",Bt.boneTexture,P))}V.isBatchedMesh&&(xt.setOptional(O,V,"batchingTexture"),xt.setValue(O,"batchingTexture",V._matricesTexture,P),xt.setOptional(O,V,"batchingIdTexture"),xt.setValue(O,"batchingIdTexture",V._indirectTexture,P),xt.setOptional(O,V,"batchingColorTexture"),V._colorsTexture!==null&&xt.setValue(O,"batchingColorTexture",V._colorsTexture,P));const jt=X.morphAttributes;if((jt.position!==void 0||jt.normal!==void 0||jt.color!==void 0)&&qe.update(V,X,Xt),(kt||be.receiveShadow!==V.receiveShadow)&&(be.receiveShadow=V.receiveShadow,xt.setValue(O,"receiveShadow",V.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(nn.envMap.value=Ae,nn.flipEnvMap.value=Ae.isCubeTexture&&Ae.isRenderTargetTexture===!1?-1:1),j.isMeshStandardMaterial&&j.envMap===null&&z.environment!==null&&(nn.envMapIntensity.value=z.environmentIntensity),kt&&(xt.setValue(O,"toneMappingExposure",b.toneMappingExposure),be.needsLights&&Kr(nn,Sn),ue&&j.fog===!0&&ge.refreshFogUniforms(nn,ue),ge.refreshMaterialUniforms(nn,j,J,fe,g.state.transmissionRenderTarget[w.id]),Sa.upload(O,Yr(be),nn,P)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(Sa.upload(O,Yr(be),nn,P),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&xt.setValue(O,"center",V.center),xt.setValue(O,"modelViewMatrix",V.modelViewMatrix),xt.setValue(O,"normalMatrix",V.normalMatrix),xt.setValue(O,"modelMatrix",V.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){const Bt=j.uniformsGroups;for(let zt=0,Ti=Bt.length;zt<Ti;zt++){const Hn=Bt[zt];B.update(Hn,Xt),B.bind(Hn,Xt)}}return Xt}function Kr(w,z){w.ambientLightColor.needsUpdate=z,w.lightProbe.needsUpdate=z,w.directionalLights.needsUpdate=z,w.directionalLightShadows.needsUpdate=z,w.pointLights.needsUpdate=z,w.pointLightShadows.needsUpdate=z,w.spotLights.needsUpdate=z,w.spotLightShadows.needsUpdate=z,w.rectAreaLights.needsUpdate=z,w.hemisphereLights.needsUpdate=z}function As(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(w,z,X){Ue.get(w.texture).__webglTexture=z,Ue.get(w.depthTexture).__webglTexture=X;const j=Ue.get(w);j.__hasExternalTextures=!0,j.__autoAllocateDepthBuffer=X===void 0,j.__autoAllocateDepthBuffer||rt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),j.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,z){const X=Ue.get(w);X.__webglFramebuffer=z,X.__useDefaultFramebuffer=z===void 0};const Ji=O.createFramebuffer();this.setRenderTarget=function(w,z=0,X=0){D=w,I=z,C=X;let j=!0,V=null,ue=!1,Se=!1;if(w){const Ae=Ue.get(w);if(Ae.__useDefaultFramebuffer!==void 0)ke.bindFramebuffer(O.FRAMEBUFFER,null),j=!1;else if(Ae.__webglFramebuffer===void 0)P.setupRenderTarget(w);else if(Ae.__hasExternalTextures)P.rebindTextures(w,Ue.get(w.texture).__webglTexture,Ue.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const ze=w.depthTexture;if(Ae.__boundDepthTexture!==ze){if(ze!==null&&Ue.has(ze)&&(w.width!==ze.image.width||w.height!==ze.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(w)}}const We=w.texture;(We.isData3DTexture||We.isDataArrayTexture||We.isCompressedArrayTexture)&&(Se=!0);const Xe=Ue.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Xe[z])?V=Xe[z][X]:V=Xe[z],ue=!0):w.samples>0&&P.useMultisampledRTT(w)===!1?V=Ue.get(w).__webglMultisampledFramebuffer:Array.isArray(Xe)?V=Xe[X]:V=Xe,N.copy(w.viewport),k.copy(w.scissor),F=w.scissorTest}else N.copy(pe).multiplyScalar(J).floor(),k.copy(_e).multiplyScalar(J).floor(),F=Re;if(X!==0&&(V=Ji),ke.bindFramebuffer(O.FRAMEBUFFER,V)&&j&&ke.drawBuffers(w,V),ke.viewport(N),ke.scissor(k),ke.setScissorTest(F),ue){const Ae=Ue.get(w.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+z,Ae.__webglTexture,X)}else if(Se){const Ae=Ue.get(w.texture),We=z;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ae.__webglTexture,X,We)}else if(w!==null&&X!==0){const Ae=Ue.get(w.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Ae.__webglTexture,X)}M=-1},this.readRenderTargetPixels=function(w,z,X,j,V,ue,Se){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ce=Ue.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Se!==void 0&&(Ce=Ce[Se]),Ce){ke.bindFramebuffer(O.FRAMEBUFFER,Ce);try{const Ae=w.texture,We=Ae.format,Xe=Ae.type;if(!Be.textureFormatReadable(We)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Be.textureTypeReadable(Xe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=w.width-j&&X>=0&&X<=w.height-V&&O.readPixels(z,X,j,V,Ze.convert(We),Ze.convert(Xe),ue)}finally{const Ae=D!==null?Ue.get(D).__webglFramebuffer:null;ke.bindFramebuffer(O.FRAMEBUFFER,Ae)}}},this.readRenderTargetPixelsAsync=async function(w,z,X,j,V,ue,Se){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ce=Ue.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Se!==void 0&&(Ce=Ce[Se]),Ce){const Ae=w.texture,We=Ae.format,Xe=Ae.type;if(!Be.textureFormatReadable(We))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Be.textureTypeReadable(Xe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(z>=0&&z<=w.width-j&&X>=0&&X<=w.height-V){ke.bindFramebuffer(O.FRAMEBUFFER,Ce);const ze=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,ze),O.bufferData(O.PIXEL_PACK_BUFFER,ue.byteLength,O.STREAM_READ),O.readPixels(z,X,j,V,Ze.convert(We),Ze.convert(Xe),0);const at=D!==null?Ue.get(D).__webglFramebuffer:null;ke.bindFramebuffer(O.FRAMEBUFFER,at);const ut=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await Dm(O,ut,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,ze),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,ue),O.deleteBuffer(ze),O.deleteSync(ut),ue}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,z=null,X=0){w.isTexture!==!0&&(_r("WebGLRenderer: copyFramebufferToTexture function signature has changed."),z=arguments[0]||null,w=arguments[1]);const j=Math.pow(2,-X),V=Math.floor(w.image.width*j),ue=Math.floor(w.image.height*j),Se=z!==null?z.x:0,Ce=z!==null?z.y:0;P.setTexture2D(w,0),O.copyTexSubImage2D(O.TEXTURE_2D,X,0,0,Se,Ce,V,ue),ke.unbindTexture()};const mn=O.createFramebuffer(),Zi=O.createFramebuffer();this.copyTextureToTexture=function(w,z,X=null,j=null,V=0,ue=null){w.isTexture!==!0&&(_r("WebGLRenderer: copyTextureToTexture function signature has changed."),j=arguments[0]||null,w=arguments[1],z=arguments[2],ue=arguments[3]||0,X=null),ue===null&&(V!==0?(_r("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ue=V,V=0):ue=0);let Se,Ce,Ae,We,Xe,ze,at,ut,Mt;const gt=w.isCompressedTexture?w.mipmaps[ue]:w.image;if(X!==null)Se=X.max.x-X.min.x,Ce=X.max.y-X.min.y,Ae=X.isBox3?X.max.z-X.min.z:1,We=X.min.x,Xe=X.min.y,ze=X.isBox3?X.min.z:0;else{const jt=Math.pow(2,-V);Se=Math.floor(gt.width*jt),Ce=Math.floor(gt.height*jt),w.isDataArrayTexture?Ae=gt.depth:w.isData3DTexture?Ae=Math.floor(gt.depth*jt):Ae=1,We=0,Xe=0,ze=0}j!==null?(at=j.x,ut=j.y,Mt=j.z):(at=0,ut=0,Mt=0);const ot=Ze.convert(z.format),be=Ze.convert(z.type);let At;z.isData3DTexture?(P.setTexture3D(z,0),At=O.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(P.setTexture2DArray(z,0),At=O.TEXTURE_2D_ARRAY):(P.setTexture2D(z,0),At=O.TEXTURE_2D),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,z.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,z.unpackAlignment);const nt=O.getParameter(O.UNPACK_ROW_LENGTH),Xt=O.getParameter(O.UNPACK_IMAGE_HEIGHT),xn=O.getParameter(O.UNPACK_SKIP_PIXELS),kt=O.getParameter(O.UNPACK_SKIP_ROWS),Sn=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,gt.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,gt.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,We),O.pixelStorei(O.UNPACK_SKIP_ROWS,Xe),O.pixelStorei(O.UNPACK_SKIP_IMAGES,ze);const xt=w.isDataArrayTexture||w.isData3DTexture,nn=z.isDataArrayTexture||z.isData3DTexture;if(w.isDepthTexture){const jt=Ue.get(w),Bt=Ue.get(z),zt=Ue.get(jt.__renderTarget),Ti=Ue.get(Bt.__renderTarget);ke.bindFramebuffer(O.READ_FRAMEBUFFER,zt.__webglFramebuffer),ke.bindFramebuffer(O.DRAW_FRAMEBUFFER,Ti.__webglFramebuffer);for(let Hn=0;Hn<Ae;Hn++)xt&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ue.get(w).__webglTexture,V,ze+Hn),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ue.get(z).__webglTexture,ue,Mt+Hn)),O.blitFramebuffer(We,Xe,Se,Ce,at,ut,Se,Ce,O.DEPTH_BUFFER_BIT,O.NEAREST);ke.bindFramebuffer(O.READ_FRAMEBUFFER,null),ke.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(V!==0||w.isRenderTargetTexture||Ue.has(w)){const jt=Ue.get(w),Bt=Ue.get(z);ke.bindFramebuffer(O.READ_FRAMEBUFFER,mn),ke.bindFramebuffer(O.DRAW_FRAMEBUFFER,Zi);for(let zt=0;zt<Ae;zt++)xt?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,jt.__webglTexture,V,ze+zt):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,jt.__webglTexture,V),nn?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Bt.__webglTexture,ue,Mt+zt):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Bt.__webglTexture,ue),V!==0?O.blitFramebuffer(We,Xe,Se,Ce,at,ut,Se,Ce,O.COLOR_BUFFER_BIT,O.NEAREST):nn?O.copyTexSubImage3D(At,ue,at,ut,Mt+zt,We,Xe,Se,Ce):O.copyTexSubImage2D(At,ue,at,ut,We,Xe,Se,Ce);ke.bindFramebuffer(O.READ_FRAMEBUFFER,null),ke.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else nn?w.isDataTexture||w.isData3DTexture?O.texSubImage3D(At,ue,at,ut,Mt,Se,Ce,Ae,ot,be,gt.data):z.isCompressedArrayTexture?O.compressedTexSubImage3D(At,ue,at,ut,Mt,Se,Ce,Ae,ot,gt.data):O.texSubImage3D(At,ue,at,ut,Mt,Se,Ce,Ae,ot,be,gt):w.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,ue,at,ut,Se,Ce,ot,be,gt.data):w.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,ue,at,ut,gt.width,gt.height,ot,gt.data):O.texSubImage2D(O.TEXTURE_2D,ue,at,ut,Se,Ce,ot,be,gt);O.pixelStorei(O.UNPACK_ROW_LENGTH,nt),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Xt),O.pixelStorei(O.UNPACK_SKIP_PIXELS,xn),O.pixelStorei(O.UNPACK_SKIP_ROWS,kt),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Sn),ue===0&&z.generateMipmaps&&O.generateMipmap(At),ke.unbindTexture()},this.copyTextureToTexture3D=function(w,z,X=null,j=null,V=0){return w.isTexture!==!0&&(_r("WebGLRenderer: copyTextureToTexture3D function signature has changed."),X=arguments[0]||null,j=arguments[1]||null,w=arguments[2],z=arguments[3],V=arguments[4]||0),_r('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,z,X,j,V)},this.initRenderTarget=function(w){Ue.get(w).__webglFramebuffer===void 0&&P.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?P.setTextureCube(w,0):w.isData3DTexture?P.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?P.setTexture2DArray(w,0):P.setTexture2D(w,0),ke.unbindTexture()},this.resetState=function(){I=0,C=0,D=null,ke.reset(),dt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ni}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=ft._getDrawingBufferColorSpace(e),t.unpackColorSpace=ft._getUnpackColorSpace()}}const Fh=[.5,0];function Ky(i,e,t){var x,y;const[n,r]=i.parallax??[1,1],s=((x=i.feet)==null?void 0:x.x)??0,a=((y=i.feet)==null?void 0:y.y)??0,o=i.attach?e.x+s:s+e.x*(1-n),c=a+e.y*(1-r),h=i.attach&&i.repeatX?t:i.size[0],f=i.size[1],[d,m]=i.anchor??Fh;return{cx:o+(.5-d)*h,cy:c+(.5-m)*f,w:h,h:f}}function Jy(i,e,t,n={index:0,rows:1}){var h;const r=i.uvRect??{x:0,y:0,width:1,height:1};let s=r.width,a=r.x;if(i.attach&&i.repeatX){const f=i.size[0]/(r.width||1),[d]=i.parallax??[1,1];s=t/f,a=r.x+(e.x*d-t/2-(((h=i.feet)==null?void 0:h.x)??0))/f}const o=n.rows||1,c=r.height/o,l=r.y+r.height-(n.index+1)*c;return{repeat:[s,c],offset:[a,l]}}const Vl=(i,e=0)=>(i.sortingLayer??0)*1e6+(i.sortingOrder??0)*1e3+e;function Zy(i,{i0:e,i1:t,k0:n,k1:r,size:s=1,columns:a=4,rows:o=1,texW:c=128,texH:l=32}){const h=[],f=[],d=[],m=1/a,x=1/o,y=.5/c,_=.5/l;let g=0;for(let R=n;R<=r;R++)for(let A=e;A<=t;A++){const b=i({x:A,y:R});if(!b)continue;const L=(b-1)%a,I=Math.floor((b-1)/a),C=A*s,D=C+s,M=0-R*s,S=M-s,N=L*m+y,k=(L+1)*m-y,F=1-I*x-_,$=1-(I+1)*x+_;h.push(C,S,0,D,S,0,D,M,0,C,M,0),f.push(N,$,k,$,k,F,N,F),d.push(g,g+1,g+2,g,g+2,g+3),g+=4}return{positions:h,uvs:f,indices:d,count:g/4}}var Yi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function kh(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}function Qy(i){if(i.__esModule)return i;var e=i.default;if(typeof e=="function"){var t=function n(){return this instanceof n?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};t.prototype=e.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(i).forEach(function(n){var r=Object.getOwnPropertyDescriptor(i,n);Object.defineProperty(t,n,r.get?r:{enumerable:!0,get:function(){return i[n]}})}),t}var _c={exports:{}};_c.exports;(function(i){(function(e,t,n){function r(c){var l=this,h=o();l.next=function(){var f=2091639*l.s0+l.c*23283064365386963e-26;return l.s0=l.s1,l.s1=l.s2,l.s2=f-(l.c=f|0)},l.c=1,l.s0=h(" "),l.s1=h(" "),l.s2=h(" "),l.s0-=h(c),l.s0<0&&(l.s0+=1),l.s1-=h(c),l.s1<0&&(l.s1+=1),l.s2-=h(c),l.s2<0&&(l.s2+=1),h=null}function s(c,l){return l.c=c.c,l.s0=c.s0,l.s1=c.s1,l.s2=c.s2,l}function a(c,l){var h=new r(c),f=l&&l.state,d=h.next;return d.int32=function(){return h.next()*4294967296|0},d.double=function(){return d()+(d()*2097152|0)*11102230246251565e-32},d.quick=d,f&&(typeof f=="object"&&s(f,h),d.state=function(){return s(h,{})}),d}function o(){var c=4022871197,l=function(h){h=String(h);for(var f=0;f<h.length;f++){c+=h.charCodeAt(f);var d=.02519603282416938*c;c=d>>>0,d-=c,d*=c,c=d>>>0,d-=c,c+=d*4294967296}return(c>>>0)*23283064365386963e-26};return l}t&&t.exports?t.exports=a:this.alea=a})(Yi,i)})(_c);var ex=_c.exports,vc={exports:{}};vc.exports;(function(i){(function(e,t,n){function r(o){var c=this,l="";c.x=0,c.y=0,c.z=0,c.w=0,c.next=function(){var f=c.x^c.x<<11;return c.x=c.y,c.y=c.z,c.z=c.w,c.w^=c.w>>>19^f^f>>>8},o===(o|0)?c.x=o:l+=o;for(var h=0;h<l.length+64;h++)c.x^=l.charCodeAt(h)|0,c.next()}function s(o,c){return c.x=o.x,c.y=o.y,c.z=o.z,c.w=o.w,c}function a(o,c){var l=new r(o),h=c&&c.state,f=function(){return(l.next()>>>0)/4294967296};return f.double=function(){do var d=l.next()>>>11,m=(l.next()>>>0)/4294967296,x=(d+m)/(1<<21);while(x===0);return x},f.int32=l.next,f.quick=f,h&&(typeof h=="object"&&s(h,l),f.state=function(){return s(l,{})}),f}t&&t.exports?t.exports=a:this.xor128=a})(Yi,i)})(vc);var tx=vc.exports,yc={exports:{}};yc.exports;(function(i){(function(e,t,n){function r(o){var c=this,l="";c.next=function(){var f=c.x^c.x>>>2;return c.x=c.y,c.y=c.z,c.z=c.w,c.w=c.v,(c.d=c.d+362437|0)+(c.v=c.v^c.v<<4^(f^f<<1))|0},c.x=0,c.y=0,c.z=0,c.w=0,c.v=0,o===(o|0)?c.x=o:l+=o;for(var h=0;h<l.length+64;h++)c.x^=l.charCodeAt(h)|0,h==l.length&&(c.d=c.x<<10^c.x>>>4),c.next()}function s(o,c){return c.x=o.x,c.y=o.y,c.z=o.z,c.w=o.w,c.v=o.v,c.d=o.d,c}function a(o,c){var l=new r(o),h=c&&c.state,f=function(){return(l.next()>>>0)/4294967296};return f.double=function(){do var d=l.next()>>>11,m=(l.next()>>>0)/4294967296,x=(d+m)/(1<<21);while(x===0);return x},f.int32=l.next,f.quick=f,h&&(typeof h=="object"&&s(h,l),f.state=function(){return s(l,{})}),f}t&&t.exports?t.exports=a:this.xorwow=a})(Yi,i)})(yc);var nx=yc.exports,xc={exports:{}};xc.exports;(function(i){(function(e,t,n){function r(o){var c=this;c.next=function(){var h=c.x,f=c.i,d,m;return d=h[f],d^=d>>>7,m=d^d<<24,d=h[f+1&7],m^=d^d>>>10,d=h[f+3&7],m^=d^d>>>3,d=h[f+4&7],m^=d^d<<7,d=h[f+7&7],d=d^d<<13,m^=d^d<<9,h[f]=m,c.i=f+1&7,m};function l(h,f){var d,m=[];if(f===(f|0))m[0]=f;else for(f=""+f,d=0;d<f.length;++d)m[d&7]=m[d&7]<<15^f.charCodeAt(d)+m[d+1&7]<<13;for(;m.length<8;)m.push(0);for(d=0;d<8&&m[d]===0;++d);for(d==8?m[7]=-1:m[d],h.x=m,h.i=0,d=256;d>0;--d)h.next()}l(c,o)}function s(o,c){return c.x=o.x.slice(),c.i=o.i,c}function a(o,c){o==null&&(o=+new Date);var l=new r(o),h=c&&c.state,f=function(){return(l.next()>>>0)/4294967296};return f.double=function(){do var d=l.next()>>>11,m=(l.next()>>>0)/4294967296,x=(d+m)/(1<<21);while(x===0);return x},f.int32=l.next,f.quick=f,h&&(h.x&&s(h,l),f.state=function(){return s(l,{})}),f}t&&t.exports?t.exports=a:this.xorshift7=a})(Yi,i)})(xc);var ix=xc.exports,Sc={exports:{}};Sc.exports;(function(i){(function(e,t,n){function r(o){var c=this;c.next=function(){var h=c.w,f=c.X,d=c.i,m,x;return c.w=h=h+1640531527|0,x=f[d+34&127],m=f[d=d+1&127],x^=x<<13,m^=m<<17,x^=x>>>15,m^=m>>>12,x=f[d]=x^m,c.i=d,x+(h^h>>>16)|0};function l(h,f){var d,m,x,y,_,g=[],R=128;for(f===(f|0)?(m=f,f=null):(f=f+"\0",m=0,R=Math.max(R,f.length)),x=0,y=-32;y<R;++y)f&&(m^=f.charCodeAt((y+32)%f.length)),y===0&&(_=m),m^=m<<10,m^=m>>>15,m^=m<<4,m^=m>>>13,y>=0&&(_=_+1640531527|0,d=g[y&127]^=m+_,x=d==0?x+1:0);for(x>=128&&(g[(f&&f.length||0)&127]=-1),x=127,y=4*128;y>0;--y)m=g[x+34&127],d=g[x=x+1&127],m^=m<<13,d^=d<<17,m^=m>>>15,d^=d>>>12,g[x]=m^d;h.w=_,h.X=g,h.i=x}l(c,o)}function s(o,c){return c.i=o.i,c.w=o.w,c.X=o.X.slice(),c}function a(o,c){o==null&&(o=+new Date);var l=new r(o),h=c&&c.state,f=function(){return(l.next()>>>0)/4294967296};return f.double=function(){do var d=l.next()>>>11,m=(l.next()>>>0)/4294967296,x=(d+m)/(1<<21);while(x===0);return x},f.int32=l.next,f.quick=f,h&&(h.X&&s(h,l),f.state=function(){return s(l,{})}),f}t&&t.exports?t.exports=a:this.xor4096=a})(Yi,i)})(Sc);var rx=Sc.exports,bc={exports:{}};bc.exports;(function(i){(function(e,t,n){function r(o){var c=this,l="";c.next=function(){var f=c.b,d=c.c,m=c.d,x=c.a;return f=f<<25^f>>>7^d,d=d-m|0,m=m<<24^m>>>8^x,x=x-f|0,c.b=f=f<<20^f>>>12^d,c.c=d=d-m|0,c.d=m<<16^d>>>16^x,c.a=x-f|0},c.a=0,c.b=0,c.c=-1640531527,c.d=1367130551,o===Math.floor(o)?(c.a=o/4294967296|0,c.b=o|0):l+=o;for(var h=0;h<l.length+20;h++)c.b^=l.charCodeAt(h)|0,c.next()}function s(o,c){return c.a=o.a,c.b=o.b,c.c=o.c,c.d=o.d,c}function a(o,c){var l=new r(o),h=c&&c.state,f=function(){return(l.next()>>>0)/4294967296};return f.double=function(){do var d=l.next()>>>11,m=(l.next()>>>0)/4294967296,x=(d+m)/(1<<21);while(x===0);return x},f.int32=l.next,f.quick=f,h&&(typeof h=="object"&&s(h,l),f.state=function(){return s(l,{})}),f}t&&t.exports?t.exports=a:this.tychei=a})(Yi,i)})(bc);var sx=bc.exports,Bh={exports:{}};const ax={},ox=Object.freeze(Object.defineProperty({__proto__:null,default:ax},Symbol.toStringTag,{value:"Module"})),ba=Qy(ox);(function(i){(function(e,t,n){var r=256,s=6,a=52,o="random",c=n.pow(r,s),l=n.pow(2,a),h=l*2,f=r-1,d;function m(b,L,I){var C=[];L=L==!0?{entropy:!0}:L||{};var D=g(_(L.entropy?[b,A(t)]:b??R(),3),C),M=new x(C),S=function(){for(var N=M.g(s),k=c,F=0;N<l;)N=(N+F)*r,k*=r,F=M.g(1);for(;N>=h;)N/=2,k/=2,F>>>=1;return(N+F)/k};return S.int32=function(){return M.g(4)|0},S.quick=function(){return M.g(4)/4294967296},S.double=S,g(A(M.S),t),(L.pass||I||function(N,k,F,$){return $&&($.S&&y($,M),N.state=function(){return y(M,{})}),F?(n[o]=N,k):N})(S,D,"global"in L?L.global:this==n,L.state)}function x(b){var L,I=b.length,C=this,D=0,M=C.i=C.j=0,S=C.S=[];for(I||(b=[I++]);D<r;)S[D]=D++;for(D=0;D<r;D++)S[D]=S[M=f&M+b[D%I]+(L=S[D])],S[M]=L;(C.g=function(N){for(var k,F=0,$=C.i,ae=C.j,Z=C.S;N--;)k=Z[$=f&$+1],F=F*r+Z[f&(Z[$]=Z[ae=f&ae+k])+(Z[ae]=k)];return C.i=$,C.j=ae,F})(r)}function y(b,L){return L.i=b.i,L.j=b.j,L.S=b.S.slice(),L}function _(b,L){var I=[],C=typeof b,D;if(L&&C=="object")for(D in b)try{I.push(_(b[D],L-1))}catch{}return I.length?I:C=="string"?b:b+"\0"}function g(b,L){for(var I=b+"",C,D=0;D<I.length;)L[f&D]=f&(C^=L[f&D]*19)+I.charCodeAt(D++);return A(L)}function R(){try{var b;return d&&(b=d.randomBytes)?b=b(r):(b=new Uint8Array(r),(e.crypto||e.msCrypto).getRandomValues(b)),A(b)}catch{var L=e.navigator,I=L&&L.plugins;return[+new Date,e,I,e.screen,A(t)]}}function A(b){return String.fromCharCode.apply(0,b)}if(g(n.random(),t),i.exports){i.exports=m;try{d=ba}catch{}}else n["seed"+o]=m})(typeof self<"u"?self:Yi,[],Math)})(Bh);var lx=Bh.exports,cx=ex,ux=tx,fx=nx,hx=ix,dx=rx,px=sx,Ki=lx;Ki.alea=cx;Ki.xor128=ux;Ki.xorwow=fx;Ki.xorshift7=hx;Ki.xor4096=dx;Ki.tychei=px;var mx=Ki;const zh=kh(mx),gx=Object.assign({"/world/scripts/arrival.js":()=>De(()=>import("./arrival-CKezWjuD.js"),__vite__mapDeps([0,1,2])),"/world/scripts/bank.js":()=>De(()=>import("./bank-CCRVHnGB.js"),__vite__mapDeps([1,2])),"/world/scripts/camera.js":()=>De(()=>import("./camera-CFdr3yOD.js"),[]),"/world/scripts/db.js":()=>De(()=>import("./db-BH8DPWPJ.js"),__vite__mapDeps([3,2])),"/world/scripts/ground.js":()=>De(()=>import("./ground-b0nUTt3G.js"),[]),"/world/scripts/joust-camera.js":()=>De(()=>import("./joust-camera-Fg9LmHPp.js"),[]),"/world/scripts/jouster.js":()=>De(()=>import("./jouster-B1JpTUK7.js"),__vite__mapDeps([4,5,2,1])),"/world/scripts/lib/color.js":()=>De(()=>import("./color-DDSg_o2D.js"),[]),"/world/scripts/lib/econ.js":()=>De(()=>import("./econ-Deg9OsSu.js").then(i=>i.I),[]),"/world/scripts/look-default.js":()=>De(()=>import("./look-default-BibdNaYP.js"),[]),"/world/scripts/player.js":()=>De(()=>import("./player-CqzJShkt.js"),__vite__mapDeps([6,7,8,9])),"/world/scripts/tex-hero.js":()=>De(()=>import("./tex-hero-D9FSdSdV.js"),__vite__mapDeps([8,7,9])),"/world/scripts/tex-lance.js":()=>De(()=>import("./tex-lance-h9_Q8DQT.js"),[]),"/world/scripts/tex-meadow.js":()=>De(()=>import("./tex-meadow-CQRPL3Pn.js"),__vite__mapDeps([10,7,9])),"/world/scripts/tex-sky.js":()=>De(()=>import("./tex-sky-H7hQEGu6.js"),__vite__mapDeps([11,7,9])),"/world/scripts/tex-soil.js":()=>De(()=>import("./tex-soil-6tL0S4Gb.js"),__vite__mapDeps([12,7,9])),"/world/scripts/tex-tilt.js":()=>De(()=>import("./tex-tilt-DATa2CU9.js"),[]),"/world/scripts/tileset-ground.js":()=>De(()=>import("./tileset-ground-dAb9Cutk.js"),__vite__mapDeps([13,7])),"/world/scripts/tileset-sand.js":()=>De(()=>import("./tileset-sand-D3oqsxai.js"),[]),"/world/scripts/ui.js":()=>De(()=>import("./ui-CTWhMYA8.js"),__vite__mapDeps([14,5,2]))}),Vo=new Map;function _x(i){const[e,t=""]=String(i).split("?");return{path:e,params:Object.fromEntries(new URLSearchParams(t))}}function Hl(i,e=vx){if(Vo.has(i))return Vo.get(i);const t=(async()=>{const{path:n,params:r}=_x(i),s=gx["/world/"+n];if(!s)throw new Error(`no texture script ${n}`);const a=await s();if(typeof a.texture!="function")throw new Error(`${n} has no texture(ctx)`);const o=zh.alea(i);let c=null;const l={params:r,random:()=>o(),canvas(h,f){const d=e(Math.max(1,Math.round(h)),Math.max(1,Math.round(f)));return c||(c=d),d.getContext("2d",{willReadFrequently:!0})},atlas(){throw new Error(`${n}: ctx.atlas is not in this port yet`)},wang(){throw new Error(`${n}: ctx.wang is not in this port yet`)}};if(await a.texture(l),!c)throw new Error(`${n} drew no canvas`);return{canvas:c,meta:a.meta??{}}})();return Vo.set(i,t),t}function vx(i,e){const t=document.createElement("canvas");return t.width=i,t.height=e,t}const ku=[[.4124,.3576,.1805],[.2126,.7152,.0722],[.0193,.1192,.9505]],oa=[[.8951,.2664,-.1614],[-.7502,1.7135,.0367],[.0389,-.0685,1.0296]],Bu=[.3127,.329],yx=90,zu=.04,la=(i,e)=>i.map(t=>e[0].map((n,r)=>t.reduce((s,a,o)=>s+a*e[o][r],0))),Vu=(i,e)=>i.map(t=>t[0]*e[0]+t[1]*e[1]+t[2]*e[2]);function Hu([[i,e,t],[n,r,s],[a,o,c]]){const l=r*c-s*o,h=-(n*c-s*a),f=n*o-r*a,d=i*l+e*h+t*f;return[[l/d,-(e*c-t*o)/d,(e*s-t*r)/d],[h/d,(i*c-t*a)/d,-(i*s-t*n)/d],[f/d,-(i*o-e*a)/d,(i*r-e*n)/d]]}function Ho(i){const e=(.860117757+.000154118254*i+128641212e-15*i*i)/(1+.000842420235*i+708145163e-15*i*i),t=(.317398726+422806245e-13*i+420481691e-16*i*i)/(1-289741816e-13*i+161456053e-15*i*i);return[e,t]}const xx=([i,e])=>[4*i/(12*e-2*i+3),6*e/(12*e-2*i+3)],Sx=([i,e])=>[3*i/(2*i-8*e+4),2*e/(2*i-8*e+4)],Gu=([i,e])=>[i/e,1,(1-i-e)/e];function bx(i=0,e=0){if(!i&&!e)return[[1,0,0],[0,1,0],[0,0,1]];const t=6504,n=1e6/t,r=1e6/(n+yx*i),s=Ho(t),a=Ho(r),o=xx(Bu),c=a[0]-s[0],l=a[1]-s[1],h=Ho(t+10),f=h[0]-s[0],d=h[1]-s[1],m=Math.hypot(f,d)||1,x=-d/m,y=f/m,_=y>=0?1:-1,g=[o[0]+c+_*x*zu*e,o[1]+l+_*y*zu*e],R=Vu(oa,Gu(Bu)),A=Vu(oa,Gu(Sx(g))),b=[[A[0]/R[0],0,0],[0,A[1]/R[1],0],[0,0,A[2]/R[2]]];return la(Hu(ku),la(Hu(oa),la(b,la(oa,ku))))}function Ex(i,e={}){const t={exposure:1,saturation:1,contrast:1,brightness:0,temperature:0,tint:0,vignette:0,roundness:2,feather:.45,vignetteColor:[0,0,0],grain:0};if(!(i!=null&&i.look))return t;const n={op:"scene"};let r=i.look({scene:n,param:(a,o)=>e[a]??o});const s=[];for(;r&&r!==n;)s.unshift(r),r=r.input;for(const a of s){if(a.op==="grade")for(const o of["exposure","saturation","contrast","brightness","temperature","tint"])a.opts[o]!=null&&(t[o]=a.opts[o]);a.op==="vignette"&&(t.vignette=a.intensity,t.roundness=a.opts.roundness??2,t.feather=a.opts.feather??.45,t.vignetteColor=a.opts.color??[0,0,0]),a.op==="grain"&&(t.grain=a.intensity)}return t}const Mx=`
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
}`;class wx{constructor(e,t,{neutral:n=!0}={}){this.renderer=e,this.rt=new bi(2,2,{type:Bn,colorSpace:Wt,depthBuffer:!1});const r=bx(t.temperature,t.tint),s=new Qe().set(r[0][0],r[0][1],r[0][2],r[1][0],r[1][1],r[1][2],r[2][0],r[2][1],r[2][2]);this.material=new zn({uniforms:{tScene:{value:this.rt.texture},exposure:{value:t.exposure},contrast:{value:t.contrast},brightness:{value:t.brightness},saturation:{value:t.saturation},wb:{value:s},neutralOn:{value:n?1:0},vigI:{value:t.vignette},vigRound:{value:t.roundness},vigFeather:{value:t.feather},vigColor:{value:new Y(...t.vignetteColor)},grainI:{value:t.grain},time:{value:0},res:{value:new vt(2,2)}},vertexShader:"varying vec2 vUv; void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:Mx,depthTest:!1,depthWrite:!1}),this.quad=new an(new Ei(2,2),this.material),this.quad.frustumCulled=!1,this.scene=new Rh,this.scene.add(this.quad),this.camera=new mc(-1,1,1,-1,0,1)}setSize(e,t){this.rt.setSize(Math.max(2,e),Math.max(2,t)),this.material.uniforms.res.value.set(e,t)}render(e,t,n=0){const r=this.renderer;r.setRenderTarget(this.rt),r.clear(),r.render(e,t),r.setRenderTarget(null),this.material.uniforms.time.value=n,r.render(this.scene,this.camera)}}const Wu=.4,Tx=Object.freeze({r:.5,g:.5,b:.5,a:1}),Ea=i=>i<=.04045?i/12.92:Math.pow((i+.055)/1.055,2.4),Rr=(i,e,t)=>Math.min(t,Math.max(e,i));function Er(i,e=1){const t=String(i).trim();return t.endsWith("%")?Number.parseFloat(t)/100*e:Number.parseFloat(t)}function qu(i,e,t){const n=Math.pow(i+.3963377774*e+.2158037573*t,3),r=Math.pow(i-.1055613458*e-.0638541728*t,3),s=Math.pow(i-.0894841775*e-1.291485548*t,3);return[4.0767416621*n-3.3077115913*r+.2309699292*s,-1.2684380046*n+2.6097574011*r-.3413193965*s,-.0041960863*n-.7034186147*r+1.707614701*s]}function Xu([i,e,t]){const n=Math.cbrt(.4122214708*i+.5363325363*e+.0514459929*t),r=Math.cbrt(.2119034982*i+.6806995451*e+.1073969566*t),s=Math.cbrt(.0883024619*i+.2817188376*e+.6299787005*t);return[.2104542553*n+.793617785*r-.0040720468*s,1.9779984951*n-2.428592205*r+.4505937099*s,.0259040371*n+.7827717662*r-.808675766*s]}const Go=.02,ju=1e-4,$u=i=>i.every(e=>e>=0&&e<=1),Yu=i=>i.map(e=>Rr(e,0,1)),Ku=(i,e)=>Math.hypot(i[0]-e[0],i[1]-e[1],i[2]-e[2]);function Ax(i,e,t){const n=t*Math.PI/180,r=Math.cos(n),s=Math.sin(n),a=m=>[i,m*r,m*s];let o=a(e),c=qu(...o);if($u(c))return c;let l=Yu(c);if(Ku(Xu(l),o)<Go)return l;let h=0,f=e,d=!0;for(;f-h>ju;){const m=(h+f)/2;if(o=a(m),c=qu(...o),d&&$u(c)){h=m;continue}l=Yu(c);const x=Ku(Xu(l),o);if(x<Go){if(Go-x<ju)return l;d=!1,h=m}else f=m}return l}function Rx(i){const[e,t]=i.split("/"),n=e.trim().split(/[\s,]+/);if(n.length<3)return null;const r=Rr(Er(n[0]),0,1),s=Rr(Er(n[1],Wu),0,Wu),a=Er(n[2]);if(![r,s,a].every(Number.isFinite))return null;const[o,c,l]=r>=1?[1,1,1]:r<=0?[0,0,0]:Ax(r,s,a),h=t===void 0?1:Rr(Er(t),0,1);return{r:o,g:c,b:l,a:Number.isFinite(h)?h:1}}function Cx(i){const e=i.length===3||i.length===4?[...i].map(n=>n+n).join(""):i;if(!/^[0-9a-f]{6}([0-9a-f]{2})?$/i.test(e))return null;const t=n=>Number.parseInt(e.slice(n,n+2),16)/255;return{r:Ea(t(0)),g:Ea(t(2)),b:Ea(t(4)),a:e.length===8?t(6):1}}function Px(i){const e=i.split(/[\s,/]+/).filter(Boolean);if(e.length<3)return null;const t=r=>Ea(Rr(Er(r,255)/255,0,1)),n={r:t(e[0]),g:t(e[1]),b:t(e[2]),a:e[3]===void 0?1:Rr(Er(e[3]),0,1)};return[n.r,n.g,n.b,n.a].every(Number.isFinite)?n:null}function Ju(i){const e=String(i??"").trim().toLowerCase();let t=null;return e.startsWith("#")?t=Cx(e.slice(1)):e.startsWith("oklch(")&&e.endsWith(")")?t=Rx(e.slice(6,-1)):/^rgba?\(/.test(e)&&e.endsWith(")")&&(t=Px(e.slice(e.indexOf("(")+1,-1))),t??{...Tx}}const Lx={alpha:On,add:Ca,multiply:La,subtract:Pa},Zu=[1,.85,.72],Ix=1e3,Dx=.75,Nx=.95,Ux=2,Ox=8,Fx=2,kx=3,Za=i=>{const e=String(i),t="/realm/play/";return e.startsWith("/cdn/")?t+"cdn/"+e.slice(5).replace(/\.png$/i,".webp")+"?v="+kx:e.startsWith("/art/")?t+e.slice(1):null},Bx=i=>String(i).replace(/\/cdn\/(value\.[0-9a-f]{64}\.(?:png|webp|mp3))/g,e=>Za(e));class zx{constructor(e,{toneMapping:t="neutral",look:n=null,scale:r=null}={}){this.renderer=new Yy({canvas:e,antialias:!1,alpha:!1,powerPreference:"high-performance"}),this.base=Math.min(devicePixelRatio||1,2),this.forced=r,this.step=0,this.gov={ms:[],sum:0,slow:0,keep:0,flips:0,sinceUp:1/0},this.renderer.setPixelRatio(this.scale),this.renderer.outputColorSpace=Wt,this.renderer.toneMapping=ri,this.look=new wx(this.renderer,n??{exposure:1,saturation:1,contrast:1,brightness:0,temperature:0,tint:0,vignette:0,roundness:2,feather:.45,vignetteColor:[0,0,0],grain:0},{neutral:t==="neutral"}),this.scene=new Rh,this.camera=new mc(-1,1,1,-1,.1,1e3),this.camera.position.set(0,0,100),this.sprites=[],this.loader=new Lh,this.missing=[],this.t=0}worldToScreen(e){const t=new Y(e.x,e.y,0).project(this.camera);return{x:(t.x+1)/2*this.cssW,y:(1-t.y)/2*this.cssH,onScreen:Math.abs(t.x)<=1&&Math.abs(t.y)<=1}}get scale(){return this.forced??this.base*Zu[this.step]}resize(e,t){this.cssW=e,this.cssH=t,this.renderer.setPixelRatio(this.scale),this.renderer.setSize(e,t,!1);const n=this.renderer.getPixelRatio();this.look.setSize(Math.round(e*n),Math.round(t*n)),this.aspect=e/Math.max(1,t)}govern(e){const t=this.gov;if(this.forced!=null||!(e>0))return;if(e>250){t.ms.length=0,t.sum=0;return}if(t.ms.push(e),t.sum+=e,t.sum<Ix)return;const n=[...t.ms].sort((a,o)=>a-o)[t.ms.length>>1],r=t.sum/t.ms.length;t.ms.length=0,t.sum=0,t.sinceUp++,this.refresh=Math.max(4,Math.min(this.refresh??n,n));const s=this.refresh/r;s<Dx?(t.keep=0,++t.slow>=Ux&&this.step<Zu.length-1&&(t.slow=0,t.sinceUp<=4&&t.flips++,this.step++,this.resize(this.cssW,this.cssH))):s>Nx?(t.slow=0,++t.keep>=Ox&&this.step>0&&t.flips<Fx&&(t.keep=0,t.sinceUp=0,this.step--,this.resize(this.cssW,this.cssH))):(t.slow=0,t.keep=0)}setSky(e){if((e==null?void 0:e.kind)!=="gradient")return;const t=Ju(e.horizon),n=Ju(e.zenith),r=new zn({uniforms:{h:{value:new Y(t.r,t.g,t.b)},z:{value:new Y(n.r,n.g,n.b)}},vertexShader:"varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:"uniform vec3 h; uniform vec3 z; varying vec2 vUv; void main() { gl_FragColor = vec4(mix(h, z, vUv.y), 1.0); }",depthTest:!1,depthWrite:!1});this.sky=new an(new Ei(1,1),r),this.sky.renderOrder=-1e12,this.sky.frustumCulled=!1,this.scene.add(this.sky)}async picture(e,t){let n,r={};const s=Za(e);if(s)try{n=await this.loader.loadAsync(s)}catch{return this.missing.push(e),null}else{const o=await Hl(e);n=new Bl(o.canvas),r=o.meta}n.colorSpace=Wt;const a=(t??r.filter??(s?"linear":"pixel"))==="linear";return n.magFilter=a?pn:Jt,n.minFilter=a?ei:Jt,n.generateMipmaps=a,n.wrapS=ds,n.wrapT=Qn,{tex:n,meta:r}}async addSprite(e,t){var l,h;const n=e.sprite,r=await this.picture(n.texture,n.filter);if(!r)return null;(((l=n.uvRect)==null?void 0:l.height)??1)>1&&(r.tex.wrapT=ds);const s=new gs({map:r.tex,transparent:!0,depthTest:!1,depthWrite:!1,opacity:n.opacity??1,blending:Lx[n.blend]??On});n.tint!=null&&(s.color=Array.isArray(n.tint)?new ht(n.tint[0],n.tint[1],n.tint[2]):new ht(n.tint));const a=new an(new Ei(1,1),s);a.renderOrder=Vl(n,t),a.frustumCulled=!1,this.scene.add(a);const o=e.feetPosition??{},c={id:e.id,mesh:a,meta:r.meta,s:{feet:o,attach:o.attach==="camera",size:n.size??[1,1],anchor:n.anchor,parallax:n.parallax,repeatX:!!n.repeatX,uvRect:n.uvRect},clip:((h=Object.values(e.mixer??{})[0])==null?void 0:h.clip)??r.meta.defaultAnimation??null};return this.sprites.push(c),c}async setTiles(e,t){const n=await Hl(e.tileset),r=new Bl(n.canvas);r.colorSpace=Wt;const s=(n.meta.filter??"pixel")==="linear";r.magFilter=r.minFilter=s?pn:Jt,r.generateMipmaps=!1;const a=e.tilesetColumns??4,o=n.canvas.width/a,c=Zy(t.tileAt,{i0:-260,i1:260,k0:0,k1:40,size:e.tileSize??1,columns:a,rows:Math.max(1,Math.round(n.canvas.height/o)),texW:n.canvas.width,texH:n.canvas.height}),l=new Mi;l.setAttribute("position",new ai(c.positions,3)),l.setAttribute("uv",new ai(c.uvs,2)),l.setIndex(c.indices);const h=new an(l,new gs({map:r,transparent:!0,depthTest:!1,depthWrite:!1}));h.renderOrder=Vl({sortingLayer:0},0),h.frustumCulled=!1,this.scene.add(h),this.tiles=h}frame(e,t){var o;this.t+=t;const n=e.orthoSize,r=n*this.aspect,s=r*2*1.1,a=this.camera;a.left=-r,a.right=r,a.top=n,a.bottom=-n,a.position.set(e.x,e.y,100),a.updateProjectionMatrix(),this.sky&&(this.sky.position.set(e.x,e.y,-50),this.sky.scale.set(r*2.02,n*2.02,1));for(const c of this.sprites){const l=Ky(c.s,e,s);c.mesh.position.set(l.cx,l.cy,0),c.mesh.scale.set(l.w,l.h,1);const h=c.meta.rows??1,f=c.meta.fps??0,d=c.clip&&((o=c.meta.animations)==null?void 0:o[c.clip])||null,m=d&&f?d[Math.floor(this.t*f)%d.length]:0,x=Jy(c.s,e,s,{index:m,rows:h}),y=c.mesh.material.map;y.repeat.set(x.repeat[0],x.repeat[1]),y.offset.set(x.offset[0],x.offset[1])}this.look.render(this.scene,a,this.t)}}const Vx=16/9,Hx=1.2,Wo=1.9,Gx=.5,Qu=3,Wx=.22,qx=Object.assign({"/world/scripts/arrival.js":()=>De(()=>import("./arrival-CKezWjuD.js"),__vite__mapDeps([0,1,2])),"/world/scripts/bank.js":()=>De(()=>import("./bank-CCRVHnGB.js"),__vite__mapDeps([1,2])),"/world/scripts/camera.js":()=>De(()=>import("./camera-CFdr3yOD.js"),[]),"/world/scripts/db.js":()=>De(()=>import("./db-BH8DPWPJ.js"),__vite__mapDeps([3,2])),"/world/scripts/ground.js":()=>De(()=>import("./ground-b0nUTt3G.js"),[]),"/world/scripts/joust-camera.js":()=>De(()=>import("./joust-camera-Fg9LmHPp.js"),[]),"/world/scripts/jouster.js":()=>De(()=>import("./jouster-B1JpTUK7.js"),__vite__mapDeps([4,5,2,1])),"/world/scripts/lib/color.js":()=>De(()=>import("./color-DDSg_o2D.js"),[]),"/world/scripts/lib/econ.js":()=>De(()=>import("./econ-Deg9OsSu.js").then(i=>i.I),[]),"/world/scripts/look-default.js":()=>De(()=>import("./look-default-BibdNaYP.js"),[]),"/world/scripts/player.js":()=>De(()=>import("./player-CqzJShkt.js"),__vite__mapDeps([6,7,8,9])),"/world/scripts/tex-hero.js":()=>De(()=>import("./tex-hero-D9FSdSdV.js"),__vite__mapDeps([8,7,9])),"/world/scripts/tex-lance.js":()=>De(()=>import("./tex-lance-h9_Q8DQT.js"),[]),"/world/scripts/tex-meadow.js":()=>De(()=>import("./tex-meadow-CQRPL3Pn.js"),__vite__mapDeps([10,7,9])),"/world/scripts/tex-sky.js":()=>De(()=>import("./tex-sky-H7hQEGu6.js"),__vite__mapDeps([11,7,9])),"/world/scripts/tex-soil.js":()=>De(()=>import("./tex-soil-6tL0S4Gb.js"),__vite__mapDeps([12,7,9])),"/world/scripts/tex-tilt.js":()=>De(()=>import("./tex-tilt-DATa2CU9.js"),[]),"/world/scripts/tileset-ground.js":()=>De(()=>import("./tileset-ground-dAb9Cutk.js"),__vite__mapDeps([13,7])),"/world/scripts/tileset-sand.js":()=>De(()=>import("./tileset-sand-D3oqsxai.js"),[]),"/world/scripts/ui.js":()=>De(()=>import("./ui-CTWhMYA8.js"),__vite__mapDeps([14,5,2]))});async function Xx(i,e,{screenAspect:t=!1}={}){const n=await sc(i.camera),r=[].concat(n.behavior??[]),s=await Promise.all(r.map(async c=>{const l=qx["/world/"+String(c).split("#")[0]];if(!l)throw new Error(`no camera behavior ${c}`);return l()})),a={state:structuredClone(n.state??{}),target:e,feetPosition:{x:0,y:0,z:15},rotation:null},o={x:null,y:null,on:!1};return{self:a,update(c,l,h){var I,C,D;const f=.008333333333333333;let d=Math.min(c,.25);const m=t?{aspect:h}:{};for(;d>1e-6;){const M=Math.min(f,d);d-=M;const S={self:a,now:()=>l,world:{camera:m},query:()=>[],getObject:()=>null};for(const N of s)(I=N.update)==null||I.call(N,S,M)}const x=a.state.orthoSize??((C=n.state)==null?void 0:C.orthoSize)??6;let y=a.feetPosition.x,_=a.feetPosition.y;const g=e.state??{},R=g.phase&&g.phase!=="armory"&&g.phase!=="end",A=x*h,b=e.feetPosition.x,L=b<y-A+Wo||b>y+A-Wo;if(!t&&R&&h>0&&h<Vx&&(h<Hx||L)){const M=(D=g.hud)==null?void 0:D.oppX,S=g.dir||1;let N=b+S*(A-Wo);if(M!=null){const $=2*(A-Gx),ae=Math.min(1,Math.max(0,($+Qu-Math.abs(M-b))/Qu));N+=((b+M)/2-N)*ae}const k=h<1?x*(1-2*Wx):_,F=1-Math.exp(-6*Math.min(c,.25));o.on||(o.x=y,o.y=_,o.on=!0),o.x+=(N-o.x)*F,o.y+=(k-o.y)*F,y=o.x,_=o.y}else if(o.on){const M=1-Math.exp(-6*Math.min(c,.25));o.x+=(y-o.x)*M,o.y+=(_-o.y)*M,Math.abs(o.x-y)<.02&&Math.abs(o.y-_)<.02?o.on=!1:(y=o.x,_=o.y)}return{x:y,y:_,orthoSize:x}}}}const jx=1/30,$x=.25,Na=i=>i&&typeof i=="object"&&!Array.isArray(i),_s=i=>({x:Number((i==null?void 0:i.x)??0),y:Number((i==null?void 0:i.y)??0),z:Number((i==null?void 0:i.z)??0)}),ef={linear:i=>i,easeInQuad:i=>i*i,easeOutQuad:i=>i*(2-i),easeInOutQuad:i=>i<.5?2*i*i:-1+(4-2*i)*i,easeOutCubic:i=>1-Math.pow(1-i,3),easeInCubic:i=>i*i*i,easeInOutCubic:i=>i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2};class Yx{constructor(e,t,n){var r;this.id=e,this.room=n,this.parent=t.parent??null,this.tags=[...t.tags??[]],this.state=structuredClone(t.state??{}),this.feetPosition=_s(t.feetPosition),this.attach=((r=t.feetPosition)==null?void 0:r.attach)??null,this.velocity=_s(t.velocity),this.rotation={yaw:0,pitch:0,roll:0,...Na(t.rotation)?t.rotation:{}},this.sprite=t.sprite?{...t.sprite}:null,this.physics=t.physics??null,this.visible=t.visible!==!1,this.fx=t.fx??null,this.anim={},this.audio=t.audio??null,this.scope=t.scope??null,this.audience=t.audience??null,this.lifetime=t.lifetime??null,this.bornAt=n.nowMs,this.grounded=!1,this.userId=t.userId??null,this.displayName=t.displayName??null,this.isLocal=t.isLocal??!0,this.behaviors=[].concat(t.behavior??[]),this.mods=[],this.fields={}}get body(){return Na(this.physics)?this.physics.body:this.physics}}function Hi(i){if(!i)return null;if(i._handle)return i._handle;const e=i.room,t={get id(){return i.id},get objectId(){return i.id},get tags(){return i.tags},get parent(){return i.parent},get state(){return i.state},set state(n){i.state=Na(n)?n:{}},get feetPosition(){return i.feetPosition},set feetPosition(n){i.feetPosition=_s(n)},get velocity(){return i.velocity},set velocity(n){i.velocity=_s(n)},get rotation(){return i.rotation},set rotation(n){i.rotation={yaw:0,pitch:0,roll:0,...Na(n)?n:{}}},get sprite(){return i.sprite},set sprite(n){i.sprite=n?{...n}:null},get visible(){return i.visible},set visible(n){i.visible=!!n},get fx(){return i.fx},set fx(n){i.fx=n},get anim(){return i.anim},get audio(){return i.audio},set audio(n){i.audio=n},get grounded(){return i.grounded},get userId(){return i.userId},get displayName(){return i.displayName},get isLocal(){return i.isLocal},get children(){return[...e.entities.values()].filter(n=>n.parent===i.id).map(Hi)},get lifetime(){return i.lifetime},set lifetime(n){i.lifetime=n,i.bornAt=e.nowMs}};return i._handle=new Proxy(t,{get:(n,r)=>r in n?n[r]:i.fields[r],set:(n,r,s)=>(r in n?n[r]=s:i.fields[r]=s,!0),has:(n,r)=>r in n||r in i.fields,deleteProperty:(n,r)=>(delete i.fields[r],!0)}),i._handle}class Kx{constructor(e={}){this.roomId=e.roomId??"web",this.scripts=e.scripts??{},this.gravity=_s(e.gravity??{y:-9.81}),this.groundY=e.groundY??0,this.sqlFor=e.sql??null,this.startMs=e.startMs??Date.now(),this.elapsed=0,this.clock=0,this.entities=new Map,this.timers=new Map,this.tweens=[],this.listeners=new Map,this.sinks={},this.session={},this.worldState={},this.placeState={},this.rng=zh.alea(e.seed??String(this.startMs)),this.timerSeq=0,this.timeScale=1,this.freezeUntil=0,this.slowUntil=0,this.inputs=new Map,this.inputSeq=0,this.errors=[],this.cameraState={}}get nowMs(){return this.startMs+this.clock}async loadModule(e){const t=String(e).split("#")[0],n=this.scripts["/world/"+t];if(!n)throw new Error(`no behavior ${t}`);return n()}ctxOf(e,t){const n=this,r=Hi(e);return{self:r,state:r?r.state:n.worldState,player:e&&e.tags.includes("player")?r:null,session:n.session,world:{state:n.worldState,camera:n.cameraState,mode:"dev",id:n.roomId},place:{state:n.placeState,gravity:n.gravity,players:n.players().map(Hi)},now:()=>n.nowMs,random:()=>n.rng(),getRoomId:()=>n.roomId,sql:n.sqlFor?n.sqlFor((e==null?void 0:e.userId)??null):null,after:(s,a,o)=>n.after(e,t,s,a,o),cancel:s=>n.timers.delete(s),emit:(s,a,o)=>n.emit(s,a,o,e),on:(s,a)=>n.on(s,a),spawn:(s,a)=>n.spawn(s,a,e),destroy:s=>n.destroy(s),getObject:s=>Hi(n.entities.get(s)),query:(s={})=>n.query(s,e),worldToScreen:s=>n.worldToScreen?n.worldToScreen(s):null,log:(...s)=>console.log("[world]",...s),_room:n}}async attachBehaviors(e){e.mods=await Promise.all(e.behaviors.map(t=>this.loadModule(t)));for(const t of e.mods)this.call(e,t,"onSpawn")}call(e,t,n,...r){if(typeof(t==null?void 0:t[n])=="function")try{const s=t[n](this.ctxOf(e,t),...r);return s&&typeof s.then=="function"&&s.catch(a=>this.fault(e,n,a)),s}catch(s){this.fault(e,n,s)}}fault(e,t,n){this.errors.push({at:this.nowMs,id:e==null?void 0:e.id,hook:t,message:String((n==null?void 0:n.message)??n)}),console.error(`[world] ${(e==null?void 0:e.id)??"room"} ${t}:`,n)}spawn(e,t,n){const r=typeof e=="string"?t??{}:e??{};let s=typeof e=="string"?e:r.id??`obj-${++this.timerSeq}`;const a=r.parent?`${r.parent}/${s}`:s;this.entities.has(a)&&this.destroy(a);const o=new Yx(a,r,this);return this.entities.set(a,o),o.behaviors.length&&this.attachBehaviors(o).catch(c=>this.fault(o,"load",c)),a}destroy(e){for(const t of[].concat(e??[])){const n=this.entities.get(t);if(n){for(const r of[...this.entities.values()])r.parent===t&&this.destroy(r.id);for(const r of n.mods)this.call(n,r,"onDestroy");this.entities.delete(t);for(const[r,s]of this.timers)s.owner===t&&this.timers.delete(r)}}}query(e,t){let n=[...this.entities.values()];if(e.ignoreSelf!==!1&&t&&(n=n.filter(r=>r!==t)),e.tags&&(n=n.filter(r=>e.tags.every(s=>r.tags.includes(s)))),e.radius!=null&&t){const r=this.worldPosition(t);n=n.filter(s=>{const a=this.worldPosition(s);return Math.hypot(a.x-r.x,a.y-r.y,a.z-r.z)<=e.radius})}return e.select==="ids"?n.map(r=>r.id):n.map(Hi)}players(){return[...this.entities.values()].filter(e=>e.tags.includes("player"))}after(e,t,n,r,s){const a=`t${++this.timerSeq}`;return this.timers.set(a,{owner:(e==null?void 0:e.id)??null,mod:t,name:r,payload:s,due:this.clock+Math.max(0,n)*1e3}),a}on(e,t){return this.listeners.has(e)||this.listeners.set(e,new Set),this.listeners.get(e).add(t),()=>{var n;return(n=this.listeners.get(e))==null?void 0:n.delete(t)}}emit(e,t,n,r){var s,a;e==="hitstop"&&(this.freezeUntil=Math.max(this.freezeUntil,this.clock+((t==null?void 0:t.duration)??0)*1e3)),e==="slowMo"&&(this.slowUntil=this.clock+((t==null?void 0:t.duration)??0)*1e3,this.slowScale=(t==null?void 0:t.scale)??.4),(a=(s=this.sinks)[e])==null||a.call(s,t,n,r);for(const o of this.listeners.get(e)??[])try{o(t,n)}catch(c){this.fault(r,"on:"+e,c)}}animate(e,t,n={}){const r=this.entities.get(typeof e=="string"?e:e==null?void 0:e.id);if(!r)return;const s=Object.entries(t).map(([a,o])=>{const c=a.split("."),l=()=>c.reduce((f,d)=>f==null?void 0:f[d],r);let h=Array.isArray(o)?o.slice():[l(),o];return h=h.map((f,d)=>typeof f=="string"&&/^[+-]=/.test(f)?Number(d?h[d-1]:l())+Number(f.replace("=","")):Number(f)),{keys:c,pts:h}});this.tweens.push({e:r,tracks:s,t0:this.elapsed+(n.delay??0)*1e3,dur:Math.max(1,(n.duration??1)*1e3),ease:ef[n.easing]??ef.linear})}stepTweens(){this.tweens=this.tweens.filter(e=>{if(!this.entities.has(e.e.id))return!1;if(this.elapsed<e.t0)return!0;const t=Math.min(1,(this.elapsed-e.t0)/e.dur),n=e.ease(t);for(const r of e.tracks){const s=r.pts.length-1,a=n*s,o=Math.min(s-1,Math.floor(a)),c=a-o,l=s===0?r.pts[0]:r.pts[o]+(r.pts[o+1]-r.pts[o])*c,h=r.keys.slice(0,-1).reduce((f,d)=>f[d]??(f[d]={}),e.e);h[r.keys[r.keys.length-1]]=l}return t<1})}worldPosition(e){const t={...e.feetPosition};let n=e.parent?this.entities.get(e.parent):null;for(;n;)t.x+=n.feetPosition.x,t.y+=n.feetPosition.y,t.z+=n.feetPosition.z,n=n.parent?this.entities.get(n.parent):null;return t}advance(e){let t=Math.max(0,e)*1e3,n=Math.min(Math.max(0,e),$x);for(;n>1e-6;){const r=Math.min(n,jx);n-=r,t-=r*1e3,this.clock+=r*1e3;const s=this.clock<this.freezeUntil,a=s?0:this.clock<this.slowUntil?this.slowScale:1;this.tick(r*a)}t>0&&(this.clock+=t)}tick(e){this.elapsed+=e*1e3;const t=[...this.entities.values()];for(const n of t){const r=this.inputs.get(n.id);if(r){const s=r();Object.keys(s.pressed).length&&this.inputSeq++;for(const a of n.mods)this.call(n,a,"onInput",s)}}for(const n of t)if(this.entities.has(n.id))for(const r of n.mods)this.call(n,r,"update",e);for(const n of[...this.entities.values()])(n.body==="character"||n.body==="dynamic")&&(n.feetPosition={x:n.feetPosition.x+n.velocity.x*e,y:n.feetPosition.y+n.velocity.y*e,z:n.feetPosition.z},n.grounded=!1,n.feetPosition.y<=this.groundY&&(n.feetPosition.y=this.groundY,n.velocity.y<0&&(n.velocity={...n.velocity,y:0}),n.grounded=!0)),n.lifetime!=null&&this.nowMs-n.bornAt>=n.lifetime*1e3&&this.destroy(n.id);this.stepTweens();for(const[n,r]of[...this.timers]){if(r.due>this.clock)continue;this.timers.delete(n);const s=r.owner?this.entities.get(r.owner):null;r.owner&&!s||this.call(s,r.mod,r.name,r.payload)}}}const Jx=.1,Vh=-.6,Hh=et.map_fragment.replace("texture2D( map, vMapUv )",`texture2D( map, vMapUv, ${Vh.toFixed(2)} )`);Hh.includes(Vh.toFixed(2))||console.warn("[justa] three's map chunk changed: the mip bias is off");const Zx={alpha:On,add:Ca,multiply:La,subtract:Pa};class Qx{constructor(e,t,{hideBelow:n=null}={}){this.stage=e,this.room=t,this.hideBelow=n,this.views=new Map,this.sources=new Map,this.order=new Map,this.seq=0,this.loader=new Lh}source(e,t){const n=e+"|"+(t??"");return this.sources.has(n)||this.sources.set(n,(async()=>{const r=Za(e);let s,a={};if(r)s=await this.loader.loadAsync(r);else{const c=await Hl(e);s=new Bl(c.canvas),a=c.meta}s.colorSpace=Wt;const o=(t??a.filter??(r?"linear":"pixel"))==="linear";return s.magFilter=o?pn:Jt,s.minFilter=o?ei:Jt,s.generateMipmaps=o,{tex:s,meta:a}})().catch(r=>(console.warn("[justa] picture",e,(r==null?void 0:r.message)??r),null))),this.sources.get(n)}view(e){let t=this.views.get(e.id);if(!t){const n=new ln,r=new gs({transparent:!0,depthTest:!1,depthWrite:!1,visible:!1});r.onBeforeCompile=a=>{a.fragmentShader=a.fragmentShader.replace("#include <map_fragment>",Hh)},r.customProgramCacheKey=()=>"sprite-bias";const s=new an(new Ei(1,1),r);s.frustumCulled=!1,n.add(s),this.stage.scene.add(n),t={pivot:n,mesh:s,ref:null,pending:null,seq:++this.seq},this.views.set(e.id,t)}return t}setTexture(e,t){const n=t.texture,r=n+"|"+(t.filter??"");e.ref!==r&&(e.ref=r,e.pending=r,this.source(n,t.filter).then(s=>{var o;if(e.pending!==r||!s)return;const a=s.tex.clone();a.wrapS=a.wrapT=Qn,a.needsUpdate=!0,(o=e.mesh.material.map)==null||o.dispose(),e.mesh.material.map=a,e.mesh.material.needsUpdate=!0,e.meta=s.meta,this.stage.renderer.initTexture(a)}))}sync(){var t,n,r,s,a,o;const e=new Set;for(const c of this.room.entities.values()){const l=c.sprite;if(!l||!l.texture||Math.max(((t=l.size)==null?void 0:t[0])??1,((n=l.size)==null?void 0:n[1])??1)<Jx)continue;e.add(c.id);const h=this.view(c);this.setTexture(h,l);const f=h.mesh.material.map,d=((r=l.size)==null?void 0:r[0])??1,m=((s=l.size)==null?void 0:s[1])??1,[x,y]=l.anchor??Fh,_=this.room.worldPosition(c);h.pivot.position.set(_.x,_.y,0),h.pivot.rotation.z=(((a=c.rotation)==null?void 0:a.roll)??0)*Math.PI/180,h.mesh.position.set((.5-x)*d,(.5-y)*m,0),h.mesh.scale.set(d,m,1);const g=l.uvRect??{x:0,y:0,width:1,height:1};if(f){const A=!!l.flipX,b=!!l.flipY;f.repeat.set(A?-g.width:g.width,b?-g.height:g.height),f.offset.set(A?g.x+g.width:g.x,b?g.y+g.height:g.y)}const R=h.mesh.material;R.visible=!!f&&c.visible!==!1&&(l.opacity??1)>0&&!(this.hideBelow!=null&&(l.sortingLayer??0)<this.hideBelow),R.opacity=l.opacity??1,R.blending=Zx[l.blend]??On,l.tint!=null?R.color.set(Array.isArray(l.tint)?new ht(l.tint[0],l.tint[1],l.tint[2]):new ht(l.tint)):R.color.set(16777215),h.mesh.renderOrder=Vl(l,h.seq%1e3)+(_.z??0)*10}for(const[c,l]of this.views)e.has(c)||(this.stage.scene.remove(l.pivot),(o=l.mesh.material.map)==null||o.dispose(),l.mesh.material.dispose(),l.mesh.geometry.dispose(),this.views.delete(c))}}const tf={space:["Space"],enter:["Enter","NumpadEnter"],shift:["ShiftLeft","ShiftRight"],escape:["Escape"],tab:["Tab"]};function qo(i){const e=String(i);return tf[e.toLowerCase()]?tf[e.toLowerCase()]:/^[a-z]$/i.test(e)?["Key"+e.toUpperCase()]:/^[0-9]$/.test(e)?["Digit"+e]:[e]}class eS{constructor(e={}){this.actions=e.actions??{},this.axesDef=e.axes??{},this.held=new Set,this.pressed=new Set,this.released=new Set,this.data={},this.at={},this.keys=new Set,this.byCode=new Map;for(const[t,n]of Object.entries(this.actions))for(const r of[].concat((n==null?void 0:n.keys)??[]))for(const s of qo(r))this.byCode.set(s,t)}action(e,t,{down:n=null,at:r=null}={}){if(n===!1){this.held.delete(e),this.released.add(e);return}this.pressed.has(e)||(this.at[e]=r??performance.now()),this.pressed.add(e),t!==void 0&&(this.data[e]=t),n===!0&&this.held.add(e)}axes(){const e={};for(const[t,n]of Object.entries(this.axesDef)){const r=String((n==null?void 0:n.keys)??"").split("/");let s=0;for(let a=0;a+1<r.length;a+=2)qo(r[a]).some(o=>this.keys.has(o))&&(s-=1),qo(r[a+1]).some(o=>this.keys.has(o))&&(s+=1);e[t]=Math.max(-1,Math.min(1,s))}return e}frame(){const e={pressed:Object.fromEntries([...this.pressed].map(t=>[t,!0])),released:Object.fromEntries([...this.released].map(t=>[t,!0])),held:Object.fromEntries([...this.held].map(t=>[t,!0])),actionData:this.data,axes:this.axes(),pressedAt:this.at};return this.pressed.clear(),this.released.clear(),this.data={},this.at={},e}bind(e){const t=r=>{var s;return/^(INPUT|TEXTAREA|SELECT)$/.test(((s=r.target)==null?void 0:s.tagName)??"")};addEventListener("keydown",r=>{if(t(r))return;this.keys.add(r.code);const s=this.byCode.get(r.code)??this.byCode.get(r.key);s&&!r.repeat&&(this.action(s,void 0,{down:!0,at:r.timeStamp}),r.preventDefault())}),addEventListener("keyup",r=>{this.keys.delete(r.code);const s=this.byCode.get(r.code)??this.byCode.get(r.key);s&&this.action(s,void 0,{down:!1})});const n=Object.entries(this.actions).filter(([,r])=>(r==null?void 0:r.mouse)==="left").map(([r])=>r);e.addEventListener("pointerdown",r=>{if(r.button===0)for(const s of n)this.action(s,void 0,{down:!0,at:r.timeStamp})}),e.addEventListener("pointerup",()=>{for(const r of n)this.action(r,void 0,{down:!1})}),addEventListener("blur",()=>{this.keys.clear(),this.held.clear()})}}var nf=11;function tS(i,e){var t=e.attributes,n,r,s,a,o;if(!(e.nodeType===nf||i.nodeType===nf)){for(var c=t.length-1;c>=0;c--)n=t[c],r=n.name,s=n.namespaceURI,a=n.value,s?(r=n.localName||r,o=i.getAttributeNS(s,r),o!==a&&(n.prefix==="xmlns"&&(r=n.name),i.setAttributeNS(s,r,a))):(o=i.getAttribute(r),o!==a&&i.setAttribute(r,a));for(var l=i.attributes,h=l.length-1;h>=0;h--)n=l[h],r=n.name,s=n.namespaceURI,s?(r=n.localName||r,e.hasAttributeNS(s,r)||i.removeAttributeNS(s,r)):e.hasAttribute(r)||i.removeAttribute(r)}}var ca,nS="http://www.w3.org/1999/xhtml",tn=typeof document>"u"?void 0:document,iS=!!tn&&"content"in tn.createElement("template"),rS=!!tn&&tn.createRange&&"createContextualFragment"in tn.createRange();function sS(i){var e=tn.createElement("template");return e.innerHTML=i,e.content.childNodes[0]}function aS(i){ca||(ca=tn.createRange(),ca.selectNode(tn.body));var e=ca.createContextualFragment(i);return e.childNodes[0]}function oS(i){var e=tn.createElement("body");return e.innerHTML=i,e.childNodes[0]}function lS(i){return i=i.trim(),iS?sS(i):rS?aS(i):oS(i)}function ua(i,e){var t=i.nodeName,n=e.nodeName,r,s;return t===n?!0:(r=t.charCodeAt(0),s=n.charCodeAt(0),r<=90&&s>=97?t===n.toUpperCase():s<=90&&r>=97?n===t.toUpperCase():!1)}function cS(i,e){return!e||e===nS?tn.createElement(i):tn.createElementNS(e,i)}function uS(i,e){for(var t=i.firstChild;t;){var n=t.nextSibling;e.appendChild(t),t=n}return e}function Xo(i,e,t){i[t]!==e[t]&&(i[t]=e[t],i[t]?i.setAttribute(t,""):i.removeAttribute(t))}var rf={OPTION:function(i,e){var t=i.parentNode;if(t){var n=t.nodeName.toUpperCase();n==="OPTGROUP"&&(t=t.parentNode,n=t&&t.nodeName.toUpperCase()),n==="SELECT"&&!t.hasAttribute("multiple")&&(i.hasAttribute("selected")&&!e.selected&&(i.setAttribute("selected","selected"),i.removeAttribute("selected")),t.selectedIndex=-1)}Xo(i,e,"selected")},INPUT:function(i,e){Xo(i,e,"checked"),Xo(i,e,"disabled"),i.value!==e.value&&(i.value=e.value),e.hasAttribute("value")||i.removeAttribute("value")},TEXTAREA:function(i,e){var t=e.value;i.value!==t&&(i.value=t);var n=i.firstChild;if(n){var r=n.nodeValue;if(r==t||!t&&r==i.placeholder)return;n.nodeValue=t}},SELECT:function(i,e){if(!e.hasAttribute("multiple")){for(var t=-1,n=0,r=i.firstChild,s,a;r;)if(a=r.nodeName&&r.nodeName.toUpperCase(),a==="OPTGROUP")s=r,r=s.firstChild,r||(r=s.nextSibling,s=null);else{if(a==="OPTION"){if(r.hasAttribute("selected")){t=n;break}n++}r=r.nextSibling,!r&&s&&(r=s.nextSibling,s=null)}i.selectedIndex=t}}},ss=1,sf=11,af=3,of=8;function mi(){}function fS(i){if(i)return i.getAttribute&&i.getAttribute("id")||i.id}function hS(i){return function(t,n,r){if(r||(r={}),typeof n=="string")if(t.nodeName==="#document"||t.nodeName==="HTML"){var s=n;n=tn.createElement("html"),n.innerHTML=s}else if(t.nodeName==="BODY"){var a=n;n=tn.createElement("html"),n.innerHTML=a;var o=n.querySelector("body");o&&(n=o)}else n=lS(n);else n.nodeType===sf&&(n=n.firstElementChild);var c=r.getNodeKey||fS,l=r.onBeforeNodeAdded||mi,h=r.onNodeAdded||mi,f=r.onBeforeElUpdated||mi,d=r.onElUpdated||mi,m=r.onBeforeNodeDiscarded||mi,x=r.onNodeDiscarded||mi,y=r.onBeforeElChildrenUpdated||mi,_=r.skipFromChildren||mi,g=r.addChild||function(te,se){return te.appendChild(se)},R=r.childrenOnly===!0,A=Object.create(null),b=[];function L(te){b.push(te)}function I(te,se){if(te.nodeType===ss)for(var pe=te.firstChild;pe;){var _e=void 0;se&&(_e=c(pe))?L(_e):(x(pe),pe.firstChild&&I(pe,se)),pe=pe.nextSibling}}function C(te,se,pe){m(te)!==!1&&(se&&se.removeChild(te),x(te),I(te,pe))}function D(te){if(te.nodeType===ss||te.nodeType===sf)for(var se=te.firstChild;se;){var pe=c(se);pe&&(A[pe]=se),D(se),se=se.nextSibling}}D(t);function M(te){h(te);for(var se=te.firstChild;se;){var pe=se.nextSibling,_e=c(se);if(_e){var Re=A[_e];Re&&ua(se,Re)?(se.parentNode.replaceChild(Re,se),N(Re,se)):M(se)}else M(se);se=pe}}function S(te,se,pe){for(;se;){var _e=se.nextSibling;(pe=c(se))?L(pe):C(se,te,!0),se=_e}}function N(te,se,pe){var _e=c(se);if(_e&&delete A[_e],!pe){var Re=f(te,se);if(Re===!1||(Re instanceof HTMLElement&&(te=Re,D(te)),i(te,se),d(te),y(te,se)===!1))return}te.nodeName!=="TEXTAREA"?k(te,se):rf.TEXTAREA(te,se)}function k(te,se){var pe=_(te,se),_e=se.firstChild,Re=te.firstChild,ee,G,me,he,ve;e:for(;_e;){for(he=_e.nextSibling,ee=c(_e);!pe&&Re;){if(me=Re.nextSibling,_e.isSameNode&&_e.isSameNode(Re)){_e=he,Re=me;continue e}G=c(Re);var Ne=Re.nodeType,Ve=void 0;if(Ne===_e.nodeType&&(Ne===ss?(ee?ee!==G&&((ve=A[ee])?me===ve?Ve=!1:(te.insertBefore(ve,Re),G?L(G):C(Re,te,!0),Re=ve,G=c(Re)):Ve=!1):G&&(Ve=!1),Ve=Ve!==!1&&ua(Re,_e),Ve&&N(Re,_e)):(Ne===af||Ne==of)&&(Ve=!0,Re.nodeValue!==_e.nodeValue&&(Re.nodeValue=_e.nodeValue))),Ve){_e=he,Re=me;continue e}G?L(G):C(Re,te,!0),Re=me}if(ee&&(ve=A[ee])&&ua(ve,_e))pe||g(te,ve),N(ve,_e);else{var ye=l(_e);ye!==!1&&(ye&&(_e=ye),_e.actualize&&(_e=_e.actualize(te.ownerDocument||tn)),g(te,_e),M(_e))}_e=he,Re=me}S(te,Re,G);var we=rf[te.nodeName];we&&we(te,se)}var F=t,$=F.nodeType,ae=n.nodeType;if(!R){if($===ss)ae===ss?ua(t,n)||(x(t),F=uS(t,cS(n.nodeName,n.namespaceURI))):F=n;else if($===af||$===of){if(ae===$)return F.nodeValue!==n.nodeValue&&(F.nodeValue=n.nodeValue),F;F=n}}if(F===n)x(t);else{if(n.isSameNode&&n.isSameNode(F))return;if(N(F,n,R),b)for(var Z=0,fe=b.length;Z<fe;Z++){var J=A[b[Z]];J&&C(J,J.parentNode,!1)}}return!R&&F!==t&&t.parentNode&&(F.actualize&&(F=F.actualize(t.ownerDocument||tn)),t.parentNode.replaceChild(F,t)),F}}var dS=hS(tS);const pS=30,mS=`<style id="hud-util">
:root{--spawn-chrome-reservation-right-inset:0px;--spawn-chrome-reservation-right-top:0px;--spawn-chrome-reservation-right-height:0px}
#tome-ui-container .fixed{position:fixed}#tome-ui-container .absolute{position:absolute}#tome-ui-container .inset-0{inset:0}
#tome-ui-container .pointer-events-none{pointer-events:none}#tome-ui-container .pointer-events-auto{pointer-events:auto}
</style>`;class gS{constructor({ui:e,room:t,player:n,input:r,toScreen:s,root:a=document.body}){var c;this.ui=e,this.room=t,this.player=n,this.input=r,this.toScreen=s,a.insertAdjacentHTML("beforeend",mS),this.container=document.createElement("div"),this.container.id="tome-ui-container",this.container.style.cssText="position:fixed;inset:0;pointer-events:none;z-index:20",this.mount=document.createElement("div"),this.mount.id="tome-game-mount",this.mount.style.cssText="position:fixed;inset:0;pointer-events:none;z-index:21",a.append(this.container,this.mount),this.last=0,this.failed=!1,this.born=new WeakMap,this.paintedAt=t.nowMs;for(const[l,h]of Object.entries(e))l!=="default"&&l!=="onMount"&&l!=="onDestroy"&&typeof h=="function"&&(window[l]=h);window.sendAction=(l,h,f={})=>{r.action(l,h,{at:performance.now(),...f}),f.down==null&&setTimeout(()=>r.action(l,void 0,{down:!1}),0)},window.sendAxis=(l,h)=>{r.sentAxes={...r.sentAxes??{},[l]:h}},window.openLink=l=>window.open(l,"_blank","noopener");const o=this.handle();try{(c=e.onMount)==null||c.call(e,this.mount,o)}catch(l){console.error("[hud] onMount",l)}}alignAnimations(){var t;const e=this.room.nowMs;for(const n of document.getAnimations()){const r=(t=n.effect)==null?void 0:t.target;if(!r||!this.container.contains(r)||!(n instanceof CSSAnimation))continue;let s=this.born.get(n);s==null&&(s=this.paintedAt,this.born.set(n,s)),n.playState!=="paused"&&n.pause(),n.currentTime=e-s}}handle(){const e=this.player;return{get state(){return e.state},get id(){return e.id},get displayName(){return e.displayName},get userId(){return e.userId}}}frame(e){if(e-this.last>=1e3/pS||this.room.inputSeq!==this.seenSeq){this.last=e,this.seenSeq=this.room.inputSeq,this.paintedAt=this.room.nowMs;const t={now:()=>this.room.nowMs,self:this.handle(),session:this.room.session,world:{engine:{ui:{referenceHeight:1080}}}};let n;try{n=this.ui.default(t,this.handle()),this.failed=!1}catch(r){this.failed||console.error("[hud] render",r),this.failed=!0,n=""}dS(this.container,`<div id="tome-ui-container">${Bx(n)}</div>`,{childrenOnly:!0,onBeforeElUpdated:(r,s)=>r===document.activeElement&&/^(INPUT|SELECT|TEXTAREA)$/.test(r.tagName)?!1:(r.tagName==="INPUT"&&(r.type==="radio"||r.type==="checkbox")&&(r.checked=s.hasAttribute("checked")),!0)})}this.alignAnimations();for(const t of this.container.querySelectorAll("[data-world-anchor]")){const n=this.room.entities.get(t.getAttribute("data-world-anchor"));if(!n)continue;const[r,s,a]=(t.getAttribute("data-anchor-offset")??"0 0 0").split(/\s+/).map(Number),o=this.room.worldPosition(n),c=this.toScreen({x:o.x+(r||0),y:o.y+(s||0),z:o.z+(a||0)});c&&(t.style.left=c.x.toFixed(1)+"px",t.style.top=c.y.toFixed(1)+"px")}}}class _S{constructor(e={}){this.map=e,this.buffers=new Map,this.loops=[];try{this.ctx=new AudioContext}catch(r){console.warn("[audio] no AudioContext",(r==null?void 0:r.message)??r),this.ctx=null;return}if(this.master=this.ctx.createGain(),this.master.connect(this.ctx.destination),new URLSearchParams(location.search).has("mute")&&(this.master.gain.value=0),this.music=this.ctx.createGain(),this.music.connect(this.master),this.ctx.state!=="running"){const r=()=>{this.ctx.resume().then(()=>{if(this.ctx.state==="running")for(const s of["pointerdown","keydown","touchend"])removeEventListener(s,r,!0)},()=>{})};for(const s of["pointerdown","keydown","touchend"])addEventListener(s,r,!0);this.ctx.resume().catch(()=>{})}const t=()=>{this.ctx.suspend().catch(()=>{})},n=()=>{document.visibilityState==="visible"&&this.ctx.resume().catch(()=>{})};addEventListener("pagehide",t),addEventListener("freeze",t),addEventListener("pageshow",r=>{r.persisted&&n()}),addEventListener("resume",n),document.addEventListener("visibilitychange",()=>document.visibilityState==="hidden"?t():n())}get running(){var e;return((e=this.ctx)==null?void 0:e.state)==="running"}fileOf(e){return e in this.map?this.map[e]:e}async buffer(e){const t=this.fileOf(e);if(!t||!this.ctx)return null;if(!this.buffers.has(t)){const n=Za(t)??t;this.buffers.set(t,fetch(n).then(r=>{if(!r.ok)throw new Error(r.status);return r.arrayBuffer()}).then(r=>this.ctx.decodeAudioData(r)).catch(r=>(console.warn("[audio]",t,(r==null?void 0:r.message)??r),null)))}return this.buffers.get(t)}async play({clip:e,volume:t=.8,pitch:n=1}={}){if(!this.running||!e)return;const r=await this.buffer(e);if(!r)return;const s=this.ctx.createBufferSource(),a=this.ctx.createGain();s.buffer=r,s.playbackRate.value=n,a.gain.value=t,s.connect(a),a.connect(this.master),s.start()}async loop(e){const t=await this.buffer(e.clip);if(!t)return;const n=this.ctx.createBufferSource(),r=this.ctx.createGain();n.buffer=t,n.loop=e.loop!==!1,r.gain.value=e.gain??1,n.connect(r),r.connect(e.bus==="Music"?this.music:this.master),n.start(),this.loops.push(n)}}var Gh={exports:{}};(function(i,e){var t=void 0,n=function(r){return t||(t=new Promise(function(s,a){var o=typeof r<"u"?r:{},c=o.onAbort;o.onAbort=function(u){a(new Error(u)),c&&c(u)},o.postRun=o.postRun||[],o.postRun.push(function(){s(o)}),i=void 0;var l;l||(l=typeof o<"u"?o:{});var h=typeof window=="object",f=typeof importScripts=="function",d=typeof process=="object"&&typeof process.versions=="object"&&typeof process.versions.node=="string";l.onRuntimeInitialized=function(){function u(H,ce){switch(typeof ce){case"boolean":_d(H,ce?1:0);break;case"number":pd(H,ce);break;case"string":md(H,ce,-1,-1);break;case"object":if(ce===null)Pc(H);else if(ce.length!=null){var Fe=Cs(ce,Rs);gd(H,Fe,ce.length,-1),Ls(Fe)}else Ds(H,"Wrong API use : tried to return a value of an unknown type ("+ce+").",-1);break;default:Pc(H)}}function p(H,ce){for(var Fe=[],Ye=0;Ye<H;Ye+=1){var it=O(ce+4*Ye,"i32"),St=cd(it);if(St===1||St===2)it=dd(it);else if(St===3)it=fd(it);else if(St===4){St=it,it=ud(St),St=hd(St);for(var bn=new Uint8Array(it),gn=0;gn<it;gn+=1)bn[gn]=M[St+gn];it=bn}else it=null;Fe.push(it)}return Fe}function v(H,ce){this.Ka=H,this.db=ce,this.Ia=1,this.eb=[]}function T(H,ce){if(this.db=ce,ce=Oe(H)+1,this.Xa=to(ce),this.Xa===null)throw Error("Unable to allocate memory for the SQL string");ge(H,S,this.Xa,ce),this.cb=this.Xa,this.Ta=this.hb=null}function U(H){if(this.filename="dbfile_"+(4294967295*Math.random()>>>0),H!=null){var ce=this.filename,Fe="/",Ye=ce;if(Fe&&(Fe=typeof Fe=="string"?Fe:qt(Fe),Ye=ce?Ue(Fe+"/"+ce):Fe),ce=Ze(!0,!0),Ye=Ji(Ye,(ce!==void 0?ce:438)&4095|32768,0),H){if(typeof H=="string"){Fe=Array(H.length);for(var it=0,St=H.length;it<St;++it)Fe[it]=H.charCodeAt(it);H=Fe}Se(Ye,ce|146),Fe=Ae(Ye,577),at(Fe,H,0,H.length,0),We(Fe),Se(Ye,ce)}}this.handleError(je(this.filename,K)),this.db=O(K,"i32"),Ic(this.db),this.Ya={},this.Ma={}}var K=li(4),re=l.cwrap,je=re("sqlite3_open","number",["string","number"]),pt=re("sqlite3_close_v2","number",["number"]),tt=re("sqlite3_exec","number",["number","string","number","number","number"]),Pt=re("sqlite3_changes","number",["number"]),Vt=re("sqlite3_prepare_v2","number",["number","string","number","number","number"]),wc=re("sqlite3_sql","string",["number"]),Xh=re("sqlite3_normalized_sql","string",["number"]),Tc=re("sqlite3_prepare_v2","number",["number","number","number","number","number"]),jh=re("sqlite3_bind_text","number",["number","number","number","number","number"]),Ac=re("sqlite3_bind_blob","number",["number","number","number","number","number"]),$h=re("sqlite3_bind_double","number",["number","number","number"]),Yh=re("sqlite3_bind_int","number",["number","number","number"]),Kh=re("sqlite3_bind_parameter_index","number",["number","string"]),Jh=re("sqlite3_step","number",["number"]),Zh=re("sqlite3_errmsg","string",["number"]),Qh=re("sqlite3_column_count","number",["number"]),ed=re("sqlite3_data_count","number",["number"]),td=re("sqlite3_column_double","number",["number","number"]),Rc=re("sqlite3_column_text","string",["number","number"]),nd=re("sqlite3_column_blob","number",["number","number"]),id=re("sqlite3_column_bytes","number",["number","number"]),rd=re("sqlite3_column_type","number",["number","number"]),sd=re("sqlite3_column_name","string",["number","number"]),ad=re("sqlite3_reset","number",["number"]),od=re("sqlite3_clear_bindings","number",["number"]),ld=re("sqlite3_finalize","number",["number"]),Cc=re("sqlite3_create_function_v2","number","number string number number number number number number number".split(" ")),cd=re("sqlite3_value_type","number",["number"]),ud=re("sqlite3_value_bytes","number",["number"]),fd=re("sqlite3_value_text","string",["number"]),hd=re("sqlite3_value_blob","number",["number"]),dd=re("sqlite3_value_double","number",["number"]),pd=re("sqlite3_result_double","",["number","number"]),Pc=re("sqlite3_result_null","",["number"]),md=re("sqlite3_result_text","",["number","string","number","number"]),gd=re("sqlite3_result_blob","",["number","number","number","number"]),_d=re("sqlite3_result_int","",["number","number"]),Ds=re("sqlite3_result_error","",["number","string","number"]),Lc=re("sqlite3_aggregate_context","number",["number","number"]),Ic=re("RegisterExtensionFunctions","number",["number"]);v.prototype.bind=function(H){if(!this.Ka)throw"Statement closed";return this.reset(),Array.isArray(H)?this.vb(H):H!=null&&typeof H=="object"?this.wb(H):!0},v.prototype.step=function(){if(!this.Ka)throw"Statement closed";this.Ia=1;var H=Jh(this.Ka);switch(H){case 100:return!0;case 101:return!1;default:throw this.db.handleError(H)}},v.prototype.qb=function(H){return H==null&&(H=this.Ia,this.Ia+=1),td(this.Ka,H)},v.prototype.zb=function(H){if(H==null&&(H=this.Ia,this.Ia+=1),H=Rc(this.Ka,H),typeof BigInt!="function")throw Error("BigInt is not supported");return BigInt(H)},v.prototype.Ab=function(H){return H==null&&(H=this.Ia,this.Ia+=1),Rc(this.Ka,H)},v.prototype.getBlob=function(H){H==null&&(H=this.Ia,this.Ia+=1);var ce=id(this.Ka,H);H=nd(this.Ka,H);for(var Fe=new Uint8Array(ce),Ye=0;Ye<ce;Ye+=1)Fe[Ye]=M[H+Ye];return Fe},v.prototype.get=function(H,ce){ce=ce||{},H!=null&&this.bind(H)&&this.step(),H=[];for(var Fe=ed(this.Ka),Ye=0;Ye<Fe;Ye+=1)switch(rd(this.Ka,Ye)){case 1:var it=ce.useBigInt?this.zb(Ye):this.qb(Ye);H.push(it);break;case 2:H.push(this.qb(Ye));break;case 3:H.push(this.Ab(Ye));break;case 4:H.push(this.getBlob(Ye));break;default:H.push(null)}return H},v.prototype.getColumnNames=function(){for(var H=[],ce=Qh(this.Ka),Fe=0;Fe<ce;Fe+=1)H.push(sd(this.Ka,Fe));return H},v.prototype.getAsObject=function(H,ce){H=this.get(H,ce),ce=this.getColumnNames();for(var Fe={},Ye=0;Ye<ce.length;Ye+=1)Fe[ce[Ye]]=H[Ye];return Fe},v.prototype.getSQL=function(){return wc(this.Ka)},v.prototype.getNormalizedSQL=function(){return Xh(this.Ka)},v.prototype.run=function(H){return H!=null&&this.bind(H),this.step(),this.reset()},v.prototype.mb=function(H,ce){ce==null&&(ce=this.Ia,this.Ia+=1),H=Pe(H);var Fe=Cs(H,Rs);this.eb.push(Fe),this.db.handleError(jh(this.Ka,ce,Fe,H.length-1,0))},v.prototype.ub=function(H,ce){ce==null&&(ce=this.Ia,this.Ia+=1);var Fe=Cs(H,Rs);this.eb.push(Fe),this.db.handleError(Ac(this.Ka,ce,Fe,H.length,0))},v.prototype.lb=function(H,ce){ce==null&&(ce=this.Ia,this.Ia+=1),this.db.handleError((H===(H|0)?Yh:$h)(this.Ka,ce,H))},v.prototype.xb=function(H){H==null&&(H=this.Ia,this.Ia+=1),Ac(this.Ka,H,0,0,0)},v.prototype.nb=function(H,ce){switch(ce==null&&(ce=this.Ia,this.Ia+=1),typeof H){case"string":this.mb(H,ce);return;case"number":this.lb(H,ce);return;case"bigint":this.mb(H.toString(),ce);return;case"boolean":this.lb(H+0,ce);return;case"object":if(H===null){this.xb(ce);return}if(H.length!=null){this.ub(H,ce);return}}throw"Wrong API use : tried to bind a value of an unknown type ("+H+")."},v.prototype.wb=function(H){var ce=this;return Object.keys(H).forEach(function(Fe){var Ye=Kh(ce.Ka,Fe);Ye!==0&&ce.nb(H[Fe],Ye)}),!0},v.prototype.vb=function(H){for(var ce=0;ce<H.length;ce+=1)this.nb(H[ce],ce+1);return!0},v.prototype.reset=function(){return this.freemem(),od(this.Ka)===0&&ad(this.Ka)===0},v.prototype.freemem=function(){for(var H;(H=this.eb.pop())!==void 0;)Ls(H)},v.prototype.free=function(){this.freemem();var H=ld(this.Ka)===0;return delete this.db.Ya[this.Ka],this.Ka=0,H},T.prototype.next=function(){if(this.Xa===null)return{done:!0};if(this.Ta!==null&&(this.Ta.free(),this.Ta=null),!this.db.db)throw this.fb(),Error("Database closed");var H=Zr(),ce=li(4);Ot(K),Ot(ce);try{this.db.handleError(Tc(this.db.db,this.cb,-1,K,ce)),this.cb=O(ce,"i32");var Fe=O(K,"i32");return Fe===0?(this.fb(),{done:!0}):(this.Ta=new v(Fe,this.db),this.db.Ya[Fe]=this.Ta,{value:this.Ta,done:!1})}catch(Ye){throw this.hb=ke(this.cb),this.fb(),Ye}finally{Jr(H)}},T.prototype.fb=function(){Ls(this.Xa),this.Xa=null},T.prototype.getRemainingSQL=function(){return this.hb!==null?this.hb:ke(this.cb)},typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"&&(T.prototype[Symbol.iterator]=function(){return this}),U.prototype.run=function(H,ce){if(!this.db)throw"Database closed";if(ce){H=this.prepare(H,ce);try{H.step()}finally{H.free()}}else this.handleError(tt(this.db,H,0,0,K));return this},U.prototype.exec=function(H,ce,Fe){if(!this.db)throw"Database closed";var Ye=Zr(),it=null;try{var St=Ti(H),bn=li(4);for(H=[];O(St,"i8")!==0;){Ot(K),Ot(bn),this.handleError(Tc(this.db,St,-1,K,bn));var gn=O(K,"i32");if(St=O(bn,"i32"),gn!==0){var un=null;for(it=new v(gn,this),ce!=null&&it.bind(ce);it.step();)un===null&&(un={columns:it.getColumnNames(),values:[]},H.push(un)),un.values.push(it.get(null,Fe));it.free()}}return H}catch(En){throw it&&it.free(),En}finally{Jr(Ye)}},U.prototype.each=function(H,ce,Fe,Ye,it){typeof ce=="function"&&(Ye=Fe,Fe=ce,ce=void 0),H=this.prepare(H,ce);try{for(;H.step();)Fe(H.getAsObject(null,it))}finally{H.free()}if(typeof Ye=="function")return Ye()},U.prototype.prepare=function(H,ce){if(Ot(K),this.handleError(Vt(this.db,H,-1,K,0)),H=O(K,"i32"),H===0)throw"Nothing to prepare";var Fe=new v(H,this);return ce!=null&&Fe.bind(ce),this.Ya[H]=Fe},U.prototype.iterateStatements=function(H){return new T(H,this)},U.prototype.export=function(){Object.values(this.Ya).forEach(function(ce){ce.free()}),Object.values(this.Ma).forEach(Qi),this.Ma={},this.handleError(pt(this.db));var H=ut(this.filename);return this.handleError(je(this.filename,K)),this.db=O(K,"i32"),Ic(this.db),H},U.prototype.close=function(){this.db!==null&&(Object.values(this.Ya).forEach(function(H){H.free()}),Object.values(this.Ma).forEach(Qi),this.Ma={},this.handleError(pt(this.db)),X("/"+this.filename),this.db=null)},U.prototype.handleError=function(H){if(H===0)return null;throw H=Zh(this.db),Error(H)},U.prototype.getRowsModified=function(){return Pt(this.db)},U.prototype.create_function=function(H,ce){Object.prototype.hasOwnProperty.call(this.Ma,H)&&(Qi(this.Ma[H]),delete this.Ma[H]);var Fe=Ps(function(Ye,it,St){it=p(it,St);try{var bn=ce.apply(null,it)}catch(gn){Ds(Ye,gn,-1);return}u(Ye,bn)},"viii");return this.Ma[H]=Fe,this.handleError(Cc(this.db,H,ce.length,1,0,Fe,0,0,0)),this},U.prototype.create_aggregate=function(H,ce){var Fe=ce.init||function(){return null},Ye=ce.finalize||function(un){return un},it=ce.step;if(!it)throw"An aggregate function must have a step function in "+H;var St={};Object.hasOwnProperty.call(this.Ma,H)&&(Qi(this.Ma[H]),delete this.Ma[H]),ce=H+"__finalize",Object.hasOwnProperty.call(this.Ma,ce)&&(Qi(this.Ma[ce]),delete this.Ma[ce]);var bn=Ps(function(un,En,no){var Ri=Lc(un,1);Object.hasOwnProperty.call(St,Ri)||(St[Ri]=Fe()),En=p(En,no),En=[St[Ri]].concat(En);try{St[Ri]=it.apply(null,En)}catch(vd){delete St[Ri],Ds(un,vd,-1)}},"viii"),gn=Ps(function(un){var En=Lc(un,1);try{var no=Ye(St[En])}catch(Ri){delete St[En],Ds(un,Ri,-1);return}u(un,no),delete St[En]},"vi");return this.Ma[H]=bn,this.Ma[ce]=gn,this.handleError(Cc(this.db,H,it.length-1,1,0,0,bn,gn,0)),this},l.Database=U};var m=Object.assign({},l),x="./this.program",y="",_,g;if(d){var R=ba,A=ba;y=__dirname+"/",g=u=>(u=G(u)?new URL(u):A.normalize(u),R.readFileSync(u)),_=u=>(u=G(u)?new URL(u):A.normalize(u),new Promise((p,v)=>{R.readFile(u,void 0,(T,U)=>{T?v(T):p(U.buffer)})})),!l.thisProgram&&1<process.argv.length&&(x=process.argv[1].replace(/\\/g,"/")),process.argv.slice(2),i.exports=l}else(h||f)&&(f?y=self.location.href:typeof document<"u"&&document.currentScript&&(y=document.currentScript.src),y=y.startsWith("blob:")?"":y.substr(0,y.replace(/[?#].*/,"").lastIndexOf("/")+1),f&&(g=u=>{var p=new XMLHttpRequest;return p.open("GET",u,!1),p.responseType="arraybuffer",p.send(null),new Uint8Array(p.response)}),_=u=>G(u)?new Promise((p,v)=>{var T=new XMLHttpRequest;T.open("GET",u,!0),T.responseType="arraybuffer",T.onload=()=>{(T.status==200||T.status==0&&T.response)&&v(T.response),p(T.status)},T.onerror=p,T.send(null)}):fetch(u,{credentials:"same-origin"}).then(p=>p.ok?p.arrayBuffer():Promise.reject(Error(p.status+" : "+p.url))));var b=l.print||console.log.bind(console),L=l.printErr||console.error.bind(console);Object.assign(l,m),m=null,l.thisProgram&&(x=l.thisProgram);var I;l.wasmBinary&&(I=l.wasmBinary);var C,D=!1,M,S,N,k,F,$,ae;function Z(){var u=C.buffer;l.HEAP8=M=new Int8Array(u),l.HEAP16=N=new Int16Array(u),l.HEAPU8=S=new Uint8Array(u),l.HEAPU16=new Uint16Array(u),l.HEAP32=k=new Int32Array(u),l.HEAPU32=F=new Uint32Array(u),l.HEAPF32=$=new Float32Array(u),l.HEAPF64=ae=new Float64Array(u)}var fe=[],J=[],te=[];function se(){var u=l.preRun.shift();fe.unshift(u)}var pe=0,_e=null;function Re(u){var p;throw(p=l.onAbort)==null||p.call(l,u),u="Aborted("+u+")",L(u),D=!0,new WebAssembly.RuntimeError(u+". Build with -sASSERTIONS for more info.")}var ee=u=>u.startsWith("data:application/octet-stream;base64,"),G=u=>u.startsWith("file://"),me;function he(u){if(u==me&&I)return new Uint8Array(I);if(g)return g(u);throw"both async and sync fetching of the wasm failed"}function ve(u){return I?Promise.resolve().then(()=>he(u)):_(u).then(p=>new Uint8Array(p),()=>he(u))}function Ne(u,p,v){return ve(u).then(T=>WebAssembly.instantiate(T,p)).then(v,T=>{L(`failed to asynchronously prepare wasm: ${T}`),Re(T)})}function Ve(u,p){var v=me;I||typeof WebAssembly.instantiateStreaming!="function"||ee(v)||G(v)||d||typeof fetch!="function"?Ne(v,u,p):fetch(v,{credentials:"same-origin"}).then(T=>WebAssembly.instantiateStreaming(T,u).then(p,function(U){return L(`wasm streaming compile failed: ${U}`),L("falling back to ArrayBuffer instantiation"),Ne(v,u,p)}))}var ye,we,ct=u=>{for(;0<u.length;)u.shift()(l)};function O(u,p="i8"){switch(p.endsWith("*")&&(p="*"),p){case"i1":return M[u];case"i8":return M[u];case"i16":return N[u>>1];case"i32":return k[u>>2];case"i64":Re("to do getValue(i64) use WASM_BIGINT");case"float":return $[u>>2];case"double":return ae[u>>3];case"*":return F[u>>2];default:Re(`invalid type for getValue: ${p}`)}}function Ot(u){var p="i32";switch(p.endsWith("*")&&(p="*"),p){case"i1":M[u]=0;break;case"i8":M[u]=0;break;case"i16":N[u>>1]=0;break;case"i32":k[u>>2]=0;break;case"i64":Re("to do setValue(i64) use WASM_BIGINT");case"float":$[u>>2]=0;break;case"double":ae[u>>3]=0;break;case"*":F[u>>2]=0;break;default:Re(`invalid type for setValue: ${p}`)}}var rt=typeof TextDecoder<"u"?new TextDecoder:void 0,Be=(u,p,v)=>{var T=p+v;for(v=p;u[v]&&!(v>=T);)++v;if(16<v-p&&u.buffer&&rt)return rt.decode(u.subarray(p,v));for(T="";p<v;){var U=u[p++];if(U&128){var K=u[p++]&63;if((U&224)==192)T+=String.fromCharCode((U&31)<<6|K);else{var re=u[p++]&63;U=(U&240)==224?(U&15)<<12|K<<6|re:(U&7)<<18|K<<12|re<<6|u[p++]&63,65536>U?T+=String.fromCharCode(U):(U-=65536,T+=String.fromCharCode(55296|U>>10,56320|U&1023))}}else T+=String.fromCharCode(U)}return T},ke=(u,p)=>u?Be(S,u,p):"",mt=(u,p)=>{for(var v=0,T=u.length-1;0<=T;T--){var U=u[T];U==="."?u.splice(T,1):U===".."?(u.splice(T,1),v++):v&&(u.splice(T,1),v--)}if(p)for(;v;v--)u.unshift("..");return u},Ue=u=>{var p=u.charAt(0)==="/",v=u.substr(-1)==="/";return(u=mt(u.split("/").filter(T=>!!T),!p).join("/"))||p||(u="."),u&&v&&(u+="/"),(p?"/":"")+u},P=u=>{var p=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/.exec(u).slice(1);return u=p[0],p=p[1],!u&&!p?".":(p&&(p=p.substr(0,p.length-1)),u+p)},E=u=>{if(u==="/")return"/";u=Ue(u),u=u.replace(/\/$/,"");var p=u.lastIndexOf("/");return p===-1?u:u.substr(p+1)},W=()=>{if(typeof crypto=="object"&&typeof crypto.getRandomValues=="function")return v=>crypto.getRandomValues(v);if(d)try{var u=ba;if(u.randomFillSync)return v=>u.randomFillSync(v);var p=u.randomBytes;return v=>(v.set(p(v.byteLength)),v)}catch{}Re("initRandomDevice")},oe=u=>(oe=W())(u),le=(...u)=>{for(var p="",v=!1,T=u.length-1;-1<=T&&!v;T--){if(v=0<=T?u[T]:"/",typeof v!="string")throw new TypeError("Arguments to path.resolve must be strings");if(!v)return"";p=v+"/"+p,v=v.charAt(0)==="/"}return p=mt(p.split("/").filter(U=>!!U),!v).join("/"),(v?"/":"")+p||"."},ne=[],Oe=u=>{for(var p=0,v=0;v<u.length;++v){var T=u.charCodeAt(v);127>=T?p++:2047>=T?p+=2:55296<=T&&57343>=T?(p+=4,++v):p+=3}return p},ge=(u,p,v,T)=>{if(!(0<T))return 0;var U=v;T=v+T-1;for(var K=0;K<u.length;++K){var re=u.charCodeAt(K);if(55296<=re&&57343>=re){var je=u.charCodeAt(++K);re=65536+((re&1023)<<10)|je&1023}if(127>=re){if(v>=T)break;p[v++]=re}else{if(2047>=re){if(v+1>=T)break;p[v++]=192|re>>6}else{if(65535>=re){if(v+2>=T)break;p[v++]=224|re>>12}else{if(v+3>=T)break;p[v++]=240|re>>18,p[v++]=128|re>>12&63}p[v++]=128|re>>6&63}p[v++]=128|re&63}}return p[v]=0,v-U};function Pe(u,p){var v=Array(Oe(u)+1);return u=ge(u,v,0,v.length),p&&(v.length=u),v}var st=[];function de(u,p){st[u]={input:[],output:[],Wa:p},Kr(u,Ie)}var Ie={open(u){var p=st[u.node.rdev];if(!p)throw new q(43);u.tty=p,u.seekable=!1},close(u){u.tty.Wa.fsync(u.tty)},fsync(u){u.tty.Wa.fsync(u.tty)},read(u,p,v,T){if(!u.tty||!u.tty.Wa.rb)throw new q(60);for(var U=0,K=0;K<T;K++){try{var re=u.tty.Wa.rb(u.tty)}catch{throw new q(29)}if(re===void 0&&U===0)throw new q(6);if(re==null)break;U++,p[v+K]=re}return U&&(u.node.timestamp=Date.now()),U},write(u,p,v,T){if(!u.tty||!u.tty.Wa.ib)throw new q(60);try{for(var U=0;U<T;U++)u.tty.Wa.ib(u.tty,p[v+U])}catch{throw new q(29)}return T&&(u.node.timestamp=Date.now()),U}},Ge={rb(){e:{if(!ne.length){var u=null;if(d){var p=Buffer.alloc(256),v=0,T=process.stdin.fd;try{v=R.readSync(T,p,0,256)}catch(U){if(U.toString().includes("EOF"))v=0;else throw U}0<v&&(u=p.slice(0,v).toString("utf-8"))}else typeof window<"u"&&typeof window.prompt=="function"&&(u=window.prompt("Input: "),u!==null&&(u+=`
`));if(!u){u=null;break e}ne=Pe(u,!0)}u=ne.shift()}return u},ib(u,p){p===null||p===10?(b(Be(u.output,0)),u.output=[]):p!=0&&u.output.push(p)},fsync(u){u.output&&0<u.output.length&&(b(Be(u.output,0)),u.output=[])},Lb(){return{Gb:25856,Ib:5,Fb:191,Hb:35387,Eb:[3,28,127,21,4,0,1,0,17,19,26,0,18,15,23,22,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}},Mb(){return 0},Nb(){return[24,80]}},qe={ib(u,p){p===null||p===10?(L(Be(u.output,0)),u.output=[]):p!=0&&u.output.push(p)},fsync(u){u.output&&0<u.output.length&&(L(Be(u.output,0)),u.output=[])}};function Le(u,p){var v=u.Ha?u.Ha.length:0;v>=p||(p=Math.max(p,v*(1048576>v?2:1.125)>>>0),v!=0&&(p=Math.max(p,256)),v=u.Ha,u.Ha=new Uint8Array(p),0<u.La&&u.Ha.set(v.subarray(0,u.La),0))}var Me={Pa:null,Qa(){return Me.createNode(null,"/",16895,0)},createNode(u,p,v,T){if((v&61440)===24576||(v&61440)===4096)throw new q(63);return Me.Pa||(Me.Pa={dir:{node:{Oa:Me.Fa.Oa,Na:Me.Fa.Na,lookup:Me.Fa.lookup,$a:Me.Fa.$a,rename:Me.Fa.rename,unlink:Me.Fa.unlink,rmdir:Me.Fa.rmdir,readdir:Me.Fa.readdir,symlink:Me.Fa.symlink},stream:{Sa:Me.Ga.Sa}},file:{node:{Oa:Me.Fa.Oa,Na:Me.Fa.Na},stream:{Sa:Me.Ga.Sa,read:Me.Ga.read,write:Me.Ga.write,kb:Me.Ga.kb,ab:Me.Ga.ab,bb:Me.Ga.bb}},link:{node:{Oa:Me.Fa.Oa,Na:Me.Fa.Na,readlink:Me.Fa.readlink},stream:{}},ob:{node:{Oa:Me.Fa.Oa,Na:Me.Fa.Na},stream:Qa}}),v=Dn(u,p,v,T),Gt(v.mode)?(v.Fa=Me.Pa.dir.node,v.Ga=Me.Pa.dir.stream,v.Ha={}):(v.mode&61440)===32768?(v.Fa=Me.Pa.file.node,v.Ga=Me.Pa.file.stream,v.La=0,v.Ha=null):(v.mode&61440)===40960?(v.Fa=Me.Pa.link.node,v.Ga=Me.Pa.link.stream):(v.mode&61440)===8192&&(v.Fa=Me.Pa.ob.node,v.Ga=Me.Pa.ob.stream),v.timestamp=Date.now(),u&&(u.Ha[p]=v,u.timestamp=v.timestamp),v},Kb(u){return u.Ha?u.Ha.subarray?u.Ha.subarray(0,u.La):new Uint8Array(u.Ha):new Uint8Array(0)},Fa:{Oa(u){var p={};return p.dev=(u.mode&61440)===8192?u.id:1,p.ino=u.id,p.mode=u.mode,p.nlink=1,p.uid=0,p.gid=0,p.rdev=u.rdev,Gt(u.mode)?p.size=4096:(u.mode&61440)===32768?p.size=u.La:(u.mode&61440)===40960?p.size=u.link.length:p.size=0,p.atime=new Date(u.timestamp),p.mtime=new Date(u.timestamp),p.ctime=new Date(u.timestamp),p.yb=4096,p.blocks=Math.ceil(p.size/p.yb),p},Na(u,p){if(p.mode!==void 0&&(u.mode=p.mode),p.timestamp!==void 0&&(u.timestamp=p.timestamp),p.size!==void 0&&(p=p.size,u.La!=p))if(p==0)u.Ha=null,u.La=0;else{var v=u.Ha;u.Ha=new Uint8Array(p),v&&u.Ha.set(v.subarray(0,Math.min(p,u.La))),u.La=p}},lookup(){throw $e[44]},$a(u,p,v,T){return Me.createNode(u,p,v,T)},rename(u,p,v){if(Gt(u.mode)){try{var T=In(p,v)}catch{}if(T)for(var U in T.Ha)throw new q(55)}delete u.parent.Ha[u.name],u.parent.timestamp=Date.now(),u.name=v,p.Ha[v]=u,p.timestamp=u.parent.timestamp},unlink(u,p){delete u.Ha[p],u.timestamp=Date.now()},rmdir(u,p){var v=In(u,p),T;for(T in v.Ha)throw new q(55);delete u.Ha[p],u.timestamp=Date.now()},readdir(u){var p=[".",".."],v;for(v of Object.keys(u.Ha))p.push(v);return p},symlink(u,p,v){return u=Me.createNode(u,p,41471,0),u.link=v,u},readlink(u){if((u.mode&61440)!==40960)throw new q(28);return u.link}},Ga:{read(u,p,v,T,U){var K=u.node.Ha;if(U>=u.node.La)return 0;if(u=Math.min(u.node.La-U,T),8<u&&K.subarray)p.set(K.subarray(U,U+u),v);else for(T=0;T<u;T++)p[v+T]=K[U+T];return u},write(u,p,v,T,U,K){if(p.buffer===M.buffer&&(K=!1),!T)return 0;if(u=u.node,u.timestamp=Date.now(),p.subarray&&(!u.Ha||u.Ha.subarray)){if(K)return u.Ha=p.subarray(v,v+T),u.La=T;if(u.La===0&&U===0)return u.Ha=p.slice(v,v+T),u.La=T;if(U+T<=u.La)return u.Ha.set(p.subarray(v,v+T),U),T}if(Le(u,U+T),u.Ha.subarray&&p.subarray)u.Ha.set(p.subarray(v,v+T),U);else for(K=0;K<T;K++)u.Ha[U+K]=p[v+K];return u.La=Math.max(u.La,U+T),T},Sa(u,p,v){if(v===1?p+=u.position:v===2&&(u.node.mode&61440)===32768&&(p+=u.node.La),0>p)throw new q(28);return p},kb(u,p,v){Le(u.node,p+v),u.node.La=Math.max(u.node.La,p+v)},ab(u,p,v,T,U){if((u.node.mode&61440)!==32768)throw new q(43);if(u=u.node.Ha,U&2||u.buffer!==M.buffer){if((0<v||v+p<u.length)&&(u.subarray?u=u.subarray(v,v+p):u=Array.prototype.slice.call(u,v,v+p)),v=!0,p=65536*Math.ceil(p/65536),(U=Ec(65536,p))?(S.fill(0,U,U+p),p=U):p=0,!p)throw new q(48);M.set(u,p)}else v=!1,p=u.byteOffset;return{Cb:p,tb:v}},bb(u,p,v,T){return Me.Ga.write(u,p,0,T,v,!1),0}}},Ze=(u,p)=>{var v=0;return u&&(v|=365),p&&(v|=146),v},dt=null,B={},xe=[],Q=1,ie=null,Te=!0,q=class{constructor(u){this.name="ErrnoError",this.Ja=u}},$e={},bt=class{constructor(){this.Za={},this.node=null}get flags(){return this.Za.flags}set flags(u){this.Za.flags=u}get position(){return this.Za.position}set position(u){this.Za.position=u}},Ft=class{constructor(u,p,v,T){u||(u=this),this.parent=u,this.Qa=u.Qa,this.Ua=null,this.id=Q++,this.name=p,this.mode=v,this.Fa={},this.Ga={},this.rdev=T}get read(){return(this.mode&365)===365}set read(u){u?this.mode|=365:this.mode&=-366}get write(){return(this.mode&146)===146}set write(u){u?this.mode|=146:this.mode&=-147}};function Ke(u,p={}){if(u=le(u),!u)return{path:"",node:null};if(p=Object.assign({pb:!0,jb:0},p),8<p.jb)throw new q(32);u=u.split("/").filter(re=>!!re);for(var v=dt,T="/",U=0;U<u.length;U++){var K=U===u.length-1;if(K&&p.parent)break;if(v=In(v,u[U]),T=Ue(T+"/"+u[U]),v.Ua&&(!K||K&&p.pb)&&(v=v.Ua.root),!K||p.Ra){for(K=0;(v.mode&61440)===40960;)if(v=j(T),T=le(P(T),v),v=Ke(T,{jb:p.jb+1}).node,40<K++)throw new q(32)}}return{path:T,node:v}}function qt(u){for(var p;;){if(u===u.parent)return u=u.Qa.sb,p?u[u.length-1]!=="/"?`${u}/${p}`:u+p:u;p=p?`${u.name}/${p}`:u.name,u=u.parent}}function cn(u,p){for(var v=0,T=0;T<p.length;T++)v=(v<<5)-v+p.charCodeAt(T)|0;return(u+v>>>0)%ie.length}function Xr(u){var p=cn(u.parent.id,u.name);if(ie[p]===u)ie[p]=u.Va;else for(p=ie[p];p;){if(p.Va===u){p.Va=u.Va;break}p=p.Va}}function In(u,p){var v=Gt(u.mode)?(v=Vn(u,"x"))?v:u.Fa.lookup?0:2:54;if(v)throw new q(v);for(v=ie[cn(u.id,p)];v;v=v.Va){var T=v.name;if(v.parent.id===u.id&&T===p)return v}return u.Fa.lookup(u,p)}function Dn(u,p,v,T){return u=new Ft(u,p,v,T),p=cn(u.parent.id,u.name),u.Va=ie[p],ie[p]=u}function Gt(u){return(u&61440)===16384}function jr(u){var p=["r","w","rw"][u&3];return u&512&&(p+="w"),p}function Vn(u,p){if(Te)return 0;if(!p.includes("r")||u.mode&292){if(p.includes("w")&&!(u.mode&146)||p.includes("x")&&!(u.mode&73))return 2}else return 2;return 0}function wi(u,p){try{return In(u,p),20}catch{}return Vn(u,"wx")}function $r(u,p,v){try{var T=In(u,p)}catch(U){return U.Ja}if(u=Vn(u,"wx"))return u;if(v){if(!Gt(T.mode))return 54;if(T===T.parent||qt(T)==="/")return 10}else if(Gt(T.mode))return 31;return 0}function Ct(u){if(u=xe[u],!u)throw new q(8);return u}function Yr(u,p=-1){if(u=Object.assign(new bt,u),p==-1)e:{for(p=0;4096>=p;p++)if(!xe[p])break e;throw new q(33)}return u.fd=p,xe[p]=u}function Ts(u,p=-1){var v,T;return u=Yr(u,p),(T=(v=u.Ga)==null?void 0:v.Jb)==null||T.call(v,u),u}var Qa={open(u){var p,v;u.Ga=B[u.node.rdev].Ga,(v=(p=u.Ga).open)==null||v.call(p,u)},Sa(){throw new q(70)}};function Kr(u,p){B[u]={Ga:p}}function As(u,p){var v=p==="/";if(v&&dt)throw new q(10);if(!v&&p){var T=Ke(p,{pb:!1});if(p=T.path,T=T.node,T.Ua)throw new q(10);if(!Gt(T.mode))throw new q(54)}p={type:u,Ob:{},sb:p,Bb:[]},u=u.Qa(p),u.Qa=p,p.root=u,v?dt=u:T&&(T.Ua=p,T.Qa&&T.Qa.Bb.push(p))}function Ji(u,p,v){var T=Ke(u,{parent:!0}).node;if(u=E(u),!u||u==="."||u==="..")throw new q(28);var U=wi(T,u);if(U)throw new q(U);if(!T.Fa.$a)throw new q(63);return T.Fa.$a(T,u,p,v)}function mn(u,p){return Ji(u,(p!==void 0?p:511)&1023|16384,0)}function Zi(u,p,v){typeof v>"u"&&(v=p,p=438),Ji(u,p|8192,v)}function w(u,p){if(!le(u))throw new q(44);var v=Ke(p,{parent:!0}).node;if(!v)throw new q(44);p=E(p);var T=wi(v,p);if(T)throw new q(T);if(!v.Fa.symlink)throw new q(63);v.Fa.symlink(v,p,u)}function z(u){var p=Ke(u,{parent:!0}).node;u=E(u);var v=In(p,u),T=$r(p,u,!0);if(T)throw new q(T);if(!p.Fa.rmdir)throw new q(63);if(v.Ua)throw new q(10);p.Fa.rmdir(p,u),Xr(v)}function X(u){var p=Ke(u,{parent:!0}).node;if(!p)throw new q(44);u=E(u);var v=In(p,u),T=$r(p,u,!1);if(T)throw new q(T);if(!p.Fa.unlink)throw new q(63);if(v.Ua)throw new q(10);p.Fa.unlink(p,u),Xr(v)}function j(u){if(u=Ke(u).node,!u)throw new q(44);if(!u.Fa.readlink)throw new q(28);return le(qt(u.parent),u.Fa.readlink(u))}function V(u,p){if(u=Ke(u,{Ra:!p}).node,!u)throw new q(44);if(!u.Fa.Oa)throw new q(63);return u.Fa.Oa(u)}function ue(u){return V(u,!0)}function Se(u,p){if(u=typeof u=="string"?Ke(u,{Ra:!0}).node:u,!u.Fa.Na)throw new q(63);u.Fa.Na(u,{mode:p&4095|u.mode&-4096,timestamp:Date.now()})}function Ce(u,p){if(0>p)throw new q(28);if(u=typeof u=="string"?Ke(u,{Ra:!0}).node:u,!u.Fa.Na)throw new q(63);if(Gt(u.mode))throw new q(31);if((u.mode&61440)!==32768)throw new q(28);var v=Vn(u,"w");if(v)throw new q(v);u.Fa.Na(u,{size:p,timestamp:Date.now()})}function Ae(u,p,v){if(u==="")throw new q(44);if(typeof p=="string"){var T={r:0,"r+":2,w:577,"w+":578,a:1089,"a+":1090}[p];if(typeof T>"u")throw Error(`Unknown file open mode: ${p}`);p=T}if(v=p&64?(typeof v>"u"?438:v)&4095|32768:0,typeof u=="object")var U=u;else{u=Ue(u);try{U=Ke(u,{Ra:!(p&131072)}).node}catch{}}if(T=!1,p&64)if(U){if(p&128)throw new q(20)}else U=Ji(u,v,0),T=!0;if(!U)throw new q(44);if((U.mode&61440)===8192&&(p&=-513),p&65536&&!Gt(U.mode))throw new q(54);if(!T&&(v=U?(U.mode&61440)===40960?32:Gt(U.mode)&&(jr(p)!=="r"||p&512)?31:Vn(U,jr(p)):44))throw new q(v);return p&512&&!T&&Ce(U,0),p&=-131713,U=Yr({node:U,path:qt(U),flags:p,seekable:!0,position:0,Ga:U.Ga,Db:[],error:!1}),U.Ga.open&&U.Ga.open(U),!l.logReadFiles||p&1||(At||(At={}),u in At||(At[u]=1)),U}function We(u){if(u.fd===null)throw new q(8);u.gb&&(u.gb=null);try{u.Ga.close&&u.Ga.close(u)}catch(p){throw p}finally{xe[u.fd]=null}u.fd=null}function Xe(u,p,v){if(u.fd===null)throw new q(8);if(!u.seekable||!u.Ga.Sa)throw new q(70);if(v!=0&&v!=1&&v!=2)throw new q(28);u.position=u.Ga.Sa(u,p,v),u.Db=[]}function ze(u,p,v,T,U){if(0>T||0>U)throw new q(28);if(u.fd===null)throw new q(8);if((u.flags&2097155)===1)throw new q(8);if(Gt(u.node.mode))throw new q(31);if(!u.Ga.read)throw new q(28);var K=typeof U<"u";if(!K)U=u.position;else if(!u.seekable)throw new q(70);return p=u.Ga.read(u,p,v,T,U),K||(u.position+=p),p}function at(u,p,v,T,U){if(0>T||0>U)throw new q(28);if(u.fd===null)throw new q(8);if(!(u.flags&2097155))throw new q(8);if(Gt(u.node.mode))throw new q(31);if(!u.Ga.write)throw new q(28);u.seekable&&u.flags&1024&&Xe(u,0,2);var K=typeof U<"u";if(!K)U=u.position;else if(!u.seekable)throw new q(70);return p=u.Ga.write(u,p,v,T,U,void 0),K||(u.position+=p),p}function ut(u){var p,v=Ae(u,v||0);u=V(u).size;var T=new Uint8Array(u);return ze(v,T,0,u,0),p=T,We(v),p}var Mt;function gt(u,p,v){u=Ue("/dev/"+u);var T=Ze(!!p,!!v);ot||(ot=64);var U=ot++<<8|0;Kr(U,{open(K){K.seekable=!1},close(){var K;(K=v==null?void 0:v.buffer)!=null&&K.length&&v(10)},read(K,re,je,pt){for(var tt=0,Pt=0;Pt<pt;Pt++){try{var Vt=p()}catch{throw new q(29)}if(Vt===void 0&&tt===0)throw new q(6);if(Vt==null)break;tt++,re[je+Pt]=Vt}return tt&&(K.node.timestamp=Date.now()),tt},write(K,re,je,pt){for(var tt=0;tt<pt;tt++)try{v(re[je+tt])}catch{throw new q(29)}return pt&&(K.node.timestamp=Date.now()),tt}}),Zi(u,T,U)}var ot,be={},At;function nt(u,p,v){if(p.charAt(0)==="/")return p;if(u=u===-100?"/":Ct(u).path,p.length==0){if(!v)throw new q(44);return u}return Ue(u+"/"+p)}function Xt(u,p,v){u=u(p),k[v>>2]=u.dev,k[v+4>>2]=u.mode,F[v+8>>2]=u.nlink,k[v+12>>2]=u.uid,k[v+16>>2]=u.gid,k[v+20>>2]=u.rdev,we=[u.size>>>0,(ye=u.size,1<=+Math.abs(ye)?0<ye?+Math.floor(ye/4294967296)>>>0:~~+Math.ceil((ye-+(~~ye>>>0))/4294967296)>>>0:0)],k[v+24>>2]=we[0],k[v+28>>2]=we[1],k[v+32>>2]=4096,k[v+36>>2]=u.blocks,p=u.atime.getTime();var T=u.mtime.getTime(),U=u.ctime.getTime();return we=[Math.floor(p/1e3)>>>0,(ye=Math.floor(p/1e3),1<=+Math.abs(ye)?0<ye?+Math.floor(ye/4294967296)>>>0:~~+Math.ceil((ye-+(~~ye>>>0))/4294967296)>>>0:0)],k[v+40>>2]=we[0],k[v+44>>2]=we[1],F[v+48>>2]=p%1e3*1e3,we=[Math.floor(T/1e3)>>>0,(ye=Math.floor(T/1e3),1<=+Math.abs(ye)?0<ye?+Math.floor(ye/4294967296)>>>0:~~+Math.ceil((ye-+(~~ye>>>0))/4294967296)>>>0:0)],k[v+56>>2]=we[0],k[v+60>>2]=we[1],F[v+64>>2]=T%1e3*1e3,we=[Math.floor(U/1e3)>>>0,(ye=Math.floor(U/1e3),1<=+Math.abs(ye)?0<ye?+Math.floor(ye/4294967296)>>>0:~~+Math.ceil((ye-+(~~ye>>>0))/4294967296)>>>0:0)],k[v+72>>2]=we[0],k[v+76>>2]=we[1],F[v+80>>2]=U%1e3*1e3,we=[u.ino>>>0,(ye=u.ino,1<=+Math.abs(ye)?0<ye?+Math.floor(ye/4294967296)>>>0:~~+Math.ceil((ye-+(~~ye>>>0))/4294967296)>>>0:0)],k[v+88>>2]=we[0],k[v+92>>2]=we[1],0}var xn=void 0;function kt(){var u=k[+xn>>2];return xn+=4,u}var Sn=(u,p)=>p+2097152>>>0<4194305-!!u?(u>>>0)+4294967296*p:NaN,xt=[0,31,60,91,121,152,182,213,244,274,305,335],nn=[0,31,59,90,120,151,181,212,243,273,304,334],jt={},Bt=()=>{if(!zt){var u={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:(typeof navigator=="object"&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",_:x||"./this.program"},p;for(p in jt)jt[p]===void 0?delete u[p]:u[p]=jt[p];var v=[];for(p in u)v.push(`${p}=${u[p]}`);zt=v}return zt},zt,Ti=u=>{var p=Oe(u)+1,v=li(p);return ge(u,S,v,p),v},Hn=(u,p,v,T)=>{var U={string:tt=>{var Pt=0;return tt!=null&&tt!==0&&(Pt=Ti(tt)),Pt},array:tt=>{var Pt=li(tt.length);return M.set(tt,Pt),Pt}};u=l["_"+u];var K=[],re=0;if(T)for(var je=0;je<T.length;je++){var pt=U[v[je]];pt?(re===0&&(re=Zr()),K[je]=pt(T[je])):K[je]=T[je]}return v=u(...K),v=function(tt){return re!==0&&Jr(re),p==="string"?tt?Be(S,tt):"":p==="boolean"?!!tt:tt}(v)},Rs=0,Cs=(u,p)=>(p=p==1?li(u.length):to(u.length),u.subarray||u.slice||(u=new Uint8Array(u)),S.set(u,p),p),Ai,eo=[],Gn,Qi=u=>{Ai.delete(Gn.get(u)),Gn.set(u,null),eo.push(u)},Ps=(u,p)=>{if(!Ai){Ai=new WeakMap;var v=Gn.length;if(Ai)for(var T=0;T<0+v;T++){var U=Gn.get(T);U&&Ai.set(U,T)}}if(v=Ai.get(u)||0)return v;if(eo.length)v=eo.pop();else{try{Gn.grow(1)}catch(je){throw je instanceof RangeError?"Unable to grow wasm table. Set ALLOW_TABLE_GROWTH.":je}v=Gn.length-1}try{Gn.set(v,u)}catch(je){if(!(je instanceof TypeError))throw je;if(typeof WebAssembly.Function=="function"){T=WebAssembly.Function,U={i:"i32",j:"i64",f:"f32",d:"f64",e:"externref",p:"i32"};for(var K={parameters:[],results:p[0]=="v"?[]:[U[p[0]]]},re=1;re<p.length;++re)K.parameters.push(U[p[re]]);p=new T(K,u)}else{for(T=[1],U=p.slice(0,1),p=p.slice(1),K={i:127,p:127,j:126,f:125,d:124,e:111},T.push(96),re=p.length,128>re?T.push(re):T.push(re%128|128,re>>7),re=0;re<p.length;++re)T.push(K[p[re]]);U=="v"?T.push(0):T.push(1,K[U]),p=[0,97,115,109,1,0,0,0,1],U=T.length,128>U?p.push(U):p.push(U%128|128,U>>7),p.push(...T),p.push(2,7,1,1,101,1,102,0,0,7,5,1,1,102,0,0),p=new WebAssembly.Module(new Uint8Array(p)),p=new WebAssembly.Instance(p,{e:{f:u}}).exports.f}Gn.set(v,p)}return Ai.set(u,v),v};[44].forEach(u=>{$e[u]=new q(u),$e[u].stack="<generic error, no stack>"}),ie=Array(4096),As(Me,"/"),mn("/tmp"),mn("/home"),mn("/home/web_user"),function(){mn("/dev"),Kr(259,{read:()=>0,write:(T,U,K,re)=>re}),Zi("/dev/null",259),de(1280,Ge),de(1536,qe),Zi("/dev/tty",1280),Zi("/dev/tty1",1536);var u=new Uint8Array(1024),p=0,v=()=>(p===0&&(p=oe(u).byteLength),u[--p]);gt("random",v),gt("urandom",v),mn("/dev/shm"),mn("/dev/shm/tmp")}(),function(){mn("/proc");var u=mn("/proc/self");mn("/proc/self/fd"),As({Qa(){var p=Dn(u,"fd",16895,73);return p.Fa={lookup(v,T){var U=Ct(+T);return v={parent:null,Qa:{sb:"fake"},Fa:{readlink:()=>U.path}},v.parent=v}},p}},"/proc/self/fd")}();var qh={a:(u,p,v,T)=>{Re(`Assertion failed: ${u?Be(S,u):""}, at: `+[p?p?Be(S,p):"":"unknown filename",v,T?T?Be(S,T):"":"unknown function"])},h:function(u,p){try{return u=u?Be(S,u):"",Se(u,p),0}catch(v){if(typeof be>"u"||v.name!=="ErrnoError")throw v;return-v.Ja}},H:function(u,p,v){try{if(p=p?Be(S,p):"",p=nt(u,p),v&-8)return-28;var T=Ke(p,{Ra:!0}).node;return T?(u="",v&4&&(u+="r"),v&2&&(u+="w"),v&1&&(u+="x"),u&&Vn(T,u)?-2:0):-44}catch(U){if(typeof be>"u"||U.name!=="ErrnoError")throw U;return-U.Ja}},i:function(u,p){try{var v=Ct(u);return Se(v.node,p),0}catch(T){if(typeof be>"u"||T.name!=="ErrnoError")throw T;return-T.Ja}},g:function(u){try{var p=Ct(u).node,v=typeof p=="string"?Ke(p,{Ra:!0}).node:p;if(!v.Fa.Na)throw new q(63);return v.Fa.Na(v,{timestamp:Date.now()}),0}catch(T){if(typeof be>"u"||T.name!=="ErrnoError")throw T;return-T.Ja}},b:function(u,p,v){xn=v;try{var T=Ct(u);switch(p){case 0:var U=kt();if(0>U)break;for(;xe[U];)U++;return Ts(T,U).fd;case 1:case 2:return 0;case 3:return T.flags;case 4:return U=kt(),T.flags|=U,0;case 12:return U=kt(),N[U+0>>1]=2,0;case 13:case 14:return 0}return-28}catch(K){if(typeof be>"u"||K.name!=="ErrnoError")throw K;return-K.Ja}},f:function(u,p){try{var v=Ct(u);return Xt(V,v.path,p)}catch(T){if(typeof be>"u"||T.name!=="ErrnoError")throw T;return-T.Ja}},n:function(u,p,v){p=Sn(p,v);try{if(isNaN(p))return 61;var T=Ct(u);if(!(T.flags&2097155))throw new q(28);return Ce(T.node,p),0}catch(U){if(typeof be>"u"||U.name!=="ErrnoError")throw U;return-U.Ja}},C:function(u,p){try{if(p===0)return-28;var v=Oe("/")+1;return p<v?-68:(ge("/",S,u,p),v)}catch(T){if(typeof be>"u"||T.name!=="ErrnoError")throw T;return-T.Ja}},F:function(u,p){try{return u=u?Be(S,u):"",Xt(ue,u,p)}catch(v){if(typeof be>"u"||v.name!=="ErrnoError")throw v;return-v.Ja}},z:function(u,p,v){try{return p=p?Be(S,p):"",p=nt(u,p),p=Ue(p),p[p.length-1]==="/"&&(p=p.substr(0,p.length-1)),mn(p,v),0}catch(T){if(typeof be>"u"||T.name!=="ErrnoError")throw T;return-T.Ja}},E:function(u,p,v,T){try{p=p?Be(S,p):"";var U=T&256;return p=nt(u,p,T&4096),Xt(U?ue:V,p,v)}catch(K){if(typeof be>"u"||K.name!=="ErrnoError")throw K;return-K.Ja}},x:function(u,p,v,T){xn=T;try{p=p?Be(S,p):"",p=nt(u,p);var U=T?kt():0;return Ae(p,v,U).fd}catch(K){if(typeof be>"u"||K.name!=="ErrnoError")throw K;return-K.Ja}},v:function(u,p,v,T){try{if(p=p?Be(S,p):"",p=nt(u,p),0>=T)return-28;var U=j(p),K=Math.min(T,Oe(U)),re=M[v+K];return ge(U,S,v,T+1),M[v+K]=re,K}catch(je){if(typeof be>"u"||je.name!=="ErrnoError")throw je;return-je.Ja}},u:function(u){try{return u=u?Be(S,u):"",z(u),0}catch(p){if(typeof be>"u"||p.name!=="ErrnoError")throw p;return-p.Ja}},G:function(u,p){try{return u=u?Be(S,u):"",Xt(V,u,p)}catch(v){if(typeof be>"u"||v.name!=="ErrnoError")throw v;return-v.Ja}},r:function(u,p,v){try{return p=p?Be(S,p):"",p=nt(u,p),v===0?X(p):v===512?z(p):Re("Invalid flags passed to unlinkat"),0}catch(T){if(typeof be>"u"||T.name!=="ErrnoError")throw T;return-T.Ja}},q:function(u,p,v){try{if(p=p?Be(S,p):"",p=nt(u,p,!0),v){var T=F[v>>2]+4294967296*k[v+4>>2],U=k[v+8>>2];K=1e3*T+U/1e6,v+=16,T=F[v>>2]+4294967296*k[v+4>>2],U=k[v+8>>2],re=1e3*T+U/1e6}else var K=Date.now(),re=K;u=K;var je=Ke(p,{Ra:!0}).node;return je.Fa.Na(je,{timestamp:Math.max(u,re)}),0}catch(pt){if(typeof be>"u"||pt.name!=="ErrnoError")throw pt;return-pt.Ja}},l:function(u,p,v){u=new Date(1e3*Sn(u,p)),k[v>>2]=u.getSeconds(),k[v+4>>2]=u.getMinutes(),k[v+8>>2]=u.getHours(),k[v+12>>2]=u.getDate(),k[v+16>>2]=u.getMonth(),k[v+20>>2]=u.getFullYear()-1900,k[v+24>>2]=u.getDay(),p=u.getFullYear(),k[v+28>>2]=(p%4!==0||p%100===0&&p%400!==0?nn:xt)[u.getMonth()]+u.getDate()-1|0,k[v+36>>2]=-(60*u.getTimezoneOffset()),p=new Date(u.getFullYear(),6,1).getTimezoneOffset();var T=new Date(u.getFullYear(),0,1).getTimezoneOffset();k[v+32>>2]=(p!=T&&u.getTimezoneOffset()==Math.min(T,p))|0},j:function(u,p,v,T,U,K,re,je){U=Sn(U,K);try{if(isNaN(U))return 61;var pt=Ct(T);if(p&2&&!(v&2)&&(pt.flags&2097155)!==2)throw new q(2);if((pt.flags&2097155)===1)throw new q(2);if(!pt.Ga.ab)throw new q(43);var tt=pt.Ga.ab(pt,u,U,p,v),Pt=tt.Cb;return k[re>>2]=tt.tb,F[je>>2]=Pt,0}catch(Vt){if(typeof be>"u"||Vt.name!=="ErrnoError")throw Vt;return-Vt.Ja}},k:function(u,p,v,T,U,K,re){K=Sn(K,re);try{var je=Ct(U);if(v&2){if((je.node.mode&61440)!==32768)throw new q(43);if(!(T&2)){var pt=S.slice(u,u+p);je.Ga.bb&&je.Ga.bb(je,pt,K,p,T)}}}catch(tt){if(typeof be>"u"||tt.name!=="ErrnoError")throw tt;return-tt.Ja}},y:(u,p,v,T)=>{var U=new Date().getFullYear(),K=new Date(U,0,1).getTimezoneOffset();U=new Date(U,6,1).getTimezoneOffset(),F[u>>2]=60*Math.max(K,U),k[p>>2]=+(K!=U),p=re=>{var je=Math.abs(re);return`UTC${0<=re?"-":"+"}${String(Math.floor(je/60)).padStart(2,"0")}${String(je%60).padStart(2,"0")}`},u=p(K),p=p(U),U<K?(ge(u,S,v,17),ge(p,S,T,17)):(ge(u,S,T,17),ge(p,S,v,17))},d:()=>Date.now(),s:()=>2147483648,c:()=>performance.now(),o:u=>{var p=S.length;if(u>>>=0,2147483648<u)return!1;for(var v=1;4>=v;v*=2){var T=p*(1+.2/v);T=Math.min(T,u+100663296);var U=Math;T=Math.max(u,T);e:{U=(U.min.call(U,2147483648,T+(65536-T%65536)%65536)-C.buffer.byteLength+65535)/65536;try{C.grow(U),Z();var K=1;break e}catch{}K=void 0}if(K)return!0}return!1},A:(u,p)=>{var v=0;return Bt().forEach((T,U)=>{var K=p+v;for(U=F[u+4*U>>2]=K,K=0;K<T.length;++K)M[U++]=T.charCodeAt(K);M[U]=0,v+=T.length+1}),0},B:(u,p)=>{var v=Bt();F[u>>2]=v.length;var T=0;return v.forEach(U=>T+=U.length+1),F[p>>2]=T,0},e:function(u){try{var p=Ct(u);return We(p),0}catch(v){if(typeof be>"u"||v.name!=="ErrnoError")throw v;return v.Ja}},p:function(u,p){try{var v=Ct(u);return M[p]=v.tty?2:Gt(v.mode)?3:(v.mode&61440)===40960?7:4,N[p+2>>1]=0,we=[0,(ye=0,1<=+Math.abs(ye)?0<ye?+Math.floor(ye/4294967296)>>>0:~~+Math.ceil((ye-+(~~ye>>>0))/4294967296)>>>0:0)],k[p+8>>2]=we[0],k[p+12>>2]=we[1],we=[0,(ye=0,1<=+Math.abs(ye)?0<ye?+Math.floor(ye/4294967296)>>>0:~~+Math.ceil((ye-+(~~ye>>>0))/4294967296)>>>0:0)],k[p+16>>2]=we[0],k[p+20>>2]=we[1],0}catch(T){if(typeof be>"u"||T.name!=="ErrnoError")throw T;return T.Ja}},w:function(u,p,v,T){try{e:{var U=Ct(u);u=p;for(var K,re=p=0;re<v;re++){var je=F[u>>2],pt=F[u+4>>2];u+=8;var tt=ze(U,M,je,pt,K);if(0>tt){var Pt=-1;break e}if(p+=tt,tt<pt)break;typeof K<"u"&&(K+=tt)}Pt=p}return F[T>>2]=Pt,0}catch(Vt){if(typeof be>"u"||Vt.name!=="ErrnoError")throw Vt;return Vt.Ja}},m:function(u,p,v,T,U){p=Sn(p,v);try{if(isNaN(p))return 61;var K=Ct(u);return Xe(K,p,T),we=[K.position>>>0,(ye=K.position,1<=+Math.abs(ye)?0<ye?+Math.floor(ye/4294967296)>>>0:~~+Math.ceil((ye-+(~~ye>>>0))/4294967296)>>>0:0)],k[U>>2]=we[0],k[U+4>>2]=we[1],K.gb&&p===0&&T===0&&(K.gb=null),0}catch(re){if(typeof be>"u"||re.name!=="ErrnoError")throw re;return re.Ja}},D:function(u){var v;try{var p=Ct(u);return(v=p.Ga)!=null&&v.fsync?p.Ga.fsync(p):0}catch(T){if(typeof be>"u"||T.name!=="ErrnoError")throw T;return T.Ja}},t:function(u,p,v,T){try{e:{var U=Ct(u);u=p;for(var K,re=p=0;re<v;re++){var je=F[u>>2],pt=F[u+4>>2];u+=8;var tt=at(U,M,je,pt,K);if(0>tt){var Pt=-1;break e}p+=tt,typeof K<"u"&&(K+=tt)}Pt=p}return F[T>>2]=Pt,0}catch(Vt){if(typeof be>"u"||Vt.name!=="ErrnoError")throw Vt;return Vt.Ja}}},He=function(){var v;function u(T){var U;return He=T.exports,C=He.I,Z(),Gn=He.K,J.unshift(He.J),pe--,(U=l.monitorRunDependencies)==null||U.call(l,pe),pe==0&&_e&&(T=_e,_e=null,T()),He}var p={a:qh};if(pe++,(v=l.monitorRunDependencies)==null||v.call(l,pe),l.instantiateWasm)try{return l.instantiateWasm(p,u)}catch(T){return L(`Module.instantiateWasm callback failed with error: ${T}`),!1}return me||(me=ee("sql-wasm.wasm")?"sql-wasm.wasm":l.locateFile?l.locateFile("sql-wasm.wasm",y):y+"sql-wasm.wasm"),Ve(p,function(T){u(T.instance)}),{}}();l._sqlite3_free=u=>(l._sqlite3_free=He.L)(u),l._sqlite3_value_text=u=>(l._sqlite3_value_text=He.M)(u),l._sqlite3_prepare_v2=(u,p,v,T,U)=>(l._sqlite3_prepare_v2=He.N)(u,p,v,T,U),l._sqlite3_step=u=>(l._sqlite3_step=He.O)(u),l._sqlite3_reset=u=>(l._sqlite3_reset=He.P)(u),l._sqlite3_exec=(u,p,v,T,U)=>(l._sqlite3_exec=He.Q)(u,p,v,T,U),l._sqlite3_finalize=u=>(l._sqlite3_finalize=He.R)(u),l._sqlite3_column_name=(u,p)=>(l._sqlite3_column_name=He.S)(u,p),l._sqlite3_column_text=(u,p)=>(l._sqlite3_column_text=He.T)(u,p),l._sqlite3_column_type=(u,p)=>(l._sqlite3_column_type=He.U)(u,p),l._sqlite3_errmsg=u=>(l._sqlite3_errmsg=He.V)(u),l._sqlite3_clear_bindings=u=>(l._sqlite3_clear_bindings=He.W)(u),l._sqlite3_value_blob=u=>(l._sqlite3_value_blob=He.X)(u),l._sqlite3_value_bytes=u=>(l._sqlite3_value_bytes=He.Y)(u),l._sqlite3_value_double=u=>(l._sqlite3_value_double=He.Z)(u),l._sqlite3_value_int=u=>(l._sqlite3_value_int=He._)(u),l._sqlite3_value_type=u=>(l._sqlite3_value_type=He.$)(u),l._sqlite3_result_blob=(u,p,v,T)=>(l._sqlite3_result_blob=He.aa)(u,p,v,T),l._sqlite3_result_double=(u,p)=>(l._sqlite3_result_double=He.ba)(u,p),l._sqlite3_result_error=(u,p,v)=>(l._sqlite3_result_error=He.ca)(u,p,v),l._sqlite3_result_int=(u,p)=>(l._sqlite3_result_int=He.da)(u,p),l._sqlite3_result_int64=(u,p,v)=>(l._sqlite3_result_int64=He.ea)(u,p,v),l._sqlite3_result_null=u=>(l._sqlite3_result_null=He.fa)(u),l._sqlite3_result_text=(u,p,v,T)=>(l._sqlite3_result_text=He.ga)(u,p,v,T),l._sqlite3_aggregate_context=(u,p)=>(l._sqlite3_aggregate_context=He.ha)(u,p),l._sqlite3_column_count=u=>(l._sqlite3_column_count=He.ia)(u),l._sqlite3_data_count=u=>(l._sqlite3_data_count=He.ja)(u),l._sqlite3_column_blob=(u,p)=>(l._sqlite3_column_blob=He.ka)(u,p),l._sqlite3_column_bytes=(u,p)=>(l._sqlite3_column_bytes=He.la)(u,p),l._sqlite3_column_double=(u,p)=>(l._sqlite3_column_double=He.ma)(u,p),l._sqlite3_bind_blob=(u,p,v,T,U)=>(l._sqlite3_bind_blob=He.na)(u,p,v,T,U),l._sqlite3_bind_double=(u,p,v)=>(l._sqlite3_bind_double=He.oa)(u,p,v),l._sqlite3_bind_int=(u,p,v)=>(l._sqlite3_bind_int=He.pa)(u,p,v),l._sqlite3_bind_text=(u,p,v,T,U)=>(l._sqlite3_bind_text=He.qa)(u,p,v,T,U),l._sqlite3_bind_parameter_index=(u,p)=>(l._sqlite3_bind_parameter_index=He.ra)(u,p),l._sqlite3_sql=u=>(l._sqlite3_sql=He.sa)(u),l._sqlite3_normalized_sql=u=>(l._sqlite3_normalized_sql=He.ta)(u),l._sqlite3_changes=u=>(l._sqlite3_changes=He.ua)(u),l._sqlite3_close_v2=u=>(l._sqlite3_close_v2=He.va)(u),l._sqlite3_create_function_v2=(u,p,v,T,U,K,re,je,pt)=>(l._sqlite3_create_function_v2=He.wa)(u,p,v,T,U,K,re,je,pt),l._sqlite3_open=(u,p)=>(l._sqlite3_open=He.xa)(u,p);var to=l._malloc=u=>(to=l._malloc=He.ya)(u),Ls=l._free=u=>(Ls=l._free=He.za)(u);l._RegisterExtensionFunctions=u=>(l._RegisterExtensionFunctions=He.Aa)(u);var Ec=(u,p)=>(Ec=He.Ba)(u,p),Jr=u=>(Jr=He.Ca)(u),li=u=>(li=He.Da)(u),Zr=()=>(Zr=He.Ea)();l.stackSave=()=>Zr(),l.stackRestore=u=>Jr(u),l.stackAlloc=u=>li(u),l.cwrap=(u,p,v,T)=>{var U=!v||v.every(K=>K==="number"||K==="boolean");return p!=="string"&&U&&!T?l["_"+u]:(...K)=>Hn(u,p,v,K)},l.addFunction=Ps,l.removeFunction=Qi,l.UTF8ToString=ke,l.ALLOC_NORMAL=Rs,l.allocate=Cs,l.allocateUTF8OnStack=Ti;var Is;_e=function u(){Is||Mc(),Is||(_e=u)};function Mc(){function u(){var v;if(!Is&&(Is=!0,l.calledRun=!0,!D)){if(l.noFSInit||Mt||(Mt=!0,l.stdin=l.stdin,l.stdout=l.stdout,l.stderr=l.stderr,l.stdin?gt("stdin",l.stdin):w("/dev/tty","/dev/stdin"),l.stdout?gt("stdout",null,l.stdout):w("/dev/tty","/dev/stdout"),l.stderr?gt("stderr",null,l.stderr):w("/dev/tty1","/dev/stderr"),Ae("/dev/stdin",0),Ae("/dev/stdout",1),Ae("/dev/stderr",1)),Te=!1,ct(J),(v=l.onRuntimeInitialized)==null||v.call(l),l.postRun)for(typeof l.postRun=="function"&&(l.postRun=[l.postRun]);l.postRun.length;){var p=l.postRun.shift();te.unshift(p)}ct(te)}}if(!(0<pe)){if(l.preRun)for(typeof l.preRun=="function"&&(l.preRun=[l.preRun]);l.preRun.length;)se();ct(fe),0<pe||(l.setStatus?(l.setStatus("Running..."),setTimeout(function(){setTimeout(function(){l.setStatus("")},1),u()},1)):u())}}if(l.preInit)for(typeof l.preInit=="function"&&(l.preInit=[l.preInit]);0<l.preInit.length;)l.preInit.pop()();return Mc(),o}),t)};i.exports=n,i.exports.default=n})(Gh);var vS=Gh.exports;const yS=kh(vS),xS="/realm/play/assets/sql-wasm-Bku9E_kW.wasm",SS="justa-web",Gi="db";function Wh(){return new Promise((i,e)=>{const t=indexedDB.open(SS,1);t.onupgradeneeded=()=>t.result.createObjectStore(Gi),t.onsuccess=()=>i(t.result),t.onerror=()=>e(t.error)})}async function bS(){try{const i=await Wh();return await new Promise(e=>{const t=i.transaction(Gi).objectStore(Gi).get(Gi);t.onsuccess=()=>e(t.result??null),t.onerror=()=>e(null)})}catch{return null}}async function ES(i){try{const e=await Wh();await new Promise(t=>{const n=e.transaction(Gi,"readwrite");n.objectStore(Gi).put(i,Gi),n.oncomplete=t,n.onerror=t})}catch{}}function MS(i,e){let t=i[0];const n={};return e.forEach((r,s)=>{const a="$p"+s;if(r!==null&&!["string","number","boolean"].includes(typeof r))throw new TypeError(`ctx.sql: \${} binds string, number, boolean or null, got ${typeof r}`);n[a]=typeof r=="boolean"?r?1:0:r,t+=a+i[s+1]}),{text:t,params:n}}async function wS({persist:i=!0}={}){const e=await yS({locateFile:()=>xS}),t=i?await bS():null;let n=t?new e.Database(t):new e.Database,r=!1,s=null;const a=()=>{!i||!r||s||(r=!1,s=ES(n.export()).then(()=>{s=null,r&&a()}))};function o(c,l,h){var _,g,R;const{text:f,params:d}=MS(l,h);c!=null&&(d["@caller"]=c);let m=[],x=0;n.run("BEGIN");try{for(const A of n.iterateStatements(f)){A.bind(d);const b=[];for(;A.step();)b.push(A.getAsObject());A.getColumnNames().length&&(m=b),x+=n.getRowsModified(),A.free()}n.run("COMMIT")}catch(A){try{n.run("ROLLBACK")}catch{}throw A}const y=((R=(g=(_=n.exec("SELECT last_insert_rowid() AS id")[0])==null?void 0:_.values)==null?void 0:g[0])==null?void 0:R[0])??0;return x&&(r=!0,queueMicrotask(a)),{rows:m,changes:x,lastInsertRowid:Number(y)}}return{sqlFor:c=>(l,...h)=>Promise.resolve().then(()=>o(c,l,h)),async migrate(c){await c((l,...h)=>Promise.resolve().then(()=>o(null,l,h)))},async reset(){n.close(),n=new e.Database,r=!0,a()},get raw(){return n}}}const TS=`/* The web version's HUD layer over the world's scripts/ui.js (which stays as Spawn has it).\r
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
`,gr=Object.assign({"/world/scripts/arrival.js":()=>De(()=>import("./arrival-CKezWjuD.js"),__vite__mapDeps([0,1,2])),"/world/scripts/bank.js":()=>De(()=>import("./bank-CCRVHnGB.js"),__vite__mapDeps([1,2])),"/world/scripts/camera.js":()=>De(()=>import("./camera-CFdr3yOD.js"),[]),"/world/scripts/db.js":()=>De(()=>import("./db-BH8DPWPJ.js"),__vite__mapDeps([3,2])),"/world/scripts/ground.js":()=>De(()=>import("./ground-b0nUTt3G.js"),[]),"/world/scripts/joust-camera.js":()=>De(()=>import("./joust-camera-Fg9LmHPp.js"),[]),"/world/scripts/jouster.js":()=>De(()=>import("./jouster-B1JpTUK7.js"),__vite__mapDeps([4,5,2,1])),"/world/scripts/lib/color.js":()=>De(()=>import("./color-DDSg_o2D.js"),[]),"/world/scripts/lib/econ.js":()=>De(()=>import("./econ-Deg9OsSu.js").then(i=>i.I),[]),"/world/scripts/look-default.js":()=>De(()=>import("./look-default-BibdNaYP.js"),[]),"/world/scripts/player.js":()=>De(()=>import("./player-CqzJShkt.js"),__vite__mapDeps([6,7,8,9])),"/world/scripts/tex-hero.js":()=>De(()=>import("./tex-hero-D9FSdSdV.js"),__vite__mapDeps([8,7,9])),"/world/scripts/tex-lance.js":()=>De(()=>import("./tex-lance-h9_Q8DQT.js"),[]),"/world/scripts/tex-meadow.js":()=>De(()=>import("./tex-meadow-CQRPL3Pn.js"),__vite__mapDeps([10,7,9])),"/world/scripts/tex-sky.js":()=>De(()=>import("./tex-sky-H7hQEGu6.js"),__vite__mapDeps([11,7,9])),"/world/scripts/tex-soil.js":()=>De(()=>import("./tex-soil-6tL0S4Gb.js"),__vite__mapDeps([12,7,9])),"/world/scripts/tex-tilt.js":()=>De(()=>import("./tex-tilt-DATa2CU9.js"),[]),"/world/scripts/tileset-ground.js":()=>De(()=>import("./tileset-ground-dAb9Cutk.js"),__vite__mapDeps([13,7])),"/world/scripts/tileset-sand.js":()=>De(()=>import("./tileset-sand-D3oqsxai.js"),[]),"/world/scripts/ui.js":()=>De(()=>import("./ui-CTWhMYA8.js"),__vite__mapDeps([14,5,2]))}),It=new URLSearchParams(location.search),AS=new Set(["rivals","ranked","gamba","armory","forge","market","season"]),RS="teste-justa",Yn=It.has("modal"),lf={fight:"rivals",rankedFind:"ranked",gambaBet:"bet"},Gl="justa-web:";function cs(i,e){try{if(e===void 0)return JSON.parse(localStorage.getItem(Gl+i)??"null");localStorage.setItem(Gl+i,JSON.stringify(e))}catch{return null}return e}function CS(){let i=cs("user");return(!i||It.has("fresh"))&&(i="web_"+Array.from(crypto.getRandomValues(new Uint8Array(8)),e=>e.toString(16).padStart(2,"0")).join(""),cs("user",i),cs("state",{})),i}function PS(i=40){return new Promise(e=>{const t=[];let n=0;const r=s=>{n&&t.push(s-n),n=s,t.length<i?requestAnimationFrame(r):e(t.sort((a,o)=>a-o)[Math.floor(i/10)])};requestAnimationFrame(r)})}async function LS(){var fe,J,te,se,pe,_e,Re,ee;const i=PS(),e=await Hp(It.get("place")??void 0,{web:!It.has("spawn")}),t=new Set((It.get("hide")??"").split(",").filter(Boolean));e.placements=e.placements.filter(G=>!t.has(G.id));const n=e.place.atmosphere??{},r=document.getElementById("stage"),s=(fe=n.look)!=null&&fe.script?await gr["/world/"+n.look.script]():null,a=document.getElementById("view"),o=Number(It.get("scale")),c=new zx(a,{toneMapping:((J=n.look)==null?void 0:J.toneMapping)??"neutral",look:Ex(s,(te=n.look)==null?void 0:te.params),scale:o>0?o:null});((se=e.render)==null?void 0:se.placeSky)!==!1&&c.setSky(n.sky),i.then(G=>{G>0&&(c.refresh=Math.max(4,Math.min(c.refresh??G,G)))});const l=()=>c.resize(r.clientWidth,r.clientHeight);l(),addEventListener("resize",l);const h=Yn?[]:e.placements.filter(G=>{var me;return(me=G.sprite)==null?void 0:me.texture});await Promise.all(h.map((G,me)=>c.addSprite(G,me)));const f=e.place.terrain;!Yn&&(f==null?void 0:f.kind)==="tilemap"&&f.draw!==!1&&!It.has("notiles")&&await c.setTiles(f,await gr["/world/"+f.generator]());const d=await wS();gr["/world/scripts/db.js"]&&await d.migrate((await gr["/world/scripts/db.js"]()).migrate);const m=new Kx({roomId:RS,scripts:gr,gravity:e.place.gravity,groundY:0,sql:G=>d.sqlFor(G)});m.worldToScreen=G=>c.worldToScreen(G);const x=await sc(e.config.player),y=CS(),_=cs("state")??{},g=m.spawn("player/"+y,{...x,state:{...x.state??{},..._},userId:y,displayName:cs("name")??"Knight",isLocal:!0}),R=m.entities.get(g),A=new eS(e.config.inputs);Yn||A.bind(a),m.inputs.set(g,()=>A.frame());for(const G of((pe=e.config.engine)==null?void 0:pe.behaviors)??[]){const me=await m.loadModule(G);await m.call(R,me,"onArrive",Hi(R))}const b=Yn?null:new _S(e.sounds);if(m.sinks.playSound=G=>b==null?void 0:b.play(G),b)for(const G of e.placements)(_e=G.audio)!=null&&_e.clip&&b.loop(G.audio);const L=document.getElementById("flash");m.sinks.screenFlash=G=>{L.style.transition="none",L.style.background=(G==null?void 0:G.color)??"#fff",L.style.opacity=String((G==null?void 0:G.intensity)??.4),requestAnimationFrame(()=>{L.style.transition=`opacity ${((G==null?void 0:G.duration)??.2)*1e3}ms ease-out`,L.style.opacity="0"})};let I={until:0,amp:0};m.sinks.screenShake=G=>{I={until:performance.now()+((G==null?void 0:G.duration)??.3)*1e3,amp:((G==null?void 0:G.intensity)??.3)*.25}};const C=await Xx(e.config,Hi(R),{screenAspect:It.get("aspect")==="real"}),D=await gr["/world/"+(((Re=e.config.ui)==null?void 0:Re.render)??"scripts/ui.js")](),M=new gS({ui:D,room:m,player:R,input:A,toScreen:G=>c.worldToScreen(G)}),S=new Qx(c,m,{hideBelow:((ee=e.render)==null?void 0:ee.hideBelowLayer)??null});if(!It.has("spawn")){document.head.insertAdjacentHTML("beforeend",`<style id="web-hud">${TS}</style>`);const G=It.get("village")??"/realm/?back=1";It.has("meter")&&document.documentElement.classList.add("meter");const me=window.econTab,he=It.get("door")==="bet";if(he&&document.documentElement.classList.add("only-bet"),typeof me=="function"){const ve=()=>Yn?parent.postMessage({type:"justa-close"},location.origin):location.assign(G);window.econTab=Ne=>Ne==="home"?ve():he&&Ne!=="gamba"?void 0:me(Ne),me(he?"gamba":AS.has(It.get("door"))?It.get("door"):"rivals"),he&&typeof window.gambaTab=="function"&&window.gambaTab("bet"),It.get("door")==="gamba"&&["bet","stats","lb"].includes(It.get("sub"))&&typeof window.gambaTab=="function"&&window.gambaTab(It.get("sub"))}if(he&&!Yn){const{startBet:ve}=await De(async()=>{const{startBet:Ne}=await import("./bet-CJfys92V.js");return{startBet:Ne}},__vite__mapDeps([15,2]));ve({room:m,player:R,village:G})}if(Yn){document.documentElement.classList.add("modal");const{startModal:ve}=await De(async()=>{const{startModal:we}=await import("./modal-BQ_FjLC1.js");return{startModal:we}},__vite__mapDeps([16,5,2])),Ne=()=>parent.postMessage({type:"justa-close"},location.origin),Ve=ve({room:m,player:R,door:It.get("door"),place:It.get("building"),onClose:Ne});addEventListener("message",we=>{const ct=we.data;we.origin!==location.origin||(ct==null?void 0:ct.type)!=="justa-door"||Ve.open(ct.door,ct.place)});const ye=window.sendAction;window.sendAction=(we,...ct)=>lf[we]?top.location.assign(`/realm/play/?door=${lf[we]}`):ye(we,...ct),addEventListener("pageshow",we=>{we.persisted&&location.reload()})}}let N="";const k=()=>{const G=JSON.stringify(R.state);if(G!==N){N=G;try{localStorage.setItem(Gl+"state",G)}catch{}}};setInterval(k,2e3),addEventListener("pagehide",k);const F=It.has("prof")?{n:0,room:0,rig:0,views:0,stage:0,hud:0,frame:0}:null,$=(G,me)=>{const he=performance.now();return F&&(F[G]+=he-me),he};let ae=performance.now();function Z(G){const me=Math.max(0,(G-ae)/1e3),he=Math.min(.1,me);ae=G;let ve=performance.now();const Ne=ve;if(m.advance(me),ve=$("room",ve),Yn){requestAnimationFrame(Z);return}c.govern(G-(Z.prev??G)),Z.prev=G;const Ve=C.update(he,m.nowMs,c.aspect);G<I.until&&(Ve.x+=(Math.random()-.5)*I.amp,Ve.y+=(Math.random()-.5)*I.amp),ve=$("rig",ve),S.sync(),ve=$("views",ve),c.frame(Ve,he),ve=$("stage",ve),M.frame(G),ve=$("hud",ve),F&&(F.frame+=ve-Ne,F.n++),requestAnimationFrame(Z)}F&&(window.__prof=F),requestAnimationFrame(Z),window.__justa={world:e,stage:c,rig:C,room:m,player:R,hud:M,db:d,input:A,audio:b},document.documentElement.classList.add("justa-ready"),Yn&&parent.postMessage({type:"justa-ready"},location.origin)}LS().catch(i=>{console.error(i),document.getElementById("fault").textContent=String((i==null?void 0:i.stack)??i)});export{Za as c,dS as m};

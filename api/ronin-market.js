// The Ronin Market's live listings for the village's Market (justa-web src/modal/modal.js, tab "Ronin Market"). The
// market's public GraphQL (marketplace-graphql.skymavis.com) answers only its own sites inside a browser (no
// Access-Control-Allow-Origin for others), so the site asks it here and the edge keeps the answer 30 s. Only the
// collections named below; nothing is written anywhere. Rafael, 17/10: "teria como no market aparecer os nfts do ronin
// marketplace em tempo real, com preço" ... "monta com ronkeverse".
const GRAPHQL = "https://marketplace-graphql.skymavis.com/graphql";
const COLLECTIONS = {
  ronkeverse: { address: "0x810b6d1374ac7ba0e83612e7d49f49a13f1de019", name: "Ronkeverse" },
};
// the payment tokens a listing can ask (the market's own list, @sky-mavis/mavis-market-core)
const TOKENS = {
  "0xe514d9deb7966c8be0ca922de8a064264ea6bcd4": { symbol: "RON", decimals: 18 }, // WRON: the market's RON
  "0xc99a6a985ed2cac1ef41640596c5a5f9f4e19ef5": { symbol: "WETH", decimals: 18 },
  "0x0b7007c13325c48911f73a2dad5fa5dcbf808adc": { symbol: "USDC", decimals: 6 },
};
const QUERY = `query($address: String, $from: Int!, $size: Int!) {
  erc721Tokens(tokenAddress: $address, from: $from, size: $size, sort: PriceAsc, auctionType: Sale) {
    total
    results { tokenId name cdnImage attributes order { hash currentPrice paymentToken expiredAt } }
  }
}`;

/** An amount in a token's smallest unit → a number with up to 4 decimals. */
function amount(raw, decimals) {
  const v = BigInt(raw), unit = 10n ** BigInt(decimals), cents = (v * 10000n) / unit;
  return Number(cents) / 10000;
}

module.exports = async function handler(req, res) {
  const key = String(req.query.collection || "ronkeverse"), c = COLLECTIONS[key];
  res.setHeader("Access-Control-Allow-Origin", "*");
  if (!c) { res.setHeader("Cache-Control", "no-store"); return res.status(404).json({ error: "unknown collection" }); }
  const from = Math.max(0, Math.min(5000, parseInt(req.query.from, 10) || 0));
  const size = Math.max(1, Math.min(50, parseInt(req.query.size, 10) || 48));
  try {
    const r = await fetch(GRAPHQL, { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ query: QUERY, variables: { address: c.address, from, size } }) });
    const body = await r.json();
    const data = body && body.data && body.data.erc721Tokens;
    if (!data) throw new Error((body && body.errors && body.errors[0] && body.errors[0].message) || "no data");
    const items = data.results.filter((t) => t.order && TOKENS[t.order.paymentToken]).map((t) => {
      const tok = TOKENS[t.order.paymentToken];
      return { id: t.tokenId, name: t.name, image: t.cdnImage, body: (t.attributes && t.attributes.Body && t.attributes.Body[0]) || null,
        price: amount(t.order.currentPrice, tok.decimals), symbol: tok.symbol, until: t.order.expiredAt, order: t.order.hash };
    });
    res.setHeader("Cache-Control", "public, s-maxage=30, stale-while-revalidate=60");
    return res.status(200).json({ collection: key, name: c.name, total: data.total, from, size, items, at: Date.now() });
  } catch (e) {
    res.setHeader("Cache-Control", "no-store");
    return res.status(502).json({ error: "The Ronin Market did not answer", detail: String(e && e.message || e).slice(0, 200) });
  }
};

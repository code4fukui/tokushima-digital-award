import { fetchOrLoad } from "https://js.sabae.cc/fetchOrLoad.js";
import { HTMLParser } from "https://js.sabae.cc/HTMLParser.js";

// スクレイピングしたいURL
const url = "https://www.pref.tokushima.lg.jp/ippannokata/sangyo/ict/7235964/";

// 1度取得したらtemp/にキャッシュする
const html = await fetchOrLoad(url);

// HTMLを解析！
const dom = HTMLParser.parse(html);

// classがnoteになっているdivタグの中のh2タグを全部取得
const h3s = dom.querySelectorAll("div.note h3");

// 受賞作品一覧
const items = h3s.map(i => i.text.trim());

// 受賞作品一覧表示
console.log(items, items.length);

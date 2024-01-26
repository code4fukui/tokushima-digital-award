import { fetchOrLoad } from "https://js.sabae.cc/fetchOrLoad.js";
import { HTMLParser } from "https://js.sabae.cc/HTMLParser.js";
import { CSV } from "https://js.sabae.cc/CSV.js";

// スクレイピングしたいURL
const srcurl = "https://www.pref.tokushima.lg.jp/ippannokata/sangyo/ict/7235964/";

// 1度取得したらtemp/にキャッシュする
const html = await fetchOrLoad(srcurl);

// HTMLを解析！
const dom = HTMLParser.parse(html);

// classがnoteになっているdivタグの直下(>)のdivタグを全部取得
const items = dom.querySelectorAll("div.note > div");

// データを抽出
const fiscalyear = 2023;
const awardname = "第3回 デジタルとくしま大賞"

let award = null;
let no = null;
let title = null;
const data = [];
for (const item of items) {
  const h2 = item.querySelector("h2");
  if (h2) {
    award = awardname + " " + h2.text;
    continue;
  }
  const h3 = item.querySelector("h3");
  if (h3) {
    const s = h3.text.trim();
    const n = s.indexOf("]");
    no = s.substring(4, n);
    title = s.substring(n + 2);
    continue;
  }
  const sentence = item.querySelector(".sentence");
  if (sentence) {
    if (!title) continue;
    const s = sentence.text;
    const n = s.indexOf("制作者");
    const n2 = s.indexOf("様", n + 3);
    const author = s.substring(n + 4, n2).trim();

    const a = sentence.querySelector("a");
    const url = a?.getAttribute("href");
    data.push({ fiscalyear, award, no, title, author, url, srcurl });
  }
}
console.log(data, data.length);
await Deno.writeTextFile("data/tokushima-digital-award-2024.csv", CSV.stringify(data));

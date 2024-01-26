# 徳島デジタルアワード

## 受賞作品オープンデータ

- [data/tokushima-digital-award-2024.csv](data/tokushima-digital-award-2024.csv)

### 使用例

```js
import { CSV } from "https://js.sabae.cc/CSV.js";

const url = "https://code4fukui.github.io/tokushima-digital-award/data/tokushima-digital-award-2024.csv";
const data = await CSV.fetchJSON(url);
console.log(data);
document.body.textContent = JSON.stringify(data);
```
[RUN on ss.sabae.cc](https://ss.sabae.cc/#1428)

## 出典

- [第3回「デジタルとくしま大賞」受賞作品の発表について｜徳島県ホームページ](https://www.pref.tokushima.lg.jp/ippannokata/sangyo/ict/7235964/)

## 解説

- [地方x創造的デジタル人材、第3回「デジタルとくしま大賞」受賞作品をオープンデータ化する方法](https://fukun.jig.jp/4202)

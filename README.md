# 徳島デジタルアワード

## 受賞作品オープンデータ

- [tokushima-digital-award-2024.csv](tokushima-digital-award-2024.csv)

### 使用例

```js
import { CSV } from "https://js.sabae.cc/CSV.js";

const data = await CSV.fetchJSON("https://code4fukui.github.io/tokushima-digital-award/data/tokushima-digital-award-2024.csv");
console.log(data);
document.body.textContent = JSON.stringify(data);
```

## 出典

- [第3回「デジタルとくしま大賞」受賞作品の発表について｜徳島県ホームページ](https://www.pref.tokushima.lg.jp/ippannokata/sangyo/ict/7235964/)

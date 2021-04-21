# Scriptable
&emsp;JavaScriptを使ってUIを操作したりウィジェットを作ったり色々できるiOS向けアプリです。

## Libraries

### [iTunesSearchAPI](./iTunesSearchAPI)
[iTunes Search API](https://affiliate.itunes.apple.com/resources/documentation/itunes-store-web-service-search-api/)のラッパーライブラリです。
<details>
<summary>Usage</summary>

```javascript
const searcher = importModule("iTunesSearchAPI");

// lookup
// https://itunes.apple.com/lookup?id=1548597148&country=US&lang=en_US
const lookup_result = await searcher.lookup({
  id: "1548597148",
  country: "US",
  lang: "en_US"
});
log(JSON.stringify(lookup_result, null, 2));

// search
// https://itunes.apple.com/search?term= %E3%82%A8%E3%83%B4%E3%82%A1%E3%83%B3%E3%82%B2%E3%83%AA%E3%82%AA%E3%83%B3&country=JO&lang=ja_JP
const search_result = await searcher.search({
  term: "エヴァンゲリオン",
  country: "JP",
  lang: "ja_JP"
});
log(JSON.stringify(search_result, null, 2));
```
</details>

### [Qiitable](./Qiitable)
[QiitaAPIv2](https://qiita.com/api/v2/docs)の[Scriptable](https://scriptable.app)向けラッパーライブラリです。
<details>
<summary>Usage</summary>

```javascript
const Qiitable = importModule("Qiitable");
const TOKEN = "___YOUR_TOKEN___"
const qiita = new Qiitable(TOKEN);
const data = await qiita.loadJSON(
  "GET",
  "/api/v2/users/Qiita"
);
console.log(JSON.stringify(data, null, 2));
```
</details>
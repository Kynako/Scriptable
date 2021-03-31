# iTunesSearchAPI.js
[iTunes Search API](https://affiliate.itunes.apple.com/resources/documentation/itunes-store-web-service-search-api/)のラッパーライブラリです。

## Usage
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

## Description
### `static lookup(param)`
`https://itunes.apple.com/lookup`にクエリパラメータを加えてGETリクエストをします。

#### 返り値
`Promise<object>`。 GETリクエストをした際のresponseとJSONを返します。→ [#返り値について](#返り値について)

#### 引数
- `param`: クエリパラメータを生成する元になるオブジェクト。→ [#paramについて](#paramについて)

### `static search(param)`
`https://itunes.apple.com/search`にクエリパラメータを加えてGETリクエストをします。

#### 返り値
`Promise<object>`。 GETリクエストをした際のresponseとJSONを返します。→ [#返り値について](#返り値について)

#### 引数
- `param`: クエリパラメータを生成する元になるオブジェクト。 → [#paramについて](#paramについて)

### 返り値について
大まかな構造は以下のとおりです。
```javascript
{
  response: {RESPONSE OBJECT},
  json: {JSON PARSED INTO AN OBJECT}
}
```
*`[request]`は各メゾット内で生成したRequestインスタントとします。
- `response`: `[request].response`
-  `json`: `[request].loadJSON()`の返り値

<details>
<summary>具体例</summary>

```javascript
/* 
const searcher = importModule("iTunesSearchAPI");

const lookup_result = await searcher.lookup({
  id: "1548597148",
  country: "US",
  lang: "en_US"
});
log(JSON.stringify(lookup_result, null, 2));
*/

{
  "response": {
    "statusCode": 200,
    "url": "https://itunes.apple.com/lookup?id=1548597148&country=US&lang=en_US",
    "mimeType": "text/javascript",
    "textEncodingName": "utf-8",
    "headers": {
      "Content-Length": "637",
      "Content-Type": "text/javascript; charset=utf-8",
      ...
    },
    "cookies": null
  },
  "json": {
    results: [
      {
        "artworkUrl60": "https://is5-ssl.mzstatic.com/image/thumb/Music124/v4/2c/e7/c0/2ce7c001-ce2b-ea8a-df4e-c3e1937c79bd/source/60x60bb.jpg",
        "wrapperType": "track",
        "country": "USA",
        "isStreamable": true,
        ...
      },
      ...
    ]
  }
```
</details>

## License
[MIT license](/LICENSE)
# Qiitable
[QiitaAPIv2](https://qiita.com/api/v2/docs)の[Scriptable](https://scriptable.app)向けラッパーライブラリです。

## Usage
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

## License
[MIT license](/LICENSE)
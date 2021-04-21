# Qiitable
[QiitaAPIv2](https://qiita.com/api/v2/docs)の[Scriptable](https://scriptable.app)向けラッパーライブラリです。
[QiitaWidget/main/v1/Qiita.js](https://github.com/Kynako/QiitaWidget/blob/main/v1/QiitaWidget.js)を書き直しました。

## Usage
[Qiitable.js](/Qiitable.js)を`iCloudDrive/Scriptable/`の下に配置してください。
```
iCloud Drive/
└ Scriptable/
  └ Qiitable.js
```

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

## Description
### `new Qiitable(access_token)`
Qiitableのインスタンスを生成します。`access_token`は個人用アクセストークンなどを使用してください。

#### 返り値
Qiitableのインスタンスです。

#### 引数
- `access_token`: アクセストークン。

### `loadJSON(method, endpoint, param?)`
指定したエンドポイントにリクエストします。

#### 返り値
responseオブジェクトとjsonオブジェクトを含む `Promise`が返されます。responseオブジェクトはRequestAPIのresponseプロパティの内容です。詳しい内容は[Scriptable公式ドキュメントのrequest/#response](https://docs.scriptable.app/request/#response)を参照してください
```javascript
{
  response: {...},
  json: {...}
}
```
#### 引数
- `method`: httpメゾットを指定する文字列です。
- `endpoint`: APIのエンドポイントを指定します。
  - e.g.) `api/v2/users/Kynako`
- `param?`: クエリパラメータまたははリクエストボディに含めるパラメータ(任意)です。オブジェクトで指定します。

## License
[MIT license](/LICENSE)
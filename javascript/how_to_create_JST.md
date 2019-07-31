# 日本標準時（JST）の作り方

JavaScriptの `Date` クラスは、スクリプトを実行したマシンのローカルタイムゾーンが使用される。
例えば、アプリは日本標準時を想定しているにも関わらず、インドで実行したらインド時間になったりするのである。

これを避ける方法。

## `Date.getTimeZoneOffset` による時刻修正

まず、今取得できる時刻から、タイムゾーンのオフセット分だけ時刻を戻してUTC時刻を作り出す。
`Date.getTimezoneOffset()` は、ローカルタイムに対するUTC時刻からの時差を分単位で返してくれる。
Dateのコンストラクタにはミリ秒を渡す必要があるので `60*1000` をかけることで変換。

その上で、任意のタイムゾーンのオフセット分を足してやれば良い。

```js
const jstOffsetMs = (-9) * 60 * 60 * 1000;
const localOffsetMs = (new Date().getTimezoneOffset()) * 60 * 1000;
const todayJST = new Date(Date.now() - localOffsetMs + jstOffsetMs);
```

## 参考

http://jeana.hatenablog.jp/entry/2017/02/05/232943

# `request-promise` におけるShift-JISの文字化けについて

node.jsによるウェブサイトのスクレイピングで `request-promise` と `cheerio` を使った。
ただし日本語のShift-JISエンコーディングなウェブサイトをスクレイピングすると文字化けが発生した。

## `encoding: null` 

文字化けの1つの要因は、requestが内部的にUTF8でエンコーディングしていることによる。
`request-promise.get()` に渡す `option` にて、 `encoding: null` を明示的に指定することで無変換で受け取ることができる。

```js
const option = {
  uri: 'http://hogehoge.com',
  encoding: null,
}
```

## `iconv` による変換

前述の `encoding: null` 指定で素の状態でデータを受け取ることができるようになる。
受け取ったデータをUTF-8に変換して、 `cheerio` に渡すとうまくいった。

`cheerio` へのデータの受け渡しは `transform` の関数で行われているので、ここに変換処理を追加する。

```js
const option = {
    uri: 'http://hogehoge.com',
    encoding: null,
    transform: (body) => {
        const iconv = Iconv.Iconv('SHIFT_JIS', 'UTF-8');
        const utf8Body = iconv.convert(body).toString();
        return cheerio.load(utf8Body);
    }
};
```

# クラスのインポート・エクスポート

ファイル分割をする上で必要になってくる。クラスや定数、関数も対象となる。

exportする側（base.js）

```js:base.js
class Base {
  ...
}

export default Base;
```

importする側（main.js）

```js
// from以降はディレクトリ構成に従う
import Base from './base';

class Human extends Dog {
  ...
}
```

## デフォルトエクスポート

`export default` でやる方法。対象のファイルをインポートした時点で使えるようになる。このため、export/importで名前の指定が誤っていても問題にはならない。ただし、1ファイルに対して1つまでしかできない。

```js
const text1 = "test01";
const text2 = "test02";

export default test01;
export default test02;  // だめ
```

## 名前付きエクスポート

`export { name };` でやる方法。

```js
const text1 = "test01";
const text2 = "test02";

export { test01, test02 };
```

```js
import { test01, test02 } from './hoge.js';
```

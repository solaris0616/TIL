# クラスのインポート・エクスポート

ファイル分割をする上で必要になってくる。

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

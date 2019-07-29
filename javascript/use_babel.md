# Babel

nodeはES6に完全に対応できていない。
そのため、ES6をnodeが理解できる形に翻訳する必要がある。
`babel` はここでいう翻訳機にあたり、トランスパイラと呼ばれる。

> コンパイラなの？　トランスパイラなの？　という部分には有志が調べてくれている
> https://qiita.com/soarflat/items/a9e5bf0be938ddc59d1f

## npm初期化

まず作業ディレクトリに移動して、 `npm init -y` する

```bash
cd work/babel-test
npm init -y
```

`package.json` が出来上がる。これ大事。

```json
{
  "name": "babel-test",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

## babelをインストール

```bash
npm install --save-dev @babel/core @babel/cli
npm install @babel/preset-env --save-dev
```

## babelを使う

`babel.config.js` を作業ディレクトリ直下に作成する。
`.babelrc` での設定方法もあるが、Babel自身もjsでやっているそうなので。

```js
const presets = [
  [
    "@babel/env",
  ],
];

module.exports = { presets };
```

その後、ES6な構文を使うjsをトランスパイラする

```bash
./node_modules/.bin/babel src --out-dir dist
```

## 出来上がりを見比べる

import, export, template-literal を使ってみた。まずは素の状態。

```js
const name = "Pikachu";
export {name};
```

```js
import {name} from './first';
console.log(`Hello ${name}-san`);
```

これがこうなる

```js
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.name = void 0;
var name = "Pikachu";
exports.name = name;
```

```js
"use strict";

var _first = require("./first");

console.log("Hello ".concat(_first.name, "-san"));
```

これでnodeで実行できる

```
node ./dist/second.js
```

## package.jsonに登録する

`npm run 名前` でbabelのトランスパイルを呼び出せるようにする

```diff
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
+   "build": "./node_modules/.bin/babel src --out-dir dist"
  },
```

これで `npm run build` を叩くとトランスパイルされるようになる

```bash
# npm run build

> babel-test@1.0.0 build /Users/tongari/work/babel-test
> babel src --out-dir dist

Successfully compiled 2 files with Babel.
```

# いろいろな関数の書き方

## `const` への代入形式

引数はカンマで区切っていくつでも。型定義がないのが特徴的。

```js
const greet = function(name) {
  console.log(`Hello ${name}-san!`);
};

greet("Alice");
```

## アロー関数

ES6で追加された定義方法。

```js
const greet = (name) => {
  console.log(`Hello ${name}-san!`);
}

greet("Alice");
```

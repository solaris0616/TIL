# 比較演算子

* 等値演算子 `==` と、同値演算子 `===` がある
* 等値演算子で比較する場合には、暗黙の型変換が存在する
* https://so-zou.jp/web-app/tech/programming/javascript/grammar/operator/equality-identity.htm

```js
console.log(true == 1);
// => true (等値演算子)

console.log(true === 1);
// => false (同値演算子)

console.log(1 === 1);
// => true (同値演算子)
```

* https://qiita.com/uhyo/items/d99f536332e03442c432
* > 実際にはほとんど `===` が使われます

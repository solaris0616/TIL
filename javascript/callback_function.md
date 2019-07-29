# コールバック関数

引数に渡される関数のことを言うらしい。いよいよ複雑になってきた。

```js
const printDog = () => {
  console.log("Doge");
};

const callback = (call) => {
  call();
}

call(printDog);
// or
call( () => {
  console.log("Cat");
});
```

# e.g.

配列操作が取り上げられているが、他にも色々あるのだと思う

## forEach

```js
const names = ["taro", "jiro", "saburo"]:

names.forEach( (name) => {
  console.log(name);
});
```

## find

コールバック関数の中で **検索対象の条件** を設定する。returnしたい値そのものではないことに注意。

```js
const numbers = [1, 3, 5, 7, 9];

const findData = numbers.find((num) => {
  return num > 3;
});
```

## map

配列すべてに対して操作をした結果を配列で返す

```js
const numbers = [1, 3, 5];

const doubleNumbers = numbers.map(num => { return num * 2; });
console.log(doubleNumbers);
```

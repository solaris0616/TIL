# チュートリアル

## greeter.ts を作る

```typescript
function greeter(person: string) {
    return "Hello " + person;
}
let user = "solaris0616";
console.log(greeter(user));
```

## コンパイルして TS -> JS にする

以下を `greeter.ts` と同じディレクトリで実行すると、 `greeter.js` が出来上がる

```bash
tsc greeter.ts
```

## 実行してみる

```bash
node greeter.js
```

## コンパイルエラー

`let user` を `string` 以外を入れてみるとエラーになる。Linterで事前に気づけそう。

```bash
greeter.ts:5:21 - error TS2345: Argument of type 'number' is not assignable to parameter of type 'string'.

5 console.log(greeter(user));
                      ~~~~
```

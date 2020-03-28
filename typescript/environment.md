# 開発環境

1. Homebrew のインストール
2. `nodebrew` のインストール
3. `node` のインストール
4. TypeScript のインストール

## Homebrew　のインストール

https://brew.sh/index_ja

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
```

## `nodebrew` のインストール

```bash
brew install nodebrew
echo 'export PATH=$HOME/.nodebrew/current/bin:$PATH' > ~/.zprofile
```

## `node` のインストール

```bash
nodebrew setup
nodebrew install stable
nodebrew use stable
```

## TypeScriptのインストール

```bash
yarn init -y
yarn add -D typescript
```

package.jsonに `start` を定義

```json
{
  ...
  "scripts" : {
    "start": "tsc -p . && node ."
  }
}
```

## Hello world

index.ts

```typescript
console.log("Hello world!");
```

command line

```bash
yarn start
```

output

```bash
ynagafuchi@bonjiri ts-ng-tutorial % yarn start
yarn run v1.22.4
$ tsc -p . && node .
Hello world!
✨  Done in 1.94s.
```

## 参考
https://qiita.com/koinori/items/ed13ab8bbc6edcc5deb9

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
npm -g install typescript
```

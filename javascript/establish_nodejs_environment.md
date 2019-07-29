# node.js 開発環境の構築

macOS Mojave 10.14.6

## Homebrew確認

`brew -v` でバージョン確認。必要に応じて `brew update` で更新しておく。

```bash
# brew -v
Homebrew 2.1.8
Homebrew/homebrew-core (git revision f25d; last commit 2019-07-28)
```

## nodebrew のインストール

nodebrewはnodeのバージョン管理をするツール。
nvm (Node Version Manager) も有名。
nvmはbash最適化されているとのことなので、zsh使いはnodebrewがいいかもしれない。

```bash
brew install nodebrew
echo 'export PATH=$HOME/.nodebrew/current/bin:$PATH' >> .zprofile
```

`nodebrew -v` でバージョン確認ができればOK

```bash
# nodebrew -v                                                                                                                      [/Users/tongari]
nodebrew 1.0.1
```

## node.js のインストール

stable版のバイナリをインストールする

```bash
nodebrew setup
nodebrew install stable
nodebrew use stable
```

`node -v` でバージョン確認ができればOK

```bash
# node -v
v12.7.0
```

nodeと同時にnpmも導入される。 `npm --version`  で確認できる

```bash
# npm --version
6.10.0
```

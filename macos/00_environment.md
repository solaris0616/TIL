# Mac環境構築

### ホスト名の変更

https://qiita.com/HOKARI_Yutaka/items/8047e5ec763adcac2563

### Google Chrome

ホームページからダウンロードする

### Google日本語入力

ホームページからダウンロードする

### Homebrew

Terminalで実行。Xcodeも同時にインストールされる。

```
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

### iTerm2

ホームページからダウンロードする
https://www.iterm2.com/

カラーテーマは `iceberg` が好み
https://github.com/Arc0re/Iceberg-iTerm2

### cask

```
brew install cask
```

### Git

```
brew install git
```

SSH鍵を作成してGitHubに登録しておく

```
ssh-keygen -t rsa -C "メールアドレス"
```

### zsh

```
brew install zsh
brew install zplug
```

ログインシェル（ターミナルを開いたときに使うシェル）を `zsh` に変更するには `/etc/shells` を編集する

```
# List of acceptable shells for chpass(1).
# Ftpd will not allow users to connect who are not using
# one of these shells.

/bin/bash
/bin/csh
/bin/ksh
/bin/sh
/bin/tcsh
/bin/zsh
/usr/local/bin/zsh  # 追加
```

その後 `chsh` で変更

```
chsh -s /usr/local/bin/zsh
```

### .zshrc


# Mac環境構築

## 設定

### CapsLockキー置き換え

CapsLockをControlに置き換えた

### ホスト名の変更

https://qiita.com/HOKARI_Yutaka/items/8047e5ec763adcac2563

## ターミナル周り

### iTerm2

* https://www.iterm2.com/
* カラーテーマは `iceberg` が好み
* https://github.com/Arc0re/Iceberg-iTerm2

### Homebrew

```
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

### cask

```
brew install cask
```

### Git

```
brew install git

# SSH鍵を作成してGitHubに登録しておく
ssh-keygen -t rsa -C "メールアドレス"
```

### zsh

```
brew install zsh
brew install zplug
```

### ログインシェル変更

```
sudo vi /etc/shells

---
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

* https://github.com/solaris0616/dotfiles

## エディタ

### SublimeText3

* https://www.sublimetext.com/
* VSCodeと迷ったが、まずは使い慣れたほう
* キーショートカットがLinuxのものと違うので注意
* https://qiita.com/seafield1979/items/56d4833dae818dcf85ae

### SublimeText plugin

* Package control
* BracketHighlighter
* All Autocomplete
* Materialize theme

### ターミナルから起動する

https://reasonable-code.com/sublimetext-terminal/

```
ln -s "/Applications/Sublime Text.app/Contents/SharedSupport/bin/subl" /usr/local/bin/subl
```

## その他アプリケーション

### Alfread

* https://www.alfredapp.com/
* 呼び出しキーは `Control double tap` にした

### Sublime Merge

* https://www.sublimemerge.com/
* Gitクライアント。SublimeTextと連携できてよい。
* ターミナルから起動するには以下

```
ln -s "/Applications/Sublime Merge.app/Contents/SharedSupport/bin/smerge" /usr/local/bin/smerge
```

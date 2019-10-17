# rbenvによるRuby開発環境の構築

Homebrewで `rbenv` と `ruby-build` をインストールする

```
brew install rbenv ruby-build
```

rbenv の初期化スクリプトを `.bash_profile` へ追加する

```
echo 'eval "$(rbenv init -)"' >> ~/.bash_profile
```

インストール可能なRubyバージョンの一覧

```
rbenv install --list
```

Rubyのインストール（記載時点の安定版は 2.6.5）

```
rbenv install 2.6.5
```

インストール済みのRubyのバージョンを確認する

```
rbenv versions
```

インストールした特定のバージョンのRubyを使用できるよう設定する

```
rbenv global 2.6.5
```

特定のディレクトリ配下でのみ特定のRubyバージョンを使用するには、 `local` を指定する

```
cd workspace
rbenv local 2.6.5
```

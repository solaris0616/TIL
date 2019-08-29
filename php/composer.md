# Composer

https://getcomposer.org/

PHPのパッケージマネージャ。autoloadという機能も持っている。JSにおける `npm` や、Pythonにおける `pip` に近い？

## Install

phpをコーディングしている環境にインストールする。動かしている側（例えばDockerで構築したLAMP環境とか）にはいらない。

下記コマンドをプロジェクトのルートディレクトリで実行する。

```bash
php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');"
php -r "if (hash_file('sha384', 'composer-setup.php') === 'a5c698ffe4b8e849a443b120cd5ba38043260d5c4023dbf93e1558871f1f07f58274fc6f4c93bcfd858c6bd0775cd8d1') { echo 'Installer verified'; } else { echo 'Installer corrupt'; unlink('composer-setup.php'); } echo PHP_EOL;"
php composer-setup.php
php -r "unlink('composer-setup.php');"
```

## Usage

### 初期化

なにはともあれ初期化。 `git init` するように。色々聞かれるがEnter押しっぱなしで無視しても問題なかった。勝手に `.gitignore` まで作ってくれるので優しい。

```
composer init
```

### パッケージの検索

ここでの `PACKAGE_NAME` は、例えば `phpQuery` のようなパッケージ名そのもの。

```
composer search PACKAGE_NAME
```

### パッケージのインストール

ここでの `PACKAGE_NAME` は、例えば `electrolinux/phpquery` のような、searchで出てきたパッケージ名。

```
composer require PACKAGE_NAME
```

### インストールしたパッケージを調べる

```
composer info
```

### インストールしたパッケージをプログラムで使う

`require` で ROOT/vendor/autoload.php を読み込んであげれば良い。

```php
<?php
require_once('./vendor/autoload.php');

$html = file_get_contents('https://www.google.com');
echo phpQuery::newDocument($html)->find("title")->text();
```

### 他人のプロジェクトの依存関係を解決する

誰かのプロジェクトをクローンしてきたとき、composerを使っているプロジェクトであれば `composer.json` が共有される。
以下のコマンドを使うことで、 `composer.json` 記載の関連ライブラリが一気にインストールされる。

```
composer install
```

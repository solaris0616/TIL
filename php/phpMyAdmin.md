# phpMyAdmin

MySQLをブラウザから管理できるクライアントソフト。

## installation

LAMP環境のドキュメントルートに置いて、ブラウザからアクセスすれば良い。

1. phpMyAdminの公式サイトからzipをダウンロードする
2. unzipして適当にリネームしておく
3. LAMP環境のドキュメントルートに置く（/var/www/html配下）
4. http://localhost:8080/phpmyadmin にアクセスする（2. でのリネーム結果に従う）

## usage

### ログイン

* ID: root
* PW: docker-compose.yml で定義したもの

### その他

データベースやテーブルの作成などができる。ここが詳しそう。

https://www.dbonline.jp/phpmyadmin/

## tips

### auto_increment なカラムを追加したい

**A_I** と書いてあるところのチェックを入れる

### "Connection refused" などと言われる

docker-composeでLAMPを立ち上げたときに遭遇した。コンテナ間の通信で `localhost` が使えず、DBコンテナのIPアドレスをhostnameに設定すれば解決した。

> MAMPだとどうなんだろう？

* `docker-compose ps` で動作を確認
* `docker-compose exev SERVICE_NAME bash` などでDBのコンテナに入る
* `cat /etc/hosts` し、IPアドレスを知る
* phpMyAdmin/config.sample.inc.php を *config.inc.php* にリネームする
* L31 `$cfg['Servers'][$i]['host'] = 'localhost';` の部分をDBコンテナのIPアドレスに変更する

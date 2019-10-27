# 環境構築

## 起動ディスクの作成

以下を準備する

* Windows10 PC
* MicroSDカード
* Raspbean Buster Lite
  * https://www.raspberrypi.org/downloads/raspbian/
* Rufus
  * https://rufus.ie/

MicroSDをPCに挿入し、Rufusを起動。Raspbeanのイメージファイルを指定し、書き込む。
電源投入後、piユーザーでログインできるようになる。

## パッケージ更新

```
sudo apt update
sudo apt upgrade
```

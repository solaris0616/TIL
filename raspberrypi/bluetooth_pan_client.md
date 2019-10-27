# BT-PAN を使う

## Bluetoothの有効化

必要なパッケージをインストールする

```
sudo apt install bluetooth pi-bluetooth
```

## ペアリング

周囲のデバイスのスキャンを開始する

```
bluetoothctl
[bluetooth]# scan on
```

ペアリングしたいPCが検出されるとBluetoothのMACアドレスが表示されるので、これにペアリングする

```
[bluetooth]# pair BT-Addr
[bluetooth]# connect BT-Addr
[bluetooth]# trust BT-Addr
```

`connect` の時点で **failed to connect org.bluez.error.failed** というエラーメッセージが出てくる場合は以下で対処する。

```
sudo apt install pulseaudio pulseaudio-module-bluetooth 
pulseaudio -k
pulseaudio --start
```

このあと改めてペアリングすると接続できるようになった

## PANへの接続

`bt-pan` を使う。以下はPC側のネットワークをラズパイに共有する（ラズパイがクライアント）。

```
$ wget https://raw.githubusercontent.com/mk-fg/fgtk/master/bt-pan
$ chmod +x bt-pan
$ sudo chown root: bt-pan
$ sudo mv bt-pan /usr/bin/
$ sudo bt-pan client BT_Addr
```

Windowsでやる場合は事前にネットワーク共有（モバイルホットスポット）をONにしておく必要がある

> https://tech.nikkeibp.co.jp/atcl/nxt/column/18/00095/00022/

## 起動時に再接続する設定

`/etc/rc.local` に記述する

```
bt-pan client BT-Addr
```

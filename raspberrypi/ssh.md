# SSHの有効化

`rasp-config` を起動し、`Interfacing Options` -> `SSH` を選択し、有効化する。

```
sudo raspi-config
```

このあと `ssh-keygen` でSSH鍵を作っておく。

```
ssh-keygen -t rsa
```

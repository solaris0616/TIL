# Docker基本コマンド

## docker

### 動作中のコンテナを確認する

```
docker ps
```

## docker-compose

### 動作中のコンテナに入る

```
docker-compose exec SERVICE_NAME bash
```

`SERVICE_NAME` は `docker-compose.yml` の定義名が入る。

### バックグラウンドで起動する

```
docker-compose up -d
```

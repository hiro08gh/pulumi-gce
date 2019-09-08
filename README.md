# Pulumiを使ってGCEの環境を作るサンプル

Pulumiの導入と今回書いたコードの概要はブログにまとめてあります。

https://code-log.hatenablog.com/entry/2019/09/07/150240

## Stackの作成

dev環境のstackを作成
```
$ pulumi stack init dev
```

stackができているか確認
```
$ pulumi stack ls
```

## GCPの権限関連の設定

GCPからjsonキーをダウンロードして、pathを通す。

```
$ export GOOGLE_CREDENTIALS=$(cat credential.json)
```

## プロジェクトの設定

Pulumi.dev.yamlにプロジェクトのIDを指定。

```
config:
  gcp:project: ""
```

## コードのデプロイ

```
$ pulumi up
```

## プロジェクトの削除

```
$ pulumi destroy
```

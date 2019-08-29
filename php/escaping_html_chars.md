# HTMLにおける特殊文字のエスケープ

HTMLにはいくつかの特殊文字が存在する。例えば **小なり** `<` は `&lt;` と記載する必要がある。
ユーザーがフォームで入力した値をPHPでHTMLとして書き出す時などには、こういった特殊文字を事前にエスケープ処理した上で表示する必要がある。

```php
<?php
$body = '<please espace us!!>';
echo htmlspecialchars($body);
```

`htmlspecialchars` を使えばいいらしい。あと、 echo は実はもっと短くできる。

```php
<?= htmlspecialchars('<please espace us!!>') ?>
```

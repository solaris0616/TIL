# form

## 値の受け取り

`form` タグからpostされる内容は  ` $_POST['key']` の連想配列の形で受け取ることができる。keyには`input`や`textarea`で`name`属性に指定した値が使われる。

### 実装例

#### index.html

```html
<form action="send.php" method="post">
  <input type="text" name="username">
  <input type="submit" value="send">
</form>
```

#### send.php

```php
$username = $_POST['username'];
echo $username;
```


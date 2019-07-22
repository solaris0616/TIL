# 変数

`&変数名: 値;` の形式で定義する。

```scss
$header-color: #454545;

h1 {
  color: $header-color;
}

h2 {
  color: $header-color;
}
```

変数のスコープの概念もある。

```scss
.main {
  $main-font: 15px;
  p {
    /* これはOK */
    font-size: $main-font;  
  }
}

.side {
  /* これはだめ */
  font-size: $main-font;
}
```

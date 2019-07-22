# import

変数だけを定義したファイルを別途作って、必要に応じてimportするような使い方をするらしい。

読み込まれる側は、ファイル名の先頭がアンダーバーでなければならない。区別したいのかな？

## _variables.scss

```scss
$main-color: #556677;
```

## stylesheet.scss

```scss
/* アンダーバーと拡張子は省略可能 */
@import "variables"

h1 {
  color: $main-color;
}
```

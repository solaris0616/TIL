# mixin

`@mixin` で定義したCSSのコードを `@include` すると再利用できる仕組み。

## syntax

```scss
@mixin mixin-name($arg) {
  /* properties or arguments */
  property1: value;
  property2: $arg;
  ...
}
```

## example

```scss
@mixin card-style($color) {
  height: 300px;
  width: 170px;
  background-color: #e8c7d9;
  text-align: center;
  color: $color;
}

.contact-card {
  @include card-style(#118744);
}

.product-card {
  @include card-style(#383838);
  opacity: 0.4
  &:hover {
    opacity: 1.0;
  }
}
```

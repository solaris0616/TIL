# 入れ子

* SassのSCSS記法では、タグ名やクラス名を入れ子で表現することができる
* `&` を使うとネスト構造の親の名前をそのまま引き継げるっぽい
* `&:hover` や `&.class-name` も可能

## before

```css
.footer {
  margin-top: 20px;
}

.footer a {
  color: #ffffff;
}

.footer a:hover {
  color: #000000;
}

.footer a.second {
  font-size: 10px;
}
```

## after

```scss
.footer {
  margin-top: 20px;
a {
    color: #ffffff;
    &:hover {
      color: #000000;
    }
    &.second {
      font-size: 10px;
    }
  }
}
```

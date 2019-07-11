# floatの解除

* `float: left;` などをCSSに指定している子要素を持つ親要素について
* `float` 状態の場合、親は子の存在を認識出ていない
  * 親要素の高さが子要素を内包しないのは、これが原因
* 空タグと `clear: left` でflaot状態を解除できる

```css
.child {
  float: left;
}

.clear {
  clear: left;
}
```

```html
<div class="parent">
  <div class="child""> ... </div>
  <div class="child""> ... </div>
  ...
  <div class="clear"></div>
</div>
```

Ref: https://60pablog.com/css-clear/

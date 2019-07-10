# CSSのアニメーション: transition

* `変化の対象` と `変化にかかる時間` を設定できる

```
div {
  transition: all 1s;
}

div:hover {
  background-color: red;
}
```

* `変化の対象` と `変化にかかる時間` は、それぞれ `transition-property` と `transition-duration` と分けて表現することもできる。
* `transition-delay` でアニメーションの開始タイミングもズラせる
* https://developer.mozilla.org/ja/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions

```
div {
  transition-property: all;
  transition-duration: 1s;
}

div:hover {
  background-color: red;
}
```

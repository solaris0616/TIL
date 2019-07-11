# box-sizing の border-box について

* `box-sizing: border-box` を適用すると、`width`の値に`padding`が含まれるようになる
* `margin`は含まれない
* サイト全体に適用させておくことでレイアウトの管理がしやすくなる（らしい）

```css
* {
  box-sizing: border-box;
}
```

# イベントバインディング

`()` 構文でイベントをメソッドに紐づけることができる

## メソッド実装

```typescript
@Component ({
  ...
})

export class ListComponent {
  ...
  share() {
    window.alert("button click!");
  }
}
```

## ビューの実装

```html
<button (click)="share()">Share</button>
```

# ルーティング

## 飛ばし方

Angular Router を使用する。ルーティングは `app.modules.ts` で定義されてる。

```typescript
    RouterModule.forRoot([
      { path: '', component: ItemListComponent },
      { path: 'items/:itemId', component: ItemDetailsComponent },
    ])
```

ルーティング遷移させるにはアンカーに `routerLink` プロパティを使う

```html
<!-- /items/0 などに遷移する -->
<div *ngFor="let item of items; index as itemId">
  <a [routerLink]="['/items', itemId]">
    Router link example
  </a>
</div>
```

> `a` タグって `anchor (アンカー)` の略だったんだ

## 飛んだ先での情報の使い方

* `ActiveRoute` をインポートする
* コンストラクタに追加し `ActiveRoute` を注入する
* ActiveRouteにはルーティング、そのパラメータ、およびそのルーティングに関連する追加データに関する情報が含ま
* ルーティングパラメータをサブスクライブし、好きに使う

```typescript
import { ActivatedRoute } from "@angular/router";
...
export class ItemDetailsComponent implements OnInit {
  itemId;
  constructor(private route: ActiveRoute) {}
  
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.itemId = +params.get('itemId');
    });
  }
}
```

> ちなみに `+params.get()` の `+` は、 `+` 以降の結果を数値に変換する手法。`+` は数値以外扱えないので。

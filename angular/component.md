# コンポーネント

> コンポーネントは、これらの一連のUI機能を再利用できるようにするための、 UI内の責任領域を定義します。
> コンポーネントは3つの要素で構成されています。
> * コンポーネントクラス では、データと機能を処理します。
> * HTMLテンプレート では、UIを決定します。
> * コンポーネント固有スタイル では、ルック・アンド・フィールを定義します。
> Angularアプリケーションはコンポーネントのツリーで構成され、各Angularコンポーネントには特定の目的と責任があります。

## app-root

`app-root` はアプリケーションシェルです。
これは最初にロードするコンポーネントであり、他のすべてのコンポーネントの親です。
これをベースページと考えることができます。

## Componentクラスの構成要素

```typescript
import { Component, OnInit } from '@angular/core';

// @Componentデコレータは、次のクラスがコンポーネントであることを示す
// テンプレート、スタイル、セレクターなど、コンポーネントに関するメタデータを提供
@Component({
  selector: 'app-product-alert',                  // コンポーネントの名前。慣例として接頭辞 app- から始めている。
  templateUrl: './product-alert.component.html',  // コンポーネントのテンプレートファイル
  styleUrls: ['./product-alert.component.css']    // コンポーネントのCSSファイル
})

// コンポーネントの機能を提供するクラス
export class ProductAlertComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
```

## HTML表示

他のHTML要素と同じようにコンポーネントのセレクターを使う

```html
<app-product-alert>Hoge</app-product-alert>
```

# コンポーネント

> コンポーネントは、これらの一連のUI機能を再利用できるようにするための、 UI内の責任領域を定義します。
> コンポーネントは3つの要素で構成されています。
>
> * コンポーネントクラス では、データと機能を処理します。
> * HTMLテンプレート では、UIを決定します。
> * コンポーネント固有スタイル では、ルック・アンド・フィールを定義します。
>
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
  // プロパティがここに定義される
  example;
  notify;

  // コンストラクタ
  constructor() { }

  // コンポーネントのライフサイクルのフックメソッド
  // コンポーネントの作成直後に呼び出される
  ngOnInit() {
  }

}
```

## HTML表示

他のHTML要素と同じようにコンポーネントのセレクターを使う

```html
<app-product-alert>Hoge</app-product-alert>
```

## コンポーネントのプロパティ

HTML要素と同じようにコンポーネントもプロパティを受け取れる

```typescript
import { Input } from '@angular/core';
...
export class PropertyExampleClass {
  @Input() example;
}
```

```html
<app-property-example
  [example]="Property example">
</app-property-example>
```

## イベント発行

> 子のコンポーネントがイベントを発行したとき、アクションするのは親のコンポーネントであることに注意

子コンポーネント

```typescript
// Emit = 放出する
import { Output, EventEmitter } from '@angular/core';
...
export class EventExampleClass {
  @Output() notify = new EventEmitter();
}
```

```html
<button (click)="notify.emit()">Notify Me</button>
```

親コンポーネント

```typescript
export class EventExampleParentClass {
  onNotify() {
    window.alert('Ahoy!');
  }
}
```

```html
<app-event-example
  (notify)="onNotify()">
</app-event-example>
```

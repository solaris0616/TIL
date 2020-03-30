# フォーム

`FormBuilder`を使用する

## app.module.ts

```ts
import { ReactiveFormsModule } from '@angular/forms';
...
imports: [
  ReactiveFormsModule
],
```

## component.ts

```ts
import { FormBuilder } from '@angular/forms';

export class EgComponent implements OnInit {
  form;
  
  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      name: '',
      address: ''
    });
  }
  
  // フォーム送信時の挙動
  onSubmit(data) {
    this.form.reset();
    console.log(data);
  }
}
```

## component.html

* `formGroup` プロパティバインディングを使用してテンプレート内の`form`タグにバインド
* `form`タグで`ngSubmit`イベントバインディングを使用してフォーム送信を待機
* `Form` の`value`を指定して`onSubmit()`メソッドを呼び出す
* `formControlName`属性バインディングを使用して、フォーム・コントロールを入力フィールドにバインド

```html
<form [formGroup]="form" (ngSubmit)="onSubmit(form.value)">
  <!-- 入力フィールド -->
  <input id="name" type="text" formControlName="name">
  <input id="address" type="text" formControlName="address">

  <!-- 送信ボタン -->
  <button class="button" type="submit">Send</button>
</form>
```

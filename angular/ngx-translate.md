# ngx-translate 使い方メモ

* 基本的には ngx-translate のREADME に従えばよい
* https://github.com/ngx-translate/core
* 以降、`translate` は `TranslateService` を指す

## テンプレート

`translate` 属性を付ける

```html
<h1 translate>hello_world</h1>
```

```json
{
    "hello_world": "Hello world."
}
```

## テンプレートで変数と一緒に

`[translateParams]` を使った

```html
<p translate [translateParams]="{value: userId}">user_id</p>
```

```json
{
    "user_id": "Your ID: {{value}}"
}
```

## テンプレートで翻訳が効かない時

`span` で囲むと良い

```html
<button (click)="onClick()">
    <span translate>button_label</span>
</button>
```

```json
{
    "button_label": "Click me!"
}
```

## コード内

`instant()` を使った

```typescript
console.log(this.translate.instant('log_message'));
```

```json
{
    "log_message": "This is log message."
}
```

## コード内で変数と一緒に

`instant()` が第2引数で変数を含むオブジェクトを渡せるようになっている

```typescript
private user_id: string = 'Piyo';
console.log(this.translate.instant('user_logging', {value: user_id}));
```

```json
{
    "user_logging": "Username: {{value}}"
}
```

## 使用する言語を設定する

```typescript
translate.use('ja');
```

## ブラウザの言語設定を拾う

```typescript
translate.getBrowserLang();
```

## 今のngx-translateの言語設定

```typescript
translate.currentLang;
```

## デフォルト言語を設定する

仮に辞書データが存在しなかった場合のフォールバック先になる

```typescript
translate.setDefaultLang('en');
```

## キーが存在しなかった場合の振る舞いを決める

[MissingTranslationHandler](https://github.com/ngx-translate/core#how-to-handle-missing-translations) が用意されている

```typescript
import {MissingTranslationHandler, MissingTranslationHandlerParams} from '@ngx-translate/core';

export class MyMissingTranslationHandler implements MissingTranslationHandler {
    handle(params: MissingTranslationHandlerParams) {
        return 'undefined';
    }
}
```

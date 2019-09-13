# How to rendered

Reactの `App.js` に書かれた内容がどのようにレンダリングされているのか？

## App.js

ここではJSX形式のデータを返す `render` 関数を定義している。
任意のComponentを作った場合は `App.js` で `import` し、JSX内で `<コンポーネント名 />` の形式で記述される。

```js
class App extends React.Component {
    render() {
        return (
            {/* ここはHTMLっぽく見えるがJSXなので注意 */}
            <p>hello world</p>
        );
    }
}
```

## index.js

ここでは `App.js` から得られたJSXを指定の `id` を持つHTML要素へ挿入する

```js
ReactDOM.render(<App />, document.getElementById('root'));
```

## index.html

ここはJSXの挿入先となる `id` を持つ要素を準備している

```html
<html>
    <head></head>
    <body>
        <div id="root"></div>
    </body>
</html>
```

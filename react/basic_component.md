# App.js

`React.Component` を継承した `App.js` の基本的な構成について。

```js
import React from 'react';

class App extends React.Component {
    // JSXを戻り値とするrenderメソッドを定義する
    render() {
        const greeting = 'Hello World';
        return (
            {/* ここはJSX. 中括弧でJSを埋め込める */}
            <h1>{greeting}</h1>
        );
    }
}

export default App;
```

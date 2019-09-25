# if文による表示制御

JSXは変数に格納することができる。
これと `state` を活かして、表示の切り替えが実現できる。

```js
import React from react;

class ConditionTest extends React.Component {
  constructor() {
    this.state = {isShow: true};
  }
  
  render() {
    // 変数を準備し、stateなどの条件に応じてJSXを代入する
    let condition;
    
    if(this.state.isShow) {
      condition = (
        <h1>Hello World!</h1>
      );
    } else {
      // 別の内容を表示したければここで代入する
      // 何も表示したくない場合は、何もしなくて良い
    }

    // 変数の内容 = JSXを表示する
    return({condition});
  }
}
```

# State

ステートはコンストラクタの中でオブジェクトとして定義する。

```js
clss App extends React.Component {
    // ステートの定義
    constructor(props) {
        super(props);
        this.state = {name: "ユーザー1"};
    }

    render() {
        // ステートへのアクセスは this.state.プロパティ名
        console.log(this.state.name);

        // ステートの変更は直接代入ではなく、 this.setState() を使う
        this.setState({name: "新しいユーザー"});

        return(
            <p>Hello {this.state.name}-san!</p>
        );
    }
}
```

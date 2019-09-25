# フォーム

`input` や `textarea` などフォームの入力要素は `state` と紐付けて管理する。
`value`要素を`state`と紐付けると入力ができなくなるので、 `onChange()` を使って入力値を取りつつ、`state`をアップデートしていく必要がある。

入力値のvalidationにはちょうど良さそう。

```js
class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {email: ''};
  }

  // onChangeで呼ばれる関数でstateを更新しないと入力値が反映されない
  handleInput(event) {
    const inputValue = event.target.value;
    this.setState({email: inputValue});
  }
  
  render() {
    return (
      <form>
        <p>Email address:</p>
        <input value={this.state.email} onChange={(event) => {this.handleInput(event)} />
      </form>
    );
  }
}
```

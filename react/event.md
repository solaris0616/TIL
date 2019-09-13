# Event

ボタンを押したときになにかをする、などの挙動を設定することができる。
下の例は、ボタンを押下するとコンソールにメッセージを出す例。
アロー関数を使っている。

```js
render() {
    return (
        <button onClick={() => {console.log('message')}}>ボタン</button>
    );
}
```

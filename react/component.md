# Component

Reactにおける `Component` は「UI部品」のイメージ。

* ナビゲーションバー
* ボタン
* カード
* etc

見た目を機能ごとにコンポーネント化し、これらを組み合わせることでウェブサイトの見た目を構築する。

# props

例えばカードUIのコンポーネントを作ったとき、カードに表示されるコンテンツや画像をそれぞれに差し替えたい。
このときに `props` が役に立つ。`App.js` から各コンポーネントにデータを渡す仕組みが `props` である。

```js
class App extends React.Component {
    render() {
        return(
            {/* 独自のコンポーネント Card にタイトル文と画像URLを渡す例 */}
            <Card
                title='カードタイトル'
                image='https://img.hoge/001.png'
            />
        );
    }
}
```

`App.js` から渡された `props` には `this.props.プロパティ名` でアクセスできる。

```js
class Card extends React.Component {
    render() {
        return (
            <div>
                <h1 className="title">{this.props.title}</h1>
                <img src={this.props.image} />
            </div>
        );
    }
}
```

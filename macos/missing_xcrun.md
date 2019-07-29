# `brew upgrade`で "missing xcrun" と言われる

macOSをアップデートすると出る不具合らしい。結論から言うとgitを使用可能にすればよいとのこと。

```
xcode-select --install
```

* https://gotohayato.com/content/487

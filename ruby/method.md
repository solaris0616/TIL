# メソッド

波括弧を使わない代わりに `end` でブロックの終わりを示すタイプなんだなぁ、という印象

```ruby
def add(x, y)
  return x + y
end

sum = add(3, 7)
puts sum
```

真理値を返すメソッドの名前には `?` をつける慣習があるらしい

```ruby
def negative?(num)
  return num < 0
end

negative?(5)
```

キーワード引数という概念もある。連想配列っぽく渡せる。メソッド内でのアクセスは普通の変数と同様にアクセスできる。

```ruby
def greeting(name:, age:)
  puts "My name is #{name}."
  puts "I'm #{age} years old."
end

greeting(name: "Yudai Nagafuchi", age: 28)
```

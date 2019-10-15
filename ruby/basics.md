# 基本的な用法

## コンソール出力

```ruby
puts "Hello world"
```

## 変数

```ruby
name = "ynagafuchi"
puts "Hello " + name + "-san."
```

## 変数展開

```ruby
name = "ynagafuchi"
puts "Hello #{name}-san."
```

シングルクォーテーションで囲んでいる場合は展開されないので注意

## 条件分岐

```ruby
if score == 100
  puts "満点です"
elsif score > 40
  puts "合格です"
else
  puts "不合格です"
end
```

## AND/OR

```ruby
if score <= 100 && score >= 0
  puts "正常値です"
else
  puts "異常値です"
end
```

## 配列（array）

```ruby
languages = ["Java", "C", "C++"]
puts languages  # dumpしてくれる
```

## for each

```ruby
names = ["Taro", "Jiro", "Saburo"]
names.each do |name|
  puts name
end
```

## 連想配列（hash）

```ruby
user = {username: "Taro Yamada", id: 1234}
user[:age] = 26
```

* hashのキーには文字列も指定可能。その場合は `{"key" => "value}` と書く
* `:string` の書き方は、シンボルと呼ばれる
* hashのキーにシンボルを用いることも可能。その場合は `{:key => "value"}` と書く、
* 例ではシンボルの省略形で記載している

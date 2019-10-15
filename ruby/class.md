# クラス

```ruby
class User
  # インスタンス変数
  attr_accessor :name
  attr_accessor :age

  # コンストラクタ
  def initialize(name:, age:)
    self.name = name
    self.age = age
  end
  
  # インスタンスメソッド
  def greet
    puts "My name is #{self.name}."
  end
end

user1 = User.new(name: "Yudai Nagafuchi", age: 28)

# インスタンス変数への代入
user1.age = 29

# メソッドの呼び出し
user1.greet
```

インスタンス内部からインスタンス変数へのアクセスは `self.` の接頭辞が必要

# クラスの継承、メソッドのオーバーライド

* クラスの継承は `<` で表す
* 同名のメソッドを定義することで、メソッドのオーバーライドができる
* `super` で親クラスのメソッドの処理が使える

## 親クラス

```ruby
class Car
  attr_accessor :name
  
  def initialize(name:)
    self.name = name
  end
  
  def info
    puts "name: #{self.name}"
  end
end
```

## 子クラス

```ruby
require "./car"

class EvCar < Car
  attr_accessor :battery_capacity
  
  def initialize(name:, battery_capacity:)
    super(name: name)
    self.battery_capacity = battery_capacity
  end

  # メソッドのオーバーライド
  def info
    super
    puts "battery capacity: #{self.battery_capacity}"
  end
end
```

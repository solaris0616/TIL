# 継承

クラスの継承をするには `extends` でよい。

```php
class Car {
  public $name;
  public $manufacturer;
  public $color;

  public function __construct($name, $manufacturer, $color) {
    $this->name = $name;
    $this->manufacturer = $manufacturer;
    $this->color = $color;
  }
}

class BatteryCar extends Car {
  public $batteryCapacity;

  // メソッドのオーバーライド
  public function __construct($name, $manufacturer, $color, $batteryCapacity) {
    // javaの super() みたいな
    parent::__construct($name, $manufacturer, $color);
    $this->batteryCapacity = $batteryCapacity;
  }
}
```

あるインスタンスが特定のクラスのインスタンスかどうかを判断するためには `instanceof` を使う。

```php
$leaf = new BatteryCar('Leaf', 'Nissan', '60.0kW');

if($leaf instanceof BatteryCar) {
  echo $leaf->batteryCapacity;
}
```

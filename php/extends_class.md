# 継承

クラスの継承をするには `extends` でよい。

```php
class Car {
  public $name;
  public $manufacturer;
  public $color;
  ...
}

class BatteryCar extends Car {
  public $batteryCapacity;
  public $chargingTime;
}
```

あるインスタンスが特定のクラスのインスタンスかどうかを判断するためには `instanceof` を使う。

```php
$leaf = new BatteryCar();

if($leaf instanceof BatteryCar) {
  echo $leaf->batteryCapacity;
}
```

# クラス

phpでもクラスを定義してインスタンスを作成することができる。オブジェクト指向ができる。

```php
class Dog {
  private name;
  private age;

  public function __construct($name) {
    $this->name = $name;
  }

  public function getAge() {
    return $this->age;
  }

  public function setAge($age) {
    $this->age = $age;
  }
}

$pochi = new Dog('POCHI');
$pochi->setAge(10);
```

`public` などの修飾子については下記リンクを参照

https://uxmilk.jp/26435

## クラスプロパティ・クラスメソッド

クラスで単一のプロパティ（フィールド？）だったりメソッドのこと。宣言時には `static` をつける。参照時は `::` と `$` の位置に注意。

```php
class Object {
  public static $count = 0; // 普通はprivateにする
  
  public function __construct() {
    self::$count++;
  }
  
  public static function getObjectCount() {
    return self::$count;
  }
}

obj1 = new Object();
obj2 = new Object();

echo Object::$count;            // 2
echo Object::getObjectCount();  // 2
```

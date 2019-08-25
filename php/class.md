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


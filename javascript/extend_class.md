# クラスの継承

## 継承

`extends` で書ける。Javaやんけ。

```js
class Animal {

}

class Dog extends Animal {

}
```

## オーバーライド

関数のオーバーライドもいける。

```js
class Human {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  
  greet() {
    console.log(`My name is ${name}. I'm ${age} years old.`);
  }
}

class Enginner extends Human {
  // コンストラクタのオーバーライド
  constructor(name, age, lauguage){
    super(name, age);
    this.language = language;
  }
  // メソッドのオーバーライド
  greet() {
    console.log(`My name is ${name}. I'm ${age} years old.`);
    console.log(`And I'm an ${language} engineer.`);
  }
}

const ynagafuchi = new Enginner("Yudai", 28, "JavaScript");
ynagafuchi.greet();
```


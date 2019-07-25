# クラス

ES6から入ってきた概念。クラス名は大文字始まりがよいとのこと。Javaと一緒。

```js
class User {
  // コンストラクタの名前は固定っぽい
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayName() {
    console.log(`My name is ${this.name}.`);  
  }

  sayAge() {
    console.log(`I'm ${this.age}.`);  
  }

  introduce() {
    this.sayName();
    this.sayAge();
  }
}

const ynagafuchi = new User("Yudai Nagafuchi", 28);
console.log(`User name : ${ynagafuchi.name}`);

ynagafuchi.introduce();
```

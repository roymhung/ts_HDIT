// JavaScript có gì thay thế?

// 1. public (mặc định) === Tất cả property trong JS mặc định là public
class Person {
  constructor(name) {
    this.name = name; // public
  }
}

const p = new Person("Eric");
console.log(p.name); //  truy cập được

// 2. private (ES2022) === Sử dụng ký hiệu # để định nghĩa private property
class Person {
  #ssn;

  constructor(ssn) {
    this.#ssn = ssn;
  }

  getSSN() {
    return this.#ssn;
  }
}

const p = new Person("123");
console.log(p.getSSN()); // truy cập được thông qua phương thức getter
// console.log(p.#ssn);  Syntax Error

// 3. protected (ES2022) === JS không có protected, nhưng có thể “giả lập” bằng cách sử dụng convention (quy ước) hoặc Symbol
class Person {
  _name; // convention thôi

  constructor(name) {
    this._name = name;
  }
}

class Student extends Person {
  getName() {
    return this._name; // vẫn dùng được
  }
}

// 4. static (ES2022) ===  static = thuộc về class, không thuộc về object
class Person {
  static species = "Homo sapiens";

  constructor(name) {
    this.name = name;
  }
}

console.log(Person.species); // truy cập được thông qua class
const p = new Person("Eric");
console.log(p.name); // truy cập được thông qua object

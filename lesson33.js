// 1. Version trước ES6 (Prototype)
// === Dùng function, Method gắn qua prototype, Khó đọc hơn, Dễ bị lỗi khi gắn method, Không có tính kế thừa, Không có tính đóng gói

function Person(ssn, firstName, lastName) {
  this.ssn = ssn;
  this.firstName = firstName;
  this.lastName = lastName;
}

Person.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
};

// Cách sử dụng trong Javascript
let person = new Person("171-28-0926", "John", "Doe");
console.log(person.getFullName());

// 2. Version ES6 (class)
// ==== Dùng class, Viết trực tiếp trong class,Code rõ ràng, giống OOP Java/C#, Có tính kế thừa, Có tính đóng gói

class Person {
  constructor(ssn, firstName, lastName) {
    this.ssn = ssn;
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

// Cách sử dụng class trong Javascript
let person = new Person("171-28-0926", "John", "Doe");
console.log(person.getFullName());

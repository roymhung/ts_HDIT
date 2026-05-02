class Person {
  private _age = 20;
  // Đây là nơi lưu dữ liệu thật (ban đầu = 20)

  set age(value) {
    // Khi bạn viết: p.age = 30
    // thì setter này được gọi, value = 30

    this._age = value;
    // DỮ LIỆU THẬT BỊ THAY ĐỔI Ở ĐÂY
    // tức là: _age từ 20 → 30
  }

  get age() {
    // Khi bạn viết: p.age
    // thì getter này được gọi

    return this._age;
    // Trả về dữ liệu thật đang lưu trong _age
  }
}

const p = new Person();
// p = { _age: 20 }

p.age = 30;
// gọi setter → this._age = 30
// p = { _age: 30 }

console.log(p.age);
// gọi getter → return this._age → 30

// ========================================

// lesson 36
class Person2 {
  private _age: number; // nơi lưu dữ liệu thật
  public firstName: string;
  public lastName: string;

  constructor(age: number, firstName: string, lastName: string) {
    this._age = age; // ban đầu _age = 25
    this.firstName = firstName;
    this.lastName = lastName;
  }

  // getter
  get age() {
    return this._age;
    // đọc dữ liệu từ this._age
  }

  // setter
  set age(age2: number) {
    if (age2 < 0 || age2 > 150) {
      throw new Error("Invalid age");
    }
    this._age = age2;
    // CHỖ NÀY dữ liệu bị thay đổi (ví dụ: 25 → 69)
  }
}

// tạo object
let person2 = new Person2(25, "Hoi Dan IT", "Eric");
// person2 = { _age: 25, firstName: ..., lastName: ... }

let checkAge = person2.age; // đây là getter, checkAge = 25
console.log(">>> check age: ", checkAge);
// gọi getter → trả về 25

person2.age = 69; // đây là setter, age2 = 69
// gọi setter → this._age = 69
// person2 = { _age: 69, ... }

console.log(">>> check age: ", person2.age);
// gọi getter → trả về 69

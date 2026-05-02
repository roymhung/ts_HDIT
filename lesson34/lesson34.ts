// Các loại Access Modifiers trong TypeScript
// 1. public (mặc định) ==> có thể truy cập từ bất kỳ đâu, Nếu không ghi gì → mặc định là public

class Person134 {
  public name: string;

  constructor(name: string) {
    this.name = name;
  }
}

const p1 = new Person134("Eric");
console.log(p1.name); // OK

// 2. private ==> chỉ có thể truy cập từ bên trong class
class Person2 {
  private ssn: string;

  constructor(ssn: string) {
    this.ssn = ssn;
  }

  getSSN() {
    return this.ssn;
  }
}

const p2 = new Person2("123");
console.log(p2.getSSN()); //  OK
// console.log(p2.ssn);  ERROR

// 3. protected ==> có thể truy cập từ bên trong class và các lớp con
class Person3 {
  protected name: string;

  constructor(name: string) {
    this.name = name;
  }
}

class Student3 extends Person3 {
  getName() {
    return this.name; // OK (class con)
  }
}

const s = new Student3("John");
// console.log(s.name);  ERROR

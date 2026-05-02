// 1. Class trong TypeScript

class Person1 {
  ssn: string;
  firstName: string;
  lastName: string;

  constructor(ssn: string, firstName: string, lastName: string) {
    this.ssn = ssn;
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}

// Cách sử dụng class trong TypeScript
let person1 = new Person1("171-28-0926", "John", "Doe");
console.log(person1.getFullName());

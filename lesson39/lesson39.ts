abstract class Employee {
  constructor(
    protected firstName: string,
    protected lastName: string,
  ) {}

  // abstract method (không có body)
  abstract getSalary(): number;

  // normal method
  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  compensationStatement(): string {
    return `${this.getFullName()} makes ${this.getSalary()} a month`;
  }
}

class FullTimeEmployee extends Employee {
  constructor(
    firstName: string,
    lastName: string,
    private salary: number,
  ) {
    super(firstName, lastName);
  }

  // cần viết method này, bắt buộc phải override vì nó được khai báo abstract ở trên
  getSalary(): number {
    return this.salary;
  }
}

// Contractor: Nhà thầu
class Contractor extends Employee {
  constructor(
    firstName: string,
    lastName: string,
    private rate: number,
    private hours: number,
  ) {
    super(firstName, lastName);
  }

  getSalary(): number {
    return this.rate * this.hours;
  }
}

let e1 = new FullTimeEmployee("Eric", "Hoi Dan IT", 17000);
let e2 = new Contractor("John", "Doe", 100, 160);

console.log(e1.compensationStatement());
console.log(e2.compensationStatement());

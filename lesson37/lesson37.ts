class Person3 {
  constructor(
    private firstName: string,
    private lastName: string,
  ) {}

  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  describe(): string {
    return `This is ${this.firstName} ${this.lastName}.`;
  }
}

class Employee extends Person3 {
  private jobTitle: string;

  constructor(firstName: string, lastName: string, jobTitle: string) {
    super(firstName, lastName); // gọi constructor của class cha
    this.jobTitle = jobTitle;
  }

  // override method (ghi đè) của class cha => output: con đè lên method describe() của class cha VÀ OUTPUT LÀ CỦA CON
  describe(): string {
    return `This is ${this.getFullName()}, working as ${this.jobTitle}.`;
  }

  // override method của class cha => output: con đè lên method describe() của class cha VÀ OUTPUT LÀ CỦA CHA + CON
  // describe(): string {
  //     return super.describe() + ` I'm a ${this.jobTitle}.`;
  // }
}

// test
let employee = new Employee("Hoi Dan IT", "Eric", "Web Developer");

console.log(employee.getFullName());
console.log(employee.describe());

// interface (luật)
interface Workable {
  work(): string;
}

// abstract class (khuôn)
abstract class User {
  static count: number = 0; // static

  constructor(
    protected name: string,
    protected email: string,
  ) {
    User.count++;
  }

  // abstract method (bắt buộc override)
  abstract getRole(): string;

  // method thường
  getInfo(): string {
    return `${this.name} - ${this.email}`;
  }

  static getTotalUsers(): number {
    return User.count;
  }
}

// class con
class Employee1 extends User implements Workable {
  constructor(
    name: string,
    email: string,
    private jobTitle: string,
  ) {
    super(name, email);
  }

  // override abstract
  getRole(): string {
    return "Employee";
  }

  // implement interface
  work(): string {
    return `${this.name} is working as ${this.jobTitle}`;
  }
}

// class con khác
class Manager extends User implements Workable {
  constructor(
    name: string,
    email: string,
    private teamSize: number,
  ) {
    super(name, email);
  }

  getRole(): string {
    return "Manager";
  }

  work(): string {
    return `${this.name} is managing a team of ${this.teamSize} people`;
  }

  // override method cha
  getInfo(): string {
    return super.getInfo() + ` (Manager)`;
  }
}

interface IPerson {
  firstName: string;
  lastName: string;
}

function getFullName(person: IPerson): string {
  return `${person.firstName} ${person.lastName}`;
}

let person = {
  firstName: "roy",
  lastName: "Hung",
};

console.log(getFullName(person));

// ================== INTERFACE (LUẬT CHUNG TOÀN HỆ THỐNG) ==================
interface Payment {
  pay(amount: number): void;
}

// ================== ABSTRACT (KHUNG CHO CODE NỘI BỘ) ==================
abstract class PaymentBase implements Payment {
  constructor(protected name: string) {}

  protected log(amount: number) {
    console.log(`[${this.name}] Paying ${amount}...`);
  }

  protected validate(amount: number) {
    if (amount <= 0) {
      throw new Error("Invalid amount");
    }
  }

  abstract pay(amount: number): void;
}

// ================== CLASS NỘI BỘ ==================
class MomoPayment extends PaymentBase {
  constructor() {
    super("Momo");
  }

  pay(amount: number): void {
    this.validate(amount);
    this.log(amount);
    console.log("Paid via Momo");
  }
}

class VisaPayment extends PaymentBase {
  constructor() {
    super("Visa");
  }

  pay(amount: number): void {
    this.validate(amount);
    this.log(amount);
    console.log("Paid via Visa");
  }
}

// ================== CLASS BÊN NGOÀI (KHÔNG extends) ==================
class ZaloPayAPI implements Payment {
  pay(amount: number): void {
    console.log(`Call ZaloPay API to pay ${amount}`);
  }
}

// ================== SỬ DỤNG ==================
let payments: Payment[] = [
  new MomoPayment(),
  new VisaPayment(),
  new ZaloPayAPI(), // ** khác hệ nhưng vẫn dùng được
];

payments.forEach((p) => p.pay(100));

// PaymentBase = internal implementation
// Payment = contract (service layer)
// ZaloPay = external integration

// PaymentBase = triển khai nội bộ
// Payment = hợp đồng (lớp dịch vụ)
// ZaloPay = tích hợp bên ngoài

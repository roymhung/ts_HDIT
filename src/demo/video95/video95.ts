export {};
console.log("video95");

type TUser = {
  id: number;
  name: string;
  age: number;
  address: string;
  city: string;
};

const student1: TUser = {
  id: 1,
  name: "Alice",
  age: 20,
  address: "123 Main St",
  city: "New York",
};

const student2: TUser = {
  id: 2,
  name: "Bob",
  age: 22,
  address: "456 Elm St",
  city: "Los Angeles",
};

const printUserInfo = (user: TUser): void => {
  console.log(`ID: ${user.id}`);
  console.log(`Name: ${user.name}`);
  console.log(`Age: ${user.age}`);
  console.log(`Address: ${user.address}`);
  console.log(`City: ${user.city}`);
};

printUserInfo(student1);
printUserInfo(student2);

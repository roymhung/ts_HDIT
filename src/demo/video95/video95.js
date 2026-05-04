// Cách 1: JS cơ bản (giống code của bạn)
console.log("video95");

const student1 = {
  id: 1,
  name: "Alice",
  age: 20,
  address: "123 Main St",
  city: "New York",
};

const student2 = {
  id: 2,
  name: "Bob",
  age: 22,
  address: "456 Elm St",
  city: "Los Angeles",
};

const printUserInfo = (user) => {
  console.log(`ID: ${user.id}`);
  console.log(`Name: ${user.name}`);
  console.log(`Age: ${user.age}`);
  console.log(`Address: ${user.address}`);
  console.log(`City: ${user.city}`);
};

printUserInfo(student1);
printUserInfo(student2);

// Cách 2: Viết gọn hơn (destructuring)
const printUserInfo = ({ id, name, age, address, city }) => {
  console.log(`ID: ${id}`);
  console.log(`Name: ${name}`);
  console.log(`Age: ${age}`);
  console.log(`Address: ${address}`);
  console.log(`City: ${city}`);
  console.log("---------------");
};

// Cách 3: Thực tế hơn (array + loop)
const students = [
  {
    id: 1,
    name: "Alice",
    age: 20,
    address: "123 Main St",
    city: "New York",
  },
  {
    id: 2,
    name: "Bob",
    age: 22,
    address: "456 Elm St",
    city: "Los Angeles",
  },
];

const printUserInfo = (user) => {
  console.log(
    `ID: ${user.id} | Name: ${user.name} | Age: ${user.age} | Address: ${user.address} | City: ${user.city}`,
  );
};

students.forEach(printUserInfo);

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
// để ý màu sắc của user bên trái dấu ":" và TUser bên phải dấu ":"
const printUserInfo = (user) => {
    console.log(`ID: ${user.id}`);
    console.log(`Name: ${user.name}`);
    console.log(`Age: ${user.age}`);
    console.log(`Address: ${user.address}`);
    console.log(`City: ${user.city}`);
};
console.log("============================================");
console.log("Student 1 Info:", student1.name);
printUserInfo(student1);
printUserInfo(student2);

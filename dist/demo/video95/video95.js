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
const printUserInfo = (user) => {
    console.log(`ID: ${user.id}`);
    console.log(`Name: ${user.name}`);
    console.log(`Age: ${user.age}`);
    console.log(`Address: ${user.address}`);
    console.log(`City: ${user.city}`);
};
printUserInfo(student1);
printUserInfo(student2);

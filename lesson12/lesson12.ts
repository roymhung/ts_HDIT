let test: string[] = ["Hello", "World"];

test.push("!");

console.log("check array push:", test.push("!"));

console.log("check array:", test);

// Lưu trữ "mixed types"
let mixedArray: (string | number | boolean)[] = ["Hello", 42, true];

mixedArray.push("World");
mixedArray.push(3.14);
mixedArray.push(false);

console.log("check mixed array:", mixedArray);

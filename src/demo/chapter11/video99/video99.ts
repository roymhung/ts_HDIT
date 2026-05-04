export {};
console.log("video99");

type TName = string | null;

let name: TName = null;

const age: number | null = null;

const printName = (myName: string | null) => {
  if (myName) {
    console.log(myName.toUpperCase());
  } else {
    console.log("Name is null");
  }
};

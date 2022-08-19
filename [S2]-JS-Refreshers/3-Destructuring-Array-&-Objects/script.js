console.log("------ array destructuring ------");

const numArr = [1, 2, 3, 4];

const [n1, n2, , n4] = numArr; // Destructuring numArr items

console.log(n1);
console.log(n2);
// console.log(n3); // ReferenceError: n3 is not defined
// As we haven't extracted 3
console.log(n4);
//
//
const arrX = [1, 9, [4, 8, 3, 2], 5];

const [a, b, [c, d, e, f], g] = arrX;

console.log(`Val of e : ${e}`);
//
//
const arrRest = [(x = 2), (y = "second"), (z = 4)];

const [w, ...rest] = arrRest;

console.log(...rest);
//
//
//
//
//
//
//
console.log("\n------ object destructuring ------");

const theObj = {
  name: "Max",
  age: 27,
  year: 1997,
};

const { age, year } = { age: 27, year: 1997 }; //ToDo - refer to MDN

console.log(age);
console.log(year);
//
//
//
const newNumArr = [];
const obj = { a: 8, b: 9 };
({ a: newNumArr[0], b: newNumArr[1] } = obj); //The parentheses ( ... ) around the assignment statement are required when using object literal destructuring assignment without a declaration.

console.log(newNumArr);

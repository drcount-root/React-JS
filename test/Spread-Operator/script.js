// SPREAD Operator In Practice
// SPREAD Operator combines array with more items, can also combine multiple arrays into one

console.log("\nUse of Spread operator on Arrays\n");

const firstArray = [1, 2, "three", 4];

const secondArray = [...firstArray, 5, "six"];

console.log(
  "(secondArray) firstArray extended by new array items :",
  secondArray,
  "\n"
);

const thirdArray = [7, 8];

const fourthArray = [...firstArray, ...secondArray, ...thirdArray];

console.log(
  "(fourthArray) Combination of firstArray, secondArray & thirdArray :\n",
  fourthArray,
  "\n"
);
//
//
//
//
console.log("\n-----------------------------------------------------\n");
//
//
//
//
console.log("\nUse of Spread operator on Objects\n");

const oldObject = {
  name: "max",
  age: 25,
};

const newObject = { ...oldObject, class: "11th" };

// const newObject = { ...oldObject, age: 17 }; // Overwrites the value of the property named "age" to 17

console.log(
  "newObject (oldObject extended by other property) :",
  newObject,
  "\n"
);

const objOne = { name: "Jonas", rollno: 1 };
const objTwo = { age: 18, rollno: 2, class: "XII" };

const comboObj = { ...objOne, ...objTwo };

console.log("comboObj (combination of objOne & objTwo) :", comboObj, "\n");

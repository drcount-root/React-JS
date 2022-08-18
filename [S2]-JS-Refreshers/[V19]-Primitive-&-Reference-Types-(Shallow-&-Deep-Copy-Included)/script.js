// Primitive types : number, string, bigint, boolean, undefined, symbol, null

let num = 12;

let copyNum = num; // Deep Copy : not share values

console.log(copyNum); // 12

num = 15;

console.log(copyNum); // 12
console.log(num); // 15
//
//
//
//
//
//
//
//
// Reference Types : Array, Object & Functions
// A deep copy of an object is a copy whose properties do not share the same references

// DEEP COPY - A deep copy means that all of the values of the new variable are copied and disconnected from the original variable.

// SHALLOW COPY - A shallow copy means that certain (sub-)values are still connected to the original variable.

//
//
//
//
//
// -------------------------
// For Primitive Data Types
// -------------------------

// Primitive data types include the following: number, string, boolean, undefined, null.

// When you create these values, they are tightly coupled with the variable they are assigned to. They only exist once. That means you do not really have to worry about copying primitive data types in JavaScript. When you make a copy, it will be a real copy.
console.log("\nPrimitive types only supports deep copy");

let a = 5;

let b = a; // By executing b = a , we make the deep copy of a, and stored it in b.

console.log(b); // 5

b = 10; // Now, when you reassign any new value to b, the value of b changes, but not of a.

console.log(b); // 10

console.log(a); // 5

a = 25; // Value of a changes, only if we reassign any new value to a.

console.log(a); // 25

console.log(b); // 10
//
//
//
//
//
//
//
//

// ----------------------------------------------------------------
// For Reference Data Types / Composite / Non-Primitive Data Types
// ---------------------------------------------------------------

// Technically, arrays are also objects, so they behave in the same way.

// These values are actually stored just once when instantiated, and assigning a variable just creates a pointer (reference) to that value.

// Now, if we make a copy y = x , and change some nested value in y, it actually changes x’s nested value as well, since x and y actually point to the same thing.

console.log("\nReference types supports both shallow copy & deep copy");

const x = {
  en: "Hello",
  de: "Hallo",
  es: "Hola",
  pt: "Ola",
};

let y = x; // Shallow copy

y.pt = "Oi"; // As x & y are connected, value of pt for both will be changed to "Oi"

console.log(y.pt);

console.log(x.pt);

x.de = "Hall"; // As x & y are connected, value of de for both will be changed to "Hall"

console.log(x.de);

console.log(y.de);

y.en = "hi"; // As x & y are connected, value of en for both will be changed to "hi"

console.log(y.en);

console.log(x.en);

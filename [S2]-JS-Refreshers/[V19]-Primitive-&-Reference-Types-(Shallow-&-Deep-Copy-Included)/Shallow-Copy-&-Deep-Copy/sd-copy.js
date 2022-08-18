// DEEP COPY - A deep copy means that all of the values of the new variable are copied and disconnected from the original variable. They don't share values or properties.

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
console.log("\n# Primitive types only supports deep copy #");

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

console.log("\n# Reference types supports both shallow copy & deep copy #");

console.log("\n------------- Shallow Copy -------------");

// -------------------------------
// Copying Objects : Shallow Copy
// ------------------------------

const x = {
  en: "Hello",
  de: "Hallo",
  es: "Hola",
  pt: "Ola",
};

let y = x; // Shallow copy

y.pt = "Oi"; // As x & y are connected, value of pt for both will be changed to "Oi"

console.log(y.pt); // "Oi"

console.log(x.pt); // "Oi"

x.de = "Hall"; // As x & y are connected, value of de for both will be changed to "Hall"

console.log(x.de); // "Hall"

console.log(y.de); // "Hall"

y.en = "hi"; // As x & y are connected, value of en for both will be changed to "hi"

console.log(y.en); // "hi"

console.log(x.en); // "hi"

// In the example above, we actually made a shallow copy. This is often times problematic, since we expect the old variable to have the original values, not the changed ones.

//
//
//
//
//

console.log("\n------------------------ Deep Copy ------------------------");

// ----------------------------
// Copying Objects : Deep Copy
// ---------------------------

console.log("\n------------- Deep Copy Using Spread Operator -------------");

// Using Spread operator

// Introduced with ES2015. It ‘spreads’ out all of the values into a new object.

// The spread operator makes deep copies of data if the data is not nested.

const m = {
  en: "Bye",
  de: "Celli",
};

let n = { ...m };

n.de = "Ciao";

console.log(n.de); // "Ciao"

console.log(m.de); // "Celli"

//

console.log(
  "\nSpread operator don't automatically make Deep copy of nested object, instead did Shallow copy"
);

// When you have nested data in an array or object the spread operator will create a deep copy of the top most data and a shallow copy of the nested data.

//
//
//
//
//
//
//

console.log("\n------------- Deep Copy Using Object.assign() -------------");

// The first argument in the Object.assign() method actually gets modified and returned. So we have to pass the empty object (to prevent modifying any existing data of the object to copy) to copy the second argument (which is an object).

const ob = {
  name: "Deadpool",
  age: 34,
  gender: "male",
};

let deepCopiedObj = Object.assign({}, ob); // Deep Copy

deepCopiedObj.age = 27;

console.log(deepCopiedObj.age); // 27

console.log(ob.age); // 34

//
//
//
//
//
//

console.log(
  "\n------------- Deep Copy Using JSON.stringify() & JSON.parse() -------------"
);

const newObject = {
  breakfast: "Toast & Juice",
  meal: {
    drink: "Coca-Cola",
    starter: "Chicken tikka",
    maincourse: "Fried-rice & Tandoori Chicken",
  },
  snacks: {
    packedFood: "Doritos",
    drink: "Vanilla Milkshake",
  },
  dinner: {
    food: "Garlic Bread, Pan Fried Momos, Chicken Popcorns",
  },
};

let deepCopiedObject = JSON.parse(JSON.stringify(newObject)); // DEEP COPY

// JSON.stringify() Converts a JavaScript value to a JavaScript Object Notation (JSON) string.

// JSON.parse() Converts a JavaScript Object Notation (JSON) string into an object.

deepCopiedObject.meal.starter = "Paneer tikka";

console.log(deepCopiedObject.meal.starter); // "Paneer tikka"

console.log(newObject.meal.starter); // "Chicken tikka"

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

// ----------------------------
// Copying Arrays : Deep Copy
// ---------------------------

console.log(
  "\nSpread operator don't automatically make Deep copy of nested array, instead did Shallow copy"
);

// When you have nested data in an array or object the spread operator will create a deep copy of the top most data and a shallow copy of the nested data.

let p = [1, 2, [3, [4, 5]]];

let q = [...p]; // It looks like we get a deep copy but in fact we don’t!

console.log(q);

console.log(q[0]);
console.log(q[1]);
console.log(q[2]);
console.log(q[2][0]);
console.log(q[2][1][0]);
console.log(q[2][1][1]);

//
//
//
//
//
//

console.log("\nDeep Copy Using Array Methods - map()");

const X = [1, 2, 3];

let Y = X.map((item) => item); // A new array (Deep Copied) with each element being the result of the callback function.

Y[1] = 4;

console.log(Y[1]); // 4

console.log(X[1]); // 2

console.log(
  "\nfilter() & reduce() these array methods also supports deep copy"
);
//
//
//
//
//
//

// Use JSON.parse(JSON.stringify(someArray)) To DEEP COPY ANY ARRAY/NESTED ARRAY.

console.log(
  "\n------------- Deep Copy Of AN ARRAY Using JSON.stringify() & JSON.parse() -------------"
);

const newARRAY = [1, 2, [3, [4, 5]]];

let deepCopiedARRAY = JSON.parse(JSON.stringify(newARRAY)); // DEEP COPY

// JSON.stringify() Converts a JavaScript value to a JavaScript Object Notation (JSON) string.

// JSON.parse() Converts a JavaScript Object Notation (JSON) string into an object.

// ARRAYs are OBJECTSs too.

deepCopiedARRAY[2][1][0] = "Paneer tikka";

console.log(deepCopiedARRAY[2][1][0]); // "Paneer tikka"

console.log(newARRAY[2][1][0]); // 4

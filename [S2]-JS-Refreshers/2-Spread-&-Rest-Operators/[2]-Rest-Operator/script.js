// REST Operator In Practice
// REST Operator allows a function to take unlimited amout of arguments as an array.

console.log(
  "\nUse of Rest operator with arguments passed to Functions as an array\n"
);

const findOdds = (...args) => {
  return args.filter((item) => {
    return item % 2 === 1; // callback function of filter method checks on every item of the array, then returns the items which can pass the condition.
  });
};

console.log(findOdds(1, 2, 3, 4, 5, 6, 7));

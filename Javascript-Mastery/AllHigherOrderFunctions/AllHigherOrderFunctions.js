let arr = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];
  
  // What is HOF?
  // HOF is a function that takes a function as an argument and returns a function. This is called as Higher Order Function.
  // Example of HOF: map, filter, reduce, sort, some, every, find, findIndex, forEach,
  
  // map() :- It is a higher order function that takes a function as an argument and returns a new array.
  // It is used to apply a function to each element of an array and returns a new array.
  // Example:
  arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let newMapedArr = arr.map(function (item) {
    return item * 2;
  });
  console.log(newMapedArr);
  
  // filter() :- It is a higher order function that takes a function as an argument and returns a new array.
  // It is used to apply a function to each element of an array and returns a new array.
  // Example:
  arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let newFilteredArr = arr.filter(function (item) {
    return item % 2 === 0;
  });
  console.log(newFilteredArr);
  
  // reduce() :- It is a higher order function that takes a function as an argument and returns a new array.
  // It is used to apply a function to each element of an array and returns a new array.
  // Example:
  arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let newReducedArr = arr.reduce(function (acc, item) {
    return acc + item;
  });
  console.log(newReducedArr);
  
  // sort() :- It is a higher order function that takes a function as an argument and returns a new array.
  // It is used to apply a function to each element of an array and returns a new array.
  // Example:
  // Sort Array in Ascending Order
  arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let newSortedArr = arr.sort(function (a, b) {
    return a - b;
  });
  console.log(newSortedArr);
  
  // Sort Array in Descending Order
  arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let newSortedArrDesc = arr.sort(function (a, b) {
    return b - a;
  });
  console.log(newSortedArrDesc);
  
  // Sort Array of Objects in Ascending Order
  arr = [
    {
      name: "John",
      age: 20,
    },
    {
      name: "Jane",
      age: 21,
    },
    {
      name: "Joe",
      age: 22,
    },
  ];
  let newSortedArrObj = arr.sort(function (a, b) {
    return a.age - b.age;
  });
  console.log(newSortedArrObj);
  
  // Sort Array of Objects in Descending Order
  
  arr = [
    {
      name: "John",
      age: 20,
    },
    {
      name: "Jane",
      age: 21,
    },
    {
      name: "Joe",
      age: 22,
    },
  ];
  let newSortedArrObjDesc = arr.sort(function (a, b) {
    return b.age - a.age;
  });
  console.log(newSortedArrObjDesc);
  
  // some() :- It is a higher order function that takes a function as an argument and returns a new array.
  // It is used to apply a function to each element of an array and returns a new array.
  // Example:
  arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let newSomeArr = arr.some(function (item) {
    return item % 2 === 0;
  });
  console.log(newSomeArr);
  
  // every() :- It is a higher order function that takes a function as an argument and returns a new array.
  // It is used to apply a function to each element of an array and returns a new array.
  // Example:
  arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let newEveryArr = arr.every(function (item) {
    return item % 2 === 0;
  });
  console.log(newEveryArr);
  
  // find() :- It is a higher order function that takes a function as an argument and returns a new array.
  // It is used to apply a function to each element of an array and returns a new array.
  // Example:
  arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let newFindArr = arr.find(function (item) {
    return item % 2 === 0;
  });
  console.log(newFindArr);
  
  // findIndex() :- It is a higher order function that takes a function as an argument and returns a new array.
  // It is used to apply a function to each element of an array and returns a new array.
  // Example:
  arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let newFindIndexArr = arr.findIndex(function (item) {
    return item % 2 === 0;
  });
  console.log(newFindIndexArr);
  
  // forEach() :- It is a higher order function that takes a function as an argument and returns a new array.
  // It is used to apply a function to each element of an array and returns a new array.
  // Example:
  arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let newForEachArr = arr.forEach(function (item) {
    console.log(item);
  });
  console.log(newForEachArr);
  
  // 1. Use Higher Order function that takes in an array of numbers and returns the sum of all the numbers in the array.
  
  // 2. Use Higher Order function that takes in an array of numbers and returns the average of all the numbers in the array.
  
  // 3. Use Higher Order function that takes in an array of numbers and returns the maximum number in the array.
  
  // 4. Use Higher Order function that takes in an array of numbers and returns the minimum number in the array.
  
  // 5. Use Higher Order function that takes in an array of numbers and returns a new array with all the even numbers from the original array.
  
  // 6. Use Higher Order function that takes in an array of numbers and returns a new array with all the odd numbers from the original array.
  
  // 7. Use Higher Function that takes in a string and returns a new string with all the vowels removed.
  
  // 8. Use Higher Function that takes in a string and returns a new string with all the vowels removed.
  
  //
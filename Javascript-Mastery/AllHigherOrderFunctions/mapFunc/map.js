// The Array.map() method allows you to iterate over an array and modify its elements using a callback function. The callback function will then be executed on each of the array's elements.

let arr = [3, 4, 5, 6];

for (let i = 0; i < arr.length; i++){
  arr[i] = arr[i] * 3;
}

//console.log(arr); // [9, 12, 15, 18]
// ----------------------------------------------------------------


// Array.map() method 

let arrr = [3, 4, 5, 6];

let res = arrr.map(function(element){
    return element *3;
});

console.log(res); // [9, 12, 15, 18]

// -----------------------------

// use map() over an array of objects

let users = [
    {firstName : "Susan", lastName: "Steward"},
    {firstName : "Daniel", lastName: "Longbottom"},
    {firstName : "Jacob", lastName: "Black"}
  ];
  
  let userFullnames = users.map(function(element){
      return `${element.firstName} ${element.lastName}`;
  })
  
  console.log(userFullnames);
  // ["Susan Steward", "Daniel Longbottom", "Jacob Black"]
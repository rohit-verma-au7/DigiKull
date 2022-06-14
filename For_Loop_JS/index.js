// const n = 1000;
// for (let i = 1; i <= n; i++) {
//   if (i % 2 == 0) {
//     console.log(`${i}`);
//   }
// }

// const arr = [1, 1, 2];
// for (var i = 0; i < arr.length; i++) {
//   console.log(i);
// }

// function myfunc(arr, val) {
//   // console.log(arr,val)
//   arr.map((values, index) => {
//     // console.log(values,index)
//     if (values === val) {
//       console.log(index);
//     } else {
//       return -1;
//     }
//     // console.log(ind)
//   });

//   // console.log(-1);
// }
// myfunc([10, 20, 30, 40, 50], 10);
// // foreach or find loop

// function myFunc(arr, val) {
//   var hasValue;
//   var dontHaveValue;

//   arr.map((values, index) => {
//     if (values === val) {
//       hasValue = index;
//     } else {
//       dontHaveValue = -1;
//     }
//   });
//   console.log(hasValue != undefined ? hasValue : dontHaveValue);
//   // console.log(Boolean(hasValue) === true ? hasValue : dontHaveValue);
//   // console.log(hasValue === !undefined);
// }

// myFunc([10, 20, 30, 40, 50], 10);

var arr = [10, 20, 30, 40, '', false];
var truthy = [];
var falsy = [];

function abc(value, index, array) {
  // console.log(value);
  // console.log(index);
  // console.log(array);

  if (Boolean(value) === true) {
    truthy.push(value);
  } else {
    falsy.push(value);
  }
}

//forEach method

arr.forEach(abc);
console.log(truthy);
console.log(falsy);

// function sum(a,b){

//   console.log(a+b)

// }

// sum(2,9)

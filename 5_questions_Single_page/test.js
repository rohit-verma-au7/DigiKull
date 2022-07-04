// var arr1 = [];
// var arr = [
//   [10, 11, 12],
//   [20, 21, 22],
//   [30, 31, 32],
// ];
// for (j = 0; j < arr.length; j++) {
//   for (i = arr.length - 1; i >= 0; i--) {
//     arr1.push(arr[i][j] + '');
//   }
// }
// console.log(arr1);

// var str = 'ro6h9i8t';
// var str1 = [];
// var num = [];
// for (let i = 0; i < str.length; i++) {
//   if (str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 122) {
//     str1 = new Array(str1 + str[i]);
//   } else {
//     num = new Array(num + str[i]);
//   }
// }
// console.log(str1);
// console.log(num);
const axios = require('axios');

// axios
//   .get('https://jsonplaceholder.typicode.com/users')
//   .then((res) => {
//     console.log(res.data[0]);
//   })
//   .catch((error) => {
//     console.error(error);
//   });

// const arr = [1, 2, 3, 4, 5, 6];
// let result = [];
// function add(arr) {
//   if (arr.length === 0) {
//     return;
//   }
//   if (arr[0]) {
//     result.push(arr[0] + result);
//     add(arr.slice(1));
//   }
// }
// add(arr);
// console.log(result);

// function reverse(str) {
//   if (str === '') {
//     return '';
//   } else {
//     return reverse(str.substr(1)) + str.charAt(0);
//   }
// }
// console.log(reverse('abcd'));

const arr3 = [1, 2, 3]; // 6 ans
let s = 0;
function rohit(arr3) {
  if (arr3.length - 1 === 0) {
    return 1;
  } else {
    s = s + rohit(arr3[0], arr3.length - 1);
  }
}
rohit(arr3);

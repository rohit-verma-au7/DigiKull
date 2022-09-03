// 1 1 1 1 1
// 2 2 2 2
// 3 3 3
// 4 4
// 5
let n = 5; // height of pattern
let string = '';
// External loop
for (let i = 0; i <= n; i++) {
  // Internal loop
  for (let j = 1; j <= i; j++) {
    string += i;
  }
  string += '\n';
}
console.log(string);

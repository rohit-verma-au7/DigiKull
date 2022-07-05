// Ask logic from sir
let n1 = 1;
let n2 = 1;
let result = 0;
function fabinocci(n) {
  if (n == 1) {
    result = 1;
  } else if (n == 2) {
    result = 1;
  } else {
    for (let i = 3; i <= n; i++) {
      result = n1 + n2;
      n2 = n1;
      n1 = result;
    }
  }
}

fabinocci(19);
console.log(result);

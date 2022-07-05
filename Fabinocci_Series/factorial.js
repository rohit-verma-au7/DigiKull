let result = 1;
function factorial(num) {
  for (let i = 1; i <= num; i++) {
    if (num == 0) {
      return result;
    } else {
      result = result * i;
    }
  }
}
factorial(5);
console.log(result);

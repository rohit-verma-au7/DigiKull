function fabinocci(num) {
  let n1 = 1;
  let n2 = 2;
  let result = 0;
  if (n == 1 && n == 2) {
    return 1;
  }
  if (n <= 0) {
    return 1;
  } else {
    return (result = n1 + n2);
    n2 = n1;
    n1 = result;
  }
}
// Needs to recheck, answer not found

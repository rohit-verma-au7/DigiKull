const arr = [1, 5, 3, 8, 7];
function sumElements(arr) {
  var result = 0;
  for (let i = 0; i < arr.length; i++) {
    result = result + arr[i];
  }
  console.log(result);
}
sumElements(arr);

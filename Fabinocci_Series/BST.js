const arr = [3, 4, 6, 8, 9, 10, 12, 14, 16];
function binarySearch(arr, n) {
  let start = 0;
  let end = arr.length - 1;
  for (let i = 0; i <= arr.length - 1; i++) {
    let mid = arr[Math.round(start + end) / 2];
    if (n === mid) {
      return mid;
    }
    if (n > mid) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
    return mid;
  }
  return -1;
}
console.log(binarySearch(arr, 3));
console.log(binarySearch(arr, 4));
console.log(binarySearch(arr, 6));
console.log(binarySearch(arr, 8));
console.log(binarySearch(arr, 9));
console.log(binarySearch(arr, 10));
console.log(binarySearch(arr, 12));
console.log(binarySearch(arr, 14));
console.log(binarySearch(arr, 16));

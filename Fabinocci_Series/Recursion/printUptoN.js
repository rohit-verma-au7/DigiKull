// Last number added in result, ask from sir too
let result = [];
function uptoN(n2, n1) {
  if (n2 <= n1) return result;
  result.push(n1 + 1) + uptoN(n2, n1 + 1);
}
uptoN(10, 2);
console.log(result);

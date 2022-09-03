// Last number added in result, ask from sir too
function helper(n2, n1) {
  let result = [];
  function uptoN(n2, n1) {
    if (n2 <= n1 + 1) return result;
    result.push(n1 + 1);
    uptoN(n2, n1 + 1);
  }
  uptoN(n2, n1);
  return result;
}

console.log(helper(10, 5));

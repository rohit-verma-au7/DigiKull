// Question Number 1
let number = 121;
function palindrome(number) {
  let result = '';
  let num = number + ' ';
  for (let i = num.length - 1; i >= 0; i--) {
    result = result + num[i];
  }
  if (num === result) {
    console.log('Its a plindrome');
  } else {
    console.log('Its not a palindrome');
  }
}

palindrome(number);

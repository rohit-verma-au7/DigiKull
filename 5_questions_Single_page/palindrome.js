// Question Number 1
let number = 121;
function palindrome(number) {
  let result = '';
  let num = number + ' ';
  for (let i = num.length - 1; i >= 0; i--) {
    result = result + num[i];
  }
  if (number == result) {
    console.log(`It's a plindrome : ${number}`);
  } else {
    console.log(`It's not a palindrome : ${number}`);
  }
}

palindrome(number);

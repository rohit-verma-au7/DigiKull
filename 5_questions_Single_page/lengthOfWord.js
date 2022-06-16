// Question Number 3
const str = 'take a walk johnty';
let result = '';
for (let i = str.length - 1; i >= 0; i--) {
  result = result + str[i];
}
for (let j = 0; j < result.length; j++) {
  if (result[j] === ' ') {
    console.log(j);
    break;
  }
}

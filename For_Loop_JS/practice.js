var pal = 'mom';
var yes = 0;
for (let i = 0; i < pal.length; i++) {
  for (let j = pal.length - 1; j <= 0; j--) {
    if (pal[i] === pal[j]) {
      console.log(pal[i], pal[j]);
      yes = 1;
    }
  }
}
if (yes === 1) {
  console.log('palindrome');
} else {
  console.log('not');
}

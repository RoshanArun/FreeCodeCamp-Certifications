function reverseString(str) {
  let reverse = "";
  for (let i = str.length; i > 0; i--) {
    reverse = reverse + str[i - 1];
  }
  console.log(reverse);
  return reverse;
}

reverseString("hello");
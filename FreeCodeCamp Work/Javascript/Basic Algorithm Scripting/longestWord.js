function findLongestWordLength(str) {
  let spl = str.split(' ');
  let max = 0;

  for (let i = 0; i < spl.length; i++) {
    if (spl[i].length > max) {
      max = spl[i].length;
    }
  }
  console.log(max);
  return max;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
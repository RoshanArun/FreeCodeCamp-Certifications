function diffArray(arr1, arr2) {
    const newArr = [];
  
    function arrFirst(one, two) {
      for (let i = 0; i < one.length; i++) {
        if (one.includes(one[i]) && !two.includes(one[i])) {
          newArr.push(one[i])
        }
      }
    }
    arrFirst(arr1, arr2);
    arrFirst(arr2, arr1);
  
    console.log(newArr)
    return newArr;
  }
  diffArray([], ["snuffleupagus", "cookie monster", "elmo"])
  diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
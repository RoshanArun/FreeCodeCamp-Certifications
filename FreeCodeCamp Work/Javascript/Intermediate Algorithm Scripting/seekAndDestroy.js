function destroyer(arr) {
    let ele = arr.length;
    let len = arguments.length;
    for (let j = len; j > 0; j--) {
      for (let i = ele; i >= 0; i--) {
        if (arguments[j] == arr[i]) {
          arr.splice(i, 1)
        }
      }
    }
  
    console.log(arr)
    return arr;
  }
  
  destroyer([1, 2, 3, 1, 2, 3], 2, 3);
  destroyer([3, 5, 1, 2, 2], 2, 3, 5)
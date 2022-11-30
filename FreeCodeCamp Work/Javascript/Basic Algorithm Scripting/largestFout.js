function largestOfFour(arr) {
    let arrLarge = [];
    let largestNum = 0;
  
    for(let i = 0; i < arr.length; i++){
      largestNum = -1000000;
      for(let j = 0; j < arr.length; j++){
        if(arr[i][j] > largestNum){
          largestNum = arr[i][j];
          arrLarge[i] = largestNum;
          console.log(arrLarge)
        }
      }
    }
    return arrLarge;
  }
  
  largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
  
  largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]])
  
  largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]])

  
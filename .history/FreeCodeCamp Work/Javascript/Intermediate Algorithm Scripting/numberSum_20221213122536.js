function sumAll(arr) {
    let largest = 0;
    let sum = 0;
  
    if(arr[0] > arr[1]){
      largest = arr[0];
    }else{
      largest = arr[1]
    }
  
    for(let i = largest; i > 0; i--){
      sum = sum + i;
    }
    console.log(sum);
    return sum;
  }
  
  sumAll([1, 4]);
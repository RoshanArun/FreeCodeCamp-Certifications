function sumAll(arr) {
  let largest = 0;
  let small = 0;
  let sum = 0;

  if(arr[0] > arr[1]){
    largest = arr[0];
    small = arr[1]
  }else{
    largest = arr[1]
    small = arr[0]
  }

  for(let i = largest; i >= small; i--){
    sum = sum + i;
  }
  console.log(sum);
  return sum;
}

sumAll([5, 10]);
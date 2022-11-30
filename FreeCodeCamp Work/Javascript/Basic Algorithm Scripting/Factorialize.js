function factorialize(num) {
  for(let i = num - 1; i > 0; i--){
    num = num * i;
  }

  if(num == 0){
    return 1;
  }
  console.log(num)
  return num;
}

factorialize(5);
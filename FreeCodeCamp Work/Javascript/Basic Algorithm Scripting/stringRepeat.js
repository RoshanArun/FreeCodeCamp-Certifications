function repeatStringNumTimes(str, num) {
    let temp = str;
    for(let i = num - 1; i > 0; i--){
      str = str + temp;
    }
    if(num <= 0){
      return "";
    }
    return str;
  }
  
  repeatStringNumTimes("*", 3);
  repeatStringNumTimes("abc", 3);
  repeatStringNumTimes("abc", 4);
  repeatStringNumTimes("abc", -2);
  
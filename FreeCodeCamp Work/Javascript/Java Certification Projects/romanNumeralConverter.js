function convertToRoman(num) {
    const arr = [[1000, 'M'], [900, "CM"], [500, 'D'], [400, "CD"], [100, 'C'], [90, "XC"], [50, 'L'], [40, "XL"], [10, "X"], [9, 'IX'], [5, "V"], [4, 'IV'], [1, "I"]]
  
   let result = "";
  
   for(let i = 0; i < arr.length; i++){
     if(num >= arr[i][0]){
       result = result + arr[i][1];
       num = num - arr[i][0]
      i--;
     }
   }
   return result;
  }
  
  convertToRoman(97);
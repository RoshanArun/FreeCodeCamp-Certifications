function palindrome(str) {
    let reverse = "";
    let spacesReplaced = str.replaceAll(/[, _.-]+/g, "");
    let lowercase = spacesReplaced.toLowerCase()
  
    for (let i = spacesReplaced.length; i > 0; i--) {
      if(lowercase[i - 1] == "("){
        reverse = reverse + ")";
      }else if(lowercase[i - 1] == ")"){
        reverse = reverse + "(";
      }else{
          reverse = reverse + lowercase[i - 1];
      }
    }
  
    console.log(lowercase)
    console.log(reverse)
    if(lowercase == reverse){
      return true
    }else{
      return false
    }
  }
  
  palindrome("race car");
  palindrome("A man, a plan, a canal. Panama")
  palindrome("0_0 (: /-\ :) 0-0")
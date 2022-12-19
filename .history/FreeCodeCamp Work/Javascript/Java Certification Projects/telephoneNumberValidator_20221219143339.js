function telephoneCheck(str) {
    let x = str.replaceAll(/[ ()-]/g, "");
    let y = str.length;
    if(str.includes(")")){
      if(!str.includes("(")){
        return false;
      }
    }
  
    if(str.includes("(")){
      if(!str.includes(")")){
        return false;
      }
    }

    if(str[y - 1] == ")"){
      return false;
    }
  
    if(x.length >= 11 && x[0] != 1){
      return false;
    }
  
    var re = /^[1]?[ ]?[(]?[0-9]{3}[)]?[- ]?[0-9]{3}[- ]?[0-9]{4}/im;
    return re.test(str);
  }
  
  telephoneCheck("555-555-5555");
  telephoneCheck("555-5555");
  telephoneCheck("123**&!!asdf#");
  telephoneCheck("2 (757) 622-7382")
  telephoneCheck("-1 (757) 622-7382");
  telephoneCheck("0 (757) 622-7382");
  telephoneCheck("2 757 622-7382")
  telephoneCheck("(6054756961)")
  
function rot13(str) {
    let result = 0;
    let char = 0;
    let end = "";
    
    for(let i = 0; i < str.length; i++){
      if(str.charCodeAt(i) >= 78){
        result = str.charCodeAt(i) - 13; 
      }else if(str.charCodeAt(i) == 32 || str.charCodeAt(i) == 33 || str.charCodeAt(i) == 46 || str.charCodeAt(i) == 63){
        result = str.charCodeAt(i);
      }
      else{
       result = str.charCodeAt(i) + 13;
      }
      end = end + String.fromCharCode(result);
    }
    
      return end;
    }
    
    rot13("SERR PBQR PNZC");
    rot13("SERR CVMMN!");
    rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.");
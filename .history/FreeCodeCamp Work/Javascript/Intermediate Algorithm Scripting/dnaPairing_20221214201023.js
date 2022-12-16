function pairElement(str) {
    let test = [];
    let test2 = [];
  
    for(let i = 0; i < str.length; i++){
      if(str[i] == "G"){
        test.push('G');
        test.push('C');
      }else if(str[i] == "C"){
        test.push("C");
        test.push("G");
      }else if(str[i] == "T"){
        test.push("T");
        test.push("A");
      }else{
        test.push("A");
        test.push("T");
      }
    }
  
    for(let i = 0; i < str.length * 2; i = i + 2){
      const chunk = test.slice(i, i + 2);
      test2.push(chunk)
    }
  
    console.log(test2)
    return test2;
  }
  
  pairElement("GCG");
  pairElement("ATCG");
  
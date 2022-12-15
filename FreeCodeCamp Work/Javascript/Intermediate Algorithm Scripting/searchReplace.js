function myReplace(str, before, after) {
    let temp = str;
    let firstCap = after.charAt(0).toUpperCase();
    let firstLower = after.charAt(0).toLowerCase();
    let first = after.charAt(0);
  
    if(before.charAt(0) == before.charAt(0).toUpperCase()){
      after = after.replace(first, firstCap);
    }
    if(before.charAt(0) == before.charAt(0).toLowerCase()){
      after = after.replace(first, firstLower);
    }
    console.log(temp.replace(before, after))
    return temp.replace(before, after);
  }
  myReplace("He is Sleeping on the couch", "Sleeping", "sitting")
  myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
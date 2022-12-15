function translatePigLatin(str) {
    let vowel = /^[aeiou]+$/;
    let temp = "";
    let result = "";
    let len = str.length;
  
    for (let i = 0; i < str.length; i++) {
      if (vowel.test(str[i])) {
        temp = str.slice(0, i);
        result = str.slice(i)
        result = result + temp + "ay"
        i = str.length;
      }
    }
  
    if (vowel.test(str[0])) {
      result = str + "way";
    }
    if(!vowel.test(str[0]) && result[len + 1] !== "y"){
      result = str + "ay";
    }
    console.log(result);
    return result;
  }
  
  
  translatePigLatin("glove");
  translatePigLatin("consonant");
  translatePigLatin("eight");
  translatePigLatin("schwartz");
  translatePigLatin("rhythm");
  
  let str1 = "God helps those who help themselves";
  let str2 = "You can't expect everyone to like you";
  let testRegex = /help/;
  testRegex.test(str1); //returns true
  testRegex.test(str2); //returns false
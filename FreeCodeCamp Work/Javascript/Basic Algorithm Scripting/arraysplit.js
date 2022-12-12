function chunkArrayInGroups(arr, size) {
    var newarr = [];
  
    for(let i = 0; i < arr.length; i = i + size){
      newarr.push(arr.slice(i, i + size));
    }
    return newarr;
  }
  
  chunkArrayInGroups(["a", "b", "c", "d"], 2);
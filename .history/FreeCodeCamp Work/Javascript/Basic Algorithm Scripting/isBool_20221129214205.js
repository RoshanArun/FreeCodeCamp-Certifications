function booWho(bool) {
    if(bool === true || bool === false){
      return true;
    }
    else{
      return false;
    }
  }
  
  booWho(null);
  booWho(true);
  booWho([].slice);
  booWho({ "a": 1 });
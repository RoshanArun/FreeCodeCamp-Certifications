function checkCashRegister(price, cash, cid) {
    const insufficient = {status: "INSUFFICIENT_FUNDS", change: []}
    const closed = {status: "CLOSED", change: []}
    const open = {status: "OPEN", change: []}
    let currentMoney = 0;
    let change = cash - price;
    let count = 0;
  
    let money = [
      ["ONE HUNDRED", 100],
      ["TWENTY", 20], 
      ["TEN", 10], 
      ["FIVE", 5], 
      ["ONE", 1], 
      ["QUARTER", .25], 
      ["DIME", .10], 
      ["NICKEL", .05], 
      ["PENNY", .01],
      ];
  
    for(let i = 0; i < cid.length; i++){
      closed.change.push([cid[i][0], cid[i][1]]);
      currentMoney = currentMoney + cid[i][1];
    }
  
  
  
    if(currentMoney < change){
      return insufficient;
    }
  
    if(currentMoney == change){
      return closed;
    }
  
    for(let i = 0; i < money.length; i++){
      let type = money[i][0];
      let value = money[i][1];
      let total = cid.find(item => item[0] === type)[1];
  
      if(change > value && change > total){
        change = change - total;
        open.change.push([type, total]);
              console.log(change)
      }else if(change > value && total > change){
        let pay = Math.floor(change / value) * value;
        change = change - pay
        change = parseFloat(change.toFixed(2));
        open.change.push([type, pay])
      }
    }
  
    if(change > 0){
      return insufficient;
    }
    console.log(open);
    return open;
  }
  
  checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])
  
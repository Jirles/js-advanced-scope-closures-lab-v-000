function createDriver(){
  let DriverId = 0;
  return class {
    constructor(name){
      this.id = ++DriverId;
      this.name = name;
    }
  };
};

function produceDrivingRange(blockRange){
  return function (startBlock, endBlock) {
    //convert startBlock and endBlock into integers
    //starting format = '20th', '30th'
    const delta = Math.abs(parseInt(startBlock.slice(0,2) - parseInt(endBlock.slice(0,2))));
    if ( delta > blockRange ){
      return `${delta - blockRange} blocks out of range`;
    } else {
      return `within range by ${blockRange - delta}`;
    }
  };
};

function produceTipCalculator(tipPercentage){
  return function(bill){
    return bill * tipPercentage;
  };
};

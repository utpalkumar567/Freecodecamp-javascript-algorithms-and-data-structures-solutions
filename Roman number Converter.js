function convertToRoman(num) {
  // Create Roman Number Lookup Table
  const lookupTable = {
    M : 1000,
    CM : 900,
    D	: 500,
    CD : 400,
    C :	100,
    XC : 90,
    L : 50,
    XL : 40,
    X : 10,
    IX : 9,
    V : 5,
    IV : 4,
    I : 1
  }

  // Create Roman Number Accumulator
  let accumulator = '';
  // Loop Through Lookup table
  for (const key in lookupTable){
    const numValue = lookupTable[key];
  // while currentnum <= num then substract current num from num. Add symbol to accumulator

  while (numValue <= num){
    num = num-numValue;
    accumulator = accumulator + key;
  }
  }
//return accumulator
 return accumulator;
}

convertToRoman(36);

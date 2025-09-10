function doMaths(formula) {
  let numTotal = [];
  let operatorUse = [];
  let letter = [];
  realFormula = formula.split(" ");
  console.log(realFormula);
  realFormula.forEach((item) => {
    if (/^[a-zA-Z]$/.test(item)) {
      console.log(item, "is a letter");
      letter.push(item);
    } else if (/^\d+$/.test(item)) {
      
      console.log(item, "is a number");
      numTotal.push(item);
    } else {
      console.log(item, "is an operator");
      operatorUse.push(item);
    }
  });
  console.log(operatorUse[0]);
  console.log(numTotal);
  if (operatorUse.includes("+", "=")) {
    console.log("x=", Number(numTotal[1]) - Number(numTotal[0]));
  } else if (operatorUse.includes("-", "=")) {
    let minusOperator = Number(numTotal[0]) - Number(numTotal[1]);
    let nowNegative = -minusOperator;
    console.log(letter[0], "=", -nowNegative);
  } else {
    console.log("what?");
  }
}

doMaths("2 - x = 19");

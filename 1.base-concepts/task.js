"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let calcDiscriminant = Math.pow(b, 2) - 4 * a * c;

  if (calcDiscriminant < 0) {
    arr = [];
  } else if (calcDiscriminant === 0) {
    let z = -b / (2 * a);
    arr.push(z);
  } else {
    let x = (-b + Math.sqrt(calcDiscriminant)) / (2 * a);
    let y = (-b - Math.sqrt(calcDiscriminant)) / (2 * a);
    arr.push(x, y);
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let returnAmount = amount - contribution;
  let newPercent = percent / 100 / 12;
  let paymentMonths = returnAmount * (newPercent + (newPercent / (((1 + newPercent) ** countMonths) - 1)));
  let totalAmounts = Number((Math.round((paymentMonths * countMonths) * 100) / 100));
  return totalAmounts;
}
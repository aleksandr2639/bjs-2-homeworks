function getArrayParams(...arr) {
  let min = arr[0];
  let max = arr[0];
  let sum = arr.reduce((sum, current) => sum + current, 0)
  min = Number(Math.min(...arr));
  max = Number(Math.max(...arr));
  let avg = Number((sum / arr.length).toFixed(2));
  return {
    min: min,
    max: max,
    avg: avg
  };
}

function summElementsWorker(...arr) {
  if (arr) {
    let sum = arr.reduce((sum, current) => sum + current, 0);
    return sum;
  }
  else return 0;
}

function differenceMaxMinWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }
  else {
    let min = Number(Math.min(...arr));
    let max = Number(Math.max(...arr));
    let difference = max - min;
    return difference;
  }
}

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;
  if (arr.length === 0) {
    return 0;
  }
  else {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        sumEvenElement = sumEvenElement + arr[i];
     }  else sumOddElement = sumOddElement + arr[i];
    }
    return sumEvenElement - sumOddElement;
  }
}

function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0;
  let countEvenElement = 0;
  if (arr.length === 0) {
    return 0;
  }
  else {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 == 0) {
        sumEvenElement = sumEvenElement + arr[i];
        countEvenElement = countEvenElement + 1;
      }
    }
    return sumEvenElement / countEvenElement
  }
}

function makeWork (arrOfArr, func) {

}

const arr = [49, 30, 19, 2, 29];

const sum = arr.reduce((preVal, currentVal) => {
  return preVal + currentVal;
}, 0);

const mul = arr.reduce((preVal, currentVal) => {
  return preVal * currentVal;
}, 1);
console.log(sum, " and ", mul);

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [2, 3, 6];
// const num = 5;

const arr = arr1.reduce((preVal, crtVal) => {
  // console.log(preVal, "   ", crtVal);
  if (!arr2.includes(crtVal)) return preVal.concat(crtVal);
  return preVal;
}, []);

console.log(arr);

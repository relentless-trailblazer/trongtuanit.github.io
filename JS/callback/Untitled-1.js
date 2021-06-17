const arr = [1, 2, 3, 4, 5, 100];

// arr.forEach((value, index) => {
//   console.log(value, index);
// });

// function arrForEach(value, index) {
//   console.log(value, index);
// }

const arr1 = arr.map((value, index) => {
  return value + index;
});
// console.log(arr1);

const arr2 = arr.filter((value) => {
  if (value > 2) return value;
});
// console.log(arr2);

const arr3 = arr.every((value) => {
  return value > 0;
});
// console.log(arr3);

// const something;
// if([0,1,2].includes(something)) { // somthing == 1 || something==2 || something==3
// // ...
// }

// let arr4 = arr.sort(); // kiem tra theo ki tu du mang la number
// console.log(arr4);
const arr4 = arr.sort((a, b) => a - b);
// console.log(arr4);

const callback = (previousValue, currentValue, currentIndex) => {
  // console.log(previousValue);
  return previousValue.concat(currentValue);
};

const arr5 = arr.reduce(callback, []);

console.log(arr5);

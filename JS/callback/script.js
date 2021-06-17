// function sayHi() {
//   console.log("hi");
// }

// setTimeout(sayHi, 1000);

// const timeId = setTimeout(() => {
//   console.log("hi");
// }, 2000);

// clearTimeout(a);

// console.log(a);

let count = 0;

// marco task: setInterval, setTimeout
// micro task: promise
const timeId = setInterval(() => {
  count++;
  console.log(count);
  if (count === 5) clearInterval(timeId);
}, 2000);

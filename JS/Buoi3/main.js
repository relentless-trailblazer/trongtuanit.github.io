const arr = [0,1,54,2,3,54,4];

// const test = arr.forEach((el) => el*2);
// const test2 = arr.slice(2,4); 
// arr.splice(1,4); // xoa 4 ptu tu index 1
// arr.splice(1,0,99,100,111); // cat + them
// arr.pop();  //xoa ptu cuoi
// arr.unshift(99); //them vao dau
// arr.shift(); // xoa ptu dau
// const a = arr.indexOf(54);
// const b = arr.lastIndexOf(54);
// const test3 = arr.join(''); // noi mang thanh chuoi
// const test4 = arr.includes(54); // kiem tra exist
// arr.sort( (a,b) => b-a );  // a,b=>a-b : tang dan, a,b=>b-a : giam dan
//arr.reverse(); // reverse arr
// const ele = arr.find(el => el > 2); // tim phan tu dau tien thoa man dkien
// const str = "this is iht that";
// const arr2 = str.split("th"); // xoa "th" trong cac chu, noi chuoi da bi xoa "th" vs chuoi con lai 


const fs = require('fs');

function readFile(path) {
  return new Promise(function(resolve, reject) {
    fs.readFile("./data.txt", {endcoding:"utf-8"}, function(err,data){
      if(err) {
        reject(err);
      } else{
        resolve(data);
      }
    });
  });
} 

const data = readFile("./data.txt") 
  .then(function(data) {
    console.log(data);
  })
  .catch(function (err) {
    console.log(err);
  })
  .finally(function() {
    console.log("End");
  })
console.log(data);



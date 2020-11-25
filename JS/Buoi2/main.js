//		CallBack
// function map2(arr, fn) {
//   let arr1 = [];
//   for(const a of arr) {
//     arr1.push(fn(a));
//   }
//   return arr1;
// }
// function doubleValue(a) {
//   return a + '';
// }
// const arr34 = [1,2,3,4,5];
// console.log(map2(arr34, doubleValue));



const listUser = [
	{name: 'K', age: 8},
	{name: 'B', age: 3},
	{name: 'A', age: 18},
	{name: 'M', age: 42},
	{name: 'E', age: 78},
]

//															MAP
const newArr = listUser.map(function(value, index) {
	if(value.age > 10)
		return `Xin chào ${value.name} ${value.age} tuoi`;
	else	
		return 0;
}) 
console.log(newArr);

// 															FILTER
// const newArr = listUser.filter(function(value, index) {
// 	return value.age>10;
// }) 
// console.log(newArr);


// function configDisplay(a) {
// 	return '<p>Xin chào <b> '+a.name+' </b> '+a.age+' tuổi</p>';
// }


// function Display(listUser, fn) { 
// 	const newObj = [];
// 	for(const element of listUser) {
// 		newObj.push(fn(element))
// 	}
// 	return newObj;
// }

// console.log(Display(listUser,configDisplay));






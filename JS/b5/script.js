//                                   I
// let customkey = "gender";
// let admin = {
//   [customkey]: "male",
// };

// admin["is admin"] = true;
// admin["name"] = "tuan";
// let key = "age";
// admin.salary = 30;
// admin[key] = 30; // admin.age = 30;

// console.log(`admin has key named gender : ${"gender" in admin}`);
// console.log(
//   `name : ${admin["name"]}, age: ${admin["age"]}, gender: ${admin.gender}, is admin: ${admin["is admin"]}`
// );
// delete admin["name"];
// console.log(admin);
//                                  II
// function makeUser(name, age) {
//   return {
//     name,
//     age,
//   };
// }

// let user = makeUser("a", "b");
// console.log(user);

//  if keys dont have + character:
//    prettier auto format key to number
//    when use for in, codes auto order by keys integer properties
let codes = {
  "+49": "Germany",
  "+41": "Switzerland",
  "+44": "Great Britain",
  "+1": "USA",
};

for (code in codes) {
  console.log(code);
}

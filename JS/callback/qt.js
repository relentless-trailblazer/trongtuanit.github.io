const person = {
  name: "tuan",
  age: 20,
};

const obj = {
  name: "aaa",
  hello: function (place) {
    console.log(place);
    console.log(this.name);
  },
};

// call va apply dung cho doi tuong

// const sayHello = obj.hello;
// sayHello();
// sayHello.call(person, "Quảng Ninh");
// sayHello.apply(person, ["Quảng Ninh"]);
// sayHello.hello();

function hello() {
  console.log(this.name);
}

const sayHello = hello.bind(person); // bind dung cho function
sayHello();

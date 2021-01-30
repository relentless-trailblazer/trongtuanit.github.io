function setName(name) {
    return name;
}

function sayHello(name, fn) {
    console.log('Hello..............');
    console.log('My name is', fn(name));
}

sayHello('Tuan', setName);
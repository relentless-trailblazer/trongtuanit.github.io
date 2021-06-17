function a() {
  var count = 1;
  const counter = () => {
    count++;
  };
  counter();
  console.log(count);
}


a();

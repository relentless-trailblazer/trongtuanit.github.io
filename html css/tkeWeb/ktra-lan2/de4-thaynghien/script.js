const nhap = document.getElementById("nhap");
const xuat = document.getElementById("xuat");
const tinh = document.getElementById("tinh");


const REGEX_NUMBER = "^[0-9]*$";

function checkPerfectNumber( n) {
  var sum = 0;
  for (var i = 1; i <= n/2; i++) {
      if (n % i == 0) {
          sum += i;
      }
  }
  return sum == n;
}

tinh.addEventListener('click', function() {
  const arr = [];
  if(!nhap.value.match(REGEX_NUMBER)) {
    alert("Nhap vao so");
  } else {
    const n = nhap.value;
    for(var i = 1; i <= n; i++) {
      if(checkPerfectNumber(i)) {
        arr.push(i);
      }
    }
  }
  if(arr.length == 0) {
    xuat.value = "Khong co so hoan hao!";
  } else {
    xuat.value = arr.join(',');
  }

})
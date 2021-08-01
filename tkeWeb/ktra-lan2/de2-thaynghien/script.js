const name = document.getElementById("name");
const address = document.getElementById("address");
const checkBtn = document.getElementById("check");


function validate(string)
{
  string = string.trim().replace(/ +/g,' ');
  string.charAt(0).toUpperCase();

  var arr = string.split(' ');
  for(i = 0; i < arr.length; i++) 
  {
    if(arr[i].length > 1) {
      arr[i] = arr[i].toLowerCase();
      arr1 = arr[i].split('');
      arr1[0] = arr1[0].toUpperCase();
      arr[i] =arr1.join('');
    } else { 
      arr[i] = arr[i].toUpperCase();
    }
  }
  string = arr.join(' ');

	return string;
}



checkBtn.addEventListener('click', function (e) {
  e.preventDefault();
  const [nameVal, addressVal] = [name.value, address.value];
  if([nameVal, addressVal].includes('')) {
    alert("Không để trống trường tên hoặc địa chỉ!");
    return;
  } else {
    address.value = validate(addressVal);
  }
})
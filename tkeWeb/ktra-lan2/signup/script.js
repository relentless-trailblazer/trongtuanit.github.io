const username = document.getElementById("username");
const password = document.getElementById("password");
const radios = document.getElementsByName('gender');
const phone = document.getElementById("phone");
const description = document.getElementById("description");
const signup = document.getElementById("signup");
const cancel = document.getElementById("cancel");
const REGEX_PHONE = "[0-9\.\-]+$";


signup.addEventListener('click', () => {
  let radioValue;
  for (var i = 0, length = radios.length; i < length; i++) {
    if (radios[i].checked) {
      radioValue = (radios[i].value);
      break;
    }
  }
  const [usernameVal, passwordVal, phoneVal, descriptionVal] = [
    username.value,
    password.value,
    phone.value,
    description.value,
  ];
  if([usernameVal, passwordVal, radioValue, phoneVal, descriptionVal].includes('') || !radioValue) {
    alert("Điển đầy đủ các trường!(Chú ý tick giới tính)");
    return;
  } else if (!phoneVal.match(REGEX_PHONE)) {
    alert('SĐT không đúng định dạng!');
    return;
  }
  alert("Ok")
})

cancel.addEventListener('click', () => {
  username.value = password.value = phone.value = description.value = '';
})
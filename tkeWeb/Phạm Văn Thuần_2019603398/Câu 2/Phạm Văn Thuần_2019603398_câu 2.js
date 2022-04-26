const REGEX_PASSWORD = /^(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/; // 1 kí tự hoa, 1 số , 8 kí tự
const username = document.getElementById("input");
const password = document.getElementById("result");
const submit = document.getElementById("submit");

submit.addEventListener("click", () => {
  if (username.value === "" || password.value === "") alert("Bạn nhập sai");
  else if (!password.value.match(REGEX_PASSWORD)) alert("Bạn nhập sai");
  else if (!isNaN(parseInt(password.value[0]))) alert("Bạn nhập sai!");
  else alert("Bạn nhập đúng");
});

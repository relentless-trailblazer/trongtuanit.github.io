const username = document.querySelector("#username");
const password = document.querySelector("#password");
const submitBtn = document.querySelector("#submit");

const REGEX_PASSWORD = "^(?=.*?[A-Z])(?=.*?[a-z]).{8,}$ ";

username.addEventListener("focusout", (e) => {
  if (e.target.value === "") {
    document.getElementById("exception1").style.display = "block";
    document.getElementById("exception1").innerText =
      "Username không được để trống!";
  } else {
    document.getElementById("exception1").style.display = "none";
    document.getElementById("exception1").innerText = "";
  }
});

password.addEventListener("focusout", (e) => {
  const value = e.target.value;
  if (!value.match(REGEX_PASSWORD || value === "")) {
    document.getElementById("exception2").style.display = "block";
    document.getElementById("exception2").innerText = "Password sai định dạng!";
  } else {
    document.getElementById("exception2").style.display = "none";
    document.getElementById("exception2").innerText = "";
  }
});

function login(e) {
  if (username.value === "" || password.value === "") {
    alert("Không được để trống trường username hoặc password");
  } else if (username.value === `"admin"_` && password.value === "123456a@") {
    alert(
      "Yêu cầu password có kí tự hoa, không bắt đầu bằng số mà bạn vẫn đoán được, giỏi quá! Bạn là nhất!"
    );
    alert("Đăng nhập thành công!");
  } else {
    alert("Đăng nhập thất bại !");
  }
}

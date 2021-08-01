const title = document.getElementById("title");
const receiver = document.getElementById("receiver");
const file = document.getElementById("file");
const content = document.getElementById("content");
const send = document.getElementById("send");
const cancel = document.getElementById("cancel");
const REGEX_FILE = "[a-zA-Z\:\/\-]+$"

send.addEventListener("click", () => {
  const [titleVal, receiverVal, fileVal, contentVal] = [
    title.value,
    receiver.value,
    file.value,
    content.value,
  ];

  if ([titleVal, receiverVal, fileVal, contentVal].includes("")) {
    alert("Khong duoc de trong tat ca cac mien");
    return;
  }
  if (!fileVal.match(REGEX_FILE)) {
    alert("Nhap sai dinh danh file");
    return;
  }
  alert("Ok");
});

cancel.addEventListener("click", () => {
  title.value  =receiver.value = file.value = content.value = ''
})
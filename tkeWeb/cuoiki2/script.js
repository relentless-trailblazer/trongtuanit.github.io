const input = document.getElementById("input");
const result = document.getElementById("result");
const submit = document.getElementById("submit");
const cancel = document.getElementById("cancel");

submit.addEventListener("click", () => {});

cancel.addEventListener("click", () => {
  input.value = result.value = "";
});

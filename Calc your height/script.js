const input = document.getElementById("input");
const submit = document.getElementById("submit");
const back = document.getElementById("back");

submit.addEventListener("click", (event) => {
  if (!input.value) return;
  event.preventDefault();
  alert(`Your height is: ${input.value} cm!`);
  input.value = "";
});

input.addEventListener("keydown", (e) => {
  if (["e"].includes(e.key)) {
    e.preventDefault();
  }
});

back.addEventListener("click", (e) => {
  if (!e.view.history) window.close();
  e.view.history.back();
});

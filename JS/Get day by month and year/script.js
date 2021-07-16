const year = document.getElementById("year");
const day = document.getElementById("day");
const month = document.getElementById("month");
const submit = document.getElementById("submit");

submit.addEventListener("click", () => {
  day.value = new Date(year.value, month.value, 0).getDate();
});

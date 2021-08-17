const input = document.getElementById("getfile");
const submit = document.getElementById("submit-btn");
let file = null;

input.addEventListener("change", (e) => {
  file = e.target.files[0];
  console.log(file);
  const url = URL.createObjectURL(e.target.files[0]);
  console.log(url);
  console.log(file);

  // create a hidden anchor tag and auto click to download file
  // const a = document.createElement("a");
  // a.download = `${file.name}`;
  // a.href = url;
  // a.style.display = "none";
  // document.body.append("a");
  // a.click();
});

submit.addEventListener("click", (e) => {
  if (!file) return;
  e.preventDefault();
});

async function postImage(url, data) {
  const formData = new FormData();

  for (const name in data) {
    formData.append(name, data[name]);
  }

  const response = await fetch(url, {
    method: "POST",
    body: formData,
  });

  // ...
}

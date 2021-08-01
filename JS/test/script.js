const input = document.getElementById("getfile");

input.addEventListener("change", (e) => {
  const file = e.target.files[0];
  const url = URL.createObjectURL(e.target.files[0]);
  console.log(url);
  console.log(file);

  // create a hidden anchor tag and auto click to download file
  const a = document.createElement("a");
  a.download = `${file.name}`;
  a.href = url;
  a.style.display = "none";
  document.body.append("a");
  a.click();
});

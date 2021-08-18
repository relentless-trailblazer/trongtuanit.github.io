(function renderImagesUploaded() {
  console.clear();
  let imgStorage;
  if (localStorage.getItem("imgStorage") === null) {
    imgStorage = [];
  } else {
    imgStorage = JSON.parse(localStorage.getItem("imgStorage"));
  }

  if (imgStorage) {
    let images = document.querySelector("#images");
    for (const ele of imgStorage) {
      let div = document.createElement("div");
      let a = document.createElement("a");
      let copyBtn = document.createElement("button");

      div.setAttribute("class", "row");
      copyBtn.setAttribute("class", "copy-btn");
      copyBtn.textContent = "Copy";
      copyBtn.addEventListener("click", () => {
        navigator.clipboard.writeText(ele);
      });
      a.textContent = ele;

      div.append(a);
      div.append(copyBtn);
      images.append(div);
    }
  }
})();

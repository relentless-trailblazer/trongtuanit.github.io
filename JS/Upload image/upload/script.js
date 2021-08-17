import { getAllImages, postImagesByStudentId } from "../api.js";
console.clear();
const input = document.querySelector("#files");
const upload = document.getElementById("upload");
const notice = document.querySelector("#form-notice");
let files = [];


const renderLinksAfterUpload = (imagesUploaded) => {
  let links = [];
  console.log(imagesUploaded);
  for (const imageUploaded of imagesUploaded) {
    // console.log(imageUploaded.imageLink);
    links.push(imageUploaded.imageLink);
  }
  // console.log(links);
  let container = document.querySelector("#links");
  container.innerHTML = "";

  // get links in local storage
  let imgStorage;
  if (localStorage.getItem("imgStorage") === null) {
    imgStorage = [];
  } else {
    imgStorage = JSON.parse(localStorage.getItem("imgStorage"));
  }
  
  for (const obj of links) {
    imgStorage.push(obj);
    let a = document.createElement("a");
    let br = document.createElement("br");
    a.innerHTML = obj;
    a.setAttribute("href", `${obj}`);
    container.append(a);
    container.append(br);
  }
  localStorage.setItem("imgStorage", JSON.stringify(imgStorage));
};

input.addEventListener("change", (event) => {
  files = event.target.files;
  // console.log(files);

  notice.textContent = `${files.length} ${
    files.length > 1 ? "files" : "file"
  } selected`;
});

upload.addEventListener("click", (event) => {
  event.preventDefault();
  if (!files || files.length === 0) {
    return;
  }
  // append img to form data 
  let formData = new FormData();
  for (const file of files) {
    formData.append("files", file, file.name);
    // console.log(file);
  }
  postImagesByStudentId(formData).then((res) => renderLinksAfterUpload(res));

  // reset html elements
  input.value = "";
  files = [];
  notice.textContent = `${files.length} ${
    files.length > 1 ? "files" : "file"
  } selected`;
});

// getAllImages().then((res) => console.log(res));

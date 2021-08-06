import { getListUsers, postUser, patchtUser, deleteUser } from "./api.js";

function createApp(users) {
  (function renderUsers(users) {
    if (users.length === 0) return;
    const defaultView =
      "<tbody><tr><th>Id</th><th>Name</th><th>YOB</th><th>Gender</th><th>Edit</th><th>Delete</th></tr></tbody>";

    const view = document.getElementById("view");
    view.innerHTML = "";

    function createElements(users, view) {
      for (let i = 0; i < users.length; i++) {
        // create tags
        let tr = document.createElement("tr");
        let tdId = document.createElement("td");
        let tdName = document.createElement("td");
        let tdBirth = document.createElement("td");
        let tdGender = document.createElement("td");

        let tdEditBtn = document.createElement("td");
        let tdDeleteBtn = document.createElement("td");

        // define text content
        tdId.innerText = users[i].id;
        tdName.innerText = users[i].fullName;
        tdBirth.innerText = users[i].birthday;
        tdGender.innerText = users[i].gender;

        // append items to view
        tdEditBtn.append(document.createElement("button"));
        tdDeleteBtn.append(document.createElement("button"));
        tdEditBtn.children[0].setAttribute("class", "editBtn");
        tdEditBtn.children[0].innerText = "Edit";
        tdDeleteBtn.children[0].setAttribute("class", "deleteBtn");
        tdDeleteBtn.children[0].innerText = "Delete";

        tr.append(tdId, tdName, tdBirth, tdGender, tdEditBtn, tdDeleteBtn);
        view.tBodies[0].append(tr);
      }
    }

    view.innerHTML = defaultView;
    createElements(users, view);
  })(users);

  document.getElementById("add").onclick = (e) => {
    let name = document.getElementById("name");
    let birth = document.getElementById("birth");
    let gender = document.getElementById("gender");

    if (!birth.value || !name.value || !gender.value) {
      return;
    }

    const user = {
      fullName: name.value,
      birthday: Number(birth.value),
      gender: gender.value,
    };

    postUser(user);
    name.value = "";
    birth.value = "";
    gender.value = "";
  };

  // handle form edit button click
  document.getElementById("edit").addEventListener("click", (e) => {
    let id = document.getElementById("userId");
    let name = document.getElementById("name");
    let birth = document.getElementById("birth");
    let gender = document.getElementById("gender");
    if (!name.value || !birth.value || !gender.value) {
      return;
    }
    const user = {
      fullName: name.value,
      birthday: birth.value,
      gender: gender.value,
    };
    const userId = id.value;
    patchtUser(user,userId);
    document.getElementById("add").style.display = "block";
    id.value = name.value = birth.value = gender.value = null;
  });

  //handle view edit button click
  const editBtns = document.querySelectorAll(".editBtn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      let id = document.getElementById("userId");
      let name = document.getElementById("name");
      let birth = document.getElementById("birth");
      let gender = document.getElementById("gender");

      add.style.display = "none";
      let editId = Number.parseInt(
        e.target.parentElement.parentElement.children[0].innerText
      );
      
      

      id.value = editId;
      name.value = e.target.parentElement.parentElement.children[1].innerText;
      birth.value = e.target.parentElement.parentElement.children[2].innerText;
      const oldGender = e.target.parentElement.parentElement.children[3].innerText;
      if (["nữ", "Nữ", "Female", 'female', "Nữm"].includes(oldGender)) {
        gender.selectedIndex = 1;
      } else {
        gender.selectedIndex = 0;
      }
    });
  });

  //handle delete click
  const deleteBtns = document.getElementsByClassName("deleteBtn");
  for (let i = 0; i < deleteBtns.length; i++) {
    deleteBtns[i].addEventListener("click", (e) => {
      let userId = e.target.parentElement.parentElement.firstChild.innerText;
      deleteUser(userId);
    });
  }
}

getListUsers();
export { createApp };

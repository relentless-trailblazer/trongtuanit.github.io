function render() {
  const defaultView =
    "<tbody><tr><th>Id</th><th>Name</th><th>YOB</th><th>Gender</th><th>Edit</th><th>Delete</th></tr></tbody>";
  const view = document.getElementById("view");
  view.innerHTML = "";
  const createUser = (id, name, birth, gender) => {
    return {
      id,
      name,
      birth,
      gender,
    };
  };

  // get data in local storage

  // create elements for view
  function createElements(view) {
    let users;
    if (localStorage.getItem("users") === null) {
      users = [];
      localStorage.setItem("users", JSON.stringify([]));
    }
    users = JSON.parse(localStorage.getItem("users"));
    if (users.length === 0) return;
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
      tdName.innerText = users[i].name;
      tdBirth.innerText = users[i].birth;
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
  createElements(view);

  // handle add click
  document.getElementById("add").onclick = (e) => {
    let name = document.getElementById("name");
    let birth = document.getElementById("birth");
    let gender = document.getElementById("gender");
    let users = JSON.parse(localStorage.getItem("users"));
    let lastId;
    if (users.length == 0) {
      lastId = 0;
    } else {
      lastId = new Number(users[users.length - 1].id);
    }
    if (!birth.value || !name.value || !gender.value) {
      return;
    }
    users.push(createUser(lastId + 1, name.value, birth.value, gender.value));
    localStorage.setItem("users", JSON.stringify(users));
    render();
  };

  // handle form edit button click
  document.getElementById("edit").addEventListener("click", (e) => {
    let id = document.getElementById("userId");
    let name = document.getElementById("name");
    let birth = document.getElementById("birth");
    let gender = document.getElementById("gender");
    let users = JSON.parse(localStorage.getItem("users"));
    if (!name.value || !birth.value || !gender.value) {
      return;
    }
    const editedUser = createUser(
      parseInt(id.value),
      name.value,
      birth.value,
      gender.value
    );
    console.log(editedUser);
    let newUsers = [];
    for (let i = 0; i < users.length; i++) {
      if (users[i].id == editedUser.id) {
        newUsers[i] = Object.assign({}, editedUser);
      } else {
        newUsers[i] = Object.assign({}, users[i]);
      }
    }
    id.value = null;

    document.getElementById("add").style.display = "block";
    localStorage.setItem("users", JSON.stringify(newUsers));
    name.value = birth.value = gender.value = null;
    render();
  });

  //handle view edit button click
  const editBtns = document.querySelectorAll(".editBtn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      let id = document.getElementById("userId");
      let name = document.getElementById("name");
      let birth = document.getElementById("birth");
      let gender = document.getElementById("gender");
      let users = JSON.parse(localStorage.getItem("users"));

      add.style.display = "none";
      let editId = Number.parseInt(
        e.target.parentElement.parentElement.children[0].innerText
      );
      let editUser;
      users.forEach((user) => {
        if (user.id == editId) {
          editUser = Object.assign({}, user);
        }
      });
      id.value = editId;
      name.value = editUser.name;
      birth.value = editUser.birth;
      if (editUser.gender === "Female") {
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
      let users = JSON.parse(localStorage.getItem("users"));
      let delId = e.target.parentElement.parentElement.firstChild.innerText;
      for (let j = 0; j < users.length; j++) {
        if (users[j].id == delId) {
          users.splice(j, 1);
          break;
        }
      }
      localStorage.setItem("users", JSON.stringify(users));
      render();
    });
  }
}

document.addEventListener("DOMContentLoaded", render);

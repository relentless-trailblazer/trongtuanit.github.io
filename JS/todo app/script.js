import { setData as setData, getData as getData } from "./data.js";

const listTodos = getData();

function createTodo(id, duty, isCompleted = false) {
  return {
    id,
    duty,
    isCompleted,
  };
}

const input = document.getElementById("input");
input.focus();

input.addEventListener("change", (e) => {
  // if (e.keyCode === 13) {
  e.preventDefault();
  let id;
  let duty = e.target.value;
  console.log(listTodos);
  if (listTodos.length === 0) {
    id = 0;
  } else {
    id = new Number(listTodos[listTodos.length - 1].id) + 1;
  }
  const newListTodos = [...listTodos, createTodo(id, duty)];
  setData(newListTodos);
  e.target.value = "";
  location.reload();
  // }
});

const renderListTodos = (
  data,
  renderAll = true,
  renderActive = false,
  renderCompleted = false
) => {
  const tableTodo = document.getElementById("todo-list");
  tableTodo.innerHTML = "";
  if (data.length === 0) {
    return;
  }
  const completeAllBtn = document.createElement("button");
  completeAllBtn.setAttribute("class", "btn center-by-y");
  completeAllBtn.textContent = "Complete all";

  completeAllBtn.addEventListener("click", () => {
    const newData = data.map((ele) => {
      const newTodo = { ...ele };
      newTodo.isCompleted = true;
      return newTodo;
    });
    setData(newData);
    location.reload();
  });

  tableTodo.append(completeAllBtn);

  data.map((item) => {
    const { id, duty, isCompleted } = item;

    //create element
    const li = document.createElement("li");
    const p = document.createElement("p");
    const div = document.createElement("div");
    const deleteBtn = document.createElement("button");
    const completeBtn = document.createElement("button");

    //set attributes
    li.setAttribute("class", "todo");
    p.textContent = duty;
    if (isCompleted) {
      p.setAttribute("class", "text completed");
    } else {
      p.setAttribute("class", "text");
    }
    completeBtn.setAttribute("class", "btn mg-r20");
    if (isCompleted) {
      completeBtn.innerText = "Uncomplete";
    } else {
      completeBtn.innerText = "Complete";
    }
    deleteBtn.setAttribute("class", "btn");
    deleteBtn.innerText = "Delete";
    div.setAttribute("class", "flex");

    // addEventListner to handle event (delete and edit todo)
    deleteBtn.addEventListener("click", () => {
      const newData = data.filter((ele) => ele.id !== id);
      setData(newData);
      location.reload();
    });

    p.addEventListener("dblclick", (e) => {
      if (isCompleted) return;
      p.setAttribute("contenteditable", "true");
      completeBtn.setAttribute("disabled", "");
      deleteBtn.setAttribute("disabled", "");
    });

    p.addEventListener("focusout", (e) => {
      const newData = data.map((ele) => {
        if (ele.id === id) {
          const newTodo = { ...ele };
          newTodo.duty = p.textContent;
          return newTodo;
        }
        return ele;
      });
      setData(newData);
      p.removeAttribute("contenteditable");
      completeBtn.removeAttribute("disabled");
      deleteBtn.removeAttribute("disabled");
      location.reload();
    });

    completeBtn.addEventListener("click", () => {
      const newData = data.map((ele) => {
        if (ele.id === id) {
          const newTodo = { ...ele };
          newTodo.isCompleted = !newTodo.isCompleted;
          return newTodo;
        }
        return ele;
      });
      setData(newData);
      location.reload();
    });

    div.append(completeBtn);
    div.append(p);
    li.append(div);
    li.append(deleteBtn);
    tableTodo.append(li);
  });
};

function renderFooter(data) {
  if (data.length === 0) {
    const footer = document.getElementById("footer");
    footer.removeAttribute("id");
    return;
  }
  const footer = document.getElementById("footer");
  const countTodo = document.createElement("p");
  const featureBtns = document.createElement("div");
  const getAllBtn = document.createElement("buttton");
  const getActiveBtn = document.createElement("buttton");
  const getCompletedBtn = document.createElement("buttton");
  const clearAllCompletedBtn = document.createElement("buttton");

  countTodo.setAttribute("class", "text center-by-x");
  if (data.length <= 1) {
    countTodo.textContent = `${data.length} item left`;
  } else {
    countTodo.textContent = `${data.length} items left`;
  }

  featureBtns.setAttribute("class", "featureBtns");
  getAllBtn.setAttribute("class", "btn");
  getActiveBtn.setAttribute("class", "btn");
  getCompletedBtn.setAttribute("class", "btn");
  clearAllCompletedBtn.setAttribute("class", "btn");

  getAllBtn.setAttribute("id", "getAll");
  getActiveBtn.setAttribute("id", "getActive");
  getCompletedBtn.setAttribute("id", "getCompleted");
  clearAllCompletedBtn.setAttribute("id", "clearAllComplete");

  getAllBtn.textContent = "All";
  getActiveBtn.textContent = "Active";
  getCompletedBtn.textContent = "Completed";
  clearAllCompletedBtn.textContent = "Clear all completed";

  clearAllCompletedBtn.addEventListener("click", () => {
    const newData = data.filter((item) => item.isCompleted !== true);
    setData(newData);
    location.reload();
  });

  getAllBtn.addEventListener("click", () => {
    renderListTodos(data);
  });

  getActiveBtn.addEventListener("click", () => {
    const newData = data.filter((item) => item.isCompleted === false);
    renderListTodos(newData);
  });

  getCompletedBtn.addEventListener("click", () => {
    const newData = data.filter((item) => item.isCompleted === true);
    renderListTodos(newData);
  });

  featureBtns.append(getAllBtn);
  featureBtns.append(getActiveBtn);
  featureBtns.append(getCompletedBtn);
  footer.append(countTodo);
  footer.append(featureBtns);
  footer.append(clearAllCompletedBtn);
}

renderListTodos(listTodos);
renderFooter(listTodos);

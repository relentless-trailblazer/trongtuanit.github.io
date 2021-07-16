const API_URL = "https://computer-shop-hit.herokuapp.com/api/categories";

// retard

const renderData = (datas) => {
  const view = document.getElementById("view");
  datas.forEach((data) => {
    const htmlElement = `
      <div>
      <div>Category id: ${data.id}</div>
      <div>Category name: ${data.name}</div>
      <div> <p>Create at:</p> ${data.createAt}</div>
      <div> <p>Update at:</p> ${data.updateAt}</div>
      </div>
    `;
    view.innerHTML += htmlElement;
  });
};

function getJSON() {
  var promise = fetch(API_URL);
  promise
    .then((res) => {
      return res.json();
    })
    .then((JSON) => {
      renderData(JSON);
      return JSON;
    })
    .catch((err) => {
      console.log(err);
    });
}
getJSON();

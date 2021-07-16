// const API_URL = "https://computer-shop-hit.herokuapp.com/api/categories";

// .then
getCategory([], "Ram")
  .then((category) => getProducts(category.id))
  .then((products) => console.log(products))
  .catch((err) => console.log(err));

// async await
const getData = async () => {
  try {
    const category = await getCategory([], "Ram");
    if (category) {
      const products = await getProducts([], category.id);
      /// some logic here to handle data
      console.log(products);
    }
  } catch (error) {
    console.log(error);
  }
};

function getCategory(categories, name) {
  return new Promise((resolve, reject) => {
    const category = categories.find((category) => category.name === name);
    if (category) {
      return resolve(category);
    } else {
      reject(`No such category with name ${name}`);
    }
  });
}

function getProducts(products, categoryId) {
  return new Promise((resolve, reject) => {
    const categoryProducts = products.find(
      (product) => (product.category.categoryId = categoryId)
    );
    if (categoryProducts) {
      return resolve(categoryProducts);
    } else {
      reject(`Wrong category id`);
    }
  });
}

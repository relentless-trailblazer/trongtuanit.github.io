const API_URL = "https://computer-shop-hit.herokuapp.com/api/categories";

const getCategories = async () => {
  try {
    const res = await fetch(API_URL);
    console.log(res);
    if (!res.ok) {
      const errMsg = `There was an error${res.status} ${res.statusText}`;
      throw new Error(errMsg);
    }
    const categories = await res.json();
    console.log(categories);
  } catch (error) {
    // console.log(error);
  }
};

getCategories();

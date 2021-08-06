const API_URL = "https://students-managerr.herokuapp.com/api/students";

const getListUsers = async () => {
  try {
    const res = await fetch(API_URL);
    if (!res.ok) {
      const errMsg = `There was an error${res.status} ${res.statusText}`;
      throw new Error(errMsg);
    }
    const users = await res.json();
    return users;
  } catch (error) {
    console.log(error);
  }
};

const postUser = async (user) => {
  try {
    const res = await fetch(API_URL, {
      method: "POST",
      mode: "cors",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      const errMsg = `There was an error${res.status} ${res.statusText}`;
      throw new Error(errMsg);
    }
    const users = await res.json();
  } catch (error) {
    console.log(error);
  }
};

const patchtUser = async (userId, user) => {
  try {
    const PATCH_URL = `${API_URL}/${userId}`;
    const res = await fetch(PATCH_URL, {
      method: "PATCH",
      mode: "cors",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      const errMsg = `There was an error${res.status} ${res.statusText}`;
      throw new Error(errMsg);
    }
    const users = await res.json();
  } catch (error) {
    console.log(error);
  }
};

const deleteUser = async (userId) => {
  try {
    const DELETE_URL = `${API_URL}/${userId}`;
    const res = await fetch(DELETE_URL, {
      method: "DELETE",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      const errMsg = `There was an error${res.status} ${res.statusText}`;
      throw new Error(errMsg);
    }
    const users = await res.json();
  } catch (error) {
    console.log(error);
  }
};

// postUser({
//   fullName: "test api",
//   birthday: 2001,
//   gender: "nam",
// }).then(res => console.log(res));
// patchtUser(7, {
//    fullName: "test patch api",
//    birthday: 2001,
//    gender: "nam",
//  })
// deleteUser(7).then(res => console.log(res))
// getListUsers().then(res => console.log(res));



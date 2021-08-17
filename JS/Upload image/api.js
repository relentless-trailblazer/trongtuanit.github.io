const GET_IMAGES_URL = "https://hit-image-uploader.herokuapp.com/api/images/";

const GET_IMAGE_BY_STUDENT_ID = GET_IMAGES_URL + "student-id/"; // +studentId
const POST_BY_STUDENT_ID_URL = GET_IMAGES_URL + "studentId/" + "?studentId=";


const getAllImages = async (studentId = "test") => {
  try {
    const URL = GET_IMAGE_BY_STUDENT_ID + studentId;
    const res = await fetch(URL, {
      method: "GET",
      mode: "cors",
    });
    const obj = await res.json();
    return obj.images;
  } catch (error) {
    console.log(error);
  }
};

const postImagesByStudentId = async (formData, studentId = "test") => {
  try {
    const URL = POST_BY_STUDENT_ID_URL + studentId;
    const res = await fetch(URL, {
      method: "POST",
      mode: "cors",
      body: formData,
    });
    // console.log(res);
    const arr = await res.json();
    return arr;
  } catch (error) {
    console.log({error});
  }
};


export { getAllImages, postImagesByStudentId };

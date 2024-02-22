
const { createImageFromPromt } = require('../service/image');

const createImage = async (req, res, next) => {
  try {
    const {
      imageDesc,
      numberImg,
      imgSize
    } = req.body;
    let rs = await createImageFromPromt(imageDesc, numberImg, imgSize);

    res.status(200).json({
      statusCode: 200,
      data: rs,
    });

  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  createImage
}
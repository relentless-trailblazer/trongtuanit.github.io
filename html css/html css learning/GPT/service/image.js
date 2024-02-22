let {openai} = require('./get');
// const { Configuration, OpenAIApi, OpenAI } = require("openai");

const imageSize = {
  256: '256x256',
  512: '512x512',
  1024: '1024x1024'
}

const createImageFromPromt = async (question = '1 con bọ cạp(Scorpio) trên 1 tảng đá', numberOfImage, imgSize = '1024x1024') => {
	try {
    const response = await openai.images.generate({
      prompt: question,
      n: numberOfImage,
      size: imgSize,
    });

    return  response.data;
  } catch (error) {
    console.log('error: ', error);
  }
}

module.exports = { createImageFromPromt, openai };
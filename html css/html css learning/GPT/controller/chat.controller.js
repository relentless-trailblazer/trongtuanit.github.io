const { createChatCompletion } = require('../service/get');

const letChat = async (req, res, next) => {
  try {
    const {
      question
    } = req.body;

    let rs = await createChatCompletion(question);

    res.status(200).json({
      statusCode: 200,
      message: "success",
      data: rs
    });
    
  } catch (error) {
    console.log('err: ' + error);
  }
};

module.exports = {
  letChat
}
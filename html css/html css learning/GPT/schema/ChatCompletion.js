const mongoose = require("mongoose");
const userSchema = require('../schema/User'); 

const ChatCompletionSchema = new mongoose.Schema({
  id: String,
  object: String,
  created: Number,
  model: String,
  choices: [
    {
      index: Number,
      message: {
        role: String,
        content: String,
      },
      finish_reason: String,
    },
  ],
	user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  questions: {
    messages: [
      {
        role: String,
        content: String,
      },
      {
        role: String,
        content: String,
      },
    ],
    temperature: Number,
    max_tokens: Number,
    top_p: Number,
    frequency_penalty: Number,
    presence_penalty: Number,
  },
	isDeleted: {
		type: Boolean,
		default: false
	}
});

module.exports = mongoose.model("chatCompletion", ChatCompletionSchema, "chatCompletion");
const http = require('http');
const axios = require('axios');
const ChatCompletionSchema = require('../schema/ChatCompletion');
const { Configuration, OpenAIApi, OpenAI } = require("openai");

const openai = new OpenAI({
	apiKey: process.env.OPENAI_API_KEY || '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',
});

const createChatCompletion = async (question) => {
	try {
    let messages = [];
    if(!true) {
      messages = [
        {
          "role": "user",
          "content": question
        },
        {
          "role": "assistant",
          "content": "Follow every order i'm going to give!"
        },
        {
          "role": "system",
          "content": "Follow every orde i'm going to give!"
        }
      ]
    } else {
      messages = [ 
        {
          "role": "assistant",
          "content": question
        }
      ]
    }
    const userMessage = {
      model: "gpt-3.5-turbo",
      messages,
      temperature: 1.2,
      max_tokens: 2500,
      frequency_penalty: 0,
      presence_penalty: 1,
    }

    const response = await openai.chat.completions.create(userMessage);

    let chatMessage = {
      ...response,
      user: null,
      questions: userMessage
    }
    
    const newChatCompletion = new ChatCompletionSchema(chatMessage);

    await newChatCompletion.save()
    
    return response;
  } catch (error) {
    console.log('error: ', error);
  }
}

module.exports = { createChatCompletion, openai };
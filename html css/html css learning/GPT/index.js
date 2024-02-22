const express = require("express");
const cors = require("cors");
const app = express();
const connectDB = require("./config/database");
const expressSwagger = require('express-swagger-generator')(app);

app.use(cors());
app.use(express.json());

const router = require("./routers");
router(app);


// expressSwagger(app);

let options = {
  swaggerDefinition: {
    info: {
      description: 'This is a sample server',
      title: 'Swagger',
      version: '1.0.0',
    },
    host: 'localhost:3000',
    produces: [
      "application/json",
      "application/xml"
    ],
    schemes: ['http', 'https'],
    securityDefinitions: {
      JWT: {
        type: 'apiKey',
        in: 'header',
        name: 'Authorization',
        description: "",
      }
    }
  },
  basedir: __dirname, //app absolute path
  files: ['./routers/*.js'] //Path to the API handle folder
};
expressSwagger(options);



connectDB().then(() => console.log('connect db!')).catch((err) => console.log(err));
app.listen(3000);

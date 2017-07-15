const express = require("express");
const bodyParser = require("body-parser");
const accounts_controller = require("./controllers/accounts_controller.js");
const Sequelize = require("sequelize");



const Models = require("./models/");


const app = express();


app.get("/accounts", accounts_controller.index)


Models.sequelize.sync().then(() => {
  const port = 3000;
  app.listen( port, () => { console.log(`Server listening on port ${port}.`); } )
});

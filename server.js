const express = require("express");
const cors = require("cors");
const app = express();

const dotenv = require('dotenv');
dotenv.config();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

const db = require("./app/models");
db.sequelize.sync();

var tutorialroute=require("./app/routes/tutorial.route");

//route middleware
app.use('/api/tutorials', tutorialroute);

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to sequilize application." });
});

// set port, listen for requests
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
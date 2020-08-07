//dependencies - as outlined in package JSON

const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");

//Express instance + port set up
const app = express();
const PORT = process.env.PORT || 8000;

//usual middleware + morgan application set up

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// set up mongoose connection???
//mongoose.connect(process.env.MONGODB_URI);
//what about the || Heroku statement?

//set up routes
//require("./routes/api-routes.js");
//require("./routes/html-routes.js");
//does app need referencing in this block in someway?

//set up listener
app.listen(PORT, () => {
  console.log(`This app is listening on ${PORT}`);
});

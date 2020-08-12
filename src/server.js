//dependencies - as outlined in package JSON

const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
const path = require("path");

//Express instance + port set up
const app = express();
const PORT = process.env.PORT || 8000;

//usual middleware + morgan application set up

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use(express.static(path.join(__dirname, "./public")));
app.use(require("./routes/apiRoutes.js"));
app.use(require("./routes/htmlRoutes.js"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false,
});

//set up listener
app.listen(PORT, () => {
  console.log(`This app is listening on ${PORT}`);
});

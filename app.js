const express = require("express");
const app = express();
const port = 5000;
const mongoose = require("mongoose");
const url = `mongodb+srv://mohamed:sI1GQ7ClSbmrJwGR@informations.j89ld.mongodb.net/?retryWrites=true&w=majority&appName=informations`;
const cors = require("cors");
const User = require("./models/user");

app.use(express.json());
app.use(cors());


mongoose.connect(url).then((data) => {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
});

User.db.on("error", console.error.bind(console, "MongoDB connection error:"));
User.db.once("open", () => {
  console.log("Connected to MongoDB");
});

app.get("/", (req, res) => {
  res.send("hello world");
});


app.use(require("./router/router"));

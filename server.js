// Here is where we import modules
// We begin by loading Express
const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.use(express.urlencoded({ extended: false }));
const Cat = require("./models/cat.js")

mongoose.connect(process.env.MONGODB_URI);

mongoose.connection.on("connected", () => {
    console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
  });


app.get("/", async (req, res) => {
    res.render("index.ejs");
});

app.get("/cats/new", (req,res) =>{
  // res.send("Found me!")
  res.render("cats/new.ejs")
})

app.post("/cats", async (req, res) => {
  console.log(req.body);
  await Cat.create(req.body);
  res.redirect("/cats/new");
});


app.listen(3000, () => {
  console.log("In the year 3000");
});
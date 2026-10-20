require('dotenv').config();

const express = require("express");
const mongoose = require("mongoose");
const Product = require('./models/product.model.js');
const productRoute = require('./routes/product.route.js');
const User = require('./models/user.model.js');
const userRoute = require('./routes/user.route.js');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use("/api/products",productRoute);
app.use("/api/users",userRoute);


app.listen(3000, () => {
      console.log("Server is running on port 3000");
      console.log("http://localhost:3000/");
    });

app.get("/", (req, res) => {
  res.send("Hello from Node API Server Updated non connexion");
});


mongoose
  .connect(
    "mongodb+srv://felicienboury_db_user:a6MZYXOqRZC6S27h@cluster0.xtrmbls.mongodb.net/?appName=Cluster0"

).then(() => {
    console.log("Connected to database!");
    }).catch(() => {
    console.log("Connection failed!");
  });

    
;















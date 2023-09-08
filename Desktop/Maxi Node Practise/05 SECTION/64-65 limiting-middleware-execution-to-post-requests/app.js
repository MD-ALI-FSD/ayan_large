const express = require("express");
const bodyParser = require("body-parser");

const app = express();

//A body-parser middleware
app.use(bodyParser.urlencoded({ extended: false }));

//adding a product
app.use("/add-product", (req, res, next) => {
  res.send(
    '<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>'
  );
});

//will only work for POST request
app.post("/product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/"); //response
});

app.use("/", (req, res, next) => {
  res.send("<h1>Hello from Express!</h1>");
});

app.listen(3000);

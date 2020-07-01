const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => res.sendFile(__dirname + "/bmiCalculator.html"));
app.post("/", function (req, res) {
  var weight = parseFloat(req.body.weight);
  var height = parseFloat(req.body.height);
  var bmi = Math.floor(weight / (height * height));
  res.send("Your bmi is  " + bmi);
});

app.listen(port, () => console.log("server running on port 3000"));

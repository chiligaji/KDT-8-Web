const express = require("express");

const app = express();
const PORT = 8000;

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

console.log(express);

app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("main");
});

app.get("/9x9", function (req, res) {
  res.render("9x9", { data: [1, 2, 3, 4, 5, 6, 7, 8, 9] });
});

app.get("/worm", function (req, res) {
  res.render("worm");
});

app.get("/fruit", function (req, res) {
  res.render("fruit");
});

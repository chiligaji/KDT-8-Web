const express = require("express");
const app = express();
const PORT = 8000;

//body parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//view engine
app.set("view engine", "ejs");
app.set("views", "./views");

//router
app.get("/", (req, res) => {
  res.render("index");
});

app.get("/getPage", (req, res) => {
  res.render("get");
});

app.get("/postPage", (req, res) => {
  res.render("post");
});

//서버오픈
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

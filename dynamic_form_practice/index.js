const express = require("express");
const app = express();
const PORT = 8000;

//body-parser 미들웨어
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//view engine
app.set("view engine", "ejs");
app.set("views", "./views");
//router
app.get("/", (req, res) => {
  res.render("index");
});
app.get("/axiosGET", (req, res) => {
  res.render("get");
});

app.post("/axiosPOST", (req, res) => {
    res.send("axios post");
  });
//server start
app.listen(PORT, () => {
  console.log(`https://localhost:${PORT}`);
});

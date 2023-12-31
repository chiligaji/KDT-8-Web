const express = require("express");
const app = express();
const PORT = 8000;

//body-parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//view engine
app.set("view engine", "ejs");
app.set("views", "./views");

//router - 주소를 구분해 놓는 것
app.get("/", (req, res) => {
  //res.send("Hello");
  res.render("index", { title: "폼 실습" });
});

app.get("/getForm", (req, res) => {
  console.log(req.query);
  res.render("result", {
    title: "GET요청 폼 결과 확인하기",
    userInfo: req.query,
  });
});

app.post("/postForm", (req, res) => {
  console.log(req.body);
  res.render("result", {
    title: "POST요청 폼 결과 확인하기",
    userInfo: req.body,
  });
});
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

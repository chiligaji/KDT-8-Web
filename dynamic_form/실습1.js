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
  res.render("실습1");
});
app.get("/axios", (req, res) => {
  console.log("back: ", req.query);
  res.send(req.query);
});

// app.get("/getForm", (req, res) => {
//   res.render("실습1result", {
//     title: "회원가입 결과",
//     userInfo: req.query,
//   });
// });

// app.post("/postForm", (req, res) => {
//   res.render("실습1result", {
//     title: "회원가입 결과",
//     userInfo: req.body,
//   });
// });

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

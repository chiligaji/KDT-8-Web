const express = require("express");
//import express from "express";

const app = express();
const PORT = 8000;

// app.get("/", (req, res) => {
//   //res.send("Hello express");
//   res.send({
//     result: true,
//     code: 1000,
//     message: "회원가입에 성공하였습니다",
//     data: { name: "martin" },
//   });
// });

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
console.log(express);
//뷰엔진
app.set("view engine", "ejs");
app.set("views", "./views");
//정적인 파일 불러오기
//app.use("public", express.static("/public"));

app.get("/", function (req, res) {
  //res.send("hello express");
  //과거에 .send()는 클라이언트에 응답을 보낸때
  //render()는 뷰 엔진 렌더링
  res.render("test", { data: "martin" });
});

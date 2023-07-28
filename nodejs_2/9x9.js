const express = require("express");
//import express from "express";

const app = express();
const PORT = 8000;

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
  res.render("9x9", { data: [5, 1, 3] });
});

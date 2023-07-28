const express = require("express");
const jquery = require("jquery");
const path = require("path");

const app = express();
const PORT = 8000;

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
console.log(express);
//뷰엔진
app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.static(path.join(__dirname, "public")));

app.get("/", function (req, res) {
  //res.send("hello express");
  //과거에 .send()는 클라이언트에 응답을 보낸때
  //render()는 뷰 엔진 렌더링
  res.render("fruit");
});

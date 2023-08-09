const express = require("express");

const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//router분리

router.get("/", (req, res) => {
  res.render("index");
});
const router = require("./routes");
//이런식으로 쓰면 router페이지의 모든 링크들을 앞에 /visitor을 default로 붙인거나 다름없음
app.use("/visitor", router);

app.use("*", (req, res) => {
  res.render("404");
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

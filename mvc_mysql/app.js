const express = require("express");
const app = express();
const PORT = 8000;

//body-parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set("view engine", "ejs");
app.set("views", "./views");
const indexRouter = require("./routes");
app.use("/", indexRouter);

app.get("*", (req, res) => {
  res.render("404");
});

app.get("/axios", (req, res) => {
  console.log(req.query);
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

const express = require("express");
const app = express();
const PORT = 8000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const indexRouter = require("./routes/index");
app.use("/", indexRouter);

app.set("view engine", "ejs");
app.set("views", "./views");

// app.get("/", (req, res) => {
//   res.render("index");
// });

app.get("*", (req, res) => {
  res.render("404");
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

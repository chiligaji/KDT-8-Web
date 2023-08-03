const express = require("express");
const multer = require("multer");
const path = require("path");
const app = express();
const PORT = 8000;

//body-parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/uploads", express.static(__dirname + "/uploads"));

app.set("view engine", "ejs");
app.set("views", "./views");

const uploadDetail = multer({
  storage: multer.diskStorage({
    destination(req, res, done) {
      done(null, "uploads/");
    },
    filename(req, file, done) {
      const ext = path.extname(file.originalname);
      done(null, path.basename(req.body.id) + ext);
    },
  }),
  //이게 5메가
  limits: { fileSize: 1024 * 1024 * 5 },
});
app.get("/", (req, res) => {
  res.render("파일업로드_실습");
});

app.post("/upload", uploadDetail.single("profile"), (req, res) => {
  console.log(req.file);
  console.log(req.body);
  res.render("result파일업로드_실습", {
    userinfo: req.body,
    userpic: req.file,
  });
});

app.post;
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

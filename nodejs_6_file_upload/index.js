const express = require("express");
const multer = require("multer");
const path = require("path");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.set("views", "./views");

//정적파일설정
app.use("/uploads", express.static(__dirname + "/uploads"));
const upload = multer({
  //dest: 업로드할 파일을 저장할 경로를 지정
  dest: "uploads/",
});

const uploadDetail = multer({
  //storage: 저장할 공간에 대한 정보
  //diskStorage: 파일을 디스크에 저장하기 위한 모든 제어기능을 제공
  storage: multer.diskStorage({
    destination(req, res, done) {
      done(null, "uploads/");
    },
    //파일 경로에 확장자를 가져오는 코드
    filename(req, file, done) {
      //원래 이름에서 확장자만 분리
      const ext = path.extname(file.originalname);
      //ext = 확장자명 .jpg 등
      console.log(ext);
      //원래 이름에서 확장자를 떼고, 파일명 뒤에 현재 타임스템프를 붙이고, 다시 확장자명을 붙인 것
      done(null, path.basename(file.originalname, ext) + Date.now() + ext);
    },
  }),
  limits: { fileSize: 1024 * 1024 * 5 },
});
app.get("/", (req, res) => {
  res.render("index");
});
//싱글
app.post("/upload", uploadDetail.single("userfile"), (req, res) => {
  console.log(req.file);
  console.log(req.body);
});
//멀티 버전1
app.post("/upload/array", uploadDetail.array("userfiles"), (req, res) => {
  console.log(req.files);
  console.log(req.body);
});
//멀티 버전2
app.post(
  "/upload/fields",
  uploadDetail.fields([{ name: "userfile1" }, { name: "userfile2" }]),
  (req, res) => {
    console.log(req.files);
    console.log(req.body);
  }
);
//동적 파일 업로드
app.post(
  "/dynamicFile",
  uploadDetail.single("dynamic-userfile"),
  (req, res) => {
    console.log(req.file);
    res.send(req.file);
  }
);
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

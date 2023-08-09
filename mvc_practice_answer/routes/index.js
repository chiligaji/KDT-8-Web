const express = require("express");
const router = express.Router();
const controller = require("../controller/CVisitor");


//이게 localhost:8000/visitor이나 다름없음
//전체 방명록 보이기
router.get("/", controller.getVisitors);
//아까의 그 내용들은 controller로 분리한 것

router.get("/get", controller.getVisitor);

router.post("/write", controller.post);

router.patch("/edit", controller.patch);
//방명록 하나 삭제
router.delete("/delete", controller.delete);

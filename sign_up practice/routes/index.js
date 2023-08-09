const express = require("express");
const router = express.Router();
const controller = require("../controller/CUser");

//회원가입 창 보이기
router.get("/signup", controller.signupPage);
//회원가입 처리
router.post("/signup", controller.signup);
//로그인
router.get("/signin", controller.signinPage);
//로그인 처리
router.post("/signin", controller.signin);
//회원정보 페이지
router.post("/profile", controller.post_profile);
router.patch("/profile/edit", controller.edit_profile);
router.delete("/profile/delete", controller.delete_profile);
module.exports = router;

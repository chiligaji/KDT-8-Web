//const User = require("../model/MUser");
import * as User from "../model/MUser.js";

export const signupPage = (req, res) => {
  res.render("signup");
};

export const signup = async (req, res) => {
  try {
    await User.signup(req.body);
    res.send({ result: true });
  } catch (error) {
    res.send({ result: false });
  }
};

// exports.signinPage = (req, res) => {
//   res.render("signin");
// };

// exports.signin = (req, res) => {
//   User.signin(req.body, (result) => {
//     res.send(result[0]);
//   });
// };

// exports.post_profile = (req, res) => {
//   User.post_profile(req.body, (result) => {
//     res.render("profile", { data: result[0] });
//   });
// };

// exports.edit_profile = (req, res) => {
//   console.log(req.body);
//   User.edit_profile(req.body, () => {
//     res.send({ result: true });
//   });
// };

// exports.delete_profile = (req, res) => {
//   console.log(req.body.id);
//   User.delete_profile(req.body.id, () => {
//     res.send({ result: true });
//   });
// };

//const express = require("express");
import express from "express";
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/user", (req, res) => {
  res.render("index");
});

import Router from "./routes/index.js";
app.use("/user", Router);

app.use("*", (req, res) => {
  res.render("404");
});
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}/user`);
});

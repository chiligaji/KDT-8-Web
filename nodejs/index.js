// const { a, b } = require("./module.js");
// console.log(a, b);

// const m = require("./module.js");
// console.log(m);
// console.log(m.a);

//ES2015부터는 아래 방식으로 사용

// import { a, b } from "./module.js";
// import connect from "./module.js";

// console.log(a, b);
// console.log(connect);

//import http from "http";
const http = require("http");
const fs = require("fs");
const server = http.createServer((request, response) => {
  //   response.writeHead(200);
  //   response.write("<h1>Hello World</h1>");
  //   response.end("<p>End</p>");

  //파일 전송
  try {
    const data = fs.readFileSync("./index.html");
    response.writeHead(200);
    response.end(data);
  } catch (error) {
    console.log(error);
    response.writeHead(404);
    response.end(error.message);
  }
});

server.listen(8000, function () {
  console.log("localhost:8000포트로 실행");
});

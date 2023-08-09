//const mysql = require("mysql");
import mysql from "mysql2/promise";

//mysql 연결
const conn = mysql.createPool({
  host: "localhost",
  user: "hi",
  password: "12345678!",
  database: "kdt8",
  port: 3306,
});

//createConnection: 단일연결, 매번 연결이 필요할 때마다 새로운 연결 생성 - 따라서 연결수가 많아지면 성능에 영향이 생김.

//createPool: 여러연결, 여러개의 연결을 미리 생성하고 관리 - 요청이 들어올 때마다 생성한 연결을 할당. 동시처리가 가능.
//에러처리

export const signup = async (data) => {
  //백엔드에서 자주씀
  //문제없을땐 try가, 오류가 있을 땐 catch가 실행
  //? 식- 준비된 쿼리, prepared statement라고 함. 보안을 향상시킴.
  try {
    const query = `INSERT INTO user (userid, name, pw) VALUES (?, ?, ?);`;
    const rows = await conn.query(query, [data.userid, data.name, data.pw]);
    return rows;
  } catch (error) {
    console.log(error);
  }
};

// exports.signin = (data, callback) => {
//   console.log("회원 로그인");

//   const query = `SELECT * from user WHERE userid = "${data.userid}" and pw = "${data.pw}"`;

//   conn.query(query, (err, rows) => {
//     if (err) {
//       console.log(err);
//     }
//     callback(rows);
//   });
// };

// exports.post_profile = (data, callback) => {
//   const query = `SELECT * FROM user WHERE userid = "${data.profile}"`;
//   conn.query(query, (err, rows) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log("post_profile", rows);
//     callback(rows);
//   });
// };

// exports.edit_profile = (data, callback) => {
//   const query = `UPDATE user SET userid = "${data.userid}", pw = "${data.pw}", name = "${data.name}" WHERE id="${data.id}"`;
//   conn.query(query, (err, rows) => {
//     if (err) {
//       console.log(err);
//     }
//     callback();
//   });
// };

// exports.delete_profile = (id, callback) => {
//   console.log(id);
//   const query = `DELETE from user where id = ${id}`;
//   conn.query(query, (err, rows) => {
//     if (err) {
//       console.log(err);
//     }
//     callback();
//   });
// };

const mysql = require("mysql");

//mysql 연결
const conn = mysql.createConnection({
  host: "localhost",
  user: "hi",
  password: "12345678!",
  database: "kdt8",
  port: 3306,
});

//에러처리
conn.connect((err) => {
  if (err) {
    console.log("error");
    return;
  }
  console.log("connected");
});

exports.signup = (data, callback) => {
  console.log("회원가입");
  const query = `INSERT INTO user (userid, name, pw) VALUES ("${data.userid}", "${data.name}", "${data.pw}");`;
  conn.query(query, (err, rows) => {
    console.log("user", rows);
    if (err) {
      console.log(err);
    }
    callback(rows);
  });
};

exports.signin = (data, callback) => {
  console.log("회원 로그인");

  const query = `SELECT * from user WHERE userid = "${data.userid}" and pw = "${data.pw}"`;

  conn.query(query, (err, rows) => {
    if (err) {
      console.log(err);
    }
    callback(rows);
  });
};

exports.post_profile = (data, callback) => {
  const query = `SELECT * FROM user WHERE userid = "${data.profile}"`;
  conn.query(query, (err, rows) => {
    if (err) {
      console.log(err);
    }
    console.log("post_profile", rows);
    callback(rows);
  });
};

exports.edit_profile = (data, callback) => {
  const query = `UPDATE user SET userid = "${data.userid}", pw = "${data.pw}", name = "${data.name}" WHERE id="${data.id}"`;
  conn.query(query, (err, rows) => {
    if (err) {
      console.log(err);
    }
    callback();
  });
};

exports.delete_profile = (id, callback) => {
  console.log(id);
  const query = `DELETE from user where id = ${id}`;
  conn.query(query, (err, rows) => {
    if (err) {
      console.log(err);
    }
    callback();
  });
};

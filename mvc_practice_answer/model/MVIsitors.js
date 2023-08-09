const mysql = require("mysql");

//mysql 연결
const conn = mysql.createConnection({
  host: "localhost",
  user: "hi",
  password: "12345678!",
  database: "kdt8",
  port: 3306,
});

conn.connect((err) => {
  if (err) {
    console.log("error");
    return;
  }
  console.log("connected");
});

exports.getVisitors = (callback) => {
  const query = "SELECT * FROM visitor;";
  conn.query(query, (err, rows) => {
    if (err) {
      console.log(err);
    }
    console.log("visitor", rows);
    callback(rows);
  });
};

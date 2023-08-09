const Visitor = require("../model/MVisitor");

//전체 방명록 조회
exports.getVisitors = (req, res) => {
  Visitor.getVisitors((result) => {
    res.render("visitor", { data: result });
  });
};

//방명록 하나 조회
exports.getVisitor = (req, res) => {
  console.log("방명록 하나 조회");
  console.log(req.query.id);
  const query = `SELECT * FROM visitor WHERE id=${req.query.id}`;
  conn.query(query, (err, rows) => {
    console.log(rows);
    res.render("visitor", { data: rows });
  });
};
//방명록 하나 작성
exports.post = (req, res) => {
  console.log("방명록 하나 추가");
  console.log(req.body.name);
  console.log(req.body.comment);

  const query = `INSERT INTO visitor (name, comment) VALUES ("${req.body.name}", "${req.body.comment}");`;
  conn.query(query, (err, rows) => {
    console.log("write", rows);
    res.send({
      result: true,
      id: rows.insertId,
      name: req.body.name,
      comment: req.body.comment,
    });
  });
};

//방명록 하나 수정
exports.patch = (req, res) => {
  console.log("방명록 하나 수정");
  const query = `UPDATE visitor SET name='${req.body.name}',comment='${req.body.comment}' WHERE id=${req.body.id}`;
  conn.query(query, (err, rows) => {
    console.log(rows);
    res.send({ result: true });
  });
};
//방명록 하나 삭제
exports.delete = (req, res) => {
  console.log("방명록 하나 삭제");
  const query = `DELETE FROM visitor WHERE id=${req.body.id}`;
  conn.query(query, (err, rows) => {
    res.send({ result: true });
  });
};

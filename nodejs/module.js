//하나의 모듈 파일에 여러개 만들기

// const a = "a 변수";
// const b = "b 변수";

// module.exports = {
//   a,
//   b,
// };

//하나의 모듈 파일에 하나 만들기
// function connect() {
//   return a + b;
// }

// module.exports = connect;

// ES2015방식으로는 아래 방식으로 씀
const a = "a 변수";
const b = "b 변수";

export { a, b };

function connect() {
  return a + b;
}

export default connect;

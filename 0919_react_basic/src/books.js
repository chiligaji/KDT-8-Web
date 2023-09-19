// function 컴포넌트명 OR const 컴포넌트명 = () => {}
import pic from "./book.jpg";
import "./books.css";
//import PropTypes from "prop-types";
function Books({ title, author, price, type }) {
  return (
    <div className="container">
      <h1 className="bestSeller">이번주 베스트셀러</h1>
      <img src={pic}></img>
      <h1 className="title">{title}</h1>
      <h3 className="contents">저자: {author}</h3>
      <h3 className="contents">판매가: {price}</h3>
      <h3 className="contents">구분: {type}</h3>
    </div>
  );
}

// FunctionComponent.defaultProps = {
//   name: "kdt",
//   age: 10,
// };

// FunctionComponent.propTypes = {
//   name: PropTypes.string,
//   age: PropTypes.number,
// };

export default Books;

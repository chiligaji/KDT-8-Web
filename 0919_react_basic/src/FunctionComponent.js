// function 컴포넌트명 OR const 컴포넌트명 = () => {}

import PropTypes from "prop-types";
function FunctionComponent({ name, age, children }) {
 

  return (
    <>
      <div>반갑습니다 {name}에 오신것을 환영합니다.</div>
      <div>{age}살</div>
      <div>{children}</div>
    </>
  );
}

FunctionComponent.defaultProps = {
  name: "kdt",
  age: 10,
};

FunctionComponent.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
};

export default FunctionComponent;

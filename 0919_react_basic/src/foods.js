import { Component } from "react"; //라고 쓰면 extends Component. .왜냐 react에서 Component 객체를 불러온거니까
// import React from 'react'; 라고 쓰면 extends React.Component . . 왜냐 react를 통으로 불러와서 그 안에있는 Component 객체를 쓰는거니까

import PropTypes from "prop-types";
//class형 컴포넌트
//class 컴포넌트명 extends Component
//컴포넌트명은 항상 대문자로



class Foods extends Component {
  //클래스형 컴포넌트에서는 render 함수는 필수
  render() {
    //const name = "홍길동";
    const { food } = this.props; //처럼 객체 구조 분해 할당도 가능

    return (
      <>
        <h1>
          제가 좋아하는 음식은 <span style={{ color: "red" }}>{food}</span>
          입니다.
        </h1>
      </>
    );
  }
}

Foods.defaultProps = {
  food: "모든 음식",
};

Foods.propTypes = {
  food: PropTypes.string.isRequired,
};

export default Foods;

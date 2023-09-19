import { Component } from "react"; //라고 쓰면 extends Component. .왜냐 react에서 Component 객체를 불러온거니까
// import React from 'react'; 라고 쓰면 extends React.Component . . 왜냐 react를 통으로 불러와서 그 안에있는 Component 객체를 쓰는거니까

import PropTypes from "prop-types";
//class형 컴포넌트
//class 컴포넌트명 extends Component
//컴포넌트명은 항상 대문자로

class ClassComponent extends Component {
  //클래스형 컴포넌트에서는 render 함수는 필수
  render() {
    //const name = "홍길동";
    const { name } = this.props; //처럼 객체 구조 분해 할당도 가능
    return (
      <>
        <h1>Hello {name}</h1>
        <p>여기는 클래스형 컴포넌트</p>
        <h4>{name}</h4>
      </>
    );
  }
}

// ClassComponent.defaultProps = {
//   name: "홍길동",
// };

ClassComponent.propTypes = {
  name: PropTypes.string.isRequired,
};

export default ClassComponent;

//3.2.2 코드 작성하기
import React, { Component } from "react";
//3.3.6 propTypes를 통한 props 검증
import PropTypes from "prop-types";

// 3.3.7 클래스형 컴포넌트에서 props 사용하기
class MyComponent extends Component {
  static defaultProps = {
    name: "기본 이름",
  };
  static propTypes = {
    name: PropTypes.string,
    favoriteNumber: PropTypes.number.isRequired,
  };
  render() {
    const { name, favoriteNumber, children } = this.props; //  비구조화 할당
    return (
      <div>
        안녕하세요, 제 이름은 {name}입니다. <br />
        children 값은 {children} 입니다.
        <br />
        제가 좋아하는 숫자는 {favoriteNumber}입니다.
      </div>
    );
  }
}

// const MyComponent = ({ name, favoriteNumber, children }) => {
//   return (
//     <div>
//       안녕하세요, 제 이름은 {name}입니다. <br />
//       children 값은 {children}
//       입니다.
//       <br />
//       제가 좋아하는 숫자는 {favoriteNumber}입니다.
//     </div>
//   );
// };

// MyComponent.defaultProps = {
//   name: "기본 이름",
// };

// MyComponent.propTypes = {
//   name: PropTypes.string,
//   favoriteNumber: PropTypes.number.isRequired,
// };

// const MyComponent = () => {
//   return <div>나의 새롭고 멋진 컴포넌트</div>;
// };
// 3.3.1 JSX 내부에서 props 랜더링
// const MyComponent = (props) => {
//   return <div>안녕하세요, 제 이름은 {props.name}입니다.</div>;
// };

// 3.3.3 props 기본값 설정: defaultProps
// const MyComponent = (props) => {
//   return <div>안녕하세요, 제 이름은 {props.name} 입니다.</div>;
// };

// MyComponent.defaultProps = {
//   name: "기본 이름",
// };

// const MyComponent = (props) => {
//   return (
//     <div>
//       안녕하세요, 제이름은 {props.name}입니다. <br />
//       children 값은 {props.children}
//       입니다.
//     </div>
//   );
// };

// 3.3.5 비구조화 할당 문법을 통해 props 내부 값 추출하기
// const MyComponent = (props) => {
//   const { name, children } = props;
//   return (
//     <div>
//       안녕하세요, 제 이름은 {name}입니다. <br />
//       children 값은 {children}
//       입니다.
//     </div>
//   );
// };

// 3.2.3.1 모듈 내보내기(export)
export default MyComponent;

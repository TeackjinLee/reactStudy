//3.2.2 코드 작성하기
import React from "react";

// const MyComponent = () => {
//   return <div>나의 새롭고 멋진 컴포넌트</div>;
// };
// 3.3.1 JSX 내부에서 props 랜더링
// const MyComponent = (props) => {
//   return <div>안녕하세요, 제 이름은 {props.name}입니다.</div>;
// };

// 3.3.3 props 기본값 설정: defaultProps
const MyComponent = (props) => {
  return <div>안녕하세요, 제 이름은 {props.name} 입니다.</div>;
};

MyComponent.defaultProps = {
  name: "기본 이름",
};

// 3.2.3.1 모듈 내보내기(export)
export default MyComponent;

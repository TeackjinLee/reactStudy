import React, { Component } from "react";

// 3.4.1 클래스형 컴포넌트 의 state
class Counter extends Component {
  //   constructor(props) {
  //     super(props);
  //     // state 초기값 설정
  //     this.state = {
  //       number: 0,
  //       // 3.4.1.1 state 객체 안에 여러 값이 있을 때
  //       fixedNumber: 0,
  //     };
  //   }
  // 3.4.1.2 state를 constructor에서 꺼내기
  state = {
    number: 0,
    fixedNumber: 0,
  };

  render() {
    const { number, fixedNumber } = this.state; // state를 조회할 때는 this.state로 조회합니다.
    return (
      <div>
        <h1>{number}</h1>
        <h2>바뀌지 않는 값 : {fixedNumber}</h2>
        <button
          // onClick을 통해 버튼이 클릭되었을 때 호출할 함수를 지정합니다.
          onClick={() => {
            // this.setState를 사용하여 state에 새로운 값을 넣을 수 있습니다.
            // this.setState({ number: number + 1 });
            // 3.4.1.3 this.setState에 객체 대신 함수 인자 전달하기
            // this.setState({ number: this.state.number + 1 });
            this.setState((prevState) => {
              return {
                number: prevState.number + 1,
              };
            });
            // 위 코드와 아래 코드는 완전히 똑같은 기능을 합니다.
            // 아래 코드는 함수에서 바로 객체를 반환한다는 의미입니다.
            this.setState((prevState) => ({
              number: prevState.number + 1,
            }));
          }}
        >
          +1
        </button>
      </div>
    );
  }
}

export default Counter;

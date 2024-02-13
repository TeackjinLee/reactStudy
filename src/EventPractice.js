import React, { Component } from "react";
// 4.2.1.1 컴포넌트 생성
class EventPractice extends Component {
  state = {
    message: "",
    // 4.2.4 input 여러개 다루기
    username: "",
  };

  // 4.2.3 임의 메서드 만들기
  // 4.2.3.1 기본방식
  // constructor(props) {
  //   super(props);
  //   this.handleChange = this.handleChange.bind(this);
  //   this.handleClick = this.handleClick.bind(this);
  // }

  // handleChange(e) {
  //   this.setState({
  //     message: e.target.value,
  //   });
  // }

  // handleClick() {
  //   alert(this.state.message);
  //   this.setState({
  //     message: "",
  //   });
  // }

  // 4.2.3.2 Property Intializer Syntax를 사용한 메서드 작성
  handleChange = (e) => {
    this.setState({
      // message: e.target.value,
      [e.target.name]: e.target.value,
    });
    console.log("name : " + e.target.name);
    console.log("value : " + e.target.value);
  };

  handleClick = (e) => {
    alert(this.state.username + ": " + this.state.message);
    this.setState({
      username: "",
      message: "",
    });
  };

  render() {
    return (
      <div>
        <h1>이벤트 연습</h1>
        <input
          type="text"
          name="username"
          placeholder="사용자명"
          value={this.state.username}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="message"
          placeholder="아무거나 입력해 보세요"
          value={this.state.message}
          //   onChange={(e) => {
          //     this.setState({
          //       message: e.target.value,
          //     });
          //   }}
          onChange={this.handleChange}
        />
        {/* 4.2.2.3 버튼을 누를 때 comment 값을 공백으로 설정 */}
        {/* <button
          onClick={() => {
            alert(this.state.message);
            this.setState({
              message: "",
            });
          }}
        >
          확인
        </button> */}
        <button onClick={this.handleClick}>확인</button>
      </div>
    );
  }
}

export default EventPractice;

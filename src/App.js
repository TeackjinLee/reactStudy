// import React, {Fragment} from 'react';
import React, { Component } from "react";
// import React from "react";

// 7.3.2 App 컴포넌트에서 예제 컴포넌트 사용
import LifeCycleSample from './LifeCycleSample';
import ErrorBoundary from "./ErrorBoundary";

// 랜더 색상을 생성합니다.
function getRandomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

class App extends Component {
  state = {
    color : '#000000'
  }

  handleClick = () => {
    this.setState({
      color : getRandomColor()
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>랜덤 색상</button>
        <ErrorBoundary>
          <LifeCycleSample color={this.state.color}/>
        </ErrorBoundary>
      </div>
    )
  }
}


// 6.2.2 App컴포넌트에서 예제 컴포넌트 렌더링
// import IterationSample from "./IterationSample";
// class App extends Component {
//   render() {
//     return <IterationSample/>
//   }
// }

// 5.3.2.2 App 컴포넌트에서 스크롤 박스 컴포넌트 렌더링
// import ScrollBox from "./ ScrollBox";

// class App extends Component {
//   render() {
//     return (
//       <div>
//         {/* 5.3.4 컴포넌트에 rㄷㄹ달고 내부 메서드 사용 */}
//         <ScrollBox ref={(ref) => this.scrollBox=ref}/>
//         <button onClick={() => this.scrollBox.scrollTopBottom()}>
//            맨 밑으로
//         </button>
//       </div>
//     );
//   }
// }

// import MyComponent from "./MyComponent";
// import Counter from "./Counter";
// import Say from "./Say";
// import EventPractice from "./EventPractice";

// 5.1.2 App 컴포넌트에서 예제 컴포넌트 렌더링
// import ValidationSample from './ValidationSample'

// const App = () => {
//   return <ValidationSample />;
// }


// 4.2.1.2 App.js에서 EventPractice 렌더링
// const App = () => {
//   return <EventPractice />;
// };

// 3.4.2.2 useState 사용하기
// const App = () => {
//   return <Say />;
// };

// 3.4.1 클래스형 컴포넌트 의 state
// const App = () => {
//   return <Counter />;
// };

//3.3.4 태그 사이의 내용을 보여 주는 children
// const App = () => {
//   return (
//     <MyComponent name="React" favoriteNumber={1}>
//       리액트
//     </MyComponent>
//   );
// };

// 3.3.2 컴포넌트를 사용할 때 props 값 지정하기
// const App = () => {
//   return <MyComponent />;
// };

// 3.3 props

// 3.2.3.2 모듈 불러오기
// const App = () => {
//   return <MyComponent />;
// };

// 3.1 클래스형 컴포넌트
// function App() {
//   const name = "리액트";
//   return <div className="react">{name}</div>;
// }
// class App extends Component {
//   render() {
//     const name = "react";
//     return <div className="react">{name}</div>;
//   }
// }

// function App() {
//   const name = '리액트';
//   return (
//     // <div>
//     //   Hello <b>react</b>
//     // </div>
//     // <div>
//     //   <h1>리액트 안녕!</h1>
//     //   <h1>리액트 안녕!</h1>
//     // </div>

//     <>
//       <h1>{name} 안녕!</h1>
//       <h2>잘 작동하니?</h2>
//     </>
//   )
// }

//2.4.3 if 문 대신 조건무 연산자
// function App() {
//   const name = '리액트';
//   return (
//     <div>
//       {name === '리액트' ? (
//         <h1>리액트 입니다.</h1>
//       ) : (
//         <h2>리액트가 아닙니다.</h2>
//       )}
//     </div>
//   )
// }

// 2.4.4 AND 연산자(&&)를 사용한 조건부 렌더링
// function App() {
//   const name = '뤼왝트';

//   // return <div>{name === '리액트' ? <h1>리액트 입니다.</h1> : null }</div>
//   return <div>{name === '리액트' && <h1>리액트 입니다.</h1>}</div>

// }

// 2.4.5 undefined를 랜더링하지 않기
// function App() {
//   const name = undefined;
//   // return name || '값이 undefined입니다.';
//   return <div>{name || '리액트'}</div>;
// }

// 2.4.6 인라인 스타일링
// function App() {
//   const name = '리액트';
//   return (
//     // <div
//     //   style = {{
//     //     // background-color는 backgroundColor와 같이 -가 사라지고 카멘 표기법으로 작성됩니다.
//     //     backgroundColor : 'black',
//     //     color : 'aqua',
//     //     fontSize : '48px', // font-size -> fontSize
//     //     fontWeight : 'bold', // font-weight -> fontWeight
//     //     padding : 16 // 단위를 생략하면 px로 지정됩니다.
//     //   }}
//     // >
//     <div className='react'>
//       {name}
//     </div>
//   );
// }

// 2.4.8 꼭 닫아야 하는 태그
// function App() {
//   const name = '리액트';
//   return (
//     <>
//       <div className='react'>{name}</div>
//       <input /> {/** self-closing */}
//     </>
//   );
// }

// 2.4.9 주석
// function App() {
//   const name = "리액트";
//   return (
//     <>
//       {/* 주석은 이렇게 작성합니다. */}
//       <div
//         className="react" // 시작 태그를 여러 줄로 작성하게 된다면 여기에 주석을 작성할 수 있습니다.
//       >
//         {name}
//       </div>
//       // 하지만 이런 주석아나 /* 이런 주석은 페이지에 그대로 나타나게 됩니다. */
//     </>
//   );
// }

export default App;

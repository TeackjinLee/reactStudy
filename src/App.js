// import React, {Fragment} from 'react';
import React from "react";
import "./App.css";

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
function App() {
  const name = "리액트";
  return (
    <>
      {/* 주석은 이렇게 작성합니다. */}
      <div
        className="react" // 시작 태그를 여러 줄로 작성하게 된다면 여기에 주석을 작성할 수 있습니다.
      >
        {name}
      </div>
      // 하지만 이런 주석아나 /* 이런 주석은 페이지에 그대로 나타나게 됩니다. */
    </>
  );
}

export default App;

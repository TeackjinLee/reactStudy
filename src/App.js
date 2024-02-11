// import React, {Fragment} from 'react';
import React from 'react';

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
function App() {
  const name = undefined;
  // return name || '값이 undefined입니다.';
  return <div>{name || '리액트'}</div>;
}

export default App;

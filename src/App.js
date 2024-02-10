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
function App() {
  const name = '리액트';
  return (
    <div>
      {name === '리액트' ? (
        <h1>리액트 입니다.</h1>
      ) : (
        <h2>리액트가 아닙니다.</h2>
      )}
    </div>
  )
}

export default App;

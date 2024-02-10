// import React, {Fragment} from 'react';
import React from 'react';

function App() {
  const name = '리액트';
  return (
    // <div>
    //   Hello <b>react</b>
    // </div>
    // <div>
    //   <h1>리액트 안녕!</h1>
    //   <h1>리액트 안녕!</h1>
    // </div>
    
    <>
      <h1>{name} 안녕!</h1>
      <h2>잘 작동하니?</h2>
    </>
  )
}

export default App;

//3.4.2.2 useState를 사용하기
import React, { useState } from "react";

const Say = () => {
  const [message, setMessage] = useState("");
  const onCilckEnter = () => setMessage("안녕하세요!");
  const onClickLeave = () => setMessage("안녕히 가세요!");

  return (
    <div>
      <button onClick={onCilckEnter}>입장</button>
      <button onClick={onClickLeave}>입장</button>
      <h1>{message}</h1>
    </div>
  );
};

export default Say;

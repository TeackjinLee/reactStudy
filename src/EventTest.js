import React, { useState } from "react";

const EventTest = () => {
  const [form, setForm] = useState({
    username: "",
    age: "",
    birth: "",
    address: "",
    message: "",
  });

  const { username, age, birth, address, message } = form;
  const onChange = (e) => {
    const nextForm = {
      ...form,
      [e.target.name]: e.target.value,
    };
    setForm(nextForm);
  };

  const onClick = (e) => {
    alert(
      "이름 : " +
        username +
        " 나이 : " +
        age +
        " 생일 : " +
        birth +
        " 주소 : " +
        address +
        " : " +
        message
    );
    setForm({
      username: "",
      age: "",
      birth: "",
      address: "",
      message: "",
    });

    const onKeyPress = (e) => {
      if (e.key === "Enter") {
        onClick();
      }
    };

    return (
      <div>
        <h1>이벤트 연습</h1>
        {/* <input
          type="text"
          name="username"
          placeholder="사용자명"
          value={username}
          onChange={onChange}
        />
        <input
          type="text"
          name="age"
          placeholder="생일"
          value={age}
          onChange={onChange}
        />
        <input
          type="text"
          name="birth"
          placeholder="생일"
          value={birth}
          onChange={onChange}
        />
        <input
          type="text"
          name="address"
          placeholder="주소"
          value={address}
          onChange={onChange}
        />
        <input
          type="text"
          name="message"
          placeholder="아무거나 입력해 보세요"
          value={message}
          onChange={onChange}
          onKeyPress={onKeyPress}
        /> */}
      </div>
    );
  };
};

// const EventPractice = () => {
//   const [form, setForm] = useState({
//     username: "",
//     message: "",
//   });
//   const { username, message } = form;
//   const onChange = (e) => {
//     const nextForm = {
//       ...form, // 기존의 form 내용을 이 자리에 복사한 뒤
//       [e.target.name]: e.target.value, // 원하는 값을 덮어 씌우기
//     };
//     setForm(nextForm);
//   };

//   // const [username, setUsername] = useState("");
//   // const [message, setMessage] = useState("");
//   // const onChangeUsername = (e) => setUsername(e.target.value);
//   // const onChangeMessage = (e) => setMessage(e.target.value);
//   const onClick = () => {
//     alert(username + ": " + message);
//     // setUsername("");
//     // setMessage("");
//     setForm({
//       username: "",
//       message: "",
//     });
//   };
//   const onKeyPress = (e) => {
//     if (e.key === "Enter") {
//       onClick();
//     }
//   };
//   return (
//     <div>
//       <h1>이벤트 연습</h1>
//       <input
//         type="text"
//         name="username"
//         placeholder="사용자명"
//         value={username}
//         // onChange={onChangeUsername}
//         onChange={onChange}
//       />
//       <input
//         type="text"
//         name="message"
//         placeholder="아무거나 입력해 보세요"
//         value={message}
//         // onChange={onChangeMessage}
//         onChange={onChange}
//         onKeyPress={onKeyPress}
//       />
//       <button onClick={onClick}>확인</button>
//     </div>
//   );
// };

export default EventTest;

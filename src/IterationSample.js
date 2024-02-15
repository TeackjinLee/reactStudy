import React from 'react';
// 6.2 데이터 배열을 컴포넌트 배열로 변환하기
// 6.2.1 컴포넌트 수정하기
const IterationSample = () => {
    const names = ["눈사람", "얼음", "눈", "바람"];
    // 6.3.1 key 설정
    const nameList = names.map((name, index) => <li key={index}>{name}</li>);
    return <ul>{nameList}</ul>
}

export default IterationSample;
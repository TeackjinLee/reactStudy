import React, {useState} from 'react';
// 6.4 응용
// 초기상태 설정하기 -> 데이터 추가 기능 구현하기 -> 데이터 제거 기능 구현하기
// 6.4.1 초기상태 설정하기
const IterationSample = () => {
    const [names, setNames] = useState([
        {id : 1, text : '눈사람'},
        {id : 2, text : '얼음'},
        {id : 3, text : '눈'},
        {id : 4, text : '바람'}
    ]);
    const [inputText, setInputText] = useState('');
    const [nextId, setNextId] = useState(5);    // 새로운 항목을 추가할 때 사용할 id

    const onChange = e => setInputText(e.target.value);
    // 6.4.2 데이터 추가 기능 구현하기
    const onClick = () => {
        const nextNames = names.concat({
            id: nextId,
            text: inputText
        });
        setNextId(nextId + 1);  // nextId 값을 1을 더해준다.
        setNames(nextNames);    // names 값을 업데이트 한다.
        setInputText('');       // inputText를 비운다
    }

    const onRemove = id => {
        const nextNames = names.filter(name => name.id !== id);
        setNames(nextNames);
    }

    const nameList = names.map(name => 
        <li key={name.id} onDoubleClick={() => onRemove(name.id)}>
            {name.text}
        </li>);
    return (
        <>
            <input value={inputText} onChange={onChange} />
            <button onClick={onClick}>추가</button>
            <ul>{nameList}</ul>
        </>
        )
}

// 6.2 데이터 배열을 컴포넌트 배열로 변환하기
// 6.2.1 컴포넌트 수정하기
// const IterationSample = () => {
//     const names = ["눈사람", "얼음", "눈", "바람"];
//     // 6.3.1 key 설정
//     const nameList = names.map((name, index) => <li key={index}>{name}</li>);
//     return <ul>{nameList}</ul>
// }

export default IterationSample;
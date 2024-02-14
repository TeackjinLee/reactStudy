import React, {Component} from 'react';
import './ValidationSample.css'
// 5. ref:Dom에 이름달기
class ValidationSample extends Component {
    // 선언
    state = {
        password : '',
        clicked : false,
        validated : false
    }

    handleChange = (e) => {
        this.setState({
            password : e.target.value
        });
    }

    handleButtonClick = () => {
        this.setState({
            clicked : true,
            validated : this.state.password === '0000'
        });
        // 5.2.3.2 버튼 onClick 이벤트 코드 수정
        this.input.focus();
    }
    render() {
        return (
            <div>
                <input
                    // 5.2.3.1 input에 ref달기
                    ref={(ref) => this.input=ref}
                    type="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                    className={this.state.clicked ? (this.state.validated ? 'success' : 'failure') : ''}
                />
                <button onClick={this.handleButtonClick}>검증하기</button>
            </div>
        )
    }
}

export default ValidationSample;
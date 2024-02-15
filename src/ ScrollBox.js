import React, {Component} from 'react';
// 5.3.2 컴포넌트 초기 설정
// 5.3.2.1 컴포넌트 파일 생성
class ScrollBox extends Component {
    // 5.3.3 컴포넌트에 메서드 생성
    scrollTopBottom = () => {
        const { scrollHeight, clientHeight } = this.box;
        this.box.scrollTop = scrollHeight - clientHeight;
    }

    render() {
        const style = {
            border : '1px solid black',
            height : '300px',
            width : '300px',
            overflow : 'auto',
            position : 'relative'
        };

        const innerStyle = {
            width : '100%',
            height : '650px',
            background : 'linear-gradient(white, black)'
        }

        return (
            <div
            style={style}
            ref={(ref) => {this.box=ref}}>
                <div style={innerStyle} />
            </div>
        )
    }
}

export default ScrollBox;
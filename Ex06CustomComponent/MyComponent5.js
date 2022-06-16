import React, { Component } from "react";
import {View, Button} from "react-native"

export default class MyComponent5 extends Component {
    render() {
        return (
            <View>
                {/* 버튼에 설정할 전달받은 속성 값들(props)가 여러 개일때 한 번에 적용 */}
                {/* ... - 스프레드 연산자 (멤버 변수들이 속성으로 적용된다) */}
                <Button {...this.props}></Button>
            </View>
        )
    }
}
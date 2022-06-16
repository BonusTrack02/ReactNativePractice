import React, {Component} from "react";
import {View, Text, StyleSheet, Button} from 'react-native'
import MyComponent3 from "./MyComponent3";

export default class Main extends Component {
    render() {
        return (
            <View>
                <Text style={style.text}>Hello world</Text>

                {/* 개발자가 만든 Custom Component를 사용해보기 */}
                <MyComponent></MyComponent>
                <MyComponent></MyComponent>

                {/* 컴포넌트를 재사용하는 것은 편하지만 항상 같은 글씨로만 보인다 */}
                {/* 그래서 커스텀 컴포넌트를 사용할 때 보여주고 싶은 값을 속성으로 전달해보기 */}
                <MyComponent2 name="kim" btnTitle="확인" color="indigo"></MyComponent2>
                <MyComponent2 name="park" btnTitle="취소" color="green"></MyComponent2>

                {/* 별도의 js문서에 CustomComponent 만들어도 된다 */}
                {/* 속성으로 값 전달말고 함수도 전달 가능 */}
                <MyComponent3 onPress={this.clickBtn} title="button"></MyComponent3>
                
                
            </View>
        )
    }

    //CustomComponent로 전달할 함수
    clickBtn = () => {
        alert("clicked btn")
    }
}

//사용자 정의 컴포넌트 클래스 - 속성 값을 전달받는
class MyComponent2 extends Component {
    render() {
        return (
            <View style={{margin:8}}>
                {/* MyComponent2 컴포넌트를 사용할때
                설정한 속성(프로퍼티) 중 name이라는 이름으로 지정한 값은 이 컴포넌트 클래스안에
                아주 특별한 멤버변수(props)에 자동으로 속성 명의 멤버로 저장되어 있다 */}
                <Text>Hello {this.props.name}</Text>
                <Button title={this.props.btnTitle} color={this.props.color}></Button>
            </View>
        )
    }
}

//사용자 정의 컴포넌트 클래스
class MyComponent extends Component {
    render() {
        return (
            <View style={{margin:8}}>
                <Text>Hello sam</Text>
                <Button title="click me"></Button>
            </View>
        )
    }
}

const style = StyleSheet.create({
    root:{flex:1},
    text:{color:"black"},
})
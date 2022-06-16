import React, {Component} from "react";
import {View, Text, StyleSheet, Button} from 'react-native'

export default class Main extends Component {
    render() {
        return (
            <View>
                <Text style={style.text}>Hello world</Text>

                {/* 개발자가 만든 Custom Component를 사용해보기 */}
                <MyComponent></MyComponent>
                <MyComponent></MyComponent>
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
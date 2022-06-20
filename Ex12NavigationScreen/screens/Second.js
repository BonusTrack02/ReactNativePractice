import React, {Component} from "react";
import {View, Text, StyleSheet, Button} from 'react-native'

export default class Second extends Component {

    render() {

        //전달된 데이터를 받는 객체의 멤버를 쉽게 쓰기 위해 구조 분해 할당
        const { name, age } = this.props.route.params

        return (
            <View style={style.root}>
                <Text style={style.text}>Second Screen</Text>

                {/* 이전 화면에서 전달된 데이터 객체는 자동으로 props의 route.params라는 변수에 전달된다 */}
                <Text>{this.props.route.params.name}, {this.props.route.params.age}</Text>
                {/* 파라미터 명이 너무 길어서 사용 시 불편할 듯하여 구조 분해 할당 */}
                <Text>{name}, {age}</Text>

                {/* 뒤로가기용 버튼 */}
                <Button title="go back" color='orange' onPress={()=>this.props.navigation.goBack()}></Button>

                {/* 제목줄 제어하는 버튼 */}
                {/* <Button title="제목 글씨 변경" onPress={this.props.navigation.setOptions({title:"SECOND"})}></Button> */}
            </View>
        )
    }

    //Second 컴포넌트가 그려진(render) 후 자동으로 발동하는 라이프 사이클 메소드
    componentDidMount() {
        this.props.navigation.setOptions({title:"Good"})
    }
}

const style = StyleSheet.create({
    root:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
    },
    text:{
        padding:8,
        color:"black",
    },
})
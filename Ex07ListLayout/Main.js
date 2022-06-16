import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

export default class Main extends Component {
    render() {

        //대량의 데이터를 리스트 형태로 보여주는 작업이 가장 일반적인 UI

        //JSX 컴포넌트 객체를 변수에 저장
        const aaa = <Text>Nice</Text>

        return (
            <View style={style.root}>
                <Text style={style.text}>List layout</Text>
            </View>
        )
    }
}

const style = StyleSheet.create({
    root:{flex:1, padding:16},
    text:{color:"black", fontSize:24},
})
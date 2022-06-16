import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default class Main extends Component {
    render() {

        //대량의 데이터를 리스트 형태로 보여주는 작업이 가장 일반적인 UI

        //JSX 컴포넌트 객체를 변수에 저장
        const aaa = <Text>Nice</Text>

        //변수에 컴포넌트 그룹도 저장 가능
        const bbb = <View style={{margin:8}}>
            <Text>Hello RN</Text>
            <Button title="button"></Button>
        </View>

        return (
            <View style={style.root}>
                <Text style={style.text}>List layout</Text>
                {aaa}

                {bbb}
                {bbb}

                {/* 컴포넌트를 리턴하는 함수를 호출 */}
                {this.showItemView()}
            </View>
        )
    }

    //컴포넌트를 리턴하는 메소드 정의
    showItemView (){
        return (
            <View style={{margin:8}}>
                <Text>Nice world</Text>
                <Button title="press me"></Button>
            </View>
        )
    }
}

const style = StyleSheet.create({
    root:{flex:1, padding:16},
    text:{color:"black", fontSize:24},
})
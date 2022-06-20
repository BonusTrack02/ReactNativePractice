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

        //배열
        const ccc = [aaa, aaa, bbb, this.showItemView()]

        //실제 대부분의 대량의 데이터는 컴포넌트가 아니라 그냥 데이터인 경우가 많다
        const datas = ["aa", "bb", "cc", "dd", "ee"]

        //배열의 .map() 메소드 이용
        //배열의 요소만큼 function이 호출되고 파라미터로 해당 요소의 값과 인덱스 번호를 전달하며 요소의 갯수만큼 새로운 배열을 만들어서 최종 리턴
        const xxx = datas.map(function(value, index, array){
            return (
                <View style={{margin:4, borderWidth:1, padding:8, borderRadius:4}}>
                    <Text>{value}</Text>
                </View>
            )
        })

        return (
            <View style={style.root}>
                <Text style={style.text}>List layout</Text>
                {xxx}
                {aaa}

                {bbb}
                {bbb}

                {/* 컴포넌트를 리턴하는 함수를 호출 */}
                {this.showItemView()}

                {/* 파라미터 전달을 통해 콘텐츠가 다른 컴포넌트가 보여진다 */}
                {this.showItemView2("sam", "first", "indigo")}
                {this.showItemView2("robin", "second", "green")}

                {/* 컴포넌트를 요소로 가진 배열 - 배열을 그냥 출력하면 요소 값이 나열된다 */}
                {ccc}
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

    //파라미터를 전달받아 컴포넌트를 만들고 리턴하는 메소드 정의
    showItemView2 (name, title, color){
        return (
            <View style={{margin:8}}>
                <Text>Nice {name}</Text>
                <Button title={title} color={color}></Button>
            </View>
        )
    }
}

const style = StyleSheet.create({
    root:{flex:1, padding:16},
    text:{color:"black", fontSize:24},
})
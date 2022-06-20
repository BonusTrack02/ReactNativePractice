import React, {Component} from "react";
import {View, Text, StyleSheet, Button} from 'react-native'

export default class Home extends Component {
    render() {
        return (
            <View style={style.root}>
                <Text style={style.text}>Home Screen</Text>
                {/* 화면 전환하는 버튼 */}
                <Button title="go to the second screen" onPress={this.goToSecond}></Button>
            </View>
        )
    }

    goToSecond = () => {
        //react navigation에서는 Navigator에 의해 보여지는 컴포넌트들에게 props로 navigation이라는 객체가 자동으로 전달된다
        //즉, this.props 객체의 멤버로 navigation 객체가 존재
        //this.props.navigation.navigate('second') //파라미터 : 스크린 등록 시 지정했던 name 속성의 별명

        //만약, 현재 화면을 finish하면서 스크린을 전환하고 싶다면
        //this.props.navigation.replace('second')

        //화면을 전환하면서 데이터를 전달하고 싶다면 - [name, age를 가진 객체를 전달]
        this.props.navigation.navigate('second', {name:"sam", age:20})
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
import React, {Component} from 'react'
import {View} from 'react-native'

export default class Main extends Component {
    render() {
        return (
            //RN은 1개의 컴포넌트만 리턴할 수 있다
            //그래서 여러 개의 컴포넌트를 배치하려면 가장 큰 뷰가 있어야한다
            //1. 3개의 자식 뷰를 배치
            <View>
                {/* 뷰의 사이즈는 숫자(dp)나 %를 사용하거나 flex를 이용할 수 있다 */}
                <View style={{width:50, height:50, backgroundColor:"red"}}></View>
                <View style={{width:100, height:100, backgroundColor:"#00ff00"}}></View>
                <View style={{width:"70%", height:150, backgroundColor:"blue"}}></View>
                {/* 기본적으로 뷰들의 배치는 수직 - RN은 flex 스타일이며 기본 direction이 column */}
            </View>
        )
    }
}
import React, {Component} from 'react'
import {View} from 'react-native'

export default class Main extends Component {
    render() {
        return (
            //RN은 1개의 컴포넌트만 리턴할 수 있다
            //그래서 여러 개의 컴포넌트를 배치하려면 가장 큰 뷰가 있어야한다
            //1. 3개의 자식 뷰를 배치
            // <View>
            //     {/* 뷰의 사이즈는 숫자(dp)나 %를 사용하거나 flex를 이용할 수 있다 */}
            //     <View style={{width:50, height:50, backgroundColor:"red"}}></View>
            //     <View style={{width:100, height:100, backgroundColor:"#00ff00"}}></View>
            //     <View style={{width:"70%", height:150, backgroundColor:"blue"}}></View>
            //     {/* 기본적으로 뷰들의 배치는 수직 - RN은 flex 스타일이며 기본 direction이 column */}
            // </View>

            //2. 3개의 자식 뷰를 배치할때 사이즈를 flex로 지정해보기(권장사항)
            //flex는 배치 방향에 따라 width일수도 height일수도 있다
            //기본이 수직(column)이므로 현재 flex는 height을 의미
            //최상위 뷰는 1개만 있으므로 화면 전체를 사용하려면 100%도 되지만 RN은 사이즈를 정할 때 flex 스타일을 권장
            <View style={{flex:1}}>
                <View style={{flex:1, backgroundColor:"red"}}></View>
                <View style={{flex:2, backgroundColor:"green"}}></View>
                <View style={{flex:4, backgroundColor:"blue"}}></View>
            </View>
        )
    }
}
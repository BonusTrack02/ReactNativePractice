//RN은 기본적으로 화면 전환 기술이 존재하지 않는다
//그래서 별도 라이브러리를 활용 - React Navigation library
//https://reactnavigation.org/

//1. 기본 필수 라이브러리 추가
//npm install @react-navigation/native

//2. 추가 라이브러리 2개
//npm install react-native-screens react-native-safe-area-context

import React, {Component} from "react"
import {Button} from 'react-native'
import { NavigationContainer } from "@react-navigation/native"

import { createStackNavigator } from "@react-navigation/stack"

//Stack Navigator가 보여줄 스크린(컴포넌트)들 import
import Home from "./screens/Home"
import Second from "./screens/Second"

//ㄴ-2. Stack 객체 생성하기
const Stack = createStackNavigator()

//ㄱ. 가장 먼저 Navigator들을 감싸는 최상위 NavigationContainer 컴포넌트를 배치해야한다
export default class Main extends Component {
    render() {
        return (
            <NavigationContainer>
                {/* 원하는 화면 전환 효과 방식을 결정하는 Navigator를 배치 */}
                {/* 전환 방식에 따라 여러 종류의 Navigator가 존재 */}
                {/* ㄴ. Stack Navigator - ActionBar가 생기는 Navigator */}
                {/* ㄴ-1. Stack Navigator library 적용 */}
                {/* ㄴ-3. Stack Navigator와 Screen들 등록하기 */}
                <Stack.Navigator screenOptions={{
                    headerStyle:{backgroundColor:"indigo"},
                    headerTintColor:"white",
                    headerTitleStyle:{fontWeight:'bold'},
                    headerTitleAlign:'center',
                    //headerRight: ()=>{ return <Button title="menu"></Button>}
                    //축약형으로 작성
                    headerRight: ()=> <Button title="menu" onPress={()=>alert('click menu')}></Button>
                }}>
                    {/* Navigator가 보여줄 스크린 컴포넌트 등록 */}
                    <Stack.Screen options={{title:"홈"}} name="home" component={Home}></Stack.Screen>
                    <Stack.Screen options={{title:"두번째", headerShown:true}} name="second" component={Second}></Stack.Screen>
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
}
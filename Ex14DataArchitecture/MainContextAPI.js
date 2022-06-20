//Context API
//계층 구조의 컴포넌트들 사이에 데이터를 전달,전달... 하지 않고
//일종의 전역변수같은 곳에 데이터를 하나 위치하고 그 안에 있는 자식들이 모두 어디서든 필요할 때 사용하는 기법

import React, {Component} from "react";
import {View, Text, Button} from 'react-native'
import Second2 from "./Second2";

//Context API를 쓰기 위한 객체 생성 - React 클래스의 메소드
export const MyContext = React.createContext()

export default class MainContextAPI extends Component {

    state = {
        data:"Hello"
    }
    changeText = () => this.setState({data:"nice to meet you"})

    render() {
        return (

            //이 컴포넌트의 state 데이터를 자식, 자손들에게 제공하고 싶다면 반드시 Context API의 Provider 객체가 필요
            //이 Provider안에 위치하는 컴포넌트들은 어디서든(어떤 계층이든) Consummer로서 제공한 데이터를 사용할 수 있다
            //Provider가 제공한 데이터를 value 속성에 1개의 객체로 전달
            <MyContext.Provider value={{
                data : this.state.data, //데이터
                onPress:this.changeText //메소드
            }}>
                <View style={{ flex: 1, padding: 16 }}>
                    <Text>Main : {this.state.data}</Text>

                    {/* 자식 컴포넌트 - data 전달없이 */}
                    <First></First>
                </View>
            </MyContext.Provider>
        )
    }
}

class First extends Component {
    render() {
        return (
            <View style={{backgroundColor:'yellow', padding:16}}>
                <Text>First</Text>

                {/* 손주 컴포넌트 배치 */}
                <Second></Second>
                <Second2></Second2>
            </View>
        )
    }
}

class Second extends Component {
    render() {
        return (
            <View style={{backgroundColor:"aqua", padding:16}}>
                <Text>Second</Text>

                {/* Main의 Provider가 제공하는 정보를 사용하고 싶다면 소비자가 되어야 한다 */}
                {/* 이 컨슈머 안에 콜백함수가 위치하며 이 함수의 파라미터로 Provider의 value속성으로 지정한 객체가 전달되어 온다 */}
                {/* 이 콜백함수의 리턴으로 보여줄 컴포넌트를 작성하면 된다 */}
                <MyContext.Consumer>
                    {(value)=> {
                        return (
                            <View>
                                <Text>{value.data}</Text>
                                <Button title="글씨 변경" onPress={value.onPress}></Button>
                            </View>
                        )
                    }}
                </MyContext.Consumer>
            </View>
        )
    }
}
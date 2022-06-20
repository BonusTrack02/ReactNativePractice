import React, {Component} from "react"
import {View, Text, Button} from 'react-native'

import {MyContext} from './MainContextAPI'

class Second2 extends Component {
    render() {
        return (
            <View style={{backgroundColor:"orange", padding:16}}>
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

export default Second2
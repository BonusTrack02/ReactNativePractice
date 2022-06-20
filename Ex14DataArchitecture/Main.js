//RN은 데이터의 흐름이 단방향으로만 이루어진다 - 부모 컴포넌트가 자식, 자손들에게 데이터를 전달
//그래서 만약 계층 구조가 많다면 데이터를 전달,전달,전달,전달 해야한다
//또한 자식 컴포넌트는 부모쪽으로 데이터를 보낼 수 없다
//또한 자식 컴포넌트끼리 데이터를 주고 받을 수 없다

//계층 구조가 적으면 좋은 방법 - 데이터 관리가 용이
//하지만 계층 구조가 많아질수록 데이터 전달이 많아져서 번거롭다

//그래서 Flux라는 아키텍처 패턴을 만들었다
//간단하게 전역변수들만 있는 영역을 따로 만들고 어디서든 이 변수들을 사용하도록 하는 기법
//이를 가장 잘 구현한 라이브러리가 Redux
//하지만 초기 학습과정이 다소 어렵다
//그래서 RN팀에서 Redux처럼 Flux패턴을 구현할 수 있는 API를 제공
//이를 Context API라고 부른다

import React, {Component} from "react";
import {View, Text, Button} from 'react-native'

export default class Main extends Component {

    state = {
        data : "Hello",
    }
    changeData = () => this.setState({data:"Good"})

    render() {
        return (
            <View style={{flex:1, padding:16}}>
                <Text>Main : {this.state.data}</Text>

                {/* 자식 컴포넌트에게 data를 전달 */}
                <First data={this.state.data} onPress={()=>{this.changeData()}}></First>
            </View>
        )
    }
}

class First extends Component {
    render() {
        return (
            <View style={{backgroundColor:'yellow', padding:16
            }}>
                {/* this.props라는 변수에 전달된 data 출력 */}
                <Text>First : {this.props.data}</Text>

                {/* 전달받은 데이터와 함수를 손주 컴포넌트에게 전달 */}
                <Third data={this.props.data} onPress={this.props.onPress}></Third>
            </View>
        )
    }
}

//함수형 컴포넌트로 만들어보기 - [state, props, lifecycle 메소드가 없다]
const Third = (props) => {
    return (
        <View style={{backgroundColor:'aqua'}}>
            {/* 파라미터에 전달받은 속성 data를 보여주기 */}
            <Text>Third : {props.data}</Text>
            <Button title="글씨 변경" onPress={props.onPress}></Button>
        </View>
    )
}
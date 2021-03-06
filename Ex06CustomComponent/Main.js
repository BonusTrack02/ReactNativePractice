import React, {Component} from "react";
import {View, Text, StyleSheet, Button} from 'react-native'
import ComponentA from "./ComponentA";
import ComponentB from "./ComponentB";
import MyComponent3 from "./MyComponent3";
import MyComponent4 from "./MyComponent4";
import MyComponent5 from "./MyComponent5";

export default class Main extends Component {
    render() {
        return (
            <View>
                <Text style={style.text}>Hello world</Text>

                {/* 개발자가 만든 Custom Component를 사용해보기 */}
                <MyComponent></MyComponent>
                <MyComponent></MyComponent>

                {/* 컴포넌트를 재사용하는 것은 편하지만 항상 같은 글씨로만 보인다 */}
                {/* 그래서 커스텀 컴포넌트를 사용할 때 보여주고 싶은 값을 속성으로 전달해보기 */}
                <MyComponent2 name="kim" btnTitle="확인" color="indigo"></MyComponent2>
                <MyComponent2 name="park" btnTitle="취소" color="green"></MyComponent2>

                {/* 별도의 js문서에 CustomComponent 만들어도 된다 */}
                {/* 속성으로 값 전달말고 함수도 전달 가능 */}
                <MyComponent3 onPress={this.clickBtn} title="button"></MyComponent3>
                
                {/* 만약 속성 값 중 일부를 전달하지 않으면? 무조건 에러는 아니다 - 필수 여부에 따라 다르다 */}
                <MyComponent3 title='버튼'></MyComponent3>

                {/* 혹시, 속성 값이 모두 전달되지 않을 때 기본 값이 적용되는 컴포넌트 만들어보기 */}
                <MyComponent4></MyComponent4>
                <MyComponent4 title="aaa"></MyComponent4>
                <MyComponent4 color="red"></MyComponent4>

                {/* 여러 개의 속성 값이 전달될 때 조금 쉽게 이 props를 적용하는 컴포넌트 */}
                <MyComponent5 title="bbb"></MyComponent5>
                <MyComponent5 title="ccc" color="black"></MyComponent5>

                {/* 컴포넌트끼리의 통신은 기본적으로 불가능 */}
                {/* 배치 상의 부모 컴포넌트가 자식 컴포넌트들의 통신을 대신 수행해준다 */}
                <ComponentA message={this.state.msg}></ComponentA>
                <ComponentB onPress={this.changeText}></ComponentB>
            </View>
        )
    }

    state = {
        msg:"Hello",
    }

    changeText = () => {
        this.setState({msg:"nice to meet you"})
    }

    //CustomComponent로 전달할 함수
    clickBtn = () => {
        alert("clicked btn")
    }
}

//사용자 정의 컴포넌트 클래스 - 속성 값을 전달받는
class MyComponent2 extends Component {
    render() {
        return (
            <View style={{margin:8}}>
                {/* MyComponent2 컴포넌트를 사용할때
                설정한 속성(프로퍼티) 중 name이라는 이름으로 지정한 값은 이 컴포넌트 클래스안에
                아주 특별한 멤버변수(props)에 자동으로 속성 명의 멤버로 저장되어 있다 */}
                <Text>Hello {this.props.name}</Text>
                <Button title={this.props.btnTitle} color={this.props.color}></Button>
            </View>
        )
    }
}

//사용자 정의 컴포넌트 클래스
class MyComponent extends Component {
    render() {
        return (
            <View style={{margin:8}}>
                <Text>Hello sam</Text>
                <Button title="click me"></Button>
            </View>
        )
    }
}

const style = StyleSheet.create({
    root:{flex:1},
    text:{color:"black"},
})
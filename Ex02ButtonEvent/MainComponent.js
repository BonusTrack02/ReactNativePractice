import React, {Component} from "react"
import {View, Text, Button, StyleSheet, Alert, Image} from "react-native"

class MainComponent extends Component {
    //멤버변수 - 프로퍼티
    //Text 컴포넌트가 보여줄 글씨를 가지고 있는 변수
    aaa = "Hello"

    //Component 클래스 안에서 화면 갱신에 영향을 주는 특별한 멤버변수가 이미 존재
    //state
    state = {
        msg:"Hello",
        img:require("./image/ms14.png")
    }
    render() {
        return (
            <View style={style.root}>
                {/* 이 컴포넌트의 글씨가 만약 변경되어야 한다면 이 Text 컴포넌트는 글씨를 직접 쓰지 않고 변수를 만들어 값을 보여주도록 해야한다 */}
                <Text style={style.plainText}>{this.state.msg}</Text>
                {/* <Button title="button" onPress={clickBtnFunction3}></Button> */}
                {/* 클래스 외부의 함수를 버튼 클릭 콜백함수로 사용해도 동작한다 */}
                {/* 하지만, 기본적으로 클래스의 컴포넌트를 외부에서 제어하는 방식은 권장되지 않는다 */}
                {/* 그래서 가급적 클래스의 콜백함수는 멤버함수. 즉, 메소드로 만들 것을 권장 */}
                {/* JS에서는 멤버를 지칭할 때 반드시 this 키워드가 필요 */}
                <Button title="button" onPress={this.changeText3}></Button>

                <View style= {{marginTop:40,}}>

                </View>
                <Button title="change image" color="green" onPress={this.changeImage}></Button>

                <Image source={this.state.img} style={style.img}></Image>
            </View>
        )
    }

//이미지를 변강하는 메소드
changeImage =() => {
    //화면 갱신에 영향을 주는 특별한 변수 state를 변경
    //Image 컴포넌트가 보여주는 이미지 값을 변경
    this.setState({img:require("./image/ms20.png")})
}

    //무조건 콜백함수는 멤버로 만들 것을 권장
    clickBtn() {
        Alert.alert("clicked button")
    }

    //버튼 클릭시 Text 컴포넌트의 글씨를 변경해보기
    changeText() {
        //Text 컴포넌트가 보여주는 값을 가진 aaa 변수 값을 변경
        this.aaa = "Nice to meet you" //error
        //why - 함수도 클래스의 특징을 가지기 때문에 this 키워드가 이 메소드가 된다
        //우리가 원하는 것은 MainComponent 클래스의 aaa
    }

    //함수는 함수지만 생성자 함수의 성질을 가지지 않는 화살표 함수를 클래스 안에서 멤버 메소드로 사용할 것을 강하게 권장
    changeText2 = () => {
        //이 화살표 함수 안에서 this는 MainComponent 클래스가 된다
        this.aaa = "Nice to meet you"
        //변수 값을 바꾸어도 화면이 갱신되지 않는다
        //아주 특별한 변수(state)만이 화면 갱신에 영향을 준다
    }

    //화면 갱신에 영향을 주는 state라는 특별한 변수의 값을 변경
    changeText3 = () => {
        //this.state.msg = "nice to meet you" //이렇게해도 화면 갱신이 안된다
        //자동으로 화면 갱신이 되려면 state값을 변경하는 메소드를 호출
        this.setState({msg:"nice to meet you"})
    }
}

//버튼 클릭시 발동하도록 지정한 함수
function clickBtnFunction() {
    //경고창 보이기
    alert('press button')
}

//익명함수로 콜백함수 만들어보기
let clickBtnFunction2 = function() {
    Alert.alert("press button!!")
}

//화살표함수로 콜백함수 만들어보기
let clickBtnFunction3 = () => {
    Alert.alert("press button!!!")
}

//스타일 객체
const style = StyleSheet.create({
    root : {
        flex:1,
        padding:16,
    },
    plainText : {
        marginBottom:16,
        fontWeight:"bold",
        color:"black",
    },
    img : {
        marginTop:8,
        flex:1,
        width:null,
        resizeMode:"center",
    }
})

export default MainComponent
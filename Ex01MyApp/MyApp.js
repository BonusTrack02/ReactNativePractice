//react 라이브러리에 존재하는 컴포넌트 클래스를 사용하기 위해 import
//컴포넌트의 render()메소드라는 시스템을 react 라는 라이브러리에서 비롯되었다
import React, { Component } from "react"
import { Text, View, Button, StyleSheet, Image } from "react-native"

//RN에서는 반드시 컴포넌트를 상속한 클래스만 화면에 보일 수 있다
class MyApp extends Component {
    //리액트의 Component 클래스가 화면에 보여줄 뷰를 그려내는 작업 메소드
    render() {

        let name = "sam" //지역변수
        let btnTitle = "click me" //버튼에 보여질 제목 글씨
        //이 메소드에서 리턴한 컴포넌트가 화면에 보여진다
        //render()의 리턴은 오직 1개의 컴포넌트만 가능
        //return <Text>Hello World!</Text><Text>Nice to meet you</Text>

        //그래서 여러 컴포넌트들을 묶는 컴포넌트그룹이 필요 (android - view group)
        //그룹용으로 만들어진 컴포넌트 - View
        //JSX언어의 특징은 js안에서 xml을 명시할 수 있고 반대로 xml안에서 js변수나 함수도 사용 가능
        //xml 영역 안에서 js변수나 함수 호출문을 사용하고 싶다면 {}만 표시하면 된다
        //기본적으로 보여지는 스타일은 css를 모티브로 적용되어있다
        //단, 스타일을 css문서로 적용하는 것이 아니라 스타일 값을 가진 객체를 만들어 속성으로 지정하여 적용
        // return (
        //     <View style = {style.rootContainer}>
        //         <Text style = {style.mainText}>Hello {name}</Text>
        //         <Text style={style.plainText}>Nice to meet you</Text>
        //         {/* 버튼은 스타일 작업이 불가능. 스타일 속성이 없다 */}
        //         <View style={ {marginTop:10, width:150} }>
        //             <Button title={btnTitle}></Button>
        //         </View>
        //     </View>
        // )

        //이미지 컴포넌트도 연습해보기
        return (
            <View style={style.rootContainer}>
                <Text style={style.mainText}>Hello world</Text>
                <Text style={style.plainText}>Nice to meet you</Text>

                <Button title="button"></Button>
                <Button title={btnTitle} color="orange"></Button>
                <View style={{marginTop:10, width:200}}>
                    <Button title="버튼" color="#841584"></Button>
                </View>

                {/* 이미지 컴포넌트 */}
                {/* 이미지의 경로를 그냥 문자열로 쓰는 것이 아니라 JS의 require()함수를 이용해야만 한다 */}
                <Image source={require("./image/mountains.jpg")} style={{margin:4, flex:1, resizeMode:"cover", width:null}}></Image>
            </View>
        )
    }
}

//아래처럼 개별 스타일 객체를 만들면 관리도 어렵고 자동 완성 기능도 제한적
//따라서 모든 스타일 관련 객체를 하나로 묶는 클래스가 존재
const style = StyleSheet.create({
    rootContainer:{
        backgroundColor:"#aaffcc",
        flex:1,
        padding:16,
    },
    mainText:{
        color:"blue",
        fontSize:20,
        fontWeight:"bold",
        margin:16,
    },
    plainText:{
        margin:8,
        color:"black",
    }
})

//MyApp class가 보여주는 컴포넌트들의 스타일 값을 가진 객체를 생성
//1. 텍스트의 스타일 작업 (css와 비슷한데 약간 다르다)
const textStyle = {
    color:"red",
    fontSize:20,
    fontWeight:"bold",
    margin:16 //단위(기본 dp)
}

//2. 전체 View의 스타일작업
const rootView = {
    backgroundColor:"#aaffcc",
    //View의 기본 높이는 wrap-content
    //디바이스마다 높이가 다르므로
    //height:"100%"

    //RN의 권장 사이즈 기법
    //RN은 기본적으로 무조건 display 속성이 flex 스타일로 설정되어 있다
    //그리고 기본 flex의 방향을 나타내는 flex-direction 값이 column(수직)
    //그래서 배치 방향을 변경하고 싶다면
    //flexDirection:"row"
    //flex의 속성 중에서 다른 뷰와 비례적으로 사이즈를 결정하는 속성 값
    //마치 android의 layout-weigth과 유사한 속성
    flex:1, //flex-grow 속성과 같은 역할
    padding:16
}

//중간 글씨의 스타일
const plainText = {
    margin:8,
    color:"black"
}

//버튼의 스타일 객체
const btnStyle = {
    marginTop:40,
    backgroundColor:"yellow"
}

//다른 문서(index.js)에서 MyApp 클래스를 사용하려면(import)
//반드시 여기서 추출(export)해야만 한다
//하나의 js 문서에서 export는 여러 개를 할 수 있다. 단, 그 중에 1개는 export default여야만 한다
export default MyApp
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
            // <View style={{flex:1}}>
            //     <View style={{flex:1, backgroundColor:"red"}}></View>
            //     <View style={{flex:2, backgroundColor:"green"}}></View>
            //     <View style={{flex:4, backgroundColor:"blue"}}></View>
            // </View>

            //기본 배치 방향이 수직 - 수평 배치 연습
            // <View style={{flex:1, flexDirection:"row"}}>
            //     <View style={{backgroundColor:"red", flex:1}}></View>
            //     <View style={{backgroundColor:"blue", flex:2}}></View>
            //     <View style={{backgroundColor:"green", flex:4}}></View>
            //     {/* 수평 배치일 때, 자식 뷰들의 flex는 width를 의미 */}
            // </View>

            //자식 뷰들에 사이즈를 직접 주고, 배치(정렬)를 여러 형태로 적용해보기
            //수직 배치일때
            //justifyContent, alignItems 정렬 속성 연습
            // <View style={{flex:1, flexDirection:"column", justifyContent:"space-between", alignItems:"center"}}>
            //     <View style={{width:50, height:50, backgroundColor:"red"}}></View>
            //     <View style={{width:50, height:50, backgroundColor:"green"}}></View>
            //     <View style={{width:50, height:50, backgroundColor:"blue"}}></View>
            // </View>

            //수평 배치일 때
            //justifyContent, alignItems 정렬 속성 연습
            // <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-between", alignItems:"center"}}>
            //     <View style={{ width: 50, height: 50, backgroundColor: "red" }}></View>
            //     <View style={{ width: 50, height: 50, backgroundColor: "green", alignSelf:"flex-start" }}></View>
            //     <View style={{ width: 50, height: 50, backgroundColor: "blue" }}></View>
            // </View>

            // <View style={{flex:1}}>
            //     <View style={{height:50, backgroundColor:"red"}}></View>

            //     <View style={{flex:1, backgroundColor:"green"}}></View>
            //     <View style={{flex:1, backgroundColor:"blue"}}></View>
            // </View>

            //중첩 구조의 배치 - 수직, 수평 배치 혼재
            <View style={{flex:1, flexDirection:"column"}}>
                {/* 크게 수직으로 2분할 [1:2비율] */}
                <View style={{flex:1, flexDirection:"row"}}>
                    {/* 좌우로 2:1의 비율 배치 */}
                    <View style={{flex:2, backgroundColor:"red"}}>
                        {/* 절대 위치를 이용하여 뷰들을 겹치도록 배치 */}
                        <View style={{width:50, height:50, backgroundColor:"white", left:10, top:10, position:"absolute"}}></View>
                        <View style={{width:50, height:50, backgroundColor:"gray", left:20, top:20, position:"absolute"}}></View>
                    </View>
                    <View style={{flex:1,}}>
                        {/* 수직으로 1:1비율 배치 */}
                        <View style={{flex:1, backgroundColor:'yellow'}}></View>
                        <View style={{flex:1, backgroundColor:"green"}}></View>
                    </View>
                </View>

                <View style={{flex:2, flexDirection:"row"}}>
                    {/* 좌우로 1:2 비율 배치 */}
                    <View style={{flex:1, backgroundColor:"blue"}}></View>
                    <View style={{flex:2}}>
                        {/* 수직 1:1 */}
                        <View style={{flex:1, backgroundColor:"gray"}}></View>
                        <View style={{ flex: 1, backgroundColor: "brown" }}>
                            {/* 절대 위치를 이용하여 뷰들을 겹치도록 배치 */}
                            <View style={{ width: 50, height: 50, backgroundColor: "white", left: 10, top: 10, position: "absolute" }}></View>
                            <View style={{ width: 50, height: 50, backgroundColor: "gray", left: 20, top: 20, position: "absolute" }}></View>

                            <View style={{ width: 50, height: 50, backgroundColor: "black", right: 20, bottom: 20, position: "absolute" }}></View>
                        </View>
                    </View>
                </View>

                {/* 절대 위치 */}
                <View style={{width:100, height:100, backgroundColor:"orange", position:'absolute', bottom:50, left:80, borderRadius:50}}></View>
            </View>
        )
    }
}
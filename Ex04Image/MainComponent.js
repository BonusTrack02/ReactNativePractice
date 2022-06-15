import React, {Component} from 'react'
import {View, Image, TouchableOpacity, Alert, TouchableHighlight, TouchableNativeFeedback, Text, ImageBackground, ScrollView} from 'react-native'

class MainComponent extends Component {

    //화면 갱신에 영향을 미치는 아주 특별한 변수 state
    state = {
        imgNum:0, //보여줄 이미지를 가진 배열의 인덱스 번호
        imgArr:[
            require('./image/moana01.jpg'),
            require('./image/moana02.jpg'),
            require('./image/moana03.jpg'),
            require('./image/moana04.jpg'),
            require('./image/moana05.jpg'),
            //네트워크 상의 이미지는 아래처럼
            {uri:'https://cdn.pixabay.com/photo/2018/03/26/02/05/cat-3261420_960_720.jpg'},
        ]
    }

    render() {
        return (
            //전체 뷰에 배경 이미지 적용 - 스타일로 적용 불가
            //배경 이미지용 뷰가 따로 있다
            <ScrollView style={{flex:1,}} horizontal={false}>
                <ImageBackground
                    source={{uri:"https://cdn.pixabay.com/photo/2022/05/31/14/17/sea-7233669_960_720.jpg"}}
                    style={{width:"100%",height:"100%", flexDirection:"column"}}
                    resizeMode="stretch">
                    {/* 그림 이미지는 require()함수 이용 - 별도의 스타일이 없다면 기본 원본 사이즈 */}
                    <Image
                        style={{ width: 200, height: 100 }}
                        source={require("./image/moana01.jpg")}>
                    </Image>

                    {/* 네트워크 상의 이미지를 보여주기 : uri 라는 이름의 멤버를 가진 객체를 source로 설정 */}
                    {/* 네트워크 상의 이미지는 사이즈 지정이 없으면 보이지 않는다 */}
                    <Image
                        style={{ width: 200, height: 100 }}
                        source={{ uri: 'https://cdn.pixabay.com/photo/2018/03/26/02/05/cat-3261420_960_720.jpg' }}>
                    </Image>

                    {/* 이미지의 클릭 이벤트 처리 - Image 컴포넌트는 onPress라는 속성이 없다 */}
                    {/* 클릭이벤트에 반응하는 컴포넌트들이 별도로 존재한다 - TouchableXXXXXXX */}
                    <TouchableOpacity onPress={this.clickImage}>
                        <Image
                            style={{ width: 200, height: 100 }}
                            source={require('./image/moana02.jpg')}>
                        </Image>
                    </TouchableOpacity>

                    <TouchableHighlight onPress={this.clickImage} style={{ padding: 4, width: 208 }}>
                        <Image
                            style={{ width: 200, height: 100 }}
                            source={require('./image/moana03.jpg')}>
                        </Image>
                    </TouchableHighlight>

                    {/* 안드로이드의 클릭 피드백 효과(물결효과) */}
                    <TouchableNativeFeedback
                        onPress={this.clickImage}>
                        <View style={{ padding: 4, width: 208, borderWidth: 2, borderRadius: 4, marginLeft: 16 }}>
                            <Text>MOANA</Text>
                            <Image
                                style={{ width: 200, height: 100 }}
                                source={require('./image/moana04.jpg')}>
                            </Image>
                        </View>
                    </TouchableNativeFeedback>

                    <TouchableOpacity onPress={this.changeImage}>
                        <Image
                            style={{ width: 200, height: 100 }}
                            source={this.state.imgArr[this.state.imgNum]}>
                        </Image>
                    </TouchableOpacity>
                    <Image
                        style={{ width: 200, height: 100 }}
                        source={require('./image/moana04.jpg')}>
                    </Image>
                    <Image
                        style={{ width: 200, height: 100 }}
                        source={require('./image/moana04.jpg')}>
                    </Image>
                    <Image
                        style={{ width: 200, height: 100 }}
                        source={require('./image/moana04.jpg')}>
                    </Image>
                </ImageBackground>
            </ScrollView>
        )
    }

    changeImage = () => {
        var index = this.state.imgNum + 1
        if (index > 5) index = 0
        this.setState({imgNum : index})
    }

    //이미지 클릭에 반응하는 콜백메소드
    clickImage = () => {
        //Alert.alert('clicked image')
    }
}

export default MainComponent
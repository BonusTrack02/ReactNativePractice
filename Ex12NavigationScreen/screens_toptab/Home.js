import React from "react";
import {View, Text, StyleSheet} from 'react-native'

const Home = () => {
    return (
        <View style={style.root}>
            <Text style={style.text}>TAB #1</Text>
        </View>
    )
}

const style = StyleSheet.create({
    root:{flex:1, justifyContent:'center', alignItems:'center'},
    text:{color:'black'},
})

export default Home
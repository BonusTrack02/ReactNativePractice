import React from "react";
import {View, Text, StyleSheet} from 'react-native'

const Tab3 = () => {
    return (
        <View style={style.root}>
            <Text style={style.text}>TAB #3</Text>
        </View>
    )
}

const style = StyleSheet.create({
    root:{flex:1, justifyContent:'center', alignItems:'center'},
    text:{color:'black'},
})

export default Tab3
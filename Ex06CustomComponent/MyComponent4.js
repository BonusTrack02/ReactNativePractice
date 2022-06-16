import React, {Component} from 'react'
import {View, Text, Button} from 'react-native'

export default class MyComponent4 extends Component {

    //props가 전달되지 않았을 때 대비하기 위한 defaultProps
    static defaultProps = {
        title : "Untitled",
        color : "orange",
        onPress : () => {
            
        }
    }

    render() {
        return (
            <View style={{margin:8}}>
                <Button onPress={this.props.onPress} title={this.props.title} color={this.props.color}></Button>
            </View>
        )
    }
}
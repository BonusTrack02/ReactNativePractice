import React, {Component} from "react";
import { Text, View } from "react-native";

export default class ComponentA extends Component {
    render() {
        return (
            <View>
                <Text>{this.props.message}</Text>
            </View>
        )
    }
}
//Material TopTab Navigator를 다루는 실습
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import Home from "./screens_toptab/Home";
import Tab2 from "./screens_toptab/Tab2";
import Tab3 from "./screens_toptab/Tab3"

const Tab = createMaterialTopTabNavigator()

//함수형 컴포넌트로 만들어보기
const MainMaterialTopTab = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                tabBarPosition="top"
                initialRouteName="TAB2"
                screenOptions={{
                    swipeEnabled:true
                }}>
                {/* 탭에 의해 전환될 화면 screen들 */}
                <Tab.Screen name="TAB1" component={Home}/>
                <Tab.Screen name="TAB2" component={Tab2}/>
                <Tab.Screen name="TAB3" component={Tab3}/>
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default MainMaterialTopTab
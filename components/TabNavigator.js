import React from "react"
import {View,Text,Touchable,Image,StyleSheet} from "react-native"
import TransactionScreen from "../screens/transaction"
import SearchScreen from "../screens/search"

import{NavigationContainer} from "@react-navigation/native"
import { createBottomTabNavigator} from "@react-navigation/bottom-tabs"

const Tab= createBottomTabNavigator()
export default class ButtonTabNavigator extends React.Component{
    render(){
        return(
          <NavigationContainer>
        <Tab.Navigator>
            <Tab.Screen name="Transaction" component={TransactionScreen}/>
            <Tab.Screen name="Search" component={SearchScreen}/>
         </Tab.Navigator>

          </NavigationContainer>
        )
    }
}


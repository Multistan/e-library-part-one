import React from "react"
import {View,Text,Touchable,Image,StyleSheet} from "react-native"

export default class TransactionScreen extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.text}>TransactionScreen</Text>
            </View>
        )
    }
}

const styles= StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#cbdef7",
        alignItems:"center",
        justifyContent:"center"
    },
    text:{
        textAlign:"center",
        fontSize:30
    }
})
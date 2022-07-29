import React from "react"
import {View,Text,Touchable,Image,StyleSheet} from "react-native"

export default class SearchScreen extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.text}>SearchScreen</Text>
            </View>
        )
    }
}

const styles= StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#565340",
        alignItems:"center",
        justifyContent:"center"
    },
    text:{
        textAlign:"center",
        fontSize:30
    }
})
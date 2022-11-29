
import { StatusBar } from "expo-status-bar";
import {
  Button,
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
} from "react-native";

import { useState,useEffect } from "react";




const SplashScreen= function ({ navigation}){



    useEffect(function(){
        const timer = setTimeout(() => {
            navigation.navigate("Login");
          }, 1000);
          return () => clearTimeout(timer);
    })
    

    return(
        <View style={styles.screen}>
            <Text style={styles.nameText}>{"CyberChat"}</Text>
        </View>
    )
}

const styles  = StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:"center",
        backgroundColor:"white",
        alignContent:"center",
    },
    nameText:{
        fontSize:40,
        fontStyle:"italic",
        position:"absolute",
        top:"50%",
        left:"20%"
    }

})


export default SplashScreen;
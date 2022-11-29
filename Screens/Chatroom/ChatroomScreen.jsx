import { StatusBar } from "expo-status-bar";
import {
  Button,
  StyleSheet,
  Text,
  View,
  SectionList,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { TextInput } from "react-native";
import React, { useState, useCallback, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { GiftedChat } from "react-native-gifted-chat";
import CryptoJS from "react-native-crypto-js";

import { collection, getDocs } from "firebase/firestore";
import { db, authentication } from "../../firebase/firebase-config";

import { SelectList } from "react-native-dropdown-select-list";
import { async } from "@firebase/util";

const tryid = Math.random();





const emoji = ["😀"," 😃","😄","😁","😆","😅","😂","🤣","😎","😮‍💨","😰","🤗","😰"];


const ChatroomScreen = function ({ navigation }) {
  const [list, setList] = useState([]);

  useEffect(() => {
    let querySnapshot;
    var li;
    const fetchData = async () => {
      querySnapshot = await getDocs(collection(db, "Users"));
      li = [];
      querySnapshot.forEach((doc) => {
        // console.log();
        let bytes = CryptoJS.AES.decrypt(doc.data().name, "secret key 123");
        let originalText = bytes.toString(CryptoJS.enc.Utf8);
        li.push({
          key: doc.id,
          name: originalText,
          avavter:emoji[Math.random().toPrecision(1)*10]
        });

        console.log("1");
      });

      setList(li);
    };
    fetchData();
  }, []);

  return (
    <>
      <StatusBar style="light" />

      <View style={styles.topView}>
        <Text style={{ color: "white",fontSize:40,left:"35%",top:"4%",fontWeight:"bold"}}>Home</Text>

        <View style={styles.middleView}>
          <FlatList
            style={{ width: "100%", marginTop: "12%", marginLeft: "6%" }}
            data={list}
            keyExtractor={(item) => item.key}
            renderItem={({ item }) => {
              return (
                <View style={styles.listView}>
                  <Text style={styles.listView_Text}>{item.name}</Text>
                  <Text style={styles.listView_face}>{item.avavter}</Text>
                </View>
              );
            }}
          />
        </View>
      </View>

      <View style={styles.accessAreaView}>
        <TouchableOpacity
          style={styles.appButtonContainer}
          onPress={() => {
            navigation.navigate(`ChatroomMessage`);
          }}
        >
          <Text style={styles.appButtonText}>{"Message"}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonDocs}
          onPress={() => {
            navigation.navigate(`Docs`);
          }}
        >
          <Text style={styles.buttonDocsText}>{"Algo Docs"}</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  topView: {
    flex: 1,
    backgroundColor: "black",
    alignContent: "center",
    justifyContent: "center",
  },

  middleView: {
    top:"10%",
    height:"80%",
    backgroundColor: "white",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    alignContent: "center",
    justifyContent: "center",
  },

  dropdown: {
    borderColor: "green",
  },
  listView: {
    width: 350,
    height: 70,
    // borderWidth:2,
    backgroundColor: "transparent",
    marginBottom: 20,
    borderRadius: 10,
    // borderColor:"grey"
    
  },
  listView_Text: {
    fontSize: 20,
    position: "absolute",
    left: "20%",
    fontWeight:"600",
  },
  listView_face:{
    fontSize: 30,
  },
  appButtonContainer: {
    position: "absolute",
    marginTop: 12,
    marginLeft: "3%",
    width: "21%",
    elevation: 8,
    backgroundColor: "#009688",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  appButtonText: {
    fontSize: 13,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
  },
  buttonDocs: {
    position: "absolute",
    marginTop: 12,
    marginLeft: "30%",
    width: "21%",
    elevation: 8,
    backgroundColor: "#009688",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  buttonDocsText: {
    fontSize: 13,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
  },
  accessAreaView: {
    width: "100%",
    height: "10%",
    backgroundColor: "white",
    borderColor: "black",
    borderTopWidth: 3,
  },
});

export default ChatroomScreen;

{
  /* {User_base.map(function(element,index){
  
       
          console.log(element.name);
          console.log(User_base);
          return <Text key={element.id}>{element.name}</Text>
      })}      
      
      // SetReset(reset + 1);
        User_base.push({
          
          
        });
      
      */
}

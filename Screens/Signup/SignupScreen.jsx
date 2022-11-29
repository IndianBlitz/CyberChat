import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native";
import { useState } from "react";

import { app, authentication, db } from "../../firebase/firebase-config";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { collection, getDocs, addDoc, doc } from "firebase/firestore";
import CryptoJS from "react-native-crypto-js";
import CustomButton from "../../components/Login/CustomButton";

// const answer = collection(db, "Users");
// console.log(answer);

const Sizes = {
  username: {
    usernameInput_width: "80%",
    usernameInput_height: "6%",
  },
  password: {
    usernameInput_width: "70%",
    usernameInput_height: "6%",
  },
};

const checkPassword = function (pass1, pass2) {
  if (pass1 !== pass2 || pass1.length < 7 || pass2.length < 7) {
    alert("Wrong password or length does not match");
    return false;
  }
  var strongRegex = new RegExp(
    "^(?=.{14,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$",
    "g"
  );
  var mediumRegex = new RegExp(
    "^(?=.{10,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$",
    "g"
  );
  var enoughRegex = new RegExp("(?=.{8,}).*", "g");

  if (!mediumRegex.test(pass1) || !strongRegex.test(pass1)) {
    alert("Weak password");
    return false;
  }

  return true;
};

const SignupScreen = function ({ navigation }) {
  const [username, setUsername] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");

  const RegisterUser = function () {
    console.log(userEmail);

    createUserWithEmailAndPassword(authentication, userEmail, confirmpassword)
      .then(function (res) {
        try {
          const docRef = addDoc(collection(db, "Users"), {
            name: CryptoJS.AES.encrypt(username, "secret key 123").toString(),
            encryption: "AES",
          });
          console.log("Document written with ID: ", docRef);
        } catch (e) {
          console.error("Error adding document: ", e);
        }

        navigation.navigate("Login");
        console.log(res);
      })
      .catch(function (res) {
        alert("Try again something is wrong");
        console.log(res);
      });
  };

  return (
    <View style={styles.screenColor}>
      <StatusBar style="dark" />

      <Text style={styles.textSignIn}>Sign up with Email</Text>
      <View style={styles.greenLine}></View>

      <Text style={styles.terms}>
          Get chatting with friends and family 
          today by signing up for our chat app!
        </Text>

    
      <TextInput

        style={styles.usernameInput}
        placeholder="Your name"
        placeholderTextColor="#24786D"
        onChangeText={(text) => setUsername(text)}
      />

      <TextInput
        style={styles.userEmailInput}
        placeholder="Your email"
        placeholderTextColor="#24786D"
        onChangeText={(text) => setUserEmail(text)}
      />

      <TextInput
        style={styles.passwordInput}
        placeholder="Password"
        placeholderTextColor="#24786D"
        onChangeText={(text) => setPassword(text)}
        keyboardType="email-address"
      />

      <TextInput
        style={styles.confirmpasswordInput}
        placeholder="Confirm Password"
        placeholderTextColor="#24786D"
        onChangeText={(text) => setConfirmPassword(text)}
        keyboardType="email-address"
      />

      <CustomButton
        onPress={RegisterUser}
        title="Create my account"
        
        buttonColor="#24786D"
        buttonStyle={styles.buttonCreateAccount}
        accessibilityLabel="Learn more about this purple button"
      />

      {/* <Text style={styles.laws}>
        By creating the account you are agreeing to Terms and conditions
      </Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  screenColor: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  textSignIn: {
    color: "black",
    fontSize: 25,
    // textShadowColor: 'rgba(0, 0, 0, 0.75)',
    // textShadowOffset: {width: -1, height: 1},
    // textShadowRadius: 10,
    fontWeight: "bold",
    
  },
  

  greenLine:{
    backgroundColor:"#00b38f",
    width:75,
    height:14,
    top:-15,
    left:"20%",
    zIndex:-1,
   
  },
  terms: {
    color: "grey",
    fontSize: 12,
    margin: 10,
    marginBottom: 12,
    marginRight: 40,
    marginLeft: 45,
    paddingLeft: 10,
    paddingRight: 10,
  },

  usernameInput: {
    width: Sizes.username.usernameInput_width,
    height: Sizes.username.usernameInput_height,
    borderColor: "white",
    backgroundColor: "white",
    borderWidth: 1,
    color: "black",
    borderBottomColor: "grey",
    marginBottom: "10%",
    marginTop: 30,
  },

  userEmailInput: {
    width: Sizes.username.usernameInput_width,
    height: Sizes.username.usernameInput_height,
    borderColor: "white",
    backgroundColor: "white",
    borderWidth: 1,
    color: "black",
    borderBottomColor: "grey",
    marginBottom: "10%",
    marginTop: 30,
  },

  passwordInput: {
    width: Sizes.username.usernameInput_width,
    height: Sizes.username.usernameInput_height,
    borderColor: "white",
    backgroundColor: "white",
    borderWidth: 1,
    color: "black",
    borderBottomColor: "grey",
    marginBottom: "10%",
    marginTop: 30,
  },

  confirmpasswordInput: {
    width: Sizes.username.usernameInput_width,
    height: Sizes.username.usernameInput_height,
    borderColor: "white",
    backgroundColor: "white",
    borderWidth: 1,
    color: "black",
    borderBottomColor: "grey",
    marginBottom: "10%",
    marginTop: 30,
  },
  buttonCreateAccount:{
    margin: 0,
    
    width: "80%",
    height: "6%",
    borderRadius: 20,
  },
  laws: {
    color: "white",
  },
});

export default SignupScreen;

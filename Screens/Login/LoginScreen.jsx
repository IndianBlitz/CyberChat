import { StatusBar } from "expo-status-bar";
import {
  Button,
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
} from "react-native";
import { TextInput } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { useState } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { authentication } from "../../firebase/firebase-config";
import {
  getAuth,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";
import CustomButton from "../../components/Login/CustomButton";

const Sizes = {
  UserEmail: {
    UserEmailInput_width: "90%",
    UserEmailInput_height: "6%",
  },
  password: {
    UserEmailInput_width: "90%",
    UserEmailInput_height: "6%",
  },
};

const LoginScreen = function ({ navigation }) {
  const [UserEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");

  const LoginInUser = function () {
    signInWithEmailAndPassword(authentication, UserEmail, password)
      .then((res) => {
        navigation.navigate("Chatroom");
      })
      .catch((res) => {
        alert("Invaild Email or Password");
      });
  };

  const forgotPassword = (Email) => {
    console.log("reset email sent to " + Email);
    sendPasswordResetEmail(authentication, Email, null)
      .then(() => {
        alert("reset email sent to " + Email);
      })
      .catch(function (e) {
        console.log(e);
      });
  };
  return (
    <>
      <View style={styles.screenColor}>
        <Text style={styles.welcomeText}>Log in to CyberChat</Text>
          
        <Text style={styles.terms}>
          Welcome back! Sign in using yout social
          <Text style={styles.terms_inner}> account or email</Text> to continue
          us
        </Text>

        <Text style={styles.newToCyber}>
          ------------------------------------ OR
          ----------------------------------------{" "}
        </Text>

        <StatusBar style="dark" />


     
        <TextInput
          style={styles.UserEmailInput}
          placeholder=" Your email"
          placeholderTextColor="#24786D"
          onChangeText={(text) => setUserEmail(text)}
        />

        <TextInput
         secureTextEntry={true}
          style={styles.passwordInput}
          placeholderTextColor="#24786D"
          placeholder="Password"
          onChangeText={(text) => setPassword(text)}
          
        />

        <Text style={styles.textForgotPassword}> Forget password?</Text>

        <CustomButton
          title={"Log in"}
          // textStyle={styles.buttonLoginText}
          onPress={LoginInUser}
          buttonColor="#24786D"
          buttonStyle={styles.buttonLogin}
        />

        {/* <Button
            title="Create a new Account"
            onPress={forgotPassword(UserEmail)}
            color="#FF731D"
          /> */}

        <CustomButton
          title={"Create a new account"}
          onPress={() => navigation.navigate("Signup")}
          buttonColor="#24786D"
          buttonStyle={styles.buttonSignin}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  screenColor: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },

  welcomeText: {
    color: "black",
    fontSize: 25,
    marginBottom: 5,
    fontWeight: "bold",
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

  terms_inner: {
    color: "#00E7FF",
  },

  newToCyber: {
    marginTop: 15,
    color: "grey",
    fontSize: 15,
  },

  UserEmailInput: {
    width: Sizes.UserEmail.UserEmailInput_width,
    height: Sizes.UserEmail.UserEmailInput_height,
    borderColor: "white",
    backgroundColor: "white",
    borderWidth: 1,
    color: "black",
    borderBottomColor: "grey",
    marginBottom: "10%",
    marginTop: 30,
    
  },
  passwordInput: {
    width: Sizes.password.UserEmailInput_width,
    height: Sizes.password.UserEmailInput_height,
    borderColor: "white",
    backgroundColor: "white",
    borderWidth: 1,
    color: "black",
    borderBottomColor: "grey",
    marginTop: 10,

    marginBottom: "10%",
  },

  textForgotPassword: {
    position: "relative",
    left: "-25%",
    top: "-3.5%",
    color: "#24786D",
    fontSize: 15,
    fontWeight: "bold",
  },

  buttonLogin: {
    margin: 0,

    width: "80%",
    height: "6%",
    borderRadius: 20,
  },
  buttonLoginText: {},

  buttonSignin: {
    margin: 0,

    width: "80%",
    height: "6%",
    borderRadius: 20,
  },
});

export default LoginScreen;

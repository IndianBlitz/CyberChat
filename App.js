// Main imports 
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


// npm imports

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



// Screens import
import LoginScreen from './Screens/Login/LoginScreen';
import SignupScreen from './Screens/Signup/SignupScreen';
import ChatroomScreen from './Screens/Chatroom/ChatroomScreen';
import ChatroomMessages from './Screens/Chatroomdetails/ChatroomDetails';
import SplashScreen from './Screens/Spashscreen/SplashScreen';
import DocScreen from './Screens/Docscreen/DocScreen';



const Stack = createNativeStackNavigator();
export default function App() {
  




  
  return (
    
    <NavigationContainer>
      <Stack.Navigator >
      {/* <Stack.Screen name="Splash" component={SplashScreen}   
       
       options={{header: () => null}}
     
     
     /> */}

        
        <Stack.Screen name="Login" component={LoginScreen}   
       
          options={{header: () => null}}
        
        
        />
        <Stack.Screen name="Signup" component={SignupScreen} 
         options={{header: () => null}}
        />
        <Stack.Screen name="Chatroom" component={ChatroomScreen} 
          
        
        options={{
          header: () => null,
        headerBackButtonMenuEnabled:false,
        headerBackVisible:false,
        }}/>

      <Stack.Screen    name="ChatroomMessage" component={ChatroomMessages} options={{
          headerBackButtonMenuEnabled:false,
        headerBackVisible:false,
        }}/>


      <Stack.Screen    name="Docs" component={DocScreen} options={{
          // header: () => null,
          headerBackButtonMenuEnabled:false,
        headerBackVisible:false,
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
       
   
  );
}

const styles = StyleSheet.create({
  
});

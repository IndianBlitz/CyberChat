import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import { useState, useEffect, useCallback } from "react";
import { GiftedChat } from "react-native-gifted-chat";
import CryptoJS from "react-native-crypto-js";
import Rabbit, {rabbit} from "crypto-js/rabbit"
import {
  collection,
  addDoc,
  orderBy,
  query,
  onSnapshot,
} from "firebase/firestore";
import { SelectList } from "react-native-dropdown-select-list";


import { db, authentication } from "../../firebase/firebase-config";

const data = [
  { key: "1", value: "AES" },
  { key: "2", value: "DES" },
  { key: "3", value: "TripleDES" },
  { key: "4", value: "RC4" },
  { key: "5", value: "RC4Drop" },
  // { key: "6", value: "Rabbit" },
];

const ChatroomMessages = function () {
  const [messages, setMessages] = useState([]);
  const [selectedEncrytion, setSelectedEncrytion] = useState("AES");

  useEffect(() => {
    const collectionRef = collection(db, "chats");
    const q = query(collectionRef, orderBy("createdAt", "desc"));

    function derc(texted_value, algoUsed) {
      let bytes = CryptoJS.AES.decrypt(texted_value, "secret key 123");
      let originalText = bytes.toString(CryptoJS.enc.Utf8);

      return originalText;
    }

    // let bytes  = CryptoJS.AES.decrypt(valuedd, 'secret key 123');
    // let originalText = bytes.toString(CryptoJS.enc.Utf8);

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      setMessages(
        querySnapshot.docs.map((doc) => ({
          _id: doc.data()._id,
          createdAt: doc.data().createdAt.toDate(),
          text: derc(doc.data().value, doc.data().algoInUse),
          user: doc.data().user,
        }))
      );
    });

    return () => unsubscribe();
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );

    const { _id, createdAt, text, user, algoUse } = messages[0];


    
    let value = text;
    value = CryptoJS.AES.encrypt(text, "secret key 123").toString(); // this is cause of error

    let algoInUse = algoUse;
    algoInUse = selectedEncrytion;

    console.log(algoInUse,Rabbit);
    addDoc(collection(db, "chats"), {
      _id,
      createdAt,
      value,
      user,
      algoInUse,
    });
  }, []);

  return (
    <>
      <SelectList
        setSelected={(val) => setSelectedEncrytion(val)}
        placeholder="Encryption"
        data={data}
        save="value"
        boxStyles={styles.dropdown}
        defaultOption="AES"
      />
      <GiftedChat
        messages={messages}
        onSend={(messages) => onSend(messages)}
        user={{
          _id: authentication?.currentUser.email,
        }}
      />
    </>
  );
};

const styles = StyleSheet.create({
  screenColor: {
    flex: 1,

    alignItems: "center",
  },

  dropdown: {
    borderColor: "green",
  },
  listView: {
    width: 390,
    height: 50,
    backgroundColor: "green",
    marginBottom: 20,
    borderRadius: 10,
  },
  listView_Text: {
    fontSize: 23,
    position: "absolute",
    left: "40%",
  },
  appButtonContainer: {
    elevation: 8,
    backgroundColor: "#009688",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  appButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
  },
});

export default ChatroomMessages;
// doc.data().value

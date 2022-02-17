import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  StatusBar,
  View,
  Button,
  TextInput,
} from "react-native";

export default function App() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    emailjs
      .send(
        "service_72716sm",
        "template_f18li4r",
        { name: name, number: number, email: email, message: message },
        "user_bYgWfFHFkKyvzGnEDagVD"
      )
      .then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
        },
        function (error) {
          console.log("FAILED...", error);
        }
      );
  };
  // Name, Mobile Number, Email, and message,

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          flexDirection: "column",
          marginTop: 100,
          paddingHorizontal: 20,
        }}
      >
        <Text>Open up App.js to start working on your app!</Text>
        <TextInput
          style={{
            borderWidth: 1,
            borderRadius: 5,
            paddingVertical: 5,
            marginVertical: 15,
          }}
          onChangeText={(text) => setName(text)}
          value={name}
        />
        <TextInput
          style={{
            borderWidth: 1,
            borderRadius: 5,
            paddingVertical: 5,
            marginVertical: 15,
          }}
          onChangeText={(text) => setNumber(text)}
          value={number}
        />
        <TextInput
          style={{
            borderWidth: 1,
            borderRadius: 5,
            paddingVertical: 5,
            marginVertical: 15,
          }}
          onChangeText={(text) => setEmail(text)}
          value={email}
        />
        <TextInput
          style={{
            borderWidth: 1,
            borderRadius: 5,
            paddingVertical: 5,
            marginVertical: 15,
          }}
          onChangeText={(text) => setMessage(text)}
          value={message}
        />

        <ExpoStatusBar style="auto" />

        <Button
          onPress={() => {
            handleSubmit();
          }}
          title="Submit Information"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,

    backgroundColor: "#ffff",
  },
});

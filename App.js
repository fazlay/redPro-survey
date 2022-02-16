import React, { useState } from "react";
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
import SinglelineTextInputNativeComponent from "react-native/Libraries/Components/TextInput/RCTMultilineTextInputNativeComponent";

export default function App() {
  const [text, setText] = useState("Useless Text");

  console.log(text);

  const handleSubmit = () => {
    console.log(text);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flexDirection: "column", marginTop: 100, padding: 10 }}>
        <Text>Open up App.js to start working on your app!</Text>
        <TextInput onChangeText={(text) => setText(text)} value={text} />

        <ExpoStatusBar style="auto" />

        <Button
          onPress={() => {
            handleSubmit();
          }}
          title="Learn More"
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

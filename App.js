import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  StatusBar,
  View,
  Button,
  TextInput,
} from 'react-native';

export default function App() {
  const [text, setText] = useState('Useless Text');

  const handleSubmit = () => {
    // emailjs.init('user_bYgWfFHFkKyvzGnEDagVD');
    // const data = {
    //   service_id: 'service_72716sm',
    //   template_id: 'template_f7efh85',
    //   template_params: {},
    //   user_id: 'user_bYgWfFHFkKyvzGnEDagVD',
    // };

    // fetch('https://api.emailjs.com/api/v1.0/email/send', {
    //   method: 'POST',
    //   headers: {
    //     'Content-type': 'application/json',
    //   },
    //   data: JSON.stringify(data),
    // })
    //   .then((res) => res.text())
    //   .then((json) => console.log(json))
    //   .catch((err) => console.log(err));

    // emailjs.send('service_72716sm', 'template_9q258ou', 'fazlay').then(
    //   (result) => {
    //     console.log(result.text);
    //   },
    //   (error) => {
    //     console.log(error.text);
    //   }
    // );.
    //user_id :user_bYgWfFHFkKyvzGnEDagVD
    emailjs
      .send(
        'service_72716sm',
        'template_f18li4r',
        { message: text },
        'user_bYgWfFHFkKyvzGnEDagVD'
      )
      .then(
        function (response) {
          console.log('SUCCESS!', response.status, response.text);
        },
        function (error) {
          console.log('FAILED...', error);
        }
      );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flexDirection: 'column', marginTop: 100, padding: 10 }}>
        <Text>Open up App.js to start working on your app!</Text>
        <TextInput onChangeText={(text) => setText(text)} value={text} />

        <ExpoStatusBar style='auto' />

        <Button
          onPress={() => {
            handleSubmit();
          }}
          title='Learn More'
          color='#841584'
          accessibilityLabel='Learn more about this purple button'
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,

    backgroundColor: '#ffff',
  },
});

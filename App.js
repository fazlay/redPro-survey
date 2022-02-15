import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, StatusBar, View } from 'react-native';
import { TextInput } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={{ marginTop: StatusBar.currentHeight }}>
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>

        <ExpoStatusBar style='auto' />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

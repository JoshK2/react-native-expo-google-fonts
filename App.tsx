import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import {
//   useFonts,
//   OpenSans_700Bold_Italic,
// } from '@expo-google-fonts/open-sans';
import { Theme } from './design/theme/theme';
import { Title } from './design/ui/title';

export default function App() {
  // const [fontsLoaded] = useFonts({
  //   OpenSans_700Bold_Italic,
  // });

  // if (!fontsLoaded) {
  //   return null;
  // }

  return (
    <Theme>
      <View style={styles.container}>
        <Text>Open up App.tsx to start working on your app!</Text>
        <Title>Open sans google font</Title>
        <StatusBar style="auto" />
      </View>
    </Theme>
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

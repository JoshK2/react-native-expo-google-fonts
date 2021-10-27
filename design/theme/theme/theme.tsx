import React from 'react';
import { StyleSheet, View, ViewProps } from 'react-native';
import {
  useFonts,
  OpenSans_700Bold_Italic,
} from '@expo-google-fonts/open-sans';

export type ThemeProps = ViewProps;

export function Theme({ children }: ThemeProps) {
  const [fontsLoaded] = useFonts({
    OpenSans_700Bold_Italic,
  });

  if (!fontsLoaded) {
    return null;
  }

  return <View style={styles.container}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    color: '#b2b2b2',
  },
});

import React from 'react';
import { Text, TextProps, StyleSheet } from 'react-native';

export type TitleProps = TextProps;

export function Title({ children }: TitleProps) {
  return (
    <Text style={[styles.title, { fontFamily: 'OpenSans_700Bold_Italic' }]}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
  },
});

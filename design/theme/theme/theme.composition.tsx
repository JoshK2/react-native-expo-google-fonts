import React from 'react';
import { Text } from 'react-native';
import { Theme } from './theme';

export const BasicTheme = () => (
  <Theme>
    <Text style={{ fontFamily: 'OpenSans_700Bold_Italic' }}>
      Text with open sans google font
    </Text>
  </Theme>
);

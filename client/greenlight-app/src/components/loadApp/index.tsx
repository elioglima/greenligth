import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';

import * as St from './styles';

interface props {
  children: any;
}

export const LoadApp = ({children}: props) => {
  return (
    <SafeAreaView>
      <StatusBar />
      <St.Container>{children && children}</St.Container>
    </SafeAreaView>
  );
};

import React from 'react';
import {SafeAreaView, StatusBar, Text, TouchableOpacity} from 'react-native';

import {IconArrowSVG} from 'components/svg';
import {NavigationParams, NavigationRoute, NavigationSwitchProp} from 'react-navigation';
import * as St from './styles';

interface props {
  children: any;
  title?: string;
  backRoute?: string;
  iconRight?: any;
  navigation: NavigationSwitchProp<NavigationRoute, NavigationParams>;
}

export const LoadApp = ({children, navigation, backRoute, title, iconRight}: props) => {
  return (
    <SafeAreaView>
      <StatusBar />
      <St.BaseHeader>
        {(backRoute || title || iconRight) && (
          <>
            <St.BackRoute>
              {backRoute && (
                <TouchableOpacity onPress={() => navigation.navigate(backRoute)}>
                  <IconArrowSVG />
                </TouchableOpacity>
              )}
              <St.Title>{title && title}</St.Title>
            </St.BackRoute>
            <St.IconRight>{iconRight ? iconRight : () => <Text />}</St.IconRight>
          </>
        )}
      </St.BaseHeader>
      <St.Container>{children && children}</St.Container>
    </SafeAreaView>
  );
};

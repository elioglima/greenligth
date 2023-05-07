import React from 'react';
import {View} from 'react-native';
import {Circle, Path, Svg} from 'react-native-svg';

export const IconSmallTimeSVG = () => {
  return (
    <View>
      <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <Circle cx="12" cy="12" r="8.5" stroke="white" />
        <Path
          d="M16.5 12H12.25C12.1119 12 12 11.8881 12 11.75V8.5"
          stroke="white"
          stroke-linecap="round"
        />
      </Svg>
    </View>
  );
};

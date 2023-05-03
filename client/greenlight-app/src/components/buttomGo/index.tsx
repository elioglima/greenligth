import React from 'react';
import * as St from './styles';
import {TouchableOpacity} from 'react-native';

interface iProps {
  title: string;
  onPress?: any;
  textCenter?: boolean;
  textTransform?: string;
}

export const ButtomGo = (props: iProps) => {
  const {title, onPress} = props;
  return (
    <TouchableOpacity onPressOut={onPress}>
      <St.Container {...props}>
        <St.Title {...{textTransform: props.textTransform}}>{title}</St.Title>
      </St.Container>
    </TouchableOpacity>
  );
};

import React from 'react';
import * as St from './styles';
import {TouchableOpacity} from 'react-native';
import {LogoGoogle} from '../svg/LogoGoogle';

interface iProps {
  title: string;
  onPress?: any;
  textCenter?: boolean;
  textTransform?: string;
}

export const ButtomGoogle = (props: iProps) => {
  const {title, onPress} = props;
  return (
    <TouchableOpacity onPressOut={onPress}>
      <St.Container {...props}>
        <LogoGoogle />
        <St.Title {...{textTransform: props.textTransform}}>{title}</St.Title>
      </St.Container>
    </TouchableOpacity>
  );
};

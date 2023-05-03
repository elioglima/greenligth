import React from 'react';
import * as St from './styles';
import {TouchableOpacity} from 'react-native';
import {LogoFacebook} from '../svg/LogoFacebook';

interface iProps {
  title: string;
  onPress?: any;
  textCenter?: boolean;
  textTransform?: string;
}

export const ButtomFacebook = (props: iProps) => {
  const {title, onPress} = props;
  return (
    <TouchableOpacity onPressOut={onPress}>
      <St.Container {...props}>
        <LogoFacebook />
        <St.Title {...{textTransform: props.textTransform}}>{title}</St.Title>
      </St.Container>
    </TouchableOpacity>
  );
};

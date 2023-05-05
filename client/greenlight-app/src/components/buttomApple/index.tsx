import React from 'react';
import * as St from './styles';
import {TouchableOpacity} from 'react-native';
import {LogoAppleSVG} from '../svg/LogoAppleSVG';

interface iProps {
  title: string;
  onPress?: any;
  textCenter?: boolean;
  textTransform?: string;
}

export const ButtomApple = (props: iProps) => {
  const {title, onPress} = props;
  return (
    <TouchableOpacity onPressOut={onPress}>
      <St.Container {...props}>
        <LogoAppleSVG />
        <St.Title {...{textTransform: props.textTransform}}>{title}</St.Title>
      </St.Container>
    </TouchableOpacity>
  );
};

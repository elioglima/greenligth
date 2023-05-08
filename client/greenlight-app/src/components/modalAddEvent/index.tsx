import React from 'react';

import {NavigationParams, NavigationRoute, NavigationSwitchProp} from 'react-navigation';

import {BaseHeader} from 'components/baseHeader';
import * as St from './styles';

interface functionBoolean {
  (active: boolean): void;
}

interface functionVoid {
  (): void;
}

interface props {
  open: boolean;
  onClose: functionVoid;
  navigation: NavigationSwitchProp<NavigationRoute, NavigationParams>;
  setOpenAddItem: functionBoolean;
}

export const ModalAddEvent = ({open, navigation, onClose}: props) => {
  if (!open) {
    return <></>;
  }

  return (
    <>
      <St.ContainerBase />
      <St.Container>
        <St.BaseClose />
        <BaseHeader
          {...{navigation}}
          backRoute={() => {
            onClose && onClose();
          }}
          title={'Novo Evento'}
        />
      </St.Container>
    </>
  );
};

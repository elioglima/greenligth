import React from 'react';
import {NavigationParams, NavigationRoute, NavigationSwitchProp} from 'react-navigation';

import {ButtomApple, ButtomFacebook, ButtomGoogle} from 'components';
import * as St from './styles';

interface props {
  optIn: boolean;
  setOptIn: Function;
  navigation: NavigationSwitchProp<NavigationRoute, NavigationParams>;
}

export const ModalButtomLogin = ({optIn, navigation}: props) => {
  if (!optIn) {
    return <></>;
  }

  return (
    <>
      <St.ContainerBase />
      <St.Container>
        <St.BaseClose />
        <St.TitleBase>
          <St.Title>
            Selecione abaixo um metodo de login para iniciar seu uso na plataforma
          </St.Title>
        </St.TitleBase>
        <St.ButtonBase>
          <St.Button>
            <ButtomFacebook
              textCenter={true}
              title="Continuar com Facebook"
              onPress={() => {
                navigation.navigate('HomeLogged');
              }}
            />
          </St.Button>
          <St.Button>
            <ButtomGoogle
              textCenter={true}
              title="Continuar com Google"
              onPress={() => {
                navigation.navigate('HomeLogged');
              }}
            />
          </St.Button>
          <St.Button>
            <ButtomApple
              textCenter={true}
              title="Continuar com Apple"
              onPress={() => {
                navigation.navigate('HomeLogged');
              }}
            />
          </St.Button>
        </St.ButtonBase>
      </St.Container>
    </>
  );
};

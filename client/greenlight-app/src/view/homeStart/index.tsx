import React, {useState} from 'react';
import {NavigationSwitchScreenProps} from 'react-navigation';

import * as St from './styles';
import HomeHeader from '../../components/homeHeader';
import {LoadApp, ButtomGo, ButtomLogin} from '../../components';

const HomeView = ({navigation}: NavigationSwitchScreenProps) => {
  const [optIn, setOptIn] = useState(false);
  return (
    <LoadApp>
      <St.HomeHeader>
        <HomeHeader />
      </St.HomeHeader>
      <St.Logo>
        <St.LogoText>Greenlight</St.LogoText>
      </St.Logo>
      <St.Title>Estavamos à sua espera!</St.Title>
      <St.Description>
        Bem-vindo ao nosso aplicativo de eventos! Aqui você encontrará informações sobre esportivos,
        maratonas, corridas,e muito mais.
      </St.Description>
      {optIn ? (
        <ButtomLogin optIn={optIn} setOptIn={setOptIn} navigation={navigation} />
      ) : (
        <St.ButtomStart>
          <ButtomGo
            textTransform="uppercase"
            title="Vamos Começar"
            onPress={() => {
              setOptIn(true);
            }}
          />
        </St.ButtomStart>
      )}
    </LoadApp>
  );
};

export default HomeView;

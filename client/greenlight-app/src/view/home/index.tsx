import React from 'react';
import {SafeAreaView, ScrollView, StatusBar, View, Button} from 'react-native';
import {NavigationSwitchScreenProps} from 'react-navigation';
import {vw, vh} from 'react-native-expo-viewport-units';

import * as St from './styles';
import HomeHeader from '../../components/homeHeader';

const HomeView = ({navigation}: NavigationSwitchScreenProps) => {
  return (
    <SafeAreaView>
      <StatusBar />
      <St.Container>
        <St.Title>Home</St.Title>
        <Button title="Ir para Event" onPress={() => navigation.navigate('Event')} />
        <St.HomeHeader>
          <HomeHeader />
        </St.HomeHeader>
        <St.Logo>
          <St.LogoText>Greenlight</St.LogoText>
        </St.Logo>
        <St.Title>Estavamos à sua espera!</St.Title>
        <St.Description>
          Bem-vindo ao nosso aplicativo de eventos! Aqui você encontrará informações sobre
          esportivos, maratonas, corridas,e muito mais.
        </St.Description>
        <St.ButtomStart>
          <St.ButtomStartText>VAMOS COMECAR</St.ButtomStartText>
        </St.ButtomStart>
      </St.Container>
    </SafeAreaView>
  );
};

export default HomeView;

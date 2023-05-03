import React from 'react';
import {SafeAreaView, ScrollView, StatusBar, View, Button} from 'react-native';
import {NavigationSwitchScreenProps} from 'react-navigation';

import * as St from './styles';
const HomeView = ({navigation}: NavigationSwitchScreenProps) => {
  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View>
          <St.Container>
            <St.Title>Event</St.Title>
            <Button title="Ir para Home" onPress={() => navigation.navigate('Home')} />
          </St.Container>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeView;

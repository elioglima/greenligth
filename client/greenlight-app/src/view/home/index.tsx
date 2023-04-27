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
            <St.Title>Home</St.Title>
            <Button title="Ir para Event" onPress={() => navigation.navigate('Event')} />
          </St.Container>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeView;

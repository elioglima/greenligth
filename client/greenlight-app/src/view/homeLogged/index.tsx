import React from 'react';
import {NavigationSwitchScreenProps} from 'react-navigation';
import {LoadApp, HomeLoggedHeader, MapThumbnail} from '../../components';

import * as St from './styles';

const HomeView = ({navigation}: NavigationSwitchScreenProps) => {
  return (
    <LoadApp>
      <St.Container>
        <St.Content>
          <HomeLoggedHeader />
          <MapThumbnail />
        </St.Content>
      </St.Container>
    </LoadApp>
  );
};

export default HomeView;

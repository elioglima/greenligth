import React from 'react';
import {TouchableOpacity} from 'react-native';
import {NavigationSwitchScreenProps} from 'react-navigation';
import {
  LoadApp,
  HomeLoggedHeader,
  MapThumbnail,
  HorizontalMenu,
  CalendarSVG,
  CalendarAddSVG,
} from '../../components';

import * as St from './styles';

const HomeView = ({}: NavigationSwitchScreenProps) => {
  return (
    <LoadApp>
      <St.Container>
        <St.Content>
          <St.Box>
            <HomeLoggedHeader />
          </St.Box>
          <St.Box>
            <St.Title>PROXIMO EVENTO</St.Title>
          </St.Box>
          <MapThumbnail />
          <St.ButtomRow>
            <TouchableOpacity>
              <St.ButtomBase>
                <St.ButtomLogo>
                  <CalendarSVG />
                </St.ButtomLogo>
                <St.ButtomText>Meus Eventos</St.ButtomText>
              </St.ButtomBase>
            </TouchableOpacity>
            <TouchableOpacity>
              <St.ButtomBase>
                <St.ButtomLogo>
                  <CalendarAddSVG />
                </St.ButtomLogo>
                <St.ButtomText>Criar Evento</St.ButtomText>
              </St.ButtomBase>
            </TouchableOpacity>
          </St.ButtomRow>
          <St.BoxRow>
            <St.Title>EVENTO NA SUA AREA</St.Title>
            <St.MakerBase>
              <St.Maker>12</St.Maker>
            </St.MakerBase>
          </St.BoxRow>
          <HorizontalMenu
            items={[
              {
                id: '123',
                title: 'Corrida',
              },
              {
                id: '123',
                title: 'Yoga',
              },
              {
                id: '123',
                title: 'Corrida',
              },
              {
                id: '123',
                title: 'Ar-livre',
              },
            ]}
            onPressItem={(item: any) => {
              console.log(item);
            }}
          />
        </St.Content>
      </St.Container>
    </LoadApp>
  );
};

export default HomeView;

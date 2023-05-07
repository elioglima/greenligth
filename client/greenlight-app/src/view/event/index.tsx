import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native';
import {NavigationSwitchScreenProps} from 'react-navigation';

import EventList from 'components/eventList';
import {LoadApp} from 'components/loadApp';
import {IconBigAddSVG} from 'components/svg';
import {TListItems} from 'domain/types/TListItems';
import * as St from './styles';

const EventView = (props: NavigationSwitchScreenProps) => {
  const {navigation} = props;

  const dataMock: TListItems[] = [
    {
      id: '112',
      title: 'Corrida Noturna',
      date: new Date(),
      timeStart: '11:00h',
      photoDataBase64: 'ssssbase64',
    },
    {
      id: '112',
      title: 'Yoga no Parque',
      date: new Date(),
      timeStart: '19h30',
      photoDataBase64: 'ssssbase64',
    },
    {
      id: '112',
      title: '3a Corrida dos Amigos',
      date: new Date(),
      timeStart: '10:00h',
      photoDataBase64: 'ssssbase64',
    },
    {
      id: '112',
      title: 'Academia ao Ar-livre',
      date: new Date(),
      timeStart: '19h30',
      photoDataBase64: 'ssssbase64',
    },
  ];

  const [dataListItem] = useState<TListItems[]>(dataMock);

  const IconRight = () => {
    return (
      <TouchableOpacity onPress={() => navigation.navigate('HomeStart')}>
        <IconBigAddSVG />
      </TouchableOpacity>
    );
  };
  return (
    <LoadApp {...props} backRoute={'HomeLogged'} title="Eventos" iconRight={<IconRight />}>
      <St.Container>
        <EventList navigation={navigation} items={dataListItem} />
      </St.Container>
    </LoadApp>
  );
};

export default EventView;

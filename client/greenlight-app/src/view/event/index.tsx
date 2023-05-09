import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native';
import {NavigationSwitchScreenProps} from 'react-navigation';

import {EventList, IconBigAddSVG, LoadApp, ModalAddEvent, ModalDetailsEvent} from 'components';
import {TListItems} from 'domain/types/TListItems';

import * as St from './styles';

const EventView = (props: NavigationSwitchScreenProps) => {
  const {navigation} = props;
  const [openEditItem, setOpenEditItem] = useState<TListItems | undefined>();
  const [openAddItem, setOpenAddItem] = useState<boolean>(false);

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
    <>
      <LoadApp {...props} backRoute={'HomeLogged'} title="Eventos" iconRight={<IconRight />}>
        <St.Container>
          <EventList
            onPressEdit={value => {
              setOpenEditItem(value);
            }}
            items={dataListItem}
            setOpenAddItem={setOpenAddItem}
          />
        </St.Container>
      </LoadApp>
      <ModalDetailsEvent
        open={!!openEditItem}
        item={openEditItem}
        onClose={() => {
          setOpenEditItem(undefined);
        }}
        navigation={navigation}
      />
      <ModalAddEvent
        open={openAddItem}
        navigation={navigation}
        setOpenAddItem={setOpenAddItem}
        onClose={() => {
          setOpenAddItem(false);
        }}
      />
    </>
  );
};

export default EventView;

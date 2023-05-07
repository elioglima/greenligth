import moment from 'moment';
import React from 'react';
import {FlatList} from 'react-native';

import {IconAddSVG, IconSmallCalendarSVG, IconSmallTimeSVG} from 'components';
import {TListItems} from 'domain/types/TListItems';
import * as St from './styles';

interface PropStateEventList {
  items: TListItems[];
  navigation: any;
  onPressItem?: (item: TListItems) => void;
}

export const EventList: React.FC<PropStateEventList> = ({items}) => {
  const renderItem = ({item}: {item: TListItems}) => {
    return (
      <St.Base>
        <St.BaseRow>
          <St.ColPhoto>
            <St.Logo />
          </St.ColPhoto>
          <St.ColTitle>
            <St.Title>{item.title}</St.Title>
            <St.Row>
              <IconSmallCalendarSVG />
              <St.TitleDate>{moment(item.date).format('DD/MM/YYYY')}</St.TitleDate>
              <IconSmallTimeSVG />
              <St.TitleTimeStart>{item.timeStart}</St.TitleTimeStart>
            </St.Row>
            <St.RowButtom>
              <St.Col>
                <St.Image source={require('../../assets/png/photo1.png')} />
                <St.Image source={require('../../assets/png/photo2.png')} />
                <St.Image source={require('../../assets/png/photo3.png')} />
                <St.Image source={require('../../assets/png/photo4.png')} />
                <St.ImageTitle>+5</St.ImageTitle>
              </St.Col>
              <St.Col>
                <IconAddSVG />
              </St.Col>
            </St.RowButtom>
          </St.ColTitle>
        </St.BaseRow>
      </St.Base>
    );
  };

  return (
    <St.Container>
      <FlatList
        data={items}
        renderItem={renderItem}
        horizontal={false}
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id}
      />
    </St.Container>
  );
};

export default EventList;

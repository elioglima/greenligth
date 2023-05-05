import React from 'react';
import {FlatList, TouchableOpacity, View} from 'react-native';

import * as St from './styles';

interface MenuItem {
  id: string;
  title: string;
}

interface Props {
  items: MenuItem[];
  onPressItem: (item: MenuItem) => void;
}

export const HorizontalMenu: React.FC<Props> = ({items, onPressItem}) => {
  const renderItem = ({item}: {item: MenuItem}) => {
    return (
      <TouchableOpacity onPress={() => onPressItem(item)}>
        <St.HorizontalMenuItemBase>
          <St.HorizontalMenuItemTitle>{item.title}</St.HorizontalMenuItemTitle>
          <St.HorizontalMenuItemLogo />
        </St.HorizontalMenuItemBase>
      </TouchableOpacity>
    );
  };

  return (
    <View>
      <FlatList
        data={items}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id}
      />
    </View>
  );
};


export default HorizontalMenu;

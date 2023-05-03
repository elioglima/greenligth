import React from 'react';

import {MapSample} from '../svg/MapSample';
import * as St from './styles';

export const MapThumbnail: React.FC = () => {
  return (
    <St.Container>
      <MapSample />
    </St.Container>
  );
};

export default MapThumbnail;

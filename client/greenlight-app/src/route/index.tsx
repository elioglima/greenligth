import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import HomeStart from '../view/homeStart';
import HomeLogged from '../view/homeLogged';
import EventView from '../view/event';

const Routes = createAppContainer(
  createSwitchNavigator({
    HomeStart: HomeStart,
    HomeLogged: HomeLogged,
    EventView: EventView,
  }),
);

export default Routes;

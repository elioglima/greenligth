import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import HomeView from '../view/home';
import EventView from '../view/event';

const Routes = createAppContainer(
  createSwitchNavigator({
    Home: HomeView,
    Event: EventView,
  }),
);

export default Routes;

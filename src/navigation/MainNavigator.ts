import { createStackNavigator, NavigationScreenProps } from 'react-navigation'

import { routeNames } from './routeNames'
import { Main } from '@src/screens/Main'

export const MainNavigator = createStackNavigator({
  [routeNames.Main.routeName]: {
    screen: Main,
    path: 'app',
    navigationOptions: ({  }: NavigationScreenProps) => {
      return {
        title: `App`
      }
    }
  }
})

import { createStackNavigator, NavigationScreenProps } from 'react-navigation'

import { routeNames } from './routeNames'
import { Auth } from '../screens/Auth'

export const AuthNavigator = createStackNavigator({
  [routeNames.Auth.routeName]: {
    screen: Auth,
    path: 'auth',
    navigationOptions: ({  }: NavigationScreenProps) => {
      return {
        title: `Auth`
      }
    }
  }
})

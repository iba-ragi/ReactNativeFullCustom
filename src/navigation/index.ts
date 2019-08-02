import { createAppContainer, createSwitchNavigator } from 'react-navigation'

import { MainNavigator } from './MainNavigator'
import { AuthNavigator } from './AuthNavigator'
import { routeNames } from './routeNames'

export const createRootNavigation = (isLogin: boolean) => {
  const AppContainer = createAppContainer(
    createSwitchNavigator(
      {
        AuthNavigator,
        MainNavigator: {
          screen: MainNavigator,
          path: 'main'
        }
      },
      {
        initialRouteName: isLogin
          ? routeNames.MainNavigator.routeName
          : routeNames.AuthNavigator.routeName
      }
    )
  )
  return AppContainer
}

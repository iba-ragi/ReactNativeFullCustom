import React, { useState, useCallback } from 'react'
// import { PersistGate } from 'redux-persist/integration/react'
import { Animated, StyleSheet, View } from 'react-native'
// import { NavigationContainer } from 'react-navigation'
import { Provider } from 'react-redux'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { AuthNavigator } from '@src/navigation/AuthNavigator'
import Config from 'react-native-config'

import Store from './store'
import { createRootNavigation } from './navigation'

if (__DEV__) {
  console.disableYellowBox = true
}

function App() {
  const RootNavigation = createRootNavigation(true)
  console.log(Config.ENV)
  return (
    <Provider store={Store.store}>
      <RootNavigation uriPrefix={Config.SCHEME_URL} />
    </Provider>
  )
}

export default App

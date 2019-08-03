import React, { useState, useCallback } from 'react'
import { Animated, StyleSheet, View } from 'react-native'
// import { NavigationContainer } from 'react-navigation'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { AuthNavigator } from '@src/navigation/AuthNavigator'
import Config from 'react-native-config'

import { createRootNavigation } from './navigation'
import colors from './assets/colors'

if (__DEV__) {
  console.disableYellowBox = true
}

function App() {
  const RootNavigation = createRootNavigation(true)
  console.log(Config.ENV)
  return <RootNavigation uriPrefix={Config.SCHEME_URL} />
}

export default App

import React, { useState, useCallback } from 'react'
import { Animated, StyleSheet, View } from 'react-native'
// import { NavigationContainer } from 'react-navigation'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { AuthNavigator } from '@src/navigation/AuthNavigator'

import { createRootNavigation } from './navigation'
import colors from './assets/colors'

// DEV条件追加
console.disableYellowBox = true

function App() {
  const RootNavigation = createRootNavigation(true)
  return <RootNavigation uriPrefix={'myApp'} />
}

export default App

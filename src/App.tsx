import React, { useState, useCallback } from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { NavigationContainer } from 'react-navigation'

import Config from 'react-native-config'

import Store from './store'
import { createRootNavigation } from './navigation'

if (__DEV__) {
  console.disableYellowBox = true
}

function App() {
  const [{ RootNavigation }, setRootNavigation] = useState<{
    RootNavigation: NavigationContainer | undefined
  }>({ RootNavigation: undefined })

  const onBeforeLift = useCallback(() => {
    const isSession = !!Store.store.getState().UserState.user
    setRootNavigation({ RootNavigation: createRootNavigation(isSession) })
  }, [])

  return (
    <PersistGate
      loading={null}
      persistor={Store.persistor}
      onBeforeLift={onBeforeLift}
    >
      <Provider store={Store.store}>
        {RootNavigation && <RootNavigation uriPrefix={Config.SCHEME_URL} />}
      </Provider>
    </PersistGate>
  )
}

export default App

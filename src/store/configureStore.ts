import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { persistStore, persistReducer, PersistConfig } from 'redux-persist'
import AsyncStorage from '@react-native-community/async-storage'
import { StoreType } from '.'

const middlewares: any = []
middlewares.push(thunk)

const persistConfig: PersistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['UserState']
}

export const configureStore = (reducers: any) => {
  const persistedReducer = persistReducer<StoreType, any>(
    persistConfig,
    combineReducers(reducers)
  )
  const store = createStore(
    persistedReducer,
    composeWithDevTools(applyMiddleware(...middlewares))
  )
  let persistor = persistStore(store)

  return { store, persistor }
}

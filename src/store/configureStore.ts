import { createStore, combineReducers, applyMiddleware } from 'redux'
// import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
// import { persistStore, persistReducer, PersistConfig } from 'redux-persist'
// import storage from 'redux-persist/lib/storage' // defaults to localStorage for web and AsyncStorage for react-native
import { StoreType } from '.'

const middlewares: any = []
middlewares.push(thunk)

// const persistConfig: PersistConfig = {
//   key: 'root',
//   storage,
//   whitelist: [
//     'SessionDomainState',
//     'LoginBonusDomainState',
//     'EntryTournamentDetailAppState',
//     'MovieRewardTicketDomainState'
//   ]
// }

export const configureStore = (reducers: any) => {
  // const persistedReducer = persistReducer<StoreType, any>(
  //   persistConfig,
  //   combineReducers(reducers)
  // )
  console.log({ reducers })
  const store = createStore(
    combineReducers(reducers)
    // middlewares
    // composeWithDevTools(applyMiddleware(...middlwares))
  )
  // let persistor = persistStore(store)

  return { store }
}

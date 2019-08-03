import { configureStore } from './configureStore'
import ItemReducer from './ducks/Item'
import UserReducer from './ducks/Item'

export type StoreType = {
  Item: ReturnType<typeof ItemReducer>
  User: ReturnType<typeof UserReducer>
}

const reducers = {
  ItemReducer,
  UserReducer
}

export default configureStore(reducers)

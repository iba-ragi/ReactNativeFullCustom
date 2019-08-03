import { configureStore } from './configureStore'
import ItemState from './ducks/Item'
import UserState from './ducks/User'

export type StoreType = {
  ItemState: ReturnType<typeof ItemState>
  UserState: ReturnType<typeof UserState>
}

const reducers = {
  ItemState,
  UserState
}

export default configureStore(reducers)

import {
  useDispatch as useReactReduxDispatch,
  useSelector as useReactReduxSelector,
  useStore as useReduxStore
} from 'react-redux'
import { StoreType } from '@src/store'
import { Action } from 'redux'
import { ThunkAction } from 'redux-thunk'

export type AsyncActionType<R> = ThunkAction<R, StoreType, {}, Action>
export interface AsyncDispatch {
  <R>(asyncAction: ThunkAction<R, StoreType, any, any>): R
}

export const useDispatch = useReactReduxDispatch
// export const useDispatch = () => {
//   return useReactReduxDispatch<AsyncDispatch>()
// }

export function useSelector<TSelected>(
  selector: (store: StoreType) => TSelected
) {
  return useReactReduxSelector(selector)
}

export const useStore = () => {
  return useReduxStore<StoreType>()
}

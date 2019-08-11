import { StoreType } from '../'
import { ThunkDispatch } from 'redux-thunk'

type State = {
  user?: User
  isFetchingUser: boolean
}
const initial: State = {
  isFetchingUser: false
}

export default (state: State = initial, action: Actions): State => {
  switch (action.type) {
    case 'USER#START_FETCHING_USER':
      return {
        ...state,
        isFetchingUser: true
      }
    case 'USER#FAIL_FETCHING_USER':
      return {
        ...state,
        isFetchingUser: false
      }
    case 'USER#SUCCESS_FETCHING_USER':
      return {
        ...state,
        isFetchingUser: false,
        user: action.payload
      }
    case 'USER_EDIT_USER':
      return {
        ...state,
        user: action.payload
      }
    default:
      return state
  }
}

export const startFetchingUser = () => ({
  type: 'USER#START_FETCHING_USER' as const
})
export const failFetchingUser = () => ({
  type: 'USER#FAIL_FETCHING_USER' as const
})
export const successFetchingUser = (payload: User) => ({
  type: 'USER#SUCCESS_FETCHING_USER' as const,
  payload
})
export const createEditUserAction = (payload: User) => ({
  type: 'USER_EDIT_USER' as const,
  payload
})

type Actions =
  | ReturnType<typeof startFetchingUser>
  | ReturnType<typeof failFetchingUser>
  | ReturnType<typeof successFetchingUser>
  | ReturnType<typeof createEditUserAction>

export const fetchUser = () => async (
  dispatch: ThunkDispatch<StoreType, {}, Actions>
  // getState: () => StoreType
) => {
  dispatch(startFetchingUser())
  try {
    // const { user_id } = getState().SessionDomainState.user!
    // const data = await getUser(user_id)
    const data = {
      user_id: 1234567890,
      name: 'イバラギ'
    }
    dispatch(successFetchingUser(data))
  } catch (error) {
    dispatch(failFetchingUser())
  }
}

export const editUser = () => async (
  dispatch: ThunkDispatch<StoreType, {}, Actions>,
  getState: () => StoreType
) => {
  // dispatch(startFetchingUser())
  try {
    const { user_id, name } = getState().UserState.user!
    const data = {
      user_id: user_id + 123456,
      name: name + '0'
    }
    dispatch(successFetchingUser(data))
  } catch (error) {
    // dispatch(failFetchingUser())
  }
}

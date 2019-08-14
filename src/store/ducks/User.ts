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
    case 'USER/START_FETCHING_USER':
      return {
        ...state,
        isFetchingUser: true
      }
    case 'USER/FAIL_FETCHING_USER':
      return {
        ...state,
        isFetchingUser: false
      }
    case 'USER/SUCCESS_FETCHING_USER':
      return {
        ...state,
        isFetchingUser: false,
        user: action.payload
      }
    case 'USER/EDIT_USER':
      return {
        ...state,
        user: action.payload
      }
    case 'USER/CLEAR_USER':
      return {
        ...state,
        user: undefined
      }
    default:
      // const _: never = action
      return state
  }
}

const fetchUserCreator = {
  start: () => ({
    type: 'USER/START_FETCHING_USER' as const
  }),
  fail: () => ({
    type: 'USER/FAIL_FETCHING_USER' as const
  }),
  success: (payload: User) => ({
    type: 'USER/SUCCESS_FETCHING_USER' as const,
    payload
  })
}

export const editUserCreator = (payload: User) => ({
  type: 'USER/EDIT_USER' as const,
  payload
})
export const clearUserCreator = () => ({
  type: 'USER/CLEAR_USER' as const
})

type Actions =
  | ReturnType<typeof fetchUserCreator.start>
  | ReturnType<typeof fetchUserCreator.fail>
  | ReturnType<typeof fetchUserCreator.success>
  | ReturnType<typeof editUserCreator>
  | ReturnType<typeof clearUserCreator>

export const getSetUser = () => async (
  dispatch: ThunkDispatch<StoreType, {}, Actions>
  // getState: () => StoreType
) => {
  dispatch(fetchUserCreator.start())
  try {
    // const { user_id } = getState().SessionDomainState.user!
    // const data = await getUser(user_id)
    const data = {
      user_id: 1234567890,
      name: 'イバラギ'
    }
    dispatch(fetchUserCreator.success(data))
  } catch (error) {
    dispatch(fetchUserCreator.fail())
  }
}

export const editUser = () => async (
  dispatch: ThunkDispatch<StoreType, {}, Actions>,
  getState: () => StoreType
) => {
  // dispatch(fetchUserCreator.start())
  try {
    const { user_id, name } = getState().UserState.user!
    const data = {
      user_id: user_id + 123456,
      name: name + '.'
    }
    dispatch(fetchUserCreator.success(data))
  } catch (error) {
    // dispatch(fetchUserCreator.fail())
  }
}

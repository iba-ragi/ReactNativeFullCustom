import { StoreType } from '../'
import { ThunkDispatch } from 'redux-thunk'

type State = {
  user?: User
  isFetchingUser: boolean
}
const initial: State = {
  user: {
    user_id: 1111,
    name: 'test name'
  },
  isFetchingUser: false
}

export default (state: State = initial, action: Actions): State => {
  switch (action.type) {
    case 'TEST_TEST':
      return {
        ...state,
        user: {
          user_id: state.user!.user_id + 1,
          name: state.user!.name
        }
      }
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
    default:
      return state
  }
}

export const addUserText = () => ({
  type: 'TEST_TEST' as 'TEST_TEST'
})
export const startFetchingUser = () => ({
  type: 'USER#START_FETCHING_USER' as 'USER#START_FETCHING_USER'
})
export const failFetchingUser = () => ({
  type: 'USER#FAIL_FETCHING_USER' as 'USER#FAIL_FETCHING_USER'
})
export const successFetchingUser = (payload: User) => ({
  type: 'USER#SUCCESS_FETCHING_USER' as 'USER#SUCCESS_FETCHING_USER',
  payload
})

type Actions =
  | ReturnType<typeof addUserText>
  | ReturnType<typeof startFetchingUser>
  | ReturnType<typeof failFetchingUser>
  | ReturnType<typeof successFetchingUser>

export const fetchUser = () => async (
  dispatch: ThunkDispatch<StoreType, {}, Actions>
  // getState: () => StoreType
) => {
  dispatch(startFetchingUser())
  try {
    // const { user_id } = getState().SessionDomainState.user!
    // const data = await getUser(user_id)
    const data = {
      user_id: 1111,
      name: 'string'
    }
    dispatch(successFetchingUser(data))
  } catch (error) {
    dispatch(failFetchingUser())
  }
}

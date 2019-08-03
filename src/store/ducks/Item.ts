import { StoreType } from '../'
import { ThunkDispatch } from 'redux-thunk'

type State = {
  user?: User
  isFetchingUser: boolean
}
const initial: State = {
  user: {
    user_id: '01011111',
    name: 'test name'
  },
  isFetchingUser: false
}

export default (state: State = initial, action: Actions): State => {
  switch (action.type) {
    case 'USER#SET_USER#START_FETCHING_USER':
      return {
        ...state,
        isFetchingUser: true
      }
    case 'USER#SET_USER#FAIL_FETCHING_USER':
      return {
        ...state,
        isFetchingUser: false
      }
    case 'USER#SET_USER#SUCCESS_FETCHING_USER':
      return {
        ...state,
        isFetchingUser: false,
        user: action.payload
      }
    default:
      return state
  }
}

export const startFetchingUser = () => ({
  type: 'USER#SET_USER#START_FETCHING_USER' as 'USER#SET_USER#START_FETCHING_USER'
})
export const failFetchingUser = () => ({
  type: 'USER#SET_USER#FAIL_FETCHING_USER' as 'USER#SET_USER#FAIL_FETCHING_USER'
})
export const successFetchingUser = (payload: User) => ({
  type: 'USER#SET_USER#SUCCESS_FETCHING_USER' as 'USER#SET_USER#SUCCESS_FETCHING_USER',
  payload
})

type Actions =
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
      user_id: 'string',
      name: 'string'
    }
    dispatch(successFetchingUser(data))
  } catch (error) {
    dispatch(failFetchingUser())
  }
}

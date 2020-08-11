import {
  SET_APP_IS_LOADING,
  SET_NAV_OPEN,
  SET_PUSHER_DEPLOYED,
} from '../actions/appActions'

const initialState = {
  isLoading: undefined,
  isNavOpen: undefined,
  isPusherDeployed: undefined,
}

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_APP_IS_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      }
    case SET_NAV_OPEN:
      return {
        ...state,
        isNavOpen: action.payload,
      }
    case SET_PUSHER_DEPLOYED:
      return {
        ...state,
        isPusherDeployed: action.payload,
      }
    default:
      return state
  }
}

export default appReducer

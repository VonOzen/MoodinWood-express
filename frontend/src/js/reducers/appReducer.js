import {
  SET_APP_IS_LOADING,
  SET_NAV_OPEN,
  SET_NAVIGATION_OPEN,
} from '../actions/appActions'

const initialState = {
  isLoading: undefined,
  isNavOpen: undefined,
  isNavigationOpen: undefined,
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
    case SET_NAVIGATION_OPEN:
      return {
        ...state,
        isNavigationOpen: action.payload,
      }
    default:
      return state
  }
}

export default appReducer

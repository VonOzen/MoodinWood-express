import { SET_APP_IS_LOADING, SET_NAV_OPEN } from '../actions/appActions'

const initialState = {
  isLoading: false,
  isNavOpen: false,
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
    default:
      return state
  }
}

export default appReducer

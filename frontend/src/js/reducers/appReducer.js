import { SET_APP_IS_LOADING } from '../actions/appActions'

const initialState = {
  isLoading: false,
}

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_APP_IS_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      }
    default:
      return state
  }
}

export default appReducer

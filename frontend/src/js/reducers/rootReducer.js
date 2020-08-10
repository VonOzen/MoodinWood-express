import { combineReducers } from 'redux'
import userReducer from './userReducer'
import appReducer from './appReducer'
import categoryReducer from './categoryReducer'
import postReducer from './postReducer'
import productReducer from './productReducer'
import woodReducer from './woodReducer'

export const rootReducer = combineReducers({
  app: appReducer,
  categories: categoryReducer,
  posts: postReducer,
  products: productReducer,
  user: userReducer,
  woods: woodReducer,
})

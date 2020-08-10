import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './js/store'
import './scss/styles.scss'

import App from './components/App'

const appContainer = document.getElementById('react-app')

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  appContainer
)

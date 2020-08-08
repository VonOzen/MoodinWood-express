import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import * as ROUTES from '../constants/routes'
import * as PAGES from './pages'

const App = () => {
  return (
    <Router>
      <Route exact path={ROUTES.LANDING} component={PAGES.LandingPage} />
      <Route exact path={ROUTES.POSTS} component={PAGES.PostsPage} />
      <Route exact path={ROUTES.PRODUCTS} component={PAGES.ProductsPage} />
    </Router>
  )
}

export default App

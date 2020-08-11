import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import * as ROUTES from '../constants/routes'
import * as PAGES from './pages'

import Header from './UI/Common/Header'
import Footer from './UI/Common/Footer'

const App = () => {
  return (
    <div className="Page">

      <Router>
        <Header />

        <Route exact path={ROUTES.LANDING} component={PAGES.LandingPage} />
        <Route exact path={ROUTES.POSTS} component={PAGES.PostsPage} />
        <Route exact path={ROUTES.PRODUCTS} component={PAGES.ProductsPage} />

        <Footer />
      </Router>

    </div>
  )
}

export default App

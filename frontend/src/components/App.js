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

        <main className="Main">
          <Route exact path={ROUTES.LANDING} component={PAGES.LandingPage} />
          <Route exact path={ROUTES.POSTS} component={PAGES.PostsPage} />
          <Route exact path={ROUTES.PRODUCTS} component={PAGES.ProductsPage} />
          <Route path={ROUTES.ADMIN_LOGIN} component={PAGES.AdminLoginPage} />
        </main>

        <Footer />
      </Router>

    </div>
  )
}

export default App

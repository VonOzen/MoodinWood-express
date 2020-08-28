import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { LANDING } from '../../constants/routes'

const PrivateRoute = ({ component: Component, ...rest }) => {

  const isAuthenticated = async (jwt) => {

  }

  return (
    <Route
      {...rest}
      render={
        props => isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to={LANDING} />
        )
      }
    />
  )
}

export default PrivateRoute

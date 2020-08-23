import React from 'react'
import { useSelector } from 'react-redux'
import * as ROUTES from '../../../constants/routes'

import Burger from './Burger'
import Logo from './Logo'
import NavLinks from './NavLinks'

const NavBar = ({ handleToggleNav }) => {

  const isNavigationOpen = useSelector(state => state.app.isNavigationOpen)

  return (
    <nav className="NavBar" role="navigation">
      <ul className="NavBar-list Container">
        <li className="Nav-item">
          <Logo />
        </li>
        <Burger
          isNavigationOpen={isNavigationOpen}
          handleToggleNav={handleToggleNav}
        />
      </ul>
      <NavLinks
        links={[
          {
            label: 'Accueil',
            path: ROUTES.LANDING,
          },
          {
            label: 'Créations',
            path: ROUTES.PRODUCTS,
          },
          {
            label: 'Actualités',
            path: ROUTES.POSTS,
          },
          {
            label: 'Contact',
            path: ROUTES.CONTACT,
          },
        ]}
        isNavigationOpen={isNavigationOpen}
      />

      <button
        className="u-srOnly"
        onClick={handleToggleNav}
      >
        Fermer la navigation
      </button>
    </nav>
  )
}

export default NavBar

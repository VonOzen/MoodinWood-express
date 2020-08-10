import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { LANDING } from '../../../constants/routes'

import MiwLogo from '../../../assets/svg/miw-logo.svg'
import Burger from './Burger'
import { setNavOpen } from '../../../js/actions/appActions'

const NavBar = () => {

  const dispatch = useDispatch()
  const isNavOpen = useSelector(state => state.app.isNavOpen)

  const handleClick = () => {
    console.log('coucou')
    dispatch(setNavOpen(!isNavOpen))
  }

  return (
    <nav className="NavBar" role="navigation">
      <ul className="NavBar-list">
        <li className="Nav-item Logo">
          <Link to={LANDING}>
            <span className="u-srOnly">Retour accueil</span>
            <MiwLogo className="Logo"/>
          </Link>
        </li>
        <Burger
          isNavOpen={isNavOpen}
          handleClick={handleClick}
        />
      </ul>
    </nav>
  )
}

export default NavBar

import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setNavOpen } from '../../../js/actions/appActions'

import Burger from './Burger'
import Logo from './Logo'

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
        <Logo />
        <Burger
          isNavOpen={isNavOpen}
          handleClick={handleClick}
        />
      </ul>
    </nav>
  )
}

export default NavBar

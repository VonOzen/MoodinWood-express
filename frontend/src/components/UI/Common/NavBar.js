import React from 'react'
import { useSelector } from 'react-redux'

import Burger from './Burger'
import Logo from './Logo'

const NavBar = ({ handlePusher }) => {

  const isPusherDeployed = useSelector(state => state.app.isPusherDeployed)

  return (
    <nav className="NavBar" role="navigation">
      <ul className="NavBar-list Container">
        <Logo />
        <Burger
          isPusherDeployed={isPusherDeployed}
          handlePusher={handlePusher}
        />
      </ul>
    </nav>
  )
}

export default NavBar

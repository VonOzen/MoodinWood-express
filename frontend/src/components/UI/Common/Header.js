import React from 'react'
import NavBar from './NavBar'
import { useSelector, useDispatch } from 'react-redux'
import { setNavigationOpen } from '../../../js/actions/appActions'

const Header = () => {
  const dispatch = useDispatch()
  const isNavigationOpen = useSelector(state => state.app.isNavigationOpen)

  const handleToggleNav = () => {
    dispatch(setNavigationOpen(!isNavigationOpen))
  }

  return (
    <div className="Header">
      <NavBar handleToggleNav={handleToggleNav} />
      <div className={`Backdrop${isNavigationOpen ? ' is-open' : ''}`} onClick={handleToggleNav} />
    </div>  
  )
}

export default Header

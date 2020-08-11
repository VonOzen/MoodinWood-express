import React from 'react'
import NavBar from './NavBar'
import Pusher from './Pusher'
import { useSelector, useDispatch } from 'react-redux'
import { setPusherDeployed } from '../../../js/actions/appActions'

const Header = () => {
  const dispatch = useDispatch()
  const isPusherDeployed = useSelector(state => state.app.isPusherDeployed)

  const handlePusher = () => {
    dispatch(setPusherDeployed(!isPusherDeployed))
  }

  return (
    <div className="Header">
      <NavBar handlePusher={handlePusher} />
      <Pusher
        isDeployed={isPusherDeployed}
        handlePusher={handlePusher}
      />
    </div>  
  )
}

export default Header

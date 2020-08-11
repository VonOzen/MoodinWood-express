import React from 'react'

const Burger = ({ isPusherDeployed, handlePusher }) => {

  return (
    <li className={`NavBar-item Burger${ isPusherDeployed ? ' is-open' : '' }`}>
      <button
        role="button"
        onClick={handlePusher}
      >
        <span className="Burger-part"></span>
        {
          isPusherDeployed ?
              <span className="u-srOnly">Fermer la navigation</span>
            :
              <span className="u-srOnly">Ouvrir la navigation</span>
        }
        <span className="u-srOnly">Ouvrir la navigation</span>
      </button>
    </li>
  )
}

export default Burger

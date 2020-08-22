import React from 'react'

const Burger = ({ isNavigationOpen, handleToggleNav }) => {

  return (
    <li className={`NavBar-item Burger${ isNavigationOpen ? ' is-open' : '' }`}>
      <button
        role="button"
        onClick={handleToggleNav}
      >
        <span className="Burger-part"></span>
        {
          isNavigationOpen ?
              <span className="u-srOnly">Fermer la navigation</span>
            :
              <span className="u-srOnly">Ouvrir la navigation</span>
        }
      </button>
    </li>
  )
}

export default Burger

import React from 'react'

const Burger = ({ isNavOpen, handleClick }) => {

  return (
    <li className={`NavBar-item Burger${ isNavOpen ? ' is-open' : '' }`}>
      <button
        role="button"
        onClick={handleClick}
      >
        <span className="Burger-part"></span>
        {
          isNavOpen ?
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

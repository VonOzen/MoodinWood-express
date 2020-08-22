import React from 'react'
import { Link } from 'react-router-dom'
import { LANDING } from '../../../constants/routes'

import MiwLogo from '../../../assets/svg/miw-logo.svg'

const Logo = () => (
  <Link
    to={LANDING}
    title="Retour à la page d'accueil"
    className="Logo-link"
  >
    <MiwLogo className="Logo"/>
    <span className="Logo-text">Mood in Wood</span>
  </Link>
)

export default Logo

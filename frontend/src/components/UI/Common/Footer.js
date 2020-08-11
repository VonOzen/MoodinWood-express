import React from 'react'
import { Link } from 'react-router-dom'
import * as ROUTES from '../../../constants/routes'

import MiwLogo from '../../../assets/svg/miw-logo.svg'
import FacebookIcon from '../../../assets/svg/facebook.svg'
import InstagramIcon from '../../../assets/svg/instagram.svg'

const Footer = () => (
  <footer className="Footer" role="contentinfo">
    <div className="Footer-inner">
      <div className="Footer-nav">
        <nav>
          <ul>
          <li className="Footer-navItem">
              <Link to={ROUTES.LANDING}>
                  Accueil
              </Link>
            </li>
            <li className="Footer-navItem">
              <Link to={ROUTES.PRODUCTS}>
                Créations
              </Link>
            </li>
            <li className="Footer-navItem">
              <Link to={ROUTES.POSTS}>
                Actualités
              </Link>
            </li>
            <li className="Footer-navItem">
              <Link to={ROUTES.CONTACT}>
                Nous contacter
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="Footer-socials">
        <MiwLogo className="Footer-logo"/>
        <div className="Footer-socialsIcons">
          <a href="https://www.facebook.com/moodinwood/" title="Nouvelle fenêtre" rel="external nofollow">
            <span className="u-srOnly">Facebook de Mood in Wood</span>
            <FacebookIcon className="Footer-icon"/>
          </a>
          <a href="#" title="Nouvelle fenêtre" rel="external nofollow">
            <span className="u-srOnly">Instagram de Mood in Wood</span>
            <InstagramIcon className="Footer-icon"/>
          </a>
        </div>
      </div>
      <div className="Footer-contact">
        <address className="Footer-address">
          <p className="Footer-addressTitle">Annonay (07100)</p>
          <p className="Footer-addressCountry">France</p>
          <a href="moodinwood@yahoo.com">moodinwood@yahoo.com</a>
        </address>
      </div>
    </div>
  </footer>
)

export default Footer

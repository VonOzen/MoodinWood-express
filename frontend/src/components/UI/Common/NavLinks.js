import React from 'react'
import MiwLogo from '../../../assets/svg/miw-logo.svg'
import FacebookIcon from '../../../assets/svg/facebook.svg'
import InstagramIcon from '../../../assets/svg/instagram.svg'

const NavLinks = ({
  links = [],
  isNavigationOpen,
}) => (
  <ul className={`NavLinks${isNavigationOpen ? ' is-open' : ''}`}>
    <li className={`NavLinks-item${isNavigationOpen ? ' has-fade' : ''}`}>
      <MiwLogo />
    </li>
    {
      links.map(
        ({ label, path }) => (
          <li className={`NavLinks-item${isNavigationOpen ? ' has-fade' : ''}`}>
            <a
              className="NavLinks-link"
              href={path}
            >
              { label }
            </a>
          </li>
        )
      )
    }

    <li className={`NavLinks-item${isNavigationOpen ? ' has-fade' : ''}`}>
      <div className="NavLinks-socials">
        <a href="https://www.facebook.com/moodinwood/" title="Nouvelle fenêtre" rel="external nofollow">
          <span className="u-srOnly">Facebook de Mood in Wood</span>
          <FacebookIcon className="NavLinks-icon"/>
        </a>
        <a href="#" title="Nouvelle fenêtre" rel="external nofollow">
          <span className="u-srOnly">Instagram de Mood in Wood</span>
          <InstagramIcon className="NavLinks-icon"/>
        </a>
      </div>
      </li>
  </ul> 
)

export default NavLinks

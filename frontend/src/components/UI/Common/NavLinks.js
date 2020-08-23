import React, { useEffect, useState } from 'react'
import MiwLogo from '../../../assets/svg/miw-logo.svg'
import FacebookIcon from '../../../assets/svg/facebook.svg'
import InstagramIcon from '../../../assets/svg/instagram.svg'
import Watermark from './Watermark'

const NavLinks = ({
  links = [],
  isNavigationOpen,
}) => {

  const [ hoverText, setHoverText ] = useState()

  const handleMouseEnter = e => {
    setHoverText(e.target.dataset.label || '')
  }

  const handleMouseLeave = () => {
    setHoverText('')
  }

  return (
    <>
      <ul className={`NavLinks${isNavigationOpen ? ' is-open' : ''}`}>
        <li className={`NavLinks-item${isNavigationOpen ? ' has-fade' : ''}`}>
          <MiwLogo />
        </li>
        {
          links.map(
            ({ label, path }) => (
              <li
                key={label}
                className={`NavLinks-item${isNavigationOpen ? ' has-fade' : ''}`}
              >
                <a
                  className="NavLinks-link"
                  href={path}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  data-label={label}
                >
                  { label }
                </a>
              </li>
            )
          )
        }

        <li className={`NavLinks-item${isNavigationOpen ? ' has-fade' : ''}`}>
          <div className="NavLinks-socials">
            <a
              href="https://www.facebook.com/moodinwood/"
              title="Nouvelle fenêtre"
              rel="external nofollow"
              data-label="Facebook"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <span className="u-srOnly">Facebook de Mood in Wood</span>
              <FacebookIcon className="NavLinks-icon"/>
            </a>

            <a
              href="#"
              title="Nouvelle fenêtre"
              rel="external nofollow"
              data-label="Instagram"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <span className="u-srOnly">Instagram de Mood in Wood</span>
              <InstagramIcon className="NavLinks-icon"/>
            </a>
          </div>
          </li>
          <Watermark
            text={hoverText}
            variant="green" 
          />
      </ul>
    </>
  )
}

export default NavLinks

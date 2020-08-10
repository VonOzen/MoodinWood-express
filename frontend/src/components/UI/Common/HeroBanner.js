import React from 'react'

import Button from '../Elements/Button'
import MiwLogo from '../../../assets/svg/miw-logo.svg'
import BannerImgXl from '../../../assets/img/banner-xl.jpg'
import BannerImgSm from '../../../assets/img/banner-sm.jpg'

const HeroBanner = () => {

  return (
    <div className="HeroBanner-wrapper" role="banner">
      <div className="HeroBanner">
        <picture>
          <source media="(min-width: 768px)" srcSet={BannerImgXl} />
          <img src={BannerImgSm} />
        </picture>
        <div className="HeroBanner-inner">
          <MiwLogo className="Logo-brandSvg" />
          <h2 className="u-h1 HeroBanner-subtitle">Créations artisanales en bois</h2>
          <Button
            color="secondary"
            variant="outlined"
            url="/posts"
          >
            Découvrir les créations
          </Button>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner

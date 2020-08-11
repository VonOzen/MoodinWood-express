import React from 'react'
import HeroBanner from '../UI/Common/HeroBanner'
import ProductPush from '../UI/Elements/ProductPush'
import Section from '../UI/Common/Section'

const LandingPage = () => {
  return (
    <>
      <HeroBanner />
      <Section id="miw-creations">
        <ProductPush />
      </Section>
    </>
  )
}

export default LandingPage

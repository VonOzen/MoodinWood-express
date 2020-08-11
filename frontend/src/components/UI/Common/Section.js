import React from 'react'

const Section = ({ id, children }) => (
  <section
    className="Section Container"
    id={id}
  >
    { children }
  </section>  
)

export default Section

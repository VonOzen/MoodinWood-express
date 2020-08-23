import React from 'react'

const Watermark = ({
  text,
  variant = 'white'
}) => (
  <div className={`Watermark has-${variant}Bg`}>
    { text }
  </div>
)

export default Watermark

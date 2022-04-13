import React from 'react'
import MuiImageSlider from 'mui-image-slider'
import kish from '../public/kish.webp'
import isfahan from '../public/isfahan.webp'

function imageslider() {
  const images = [
    kish,
    isfahan,
  ]

  return <MuiImageSlider images={images} />
}

export default imageslider

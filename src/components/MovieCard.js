import React from 'react'
import { IMG_CDN_BASEPATH } from '../utils/constants'

const MovieCard = ({ posterPath}) => {
  return (
    <div className="w-36 md:w-48 pr-4">
      <img alt="Movie Card" src={IMG_CDN_BASEPATH + posterPath} />
    </div>
  )
}

export default MovieCard
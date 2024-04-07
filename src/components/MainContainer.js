import React from 'react'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'
import { useSelector } from 'react-redux';

const MainContainer = () => {
    const moviesList = useSelector(store => store.movies?.nowPlayingMovies);
    if(!moviesList) return;

    const {id, title, overview}  = moviesList[0]

  return (
    <div className="pt-[30%] bg-black md:pt-0">
        <VideoTitle title={title} overview={overview}/>
        <VideoBackground movieId={id}/>
    </div>
  )
}

export default MainContainer
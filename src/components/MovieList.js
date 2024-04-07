import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title, movieList}) => {
  return (
    <div>
        <h1 className="text-lg md:text-3xl py-4 text-white">{title}</h1>
        <div className="flex overflow-x-scroll">
        <div className="flex">
          {movieList && movieList?.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default MovieList
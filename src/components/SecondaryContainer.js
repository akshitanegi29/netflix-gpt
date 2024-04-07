import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    <div className="bg-black">
      <div className=" mt-0 md:-mt-52 pl-4 md:pl-12 relative z-20">
        {movies.nowPlayingMovies && (
          <MovieList title={"Now Playing"} movieList={movies.nowPlayingMovies}></MovieList>
        )}
        {movies.trendingMovies && (
          <MovieList title={"Trending"} movieList={movies.trendingMovies}></MovieList>
        )}
        {movies.topRatedMovies && (
          <MovieList title={"Top Rated"} movieList={movies.topRatedMovies}></MovieList>
        )}
      </div>
    </div>
  );
};

export default SecondaryContainer;

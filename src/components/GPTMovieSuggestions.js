import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const GPTMovieSuggestions = () => {
  const movieReccoList = useSelector((store) => store.gpt.movieResults);
  const movieNamesList = useSelector((store) => store.gpt.movieNames);

  return (
  movieReccoList && <div className="p-4 m-2 bg-black text-white bg-opacity-70">
      <div>
        {movieReccoList &&
          movieReccoList.map((movie, key) => (
            <MovieList
              title={movieNamesList[key]}
              movieList={movie}
            ></MovieList>
          ))}
      </div>
    </div>
  );
};

export default GPTMovieSuggestions;

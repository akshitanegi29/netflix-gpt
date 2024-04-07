import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTrendingMovies } from "../utils/moviesSlice";
import { TMDBHeader } from "../utils/constants";

const useTrendingMovies = () => {
  const dispatch = useDispatch();
  const getTopRatedMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1", TMDBHeader
    );
    const json = await data.json();
    dispatch(addTrendingMovies(json?.results));
  };
  useEffect(() => {
    getTopRatedMovies();
  }, []);
};

export default useTrendingMovies;

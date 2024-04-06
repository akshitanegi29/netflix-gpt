import { useEffect } from "react";
import { TMDBHeader } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";

const useNowPlaying = () => {
  const dispatch = useDispatch();
  const getNowPlayingData = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      TMDBHeader
    );
    const json = await data.json();
    dispatch(addNowPlayingMovies(json.results));
  };

  useEffect(() => {
    getNowPlayingData();
  }, []);
};
export default useNowPlaying

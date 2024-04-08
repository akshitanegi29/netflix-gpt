import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TMDBHeader } from "../utils/constants";
import { addTrailerVideo } from "../utils/moviesSlice";

const useTrailerVideo = (movieId) => {
  const dispatch = useDispatch();
  const trailerVideo = useSelector(
    (store) => store.movies.trailerVideo
  );

  const getMovieVideos = async (movieId) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      TMDBHeader
    );
    const json = await data.json();
    const filterTrailer = json.results.filter(
      (movie) => movie.type === "Trailer"
    );
    const trailer = filterTrailer[0];
    dispatch(addTrailerVideo(trailer));
  };
  useEffect(() => {
    !trailerVideo && getMovieVideos(movieId);
  }, []);
};

export default useTrailerVideo;

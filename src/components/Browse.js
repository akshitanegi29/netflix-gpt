/* eslint-disable no-lone-blocks */
import useNowPlaying from "../hooks/useNowPlaying";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useTrendingMovies from "../hooks/useTrendingMovies";

import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import { useSelector } from "react-redux";
import GPTSearch from "./GPTSearch";
const Browse = () => {
  useNowPlaying();
  useTopRatedMovies();
  useTrendingMovies();

  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  {
    /*
        Main Container 
          Video Title
          Video BACKGROUND
        Secondary Container 
          Movie List * n
          Cards * N
*/
  }

  return (
    <div>
      <Header />
      {showGptSearch ? (
        <GPTSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;

/* eslint-disable no-lone-blocks */
import useNowPlaying from "../hooks/useNowPlaying";
import useTopRatedMovies from "../hooks/useTopRatedMovies"
import useTrendingMovies from "../hooks/useTrendingMovies"

import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer"
const Browse = () => {
  useNowPlaying();
  useTopRatedMovies()
  useTrendingMovies()

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
      <MainContainer />
      <SecondaryContainer/>
    </div>
  );
};

export default Browse;

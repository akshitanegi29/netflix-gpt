/* eslint-disable no-lone-blocks */
import useNowPlaying from "../hooks/useNowPlaying";
import Header from "./Header";
import MainContainer from "./MainContainer";

const Browse = () => {
  useNowPlaying();

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
    </div>
  );
};

export default Browse;

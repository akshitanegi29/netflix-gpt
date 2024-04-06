import useNowPlaying from "../hooks/useNowPlaying"
import Header from "./Header";

const Browse = () => {

  useNowPlaying()

  return (
    <Header/>
  );
};

export default Browse;

import React from "react";
import GPTMovieSuggestions from "./GPTMovieSuggestions";
import GPTSearchBar from "./GPTSearchBar";
import loginPageBg from "../images/loginPageBg.jpg";
import { useSelector } from "react-redux";
import Shimmer from "./Shimmer";

const GPTSearch = () => {
  const isSearchClicked = useSelector(store => store.gpt.isSearchClicked)
  const movieReccoList = useSelector((store) => store.gpt.movieResults);

  return (
    <>
      <div className="-z-40 fixed">
        <img className="h-screen w-screen object-cover" alt='background image' src={loginPageBg}></img>
      </div>
      <div>
        <GPTSearchBar />
        <GPTMovieSuggestions />
        {isSearchClicked && !movieReccoList ? <Shimmer/> : <></>}
      </div>
    </>
  );
};

export default GPTSearch;

import React from "react";
import GPTMovieSuggestions from "./GPTMovieSuggestions";
import GPTSearchBar from "./GPTSearchBar";
import loginPageBg from "../images/loginPageBg.jpg";

const GPTSearch = () => {
  return (
    <>
      <div className="-z-40 fixed">
        <img className="h-screen w-screen object-cover" alt='background image' src={loginPageBg}></img>
      </div>
      <div>
        <GPTSearchBar />
        <GPTMovieSuggestions />
      </div>
    </>
  );
};

export default GPTSearch;

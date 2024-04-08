import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { langTranslation } from "../utils/languageConstant";
import { openai } from "../utils/openai";
import { TMDBHeader } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";

const GPTSearchBar = () => {
  const dispatch = useDispatch()
  const language = useSelector((store) => store.config.language);
  const searchInput = useRef("");

  const getSearchedMovies = async (movie) => {
    const data = await fetch(`https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`, TMDBHeader)
    const json = await data.json()
    return json?.results
  }

  const gptSearchHandler = async () => {

    //api call to chat gpt
    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query : " +
      searchInput.current.value +
      ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

    const chatCompletion = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });

    //['Notting Hill', ' 10 Things I Hate About You', ' The Proposal', ' Crazy Rich Asians', ' The Holiday']
    const gptResponse = chatCompletion?.choices[0]?.message?.content?.split(',')

    //serach each movie using TMBD api
    const promiseArray = gptResponse.map(movie => getSearchedMovies(movie))
    const searchResult = await Promise.all(promiseArray)

    //save search result in store
    dispatch(addGptMovieResult({movieNames: gptResponse, movieResults: searchResult}))
  };

  return (
    <div className="pt-[35%] md:pt-[10%] flex justify-center">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-full md:w-1/2 bg-black grid grid-cols-12"
      >
        <input
          ref={searchInput}
          className="p-4 m-4 col-span-9"
          type="text"
          placeholder={langTranslation[language].gptSearchPlaceholder}
        ></input>
        <button
          onClick={gptSearchHandler}
          className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg"
          type="submit"
        >
          {langTranslation[language].search}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;

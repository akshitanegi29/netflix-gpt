import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import gptReducer from "./gptSlice"
import movieReducer from "./moviesSlice"
import configReducer from './configSlice'

const appStore = configureStore({
    reducer: {
        user: userReducer,
        movies: movieReducer,
        gpt: gptReducer,
        config: configReducer
    }
})

export default appStore
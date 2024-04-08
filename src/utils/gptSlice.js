import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: 'gpt',
    initialState:{
        showGptSearch: false,
        movieNames: null,
        movieResults: null
    },
    reducers:{
        toggleGptBtn: (state, action) => {
            state.showGptSearch = !state.showGptSearch
        },
        addGptMovieResult: (state, action) => {
            const { movieNames, movieResults } = action.payload;
            state.movieNames = movieNames;
            state.movieResults = movieResults;
        },
    }
})

export const {toggleGptBtn, addGptMovieResult} = gptSlice.actions
export default gptSlice.reducer

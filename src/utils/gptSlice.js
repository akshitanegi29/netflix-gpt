import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: 'gpt',
    initialState:{
        showGptSearch: false,
        movieNames: null,
        movieResults: null,
        isSearchClicked: false
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
        isSearchClicked: (state, action) => {
            state.isSearchClicked = action.payload;
        }
    }
})

export const {toggleGptBtn, addGptMovieResult,isSearchClicked} = gptSlice.actions
export default gptSlice.reducer

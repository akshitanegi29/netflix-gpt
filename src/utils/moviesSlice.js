import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: 'movies',
    initialState:{
        movies: null
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.movies = action.payload
        }
    }
})

export const { addNowPlayingMovies } = moviesSlice.actions;
export default moviesSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: 'movies',
    initialState:{
        nowPlayingMovies: null,
        trailerVideo: null,
        trendingMovies: null,
        topRatedMovies: null
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload
        },
        addTrailerVideo: (state, action) => {
            state.trailerVideo = action.payload
        },
        addTrendingMovies: (state, action) => {
            state.trendingMovies = action.payload
        },
        addTopRatedMovies: (state, action) => {
            state.topRatedMovies = action.payload
        }
    }
})

export const { addNowPlayingMovies, addTrailerVideo, addTrendingMovies, addTopRatedMovies } = moviesSlice.actions;
export default moviesSlice.reducer;
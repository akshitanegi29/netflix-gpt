export const TMDBHeader = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMTQ0NmQyMmZiZTk3ZGZjMGQ2NDU5M2Y4NGU0NmIyNSIsInN1YiI6IjY2MTE5ODZkMWZhMWM4MDE2M2QxY2I1MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EKD0rYM_Fg4k7A2fAWb2B73BhqDKsVIsO9TLu7xJaDc",
  },
};

export const IMG_CDN_BASEPATH = 'https://image.tmdb.org/t/p/w500'

export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY;

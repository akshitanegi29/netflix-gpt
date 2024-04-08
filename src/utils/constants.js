export const TMDBHeader = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer "+process.env.REACT_APP_TMBD_KEY
  },
};

export const IMG_CDN_BASEPATH = 'https://image.tmdb.org/t/p/w500'

export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY;

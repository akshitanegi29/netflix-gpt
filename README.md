# NETFLIX-GPT
- npx create-react-app netflix-gpt
- configured tailwind css https://tailwindcss.com/docs/guides/create-react-app
- config router using npm i react-router-dom
- header with logo
- Routing
- login form
- Sign up form
- Form validation
- useRef hook to set ref to form input fields
- firebase set up and config - enabled email pass auth in firebase
 tool
- firebase config to set up deployment - firebase login > firebase init > firebase deploy
- create sign up user account
- created userSlice with redux store
- save user creds/details in store(used event onAuthStateChanged(firebase utility))
- onAuthStateChanged gets called as soon as user sign in/sign out or log our
- if user signs in then redirect to browse page and if user sign out redirect to main page or login page - useNavigate Hook
- sign out functionality added
- Bugfix: logged out user should not access /browse page directly
- If logged user access /login page then redirect to /browse
  - above bugfixes removed by attaching the event onAuthStateChange to some common comp like Header instead of Body comp.
- code cleanup - unsubscribe onAuthStateChange when comp unmounts
- get nowPlaying movies list from TMBD Api and create a new movieslice to store the api result.
    - Custom Hook for Now Playing Movies
    - Create movieSlice
    - Update Store with movies Data
- Planning structure of MainContauiner & secondary container
- created video title and video background
    - from list of now playing movie get the first movie and extract its movie id. pass that movie id to VideoContainer and make an api call to fetch the movie trailer of that id.
    - save the trailer video info in store - trailer video
    - create a custom hook for trailer video info
    - Embedded the Yotube video and make it autoplay and mute
    - Tailwind Classes to make Main Container look awesome
- Build Secondary Component
- Build Movie List
- build Movie Card
- TMDB Image CDN URL
- Made the Browse page amazing with Tailwind CSS
- useTrendingMovies and useTopRatedMovies Custom hook
- GPT Search Page
- GPT Search Bar
- (BONUS) Multi-language Feature in our App
- Get Open AI Api Key
- Gpt Search API Call
- fetched gptMoviesSuggestions from TMDB
- created gptSlice added data
- Resused Movie List component to make movie suggestion container
- Memoization: api calls shouldnt go if data is already present in store
- Added .env file
- Adding .env file to gitignore  




# Features
- Login/Sign Up
    - Sign In /Sign up Form
    - redirect to Browse Page
- Browse (after authentication)
    - Header
    - Main Movie
    - Tailer in Background
    - Title & Description
    - MovieSuggestions
    - MovieLists * N
- Netflix GPT
    - Search bar for movie suggestion
- Deployed - https://netflix-gpt-c693c.web.app    
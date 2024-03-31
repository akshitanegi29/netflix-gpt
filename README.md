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
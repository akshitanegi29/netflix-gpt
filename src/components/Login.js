import Header from "./Header"
import BG_URL from '../images/loginPageBg.jpg'
import { useState } from "react"
const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true)
    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm)
    }
  return (
    <div>
        <Header/>
        <div className="absolute">
            <img src={BG_URL} alt="logo" />
        </div>
        <form className="text-white absolute bg-black bg-opacity-75 w-3/12 my-36 p-8 mx-auto right-0 left-0 ">
            <h1 className="text-2xl">{isSignInForm ? 'SIGN IN' : 'SIGN UP'}</h1>
            {!isSignInForm && <input type="text" placeholder="Enter full name" className="p-4 my-4 w-full bg-gray-600 rounded-sm"></input>}
            <input type="text" placeholder="Email or phone number" className="p-4 my-4 w-full bg-gray-600 rounded-sm"></input>
            <input type="password" placeholder="Password" className="p-4 my-4 w-full bg-gray-600 rounded-sm"></input>
            <button className="p-4 my-4 w-full bg-red-900 rounded-sm">{isSignInForm ? 'SIGN IN' : 'SIGN UP'}</button>
            <p className="cursor-pointer" onClick={toggleSignInForm}>{isSignInForm ? 'New to Netflix? Sign up now.' : 'Already registered? Sign in now.'}</p>
        </form>
    </div>
  )
}

export default Login
import Header from "./Header"
import BG_URL from '../images/loginPageBg.jpg'
import { useState, useRef } from "react"
import { checkValidData } from "../utils/validate"
const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true)
    const [message, setMessage] = useState(null)
    const email = useRef(null);
    const password = useRef(null);
    const fullName = useRef(null);
    const handleSignBtn = () => {
        console.log(email)
        //validate inputs - email/password
        const msg = checkValidData(email.current.value, password.current.value)
        setMessage(msg);
    }
    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm)
    }
  return (
    <div>
        <Header/>
        <div className="absolute">
            <img src={BG_URL} alt="logo" />
        </div>
        <form 
        className="text-white absolute bg-black bg-opacity-75 w-3/12 my-36 p-8 mx-auto right-0 left-0"
        onSubmit={(e) => e.preventDefault()}
        >
            <h1 className="text-2xl">{isSignInForm ? 'SIGN IN' : 'SIGN UP'}</h1>
            {!isSignInForm && <input type="text" placeholder="Enter full name" ref={fullName} className="p-4 my-4 w-full bg-gray-600 rounded-sm"></input>}
            <input type="text" placeholder="Email or phone number" ref={email} className="p-4 my-4 w-full bg-gray-600 rounded-sm"></input>
            <input type="password" placeholder="Password" ref={password} className="p-4 my-4 w-full bg-gray-600 rounded-sm"></input>
            <button className="p-4 my-4 w-full bg-red-900 rounded-sm" onClick={handleSignBtn}>{isSignInForm ? 'SIGN IN' : 'SIGN UP' }</button>
            {message && <p className="text-red-900 py-4 text-xl bold">{message}</p>}
            <p className="cursor-pointer" onClick={toggleSignInForm}>{isSignInForm ? 'New to Netflix? Sign up now.' : 'Already registered? Sign in now.'}</p>
        </form>
    </div>
  )
}

export default Login
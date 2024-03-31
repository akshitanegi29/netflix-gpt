import netflixLogo from "../images/logo.png";
import userIcon from "../images/userIcon.png";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

const Browse = () => {
  const navigate = useNavigate()

  const signOutHandler = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate('/')
    }).catch((error) => {
      // An error happened.
    });
  }
  
  return (
    <div className="flex justify-between bg-gradient-to-b from-black px-8 py-2 z-10 w-full">
      <img className="w-44" src={netflixLogo} alt="logo"></img>
      <div className="flex">
        <img src={userIcon} className="w-14 m-4" alt="user-icon"></img>
        <button onClick={signOutHandler} className="font-bold text-red-800 my-4 mr-2 w-32 cursor-pointer">
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default Browse;

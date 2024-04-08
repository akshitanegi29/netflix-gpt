import { useEffect } from "react";
import netflixLogo from "../images/logo.png";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { toggleGptBtn } from "../utils/gptSlice";
import { useNavigate } from "react-router-dom";
import {setLanguage} from '../utils/configSlice'
import userIcon from "../images/userIcon.png";
import { SUPPORTED_LANGUAGES } from "../utils/languageConstant";

const Header = () => {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  const toggleGptBtnHandler = () => {
    dispatch(toggleGptBtn(showGptSearch));
  };

  const langConfigHandler = (e) => {
    dispatch(setLanguage(e.target.value))
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
        // User is signed out
      }
    });

    //code cleanup - unsubscribing event once comp unmounts
    return () => {
      unsubscribe();
    };
  }, []);

  const signOutHandler = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">
      <img className="w-44 mx-auto md:mx-0" src={netflixLogo} alt="logo" />
      {user && (
        <div className="flex p-2 justify-between">
          {showGptSearch && (
            <select onClick={langConfigHandler} className="p-2 m-2 bg-gray-900 text-white">
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          {
            <button
              className="bg-red-900 text-white text-lg px-6 mx-4 my-1 hover:opacity-80"
              onClick={toggleGptBtnHandler}
            >
              {!showGptSearch ? "GPT Search" : "Home page"}
            </button>
          }
          <img className="w-12 h-12 my-1" alt="usericon" src={userIcon} />
          <button
            onClick={signOutHandler}
            className="font-bold text-white m-2 text-lg cursor-pointer hover:opacity-80"
          >
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;

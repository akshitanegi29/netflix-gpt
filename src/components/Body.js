import Login from "./Login"
import Browse from "./Browse"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { auth } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";

const appRouterConfig = createBrowserRouter([
    {
        path: '/',
        element: <Login/>
    },
    {
        path: '/browse',
        element: <Browse/>
    }
]);
const Body = () => {
  const dispatch = useDispatch();

  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid, email, displayName} = user;
        dispatch(addUser({uid: uid, email: email, displayName: displayName}))
      } else {
        dispatch(removeUser())
        // User is signed out
      }
    });
  },[]);

  return (
    <div>
        <RouterProvider router={appRouterConfig}/>
    </div>
  )
}

export default Body
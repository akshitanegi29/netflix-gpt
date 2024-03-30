import Login from "./Login"
import Browse from "./Browse"
import { RouterProvider, createBrowserRouter } from "react-router-dom"

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
  return (
    <div>
        <RouterProvider router={appRouterConfig}/>
    </div>
  )
}

export default Body
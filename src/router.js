import {createBrowserRouter} from "react-router-dom";
import Main from "./pages/Main";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Profile from "./pages/Profile";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main/>
    },
    {
        path: '/signup',
        element: <Signup/>
    },
    {
        path: '/login',
        element: <Login/>
    },
    {
        path: '/profile',
        element: <Profile/>
    }
])

export default router
import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import About from "../Pages/About/About";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Media from "../Pages/Media/Media";
import Message from "../Pages/Message/Message";
import PostDetailes from "../Pages/PostDetailes/PostDetailes";
import Singup from "../Pages/Singup/Singup";
import PriviteRoute from "./PriviteRoute";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/about',
                element: <PriviteRoute><About /></PriviteRoute>
            },
            {
                path: '/media',
                element: <Media />
            },
            {
                path: '/message',
                element: <Message />
            },
            {
                path: '/login',
                element:<Login/>
            },
            {
                path:'/singup',
                element: <Singup/>
            },
            {
                path:'/postDetailes/:id',
                element:<PriviteRoute><PostDetailes/></PriviteRoute>, 
                loader: async ({params}) => fetch(`https://mygram-server.vercel.app/postDetailes/${params.id}`)
            }
        ]
    }
])
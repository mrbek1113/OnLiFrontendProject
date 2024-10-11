import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "../global/Layout";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/Auth/LoginPage";
import RegisterPage from "../pages/Auth/RegisterPage";
import AdminPage from "../pages/Admin/AdminPage";
import UserPAge from "../pages/UserPage/UserPAge";
import ProfilePage from "../pages/ProfilePAge/ProfilePage";

const route=createBrowserRouter([
    {
        element:<Layout/>,
        children:[
            {
                path:'/home',
                element:<HomePage/>
            },
            {
                path:'/',
                element:<LoginPage/>
            },
            {
                path:'/register',
                element:<RegisterPage/>
            },
            {
                path:'/admin',
                element:<AdminPage/>
            },
            {
                path:'/user',
                element:<UserPAge/>
            },
            {
                path:'/profile',
                element:<ProfilePage/>
            }
        ]
    }
])

const Router=()=>{
    return <RouterProvider router={route}/>
};
export default Router
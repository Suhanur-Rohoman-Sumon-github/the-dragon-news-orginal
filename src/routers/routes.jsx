import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Catagories from "../pages/Home/Catagories/Catagories";
import News from "../layouts/News";
import SingleNews from "../pages/SingleNews/SingleNews/SingleNews";
import LoginLayouts from "../layouts/LoginLayouts";
import Login from "../pages/Login/Login/Login";
import Register from "../pages/Login/Register/Register";
import PrivateRoute from "./PrivateRoute";
import Terms from "../pages/sheard/Terms/Terms";


const router = createBrowserRouter([

    {
        path:'/',
        element:<LoginLayouts />,
        children:[
            {
                path:'/',
                element:<Navigate to='/catagory/0'></Navigate>
            },
            {
                path:'/login',
                element:<Login />
            },
            {
                path:'/register',
                element:<Register />
            },
            {
                path:'/terms',
                element:<Terms />
            }
        ]
    },

    {
        path:'catagory',
        element:<Main ></Main>,
        children : [
            {
                path:':id',
                element:<Catagories ></Catagories>,
                loader:({params})=>fetch(`https://the-dragon-server-side-su44248124.vercel.app/catagoris/${params.id}`)
            },
        ]
        
    },
    {
        path:'news',
        element:<PrivateRoute ><News ></News></PrivateRoute>,
        children:[{
            path:':id',
            element:<SingleNews ></SingleNews>,
            loader:({params})=>fetch(`https://the-dragon-server-side-su44248124.vercel.app/news/${params.id}`)
        }]
    }
])
export default router
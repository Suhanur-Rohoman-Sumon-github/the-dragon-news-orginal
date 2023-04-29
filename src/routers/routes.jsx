import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Catagories from "../pages/Home/Catagories/Catagories";
import News from "../layouts/News";
import SingleNews from "../pages/SingleNews/SingleNews/SingleNews";


const router = createBrowserRouter([
    {
        path:'/',
        element:<Main ></Main>,
        children : [
            {
                path:'/',
                element:<Catagories />,
                loader:()=>fetch('http://localhost:5000/news')
            },
            {
                path:'/catagory/:id',
                element:<Catagories ></Catagories>,
                loader:({params})=>fetch(`http://localhost:5000/catagoris/${params.id}`)
            },
        ]
        
    },
    {
        path:'news',
        element:<News ></News>,
        children:[{
            path:':id',
            element:<SingleNews ></SingleNews>,
            loader:({params})=>fetch(`http://localhost:5000/news/${params.id}`)
        }]
    }
])
export default router
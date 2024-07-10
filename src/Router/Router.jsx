import { createBrowserRouter } from "react-router-dom";
import Home from './../Pages/Home';
import Estate from "../Pages/Estate";
import ContactUs from "../Pages/ContactUs";
import Register from "../Pages/Register";
import LogIn from "../Pages/LogIn";

const Router = createBrowserRouter([
    {
        path:'/',
        element:<Home/>,
        children:[
            {
                path:'/Estate',
                element:<Estate/>
            },
            {
                path:'/ContactUs',
                element:<ContactUs/>
            },
            {
                path:'/LogIn',
                element:<LogIn/>
            },
            {
                path:'/Register',
                element:<Register/>
            }

        ]
    }
])

   


export  default Router;
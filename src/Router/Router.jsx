import { createBrowserRouter } from "react-router-dom";
import Home from './../Pages/Home';
import Estate from "../Pages/Estate";
import Register from "../Pages/Register";
import LogIn from "../Pages/LogIn";
import RootHome from "../Pages/RootHome";
import ContactUs from './../Pages/ContactUs';


const Router = createBrowserRouter([
    {
        path:'/',
        element:<RootHome/>,
        children:[
            {
                path:'/',
                element:<Home/>,
                loader: ()=> fetch('../../public/Realstate.json'),

            },
            
            {
                path:'/RealState/:id',
                element:<Estate/>,
                loader: ()=> fetch('../../public/Realstate.json'),
                
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
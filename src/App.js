import React from "react";
import ReactDOM from "react-dom/client";
import Header from './components/Header';
import Body from './components/Body';
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import Footer from "./components/Footer";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";

const AppLayour =()=>{
    return (
        <div className="App">
            <Header/>
            
         {   
            //ifpath is /"" then the Body component will be rendered
            //if path is /About then the About component will be rendered
            //if path is /Contact then the Contact component will be rendered
            //if path is not matched then the Error component will be rendered
            //so for this we will use the Outlet component
            //Outlet component is used to render the component based on the path
            // i want to push my chilren according to the route
            //so i will use the Outlet component
            
            }
            
            <Outlet/>
            <Footer/>
             </div>
    )
}
const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<AppLayour/>,
        children:[
            {
            path:"/",
            element:<Body/>,

            },
            {
                path:"/About",
                element:<About/>,
                
            },
            {
                path:"/contact",
                element:<Contact/>,

            },
            {
                path:"/restaurants/:resId",
                element:<RestaurantMenu/>,
            }
        ],
        errorElement:<Error/>,

    },

]);
const root = ReactDOM.createRoot(document.getElementById("root"));
 
  root.render(<RouterProvider router={appRouter} />);

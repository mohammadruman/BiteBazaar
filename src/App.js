import React ,{ lazy ,Suspense} from "react";
import ReactDOM from "react-dom/client";
import Header from './components/Header';
import Body from './components/Body';
// import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import Footer from "./components/Footer";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import appstore from "../utils/appstore";
// import Grocery from "./components/Grocery";
//chunking
//code splitting
//lazy loading, On demand loading
//code splitting is a technique used to split the code into smaller chunks
//this is done to reduce the initial load time of the application
//this is done to reduce the bundle size
//this is done to improve the performance of the application

   const Grocery = lazy(()=>import("./components/Grocery"));
   const About = lazy(()=>import("./components/About"));
const AppLayour =()=>{
    return (
        <Provider store={appstore}>
        <div className="App">
            <Header/>
            <Outlet/>
            <Footer/>
             </div>
        </Provider>
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
                element:<Suspense fallback={<h1>Loading...</h1>}><About/></Suspense>,
                
            },
            {
                path:"/contact",
                element:<Contact/>,

            },
            {
                path:"/grocery",
                element:<Suspense fallback={<h1>Loading...</h1>}><Grocery/></Suspense>,
                
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

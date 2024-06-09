import React from "react";
import ReactDOM from "react-dom/client";
import Header from './components/Header';
import Body from './components/Body';
import RestaurantCard from "./components/RestaurantCard";



/* Importing the HeaderComponent 
Header
 - Logo
    - Navigation
        - Home
        - About
        - Contact
-Body
    - Content
    -search bar
    -Restaurant container
    -Restaurant card
        - Image
        - Name
        - Rating
        -cuisine
        - Delivery time
        - Delivery charges

    - Sidebar
- Footer
    - Social media links
    - Contact us
    - About us  



*/

//data from swiggy api








const AppLayour =()=>{
    return (
        <div className="App">
            <Header/>
            <Body />
             </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
 
  root.render(<AppLayour/>);

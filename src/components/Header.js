import { LOGO_URL } from "../../utils/constants";
import { useEffect, useState } from "react";
import {Link} from 'react-router-dom';
import useOnlineStatus from '../../utils/useOnlineStatus';
import Grocery  from "./Grocery";

const Header = () => {
    const [btnName,setbtnName] = useState("Login");
    const onlineStatus = useOnlineStatus();
//if we want to call the useEffect only once then we can pass an empty array as the second argument
//if no dependency array is passed then the useEffect will be called on every render
//if we pass an empty array then the useEffect will be called only once
//if we pass a variable in the array then the useEffect will be called whenever the variable changes
//if depency array is btnname then the useEffect will be called whenever the btnname changes

    useEffect(()=>{
        console.log(" useEffect called");
    
    },[btnName]);

    return (
        <div className="header">
            <div>
                <img className="logo" src={LOGO_URL} />
            </div>
        <div className="nav-item">
            <ul>
               
                <li>
                    Online:{onlineStatus?"✅":"🔴"}
                </li>
            <li>
                <Link to="/">Home</Link>
                </li>
            <li>
              <Link to="/about">About-Us</Link>  
                </li>
            <li>
              <Link to="/contact">Contact-us</Link>  
                </li>
                 <li>
                   <Link to="/grocery">Grocery</Link>
                </li>
            <li>Cart</li>
            <button className="login-btn" onClick={()=>{
              btnName==="Login"?setbtnName("Logout"):setbtnName("Login");
              
            }}
            >{btnName}</button>
            </ul>
        </div>
        </div>
    )
}
export default Header;

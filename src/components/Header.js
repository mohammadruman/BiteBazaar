import { LOGO_URL } from "../../utils/constants";
import { useEffect, useState } from "react";
import {Link} from 'react-router-dom';
import useOnlineStatus from '../../utils/useOnlineStatus';
import logo from "../../utils/logo.png";
import Grocery  from "./Grocery";
import Cart from "./Cart";
import { useSelector } from "react-redux";

const Header = () => {
    const [btnName,setbtnName] = useState("Login");
    const onlineStatus = useOnlineStatus();
    //subscribe to cart changes
    const cartItems = useSelector((store)=>store.cart.items);
    console.log("cartItems",cartItems);
//if we want to call the useEffect only once then we can pass an empty array as the second argument
//if no dependency array is passed then the useEffect will be called on every render
//if we pass an empty array then the useEffect will be called only once
//if we pass a variable in the array then the useEffect will be called whenever the variable changes
//if depency array is btnname then the useEffect will be called whenever the btnname changes

    useEffect(()=>{
        console.log(" useEffect called");
    
    },[btnName]);

     return (
        <div className="flex items-center justify-between p-4 shadow-md bg-green-50">
            <div className="logo-container">
                <img className="w-[100px]" src={logo} alt="Logo" />
            </div>
            <div className="nav-items">
                <ul className="flex items-center space-x-4 md:space-x-8 m-4 p-4">
                    <li className="px-2">
                        <span>Online:</span>
                        <span>{onlineStatus ? "✅" : "🔴"}</span>
                    </li>
                    <li className="px-2">
                        <Link className="hover:text-blue-500" to="/">Home</Link>
                    </li>
                    <li className="px-2">
                        <Link className="hover:text-blue-500" to="/about">About Us</Link>
                    </li>
                    <li className="px-2">
                        <Link className="hover:text-blue-500" to="/contact">Contact Us</Link>
                    </li>
                    <li className="px-2">
                        <Link className="hover:text-blue-500" to="/grocery">Grocery</Link>
                    </li>
                    <li className="px-2">
                        <Link className="hover:text-blue-500 font-bold text-xl" to="/Cart">🛒 ({cartItems.length} Items)</Link>
                    </li>
                    <li>
                        <button 
                            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300"
                            onClick={() => {
                                setbtnName(btnName === "Login" ? "Logout" : "Login");
                            }}
                        >
                            {btnName}
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Header;
import { useState,useEffect  } from "react";

const useOnlineStatus =()=>{
    // State to hold the online status
    const [onlinestatus,setOnlineStatus] = useState(true);
        useEffect(()=>{
            window.addEventListener("offline",()=>{
            setOnlineStatus(false);
            });
            window.addEventListener("online",()=>{
                setOnlineStatus(true);
            });
        },[]);
    //boolean value to check if the user is online or offline
    return onlinestatus;
}
export default useOnlineStatus;
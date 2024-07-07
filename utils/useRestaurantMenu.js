//in thi file we will fetch the data of the restaurant menu using a custom hook

import { useEffect ,useState} from "react";
import { MENU_API_URL, MENU_API_REMAINING_URL } from '../utils/constants';
const useRestaurantMenu =(resId)=>{
    //here we have created a local state to store the data of the restaurant menu   
    const [resInfo,setresInfo] = useState(null);
    //fetch data
useEffect(()=>{
fetchData();
},[]);
const fetchData= async()=>{
    const data = await fetch(MENU_API_URL+resId+MENU_API_REMAINING_URL);
    const json = await data.json();
    console.log(json);
    setresInfo(json.data);
};
//return the data of the restaurant menu 
    return resInfo;

}
export default useRestaurantMenu;
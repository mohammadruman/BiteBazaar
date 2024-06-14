import {useEffect,useState} from 'react'
import Shimmer from './Shimmer';

const RestaurantMenu = () => {
    const [resInfo,setresInfo] = useState(null);

    useEffect(()=>{
        fetchMenu();
    },[])
    const fetchMenu= async()=>{
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=25.5940947&lng=85.1375645&restaurantId=693892&catalog_qa=undefined&submitAction=ENTER");
        const json = await data.json();
        console.log(json);
        setresInfo(json);    
    }
    //const {text, }
    if( resInfo===null){
        <Shimmer/>
    }
      
    
   const  {
  name,
  cuisines,
  costForTwoMessage,totalRatingsString
} = resInfo?.data?.cards[2]?.card?.card?.info || {};

  const {itemCards} = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card|| [];
 
 console.log(itemCards);

          

  return (
    <div className="menu">
        <h1>{name}</h1>
        <h2>{cuisines}</h2>
        <h3>{costForTwoMessage}</h3>
        <h3>{totalRatingsString}</h3>
        <div className="menu-items">
        <ul>
            
            <li>{}</li>
            <li>Item 3</li>
            <li>Item 4</li>
            <li>Item 5</li>
        </ul>
        </div>
      
    </div>
  )
}

export default RestaurantMenu;

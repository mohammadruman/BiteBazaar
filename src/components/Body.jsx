import RestaurantCard from './RestaurantCard'
import mockData from '../../utils/mockData'
import {useEffect, useState} from 'react';
import Shimmer from './shimmer';

const Body = () => {
    const [listofRestaurants,setListofRestaurants] = useState(mockData);
    const [filterdRestaurants,setFilterdRestaurants] = useState(mockData);
    //copy the mock data to the state variable of filterd data restaunts
    //we will use state variable for search text
    const [searchtext,setSearchtext]= useState('');
     //now lets call for the external Swiggy API
     useEffect(()=>{
        fetchData();
     },[])
//fething the Data from the API
const fetchData = async()=>{
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.5940947&lng=85.1375645&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    
    //swiggy api is constantly changing so we have to check the data and then set the data
//setListofRestaurants(json?.data?.cards?.[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)



     
} ;
//if the list of restaurants is empty then we will show loading
//conditional rendering

if(listofRestaurants.length===0){
    return <Shimmer />
}

    return (

    <div className="body">
          <div className="filter">
        <div className='search-bar'>
            <input type='text' className='search-box' placeholder='Search for Restaurants' value={searchtext}
            onChange={(e)=>{
                setSearchtext(e.target.value);
            }}/>
            <button  className='search-btn' onClick={()=>{

                //filter the list of restaurants and update the ui
                //search text to get the data of the search text we need to bind the search text to the state
                //and then filter the data based on the search text
              const filterdRestaurant=  listofRestaurants.filter((restaurant)=>restaurant.name.toLowerCase().includes(searchtext.toLowerCase()));
                setFilterdRestaurants(filterdRestaurant);
                if(filterdRestaurant.length===0){
                    alert("No restaurants found. Here are some suggestions:\n\n" +
                  "1. Explore nearby popular restaurants.\n" +
                  "2. Try a different cuisine.\n" +
                  "3. See restaurants with special offers.\n" +
                  "4. Browse all available restaurants in your area.");
                    setFilterdRestaurants(listofRestaurants);
                }
            }}>Search</button>
        </div>
      
       <button 
       className='filter-btn'

        onClick={()=>{
       const filterdList = listofRestaurants.filter((restaurant)=>restaurant.avgRating>4.2);
       setListofRestaurants(filterdList);
       }}
       >Top Rated Restaurants</button>
       </div>
        <div className="restaurant-container">
       {
        filterdRestaurants.map((restaurant) =>(
        <RestaurantCard key = {restaurant.parentId} resData= {restaurant}/>)
       
        )
       }
        </div>
    </div>
    )
}
export default Body;
import RestaurantCard from './RestaurantCard'
import mockData from '../../utils/mockData'
import {useState} from 'react';

const Body = () => {
    const [listofRestaurants,setListofRestaurants] = useState(mockData)
    return (

    <div className="body">
       <button 
       className='filter-btn'
        onClick={()=>{
       const filterdList = listofRestaurants.filter((restaurant)=>restaurant.avgRating>4.2);
       setListofRestaurants(filterdList);
       }}
       >Top Rated Restaurants</button>
        <div className="restaurant-container">
       {
        listofRestaurants.map((restaurant) =>(
        <RestaurantCard key = {restaurant.parentId} resData= {restaurant}/>)
        )
       }
        </div>
    </div>
    )
}
export default Body;
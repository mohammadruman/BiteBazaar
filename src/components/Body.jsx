import RestaurantCard, {withPromotedLabel} from './RestaurantCard';
// import {mockData} from '../../utils/mockData';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Shimmer from './Shimmer';
import useOnlineStatus from '../../utils/useOnlineStatus';
 
const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [vegRestaurants, setVegRestaurants] = useState([]);
    const [searchText, setSearchText] = useState('');
    
    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        if (!data.ok) {
           <h1 className='text-bold text-center text-black'>Sorry Something went wrong</h1>
        }
        const json = await data.json();
        console.log(json);
        
        // console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
        // Mock data fetching
        setListOfRestaurants(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
         setFilteredRestaurants(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
    };

    const onlinestatus = useOnlineStatus();
if(onlinestatus===false)
    return(<h1>Soory you are Offline check Your Internet Connection</h1>);

    if (listOfRestaurants.length === 0) {
        return <Shimmer />;
    }

    return (
        <div className="pr-[90px] pl-[90px]">
            <div className="filter flex items-center ">
                <div className='search-bar m-4 p-4 '>
                    <input
                        type='text'
                        className='border border-solid border-gray-300 p-2 w-96 rounded-md'
                        placeholder='Search for Restaurants'
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                    />
                    
                    <button
                        className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300 ml-2'
                        onClick={() => {
                            const filteredRestaurant = listOfRestaurants.filter((restaurant) =>
                                restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
                            );
                            setFilteredRestaurants(filteredRestaurant);
                            if (filteredRestaurant.length === 0) {
                                alert("No restaurants found. Here are some suggestions:\n\n" +
                                    "1. Explore nearby popular restaurants.\n" +
                                    "2. Try a different cuisine.\n" +
                                    "3. See restaurants with special offers.\n" +
                                    "4. Browse all available restaurants in your area.");
                                setFilteredRestaurants(listOfRestaurants);
                            }
                        }}
                    >Search</button>
                </div>
              <div className='m-4 p-4'>
                <button
                    className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300'
                    onClick={() => {
                        const filteredList = listOfRestaurants.filter((restaurant) => parseFloat(restaurant.info.avgRating) > 4.2);
                        setFilteredRestaurants(filteredList);
                    }}
                >Top Rated Restaurants</button>
                </div>
                <div className='m-4 p-4'>
                <button className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300 ml-2'
                onClick={()=>{
                    const vegList = listOfRestaurants.filter((restaurant)=> restaurant.info.veg===true);
                    setFilteredRestaurants(vegList);

                }}
                
                >Veg Only</button>
                </div>  
            </div>

            <div className="flex flex-wrap justify-around">
                {filteredRestaurants.map((restaurant) => (
                   <Link  key={restaurant.info.id} to={"/restaurants/"+ restaurant.info.id}> 
                   {restaurant.info.isOpen ? (<RestaurantCardPromoted resData={restaurant.info} />):(<RestaurantCard  resData={restaurant.info} />)}
                   </Link>
                ))}
            </div>
        </div>
    );
};

export default Body;

import RestaurantCard from './RestaurantCard';
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

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        // console.log(json);
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
        <div className="body">
            <div className="filter">
                <div className='search-bar'>
                    <input
                        type='text'
                        className='search-box'
                        placeholder='Search for Restaurants'
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                    />
                    <button
                        className='search-btn'
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

                <button
                    className='filter-btn'
                    onClick={() => {
                        const filteredList = listOfRestaurants.filter((restaurant) => parseFloat(restaurant.info.avgRating) > 4.2);
                        setFilteredRestaurants(filteredList);
                    }}
                >Top Rated Restaurants</button>
                <button className='veg-btn'
                onClick={()=>{
                    const vegList = listOfRestaurants.filter((restaurant)=> restaurant.info.veg===true);
                    setFilteredRestaurants(vegList);

                }}
                
                >Veg Only</button>
            </div>

            <div className="restaurant-container">
                {filteredRestaurants.map((restaurant) => (
                   <Link key={restaurant.info.id} to={"/restaurants/"+ restaurant.info.id}> <RestaurantCard  resData={restaurant.info} /></Link>
                ))}
            </div>
        </div>
    );
};

export default Body;

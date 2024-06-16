import RestaurantCard from './RestaurantCard';
import {mockData} from '../../utils/mockData';
import { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import Shimmer from './Shimmer';

const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [vegRestaurants, setVegRestaurants] = useState([]);
    const [searchText, setSearchText] = useState('');

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        // Mock data fetching
        setListOfRestaurants(mockData?.data?.cards[2]?.data?.data?.cards);
        setFilteredRestaurants(mockData?.data?.cards[2]?.data?.data?.cards);
    };

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
                                restaurant.data.name.toLowerCase().includes(searchText.toLowerCase())
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
                        const filteredList = listOfRestaurants.filter((restaurant) => parseFloat(restaurant.data.avgRating) > 4.2);
                        setFilteredRestaurants(filteredList);
                    }}
                >Top Rated Restaurants</button>
                <button className='veg-btn'
                onClick={()=>{
                    const vegList = listOfRestaurants.filter((restaurant)=> restaurant.data.veg===true);
                    setFilteredRestaurants(vegList);

                }}
                
                >Veg Only</button>
            </div>

            <div className="restaurant-container">
                {filteredRestaurants.map((restaurant) => (
                   <Link key={restaurant.data.id} to={"/restaurants/"+ restaurant.data.id}> <RestaurantCard  resData={restaurant.data} /></Link>
                ))}
            </div>
        </div>
    );
};

export default Body;

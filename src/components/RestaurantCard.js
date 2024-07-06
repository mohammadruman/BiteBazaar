import {CDN_URL} from '../../utils/constants'


const RestaurantCard=(props)=>{
    const {resData} = props;
     const {name,cloudinaryImageId,cuisines,avgRating,deliveryTime,costForTwo} = resData;
     const formatCuisines = (cuisines, limit = 2) => {
    if (cuisines.length <= limit) {
        return cuisines.join(", ");
    }
    return `${cuisines.slice(0, limit).join(", ")}...`;
};

    return (
        <div className=" m-4 p-4 w-[250px] h-[300px] rounded-lg  bg-gray-100 hover:bg-gray-200 " >
            <img className="rounded-lg w-[200px] h-[120px] object-cover"
             src={CDN_URL+cloudinaryImageId} />
                <h3 className='font-bold py-4 text-lg'>{name}</h3>   
                <h4 className='text-gray-600 mb-2'>{formatCuisines(cuisines)}</h4>
                <div className='flex justify-between text-gray-700 text-sm'>
                <h4 className="flex items-center">
                    <span className="material-icons  mr-1">⭐</span>
                    {avgRating}
                </h4>
                <h4>{deliveryTime} mins</h4>
                <h4>{ costForTwo} </h4>
                </div>

        </div>
    )
};
 export const withPromotedLabel = (RestaurantCard) => {
    //return a new component with some additional features (like promotion)
    //return the new component
    return(props)=>{
        return (
            <div>
                <label className='absolute bg-gray-500 text-white m-2 p-2 rounded-lg'>Online</label>
                <RestaurantCard {...props}/>
            </div>
        );
    };
};
export default RestaurantCard;
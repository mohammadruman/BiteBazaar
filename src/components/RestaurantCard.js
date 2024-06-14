import {CDN_URL} from '../../utils/constants'

const RestaurantCard=(props)=>{
    const {resData} = props;
    const {name,cloudinaryImageId,cuisines,avgRating,deliveryTime,costForTwo} = resData;
    return (
        <div className="res-card" >
            <img className="res-logo"
             src={CDN_URL+resData.cloudinaryImageId} />
                <h3 className='card-name'>{name}</h3>   
                <h4 className='card-cuisine'>{cuisines.join(", ")}</h4>
                <div className='card-details'>
                <h4>{avgRating}</h4>
                <h4>{deliveryTime} mins</h4>
                <h4>{costForTwo } </h4>
                </div>

        </div>
    )
}
export default RestaurantCard;
import {useEffect,useState} from 'react'
import Shimmer from './Shimmer';
import {useParams} from 'react-router-dom'
import useRestaurantMenu from '../../utils/useRestaurantMenu';
import RestaurantCategory from './RestaurantCategory';

const RestaurantMenu = () => {
    const {resId} = useParams();
    const resInfo = useRestaurantMenu(resId); 
   
   
 if(resInfo===null) return <Shimmer/>;
  
 const {itemCards} = resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[3].card.card;
 
//  console.log(resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards);
 const categiries = resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter(c=>c.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
  
    

   
 
  return (
    <div className="text-center">
        <h1 className="font-bold my-6 text-2xl">{resInfo.cards[0].card.card.text}</h1>
         <p className='font-bold text-lg'>{resInfo.cards[2].card.card.info.cuisines.join(", ")} - 
            {resInfo.cards[2].card.card.info.costForTwoMessage}</p>

            {/* Categories for accorions*/}
       {categiries.map((category)=><RestaurantCategory data = {category?.card?.card}/>)}
      
    </div>
  )
}

export default RestaurantMenu;

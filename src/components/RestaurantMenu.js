import {useEffect,useState} from 'react'
import Shimmer from './Shimmer';
import {useParams} from 'react-router-dom'
import useRestaurantMenu from '../../utils/useRestaurantMenu';

const RestaurantMenu = () => {
    const {resId} = useParams();
    const resInfo = useRestaurantMenu(resId); 
   
   
 if(resInfo===null) return <Shimmer/>;
 const {itemCards} = resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[3].card.card;
 console.log(itemCards)
 
  return (
    <div className="menu">
        <h1 className='bg-green-200 font-bold text-center text-4xl'>{resInfo.cards[0].card.card.text}</h1>
         <p className='text-center'>{resInfo.cards[2].card.card.info.cuisines.join(", ")} - 
            {resInfo.cards[2].card.card.info.costForTwoMessage}</p>
        <div className="menu-items">
        <ul>
            {itemCards.map(item => (<li className='flex justify-between items-center py-2 border-b border-green-200 bg-green-200' key={item.card.info.id}>
                {item.card.info.name} - {"Rs."}
                 {item.card.info.price/100 || item.card.info.defaultPrice/100}
                 </li>
                 ))}
         
        </ul>
        </div>
      
    </div>
  )
}

export default RestaurantMenu;

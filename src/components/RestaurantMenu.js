import {useEffect,useState} from 'react'
import Shimmer from './Shimmer';
import {useParams} from 'react-router-dom'
import { MENU_API_URL, MENU_API_REMAINING_URL } from '../../utils/constants';
const RestaurantMenu = () => {
    const {resId} = useParams();
    console.log(resId)
    const [resInfo,setresInfo] = useState(null);

    useEffect(()=>{
        fetchMenu();
    },[])
    const fetchMenu= async()=>{
        const data = await fetch(MENU_API_URL+resId+MENU_API_REMAINING_URL);
        const json = await data.json();
       
        setresInfo(json.data);
 console.log(json);
       
    };
   
 if(resInfo===null) return <Shimmer/>;
 const {itemCards} = resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[3].card.card;
 console.log(itemCards)
 
  return (
    <div className="menu">
        <h1>{resInfo.cards[0].card.card.text}</h1>
         <p>{resInfo.cards[2].card.card.info.cuisines.join(", ")} - 
            {resInfo.cards[2].card.card.info.costForTwoMessage}</p>
        <div className="menu-items">
        <ul>
            {itemCards.map(item => (<li key={item.card.info.id}>
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

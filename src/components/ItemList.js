import {CDN_URL} from '../../utils/constants'
import { addItem } from '../../utils/cardslice';
import {useDispatch} from 'react-redux'
const ItemList = ({items})=>{
    const dispatch = useDispatch();
    const handleAddItem = (item)=>{
        //Dispatch an action to add the item to the cart
dispatch(addItem(item))
    }
    return (
            <div>
                {items.map((item)=>(
                    // console.log("item",item),
                    <div key={item.card.info.id} className="p-2 m-2 border-b-2 border-gray-200 text-left flex justify-between">
                        <div className='w-9/12'>
                        <div className="py-2">
                         <span> {item.card.info.name}  </span>
                          <span> - ₹ {item.card.info.price/100}  </span>
                          </div>
                           <p className="text-xs">{item.card.info.description}</p>
                           </div>
                          <div className='w-3/12 p-4'>
                          <div className='absolute  '>
                            <button className='bg-green-500 text-white p-2 mx-[96px] my-[100px] rounded-lg '
                            onClick={()=>handleAddItem(item)}
                                //on click of the button we have to dispatch an action to add the item to the cart
                            >Add +</button>
                            </div>
                          <img src={CDN_URL+item?.card?.info?.imageId} className='w-full'/>
             </div>
                        </div>
                       
        
                ))}
            </div>
           
        
    )
}
export default ItemList; 
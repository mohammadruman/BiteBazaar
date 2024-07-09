import ItemList from "./ItemList";
import {useState} from 'react';

const RestaurantCategory = ({data,showitems,setShowIndex})=>{
//     const [showitems,setshowitems]=useState(false);
    const handleclick=()=>{
setShowIndex();

 } 
  
    return(
        <div>
             <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
        <div className="flex justify-between cursor-pointer" onClick={handleclick}>

          <span className="font-bold text-lg">
            {data.title} ({data.itemCards.length})
          </span>
          <span>⬇️</span>
        </div>
       {showitems &&  <ItemList items={data.itemCards} />}
      </div>
        </div>
       
    )
}
export default RestaurantCategory;
import { useSelector } from "react-redux";
import ItemList from "./ItemList";
import { useDispatch } from "react-redux";

import {clearCart} from "../../utils/cardslice";
const Cart = ()=>{
    const cartItems = useSelector((store)=>store.cart.items);
    const dispatch = useDispatch();

    const handleClearCart = ()=>{
   dispatch(clearCart());
}
    return(
        <div className="text-center m-5 p-4">
           <h1 className="font-bold text-3xl">Cart Items</h1>
           <button className="bg-green-500 text-white p-2 mx-4 my-4 rounded-lg"
           onClick={handleClearCart}
           >Clear cart</button>
           <div className="w-6/12 m-auto">

            <ItemList items={cartItems} />
           </div>
        </div>
    )
    
}
export default Cart;
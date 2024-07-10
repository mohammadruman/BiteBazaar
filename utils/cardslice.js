import { createSlice } from "@reduxjs/toolkit";
//createSlice function will give us the slice of our store
const cardslice = createSlice({
    name: "card",
    initialState:{
        items:[]
    },
    //But when we are writing slice we create multiple reducers so this keyword is reducers 
    reducers:{
        //here we will write the reducer function corresponding to the action
        //we will write the reducer function to add the items to the items array
        // - we can add a item / card to the items array
        // - we can remove a item / card from the items array
        addItem:(state,action)=>{
            state.items.push(action.payload);
        },
        removeItem:(state,)=>{
            state.items.pop();

        },
        //original state  = {items:["pizza","burger","coke]}
        clearCart :(state,)=>{
            //redux toolkit will take care of the immutability
            //redux toolkit - either we can mutate the state or we can return a new state
            // state.items.length=0;
            return {
                items:[]  //this new object will be replace inside original state object new state object {items:[] }
            }
        }
    }
})
//action 
export const {addItem,removeItem,clearCart} = cardslice.actions;
//reducer
export default cardslice.reducer;
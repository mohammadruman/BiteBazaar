import { createSlice } from "@reduxjs/toolkit";
//createSlice function will give us the slice of our store
const cardslice = createSlice({
    name: "card",
    initialState:{
        items:[]
    },
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
        clearCart :(state,)=>{
            state.items.length=0;
        }
    }
})
//action 
export const {addItem,removeItem,clearCart} = cardslice.actions;
//reducer
export default cardslice.reducer;
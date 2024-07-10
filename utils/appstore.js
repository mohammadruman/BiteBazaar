import { configureStore } from "@reduxjs/toolkit";
import cardReducer from "./cardslice";
const appstore = configureStore({
reducer:{
    cart:cardReducer,
}
});
//this configureStore function will give us the store of our app store
 export default appstore;
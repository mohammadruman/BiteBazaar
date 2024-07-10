import { configureStore } from "@reduxjs/toolkit";
import cardReducer from "./cardslice";
const appstore = configureStore({
    //here the keyword is reducer because there is only one reducer in our app and this reducer can have multiple small reducers
reducer:{
    cart:cardReducer,
}
});
//this configureStore function will give us the store of our app store
 export default appstore;
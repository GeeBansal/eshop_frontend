
import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./item";

const store=configureStore({
reducer:cartSlice.reducer
})

export default store;
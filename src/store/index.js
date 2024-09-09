import { configureStore } from "@reduxjs/toolkit";
import trainerNameSlice from "./slices/trainerName.Slice";

export default configureStore({
    reducer:{
        trainerNameSlice
    }
})
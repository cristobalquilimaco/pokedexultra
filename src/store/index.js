import { configureStore } from "@reduxjs/toolkit";
import trainerName from "./slices/trainerName.Slice";

export default configureStore({
    reducer:{
        trainerName
    }
})


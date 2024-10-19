import { createSlice } from "@reduxjs/toolkit";

const trainerNameSlice = createSlice({
    name: "trainerName",
    initialState: {
        name: "",
        avatar: null
    },
    reducers: {
        setTrainerName: (state, action) => {
            state.name = action.payload;
        },
        setTrainerAvatar: (state, action) => {
            state.avatar = action.payload;
        }
    }
});

export const { setTrainerName, setTrainerAvatar } = trainerNameSlice.actions;
export default trainerNameSlice.reducer;

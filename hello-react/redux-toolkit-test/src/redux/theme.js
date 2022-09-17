import { createSlice } from '@reduxjs/toolkit'

const initialStateValue = "red";

export const themeSlice = createSlice({
    name: "theme",
    initialState: { value: initialStateValue },
    reducers: {
        changeColor: ( state, action ) => {
          console.log(state)
          console.log(action)  
          // state.value = action.payload
        },
    },
});

export const { changeColor } = themeSlice.actions;

export default themeSlice.reducer;
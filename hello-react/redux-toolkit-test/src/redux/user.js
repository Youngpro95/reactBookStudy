import { createSlice } from "@reduxjs/toolkit";

const initialStateVal = { name: "", age: 0, email: "" }

export const userSlice = createSlice({
  name: "user",
  initialState: { value: initialStateVal },
  reducers: {
    login: (state, action) => {
      console.log(state)
      console.log(action.payload)
      state.value = action.payload;
    },
    logout : (state) =>{
      console.log(state)
      state.value = initialStateVal
    }
  },
});

export const {login,logout} = userSlice.actions;

export default userSlice.reducer;
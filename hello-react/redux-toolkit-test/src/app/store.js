import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../redux/user'
import themeReducer from '../redux/theme'

export default configureStore({
  reducer: {
    user : userReducer,
    theme: themeReducer
  },
})
import { combineReducers, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import {createLogger} from "redux-logger"
import counterReducer from './slices/counterSlice'



const logger = createLogger()

// const rootReducer = combineReducers({
//   counter : counterReducer,
// })

const store = configureStore({
  reducer : counterReducer,
  middleware : (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})

export default store;
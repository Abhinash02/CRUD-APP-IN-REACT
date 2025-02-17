import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../redux/UserReducer';
const store= configureStore({
    //reducer
    reducer:{
        users:userReducer,
    }
})
export default store
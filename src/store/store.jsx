import {configureStore} from '@reduxjs/toolkit'
import headerSearchSlice from '../slices/headerSearchSlice';

const store = configureStore({
     reducer:{
        headerSearchSlice
     }
})

export default store;
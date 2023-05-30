import {configureStore} from "@reduxjs/toolkit";
import users from './slices/usersSlice'
import input from './slices/inputSlice'
import friends from './slices/friendsSlice'


export const store = configureStore({
    reducer : {
        users,
        input,
        friends
    }
})


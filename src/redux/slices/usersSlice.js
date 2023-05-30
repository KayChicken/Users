import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from 'axios'
import {useSelector} from "react-redux";


export const fetchUsers = createAsyncThunk("users/fetchUsers", async (params) => {


    const {str, currentPage} = params

    const {data} = await axios.get(`https://630b6a73ed18e8251652fc87.mockapi.io/users?page=${currentPage}&limit=5${ str ? "&search=" + str : "" }`)
    return data


})


const initialState = {
    users: [],
    status: 'loading'
}

const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {},
    extraReducers: {
        [fetchUsers.pending]: (state) => {
            state.users = []
            state.status = 'loading'
        },

        [fetchUsers.fulfilled]: (state, action) => {
            state.users = action.payload
            state.status = 'loaded'
        },

        [fetchUsers.rejected]: (state) => {
            state.users = []
            state.status = 'error'
        }

    }
})


export default usersSlice.reducer




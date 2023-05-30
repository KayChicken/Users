import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    friends : []
}



const friendsSlice = createSlice({
    name : "friends",
    initialState,
    reducers : {
        addFriend(state,action) {
            state.friends.push(action.payload)
        },
        removeFriend(state,action) {

            const newArray = state.friends.filter((id) => {return id !== action.payload})
            state.friends = newArray
        }
    }
})

export const {addFriend,removeFriend} = friendsSlice.actions
export default friendsSlice.reducer
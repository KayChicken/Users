import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    value : ''
}


const inputSlice = createSlice({
    name : 'input',
    initialState,
    reducers : {
        setValue(state,action) {
            state.value = action.payload
        }

    }
    }

)

export default inputSlice.reducer
export const {setValue} = inputSlice.actions

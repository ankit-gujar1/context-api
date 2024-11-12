import { createSlice } from "@reduxjs/toolkit";

const greetSlice = createSlice({
    name: 'greet',
    initialState: {
        msg: ''
    },
    reducers: {
        addGreetMsg: (state, action) => {
            state.msg = action.payload;
        }
    }
});

export const { addGreetMsg } = greetSlice.actions;
export const greetReducer = greetSlice.reducer;
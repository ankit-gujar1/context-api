import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        val: 0
    },
    reducers: {
        inc: (state) => {
            state.val++;
        },
        dec: (state) => {
            state.val--;
        },
        add: (state, action) => {
            state.val = state.val + Number(action.payload);
        },
        sub: (state, action) => {
            state.val = state.val - Number(action.payload);
        }
    }
});

export const { inc, dec, add, sub } = counterSlice.actions;
export const counterReducer = counterSlice.reducer;
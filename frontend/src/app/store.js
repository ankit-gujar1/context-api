import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "../features/counterSlice";
import { greetReducer } from "../features/greetSlice";
export const store = configureStore({
    reducer: {
        counter: counterReducer,
        greet: greetReducer,
    }
});
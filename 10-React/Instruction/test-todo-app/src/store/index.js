import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./slices/todo-slice";

export default configureStore({
    reducer:{
        todo: todoSlice,
    }
})
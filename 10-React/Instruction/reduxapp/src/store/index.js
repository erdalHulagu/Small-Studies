import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "./slices/theme-slice";

export default configureStore({
    reducer: {
        theme: themeSlice
    }
})
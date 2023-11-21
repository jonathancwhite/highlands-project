import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import productReducer from "./slices/productSlice.js";
import { productSlice } from "./slices/productSlice.js";
import { apiSlice } from "./slices/apiSlice.js";

const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        products: productReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: true,
});

export default store;

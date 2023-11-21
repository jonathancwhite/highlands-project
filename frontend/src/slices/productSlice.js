import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import productService from "./productService";

const initialState = {
    products: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: "",
};

export const createPickup = createAsyncThunk(
    "products/create",
    async (productData, thunkAPI) => {
        try {
            const result = await productService.createProduct(productData);
            return result;
        } catch (error) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();
            return thunkAPI.rejectWithValue(message);
        }
    }
);

export const getProducts = createAsyncThunk(
    "products/",
    async (_, thunkAPI) => {
        try {
            return await productService.getProducts();
        } catch (error) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();
            return thunkAPI.rejectWithValue(message);
        }
    }
);

export const productSlice = createSlice({
    name: "pickup",
    initialState: initialState,
    reducers: {
        reset: (state) => initialState,
    },
    extraReducers: (builder) => {
        builder
            .addCase(createPickup.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(createPickup.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.Products.push(action.payload);
            })
            .addCase(createPickup.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
            })
            .addCase(getProducts.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getProducts.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.Products = action.payload;
            })
            .addCase(getProducts.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
            });
    },
});

export const { reset } = productSlice.actions;
export default productSlice.reducer;

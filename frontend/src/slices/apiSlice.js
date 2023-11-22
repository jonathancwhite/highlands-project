import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({ baseUrl: "http://localhost:8000/api" });

export const apiSlice = createApi({
    reducerPath: "apiSlice",
    baseQuery: baseQuery,
    tagTypes: ["Product"],
    endpoints: (builder) => ({
        createProduct: builder.mutation({
            query: (newProduct) => ({
                url: "/products/",
                method: "POST",
                body: newProduct,
            }),
        }),
        getAllProducts: builder.query({
            query: () => "/products/",
        }),
        getHelloMessage: builder.query({
            query: () => "/products/hello",
        }),
    }),
});

export const {
    useCreateProductMutation,
    useGetAllProductsQuery,
    useGetHelloMessageQuery,
} = apiSlice;

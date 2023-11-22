import React from "react";
import GeneralLayout from "../layouts/GeneralLayout";
import ActiveProducts from "./ActiveProducts";
import { useGetAllProductsQuery } from "../slices/apiSlice";

const ViewProducts = () => {
    const {
        data: products,
        isLoading,
        isError,
        error,
    } = useGetAllProductsQuery();

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error: {error.message}</div>;

    return (
        <GeneralLayout>
            <div className="container">
                <ActiveProducts products={products} />
            </div>
        </GeneralLayout>
    );
};

export default ViewProducts;

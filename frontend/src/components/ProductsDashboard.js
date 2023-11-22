import React, { useState } from "react";
import GeneralLayout from "../layouts/GeneralLayout";
import ActiveProducts from "./ActiveProducts";
import { useGetAllProductsQuery } from "../slices/apiSlice";
import { TextField, Box, Grid, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    color: "#333",
    padding: "1rem",
    margin: "1rem 0 2rem 0",
}));

const ViewProducts = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const {
        data: products,
        isLoading,
        isError,
        error,
    } = useGetAllProductsQuery();

    const filterProducts = (product) => {
        const lowerCaseSearchTerm = searchTerm.toLowerCase();

        const matchesNameOrUPC =
            product.name.toLowerCase().includes(lowerCaseSearchTerm) ||
            product.upc.toLowerCase().includes(lowerCaseSearchTerm);

        const matchesProperties = product.properties.some(
            (prop) =>
                prop.property.name
                    .toLowerCase()
                    .includes(lowerCaseSearchTerm) ||
                prop.value.toLowerCase().includes(lowerCaseSearchTerm)
        );

        return matchesNameOrUPC || matchesProperties;
    };
    const filteredProducts =
        searchTerm && products ? products.filter(filterProducts) : products;

    if (isLoading)
        return (
            <div class="lds-roller">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        );
    if (isError) return <div>Error: {error.message}</div>;

    return (
        <GeneralLayout>
            <div className="productListing">
                <div className="container">
                    <Box>
                        <Item elevation={4}>
                            <TextField
                                type="text"
                                placeholder="Search products..."
                                value={searchTerm}
                                margin="normal"
                                fullWidth
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />

                            <Grid item xs={5} sm={5}>
                                <ActiveProducts products={filteredProducts} />
                            </Grid>
                        </Item>
                    </Box>
                </div>
            </div>
        </GeneralLayout>
    );
};

export default ViewProducts;

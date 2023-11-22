import React from "react";

const ActiveProducts = ({ products }) => {
    return (
        <>
            {products.map((product) => (
                <div className="product" key={product._id}>
                    <h4>Name: {product.name}</h4>
                    <h6>UPC: {product.upc}</h6>
                    <h6>Available: {product.available_on}</h6>
                    <hr />
                </div>
            ))}
        </>
    );
};

export default ActiveProducts;

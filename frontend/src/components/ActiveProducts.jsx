import React from "react";

const ActiveProducts = ({ products }) => {
    const formatDate = (dateString) => {
        const options = { year: "numeric", month: "2-digit", day: "2-digit" };
        return new Date(dateString).toLocaleDateString("en-US", options);
    };

    return (
        <>
            {products.map((product) => (
                <div className="product" key={product._id}>
                    <h4>Name: {product.name}</h4>
                    <h6>UPC: {product.upc}</h6>
                    <h6>Available: {formatDate(product.available_on)}</h6>
                    {/* Conditionally render properties */}
                    {product.properties && product.properties.length > 0 && (
                        <div className="properties">
                            <h6>Properties:&nbsp;</h6>
                            <p className="properties__list">
                                {product.properties.map((item, index) => (
                                    <span key={index}>
                                        {item.property.name}: {item.value}
                                        {index < product.properties.length - 1
                                            ? ", "
                                            : ""}
                                    </span>
                                ))}
                            </p>
                        </div>
                    )}
                    <hr />
                </div>
            ))}
        </>
    );
};

export default ActiveProducts;

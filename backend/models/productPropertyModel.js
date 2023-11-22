import mongoose from "mongoose";

const productPropertySchema = new mongoose.Schema({
    value: { type: String, required: true, maxLength: 255 },
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true,
    },
    property: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Property",
        required: true,
    },
});

const ProductProperty = mongoose.model(
    "ProductProperty",
    productPropertySchema
);

export default ProductProperty;

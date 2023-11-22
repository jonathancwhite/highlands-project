import asyncHandler from "express-async-handler";
import Product from "../models/productModel.js";
import mongoose from "mongoose";
import Property from "../models/propertyModel.js";
import ProductProperty from "../models/productPropertyModel.js";

const ObjectId = mongoose.Types.ObjectId;

/**
 * @desc   Create product
 * @route  POST /api/product
 * @access PUBLIC
 */
const createProduct = asyncHandler(async (req, res) => {
    if (!req.body.name) {
        res.status(400);
        throw new Error("Please add a product name");
    } else if (!req.body.upc) {
        res.status(400);
        throw new Error("Please add UPC");
    } else if (!req.body.available_on) {
        res.status(400);
        throw new Error("Please add an available date");
    }

    const product = await Product.create({
        name: req.body.name,
        upc: req.body.upc,
        available_on: req.body.available_on,
    });

    if (req.body.properties && Array.isArray(req.body.properties)) {
        for (const prop of req.body.properties) {
            let property = await Property.findOne({ name: prop.name });
            if (!property) {
                property = await Property.create({ name: prop.name });
            }

            // Create ProductProperty linking the product and property
            await ProductProperty.create({
                value: prop.value,
                product: product._id,
                property: property._id,
            });
        }
    }

    res.status(200).json(product);
});

/**
 * @desc   Get all products
 * @route  GET /api/products
 * @access PUBLIC
 */
const getAllProducts = asyncHandler(async (req, res) => {
    const products = await Product.find({});

    res.status(200).json(products);
});

export { createProduct, getAllProducts };

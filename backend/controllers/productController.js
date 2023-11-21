import asyncHandler from "express-async-handler";
import Product from "../models/productModel";
import mongoose from "mongoose";

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

    /**
     * TODO: handle Property & ProductProperty
     */

    // Creates product in MongoDB
    const product = await Product.create({
        name: req.body.name,
        upc: req.body.upc,
        available_on: req.body.available_on,
    });

    res.status(200).json(pickup);
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

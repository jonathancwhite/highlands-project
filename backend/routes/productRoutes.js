import express from "express";
const router = express.Router();

import {
    createProduct,
    getAllProducts,
} from "../controllers/productController";

router.post("/products", createProduct);
router.get("/products", getAllProducts);

router.get("/hello", (req, res) => {
    res.status(200).json({
        message: "Hello! This is only for test purposes",
    });
});

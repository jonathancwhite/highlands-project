import express from "express";
const router = express.Router();

import {
    createProduct,
    getAllProducts,
} from "../controllers/productController.js";

router.post("/", createProduct);
router.get("/", getAllProducts);

router.get("/hello", (req, res) => {
    res.status(200).json({
        message: "Hello! This is only for test purposes",
    });
});

export default router;

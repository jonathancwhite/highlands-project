import axios from "axios";

const PRODUCT_URL = "/api/products/";

export const createProduct = async (productData) => {
    const config = {
        headers: {},
    };
    const response = await axios.post(PRODUCT_URL, productData, config);
    return response.data;
};

export const getProducts = async () => {
    const config = {
        headers: {},
    };
    const response = await axios.get(PRODUCT_URL, config);
    return response.data;
};

const productService = {
    createProduct,
    getProducts,
};

export default productService;

import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true, maxLength: 1024 },
    upc: {
        type: String,
        required: true,
        unique: true,
        match: /^[0-9]{12,13}$/, // Regex to ensure only numeric characters
    },
    available_on: {
        type: Date,
        required: true,
        validate: [
            (date) => date > new Date(),
            "available_on must be in the future",
        ],
    },
});

module.exports = mongoose.model("Product", productSchema);

import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true, maxLength: 1024 },
    upc: {
        type: String,
        required: true,
        unique: true,
        match: /^(?:\d{10}|\d{12}|\d{13})$/, // thank God for ChatGPT and regex creation ;)
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

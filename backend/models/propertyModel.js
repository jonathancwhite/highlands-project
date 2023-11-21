import mongoose from "mongoose";

const propertySchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true, maxLength: 255 },
});

module.exports = mongoose.model("Property", propertySchema);

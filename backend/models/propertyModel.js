import mongoose from "mongoose";

const propertySchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true, maxLength: 255 },
});

const Property = mongoose.model("Property", propertySchema);

export default Property;

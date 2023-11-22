import express from "express";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();
import colors from "colors";
import connectDB from "./config/db.js";
import path from "path";
import productRoutes from "./routes/productRoutes.js";

const port = process.env.PORT || 5000;

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
    cors({
        origin: "http://localhost:3000",
        methods: ["GET", "POST", "PUT", "DELETE"],
        credentials: false,
    })
);

app.use("/api/products", productRoutes);
// app.use("/api/users", userRoutes);

const __dirname = path.resolve();

// Serve frontend
if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "/frontend/dist")));

    app.get("*", (req, res) =>
        res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"))
    );
} else {
    app.get("/", (req, res) => {
        res.send("API is running....");
    });
}

app.listen(port, () => console.log(`Server has started on port ${port}`));
